import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setSubmitted(true);
        }
        setValidated(true);
    };

    return (
        <Container className="contact-container mt-5">
            <Row className="contact-background mb-4">
                <Col md={6} className="p-4">
                    <h2 className="contact-title">CONTACTANOS</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" placeholder="Ingresa tu nombre" />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa tu nombre.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Ingrese su email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un email válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Escriba su mensaje" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un mensaje.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="contact-submit-button mt-3">
                            Enviar
                        </Button>
                        {submitted && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                    </Form>
                </Col>
                <Col md={6} className="contact-info p-4 text-center">
                    <h5>INFORMACIÓN</h5>
                    <p><i className="fas fa-phone"></i> Teléfono: <a href="tel:08103334567">0810-333-4567</a></p>
                    <p><i className="fas fa-envelope"></i> Email: <a href="mailto:ventas@darom.com">ventas@darom.com</a>, <a href="mailto:proveedores@darom.com">proveedores@darom.com</a>, <a href="mailto:pagos@daromsa">pagos@daromsa</a></p>
                    <p><i className="fas fa-map-marker-alt"></i> Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</p>
                    <iframe
                        title="Ubicación Oficina"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13104.533593321816!2d-58.1568298!3d-34.8025856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e64e395cdcd1%3A0xc9be6643f683c85!2sDarom%20Construcciones%20SRL!5e0!3m2!1ses!2sar!4v1732900240146!5m2!1ses!2sar"
                        width="100%"
                        height="150"
                        frameBorder="0"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                    <p className="mt-3"><i className="fas fa-industry"></i> Planta: Parque industrial tecnológico de Florencio Varela</p>
                    <iframe
                        title="Ubicación Planta"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13097.319712146147!2d-58.1930728!3d-34.8479364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d7ff2e248f6b%3A0x13a6d078d9f675a2!2sPitec%20-%20Parque%20Industrial%20y%20Tecnol%C3%B3gico%20Florencio%20Varela!5e0!3m2!1ses!2sar!4v1732899985240!5m2!1ses!2sar"
                        width="100%"
                        height="150"
                        frameBorder="0"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </Col>
            </Row>

            <Row className="contact-social-buttons text-center mt-4">
                <Col>
                    <h5>Síguenos en Redes Sociales</h5>
                    <div className="d-flex justify-content-around">
                        <Button variant="outline-primary" href="https://www.facebook.com/DAROMSRL/?locale=es_LA" target="_blank">
                            <FaFacebook /> Facebook
                        </Button>
                        <Button variant="outline-danger" href="https://www.instagram.com/daromsrl/?hl=es-la" target="_blank">
                            <FaInstagram /> Instagram
                        </Button>
                        <Button variant="outline-danger" href="https://www.youtube.com/watch?v=--7y8f63ZPk" target="_blank">
                            <FaYoutube /> YouTube
                        </Button>
                        <Button variant="outline-success" href="https://wa.me/5492215739000" target="_blank">
                            <FaWhatsapp /> WhatsApp
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
