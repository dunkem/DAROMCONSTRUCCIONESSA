import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css';

const contactInfo = {
    phone: '0810-333-4567',
    emails: [
        'ventas@daromsa.com.ar',
        'proveedores@daromsa.com.ar',
        'administracion@daromsa.com.ar'
    ],
    officeAddress: 'C. 152 6352, B1885 Guillermo Enrique Hudson',
    plantAddress: 'Parque industrial tecnológico de Florencio Varela',
};

function Contact() {
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formData = new FormData(form);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(), // Asegúrate de usar URLSearchParams
            })
            .then(() => {
                setSubmitted(true);
                setError('');
                form.reset(); // Resetear el formulario después del envío
            })
            .catch(error => {
                setError('Error al enviar el formulario');
                console.error('Error:', error);
            });
        }
        setValidated(true);
    };

    return (
        <Container className="contact-container mt-5">
            <Row className="contact-background mb-4">
                <Col md={6} className="p-4">
                    <h2 className="contact-title">CONTACTANOS</h2>
                    <Form 
                      name="contact" 
                      method="POST" 
                      data-netlify="true" 
                      noValidate 
                      validated={validated} 
                      onSubmit={handleSubmit} 
                      className="contact-form"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>No llenar este campo: <input name="bot-field" /></label>
                        </p>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" name="name" placeholder="Ingresa tu nombre" />
                            <Form.Control.Feedback type="invalid">Por favor ingresa tu nombre.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="Ingrese su email" />
                            <Form.Control.Feedback type="invalid">Por favor ingresa un email válido.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control required as="textarea" rows={3} name="message" placeholder="Escriba su mensaje" />
                            <Form.Control.Feedback type="invalid">Por favor ingresa un mensaje.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFile">
                            <Form.Label>Adjuntar Archivo</Form.Label>
                            <Form.Control type="file" name="file" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="contact-submit-button mt-3">Enviar</Button>
                        {submitted && !error && <p className="mt-3 text-success">Su mensaje ha sido enviado con éxito.</p>}
                        {error && <p className="mt-3 text-danger">{error}</p>}
                    </Form>
                </Col>
                <Col md={6} className="contact-info p-4 text-center">
                    <h5>¿CÓMO ENCONTRARNOS?</h5>
                    <p><i className="fas fa-phone"></i> Teléfono: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                    <p>
                        <i className="fas fa-envelope"></i> Email: {
                            contactInfo.emails.map((email, index) => (
                                <span key={index}>
                                    <a href={`mailto:${email}`}>{email}</a>{index < contactInfo.emails.length - 1 ? ', ' : ''}
                                </span>
                            ))
                        }
                    </p>
                    <p><i className="fas fa-map-marker-alt"></i> Oficina: {contactInfo.officeAddress}</p>
                    <MapEmbed title="Ubicación Oficina" src="https://www.google.com/maps/embed?pb=..." />
                    <p className="mt-3"><i className="fas fa-industry"></i> Planta: {contactInfo.plantAddress}</p>
                    <MapEmbed title="Ubicación Planta" src="https://www.google.com/maps/embed?pb=..." />
                </Col>
            </Row>
        </Container>
    );
}

// Componente para embebido del mapa
const MapEmbed = ({ title, src }) => (
    <iframe
        title={title}
        src={src}
        width="100%"
        height="150"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
    ></iframe>
);

export default Contact;