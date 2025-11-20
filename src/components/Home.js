import { Container, Row, Col, Card, Carousel, Button, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { 
  FaCheckCircle, FaBuilding, FaVials, FaHandshake, 
  FaWhatsapp, FaGoogle, FaStar, FaMapMarkerAlt, 
  FaTruck, FaIndustry, FaAward, FaUsers
} from 'react-icons/fa';
import './Home.css';
import React, { useEffect, useMemo, useCallback } from 'react';
import portada from './portada.webp';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Datos de servicios optimizados con useMemo
  const services = useMemo(() => [
    {
      src: '/portadaplumamixer.jpg',
      title: 'HORMIGÓN ELABORADO Y BOMBEO',
      description: 'Calidad certificada IRAM con servicios de bombeo para proyectos de cualquier escala. Dosificación precisa y control de calidad en tiempo real.',
      features: ['Certificación IRAM', 'Bombeo hasta 100m', 'Control tecnológico', 'Entrega programada'],
      backup: { text: 'ALIADO ESTRATÉGICO', logo: '/logolomanegra.png' },
      link: '/services/hormigon'
    },
    {
      src: '/portadacoralon.JPG',
      title: 'MATERIALES DE CONSTRUCCIÓN',
      description: 'Amplia gama de materiales seleccionados para cada etapa constructiva. Stock permanente y asesoramiento técnico especializado.',
      features: ['+200 productos', 'Stock garantizado', 'Asesoramiento técnico', 'Logística eficiente'],
      link: '/services/materiales'
    },
    {
      src: '/portadamovofi.jpg',
      title: 'ESTUDIO Y MOVIMIENTO DE SUELOS',
      description: 'Análisis precisos y preparación de terreno para cimentaciones seguras. Equipos modernos y personal calificado.',
      features: ['Estudios geotécnicos', 'Maquinaria especializada', 'Compactación controlada', 'Informes técnicos'],
      link: '/services/suelos'
    },
    {
      src: '/portadapisosindustriales.png',
      title: 'PISOS INDUSTRIALES',
      description: 'Soluciones duraderas para superficies de alto tránsito. Tecnología Sika y ejecución certificada.',
      features: ['Tecnología Sika', 'Resistencia superior', 'Acabados perfectos', 'Garantía extendida'],
      backup: { text: 'TECNOLOGÍA SIKA', logo: '/LOGOSIKA.png' },
      link: '/services/pisos'
    }
  ], []);

  const featuredProducts = useMemo(() => [
    { 
      src: '/mathidrofugosika20l.jpg', 
      name: 'Hidrofugo Sika 20 lts', 
      category: 'Impermeabilizantes',
      price: 'Consultar',
      link: '/services/materiales' 
    },
    { 
      src: '/matlad12.jpg', 
      name: 'Ladrillo 12x12x18', 
      category: 'Cerámicos',
      price: 'Consultar',
      link: '/services/materiales' 
    },
    { 
      src: '/matbolsonarena.jpg', 
      name: 'Arena en Bolsón', 
      category: 'Áridos',
      price: 'Consultar',
      link: '/services/materiales' 
    },
    { 
      src: '/matcementoloma50kg.jpg', 
      name: 'Cemento Loma Negra 50kg', 
      category: 'Cementos',
      price: 'Consultar',
      link: '/services/materiales' 
    }
  ], []);

  const suppliers = useMemo(() => [
    { src: '/logolomanegra.png', alt: 'Loma Negra', category: 'Materiales' },
    { src: '/LOGOSIKA.png', alt: 'Sika', category: 'Tecnología' },
    { src: '/LOGOACINDAR.png', alt: 'Red Acindar', category: 'Aceros' },
    { src: '/logodafre.jpg', alt: 'Dafre', category: 'Materiales' },
    { src: '/logo varsovia.jpg', alt: 'Grupo Varsovia', category: 'Desarrollo' },
    { src: '/LOGOTECMA.PNG', alt: 'Tecma', category: 'Tecnología' },
    { src: '/logoeleprint.png', alt: 'Eleprint', category: 'Innovación' },
    { src: '/logogoldir.png', alt: 'Goldir', category: 'Constructora' },
    { src: '/dycasalogo.jpg', alt: 'Ieb Construcciones', category: 'Constructora' },
    { src: '/logoaubasa.png', alt: 'Aubasa', category: 'Infraestructura' },
    { src: '/logopfisterer.png', alt: 'Pfisterer', category: 'Tecnología' },
    { src: '/logoweber.png', alt: 'Weber', category: 'Materiales' },
    { src: '/logofanelli.png', alt: 'Fanelli', category: 'Materiales' },
    { src: '/posesalogo.jpg', alt: 'Pose sa', category: 'Constructora' },
    { src: '/logoctibor.png', alt: 'Ctibor', category: 'Tecnología' }
  ], []);

  const testimonios = useMemo(() => [
    { 
      text: "Excelente experiencia. Muy organizado, con seguimiento GPS del trayecto del camión, y el conductor, súper amable y muy colaborativo para facilitar la descarga. Recomiendo!", 
      author: "Sebastian Leis",
      project: "Cliente Particular",
      rating: 5
    },
    { 
      text: "Excelente desde la atención del vendedor hasta la logística. Muy profesionales! Recomiendo. Compromiso y Puntualidad eso genera la confianza!", 
      author: "Adriana Rosende",
      project: "Cliente Particular",
      rating: 5
    },
    { 
      text: "Excelente atención y logística. Fueron puntuales y organizados. Salió perfecto el trabajo, volveremos a contratarlos seguramente.", 
      author: "Construcciones La Plata",
      project: "Empresa Constructora",
      rating: 5
    },
    { 
      text: "Empresa muy profesional. Excelente atención y cumplimiento de lo pautado. La recomiendo.", 
      author: "Magda Cibei",
      project: "Cliente Particular",
      rating: 5
    },
    { 
      text: "Los super recomiendo. Tan amables desde el inicio de compra hasta el fin de obra. Te asesoran en todo y te responden todas tus dudas sin problemas. Gracias Darom.", 
      author: "Carina Zeiss",
      project: "Cliente Particular",
      rating: 5
    },
    { 
      text: "Los mejores! Compré todo el hierro, ladrillos, materiales para mi casa, llené la platea y 3 losas de hormigón de ellos, todo 10 puntos! Se destaca la atención, los productos y el servicio de entrega!", 
      author: "Pablo Laurito",
      project: "Casa Particular",
      rating: 5
    },
    { 
      text: "Super puntuales y están siempre al contacto con vos! Ya homigonamos unas 6 veces y siempre llegaron siempre horario, un lujo!", 
      author: "Ricardo Ramos",
      project: "Cliente Recurrente",
      rating: 5
    },
    { 
      text: "Muy buena atención. Eficaces y rapidez. Y sobre todo puntualidad y calidad. Excelente logística para una buena atención a sus clientes. Gracias…", 
      author: "Sebastian Godoy",
      project: "Empresa Constructora",
      rating: 5
    },
    { 
      text: "Excelente servicio de atención, no demoran las entregas, y hay seguimiento de los pedidos. Respuesta inmediata siempre y asesoramiento sobre materiales. Muy conforme!", 
      author: "Leonardo Yanson",
      project: "Cliente Particular",
      rating: 5
    },
    { 
      text: "Excelente servicio, cumplieron con los tiempos y todo lo pactado. Quiero destacar la buena predisposición y atención de Guillermo y su impecable programación. Los recomiendo!", 
      author: "Laura Scandroglio",
      project: "Reforma Integral",
      rating: 5
    },
    { 
      text: "La atención y la comunicación con sus clientes es impecable. Destaco la predisposición permanente al servicio de la resolución de problemas. Muy recomendable.", 
      author: "Arq. De los Santos",
      project: "Proyecto Arquitectónico",
      rating: 5
    }
  ], []);

  // Estadísticas de la empresa actualizadas
  const stats = useMemo(() => [
    { value: '45+', label: 'Años de Experiencia', icon: FaAward },
    { value: '3000+', label: 'Proyectos Completados', icon: FaBuilding },
    { value: '3M+', label: 'm² Construidos', icon: FaUsers },
    { value: '60+', label: 'Profesionales', icon: FaUsers }
  ], []);

  const ServiceCard = useCallback(({ service }) => (
  <Card className="home-service-card shadow-lg h-100">
    <div className="service-image-container position-relative">
      <Card.Img 
        variant="top" 
        src={service.src} 
        alt={service.title} 
        loading="lazy"
        className="service-img"
      />
      {service.backup && (
        <div className="backup-badge">
          <small className="text-muted">{service.backup.text}</small>
          <img 
            src={service.backup.logo} 
            alt="Logo proveedor" 
            loading="lazy"
            className="supplier-logo-small"
          />
        </div>
      )}
    </div>
    <Card.Body className="d-flex flex-column position-relative" style={{ zIndex: 10 }}>
      <Card.Title className="h5">{service.title}</Card.Title>
      <Card.Text className="flex-grow-1">{service.description}</Card.Text>
      
      {/* Features list */}
      <ul className="service-features list-unstyled small mb-3">
        {service.features?.map((feature, idx) => (
          <li key={idx} className="mb-1">
            <FaCheckCircle className="text-warning me-2" size={12} />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        as={Link}
        to={service.link}
        variant="warning" 
        className="w-100 mt-auto position-relative"
        style={{ zIndex: 20 }}
      >
        VER MÁS DETALLES
      </Button>
    </Card.Body>
  </Card>
), []);

  const ProductCard = useCallback(({ product }) => (
    <Card className="product-card text-center h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={product.src} 
        alt={product.name} 
        loading="lazy"
        className="product-img"
      />
      <Card.Body className="d-flex flex-column">
        <Badge bg="outline-danger" className="mb-2 align-self-center">{product.category}</Badge>
        <Card.Title className="h6">{product.name}</Card.Title>
        <div className="product-price mb-2">
          <strong className="text-danger">{product.price}</strong>
        </div>
        <Link to={product.link} className="mt-auto">
          <Button variant="outline-danger" size="sm" className="w-100">
            COTIZAR PRODUCTO
          </Button>
        </Link>
      </Card.Body>
    </Card>
  ), []);

  const StatsCard = useCallback(({ stat }) => {
    const IconComponent = stat.icon;
    return (
      <div className="text-center text-white">
        <IconComponent size={48} className="mb-3 opacity-75" />
        <h3 className="display-6 fw-bold mb-2">{stat.value}</h3>
        <p className="mb-0 opacity-90">{stat.label}</p>
      </div>
    );
  }, []);

  return (
    <Container fluid className="px-0">
      <Helmet>
        <title>Darom SA - Líderes en Hormigón y Materiales para Construcción | Zona Sur</title>
        <meta name="description" content="Darom SA: 45 años liderando el mercado de hormigón elaborado, materiales de construcción y pisos industriales. Calidad certificada, entrega inmediata en Zona Sur." />
        <meta name="keywords" content="hormigón elaborado, materiales construcción, pisos industriales, estudio suelos, construcción Buenos Aires, Darom SA" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ConstructionBusiness",
            "name": "Darom SA",
            "url": "https://www.daromsa.com.ar",
            "logo": "https://www.daromsa.com.ar/logo-darom.png",
            "description": "Líderes en hormigón elaborado, materiales de construcción y pisos industriales con 45 años de experiencia",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Florencio Varela",
              "addressRegion": "Buenos Aires",
              "addressCountry": "Argentina"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-34.814249",
              "longitude": "-58.307373"
            },
            "telephone": "+542215739000",
            "openingHours": "Mo-Fr 07:00-18:00, Sa 07:00-13:00",
            "areaServed": "Buenos Aires - Zona Sur",
            "knowsAbout": ["Hormigón Elaborado", "Materiales de Construcción", "Pisos Industriales", "Estudio de Suelos"]
          })}
        </script>
      </Helmet>

      {/* Hero Section Mejorada */}
      <section className="hero-section">
        <div 
          className="hero-background"
          style={{ backgroundImage: `url(${portada})` }}
        ></div>
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-80 py-5">
              <Col lg={7} className="text-center text-lg-start">
                <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
                  <FaAward className="me-2 text-danger" />LÍDERES DESDE 1978
                </Badge>
                <h1 className="hero-title mb-4 text-white">
                  CONSTRUIMOS LAS <span className="text-warning">BASES</span> DE TU PROYECTO
                </h1>
                <p className="hero-subtitle lead mb-4 text-white">
                  Más de 45 años proporcionando soluciones integrales en hormigón, materiales y pisos industriales para obras de cualquier escala en Zona Sur.
                </p>
                
                <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
                    target="_blank"
                    className="whatsapp-btn fw-bold px-4"
                  >
                    <FaWhatsapp className="me-2" /> COTIZAR PROYECTO
                  </Button>
                  
                  {/* Google Rating Badge - Versión anterior mejorada */}
                  <a 
                    href="#reviews" 
                    className="google-rating-badge d-flex align-items-center text-decoration-none py-2 px-3"
                  >
                    <div className="d-flex align-items-center me-2">
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    
                    <div className="d-flex align-items-center me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                      <span className="rating-value">4.7</span>
                    </div>
                    
                    <div className="rating-details">
                      <div className="rating-count">+50 valoraciones</div>
                      <div className="rating-source">Google Reviews</div>
                    </div>
                  </a>
                </div>
              </Col>
              
              <Col lg={5} className="text-center mt-5 mt-lg-0">
                <div className="partner-logo-container">
                  <p className="text-white mb-3 small fw-bold">ALIADO ESTRATÉGICO</p>
                  <img 
                    src="/logolomanegra.png" 
                    alt="Loma Negra - Partner estratégico" 
                    className="partner-logo-img"
                    loading="lazy" 
                  />
                  <p className="text-white mt-2 small">Calidad certificada con los más altos estándares</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 bg-dark">
        <Container>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col key={index} xs={6} md={3}>
                <StatsCard stat={stat} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Compromiso Section REORGANIZADA */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            {/* Columna del video primero */}
            <Col md={6} className="mb-4 mb-md-0">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.youtube.com/embed/--7y8f63ZPk" 
                  title="Video institucional Darom SA - 45 años de experiencia en construcción"
                  allowFullScreen
                  loading="lazy"
                  className="video-embed"
                ></iframe>
              </div>
              <div className="text-center mt-3">
                <small className="text-muted">Conoce nuestra planta y procesos de calidad</small>
              </div>
            </Col>
            
            {/* Columna del contenido con badge arriba */}
            <Col md={6} className="ps-md-5">
              <div className="text-center text-md-start mb-4">
                <Badge bg="outline-danger" className="mb-3">NUESTRO COMPROMISO</Badge>
              </div>
              <h2 className="section-title mb-4 text-center text-md-start">Calidad que Perdura por Generaciones</h2>
              
              <div className="commitment-grid">
                <div className="commitment-item">
                  <div className="commitment-icon">
                    <FaCheckCircle className="text-white" />
                  </div>
                  <div>
                    <h5>Calidad Certificada IRAM</h5>
                    <p className="small">Materiales con certificación nacional e internacional para resultados duraderos</p>
                  </div>
                </div>
                
                <div className="commitment-item">
                  <div className="commitment-icon">
                    <FaHandshake className="text-white" />
                  </div>
                  <div>
                    <h5>Asesoría Técnica Especializada</h5>
                    <p className="small">Ingenieros y técnicos disponibles para optimizar cada etapa de tu proyecto</p>
                  </div>
                </div>
                
                <div className="commitment-item">
                  <div className="commitment-icon">
                    <FaBuilding className="text-white" />
                  </div>
                  <div>
                    <h5>Experiencia Comprobada</h5>
                    <p className="small">+3000 proyectos ejecutados con éxito en múltiples industrias y escalas</p>
                  </div>
                </div>
                
                <div className="commitment-item">
                  <div className="commitment-icon">
                    <FaVials className="text-white" />
                  </div>
                  <div>
                    <h5>Control de Calidad Riguroso</h5>
                    <p className="small">Pruebas de laboratorio en cada fase de producción y entrega</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <Badge bg="outline-danger" className="mb-3">NUESTROS SERVICIOS</Badge>
              <h2 className="section-title">Soluciones Integrales para Cada Etapa Constructiva</h2>
              <p className="lead">Desde la cimentación hasta los acabados finales</p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Proveedores Section Mejorada */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">ALIANZAS ESTRATÉGICAS DE <span className="text-danger">PRIMER NIVEL</span></h2>
          
          <div className="suppliers-section">
            <Row className="justify-content-center g-4">
              {suppliers.map((supplier, index) => (
                <Col key={index} xs={4} sm={3} md={2} className="text-center">
                  <div className="supplier-card">
                    <img 
                      src={supplier.src} 
                      alt={supplier.alt} 
                      className="supplier-logo img-fluid" 
                      loading="lazy"
                      title={supplier.alt}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Testimonios Section Mejorada */}
      <section id="reviews" className="py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <Badge bg="outline-danger" className="mb-3">OPINIONES VERIFICADAS</Badge>
              <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
            </Col>
          </Row>
          
          <Row>
            <Col lg={8} className="mx-auto">
              <Carousel indicators={true} interval={6000} pause="hover">
                {testimonios.map((testimonio, index) => (
                  <Carousel.Item key={index}>
                    <div className="testimonial-card text-center p-5">
                      <div className="rating mb-3">
                        {[...Array(testimonio.rating)].map((_, i) => (
                          <FaStar key={i} className="text-warning" />
                        ))}
                      </div>
                      <blockquote className="testimonial-text fs-5 mb-4">
                        "{testimonio.text}"
                      </blockquote>
                      <div className="testimonial-author">
                        <strong>{testimonio.author}</strong>
                        <div className="text-muted small">{testimonio.project}</div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
              
              <div className="text-center mt-4">
                <Button 
                  variant="outline-danger" 
                  href="https://g.page/r/CYU8aD9k5psMEAE/review" 
                  target="_blank"
                >
                  <FaGoogle className="me-2" /> Dejar Mi Reseña
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Productos Destacados */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <Badge bg="outline-danger" className="mb-3">PRODUCTOS DESTACADOS</Badge>
              <h2 className="section-title">Materiales de Primera Calidad</h2>
            </Col>
          </Row>
          
          <Row className="g-4">
            {featuredProducts.map((product, index) => (
              <Col key={index} lg={3} md={6}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          
          <Row className="mt-4">
            <Col className="text-center">
              <Link to="/services/materiales">
                <Button variant="outline-danger" size="lg">
                  VER CATÁLOGO COMPLETO
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final Mejorado */}
      <section className="py-5 bg-gradient-custom text-white">
        <Container>
          <Row className="align-items-center text-center text-lg-start">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">¿Listo para Iniciar tu Proyecto?</h2>
              <p className="lead mb-0">
                Nuestro equipo de ingenieros y especialistas está listo para asesorarte 
                y garantizar el éxito de tu construcción
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button 
                variant="light" 
                size="lg" 
                href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20me%20interesa%20cotizar%20un%20proyecto%20y%20necesito%20asesoramiento%20" 
                target="_blank"
                className="fw-bold px-4"
              >
                <FaWhatsapp className="me-2" /> COTIZAR AHORA
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Zona de Cobertura Mejorada */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Badge bg="outline-light" className="mb-3">COBERTURA GARANTIZADA</Badge>
              <h2 className="section-title mb-4 text-white">Entregas en Toda Zona Sur</h2>
              
              <p className="mb-4 text-white">
                Desde nuestro Parque Industrial Tecnológico en Florencio Varela, cubrimos 
                eficientemente toda Zona Sur del Gran Buenos Aires con nuestra flota propia.
              </p>
              
              <div className="coverage-list">
                <div className="coverage-item text-white">
                  <FaMapMarkerAlt className="text-warning me-3" />
                  <div>
                    <strong className="text-white">Área Principal de Cobertura</strong>
                    <div className="text-light small">
                      Berazategui, La Plata, Florencio Varela, Quilmes, Avellaneda, Puerto Madero
                    </div>
                  </div>
                </div>
                
                <div className="coverage-item text-white">
                  <FaTruck className="text-info me-3" />
                  <div>
                    <strong className="text-white">Logística Optimizada</strong>
                    <div className="text-light small">
                      Flota propia - Entregas programadas - Seguimiento en tiempo real
                    </div>
                  </div>
                </div>
                
                <div className="coverage-item text-white">
                  <FaIndustry className="text-success me-3" />
                  <div>
                    <strong className="text-white">Planta Central</strong>
                    <div className="text-light small">
                      Parque Industrial Tecnológico - Florencio Varela
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="coverage-map-container position-relative">
                <Image 
                  src="/mapaoficial.png" 
                  alt="Zona de cobertura Darom SA - Florencio Varela, La Plata, Puerto Madero" 
                  fluid 
                  className="coverage-map-sm rounded shadow"
                  loading="lazy"
                />
                <div className="map-overlay-info">
                  <div className="info-card bg-white rounded p-3 shadow-sm">
                    <h6 className="mb-2 text-dark">📍 Base Operativa</h6>
                    <p className="small mb-0 text-dark">Parque Industrial Florencio Varela</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Home;