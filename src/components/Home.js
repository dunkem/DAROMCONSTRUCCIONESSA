import { Container, Row, Col, Card, Carousel, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaBuilding, FaVials, FaHandshake, FaWhatsapp, FaGoogle, FaStar} from 'react-icons/fa';
import './Home.css';
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    loadGTM();
  }, []);

  const loadGTM = () => {
    if (window.location.hostname !== 'localhost' && !window.dataLayer) {
      const gtmScript = document.createElement('script');
      gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-717135166";
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', 'AW-717135166');
    }
  };

  const trackConversion = (eventCategory, eventLabel) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
        'value': 1.0,
        'currency': 'ARS',
        'event_category': eventCategory,
        'event_label': eventLabel
      });
    }
  };

  // Datos de servicios
  const services = [
    {
      src: '/portadaplumamixer.jpg',
      title: 'HORMIGÓN ELABORADO Y BOMBEO',
      description: 'Calidad certificada con servicios de bombeo para proyectos de cualquier escala',
      backup: { text: 'RESPALDADOS POR', logo: '/logolomanegra.png' },
      link: '/services/hormigon'
    },
    {
      src: '/portadacoralon.JPG',
      title: 'MATERIALES DE CONSTRUCCIÓN',
      description: 'Amplia gama de materiales seleccionados para cada etapa constructiva',
      link: '/services/materiales'
    },
    {
      src: '/portadamovofi.jpg',
      title: 'ESTUDIO Y MOVIMIENTO DE SUELOS',
      description: 'Análisis precisos y preparación de terreno para cimentaciones seguras',
      link: '/services/suelos'
    },
    {
      src: '/portadapisosindustriales.png',
      title: 'PISOS INDUSTRIALES',
      description: 'Soluciones duraderas para superficies de alto tránsito',
      backup: { text: 'RESPALDADOS POR', logo: '/LOGOSIKA.png' },
      link: '/services/pisos'
    }
  ];

  const featuredProducts = [
    { src: '/mathidrofugosika20l.jpg', name: 'Hidrofugo Sika 20 lts', link: '/services/materiales' },
    { src: '/matlad12.jpg', name: 'Ladrillo 12x12x18', link: '/services/materiales' },
    { src: '/matbolsonarena.jpg', name: 'Arena en Bolsón', link: '/services/materiales' },
    { src: '/matcementoloma50kg.jpg', name: 'Cemento Loma Negra 50kg', link: '/services/materiales' }
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
  const testimonios = [
  { 
    text: "Los mejores! Compré todo el hierro, ladrillos y materiales para mi casa. Llené la platea y 3 losas de hormigón con ellos, todo impecable. Destaco la atención, productos y servicio de entrega.", 
    author: "Pablo Laurito" 
  },
  { 
    text: "Muy buena atención. Eficacia, rapidez y puntualidad en la entrega. Excelente logística para satisfacer las necesidades de sus clientes.", 
    author: "Sebastian Godoy" 
  },
  { 
    text: "Excelente servicio de atención, entregas sin demoras y seguimiento de pedidos. Respuesta inmediata y asesoramiento técnico especializado.", 
    author: "Grupo Varsovia" 
  },
  { 
    text: "Cumplieron con los tiempos y lo pactado. Destaco la excelente predisposición y programación impecable de Guillermo.", 
    author: "Laura Scandroglio" 
  },
  { 
    text: "La atención y comunicación son impecables. Gran predisposición para resolver problemas técnicos. Altamente recomendable.", 
    author: "Arq. De los Santos" 
  },
  { 
    text: "Excelente atención y predisposición para asesorar en materiales de construcción.", 
    author: "Matias Muchenik" 
  },
  { 
    text: "Resalto la atención de Aixa: profesional, predispuesta y resolutiva. Muy satisfecho con el servicio.", 
    author: "Manuel Garriga" 
  },
  { 
    text: "Excelente servicio. Comunicación clara y logística eficiente para obras de gran envergadura.", 
    author: "Claudio Castiglia" 
  },
  { 
    text: "Los mejores precios y servicio en 20 años. Siempre que puedo, elijo trabajar con ellos por su seriedad.", 
    author: "Emmanuel Bor" 
  },
  { 
    text: "Atención rápida y soluciones a medida para proyectos arquitectónicos complejos.", 
    author: "Goldir" 
  },
  { 
    text: "Equipo confiable y detallista. Materiales de primera calidad para estructuras exigentes.", 
    author: "German Luiso" 
  }
];

  // Componentes
  const ServiceCard = ({ service }) => (
    <Card className="service-card shadow-lg">
      <div className="service-image-container">
        <Card.Img variant="top" src={service.src} alt={service.title} loading="lazy" />
        {service.backup && (
          <div className="backup-badge">
            <span>{service.backup.text}</span>
            <img src={service.backup.logo} alt="Logo proveedor" loading="lazy" />
          </div>
        )}
      </div>
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <Link to={service.link}>
          <Button 
            variant="danger" 
            onClick={() => trackConversion('Servicios', `Click - ${service.title}`)}
          >
            VER MÁS
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );

  const ProductCard = ({ product }) => (
    <Card className="product-card text-center h-100">
      <Card.Img variant="top" src={product.src} alt={product.name} loading="lazy" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Link to={product.link} className="mt-auto">
          <Button 
            variant="outline-danger" 
            onClick={() => trackConversion('Productos', `Click - ${product.name}`)}
          >
            DETALLES
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );

  const renderCarouselItems = (items, Component, itemsPerSlide = 4) => {
    return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }).map((_, slideIndex) => (
      <Carousel.Item key={slideIndex}>
        <Row>
          {items.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item, idx) => (
            <Col key={idx} lg={3} md={6} className="mb-4">
              <Component {...(Component === ProductCard ? {product: item} : {service: item})} />
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    ));
  };

  return (
    <Container fluid className="px-0">
      <Helmet>
        <title>Darom SA - Soluciones Integrales en Construcción</title>
        <meta name="description" content="Líderes en hormigón elaborado, materiales de construcción y pisos industriales. Calidad garantizada desde 1978." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Darom SA",
            "url": "https://www.daromsa.com.ar",
            "logo": "https://www.daromsa.com.ar/logo-darom.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+542215739000",
              "contactType": "sales",
              "areaServed": "Argentina"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section con Validación Social Completa */}
<section className="hero-section position-relative">
  <div className="hero-overlay">
    <Container>
      <Row className="align-items-center">
        <Col lg={8} className="text-center text-lg-start">
          <h1>TE ACOMPAÑAMOS EN LA CONSTRUCCIÓN DE TU PROYECTO</h1>
          <p className="lead mb-4">TRANSFORMAMOS TUS PROYECTOS CON NUESTRA EXPERIENCIA E INNOVACIÓN EN CADA ETAPA DE CONSTRUCCIÓN.</p>
          
          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start align-items-center">
            {/* Botón WhatsApp */}
            <Button 
              variant="danger" 
              size="lg" 
              href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
              target="_blank"
              onClick={() => trackConversion('CTA Final', 'Click - WhatsApp')}
              className="whatsapp-btn me-3"
            >
              <FaWhatsapp className="me-2" /> SOLICITA TU PRESUPUESTO
            </Button>
            
            {/* Badge Google Reviews - Versión compacta para desktop */}
            <a 
              href="#reviews" 
              className="google-rating-badge d-none d-lg-flex align-items-center text-decoration-none py-2 px-3"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '8px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                maxWidth: '220px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div className="d-flex align-items-center me-2">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              
              {/* Puntuación */}
              <div className="d-flex align-items-center me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginLeft: '3px'
                }}>4.5</span>
              </div>
              
              {/* Texto completo como solicitaste */}
              <div style={{
                fontSize: '13px',
                color: '#555',
                borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
                paddingLeft: '12px',
                lineHeight: '1.3'
              }}>
                <div style={{ 
                  fontWeight: '600',
                  color: '#333'
                }}>+50 valoraciones</div>
                <div style={{ 
                  fontSize: '12px',
                  color: '#666'
                }}>Google Reviews</div>
              </div>
            </a>
          </div>
        </Col>
        
        
        {/* Versión móvil del badge (centrada debajo de todo) */}
      
      <Row className="d-lg-none justify-content-center mt-4">
        <Col xs="auto">
          <a 
            href="#reviews" 
            className="google-rating-badge d-flex align-items-center text-decoration-none py-2 px-3"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              minWidth: '240px'
            }}
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
              <span style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1a1a1a',
                marginLeft: '4px'
              }}>4.5</span>
            </div>
            
            <div style={{
              fontSize: '13px',
              color: '#555',
              borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
              paddingLeft: '12px',
              lineHeight: '1.3'
            }}>
              <div style={{ 
                fontWeight: '600',
                color: '#333'
              }}>+50 valoraciones</div>
              <div style={{ 
                fontSize: '12px',
                color: '#666'
              }}>Google Reviews</div>
            </div>
          </a>
          
        </Col>
        
      </Row>
      <Col lg={4} className="text-center mt-4 mt-lg-0">
          <div className="partner-logo-container">
            <p className="text-white mb-3 small">RESPALDADOS POR</p>
            <img 
              src="/logolomanegra.png" 
              alt="Loma Negra" 
              className="img-fluid" 
              style={{maxHeight: '200px'}}
              loading="lazy" 
            />
          </div>
        </Col>
      </Row>
      
      
    </Container>
  </div>
</section>

      {/* Compromiso Section */}
<section className="py-5 bg-light position-relative">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="mb-4 mb-md-0 pe-md-5">
        <h2 className="section-title">NUESTRO COMPROMISO</h2>
        <p className="lead mb-4">Soluciones estructurales confiables para proyectos exigentes</p>
        
        <div className="commitment-grid">
          <div className="commitment-item">
            <FaCheckCircle className="text-danger" size={24} />
            <div>
              <h5>Calidad Garantizada</h5>
              <p>Materiales certificados y procesos controlados para resultados duraderos</p>
            </div>
          </div>
          
          <div className="commitment-item">
            <FaHandshake className="text-danger" size={24} />
            <div>
              <h5>Asesoría Personalizada</h5>
              <p>Expertos disponibles para guiarte en cada etapa de tu proyecto</p>
            </div>
          </div>
          
          <div className="commitment-item">
            <FaBuilding className="text-danger" size={24} />
            <div>
              <h5>Experiencia Comprobada</h5>
              <p>+3000 proyectos ejecutados con éxito en múltiples industrias</p>
            </div>
          </div>
          
          <div className="commitment-item">
            <FaVials className="text-danger" size={24} />
            <div>
              <h5>Control Riguroso</h5>
              <p>Pruebas de calidad en cada fase de producción</p>
            </div>
          </div>

        </div>
      </Col>
      
      <Col md={6}>
        <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
          <iframe 
            src="https://www.youtube.com/embed/--7y8f63ZPk" 
            title="Video institucional Darom SA" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </Col>
    </Row>
  </Container>
</section>

      {/* Servicios Section */}
      <section className="py-5">
        <Container>
          <h2 className="section-title text-center mb-5">NUESTROS SERVICIOS</h2>
          <Carousel indicators={false} interval={null}>
            {renderCarouselItems(services, ServiceCard)}
          </Carousel>
        </Container>
      </section>

{/* 4. PRUEBA SOCIAL - Construcción de confianza */}
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

      {/* Empresa Section */}
<section className="py-5 bg-dark text-white position-relative">
  <Container>
    <Row className="justify-content-center mb-5">
      <Col lg={8} className="text-center">
        <h2 className="section-title">DAROM S.A. - LÍDERES DESDE 1978</h2>
        <p className="lead">
          Más de 3 millones de m² construidos con estándares internacionales en Buenos Aires
        </p>
      </Col>
    </Row>
    
    <Row className="g-4">
      <Col lg={6}>
        <div className="bg-white text-dark p-4 rounded h-100">
          <h4 className="text-danger mb-3">Nuestra Trayectoria</h4>
          <p>Fundada en 1978, Darom SA ha crecido para convertirse en referente del sector constructivo, combinando tradición familiar con innovación tecnológica.</p>
          <ul className="timeline-list">
            <li>+50 profesionales especializados</li>
            <li>Planta industrial de 15.000 m²</li>
            <li>Tecnología de última generación</li>
            <li>Certificaciones de calidad Nacional</li>
          </ul>
        </div>
      </Col>
      
      <Col lg={6}>
        <div className="bg-white text-dark p-4 rounded h-100">
          <h4 className="text-danger mb-3">Lo que dicen nuestros clientes</h4>
          <div className="testimonial-carousel">
            <Carousel 
              indicators={true} 
              interval={5000} 
              pause={false}
              variant="dark" // Para que las flechas sean visibles
            >
              {testimonios.map((testimonio, index) => (
                <Carousel.Item key={index}>
                  <div className="testimonial-item">
                    <div className="rating mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning" />
                      ))}
                    </div>
                    <p className="fst-italic">"{testimonio.text}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonio.author}</strong>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="text-center mt-3">
            <a 
              href="https://g.page/r/CYU8aD9k5psMEAE/review" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-danger"
              onClick={() => trackConversion('Reseñas', 'Click - Dejar Reseña')}
            >
              <FaGoogle className="me-2" /> Dejá tu reseña
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

      {/* Productos Section */}
<section className="py-5 bg-light">
  <Container>
    <h2 className="section-title text-center mb-5">PRODUCTOS DESTACADOS</h2>
    <Carousel indicators={false} interval={null}>
      {/* Agrupar productos de 4 en 4 (escritorio) y 2 en 2 (móvil) */}
      {[...Array(Math.ceil(featuredProducts.length / 4))].map((_, index) => (
        <Carousel.Item key={index}>
          <div className="row">
            {featuredProducts.slice(index * 4, index * 4 + 4).map((product, i) => (
              <div key={i} className="col-6 col-md-3"> {/* Móvil: 2 (col-6), Escritorio: 4 (col-md-3) */}
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
</section>


      {/* CTA Final */}
      <section className="py-5 bg-danger text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="mb-4 mb-md-0">
              <h2 className="mb-3">¿Listo para tu próximo proyecto?</h2>
              <p className="lead mb-0">Nuestros especialistas están disponibles para asesorarte</p>
            </Col>
            <Col md={4} className="text-md-end">
              <Button 
                variant="light" 
                size="lg" 
                href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
                target="_blank"
                onClick={() => trackConversion('CTA Final', 'Click - WhatsApp')}
                className="whatsapp-btn"
              >
                <FaWhatsapp className="me-2" /> WhatsApp
              </Button>
            </Col>
          </Row>
        </Container>
      </section>



      {/* Zona de Entrega */}
<section className="py-5 bg-light coverage-section">
  <Container>
    <Row className="align-items-center">
      
      <Col md={6} className="order-md-0">
        <h2 className="section-title">COBERTURA DE ENTREGAS</h2>
        <p className="mb-4">
          Entregamos en toda Zona Sur, desde La Plata hasta Puerto Madero, con nuestra base de operaciones 
          ubicada en el Parque Industrial Tecnológico de Florencio Varela.
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">
            <i className="fas fa-map-marker-alt text-danger me-2"></i>
            Área de cobertura garantizada
          </li>
          <li className="mb-2">
            <i className="fas fa-truck text-primary me-2"></i>
            Entregas rápidas y eficientes
          </li>
          <li className="mb-2">
            <i className="fas fa-industry text-success me-2"></i>
            Planta central en Florencio Varela
          </li>
        </ul>
      </Col>
      <Col md={6} className="mb-4 mb-md-0 order-md-1">
        <Image 
          src="/mapaoficial.png" 
          alt="Zona de cobertura de entregas desde Florencio Varela hasta Puerto Madero y La Plata" 
          fluid 
          className="coverage-map"
          loading="lazy"
          width={600}
          height={400}
        />
      </Col>
    </Row>
  </Container>
</section>

      
    </Container>
  );
}

export default Home;