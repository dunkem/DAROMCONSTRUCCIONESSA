import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaAward, FaChartLine, FaHardHat, FaWhatsapp, FaCheck } from 'react-icons/fa';
import './About.css';
import React, { useEffect } from 'react';

function About() {
    // Scroll al inicio
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
    }, []);

    const obras = [
        { src: "/obraconstrumex.jpg", title: "Obra Construmex", description: "Proyecto de infraestructura comercial" },
        { src: "/obracorredoresverdes.jpg", title: "Corredores Verdes", description: "Desarrollo urbano sostenible" },
        { src: "/obraecas.jpg", title: "Complejo ECAS", description: "Edificios corporativos" },
        { src: "/obralibertatyfrench.jpg", title: "Libertad y French", description: "Remodelación urbana" },
        { src: "/obramagallanes.jpg", title: "Magallanes", description: "Proyecto residencial" },
        { src: "/obrapavimentacionmitre.jpg", title: "Pavimentación Mitre", description: "Infraestructura vial" },
        { src: "/obrasvarias (3).jpg", title: "Parque Industrial", description: "Desarrollo industrial" },
        { src: "/obrasvarias (4).jpg", title: "Centro Comercial", description: "Espacios comerciales" },
        { src: "/obrasvarias (5).jpg", title: "Torre Corporativa", description: "Edificio de oficinas" },
        { src: "/obrasvarias (7).jpg", title: "Conjunto Habitacional", description: "Viviendas sociales" },
        { src: "/obraxapor.jpg", title: "Complejo Xapor", description: "Desarrollo multifuncional" }
    ];

    const suppliers = [
        { src: '/logolomanegra.png', alt: 'Loma Negra' },
        { src: '/LOGOSIKA.png', alt: 'Sika' },
        { src: '/LOGOACINDAR.png', alt: 'Red Acindar' },
        { src: '/logodafre.jpg', alt: 'Dafre' },
        { src: '/logo varsovia.jpg', alt: 'Grupo Varsovia' },
        { src: '/LOGOTECMA.PNG', alt: 'Tecma' },
        { src: '/logoeleprint.png', alt: 'Eleprint' },
        { src: '/logogoldir.png', alt: 'Goldir' },
        { src: '/dycasalogo.jpg', alt: 'Ieb Construcciones' },
        { src: '/logoaubasa.png', alt: 'Aubasa' },
        { src: '/logopfisterer.png', alt: 'Pfisterer' },
        { src: '/logoweber.png', alt: 'Weber' },
        { src: '/logofanelli.png', alt: 'Fanelli' },
        { src: '/logoctibor.png', alt: 'Ctibor' }
    ];

    // Agrupar obras en grupos de 3 para el carrusel
    const groupedObras = [];
    for (let i = 0; i < obras.length; i += 3) {
        groupedObras.push(obras.slice(i, i + 3));
    }

    const valores = [
        { icon: <FaAward size={40} />, title: "Calidad", description: "Estrictos controles en todos nuestros procesos" },
        { icon: <FaHardHat size={40} />, title: "Compromiso", description: "Dedicación total a cada proyecto" },
        { icon: <FaChartLine size={40} />, title: "Innovación", description: "Tecnología de punta en construcción" }
    ];

    const renderCarouselItems = () => {
        return groupedObras.map((group, index) => (
            <Carousel.Item key={index}>
                <div className="d-flex justify-content-around projects-row">
                    {group.map((obra, idx) => (
                        <div 
                            className="project-card mx-2" 
                            key={idx}
                        >
                            <img
                                className="project-image"
                                src={obra.src}
                                alt={`Imagen de ${obra.title}`}
                                loading="lazy"
                            />
                            <div className="project-overlay">
                                <h3>{obra.title}</h3>
                                <p>{obra.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        ));
    };

    // Mensaje predefinido para WhatsApp
    const whatsappMessage = "Hola Darom SA, vi su página web y me interesa conocer más sobre sus servicios";
    const whatsappUrl = `https://wa.me/5492215739000?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <>
            <Helmet>
                <title>Darom SA - Más de 40 años construyendo futuro</title>
                <meta name="description" content="Conozca nuestra trayectoria, valores y proyectos destacados en la industria de la construcción" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "Sobre Darom SA",
                        "description": "Información sobre la historia, valores y proyectos de Darom SA",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Darom SA",
                            "foundingDate": "1978"
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="about-hero position-relative">
                <div 
                    className="position-absolute w-100 h-100"
                    style={{
                        top: 0,
                        left: 0,
                        backgroundImage: "url('/portoficial1.jpg')",
                        backgroundRepeat: 'repeat',
                        opacity: 0.05,
                        zIndex: 1
                    }}
                ></div>
                
                <Container className="position-relative" style={{zIndex: 2}}>
                    <Row className="align-items-center py-5">
                        <Col lg={6} className="py-4">
                            <div className="hero-badge mb-4">
                                <span className="badge bg-light text-primary-color fs-5 fw-normal px-3 py-2">Desde 1978</span>
                            </div>
                            
                            <h1 className="hero-title">
                                Construyendo el futuro <span className="text-light">con excelencia</span>
                            </h1>
                            
                            <p className="hero-subtitle">
                                Líderes en innovación y calidad en la industria de la construcción
                            </p>
                            
                            <div className="hero-features mb-5">
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-light me-3 fs-5" />
                                        <span>+40 años de experiencia</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <FaCheck className="text-light me-3 fs-5" />
                                        <span>+3,000 proyectos completados</span>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <FaCheck className="text-light me-3 fs-5" />
                                        <span>Tecnología de punta en construcción</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <Button 
                                as="a"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary" 
                                className="btn-primary-color px-4 py-3 fw-bold"
                            >
                                <FaWhatsapp className="me-2" /> Conoce nuestro equipo
                            </Button>
                        </Col>
                        
                        <Col lg={6} className="d-none d-lg-block">
                            <div className="hero-image-container position-relative">
                                <img 
                                    src="/obra50.png" 
                                    alt="Equipo de construcción" 
                                    className="hero-image" 
                                    loading="eager"
                                />
                                <div className="experience-badge bg-primary-color text-white p-3 rounded-4 shadow position-absolute bottom-0 start-0 translate-middle">
                                    <div className="fs-1 fw-bold">40+</div>
                                    <div className="fs-5">Años</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* PRUEBA SOCIAL - Construcción de confianza */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center mb-5">EMPRESAS QUE <span className="text-red">CONFÍAN EN NOSOTROS</span></h2>
                    
                    <div className="suppliers-carousel-container">
                        {/* Versión Desktop (6 logos por fila) */}
                        <div className="d-none d-md-block">
                            <Carousel indicators={false} interval={3000} pause="hover" touch={true}>
                                {Array.from({ length: Math.ceil(suppliers.length / 6) }).map((_, slideIndex) => (
                                    <Carousel.Item key={`desktop-${slideIndex}`}>
                                        <Row className="justify-content-center g-4">
                                            {suppliers.slice(slideIndex * 6, (slideIndex + 1) * 6).map((supplier, idx) => (
                                                <Col key={`desktop-${slideIndex}-${idx}`} md={2} className="text-center">
                                                    <div className="supplier-card">
                                                        <img 
                                                            src={supplier.src} 
                                                            alt={supplier.alt} 
                                                            className="supplier-logo img-fluid" 
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
            
                        {/* Versión Mobile (3 logos por fila) */}
                        <div className="d-block d-md-none">
                            <Carousel indicators={false} interval={3000} pause="hover" touch={true}>
                                {Array.from({ length: Math.ceil(suppliers.length / 3) }).map((_, slideIndex) => (
                                    <Carousel.Item key={`mobile-${slideIndex}`}>
                                        <Row className="justify-content-center g-3">
                                            {suppliers.slice(slideIndex * 3, (slideIndex + 1) * 3).map((supplier, idx) => (
                                                <Col key={`mobile-${slideIndex}-${idx}`} xs={4} className="text-center">
                                                    <div className="supplier-card">
                                                        <img 
                                                            src={supplier.src} 
                                                            alt={supplier.alt} 
                                                            className="supplier-logo img-fluid" 
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Historia */}
            <section className="about-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <h2 className="section-title">Nuestra Historia</h2>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-year">1978</div>
                                    <div className="timeline-content">
                                        <h3>Fundación</h3>
                                        <p>Iniciamos como proveedores de Hormigón Elaborado para Zona Sur, con una pequeña planta en Bosques.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-year">1995</div>
                                    <div className="timeline-content">
                                        <h3>Expansión Regional</h3>
                                        <p>Ampliamos nuestras operaciones a toda la Provincia de Buenos Aires, diversificando nuestros productos y servicios.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-year">2010</div>
                                    <div className="timeline-content">
                                        <h3>Modernización</h3>
                                        <p>Incorporamos tecnología de punta en nuestras plantas y procesos, mejorando calidad y eficiencia.</p>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-year">2023</div>
                                    <div className="timeline-content">
                                        <h3>Liderazgo</h3>
                                        <p>Consolidados como referentes en el mercado, con proyectos en todo Buenos Aires</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Valores */}
            <section className="values-section">
                <Container>
                    <h2 className="section-title text-center">Nuestros Valores</h2>
                    <Row className="g-4">
                        {valores.map((valor, index) => (
                            <Col md={4} key={index}>
                                <Card className="value-card">
                                    <div className="value-icon">{valor.icon}</div>
                                    <Card.Body>
                                        <Card.Title>{valor.title}</Card.Title>
                                        <Card.Text>{valor.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Proyectos */}
            <section className="projects-section">
                <Container>
                    <h2 className="section-title text-center">Proyectos Destacados</h2>
                    <Carousel 
                        fade 
                        indicators={false} 
                        className="projects-carousel"
                    >
                        {renderCarouselItems()}
                    </Carousel>
                    {/* Botón de WhatsApp */}
                    <div className="whatsapp-button-container mt-6">
                        <Button 
                            as="a"
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="danger"
                            className="whatsapp-button"
                        >
                            <FaWhatsapp className="me-2" size={24} />
                            Contactar por WhatsApp
                        </Button>
                    </div>
                </Container>
            </section>

            {/* Equipo */}
            <section className="team-section">
                <Container>
                    <Row className="align-items-center">
                        {/* Columna de imagen - Solo se muestra en desktop */}
                        <Col lg={6} className="d-none d-lg-block">
                            <img 
                                src="/portadanuestroequipo.jpg" 
                                alt="Equipo Darom SA" 
                                className="team-image" 
                                loading="lazy"
                            />
                        </Col>
                        
                        {/* Columna de contenido - Siempre visible */}
                        <Col xs={12} lg={6}>
                            <h2 className="section-title">Nuestro Equipo</h2>
                            <p className="team-description">
                                Contamos con más de 50 profesionales altamente capacitados en todas las áreas de la construcción. 
                                Desde ingenieros civiles hasta especialistas en logística, nuestro equipo multidisciplinario 
                                garantiza la excelencia en cada proyecto.
                            </p>
                            
                            <div className="stats-container">
                                <div className="stat-item">
                                    <div className="stat-number">40+</div>
                                    <div className="stat-label">Años de experiencia</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Profesionales</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">3000+</div>
                                    <div className="stat-label">Proyectos completados</div>
                                </div>
                            </div>

                            {/* Botón de WhatsApp */}
                            <div className="whatsapp-button-container mt-4">
                                <Button 
                                    as="a"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="danger"
                                    className="whatsapp-button"
                                >
                                    <FaWhatsapp className="me-2" size={24} />
                                    Contactar por WhatsApp
                                </Button>
                            </div>
                        </Col>
                        {/* Columna de imagen - Solo se muestra en mobile (debajo del contenido) */}
                        <Col xs={12} className="d-lg-none mt-4">
                            <img 
                                src="/portadanuestroequipo.jpg" 
                                alt="Equipo Darom SA" 
                                className="mobile-team-image" 
                                loading="lazy"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default About;