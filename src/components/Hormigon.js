import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Hormigon.css';

function Hormigon() {
  const videoRef = useRef(null);

  // Efecto optimizado para el video
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const video = videoRef.current;
    if (!video) return;

    // Configuración para móviles
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleLoadedData = () => {
      // En móviles, necesitamos esperar a una interacción del usuario
      if (!isMobile) {
        video.play().catch(e => console.log("Auto-play prevented:", e));
      }
    };

    const handleFirstInteraction = () => {
      if (isMobile && video.paused) {
        video.play().catch(e => console.log("Play after interaction prevented:", e));
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Datos estructurados
  const benefits = [
    { 
      src: '/elegirnoslaboratorio.png', 
      title: 'LABORATORIO EN OBRA', 
      description: 'Controles de calidad realizados por profesionales experimentados con equipamiento especializado.' 
    },
    { 
      src: '/elegirnosticket.png', 
      title: 'TICKET DE PESADA', 
      description: 'Comprobante con el peso exacto de cada carga, garantizando transparencia.' 
    },
    { 
      src: '/elegirnoscargaprecintada.png', 
      title: 'CARGA PRECINTADA', 
      description: 'Sistema de seguridad que evita adulteraciones durante el transporte.' 
    },
    { 
      src: '/elegirnosseguimiento.png', 
      title: 'RASTREO SATELITAL', 
      description: 'Monitoreo en tiempo real desde planta hasta obra para máxima trazabilidad.' 
    },
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

  const hormigonTypes = [
    { title: 'TRADICIONALES', text: 'Desde H8 hasta H47 - Resistencia comprobada en laboratorio' },
    { title: 'BOMBEABLES', text: 'H17 a H38 - Formulaciones especiales para bombeo continuo' },
    { title: 'GUNITADOS', text: 'H21 a H38 - Para proyección con equipo especializado' },
    { title: 'RDC', text: 'RDC 100 a 300 - Hormigones de rápido endurecimiento' },
    { title: 'ESPECIALES', text: 'Livianos, vistos, hidrófugos, con fibra y formulaciones a medida' },
  ];

  const trackConversion = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
        'value': 1.0,
        'currency': 'ARS',
      });
    }
  };

  const ContactButton = ({ text = "CONTACTAR ASESOR", variant = "danger" }) => (
    <Button 
      href="https://api.whatsapp.com/send/?phone=5492215739000&text=Hola%20Darom%20SA,%20estoy%20interesado%20en%20sus%20servicios%20de%20hormigón%20elaborado.%20¿Podrían%20brindarme%20más%20información%20y%20cotización?" 
      target="_blank"
      className={`hormigon-cta-button my-3 ${variant}`}
      onClick={trackConversion}
    >
      <FaWhatsapp className="me-2" /> {text}
    </Button>
  );

  // Helpers para renderizado
  const renderCarouselItems = (items, itemsPerSlide, renderItem) => {
    return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }, (_, i) => (
      <Carousel.Item key={i}>
        <Row className="justify-content-center">
          {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
            <Col key={idx} md={12/itemsPerSlide}>
              {renderItem(item, idx)}
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    ));
  };

  return (
    <Container fluid className="px-0 hormigon-container">
      <Helmet>
        <title>Hormigón Elaborado de Alta Calidad | Darom SA</title>
        <meta name="description" content="Hormigón elaborado con garantía de calidad, servicio de bombeo y seguimiento satelital. ¡Solicita tu cotización hoy mismo!" />
      </Helmet>

      {/* 1. HERO SECTION CON VIDEO OPTIMIZADO */}
<section className="hormigon-hero-section position-relative">
  <video 
    ref={videoRef}
    className="hormigon-hero-video"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0
    }}
  >
    <source src="/IMG-20241112132439373.mp4" type="video/mp4" />
    Tu navegador no soporta videos HTML5.
  </video>
  
  <div className="hormigon-hero-overlay d-flex align-items-center justify-content-center">
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <div className="hormigon-hero-content-wrapper w-100 py-5 px-4" style={{
            backgroundColor: 'rgba(49, 49, 49, 0.7)',
            backdropFilter: 'blur(2px)',
            borderRadius: '8px'
          }}>
            <h1 className="hormigon-hero-title display-3 fw-bold mb-4">
              <span className="d-block">POTENCIÁ TUS PROYECTOS</span> 
              <span className="text-red">CON NUESTO HORMIGÓN</span>
            </h1>
            
            <p className="hormigon-hero-subtitle lead mb-4">
              <strong className="text-red">CONFIANZA, VERSATILIDAD Y GARANTÍA</strong>
            </p>
            
            <ul className="hormigon-benefits-list list-unstyled mb-5 mx-auto" style={{maxWidth: '600px'}}>
              <li className="mb-3 d-flex justify-content-center align-items-center">
                <FaCheckCircle className="hormigon-check-icon me-2 text-red" />
                <span>Producción bajo normas IRAM</span>
              </li>
              <li className="mb-3 d-flex justify-content-center align-items-center">
                <FaCheckCircle className="hormigon-check-icon me-2 text-red" />
                <span>Bombeo profesional con equipos modernos</span>
              </li>
              <li className="mb-3 d-flex justify-content-center align-items-center">
                <FaCheckCircle className="hormigon-check-icon me-2 text-red" />
                <span>Control de calidad en tiempo real</span>
              </li>
              <li className="mb-3 d-flex justify-content-center align-items-center">
                <FaCheckCircle className="hormigon-check-icon me-2 text-red" />
                <span>Seguimiento satelital de cada entrega</span>
              </li>
            </ul>
            
            <p className="hormigon-hero-discount h5 mb-4">
              <strong>¡Comparte tu lista o presupuesto con nosotros!</strong>
              <br />
              <span>Te ofrecemos los mejores precios y condiciones.</span>
            </p>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <ContactButton text="SOLICITAR PRESUPUESTO" />
            </div>

            {/* Badge de Google + Logo Loma Negra integrados */}
<div className="d-flex justify-content-center align-items-center gap-3 mt-4 flex-wrap">
  {/* Badge Google moderno */}
  <a 
    href="#reviews" 
    className="d-inline-flex align-items-center text-decoration-none py-2 px-3"
    style={{
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      flexShrink: 0
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
    }}
  >
    <div className="d-flex align-items-center me-2">
      {/* Logo Google */}
      <svg width="24" height="24" viewBox="0 0 24 24" className="me-2">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      
      {/* Estrella y puntuación */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" className="me-1">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
      <span style={{
        fontSize: '18px',
        fontWeight: '700',
        color: '#333',
        marginRight: '8px'
      }}>4.5</span>
      
      {/* Separador y valoraciones */}
      <div style={{
        borderLeft: '1px solid rgba(0,0,0,0.1)',
        paddingLeft: '8px',
        lineHeight: '1.2'
      }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#1a1a1a' }}>+50 valoraciones</div>
        <div style={{ fontSize: '11px', color: '#666' }}>Google</div>
      </div>
    </div>
  </a>

  {/* Separador visual */}
  <div style={{
    height: '40px',
    width: '1px',
    backgroundColor: 'rgba(255,255,255,0.3)'
  }}></div>
              {/* Separador visual */}
              <div style={{
                height: '40px',
                width: '1px',
                backgroundColor: 'rgba(255,255,255,0.3)'
              }}></div>

              {/* Logo Loma Negra mejorado */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '8px',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}>
                <p className="text-white mb-1 small" style={{
                  fontSize: '0.7rem',
                  opacity: 0.9,
                  letterSpacing: '0.5px',
                  fontWeight: '500'
                }}>RESPALDADOS POR</p>
                <img 
                  src="/logolomanegra.png" 
                  alt="Loma Negra Partner" 
                  style={{
                    height: '40px',
                    
                    transition: 'all 0.3s ease',
                    opacity: 1
                  }}
                  loading="lazy"
                  onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</section>
      {/* 2. TIPOS DE HORMIGÓN - Carrusel optimizado */}
<section className="hormigon-types-section py-4 py-md-5">
  <Container>
    <h2 className="hormigon-section-title text-center mb-4 mb-md-5">
      TIPOS DE <span className="hormigon-text-red">HORMIGÓN</span>
    </h2>
    
    <Carousel 
      indicators={false} 
      interval={3000} // Aumenté ligeramente el intervalo para mejor lectura
      touch={true} // Asegura que funcione el touch en móviles
      pause={false} // Evita que se pause al interactuar
      keyboard={false} // Mejor performance en móviles
      slide={true} // Fuerza el slide animation
      fade={false} // Más rápido que fade
      swipeable={true} // Permite arrastrar en móviles
    >
      {renderCarouselItems(hormigonTypes, 2, (type, idx) => (
        <div className="hormigon-type-card p-3 p-md-4 text-center text-md-left" key={idx}>
          <h4 className="fw-bold hormigon-text-red mb-2 mb-md-3">{type.title}</h4>
          <p className="text-dark mb-0">{type.text}</p>
        </div>
      ))}
    </Carousel>

    <div className="text-center mt-3 mt-md-4">
      <ContactButton 
        text="CONSULTAR POR RESISTENCIAS ESPECIALES" 
        className="btn-sm" // Versión más compacta para móviles
      />
    </div>
  </Container>
</section>

      {/* 2. BENEFICIOS PRINCIPALES - Justo después del hero */}
            <section className="py-5 bg-white">
              <Container>
                <Row className="align-items-center">
                  <Col md={6} className="pe-md-5">
                    <h2 className="fw-bold mb-4">MÁS DE <span className="text-red">3.000.000 m²</span> CONSTRUIDOS </h2>
                    <p className="mb-4">
                      Hemos desarrollado un servicio que integra todas las soluciones para tu obra:
                    </p>
                    <ul className="features-list mb-4">
                      <li><span className="check-icon">✓</span> Control de calidad en tiempo real</li>
                      <li><span className="check-icon">✓</span> Materiales certificados</li>
                      <li><span className="check-icon">✓</span> Responsabilidad total garantizada</li>
                    </ul>
                    <ContactButton text="CONOCE NUESTRO MÉTODO" />
                  </Col>
                  <Col md={6}>
                    <Row className="text-left stats-row">
                      {[
                        { value: "+40", label: "Años de experiencia" },
                        { value: "+3000", label: "Proyectos completados" },
                        { value: "100%", label: "Garantía cumplida" },
                        { value: "25%", label: "Ahorro promedio" }
                      ].map((item, idx) => (
                        <Col sm={6} key={idx} className="mb-4">
                          <div className="stat-card p-3">
                            <h3 className="text-red fw-bold">{item.value}</h3>
                            <p className="mb-0">{item.label}</p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>

      {/* 3. BENEFICIOS */}
      <section className="hormigon-benefits-section py-2">
        <Container>
          <h2 className="hormigon-section-title text-center mb-5">BENEFICIOS <span className="hormigon-text-red">QUE NOS MARCAN</span></h2>
          <Row>
            {benefits.map((item, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <div className="hormigon-benefit-card h-100">
                  <div className="hormigon-benefit-logo-container">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="hormigon-benefit-img"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="hormigon-benefit-title">{item.title}</h3>
                  <p className="hormigon-benefit-text">{item.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      

      {/* 4. SERVICIO DE BOMBEO */}
      <section className="hormigon-pumping-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <h2 className="hormigon-section-title mb-4">SERVICIO DE <span className="hormigon-text-red">BOMBEO</span> PROFESIONAL</h2>
              <p className="hormigon-section-subtitle mb-4">
                Soluciones completas para colocación de hormigón:
              </p>
              <ul className="hormigon-features-list mb-4">
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Bombas estacionarias CIFA SP 750 (50-100 m³/h)</li>
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Bombas pluma SX36/32 (hasta 130 m³/h)</li>
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Operadores certificados con amplia experiencia</li>
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Asesoramiento técnico sin cargo</li>
              </ul>
              <ContactButton variant="danger" text="SOLICITAR COTIZACIÓN DE BOMBEO" />
            </Col>
            <Col md={6} className="order-md-1">
              <Carousel>
                <Carousel.Item>
                  <img src="/bombaarrastre.png" alt="Bomba de arrastre" className="hormigon-pumping-img" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src="/bombapluma.png" alt="Bomba pluma" className="hormigon-pumping-img" />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 4. PRUEBA SOCIAL - Construcción de confianza */}
<section className="py-3 bg-light">
  <Container>
    <h2 className="text-center mb-2">EMPRESAS QUE <span className="text-red">CONFÍAN EN NOSOTROS</span></h2>
    
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
      {/* 6. SOBRE NOSOTROS */}
      <section className="hormigon-about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="hormigon-section-title mb-4"><span className="hormigon-text-red">40 AÑOS</span> LIDERANDO EL MERCADO</h2>
              <p className="hormigon-section-subtitle2 mb-4">
                Desde 1978, Darom SA ha sido sinónimo de calidad y confiabilidad en el sector de la construcción.
              </p>
              <ul className="hormigon-features-list mb-4">
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Hormigón elaborado bajo normas IRAM</li>
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Tecnología de última generación</li>
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Equipo técnico altamente capacitado</li>
                <li><FaCheckCircle className="hormigon-check-icon me-2" /> Soporte integral pre y post venta</li>
              </ul>
              <ContactButton text="HABLAR CON UN EXPERTO" />
            </Col>
            <Col md={6}>
              <img src="\IMG_3139.jpg" alt="Historia Darom SA" className="hormigon-about-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}

export default Hormigon;