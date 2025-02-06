import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Footer.css'; // Opcional: si necesitas estilos personalizados

const Footer = () => {
    // Función para el seguimiento de conversiones
    const handleContactClick = () => {
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                'value': 1.0,
                'currency': 'ARS',
            });
        }
    };

    // Cargar GTAG solo una vez
    useEffect(() => {
        if (!window.gtag) {
            const gtagScript = document.createElement('script');
            gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-717135166";
            gtagScript.async = true;
            document.head.appendChild(gtagScript);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
                window.dataLayer.push(arguments);
            };
            window.gtag('js', new Date());
            window.gtag('config', 'AW-717135166');
        }
    }, []);

    return (
        <>
            <Helmet>
                {/* Metadatos adicionales si es necesario */}
            </Helmet>
            <Row className="footer-section mt-4 bg-light text-dark py-3">
                <Col className="footer-content text-center">
                    <h5 className="footer-title">DAROM SA</h5>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <Link
                            to="/contact"
                            className="footer-link mx-2"
                            onClick={handleContactClick}
                            aria-label="Contáctanos"
                        >
                            <i className="fas fa-envelope"></i> Contáctanos
                        </Link>
                    </div>
                    <p className="footer-design mt-2">
                        Diseñado por <strong>DTECNO</strong>
                    </p>
                </Col>
            </Row>
        </>
    );
};

export default Footer;