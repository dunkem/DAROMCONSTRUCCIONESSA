import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'; // Asegúrate de importar el CSS

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch('/', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                setSubmitted(true);
                setError('');
                event.target.reset();
            } else {
                throw new Error('Error al enviar el formulario');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Container className="contact-container">
            <Row>
                <Col md={6}>
                    <h2 className="contact-title">CONTACTANOS</h2>
                    <Form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="contact-form">
                        <input type="hidden" name="form-name" value="contact" />
                        
                        <Form.Group controlId="name">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control type="text" name="name" required />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" required />
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Mensaje:</Form.Label>
                            <Form.Control as="textarea" name="message" required />
                        </Form.Group>

                        <Form.Group controlId="file">
                            <Form.Label>Adjuntar Archivo:</Form.Label>
                            <Form.Control type="file" name="file" />
                        </Form.Group>

                        <Button type="submit" className="contact-submit-button">Enviar</Button>
                    </Form>

                    {submitted && <Alert variant="success">Su mensaje ha sido enviado con éxito.</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                </Col>
                
                <Col md={6} className="contact-info">
                    <h5>¿CÓMO ENCONTRARNOS?</h5>
                    <div className="info-item">
                        <FaPhone /> 
                        <span>Teléfono: <a href="tel:08103334567">0810-333-4567</a></span>
                    </div>
                    <div className="info-item">
                        <FaEnvelope /> 
                        <span>Email: 
                            <a href="mailto:ventas@daromsa.com.ar"> ventas@daromsa.com.ar</a>, 
                            <a href="mailto:proveedores@daromsa.com.ar"> proveedores@daromsa.com.ar</a>, 
                            <a href="mailto:administracion@daromsa.com.ar"> administracion@daromsa.com.ar</a>
                        </span>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt /> 
                        <span>Oficina: C. 152 6352, B1885 Guillermo Enrique Hudson</span>
                    </div>
                    <div className="info-item">
                        <FaMapMarkerAlt /> 
                        <span>Planta: Parque industrial tecnológico de Florencio Varela</span>
                    </div>

                    <div className="map-container">
                        <h6>Ubicación de la Oficina</h6>
                        <iframe
                            title="Oficina"
                            width="100%"
                            height="200"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509322!2d144.95373531531665!3d-37.81520697975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0e1c07%3A0x50e9d2a6e86f0b6c!2sC.%20152%206352%2C%20B1885%20Guillermo%20Enrique%20Hudson!5e0!3m2!1ses-419!2sar!4v1631234567890!5m2!1ses-419!2sar"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="map-container">
                        <h6>Ubicación de la Planta</h6>
                        <iframe
                            title="Planta"
                            width="100%"
                            height="200"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509322!2d144.95373531531665!3d-37.81520697975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0e1c07%3A0x50e9d2a6e86f0b6c!2sParque%20industrial%20tecnol%C3%B3gico%20de%20Florencio%20Varela!5e0!3m2!1ses-419!2sar!4v1631234567890!5m2!1ses-419!2sar"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;