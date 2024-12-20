import React, { useContext } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp } from 'react-icons/fa';
import Contact from './Contact';

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const handleSendToWhatsApp = () => {
        const orderDetails = cart.map(item => `${item.name} - $${item.price}`).join('\n');
        const message = `Pedido:\n${orderDetails}\n\nTotal: $${totalPrice}`;
        const phone = '5492215739000'; // Número de WhatsApp del vendedor
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        // Llamar a la función de seguimiento de conversión
        gtag_report_conversion();

        window.open(url, '_blank');
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Carrito</h1>
                    {cart.length > 0 ? (
                        <>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => removeFromCart(item)}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <h3>Total: ${totalPrice}</h3>
                            <Button variant="success" onClick={handleSendToWhatsApp} className="d-flex align-items-center">
                                <FaWhatsapp size={20} className="me-2" /> Enviar Pedido por WhatsApp
                            </Button>
                        </>
                    ) : (
                        <p>El carrito está vacío</p>
                    )}
                </Col>
            </Row>
            <Contact showContact={true} />
        </Container>
    );
}

// Definición de la función de seguimiento de conversión
window.gtag_report_conversion = function(url) {
    var callback = function () {
        if (typeof(url) !== 'undefined') {
            window.location = url;
        }
    };
    window.gtag('event', 'conversion', {
        'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
        'value': 1.0,
        'currency': 'ARS',
        'event_callback': callback
    });
    return false;
};

export default Cart;