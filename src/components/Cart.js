import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

    // Inicialización de gtag
    useEffect(() => {
        // Solo cargar en producción o si no está definido
        if (!window.gtag) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', 'AW-717135166');
        }
    }, []);

    const handleSendToWhatsApp = () => {
        const orderDetails = cart.map(item => 
            `${item.name} - $${item.price}${item.quantity ? ` (${item.quantity} unidades)` : ''}`
        ).join('\n');
        
        const message = `Hola Darom SA, estoy interesado en estos productos:\n\nPedido:\n${orderDetails}\n\nTotal: $${totalPrice}`;
        const phone = '5492215739000';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Track conversion con detalles del pedido
        trackConversion('WhatsApp_Order', 'Complete_Order', totalPrice, {
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity || 1
            }))
        });
        
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const trackConversion = (eventCategory, eventLabel, value = 1.0, params = {}) => {
        try {
            if (typeof window.gtag === 'function') {
                // Evento para Google Ads
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                    'value': value > 0 ? value : 1.0,
                    'currency': 'ARS',
                    'event_category': eventCategory,
                    'event_label': eventLabel,
                    'transaction_id': `CART_${Date.now()}`,
                    ...params
                });

                // Evento para GA4 con más detalles
                window.gtag('event', 'purchase', {
                    'currency': 'ARS',
                    'value': value,
                    'items': cart.map(item => ({
                        item_id: item.id,
                        item_name: item.name,
                        price: item.price,
                        quantity: item.quantity || 1
                    }))
                });
            }
        } catch (e) {
            console.error('Error tracking conversion:', e);
        }
    };

    return (
        <Container className="mt-4">
            <Helmet>
                <title>Carrito de Compras - Darom SA</title>
                <meta name="description" content="Finaliza tu compra de materiales de construcción y hormigón elaborado con Darom SA" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Carrito de Compras",
                        "description": "Página de carrito de compras para materiales de construcción",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Darom SA"
                        }
                    })}
                </script>
            </Helmet>

            <Row>
                <Col>
                    <h1>Carrito</h1>
                    {cart.length > 0 ? (
                        <>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio Unitario</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(item => {
                                        const subtotal = item.price * (item.quantity || 1);
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td>{item.quantity || 1}</td>
                                                <td>${subtotal}</td>
                                                <td>
                                                    <Button 
                                                        variant="danger" 
                                                        onClick={() => {
                                                            removeFromCart(item);
                                                            trackConversion('Cart_Interaction', 'Remove_Product', 0, {
                                                                item_id: item.id,
                                                                item_name: item.name
                                                            });
                                                        }}
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                            <h3>Total: ${totalPrice}</h3>
                            <Button 
                                variant="success" 
                                onClick={handleSendToWhatsApp} 
                                className="d-flex align-items-center whatsapp-btn"
                            >
                                <FaWhatsapp size={20} className="me-2" /> Enviar Pedido por WhatsApp
                            </Button>
                        </>
                    ) : (
                        <p>El carrito está vacío</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;