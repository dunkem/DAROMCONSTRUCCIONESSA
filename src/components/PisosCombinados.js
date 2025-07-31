import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useRef } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

import './Pisos.css';

const PisosCombinados = () => {
  // Efectos para la primera parte (Pisosindustrialesad)
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.overflowX = 'hidden';

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    return () => {
      if (navbar) navbar.style.display = 'block';
      if (footer) footer.style.display = 'block';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  // Refs para la segunda parte (Pisos)
  const videoRef = useRef(null);

  // Efecto para manejar la reproducción automática del video
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const video = videoRef.current;
    if (!video) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const handleLoadedData = () => {
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

  
    


  const ContactButton = ({ text = "HABLA CON UN ASESOR", variant = "danger" }) => (
    <Button 
      href="https://wa.me/send/?phone=5492216394407&text=Hola%20Darom%20SA,%20estoy%20interesado%20en%20sus%20soluciones%20de%20pisos%20industriales%20DRM%20360%E2%84%A2.%20%C2%BFPodr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%20y%20una%20cotizaci%C3%B3n%20personalizada?"  
      target="_blank"
      className={`cta-button my-3 ${variant}`}
    >
      <FaWhatsapp className="me-2" /> {text}
    </Button>
  );

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
  },
  ];

  const obras = ["/obra34.png", "/portadapisollaneado2.jpeg", "/portadaserviciopluma.jpg", "/portadahormigonbombeo.jpg", "/obra50.png", "/portadahormigonoficial.JPG"];

  return (
    <div style={{ overflowX: 'hidden' }}>
{/* ============================================= */}
{/* PRIMERA PARTE: Pisosindustrialesad (prelanding) */}
{/* ============================================= */}
<div className="Pisosindustrialesad" style={{ margin: 0, padding: 0 }}>
  {/* Hero Section */}
  <section className="py-5 bg-black text-white position-relative overflow-hidden" style={{ margin: 0 }}>
    <div className="position-absolute top-0 end-0 w-100 h-100" style={{
      background: 'url(/images/industrial-floor-problems.jpg) no-repeat center/cover',
      opacity: 0.3
    }}></div>
    <div className="container position-relative py-4 py-lg-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center" data-aos="fade-up">
          <h1 className="display-5 fw-bold mb-3">
            <span className="text-white">El 90% de los Pisos Industriales Sufren </span>
            <span className="text-danger">Fisuras y Sobrecostos</span>
            <span className="text-white"> por </span>
            <span className="text-danger">3 Errores Comunes</span>
          </h1>
          <p className="lead mb-0 fs-4 text-white">
            Descubre Cómo Evitarlos y Ahorrar en Tu Obra
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Sección de Errores */}
  <section id="errores" className="py-5 bg-white">
    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">ADVERTENCIA</span>
        <h2 className="display-5 fw-bold mb-3">Los 3 Errores que Arruinan tu Piso Industrial</h2>
        <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
          Luego de 3 millones m² construidos en 47 años de experiencia, descubrimos estos errores que aumentan costos en pisos industriales.
        </p>
      </div>

      {/* Mapeo de errores */}
      {[{
        id: 1,
        titulo: "No realizar un Estudio de Suelo adecuado",
        consecuencias: [
          "→ Hundimientos y fisuras por resistencia desconocida",
          "→ Rellenos inesperados que aumentan costos",
          "→ Improvisaciones que encarecen la obra"
        ],
        solucion: [
          "✓ Base sólida sin fisuras futuras",
          "✓ Optimización de materiales",
          "✓ Ejecución más rápida"
        ],
        textoSolucion: "Estudio de suelo completo con pruebas de laboratorio.",
        img: "/fisuraspisos.jpg",
        alt: "Fisuras en piso industrial",
        desc: "Daños por estudios de suelo mal ejecutado o inexistente.",
        reverse: false
      }, {
        id: 2,
        titulo: "Contratar múltiples proveedores",
        consecuencias: [
          "→ Retrasos por falta de coordinación",
          "→ \"Pase de culpas\" cuando hay fallas",
          "→ Costos ocultos por tiempos muertos"
        ],
        solucion: [
          "✓ Coordinación perfecta de plazos",
          "✓ Comunicación directa",
          "✓ Responsabilidad total"
        ],
        textoSolucion: "Gestión unificada con un solo equipo responsable.",
        img: "/pisosindustrialesproblemas.png",
        alt: "Problemas de coordinación",
        desc: "Caos por múltiples proveedores",
        reverse: true
      }, {
        id: 3,
        titulo: "Falta de control en calidad del hormigón",
        consecuencias: [
          "→ Hormigón insuficiente o de baja calidad",
          "→ Compactación inadecuada",
          "→ Falta de garantías reales"
        ],
        solucion: [
          "✓ Supervisión profesional",
          "✓ Mediciones exactas",
          "✓ Ensayos documentados"
        ],
        textoSolucion: "Sistema de verificación con tecnología.",
        img: "/IMG_3139.jpg",
        alt: "Problemas en hormigón",
        desc: "Defectos por falta de control",
        reverse: false
      }].map((error) => (
        <div className="mb-5" data-aos="fade-up" key={error.id}>
          <div className="row align-items-center flex-column flex-lg-row g-4 shadow-sm border rounded overflow-hidden">
            {/* Imagen - izquierda o derecha según reverse */}
            {error.reverse && (
              <div className="col-lg-6 order-1 order-lg-0">
                <div className="position-relative h-100">
                  <img
                    src={error.img}
                    alt={error.alt}
                    className="w-100 h-100 object-fit-cover errores"
                    loading="lazy"
                    style={{
                      maxHeight: '100%',
                      border: '3px solid #dee2e6',
                      borderRadius: '0.25rem'
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-black bg-opacity-75 text-white text-center border-top border-danger">
                    <p className="mb-0 fw-bold">{error.desc}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contenido */}
            <div className="col-lg-6 p-4 order-0 order-lg-1">
              <span className="badge bg-danger rounded-pill px-3 py-2">Error #{error.id}</span>
              <h3 className="h2 mt-3 mb-3">{error.titulo}</h3>
              <h4 className="h5 text-danger mb-2">Consecuencias:</h4>
              <ul className="mb-4">
                {error.consecuencias.map((c, i) => <li className="mb-2" key={i}>{c}</li>)}
              </ul>
              <div className="bg-white p-3 rounded border border-danger">
                <h4 className="h5 text-danger mb-2">Solución:</h4>
                <p className="fw-semibold mb-2">{error.textoSolucion}</p>
                <ul className="mb-0">
                  {error.solucion.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
            </div>

            {/* Imagen si no es reverse */}
            {!error.reverse && (
              <div className="col-lg-6 order-1">
                <div className="position-relative h-100">
                  <img
                    src={error.img}
                    alt={error.alt}
                    className="w-100 h-100 object-fit-cover errores"
                    loading="lazy"
                    style={{
                      maxHeight: '100%',
                      border: '3px solid #dee2e6',
                      borderRadius: '0.25rem'
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-black bg-opacity-75 text-white text-center border-top border-danger">
                    <p className="mb-0 fw-bold">{error.desc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
</div>


      {/* CTA Final Mejorado */}
      <section className="py-4 bg-black text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'url(/images/industrial-floor-solution.jpg) no-repeat center/cover',
          opacity: 0.15
        }}></div>
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-3">¿Planeas construir un piso industrial?</h2>
              <p className="lead fs-4 mb-4">
                Evita errores costosos con nuestra solución integral
              </p>
              
              {/* Card DRM 360 Mejorada */}
<div className="position-relative rounded-4 overflow-hidden mb-4 border border-3 border-danger shadow-lg" 
     style={{minHeight: '400px'}}>
  
  {/* Imagen de fondo con relación de aspecto mantenida */}
  <div className="position-absolute top-0 start-0 w-100 h-100">
    <img 
      src="/UltraFloorPro.png" 
      alt="Tecnología avanzada en pisos industriales SUELO DRM 360™" 
      className="w-100 h-100 object-cover"
      loading="lazy"
      style={{objectPosition: 'center center', objectFit: 'cover'}}
    />
  </div>
  
  {/* Capa de overlay ajustada */}
  <div className="position-absolute top-0 start-0 w-100 h-100" 
       style={{background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%)'}}></div>
  
  {/* Contenido principal responsive */}
  <div className="position-relative h-100 d-flex flex-column justify-content-center p-3 p-md-5">
    
    {/* Título ajustado para móviles */}
    <h2 className="display-4 display-md-3 fw-bold text-white mb-3 mb-md-4">
      <span className="d-block">Pisos Industriales</span>
      <span className="text-danger">SUELO DRM 360™</span>
    </h2>
    
    {/* Descripción responsive */}
    <div className="bg-white bg-opacity-10 p-3 p-md-4 rounded-3 mb-3 mb-md-4" 
         style={{maxWidth: '100%', borderLeft: '4px solid #dc3545'}}>
      <p className="fs-4 fs-md-3 mb-0 text-white">
        Sistema integral con <span className="text-danger fw-bold">garantía extendida</span>, 
        <span className="text-danger fw-bold"> control de calidad</span> certificado y 
        <span className="text-danger fw-bold"> tecnología de punta</span> para tus proyectos industriales.
      </p>
    </div>
  </div>
</div>
            </Col>
          </Row>
        </Container>
      </section>
    
     {/* 1. HERO SECTION - Versión con overlay oscuro semitransparente */}
    <section className="pisos-hero-section position-relative">
      <video 
        ref={videoRef}
        className="hero-video"
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
        <source src="/IMG_3315.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      <div className="hero-overlay d-flex align-items-center">
        <Container fluid className="px-0">
          <Row className="justify-content-center mx-0">
            <Col xs={12} className="px-0">
              <div className="hero-content-wrapper w-100 py-5" style={{
                backgroundColor: 'rgba(49, 49, 49, 0.7)',
                backdropFilter: 'blur(2px)'
              }}>
                <Container>
                  <Row className="justify-content-center">
                    <Col xl={9} lg={10} className="text-center">
                      {/* Título más compacto */}
                      <h1 className="display-4 fw-bold mb-3 text-white">
                        <span className="d-block">CONSTRUÍ TU PISO INDUSTRIAL MÁS RÁPIDO Y</span>
                        <span className="text-red">SIN CONTRATAR MÚLTIPLES PROVEEDORES</span>
                      </h1>
                      
                      <p className="hero-subtitle lead mb-4 text-white">
                        <span className="d-block">PAQUETE SUELO DRM 360™: Todo en Uno</span>
                        <span className="d-block">(Estudio + Movimiento + Hormigón + Garantía)</span>
                      </p>
                      
                      <ul className="hero-features-list list-unstyled mb-4 text-start text-md-center mx-auto">
                        <li className="mb-2">
                          <span className="check-icon me-2">✓</span>
                          <span className="text-white">Eliminamos sobreprecios ocultos</span>
                        </li>
                        <li className="mb-2">
                          <span className="check-icon me-2">✓</span>
                          <span className="text-white">Evitamos retrasos innecesarios</span>
                        </li>
                        <li className="mb-2">
                          <span className="check-icon me-2">✓</span>
                          <span className="text-white">Garantía de calidad integral</span>
                        </li>
                      </ul>
                      
                      {/* Contenedor de botones y valoraciones */}
                      <div className="d-flex flex-column align-items-center">
                        <div className="mb-3">
                          <ContactButton text="HABLA CON UN EXPERTO" />
                        </div>
                        
                        {/* Badge de Google moderno */}
                        <div className="google-rating-container">
                          <a 
                            href="#reviews" 
                            className="d-inline-flex align-items-center text-decoration-none py-2 px-3"
                            style={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              borderRadius: '20px',
                              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                              transition: 'all 0.3s ease',
                              border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.transform = 'none';
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                            }}
                          >
                            <div className="d-flex align-items-center me-2">
                              <svg width="30" height="30" viewBox="0 0 24 24" className="me-1">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" className="me-1">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                              <span style={{
                                fontSize: '25px',
                                fontWeight: '700',
                                color: '#333',
                                marginRight: '4px'
                              }}>4.5</span>
                            </div>
                            <div style={{
                              fontSize: '12px',
                              color: '#555',
                              borderLeft: '1px solid #eee',
                              paddingLeft: '8px',
                              lineHeight: '1.2'
                            }}>
                              <div>+50 valoraciones</div>
                              <div style={{ fontSize: '11px' }}>Google</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    
          {/* 2. BENEFICIOS PRINCIPALES - Justo después del hero */}
          <section className="py-5 bg-white">
            <Container>
              <Row className="align-items-center">
                <Col md={6} className="pe-md-5">
                  <h2 className="fw-bold mb-4">MÁS DE <span className="text-red">3.000.000 m²</span> CONSTRUIDOS </h2>
                  <p className="mb-4">
                    Hemos desarrollado un servicio que integra todas las soluciones para pisos industriales:
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
    
    {/* 5. TESTIMONIOS - Carrusel Responsive */}
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5">OPINIONES DE <span className="text-red">NUESTROS CLIENTES</span></h2>
        
        {/* Carrusel para desktop (md+) */}
        <div className="d-none d-md-block">
          <Carousel indicators={false} interval={3000}>
            {[...Array(Math.ceil(testimonios.length / 3))].map((_, i) => (
              <Carousel.Item key={i}>
                <Row className="g-4">
                  {testimonios.slice(i * 3, i * 3 + 3).map((testimonio, idx) => (
                    <Col md={4} key={`d-${i}-${idx}`}>
                      <div className="testimonio-card p-4 h-100">
                        <p className="fst-italic">"{testimonio.text}"</p>
                        <p className="fw-bold mt-3 mb-0">— {testimonio.author}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
    
        {/* Carrusel para móvil (sm) */}
        <div className="d-block d-md-none">
          <Carousel indicators={false} interval={null}>
            {testimonios.map((testimonio, idx) => (
              <Carousel.Item key={`m-${idx}`}>
                <div className="testimonio-card p-4 mx-2">
                  <p className="fst-italic">"{testimonio.text}"</p>
                  <p className="fw-bold mt-3 mb-0">— {testimonio.author}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
    
          {/* 3. SOLUCIONES/PAQUETES - Producto principal */}
          <section className="py-5 bg-dark text-white">
            <Container>
              <h2 className="fw-bold mb-5 text-center">SOLUCIONES INTEGRALES <span className="text-red">DRM 360™</span></h2>
              <Row className="g-4">
                {[
                  {
                    title: "OFERTA 1 — PAQUETE BASE",
                    subtitle: "Diagnóstico preciso y base compactada con garantía certificada",
                    features: [
                      "Relevamiento Topográfico Técnico (100% bonif.)",
                      "Estudio Geotécnico Certificado (50% bonif.)",
                      "Preparación y Movimiento de Suelos",
                      "Ensayos de compactación incluidos"
                    ],
                    garantia: "Compactación Certificada: Re-ejecución sin costo",
                    premium: false
                  },
                  {
                    title: "OFERTA 2 — SOLUCIÓN INDUSTRIAL",
                    subtitle: "Piso industrial listo en tiempo y forma con control total",
                    features: [
                      "Todo lo del Paquete Base +",
                      "Hormigón con Macrofibra Sika Fiber 48™",
                      "Control Hormigón Certificado DRM360™",
                      "Mano de Obra Especializada con nivelación láser de alta precisión"
                    ],
                    garantia: "FullCover™ 5 Años: Corrección sin costo",
                    premium: true
                  },
                  {
                    title: "OFERTA 3 — ULTRAFLOOR PRO™",
                    subtitle: "Máxima resistencia con 10 años de garantía estructural",
                    features: [
                      "Todo lo del Paquete Industrial +",
                      "Terminación Sika Professional™",
                      "Mantenimiento preventivo por 3 años",
                      "Hormigón de ultra resistencia"
                    ],
                    garantia: "FullCover™ 10 Años: Garantía extendida",
                    premium: false
                  }
                ].map((paquete, idx) => (
                  <Col md={4} key={idx}>
                    <div className={`paquete-card p-4 h-100 text-dark ${paquete.premium ? 'premium' : ''}`}>
                      {paquete.premium && <div className="premium-badge">RECOMENDADO</div>}
                      <h3 className="text-red">{paquete.title}</h3>
                      <p className="fw-bold">"{paquete.subtitle}"</p>
                      <ul className="mb-4">
                        {paquete.features.map((feature, i) => (
                          <li key={i}><span className="check-icon">✓</span> {feature}</li>
                        ))}
                      </ul>
                      <div className="garantia-box mb-3">
                        <h5 className="text-red">GARANTÍA TÉCNICA</h5>
                        <p>{paquete.garantia}</p>
                      </div>
                      <ContactButton 
                        text="COTIZAR PAQUETE" 
                        variant={paquete.premium ? "danger" : "outline-danger"} 
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
    
          
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">PROYECTOS <span className="text-red">RECIENTES</span></h2>
        
        {/* Carrusel para móvil - Oculta en escritorio */}
        <div className="d-md-none">
          <Carousel indicators={false} interval={null}>
            {[...Array(Math.ceil(obras.length / 2))].map((_, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center px-2">
                  {obras.slice(index * 2, index * 2 + 2).map((obra, idx) => (
                    <div key={idx} className="mx-1" style={{ width: '48%' }}>
                      <div className="obra-card">
                        <img src={obra} alt="Obra realizada" className="img-fluid" loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        
        {/* Grid normal para escritorio - Oculta en móvil */}
        <Row className="g-3 obra-gallery d-none d-md-flex">
          {obras.map((obra, idx) => (
            <Col md={4} sm={6} key={idx}>
              <div className="obra-card">
                <img src={obra} alt="Obra realizada" className="img-fluid" loading="lazy" />
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <ContactButton text="VER MÁS PROYECTOS" />
        </div>
      </Container>
    </section>
    
          {/* 4. PROCESO SIMPLIFICADO */}
    <section className="py-5 bg-light">
      <Container className="text-center">
        <h2 className="mb-4">Comenzar es Muy Sencillo</h2>
        <p className="text-muted mb-5">En solo 3 pasos, podés tener el piso industrial que tu empresa necesita, sin complicaciones.</p>
        
        <Row className="g-4 position-relative">
          {/* Línea de conexión para desktop */}
          <div className="d-none d-md-block position-absolute top-50 start-0 end-0 h-2 bg-danger bg-opacity-25" style={{zIndex: 0}}></div>
          
          {/* Paso 1 */}
          <Col md={4} className="position-relative z-1">
            <div className="bg-white p-4 rounded shadow-sm h-100 border-top border-3 border-danger">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold'}}>1</div>
              <h3 className="h5">Agendá tu Diagnóstico</h3>
              <p className="text-muted">Contactanos por WhatsApp y coordinamos una visita sin cargo para evaluar tu proyecto.</p>
            </div>
          </Col>
          
          {/* Paso 2 */}
          <Col md={4} className="position-relative z-1">
            <div className="bg-white p-4 rounded shadow-sm h-100 border-top border-3 border-danger">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold'}}>2</div>
              <h3 className="h5">Recibí tu Propuesta</h3>
              <p className="text-muted">En 48 hs hábiles, te presentamos un plan detallado y personalizado con la mejor solución.</p>
            </div>
          </Col>
          
          {/* Paso 3 */}
          <Col md={4} className="position-relative z-1">
            <div className="bg-white p-4 rounded shadow-sm h-100 border-top border-3 border-danger">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '50px', height: '50px', fontSize: '1.5rem', fontWeight: 'bold'}}>3</div>
              <h3 className="h5">Iniciamos la Obra</h3>
              <p className="text-muted">Con todo aprobado, ponemos manos a la obra para construir tu piso industrial ideal.</p>
            </div>
          </Col>
        </Row>
        
        <div className="mt-5">
          <ContactButton 
            text="Agendar Diagnóstico Ahora por WhatsApp" 
            variant="danger" 
            className="px-4 py-3 fw-bold shadow" 
          />
        </div>
      </Container>
    </section>
    
    {/* 5. SOLUCIÓN INTEGRAL DRM360 */}
    <section className="py-5 bg-white">
      <Container className="text-center">
        <h2 className="mb-4">DRM360™: Tu Camino Simplificado al Piso Industrial Perfecto</h2>
        <p className="text-muted mb-5 max-w-3xl mx-auto">Olvidate de coordinar múltiples proveedores. Con nuestro sistema 4-en-1, gestionamos todo por vos, garantizando calidad y eficiencia de punta a punta.</p>
        
        <Row className="g-4 justify-content-center">
          {/* Paso 1 */}
          <Col lg={3} md={6} className="position-relative">
            <div className="bg-light p-4 rounded h-100">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '40px', height: '40px', fontSize: '1.25rem', fontWeight: 'bold'}}>1</div>
              <h4 className="h5 text-danger">Estudio de Suelo</h4>
              <p className="text-muted small">Análisis geotécnico y topográfico preciso para una base sin sorpresas.</p>
              <div className="d-none d-lg-block position-absolute top-30 end-0 h-1 w-25 bg-danger bg-opacity-25"></div>
            </div>
          </Col>
          
          {/* Paso 2 */}
          <Col lg={3} md={6} className="position-relative">
            <div className="bg-light p-4 rounded h-100">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '40px', height: '40px', fontSize: '1.25rem', fontWeight: 'bold'}}>2</div>
              <h4 className="h5 text-danger">Movimiento de Suelo</h4>
              <p className="text-muted small">Preparación y compactación certificada del terreno con control en tiempo real.</p>
              <div className="d-none d-lg-block position-absolute top-30 end-0 h-1 w-25 bg-danger bg-opacity-25"></div>
            </div>
          </Col>
          
          {/* Paso 3 */}
          <Col lg={3} md={6} className="position-relative">
            <div className="bg-light p-4 rounded h-100">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '40px', height: '40px', fontSize: '1.25rem', fontWeight: 'bold'}}>3</div>
              <h4 className="h5 text-danger">Hormigón Certificado</h4>
              <p className="text-muted small">Calidad controlada con laboratorio in-situ, tickets de pesada y rastreo satelital.</p>
              <div className="d-none d-lg-block position-absolute top-30 end-0 h-1 w-25 bg-danger bg-opacity-25"></div>
            </div>
          </Col>
          
          {/* Paso 4 */}
          <Col lg={3} md={6} className="position-relative">
            <div className="bg-light p-4 rounded h-100">
              <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '40px', height: '40px', fontSize: '1.25rem', fontWeight: 'bold'}}>4</div>
              <h4 className="h5 text-danger">Garantía Unificada</h4>
              <p className="text-muted small">Cobertura integral FULLCOVER™ que te protege ante cualquier eventualidad.</p>
            </div>
          </Col>
        </Row>
        
        <div className="mt-5">
          <img 
            src="/Proceso DRM360.png" 
            alt="Esquema Visual Proceso DRM360" 
            className="img-fluid rounded shadow" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "/img/placeholder-proceso.jpg";
            }} 
          />
        </div>
      </Container>
    </section>
    
    {/* 7. CTA FINAL - Última oportunidad */}
    <section className="py-5 bg-danger text-white">
      <Container className="text-center">
        <h2 className="mb-4 fw-bold">¿LISTO PARA TRANSFORMAR TUS PISOS INDUSTRIALES?</h2>
        <div className="lead mb-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="me-3" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'white',
              flexShrink: 0
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>Obtén una evaluación gratuita con nuestros especialistas</span>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="me-3" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'white',
              flexShrink: 0
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>Servicio sin retrasos por falta de coordinación entre proveedores</span>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <span className="me-3" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'white',
              flexShrink: 0
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>Sin sobreprecios al contratar servicios por separado</span>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <span className="me-3" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'white',
              flexShrink: 0
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>4 servicios en 1, con garantía unificada FULLCOVER™</span>
          </div>
        </div>
         <ContactButton 
                text="CONTACTAR AHORA" 
                variant="light" 
                className="px-5 py-3 fw-bold shadow" 
              />
            </Container>
          </section>
      
      </div>
 
  );
};

export default PisosCombinados;