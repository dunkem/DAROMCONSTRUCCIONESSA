import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Inicializar gtag si no existe
    useEffect(() => {
        if (!window.gtag) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', 'AW-717135166');
        }
    }, []);

    const trackConversion = (eventCategory, eventLabel, value = 0.5) => {
        try {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                    'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                    'value': value,
                    'currency': 'ARS',
                    'event_category': eventCategory,
                    'event_label': eventLabel,
                    'transaction_id': `FOOTER_${eventCategory}_${Date.now()}`,
                    'page_path': window.location.pathname
                });

                // Evento adicional para GA4
                window.gtag('event', eventCategory, {
                    'method': 'footer_interaction',
                    'interaction_type': eventLabel,
                    'page_location': window.location.href
                });
            }
        } catch (e) {
            console.error('Error tracking footer conversion:', e);
        }
    };

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Darom SA",
                        "url": "https://www.daromsa.com.ar",
                        "logo": "https://www.daromsa.com.ar/logodarom.png",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Parque industrial tecnológico",
                            "addressLocality": "Florencio Varela",
                            "addressRegion": "Buenos Aires",
                            "addressCountry": "AR"
                        },
                        "openingHours": "Mo-Fr 08:00-17:00"
                    })}
                </script>
            </Helmet>

            <footer className="footer-section">
                <Container>
                    <Row className="g-4">
                        {/* Columna de Información */}
                        <Col lg={4} md={6}>
                            <h5 className="footer-heading">Información</h5>
                            <ul className="footer-contact-list">
                                <li>
                                    <FaMapMarkerAlt className="footer-icon" />
                                    <span>Planta Industrial: Parque industrial tecnológico de Florencio Varela, Buenos Aires</span>
                                </li>
                                <li>
                                    <FaMapMarkerAlt className="footer-icon" />
                                    <span>Oficina Comercial: C. 152 6352, B1885 Guillermo Enrique Hudson</span>
                                </li>
                                <li>
                                    <FaClock className="footer-icon" />
                                    <span>Lunes a Viernes: 8:00 - 17:00 hs</span>
                                </li>
                            </ul>
                        </Col>

                        {/* Columna de Navegación */}
                        <Col lg={4} md={6}>
                            <h5 className="footer-heading">Navegación</h5>
                            <ul className="footer-nav-list">
                                <li>
                                    <Link 
                                        to="/about" 
                                        className="footer-nav-link"
                                        onClick={() => trackConversion('Navigation', 'Footer_About', 0.3)}
                                    >
                                        <FaArrowRight className="nav-icon" />
                                        Sobre Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className="footer-nav-link"
                                        onClick={() => trackConversion('Navigation', 'Footer_Contact', 0.7)}
                                    >
                                        <FaArrowRight className="nav-icon" />
                                        Contáctanos
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        {/* Columna de Derechos */}
                        <Col lg={4} className="footer-rights">
                            <img 
                                src="/logodarom.png" 
                                alt="Darom SA Logo" 
                                className="footer-logo mb-3"
                                loading="lazy"
                            />
                            <p className="copyright">
                                &copy; {currentYear} Darom SA.<br />
                                Todos los derechos reservados.
                            </p>
                            <p className="design-credit">
                                Diseñado por <a 
                                    href="https://dtecno.com.ar/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="dtecno-link"
                                    onClick={() => trackConversion('External', 'DTECNO_Link', 0.2)}
                                >
                                    <strong>DTECNO</strong>
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;