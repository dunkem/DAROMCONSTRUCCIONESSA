import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Footer.css'; // Opcional: si necesitas estilos personalizados

const Footer = () => {
    const handleContactClick = () => {
        gtag_report_conversion(); // Llamar a la función de seguimiento de conversión
    };

    return (
        <>
            <Helmet>
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
            <Row className="footer-section mt-4 bg-light text-dark py-3">
                <Col className="footer-content text-center">
                    <h5 className="footer-title">DAROM SA</h5>
                    <p>&copy; {new Date().getFullYear()} Darom SA. Todos los derechos reservados.</p>
                    <div className="footer-links">
                        <Link to="/privacy" className="footer-link mx-2">
                            <i className="fas fa-shield-alt"></i> Política de Privacidad
                        </Link>
                        <span>|</span>
                        <Link to="/terms" className="footer-link mx-2">
                            <i className="fas fa-file-contract"></i> Términos de Servicio
                        </Link>
                        <span>|</span>
                        <Link to="/contact" className="footer-link mx-2" onClick={handleContactClick}>
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

// Asegúrate de incluir la función global para el seguimiento de conversiones
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