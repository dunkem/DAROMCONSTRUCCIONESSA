import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Suelos.css';
import Contact from './Contact';

function Suelos() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar a la parte superior de la página

        // Cargar Google Tag Manager y gtag
        if (!document.getElementById('gtm-script')) {
            const gtmScript = document.createElement('script');
            gtmScript.id = 'gtm-script';
            gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-717135166";
            gtmScript.async = true;
            document.head.appendChild(gtmScript);
        }

        // Inicializar gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', 'AW-717135166');
    }, []);

    const estudios = [
        '/estudiosuelo.jpg',
        '/estudiosuelo2.jpg',
        '/estudiodesuelo3.jpg',
    ];

    const movimientos = [
        '/portadamovofi.jpg',
        '/portadamov1.jpg',
        '/portadamov2.jpg',
        '/portadamov3.jpg',
        '/portadamov4.jpg',
        '/portadamov5.jpg',
        '/portadamov6.jpg',
        '/portadamov7.jpg',
        '/portadamov8.jpg',
        '/portadamov9.jpg'
    ];

    const renderCarouselItems = (images) => {
        const items = [];
        for (let i = 0; i < images.length; i += 3) {
            items.push(
                <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                        {images.slice(i, i + 3).map((src, index) => (
                            <Col xs={12} sm={4} key={index}>
                                <img
                                    className="d-block w-100 suelos-carousel-image"
                                    src={src}
                                    alt={`Imagen ${i + index + 1}`}
                                    loading="lazy" // Carga diferida para mejorar la carga
                                    aria-label={`Imagen ${i + index + 1}`}
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return items;
    };

    const trackConversion = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC' // ID de conversión y etiqueta
            });
        }
    };

    const ContactButton = () => (
        <Button 
            as="a" 
            href="https://api.whatsapp.com/send/?phone=5492215739000&text=Hola%2C+estoy+interesado+en+sus+servicios+de+estudio+de+suelos.&type=phone_number&app_absent=0" 
            target="_blank"
            rel="noopener noreferrer"
            className="upload-button"
            onClick={trackConversion}
            aria-label="Contactar a un asesor por WhatsApp"
        >
            <FaWhatsapp className="upload-icon" /> Contáctate con un Asesor
        </Button>
    );

    const ContactDescription = () => (
        <p className="suelos-description lead mt-2">
            ¡Comparte tu lista o presupuesto con nosotros! Te ofrecemos los mejores precios y condiciones.
        </p>
    );

    return (
        <Container className="mt-4 suelos-container">
            <Helmet>
                <title>Estudio y Movimiento de Suelos - Darom SA</title>
                <meta name="description" content="Ofrecemos estudios detallados de suelos y movimientos de tierras para tus proyectos de construcción." />
                <meta name="keywords" content="estudio de suelos, movimientos de suelos, construcción" />
                <link rel="canonical" href="https://daromsa.com.ar/suelos" />
            </Helmet>

            {/* Sección de Estudio de Suelos */}
            <Row className="suelos-header">
                <Col>
                    <h1 className="suelos-title">Estudio de Suelos</h1>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <p className="suelos-paragraph">
                        <strong>Transforma tu Proyecto desde la Base:</strong> Nuestro servicio de <strong>Estudio de Suelos</strong> te ofrece un análisis detallado y preciso de las condiciones del terreno. Con tecnología de vanguardia y un equipo de expertos en geotecnia, garantizamos la estabilidad y seguridad de tus construcciones.
                    </p>
                    <h5 className="suelos-subtitle">Datos Técnicos:</h5>
                    <ul className="suelos-list">
                        <li><strong>Tipo de análisis:</strong> Ensayos de penetración estándar (SPT), compresión y corte.</li>
                        <li><strong>Características del suelo:</strong> Identificación de estratos, tipo de roca, permeabilidad y capacidad de carga.</li>
                        <li><strong>Informe detallado:</strong> Incluye gráficas, recomendaciones para la cimentación y análisis de riesgos.</li>
                        <li><strong>Plazo de entrega:</strong> Resultados en 5-7 días hábiles.</li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Carousel>
                        {renderCarouselItems(estudios)}
                    </Carousel>
                </Col>
            </Row>

            {/* Botón y descripción para Estudio de Suelos */}
            <Row className="mt-4 text-center">
                <Col>
                    <ContactButton />
                    <ContactDescription />
                </Col>
            </Row>

            {/* Sección de Movimiento de Suelos */}
            <Row className="mt-4">
                <Col xs={12}>
                    <h1 className="suelos-section-title">Movimiento de Suelos</h1>
                    <p className="suelos-paragraph">
                        <strong>Prepara tu Terreno para el Éxito:</strong> Nuestro servicio de <strong>Movimientos de Suelos</strong> garantiza que tu terreno esté nivelado y listo para la edificación. Utilizamos maquinaria moderna y técnicas avanzadas para asegurar cada detalle en tus proyectos de construcción.
                    </p>
                    <h5 className="suelos-subtitle">Datos Técnicos:</h5>
                    <ul className="suelos-list">
                        <li><strong>Tipos de maquinaria:</strong> Excavadoras, bulldozers y compactadoras.</li>
                        <li><strong>Servicios incluidos:</strong> Excavaciones, relleno, nivelaciones, compactaciones y demolición.</li>
                        <li><strong>Control de calidad:</strong> Monitoreo constante de la compactación y análisis del suelo.</li>
                        <li><strong>Plazo de ejecución:</strong> Generalmente entre 1-3 semanas, dependiendo del tamaño del proyecto.</li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Carousel>
                        {renderCarouselItems(movimientos)}
                    </Carousel>
                </Col>
            </Row>

            {/* Botón y descripción para Movimiento de Suelos */}
            <Row className="mt-4 text-center">
                <Col>
                    <ContactButton />
                    <ContactDescription />
                </Col>
            </Row>

            <Contact showContact={true} />
        </Container>
    );
}

export default Suelos;