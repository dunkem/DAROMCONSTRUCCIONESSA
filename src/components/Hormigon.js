import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Hormigon.css';

function Hormigon() {
    const videoRef = useRef(null); // Referencia para el video de fondo

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar a la parte superior de la página

        // Reproducir el video automáticamente
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    // Beneficios ofrecidos
    const benefits = [
        { src: '/elegirnoslaboratorio.png', title: 'LABORATORIO EN OBRA', description: 'Disponemos de un laboratorio de hormigones equipado, con asistencia técnica y controles de calidad realizados por profesionales experimentados, ofreciendo atención personalizada.' },
        { src: '/elegirnosticket.png', title: 'TICKET DE PESADA', description: 'Realizamos el peso de los camiones hormigoneros en planta, donde el cliente recibirá un comprobante con el peso de la carga correspondiente.' },
        { src: '/elegirnoscargaprecintada.png', title: 'CARGA PRECINTADA', description: 'La carga de hormigón será pesada y precintada para evitar adulteraciones, asegurando la cantidad exacta solicitada.' },
        { src: '/elegirnosseguimiento.png', title: 'RASTREO SATELITAL', description: 'La carga puede ser controlada minuto a minuto con seguimiento satelital desde dispositivos móviles, desde la planta hasta pie de obra.' },
    ];

    // Datos de los proveedores
    const suppliers = [
        { src: '/logolomanegra.png', alt: 'Loma Negra' },
        { src: '/LOGOMAPEI.png', alt: 'Mapei' },
        { src: '/LOGOSIKA.png', alt: 'Sika' },
        { src: '/LOGOACINDAR.png', alt: 'Red Acindar' },
        { src: '/logoweber.png', alt: 'Weber' },
        { src: '/logoctibor.png', alt: 'Ctibor' },
        { src: '/logofanelli.png', alt: 'Fanelli' },
        { src: '/LOGOBLINKI.png', alt: 'Blinki' },
    ];

    // Datos de los tipos de hormigón
    const hormigonTypes = [
        { title: 'TRADICIONALES', text: 'H8, H13, H17, H21, H25, H30, H40, H47' },
        { title: 'BOMBEABLES', text: 'H17, H21, H25, H30, H38' },
        { title: 'GUNITADOS', text: 'H21 Gunitado, H30 Gunitado, H38 Gunitado' },
        { title: 'RDC', text: 'RDC 100, RDC 150, RDC 200, RDC 250, RDC 300' },
        { title: 'ESPECIALES', text: 'Ultra livianos, Vistos, Con hidrófugo, Con macrofibra, Fast track, Cemento por TN' },
    ];

    // Función de seguimiento de conversiones
    const gtag_report_conversion = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                'value': 1.0,
                'currency': 'ARS',
            });
        }
    };

    // Renderiza los elementos del carrusel de tipos de hormigón
    const renderHormigonCarouselItems = () => {
        const itemsPerSlide = 2; // Muestra 2 tipos de hormigón por slide
        return Array.from({ length: Math.ceil(hormigonTypes.length / itemsPerSlide) }, (_, i) => (
            <Carousel.Item key={i}>
                <Row className="justify-content-center">
                    {hormigonTypes.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((type, idx) => (
                        <Col xs={12} md={6} className="text-center" key={idx}>
                            <Card className="hormigon-card">
                                <Card.Body>
                                    <Card.Title className="font-weight-bold other-title">{type.title}</Card.Title>
                                    <Card.Text>{type.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    // Renderiza los elementos del carrusel de proveedores
    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4; // Número de elementos por carrusel
        return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }, (_, i) => (
            <Carousel.Item key={i}>
                <Row className="justify-content-center">
                    {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                        <Col md={3} sm={6} key={idx} className="mb-4">
                            <Card className="supplier-card text-center">
                                <Card.Img 
                                    variant="top" 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="supplier-logo" 
                                    loading="lazy" // Carga diferida para optimizar rendimiento
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    return (
        <section className="hormigon" aria-labelledby="hormigon-heading">
            <Helmet>
                <title>Hormigón Elaborado - Darom SA</title>
                <meta name="description" content="Ofrecemos hormigón elaborado de alta calidad y servicios de bombeo. Contacto rápido por WhatsApp." />
                <meta name="keywords" content="hormigón, construcción, bombeo, calidad, servicio" />
                <link rel="canonical" href="https://daromsa.com.ar/hormigon" />
            </Helmet>

            {/* Video de fondo */}
            <video 
                ref={videoRef}
                className="video-background"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/IMG_20241112132439373.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
            </video>

            {/* Contenido principal */}
            <Container className="mt-4 position-relative">
                <Row className="text-center">
                    <Col xs={12}>
                        <h1 id="hormigon-heading" className="display-4 font-weight-bold title-highlight">HORMIGÓN ELABORADO Y SERVICIO DE BOMBEO</h1>
                        <p className="lead text-highlight">
                            <strong>La Solución Perfecta</strong> para tus Proyectos de Construcción. Estamos capacitados para producir una amplia variedad de mezclas de hormigón que se adaptan a las distintas necesidades y proyectos de nuestros clientes.
                        </p>
                    </Col>
                </Row>

                {/* Carrusel de Tipos de Hormigón */}
                <Row className="text-center my-4">
                    <Col>
                        <h2 className="section-htitle text-highlight">TIPOS DE HORMIGÓN</h2>
                        <Carousel controls className="hormigon-carousel">
                            {renderHormigonCarouselItems()}
                        </Carousel>
                    </Col>
                </Row>

                {/* Botón de contacto */}
                <Row className="text-center mb-4">
                    <Col xs={12}>
                        <Button 
                            as="a" 
                            href="https://api.whatsapp.com/send/?phone=5492215739000&text&type=phone_number&app_absent=0" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="upload-button my-4" 
                            aria-label="Contactar a un asesor por WhatsApp"
                            onClick={gtag_report_conversion} // Seguimiento de conversión
                        >
                            <FaWhatsapp className="upload-icon" /> Contáctate con un Asesor
                        </Button>
                        <p className="lead text-highlight">¡Comparte tu lista o presupuesto con nosotros! Te ofrecemos los mejores precios y condiciones.</p>
                    </Col>
                </Row>
            </Container>

            {/* Beneficios Section */}
            <Container>
                <Row className="text-center mb-4">
                    <Col>
                        <h2 className="section-htitle other-title">SERVICIOS QUE NOS DIFERENCIAN</h2>
                        <div className="line-divider"></div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {benefits.map((benefit, index) => (
                        <Col md={3} sm={6} key={index} className="mb-4">
                            <div className="benefit-container text-center">
                                <img src={benefit.src} alt={benefit.title} className="benefit-logo-large" loading="lazy" />
                                <h4 className="font-weight-bold">{benefit.title}</h4>
                                <p>{benefit.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Sección Bombas */}
                <Row className="text-center mb-4">
                    <Col>
                        <h2 className="section-htitle other-title">FLOTA DE BOMBAS</h2>
                        <div className="line-divider"></div>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-4">
                    <Col xs={6} md={5} className="text-center">
                        <Image 
                            src="/bombaarrastre.png" 
                            alt="Bomba Arrastre" 
                            fluid 
                            className="full-width-image" 
                            loading="lazy" 
                        />
                        <p>
                            <strong>6 BOMBAS ESTACIONARIAS - CIFA - SP 750</strong>: capacidades de bombeo de entre 50 y 100 m³/h. Ideal para aplicaciones en terrenos difíciles.
                            <br />
                            <strong>Tecnología:</strong> Equipadas con sistemas de control avanzados que mejoran la precisión y el rendimiento.
                            <br />
                            <strong>Aplicaciones:</strong> Construcción de edificios comerciales e industriales. Proyectos de infraestructura como presas y carreteras.
                        </p>
                    </Col>
                    <Col xs={6} md={5} className="text-center">
                        <Image 
                            src="/bombapluma.png" 
                            alt="Bomba Pluma" 
                            fluid 
                            className="full-width-image" 
                            loading="lazy" 
                        />
                        <p>
                            <strong>3 BOMBAS PLUMA - SX36/32</strong>: Eficiente en espacios reducidos.
                            <br />
                            <strong>Longitud de Pluma:</strong> Aproximadamente 36 metros. 
                            <br />
                            <strong>Capacidad de Bombeo:</strong> Hasta 130 m³/h, dependiendo del modelo y condiciones de operación.
                            <br />
                            <strong>Aplicaciones:</strong> Construcción de edificios comerciales e industriales. Proyectos de infraestructura como presas y carreteras.
                        </p>
                    </Col>
                </Row>

                {/* Sección de Proveedores */}
                <Row className="text-center mb-4">
                    <Col>
                        <h2 className="section-htitle other-title">NUESTROS PROVEEDORES</h2>
                        <div className="line-divider"></div>
                    </Col>
                </Row>
                <Carousel className="mb-4" controls>
                    {renderCarouselItems(suppliers)} 
                </Carousel>

                {/* Sección Sobre la Empresa */}
                <Row className="text-center mb-4">
                    <Col>
                        <h2 className="section-htitle other-title">SOBRE LA EMPRESA</h2>
                        <div className="line-divider"></div>
                    </Col>
                </Row>
                <Row className="company-hsection text-center mb-4">
                    <Col>
                        <p className="company-hdescription texto-empresa">
                            Desde 1978, <strong>Darom SA</strong> ha liderado en la construcción con una dedicación inquebrantable a la calidad. Con una expansión desde Zona Sur hasta toda la Provincia de Buenos Aires, ofrecemos hormigón elaborado y materiales de construcción de alta calidad. Nos diferenciamos por un soporte integral pre y post compra, equipo de última tecnología y constante capacitación de nuestro personal. Aspiramos a ser líderes nacionales, llevando nuestros productos y servicios a toda la República Argentina.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hormigon;