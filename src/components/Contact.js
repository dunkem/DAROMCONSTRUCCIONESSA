import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const contactInfo = {
    phone: '0810-333-4567', 
    emails: {
        ventas: 'ventas@daromsa.com.ar',
        proveedores: 'proveedores@daromsa.com.ar'
    },
    officeAddress: 'C. 152 6352, B1885 Guillermo Enrique Hudson',
    plantAddress: 'Parque industrial tecnológico de Florencio Varela',
};

const LocationMap = ({ title, address, mapSrc }) => (
    <div className="location-card">
        <div className="location-header">
            <FaMapMarkerAlt className="location-icon" />
            <h5>{title}</h5>
        </div>
        <p className="location-address">{address}</p>
        <div className="map-wrapper">
            <iframe
                title={`Ubicación ${title}`}
                src={mapSrc}
                className="location-map"
                allowFullScreen=""
                loading="lazy"
                aria-label={`Mapa de ${title}`}
            />
        </div>
    </div>
);

function Contact() {
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Scroll al inicio cuando el componente se monta
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto' // Comportamiento instantáneo
        });

        // Inicialización de Google Tag Manager
        if (!window.dataLayer) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', 'AW-717135166');
        }
    }, []);

    // Función mejorada para reportar conversiones
    const trackConversion = (eventCategory = 'form_submission', eventLabel = 'contact_form') => {
        try {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                    'value': 1.0,
                    'currency': 'ARS',
                    'event_category': eventCategory,
                    'event_label': eventLabel,
                    'transaction_id': `CONTACT_${Date.now()}`
                });

                // Evento adicional para Google Analytics 4
                window.gtag('event', 'generate_lead', {
                    'method': 'contact_form',
                    'page_location': window.location.href,
                    'page_title': document.title
                });
            }
        } catch (e) {
            console.error('Error tracking conversion:', e);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        setValidated(true);

        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        try {
            const formData = new FormData(form);
            const response = await fetch('/', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
            });

            if (response.ok) {
                setSubmitted(true);
                setError('');
                form.reset();
                trackConversion('form_submission', 'contact_success');
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (err) {
            setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
            setSubmitted(false);
            trackConversion('form_error', 'contact_error');
        }
    };

    return (
        <section id="contacto" className="contact-section">
            <Container>
                <h2 className="section-title">CONTÁCTENOS</h2>
                <p className="section-subtitle">Estamos listos para responder a sus consultas</p>
                
                <Row className="contact-content">
                    {/* Formulario de contacto */}
                    <Col lg={6} className="contact-form-col">
                        <Form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            
                            <Form.Group controlId="formName" className="mb-4">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control 
                                    required 
                                    type="text" 
                                    name="name" 
                                    placeholder="Ingrese su nombre" 
                                />
                            </Form.Group>
                            
                            <Form.Group controlId="formEmail" className="mb-4">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="ejemplo@email.com"
                                />
                            </Form.Group>
                            
                            <Form.Group controlId="formMessage" className="mb-4">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={5}
                                    name="message"
                                    placeholder="Escriba su consulta aquí..."
                                />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" className="submit-btn">
                                Enviar mensaje
                            </Button>
                            
                            {submitted && (
                                <Alert variant="success" className="mt-3">
                                    ¡Mensaje enviado con éxito! Nos contactaremos pronto.
                                </Alert>
                            )}
                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                        </Form>
                    </Col>
                    
                    {/* Información de contacto */}
                    <Col lg={6} className="contact-info-col">
                        <div className="contact-info-card">
                            <h3 className="info-title">Información de contacto</h3>
                            
                            <div className="contact-method">
                                <FaPhoneAlt className="contact-icon" />
                                <div>
                                    <h4>Teléfono</h4>
                                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <h4>Correos electrónicos</h4>
                                    <div className="emails-list">
                                        <div className="email-item">
                                            <span>Ventas:</span>
                                            <a href={`mailto:${contactInfo.emails.ventas}`}>
                                                {contactInfo.emails.ventas}
                                            </a>
                                        </div>
                                        <div className="email-item">
                                            <span>Proveedores:</span>
                                            <a href={`mailto:${contactInfo.emails.proveedores}`}>
                                                {contactInfo.emails.proveedores}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mapas en horizontal */}
                        <Row className="maps-row">
                            <Col md={6} className="mb-3">
                                <LocationMap
                                    title="Oficina Principal"
                                    address={contactInfo.officeAddress}
                                    mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13104.533593321816!2d-58.1568298!3d-34.8025856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e64e395cdcd1%3A0xc9be6643f683c85!2sDarom%20Construcciones%20SRL!5e0!3m2!1ses!2sar!4v1732900240146!5m2!1ses!2sar"
                                />
                            </Col>
                            <Col md={6}>
                                <LocationMap
                                    title="Planta Industrial"
                                    address={contactInfo.plantAddress}
                                    mapSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13097.319712146147!2d-58.1930728!3d-34.8479364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a329a582dd67a1%3A0xcc2bb374e1f248bd!2sPlanta%20Hormig%C3%B3n%20DAROM!5e0!3m2!1ses!2sar!4v1732900240146!5m2!1ses!2sar"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;