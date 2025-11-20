import React, { useContext, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button, Table, Form, Card, Alert } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp, FaTrash, FaPlus, FaMinus, FaEdit } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Cart.css';

function Cart() {
    const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
    const [observations, setObservations] = useState('');
    const [quantities, setQuantities] = useState({});
    const topRef = useRef(null);

    // Inicializar cantidades desde el carrito
    useEffect(() => {
        const initialQuantities = {};
        cart.forEach(item => {
            initialQuantities[item.id] = item.quantity || 1;
        });
        setQuantities(initialQuantities);
    }, [cart]);

    // Scroll al inicio al cargar
    useEffect(() => {
        if (topRef.current) {
            window.scrollTo({
                top: topRef.current.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    }, []);

    const handleQuantityChange = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        setQuantities(prev => ({
            ...prev,
            [itemId]: newQuantity
        }));
        updateQuantity(itemId, newQuantity);
    };

    const incrementQuantity = (itemId) => {
        const currentQty = quantities[itemId] || 1;
        handleQuantityChange(itemId, currentQty + 1);
    };

    const decrementQuantity = (itemId) => {
        const currentQty = quantities[itemId] || 1;
        if (currentQty > 1) {
            handleQuantityChange(itemId, currentQty - 1);
        }
    };

    const handleSendToWhatsApp = () => {
        const orderDetails = cart.map(item => {
            const quantity = quantities[item.id] || 1;
            return `• ${item.name} - Cantidad: ${quantity}`;
        }).join('\n');
        
        const message = `¡Hola Darom SA! 👷‍♂️

Estoy interesado en solicitar cotización para los siguientes productos:

📋 **LISTA DE PRODUCTOS:**
${orderDetails}

${observations ? `📝 **OBSERVACIONES:**\n${observations}\n\n` : ''}
Por favor, necesito que me envíen:
✅ Precios actualizados
✅ Disponibilidad de stock
✅ Condiciones de pago y entrega

¡Quedo atento a su respuesta! 

Gracias.`;
        
        const phone = '5492215739000';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const totalItems = cart.reduce((acc, item) => acc + (quantities[item.id] || 1), 0);

    return (
        <Container className="mt-4 cart-container" ref={topRef}>
            <Helmet>
                <title>Carrito de Cotización - Darom SA</title>
                <meta name="description" content="Solicita cotización de materiales de construcción y hormigón elaborado con Darom SA" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Carrito de Cotización",
                        "description": "Solicita cotización de materiales de construcción",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Darom SA"
                        }
                    })}
                </script>
            </Helmet>

            <Row className="justify-content-center">
                <Col lg={10}>
                    <div className="text-center mb-4">
                        <h1 className="display-5 fw-bold text-danger">Solicitud de Cotización</h1>
                        <p className="lead text-muted">
                            Agrega los productos que necesitas y te enviaremos los precios actualizados por WhatsApp
                        </p>
                    </div>

                    {cart.length > 0 ? (
                        <div className="cart-content">
                            {/* Resumen del Pedido */}
                            <Card className="mb-4 border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Row className="align-items-center">
                                        <Col md={8}>
                                            <h5 className="fw-bold mb-1">Resumen de tu solicitud</h5>
                                            <p className="text-muted mb-0">
                                                {totalItems} producto{totalItems !== 1 ? 's' : ''} para cotizar
                                            </p>
                                        </Col>
                                        <Col md={4} className="text-end">
                                            <Button 
                                                variant="outline-danger" 
                                                size="sm"
                                                onClick={() => {
                                                    if (window.confirm('¿Estás seguro de que quieres eliminar todos los productos?')) {
                                                        clearCart();
                                                    }
                                                }}
                                            >
                                                <FaTrash className="me-2" />
                                                Vaciar Lista
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>

                            {/* Tabla de Productos */}
                            <div className="cart-table mb-4">
                                <Table responsive className="align-middle">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Producto</th>
                                            <th className="text-center">Cantidad</th>
                                            <th className="text-end">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(item => {
                                            const quantity = quantities[item.id] || 1;
                                            return (
                                                <tr key={item.id} className="cart-item-row">
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            {item.img && (
                                                                <img 
                                                                    src={item.img} 
                                                                    alt={item.name}
                                                                    className="cart-item-image me-3"
                                                                />
                                                            )}
                                                            <div>
                                                                <h6 className="mb-1 fw-bold">{item.name}</h6>
                                                                <small className="text-muted">Código: {item.id}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <Button
                                                                variant="outline-secondary"
                                                                size="sm"
                                                                onClick={() => decrementQuantity(item.id)}
                                                                disabled={quantity <= 1}
                                                                className="quantity-btn"
                                                            >
                                                                <FaMinus />
                                                            </Button>
                                                            <Form.Control
                                                                type="number"
                                                                value={quantity}
                                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                                                min="1"
                                                                className="quantity-input mx-2 text-center"
                                                                style={{ width: '80px' }}
                                                            />
                                                            <Button
                                                                variant="outline-secondary"
                                                                size="sm"
                                                                onClick={() => incrementQuantity(item.id)}
                                                                className="quantity-btn"
                                                            >
                                                                <FaPlus />
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <Button
                                                            variant="outline-danger"
                                                            size="sm"
                                                            onClick={() => {
                                                                if (window.confirm('¿Eliminar este producto de la lista?')) {
                                                                    removeFromCart(item);
                                                                }
                                                            }}
                                                            className="ms-2"
                                                        >
                                                            <FaTrash />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </div>

                            {/* Sección de Observaciones */}
                            <Card className="mb-4 border-0 shadow-sm">
                                <Card.Header className="bg-light">
                                    <h6 className="mb-0 fw-bold">
                                        <FaEdit className="me-2 text-danger" />
                                        Observaciones Adicionales
                                    </h6>
                                </Card.Header>
                                <Card.Body>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">
                                            ¿Alguna especificación especial para tu cotización?
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            placeholder="Ejemplo: Necesito precios para compra mayorista, requerimiento urgente, especificaciones técnicas particulares, etc."
                                            value={observations}
                                            onChange={(e) => setObservations(e.target.value)}
                                            className="observation-textarea"
                                        />
                                        <Form.Text className="text-muted">
                                            Estas observaciones se incluirán en tu mensaje de WhatsApp
                                        </Form.Text>
                                    </Form.Group>
                                </Card.Body>
                            </Card>

                            {/* Botón de WhatsApp */}
                            <Card className="border-0 shadow-lg whatsapp-card">
                                <Card.Body className="text-center p-4">
                                    <div className="mb-3">
                                        <FaWhatsapp size={40} className="text-success mb-2" />
                                        <h5 className="fw-bold mb-2">¡Listo para solicitar tu cotización!</h5>
                                        <p className="text-muted mb-3">
                                            Al hacer clic en el botón, se abrirá WhatsApp con todos los productos listos para enviar
                                        </p>
                                    </div>
                                    <Button 
                                        variant="success" 
                                        size="lg"
                                        onClick={handleSendToWhatsApp} 
                                        className="whatsapp-btn fw-bold px-5 py-3"
                                    >
                                        <FaWhatsapp size={24} className="me-2" /> 
                                        Solicitar Cotización por WhatsApp
                                    </Button>
                                    <div className="mt-3">
                                        <small className="text-muted">
                                            📞 También puedes contactarnos al: <strong>+54 221 573-9000</strong>
                                        </small>
                                    </div>
                                </Card.Body>
                            </Card>

                            {/* Información Adicional */}
                            <Alert variant="info" className="mt-4">
                                <h6 className="alert-heading fw-bold">💡 ¿Qué pasa después?</h6>
                                <ul className="mb-0">
                                    <li>Recibirás los precios actualizados por WhatsApp</li>
                                    <li>Te asesoraremos sobre disponibilidad y tiempos de entrega</li>
                                    <li>Podrás consultar por condiciones especiales para mayoristas</li>
                                    <li>Nuestro equipo técnico resolverá todas tus dudas</li>
                                </ul>
                            </Alert>
                        </div>
                    ) : (
                        <Card className="text-center py-5 border-0 shadow-sm">
                            <Card.Body>
                                <div className="mb-4">
                                    <div className="empty-cart-icon mb-3">🛒</div>
                                    <h4 className="fw-bold text-muted mb-3">Tu lista de cotización está vacía</h4>
                                    <p className="text-muted mb-4">
                                        Agrega productos desde nuestra sección de materiales para solicitar una cotización
                                    </p>
                                    <Button 
                                        variant="danger" 
                                        size="lg"
                                        href="/materiales"
                                        className="fw-bold px-4"
                                    >
                                        Explorar Productos
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;