import { Container, Row, Col, Card, Button, Image, Carousel } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Hormigon.css';


function Hormigon() {
    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar a la parte superior de la página
    }, []);
    // Beneficios ofrecidos
    const benefits = [
        { src: '/elegirnoslaboratorio.png', title: 'LABORATORIO EN OBRA', description: 'Disponemos de un laboratorio de hormigones equipado, con asistencia técnica y controles de calidad realizados por profesionales experimentados, ofreciendo atención personalizada.' },
{ src: '/elegirnosticket.png', title: 'TICKET DE PESADA', description: 'Realizamos el peso de los camiones hormigoneros en planta, donde el cliente recibirá un comprobante con el peso de la carga correspondiente.' },
{ src: '/elegirnoscargaprecintada.png', title: 'CARGA PRECINTADA', description: 'La carga de hormigón será pesada y precintada con el objetivo de evitar adulteraciones y entregar la cantidad exacta de hormigón solicitada por el cliente.' },
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
        { title: 'BOMBEABLES', text: 'H17 , H21 , H25 , H30 , H38 ' },       
        { title: 'GUNITADOS', text: 'H21 Gunitado, H30 Gunitado, H38 Gunitado' },
        { title: 'RDC', text: 'RDC 100, RDC 150, RDC 200, RDC 250, RDC 300' },
        { title: 'ESPECIALES', text: 'Ultra livianos, Vistos, Con hidrófugo, Con macrofibra, Fast track, Cemento por TN' },       
    ];

    const renderHormigonCarouselItems = () => {
        const itemsPerSlide = 2; // Muestra 2 tipos de hormigón por slide
        const slides = [];
    
        for (let i = 0; i < Math.ceil(hormigonTypes.length / itemsPerSlide); i++) {
            slides.push(
                <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                        {hormigonTypes.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((type, idx) => (
                            <Col xs={12} md={10} className="text-center" key={idx}>
                                <Card className="hormigon-card">
                                    <Card.Body>
                                        <Card.Title className="font-weight-bold">{type.title}</Card.Title>
                                        <Card.Text>{type.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return slides;
    };
    
    // Renderiza los elementos del carrusel de proveedores
    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4; // Número de elementos por carrusel
        const slides = [];

        for (let i = 0; i < Math.ceil(items.length / itemsPerSlide); i++) {
            slides.push(
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
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return slides;
    };

    return (
        <div className="video-background hormigon">
            <video preload="auto" autoPlay loop muted className="video-element">
    <source src="/IMG_20241112132439373.mp4" type="video/mp4" />
    Tu navegador no soporta el elemento de video.
</video>
            <div className="overlay">
                <Container className="mt-4">
                    <Row>
                    <Col xs={12} md={6} className="text-right"> <Button as="a" href="https://api.whatsapp.com/send/?phone=5492215739000&text&type=phone_number&app_absent=0" target="_blank" className="upload-button" > <FaWhatsapp className="upload-icon" /> Contáctate con un Asesor </Button> <p className="lead text-highlight"> ¡Comparte tu lista o presupuesto con nosotros! Te ofrecemos los mejores precios y condiciones. </p> </Col>
                        <Col xs={12} md={6} className="text-center">
                            <h1 className="display-4 font-weight-bold title-highlight">HORMIGÓN ELABORADO Y SERVICIO DE BOMBEO</h1>
                            <p className="lead text-highlight">
                                <strong>La Solución Perfecta</strong> para tus Proyectos de Construcción. Estamos capacitados para producir una amplia variedad de mezclas de hormigón que se adaptan a las distintas necesidades y proyectos de nuestros clientes. Además, ofrecemos una gran variedad de beneficios en todas las etapas de construcción.
                            </p>
                        </Col>
                    </Row>

                    {/* Carrusel de Tipos de Hormigón */}
                    <Row className="text-center my-4">
                        <Col>
                            <h2 className="section-htitle text-highlight">TIPOS DE HORMIGÓN</h2>
                            <Carousel className="d-md-none" controls>
                                {renderHormigonCarouselItems()}
                            </Carousel>
                            <div className="d-none d-md-block">
                                <div className="hormigon-cards">
                                    {hormigonTypes.map((type, index) => (
                                        <Card className="hormigon-card" key={index}>
                                            <Card.Body>
                                                <Card.Title className="font-weight-bold">{type.title}</Card.Title>
                                                <Card.Text>{type.text}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Beneficios Section */}
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="section-htitle">SERVICIOS QUE NOS DIFERENCIAN</h2>
                            <div className="line-divider"></div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        {benefits.map((benefit, index) => (
                            <Col md={3} sm={6} key={index} className="mb-4">
                                <div className="benefit-container text-center">
                                    <img src={benefit.src} alt={benefit.title} className="benefit-logo-large" />
                                    <h4 className="font-weight-bold">{benefit.title}</h4>
                                    <p>{benefit.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Sección bombas */}
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="section-htitle">FLOTA DE BOMBAS</h2>
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
                            />
                            <p>
                                <strong>3 BOMBAS PLUMA - SX36/32</strong>: Eficiente en espacios reducidos.
                                <br />
                                <strong>Longitud de Pluma:</strong> Aproximadamente 36 metros. 
                                <br />
                                <strong>Capacidad de Bombeo:</strong> Hasta 130 m³/h, dependiendo del modelo y condiciones de operación.
                                <strong>Aplicaciones:</strong> Construcción de edificios comerciales e industriales. Proyectos de infraestructura como presas y carreteras.
                            </p>
                        </Col>
                    </Row>

                    {/* Sección de Proveedores */}
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="section-htitle">NUESTROS PROVEEDORES</h2>
                            <div className="line-divider"></div>
                        </Col>
                    </Row>
                    <Carousel className="mb-4" controls>
                        {renderCarouselItems(suppliers)} 
                    </Carousel>

                    {/* Sección Sobre la Empresa */}
                    <Row className="text-center mb-4">
                        <Col>
                            <h2 className="section-htitle">SOBRE LA EMPRESA</h2>
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
                
            </div>
            
        </div>
        
        
    );
    
    
}

export default Hormigon;