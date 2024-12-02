// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './Footer.css'; // Opcional: si necesitas estilos personalizados

const Footer = () => {
    return (
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
                    <Link to="/contact" className="footer-link mx-2">
                        <i className="fas fa-envelope"></i> Contáctanos
                    </Link>
                </div>
                <p className="footer-design mt-2">
                    Diseñado por <strong>DTECNO</strong>
                </p>
            </Col>
        </Row>
    );
};

export default Footer;