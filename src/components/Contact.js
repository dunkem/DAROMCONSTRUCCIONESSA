import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
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
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const gtag_report_conversion = () => {
        window.gtag('event', 'conversion', {
            'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
            'value': 1.0,
            'currency': 'ARS',
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true);

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formData = new FormData(form);
            formData.append('file', file);

            try {
                const response = await fetch('/', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    setSubmitted(true);
                    setError('');
                    event.target.reset();
                    gtag_report_conversion(); // Llamar a la función de conversión
                } else {
                    setSubmitted(false);
                    setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
                }
            } catch (err) {
                setSubmitted(false);
                setError('Error al enviar el formulario: ' + err.message);
            }
        }
    };

    return (
        <Container className="contact-container mt-5">
            <Helmet>
                <title>Contacto - Daromsa</title>
                <meta name="description" content="Contáctanos para más información sobre nuestros productos y servicios." />
                {/* Etiqueta de Google */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-717135166"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-717135166');
                    `}
                </script>
            </Helmet>

            <Row className="contact-row">
                <Col md={6} className="contact-form-column">
                    <h2 className="contact-title">Contáctanos</h2>
                    <Form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                            <label>No llenar este campo: <input name="bot-field" /></label>
                        </p>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" name="name" placeholder="Ingresa tu nombre" />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa tu nombre.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="Ingrese su email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un email válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="Escriba su mensaje"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa un mensaje.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFile">
                            <Form.Label>Adjuntar Archivo</Form.Label>
                            <Form.Control
                                type="file"
                                name="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="contact-submit-button mt-3">
                            Enviar
                        </Button>
                        {submitted && !error && <Alert variant="success" className="mt-3">Su mensaje ha sido enviado con éxito.</Alert>}
                        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    </Form>
                </Col>
                <Col md={6} className="contact-info-column">
                    <h5 className="contact-info-title">¿CÓMO ENCONTRARNOS?</h5>
                    <div className="contact-info-item">
                        <FaPhoneAlt className="contact-icon" /> 
                        <span>Teléfono: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></span>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="contact-icon" /> 
                        <span>Email: 
                            {contactInfo.emails.map((email, index) => (
                                <span key={index}>
                                    <a href={`mailto:${email}`}>{email}</a>{index < contactInfo.emails.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </span>
                    </div>
                    <div className="contact-location">
                        <h6 className="location-title"><FaMapMarkerAlt /> Oficina</h6>
                        <span>{contactInfo.officeAddress}</span>
                        <div className="map-container">
                            <iframe
                                title="Ubicación Oficina"
                                width="100%"
                                height="200"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13104.533593321816!2d-58.1568298!3d-34.8025856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e64e395cdcd1%3A0xc9be6643f683c85!2sDarom%20Construcciones%20SRL!5e0!3m2!1ses!2sar!4v1732900240146!5m2!1ses!2sar"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <div className="contact-location">
                        <h6 className="location-title"><FaMapMarkerAlt /> Planta</h6>
                        <span>{contactInfo.plantAddress}</span>
                        <div className="map-container">
                            <iframe
                                title="Ubicación Planta"
                                width="100%"
                                height="200"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13097.319712146147!2d-58.1930728!3d-34.8479364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d7ff2e248f6b%3A0x13a6d078d9f675a2!2sPitec%20-%20Parque%20Industrial%20y%20Tecnol%C3%B3gico%20Florencio%20Varela!5e0!3m2!1ses!2sar!4v1732899985240!5m2!1ses!2sar"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;