import React, { createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Añadir al carrito con manejo de cantidades
    const addToCart = useCallback((item) => {
        setCart(prevCart => {
            // Verificar si el item ya está en el carrito
            const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            
            if (existingItemIndex >= 0) {
                // Si existe, actualizar la cantidad
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: (updatedCart[existingItemIndex].quantity || 1) + (item.quantity || 1)
                };
                return updatedCart;
            } else {
                // Si no existe, añadirlo al carrito
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

    // Calcular el total de items en el carrito
    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    // Calcular el precio total
    const totalPrice = cart.reduce(
        (total, item) => total + (item.price || 0) * (item.quantity || 1), 
        0
    );

    return (
        <CartContext.Provider 
            value={{ 
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};