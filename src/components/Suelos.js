import React, { useEffect } from 'react';
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import { FaWhatsapp, FaCheck, FaRuler, FaTruck, FaCompressArrowsAlt, FaTimes } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Suelos.css';

function Suelos() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Configuración de eventos para Google Analytics
    const trackButtons = document.querySelectorAll('.darom-track-button');
    trackButtons.forEach(button => {
      button.addEventListener('click', trackConversion);
    });
    
    return () => {
      trackButtons.forEach(button => {
        button.removeEventListener('click', trackConversion);
      });
    };
  }, []);

  const trackConversion = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC'
      });
    }
    
    // Evento para Facebook Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Contact');
    }
  };

  const ContactButton = ({ text = "HABLA CON UN ASESOR", variant = "danger", className = "" }) => (
    <Button 
      href="https://api.whatsapp.com/send/?phone=5492216394407&text=Hola%20Darom%20SA,%20estoy%20interesado%20en%20sus%20servicios%20de%20suelos%20industriales.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20soluciones%20DRM%20360%E2%84%A2?"  
      target="_blank"
      rel="noopener noreferrer"
      className={`darom-cta-button ${variant} darom-track-button ${className}`}
      onClick={trackConversion}
    >
      <FaWhatsapp className="me-2" /> {text}
    </Button>
  );

  // Datos para el carrusel de proveedores
  const suppliers = [
    { src: "/logolomanegra.png", alt: "Loma Negra" },
    { src: "/LOGOSIKA.png", alt: "Sika" },
    { src: "/logodafre.jpg", alt: "Dafre" },
    { src: "/logo varsovia.jpg", alt: "Grupo Varsovia" },
    { src: "/LOGOTECMA.PNG", alt: "Tecma" },
    { src: "/logoeleprint.png", alt: "Eleprint" },
    { src: "/logolomanegra.png", alt: "Loma Negra" },
    { src: "/dycasalogo.jpg", alt: "Ieb Construcciones" }
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

  const fasesEstudio = [
    { 
      title: "Reconocimiento del terreno", 
      text: "Inspección visual y recolección de datos iniciales" 
    },
    { 
      title: "Perforaciones y muestreo", 
      text: "Extracción de muestras a diferentes profundidades" 
    },
    { 
      title: "Análisis de laboratorio", 
      text: "Ensayo de humedad, granulometría y resistencia" 
    },
    { 
      title: "Informe técnico", 
      text: "Documentación detallada con recomendaciones" 
    }
  ];

  const equiposMovimiento = [
    { 
      name: "Excavadoras", 
      spec: "Capacidad 1.2 m³", 
      img: "/portadamov6.jpg" 
    },
    { 
      name: "Bulldozer", 
      spec: "350 HP", 
      img: "/portadamov4.jpg" 
    },
    { 
      name: "Compactadoras", 
      spec: "13 Ton de fuerza", 
      img: "/portadamovofi.jpg" 
    }
  ];

  const garantiasData = [
    { 
      icon: <FaRuler />, 
      title: "Precisión Milimétrica", 
      text: "Equipos topográficos de última generación" 
    },
    { 
      icon: <FaTruck />, 
      title: "Movimientos Eficientes", 
      text: "30% más rápido que métodos tradicionales" 
    },
    { 
      icon: <FaCompressArrowsAlt />, 
      title: "Compactación Certificada", 
      text: "Garantía de densidad óptima" 
    }
  ];

  return (
    <div className="darom-body">
      <Helmet>
        <title>Suelos Industriales | Estudio y Movimiento Profesional | Darom SA</title>
        <meta name="description" content="Paquete SUELO DRM: estudio geotécnico completo y movimiento de suelos con garantía de compactación. Optimiza tus proyectos desde la base." />
        <meta name="keywords" content="estudio de suelos, movimiento de tierras, compactación, cimentación, geotecnia, construcción" />
        <meta property="og:title" content="Suelos Industriales | Darom SA" />
        <meta property="og:description" content="Soluciones profesionales para estudio y movimiento de suelos con garantía de calidad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.darom.com.ar/suelos" />
        <meta property="og:image" content="/portadamov1.jpg" />
      </Helmet>
      
    {/* --- Sección Hero Centrada Mejorada --- */}
<section className="darom-hero-section position-relative">
  {/* Overlay sutil para mejor legibilidad */}
  <div className="position-absolute w-100 h-100" style={{
    backgroundColor: 'rgba(0,0,0,0.5)'
  }} />
  {/* Imagen de fondo original */}
  <div className="darom-hero-image position-absolute w-100 h-100" style={{ 
    backgroundImage: `url('/portadamov1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }} />
  
  
  
  {/* Contenido principal */}
  <div className="darom-hero-overlay position-relative" style={{zIndex: 2}}>
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          {/* Título principal */}
          <h1 className="text-white display-4 fw-bold mb-4">
            LA BASE SÓLIDA PARA TU PROYECTO <span className="text-danger">COMIENZA AQUÍ</span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-white lead fs-3 mb-4">
            <strong>PAQUETE SUELO DRM</strong> - Soluciones integrales para cimentaciones seguras
          </p>
          
          {/* Lista de beneficios */}
          <ul className="list-unstyled fs-4 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            <li className="mb-2 d-flex justify-content-center align-items-center text-white">
              <FaCheck className="text-danger me-2" />
              <span>Estudio geotécnico completo</span>
            </li>
            <li className="mb-2 d-flex justify-content-center align-items-center text-white">
              <FaCheck className="text-danger me-2" />
              <span>Movimiento de suelos optimizado</span>
            </li>
            <li className="mb-2 d-flex justify-content-center align-items-center text-white">
              <FaCheck className="text-danger me-2" />
              <span>Compactación certificada</span>
            </li>
            <li className="mb-2 d-flex justify-content-center align-items-center text-white">
              <FaCheck className="text-danger me-2" />
              <span>Informe para normativas</span>
            </li>
          </ul>
          
          {/* Badge de Google con tus especificaciones exactas */}
          <div className="google-rating-container mb-4">
            <a 
              href="#reviews" 
              className="d-inline-flex align-items-center text-decoration-none py-2 px-3 bg-white rounded-4"
              style={{
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div className="d-flex align-items-center me-2">
                <svg width="24" height="24" viewBox="0 0 24 24" className="me-1">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span className="fw-bold ms-1" style={{fontSize: '1.4rem', color: '#333'}}>4.5</span>
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#555',
                borderLeft: '1px solid #eee',
                paddingLeft: '0.5rem',
                lineHeight: '1.2'
              }}>
                <div>+50 valoraciones</div>
                <div style={{fontSize: '0.65rem'}}>Google</div>
              </div>
            </a>
          </div>
          
          {/* Botón de contacto */}
          <div className="d-flex justify-content-center">
            <ContactButton />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
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

      {/* --- Sección Problemas --- */}
      <section className="darom-section darom-section-dark">
        <Container>
          <h2 className="darom-section-title">¿RIESGOS DE NO HACER UN BUEN ESTUDIO DE SUELOS? <span>NOSOTROS LOS EVITAMOS</span></h2>
          <Row className="g-4 my-4">
            {[
              "Grietas en estructuras por asentamientos",
              "Inundaciones por napas freáticas no detectadas",
              "Sobre costos por cimentaciones mal diseñadas",
              "Rechazo de permisos municipales"
            ].map((problema, idx) => (
              <Col md={3} sm={6} key={idx}>
                <div className="darom-problem-card">
                  <p className="mb-0"><FaTimes className="darom-problem-icon" />{problema}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <ContactButton text="EVITA ESTOS PROBLEMAS" />
          </div>
        </Container>
      </section>

      {/* Resto del código permanece igual... */}
      {/* --- Sección Garantías --- */}
      <section className="darom-section darom-section-light">
        <Container>
          <h2 className="darom-section-title">NUESTRAS <span>GARANTÍAS</span></h2>
          <Row className="g-4">
            {garantiasData.map((item, index) => (
              <Col md={4} key={index}>
                <div className="darom-card darom-card-danger text-center h-100">
                  <div className="darom-card-icon">{item.icon}</div>
                  <h4 className="fw-bold">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* --- Sección Estudio de Suelos --- */}
      <section className="darom-section darom-section-gray">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold mb-4">ESTUDIO DE SUELOS <span className="darom-text-danger">CERTIFICADO</span></h2>
              <p className="lead">
                Nuestros informes cumplen con los requisitos de:
              </p>
              <ul className="mb-4 fs-5">
                <li className="mb-2"><FaCheck className="darom-text-danger me-2" />Normas IRAM 2541-2542</li>
                <li><FaCheck className="darom-text-danger me-2" />Reglamentos municipales</li>
              </ul>
              <p className="mb-4 fw-bold">Resultados confiables para tomar las mejores decisiones en tu proyecto.</p>
              <ContactButton />
              <p className="mt-2 small">Asesoramiento sin cargo</p>
            </Col>
            <Col md={6}>
              <img src="\estudiosuelo.jpg" alt="Equipo de estudio" className="img-fluid rounded shadow-lg" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Fases del Estudio --- */}
      <section className="darom-section darom-section-light">
        <Container>
          <h2 className="darom-section-title">ETAPAS DEL <span>ESTUDIO GEOTÉCNICO</span></h2>
          <div className="darom-timeline">
            {fasesEstudio.map((fase, idx) => (
              <div key={idx} className="darom-timeline-item">
                <div className="darom-timeline-icon"><FaCheck /></div>
                <div className="darom-timeline-content">
                  <h4 className="fw-bold">{fase.title}</h4>
                  <p className="fs-5">{fase.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <ContactButton text="CONOCE NUESTRO MÉTODO" />
          </div>
        </Container>
      </section>

      {/* --- Sección Movimiento de Suelos --- */}
      <section className="darom-section darom-section-dark">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <h2 className="fw-bold mb-4">MOVIMIENTO DE SUELOS <span className="darom-text-danger">PRECISO</span></h2>
              <p className="lead">
                Con maquinaria de última generación para:
              </p>
              <ul className="mb-4 fs-5">
                <li className="mb-2"><FaCheck className="darom-text-danger me-2" />Excavaciones profundas</li>
                <li className="mb-2"><FaCheck className="darom-text-danger me-2" />Nivelación láser</li>
                <li className="mb-2"><FaCheck className="darom-text-danger me-2" />Compactación certificada</li>
                <li><FaCheck className="darom-text-danger me-2" />Manejo de materiales especiales</li>
              </ul>
              <ContactButton variant="danger" text="COTIZAR MOVIMIENTO" />
            </Col>
            <Col md={6} className="order-md-1">
              <img src="\portadamov5.jpg" alt="Maquinaria para movimiento de suelos" className="img-fluid rounded shadow-lg" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Equipos --- */}
      <section className="darom-section darom-section-gray">
        <Container>
          <h2 className="darom-section-title">NUESTRA <span>FLOTA</span></h2>
          <Row className="g-4">
            {equiposMovimiento.map((equipo, idx) => (
              <Col md={4} key={idx}>
                <div className="darom-card darom-card-danger text-center">
                  <img src={equipo.img} alt={equipo.name} className="img-fluid mb-3 rounded shadow" />
                  <h4 className="fw-bold">{equipo.name}</h4>
                  <p className="text-muted">{equipo.spec}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <ContactButton text="CONOCE NUESTROS EQUIPOS" />
          </div>
        </Container>
      </section>

      {/* --- Testimonios Mejorado --- */}
<section className="darom-section darom-section-light py-5">
  <Container>
    <h2 className="darom-section-title mb-4 mb-lg-5">CLIENTES <span>SATISFECHOS</span></h2>
    
    {/* Desktop (md+) - 3 testimonios por slide */}
    <div className="d-none d-md-block">
      <Carousel indicators={false} interval={null} variant="dark">
        {[...Array(Math.ceil(testimonios.length / 3))].map((_, i) => (
          <Carousel.Item key={`d-${i}`}>
            <Row className="g-4">
              {testimonios.slice(i * 3, i * 3 + 3).map((testimonio, idx) => (
                <Col md={4} key={`desktop-${i}-${idx}`}>
                  <div className="darom-testimonial-card h-100">
                    <p className="darom-testimonial-text">"{testimonio.text}"</p>
                    <p className="darom-testimonial-author mt-3">— {testimonio.author}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    {/* Mobile (sm) - 1 testimonio por slide */}
    <div className="d-block d-md-none">
      <Carousel indicators={true} interval={5000}>
        {testimonios.map((testimonio, idx) => (
          <Carousel.Item key={`m-${idx}`}>
            <div className="darom-testimonial-card mx-auto" style={{maxWidth: '90%'}}>
              <p className="darom-testimonial-text">"{testimonio.text}"</p>
              <p className="darom-testimonial-author mt-3">— {testimonio.author}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </Container>
</section>

      {/* --- Paquetes --- */}
      <section className="darom-section darom-section-light">
        <Container>
          <h2 className="darom-section-title">PAQUETES <span>SUELOS</span></h2>
          
          {/* Paquete 1 */}
          <div className="darom-package-card">
            <h3 className="darom-package-title">1. Estudio Básico SUELODRM™</h3>
            <p className="fw-bold">Informe geotécnico esencial para proyectos pequeños</p>
            <ul className="mb-3">
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />3 perforaciones estándar (hasta 5m)</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Ensayos de humedad y granulometría</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Recomendaciones de cimentación</li>
            </ul>
            <p className="fw-bold fs-5">💰 Ideal para: Viviendas unifamiliares, ampliaciones</p>
            <div className="text-center mt-3">
              <ContactButton text="COTIZAR ESTE PAQUETE" className="w-100" />
            </div>
          </div>

          {/* Paquete 2 */}
          <div className="darom-package-card" style={{backgroundColor: 'var(--darom-light-danger)'}}>
            <h3 className="darom-package-title">2. Estudio Completo INDUSTRIALDRM™</h3>
            <p className="fw-bold">Análisis exhaustivo para proyectos exigentes</p>
            <ul className="mb-3">
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />6 perforaciones (hasta 10m)</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Ensayos de resistencia y compresibilidad</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Detección de napas freáticas</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Informe para normativas SENASA (opcional)</li>
            </ul>
            <p className="fw-bold fs-5">💰 Ideal para: Naves industriales, edificios, centros logísticos</p>
            <div className="text-center mt-3">
              <ContactButton text="COTIZAR ESTE PAQUETE" className="w-100" />
            </div>
          </div>

          {/* Paquete 3 */}
          <div className="darom-package-card" style={{backgroundColor: 'var(--darom-light-danger)'}}>
            <h3 className="darom-package-title">3. SOLUCIÓN INTEGRAL SUELO360™</h3>
            <p className="fw-bold">Paquete completo estudio + movimiento de suelos</p>
            <ul className="mb-3">
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Todo lo del Paquete 2</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Movimiento de suelos con compactación</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />Certificado final de densidad</li>
              <li className="darom-package-feature"><FaCheck className="darom-package-feature-icon" />1 año de garantía en compactación</li>
            </ul>
            <p className="fw-bold fs-5">💰 Ahorro del 15% vs contratar por separado</p>
            <div className="text-center mt-3">
              <ContactButton text="COTIZAR ESTE PAQUETE" className="w-100" />
            </div>
          </div>
        </Container>
      </section>

      {/* --- CTA Final --- */}
      <section className="darom-section darom-section-danger">
        <Container className="text-center">
          <h2 className="mb-4 fw-bold">¿LISTO PARA COMENZAR TU PROYECTO?</h2>
          <p className="lead mb-4 fs-3">Nuestros especialistas están disponibles para asesorarte</p>
          <div className="d-flex justify-content-center gap-3">
            <ContactButton text="CONTACTAR AHORA" variant="dark" />
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Suelos;