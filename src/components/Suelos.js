import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; // Importar FaWhatsapp
import './Suelos.css';
import Contact from './Contact';

function Suelos() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar a la parte superior de la página
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
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return items;
    };

    return (
        <Container className="mt-4 suelos-container">
            <Row className="suelos-header">
                <Col md={6} className="suelos-header-left">
                    <h1 className="suelos-title">ESTUDIO DE SUELOS</h1>
                </Col>
                <Col md={6} className="suelos-header-right d-flex flex-column align-items-end">
                    <Button 
                        as="a" 
                        href="https://api.whatsapp.com/send/?phone=5492215739000&text&type=phone_number&app_absent=0" 
                        target="_blank"
                        className="upload-button"
                    >
                        <FaWhatsapp className="upload-icon" /> Contáctate con un Asesor
                    </Button>
                    <p className="suelos-description lead mt-2">
                        ¡Comparte tu lista o presupuesto con nosotros! Te ofrecemos los mejores precios y condiciones.
                    </p>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <p className="suelos-paragraph">
                        <strong>Transforma tu Proyecto desde la Base:</strong> Nuestro servicio de <strong>Estudio de Suelos</strong> te ofrece un análisis detallado y preciso de las condiciones del terreno, asegurando la estabilidad y seguridad de tus construcciones. Con tecnología de vanguardia y un equipo de expertos en geotecnia, identificamos las características del suelo, detectamos posibles riesgos y recomendamos las mejores soluciones para tus necesidades. Confía en nosotros para cimentar tus proyectos sobre una base sólida y segura.
                    </p>
                    <h5 className="suelos-subtitle">Datos Técnicos:</h5>
                    <ul className="suelos-list">
                        <li><strong>Tipo de análisis:</strong> Ensayos de penetración estándar (SPT), ensayos de compresión y corte.</li>
                        <li><strong>Características del suelo:</strong> Identificación de estratos, tipo de roca, permeabilidad, capacidad de carga y compactación.</li>
                        <li><strong>Informe detallado:</strong> Incluye gráficas, recomendaciones específicas para la cimentación y análisis de riesgos.</li>
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

            <Row className="mt-4">
                <Col xs={12}>
                    <h1 className="suelos-section-title">MOVIMIENTO DE SUELOS</h1>
                    <p className="suelos-paragraph">
                        <strong>Prepara tu Terreno para el Éxito:</strong> En los proyectos de construcción, cada detalle cuenta. Nuestro servicio de <strong>Movimientos de Suelos</strong> garantiza que tu terreno esté perfectamente nivelado y listo para la edificación. Utilizamos maquinaria moderna y técnicas avanzadas para realizar excavaciones, rellenos y compactaciones con la máxima precisión. Desde grandes desarrollos hasta pequeñas obras, nos aseguramos de que tu proyecto comience con el pie derecho.
                    </p>
                    <h5 className="suelos-subtitle">Datos Técnicos:</h5>
                    <ul className="suelos-list">
                        <li><strong>Tipos de maquinaria:</strong> Excavadoras, bulldozers y compactadoras.</li>
                        <li><strong>Servicios incluidos:</strong> Excavaciones, relleno, nivelaciones, compactaciones, demolición y remoción de escombros.</li>
                        <li><strong>Control de calidad:</strong> Monitoreo constante de la compactación y análisis del suelo.</li>
                        <li><strong>Plazo de ejecución:</strong> Dependiendo del tamaño del proyecto, generalmente entre 1-3 semanas.</li>
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
            <Contact showContact={true} />
        </Container>
    );
}

export default Suelos;
