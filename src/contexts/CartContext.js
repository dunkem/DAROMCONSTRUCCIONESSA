import React, { createContext, useState, useCallback, useEffect, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 1. Inicializamos el estado leyendo el Local Storage por si el usuario ya tenía cosas guardadas
    const [cart, setCart] = useState(() => {
        try {
            const localData = localStorage.getItem('darom_cart');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Error leyendo el carrito del LocalStorage", error);
            return [];
        }
    });

    // 2. Cada vez que el carrito cambia, lo guardamos automáticamente en el Local Storage
    useEffect(() => {
        localStorage.setItem('darom_cart', JSON.stringify(cart));
    }, [cart]);

    // Añadir al carrito con manejo de cantidades
    const addToCart = useCallback((item) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            
            if (existingItemIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: (updatedCart[existingItemIndex].quantity || 1) + (item.quantity || 1)
                };
                return updatedCart;
            } else {
                return [...prevCart, { 
                    ...item, 
                    quantity: item.quantity || 1 
                }];
            }
        });
    }, []);

    // Eliminar del carrito
    const removeFromCart = useCallback((item) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
    }, []);

    // Actualizar cantidad de un item específico
    const updateQuantity = useCallback((itemId, newQuantity) => {
        setCart(prevCart => {
            const quantity = Math.max(1, parseInt(newQuantity) || 1);
            return prevCart.map(item => 
                item.id === itemId 
                    ? { ...item, quantity } 
                    : item
            );
        });
    }, []);

    // Limpiar todo el carrito
    const clearCart = useCallback(() => {
        setCart([]);
    }, []);

    // 3. Memorizamos el valor del contexto y los cálculos pesados para evitar re-renderizados innecesarios en la app
    const contextValue = useMemo(() => {
        const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
        const totalPrice = cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

        return {
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice
        };
    }, [cart, addToCart, removeFromCart, updateQuantity, clearCart]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};