import React, { useContext, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);
    const topRef = useRef(null);

    // Scroll al inicio al cargar
    useEffect(() => {
        if (topRef.current) {
            window.scrollTo({
                top: topRef.current.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }, []);

    const handleSendToWhatsApp = () => {
        const orderDetails = cart.map(item => 
            `${item.name} - $${item.price}${item.quantity ? ` (${item.quantity} unidades)` : ''}`
        ).join('\n');
        
        const message = `Hola Darom SA, estoy interesado en estos productos:\n\nPedido:\n${orderDetails}\n\nTotal: $${totalPrice}`;
        const phone = '5492215739000';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Container className="mt-4 cart-container" ref={topRef}>
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
                        <div className="cart-table">
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
                            <h3 className="mt-4">Total: ${totalPrice}</h3>
                            <Button 
                                variant="success" 
                                onClick={handleSendToWhatsApp} 
                                className="d-flex align-items-center whatsapp-btn mt-3"
                            >
                                <FaWhatsapp size={20} className="me-2" /> Enviar Pedido por WhatsApp
                            </Button>
                        </div>
                    ) : (
                        <p>El carrito está vacío</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;