import React, { useContext, useEffect, useRef, useState, useMemo } from 'react';
import { Container, Row, Col, Button, Table, Form, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importante para la navegación interna
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp, FaTrash, FaPlus, FaMinus, FaEdit } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Cart.css';

// --------------------------------------------------------
// 1. SUB-COMPONENTE: FILA DEL CARRITO (Memorizado para rendimiento)
// --------------------------------------------------------
const CartItemRow = React.memo(({ item, quantity, onIncrement, onDecrement, onChange, onRemove }) => {
    return (
        <tr className="cart-item-row">
            <td>
                <div className="d-flex align-items-center">
                    {item.img && (
                        <img 
                            src={item.img} 
                            alt={item.name}
                            className="cart-item-image me-3"
                            loading="lazy"
                            onError={(e) => { e.target.src = '/placeholder-product.jpg'; }}
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
                        onClick={() => onDecrement(item.id)}
                        disabled={quantity <= 1}
                        className="quantity-btn"
                        aria-label="Disminuir cantidad"
                    >
                        <FaMinus />
                    </Button>
                    <Form.Control
                        type="number"
                        value={quantity}
                        onChange={(e) => onChange(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                        className="quantity-input mx-2 text-center"
                        style={{ width: '80px' }}
                        aria-label="Cantidad del producto"
                    />
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => onIncrement(item.id)}
                        className="quantity-btn"
                        aria-label="Aumentar cantidad"
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
                            onRemove(item);
                        }
                    }}
                    className="ms-2"
                    aria-label="Eliminar producto"
                >
                    <FaTrash />
                </Button>
            </td>
        </tr>
    );
});

// --------------------------------------------------------
// 2. COMPONENTE PRINCIPAL DEL CARRITO
// --------------------------------------------------------
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
        
        const message = `¡Hola Darom SA! 👷‍♂️\n\nEstoy interesado en solicitar cotización para los siguientes productos:\n\n📋 **LISTA DE PRODUCTOS:**\n${orderDetails}\n\n${observations ? `📝 **OBSERVACIONES:**\n${observations}\n\n` : ''}Por favor, necesito que me envíen:\n✅ Precios actualizados\n✅ Disponibilidad de stock\n✅ Condiciones de pago y entrega\n\n¡Quedo atento a su respuesta!\n\nGracias.`;
        
        const phone = '5492215739000';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    // Calculamos el total de items con useMemo para que no recalcule en cada escritura del input de observaciones
    const totalItems = useMemo(() => {
        return cart.reduce((acc, item) => acc + (quantities[item.id] || 1), 0);
    }, [cart, quantities]);

    return (
        <Container className="mt-4 cart-container" ref={topRef}>
            <Helmet>
                <title>Carrito de Cotización - Darom SA</title>
                <meta name="description" content="Solicita cotización de materiales de construcción y hormigón elaborado con Darom SA" />
                <meta name="robots" content="noindex, nofollow" /> {/* Los carritos no se suelen indexar en Google */}
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
                        <div className="cart-content animate__animated animate__fadeIn">
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
                                        <Col md={4} className="text-end mt-3 mt-md-0">
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
                            <div className="cart-table mb-4 shadow-sm rounded-3 overflow-hidden">
                                <Table responsive className="align-middle mb-0 bg-white">
                                    <thead className="table-dark">
                                        <tr>
                                            <th className="py-3 px-4">Producto</th>
                                            <th className="py-3 text-center">Cantidad</th>
                                            <th className="py-3 px-4 text-end">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(item => (
                                            <CartItemRow 
                                                key={item.id}
                                                item={item}
                                                quantity={quantities[item.id] || 1}
                                                onIncrement={incrementQuantity}
                                                onDecrement={decrementQuantity}
                                                onChange={handleQuantityChange}
                                                onRemove={removeFromCart}
                                            />
                                        ))}
                                    </tbody>
                                </Table>
                            </div>

                            {/* Sección de Observaciones */}
                            <Card className="mb-4 border-0 shadow-sm">
                                <Card.Header className="bg-light py-3">
                                    <h6 className="mb-0 fw-bold">
                                        <FaEdit className="me-2 text-danger" />
                                        Observaciones Adicionales
                                    </h6>
                                </Card.Header>
                                <Card.Body className="p-4">
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
                                            className="observation-textarea border-secondary-subtle"
                                        />
                                        <Form.Text className="text-muted mt-2 d-block">
                                            Estas observaciones se incluirán en tu mensaje de WhatsApp
                                        </Form.Text>
                                    </Form.Group>
                                </Card.Body>
                            </Card>

                            {/* Botón de WhatsApp */}
                            <Card className="border-0 shadow-lg whatsapp-card bg-light">
                                <Card.Body className="text-center p-5">
                                    <div className="mb-4">
                                        <FaWhatsapp size={50} className="text-success mb-3" />
                                        <h4 className="fw-bold mb-2 text-dark">¡Listo para solicitar tu cotización!</h4>
                                        <p className="text-muted mx-auto" style={{maxWidth: '600px'}}>
                                            Al hacer clic en el botón, se abrirá WhatsApp con todos los productos listos para que nos los envíes.
                                        </p>
                                    </div>
                                    <Button 
                                        variant="success" 
                                        size="lg"
                                        onClick={handleSendToWhatsApp} 
                                        className="whatsapp-btn fw-bold px-5 py-3 shadow"
                                    >
                                        <FaWhatsapp size={24} className="me-2" /> 
                                        Solicitar Cotización por WhatsApp
                                    </Button>
                                    <div className="mt-4">
                                        <p className="text-muted small mb-0">
                                            📞 También puedes contactarnos al: <strong className="text-dark">+54 221 573-9000</strong>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>

                            {/* Información Adicional */}
                            <Alert variant="secondary" className="mt-4 border-0 shadow-sm bg-white">
                                <h6 className="alert-heading fw-bold text-dark mb-3">💡 ¿Qué pasa después?</h6>
                                <ul className="mb-0 text-muted ps-3">
                                    <li className="mb-2">Recibirás los precios actualizados por WhatsApp.</li>
                                    <li className="mb-2">Te asesoraremos sobre disponibilidad y tiempos de entrega.</li>
                                    <li className="mb-2">Podrás consultar por condiciones especiales para mayoristas.</li>
                                    <li>Nuestro equipo técnico resolverá todas tus dudas.</li>
                                </ul>
                            </Alert>
                        </div>
                    ) : (
                        <Card className="text-center py-5 border-0 shadow-sm animate__animated animate__fadeIn">
                            <Card.Body className="py-5">
                                <div className="mb-4">
                                    <div className="empty-cart-icon mb-4" style={{fontSize: '4rem'}}>🛒</div>
                                    <h3 className="fw-bold text-dark mb-3">Tu lista de cotización está vacía</h3>
                                    <p className="text-muted mb-4 mx-auto" style={{maxWidth: '500px'}}>
                                        Agrega productos desde nuestra sección de materiales para solicitar una cotización formal.
                                    </p>
                                    {/* CORRECCIÓN: Botón "Explorar Productos" ahora usa Link de React Router */}
                                    <Link to="/services/materiales" className="btn btn-danger btn-lg fw-bold px-5 py-3 shadow-sm">
                                        Explorar Catálogo de Materiales
                                    </Link>
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