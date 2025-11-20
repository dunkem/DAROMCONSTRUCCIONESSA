import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { Container, Row, Col, Button, Carousel, Spinner } from 'react-bootstrap';
import { FaWhatsapp, FaCheckCircle, FaPlay, FaPause, FaStar, FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import './Hormigon.css';

function Hormigon() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeBenefitIndex, setActiveBenefitIndex] = useState(0);

  // Efecto optimizado para el video
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      if (window.innerWidth > 768) {
        video.play().catch(e => {
          console.log("Auto-play prevented:", e);
        });
      }
    };

    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    video.preload = 'metadata';

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleVideoPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(e => {
        console.log("Play failed:", e);
      });
    } else {
      video.pause();
    }
  }, []);

  // Datos estructurados con useMemo
  const benefits = useMemo(() => [
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
  ], []);

  const suppliers = useMemo(() => [
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
  ], []);

  const hormigonTypes = useMemo(() => [
    { title: 'TRADICIONALES', text: 'Desde H8 hasta H47 - Resistencia comprobada en laboratorio' },
    { title: 'BOMBEABLES', text: 'H17 a H38 - Formulaciones especiales para bombeo continuo' },
    { title: 'GUNITADOS', text: 'H21 a H38 - Para proyección con equipo especializado' },
    { title: 'RDC', text: 'RDC 100 a 300 - Hormigones de rápido endurecimiento' },
    { title: 'ESPECIALES', text: 'Livianos, vistos, hidrófugos, con fibra y formulaciones a medida' },
  ], []);

  const stats = useMemo(() => [
    { value: "+40", label: "Años de experiencia" },
    { value: "+3000", label: "Proyectos completados" },
    { value: "100%", label: "Garantía cumplida" },
    { value: "25%", label: "Ahorro promedio" }
  ], []);

  const pumpingEquipment = useMemo(() => [
    { src: '/bombaarrastre.png', alt: 'Bomba de arrastre' },
    { src: '/bombapluma.png', alt: 'Bomba pluma' }
  ], []);

  // Componentes optimizados
  const ContactButton = useCallback(({ text = "CONTACTAR ASESOR", variant = "danger", size = "lg", className = "", center = false }) => (
    <div className={center ? "text-center" : ""}>
      <Button 
        href="https://wa.me/5492215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
        target="_blank"
        rel="noopener noreferrer"
        className={`hormigon-cta-button my-3 ${variant} ${className}`}
        size={size}
      >
        <FaWhatsapp className="me-2" /> {text}
      </Button>
    </div>
  ), []);

  const GoogleRatingBadge = useCallback(() => (
    <a 
      href="#reviews" 
      className="d-inline-flex align-items-center text-decoration-none py-2 px-3 google-rating-badge"
    >
      <div className="d-flex align-items-center">
        <FaGoogle className="text-primary me-2" size={20} />
        <div className="d-flex align-items-center me-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-warning mx-1" size={14} />
          ))}
          <span className="google-rating-score ms-2">4.7</span>
        </div>
        <div className="google-rating-details border-start ps-3">
          <div className="fw-semibold">+50 valoraciones</div>
          <div className="small">Google Reviews</div>
        </div>
      </div>
    </a>
  ), []);

  const LomaNegraBadge = useCallback(() => (
    <div className="loma-negra-badge">
      <p className="badge-label">ALIADO ESTRATÉGICO</p>
      <img 
        src="/logolomanegra.png" 
        alt="Loma Negra Partner" 
        className="loma-negra-logo"
        loading="lazy"
      />
    </div>
  ), []);

  const BenefitCard = useCallback(({ benefit, index, isActive, onHover }) => (
    <div 
      className={`hormigon-benefit-card h-100 ${isActive ? 'active' : ''}`}
      onMouseEnter={() => onHover(index)}
      onTouchStart={() => onHover(index)}
    >
      <div className="hormigon-benefit-logo-container">
        <img 
          src={benefit.src} 
          alt={benefit.title} 
          className="hormigon-benefit-img"
          loading="lazy"
        />
      </div>
      <h3 className="hormigon-benefit-title">{benefit.title}</h3>
      <p className="hormigon-benefit-text">{benefit.description}</p>
    </div>
  ), []);

  const HormigonTypeCard = useCallback(({ type }) => (
    <div className="hormigon-type-card p-3 p-md-4 text-center">
      <h4 className="fw-bold hormigon-text-red mb-2 mb-md-3">{type.title}</h4>
      <p className="text-dark mb-0">{type.text}</p>
    </div>
  ), []);

  // Renderizado optimizado de carruseles
  const renderCarouselItems = useCallback((items, itemsPerSlide, renderItem) => {
    const slides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      slides.push(
        <Carousel.Item key={i}>
          <Row className="justify-content-center">
            {items.slice(i, i + itemsPerSlide).map((item, idx) => (
              <Col key={idx} md={12/itemsPerSlide} className="mb-3">
                {renderItem(item, idx)}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      );
    }
    return slides;
  }, []);

  const HeroSection = useCallback(() => (
    <section className="hormigon-hero-section position-relative">
      <div className="video-container">
        <video 
          ref={videoRef}
          className="hormigon-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/IMG-20241112132439373.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        <div className="video-overlay" />
        
        <button 
          className="video-control-btn"
          onClick={toggleVideoPlayback}
          aria-label={isVideoPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isVideoPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {!isVideoLoaded && (
          <div className="video-loading-spinner">
            <Spinner animation="border" variant="light" />
          </div>
        )}
      </div>
      
      <div className="hormigon-hero-overlay d-flex align-items-center justify-content-center">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} lg={10} className="text-center">
              <div className="hormigon-hero-content-wrapper">
                <h1 className="hormigon-hero-title display-3 fw-bold mb-4">
                  <span className="d-block hero-title-line">POTENCIÁ TUS</span> 
                  <span className="d-block hero-title-line">PROYECTOS CON</span> 
                  <span className="d-block text-red hero-title-line">NUESTRO HORMIGÓN</span>
                </h1>
                
                <p className="hormigon-hero-subtitle lead mb-4">
                  <strong className="text-red">CONFIANZA, VERSATILIDAD Y GARANTÍA</strong>
                </p>
                
                <div className="hormigon-benefits-grid mb-5">
                  {[
                    'Producción bajo normas IRAM',
                    'Bombeo profesional con equipos modernos',
                    'Control de calidad en tiempo real',
                    'Seguimiento satelital de cada entrega'
                  ].map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <FaCheckCircle className="hormigon-check-icon text-red" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <p className="hormigon-hero-discount h5 mb-4">
                  <strong className="text-white">¡Comparte tu lista o presupuesto con nosotros!</strong>
                  <br />
                  <span className="fw-normal text-white">Te ofrecemos los mejores precios y condiciones.</span>
                </p>
                
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                  <ContactButton text="SOLICITAR PRESUPUESTO" />
                  <div className="text-center">
                    <Button 
                      variant="outline-light" 
                      size="lg"
                      href="#tipos-hormigon"
                      className="hormigon-cta-button outline-light"
                    >
                      VER TIPOS DE HORMIGÓN
                    </Button>
                  </div>
                </div>

                <div className="hero-badges-container">
                  <GoogleRatingBadge />
                  <LomaNegraBadge />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  ), [isVideoPlaying, isVideoLoaded, toggleVideoPlayback]);

  const TypesSection = useCallback(() => (
    <section id="tipos-hormigon" className="hormigon-types-section py-5">
      <Container>
        <h2 className="hormigon-section-title text-center mb-5">
          TIPOS DE <span className="hormigon-text-red">HORMIGÓN</span>
        </h2>
        
        <Carousel 
          indicators={true}
          interval={4000}
          touch={true}
          pause="hover"
          variant="dark"
        >
          {renderCarouselItems(hormigonTypes, 2, (type, idx) => (
            <HormigonTypeCard key={idx} type={type} />
          ))}
        </Carousel>

        <div className="text-center mt-4">
          <ContactButton 
            text="CONSULTAR POR RESISTENCIAS ESPECIALES" 
            size="md"
            center={true}
          />
        </div>
      </Container>
    </section>
  ), [hormigonTypes, renderCarouselItems]);

 const StatsSection = useCallback(() => (
    <section className="hormigon-stats-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="pe-lg-5 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-white">MÁS DE <span className="text-red">3.000.000 m²</span> CONSTRUIDOS</h2>
            <p className="mb-4 fs-5 text-white">
              Hemos desarrollado un servicio que integra todas las soluciones para tu obra:
            </p>
            <div className="hormigon-stats-features-grid mb-4">
              {[
                'Control de calidad en tiempo real',
                'Materiales certificados IRAM',
                'Responsabilidad total garantizada',
                'Asesoramiento técnico especializado'
              ].map((feature, idx) => (
                <div key={idx} className="hormigon-stats-feature-item">
                  <FaCheckCircle className="hormigon-stats-check-icon text-red" />
                  <span className="hormigon-stats-feature-text">{feature}</span>
                </div>
              ))}
            </div>
            <ContactButton text="CONOCE NUESTRO MÉTODO" center={true} />
          </Col>
          <Col lg={6}>
            <Row className="g-3">
              {stats.map((stat, idx) => (
                <Col md={6} key={idx}>
                  <div className="hormigon-stats-card">
                    <h3 className="hormigon-stats-value">{stat.value}</h3>
                    <p className="hormigon-stats-label">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  ), [stats]);

  const BenefitsSection = useCallback(() => (
    <section className="hormigon-benefits-section py-5">
      <Container>
        <h2 className="hormigon-section-title text-center mb-5">
          BENEFICIOS <span className="hormigon-text-red">QUE NOS DIFERENCIAN</span>
        </h2>
        <Row>
          {benefits.map((benefit, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <BenefitCard 
                benefit={benefit}
                index={index}
                isActive={activeBenefitIndex === index}
                onHover={setActiveBenefitIndex}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  ), [benefits, activeBenefitIndex]);

  const PumpingSection = useCallback(() => (
    <section className="hormigon-pumping-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="order-lg-2 ps-lg-5">
            <h2 className="hormigon-section-title mb-4">
              SERVICIO DE <span className="hormigon-text-red">BOMBEO</span> PROFESIONAL
            </h2>
            <p className="hormigon-section-subtitle mb-4 text-dark">
              Soluciones completas para colocación de hormigón:
            </p>
            <div className="hormigon-features-grid mb-4">
              {[
                'Bombas estacionarias CIFA SP 750 (50-100 m³/h)',
                'Bombas pluma SX36/32 (hasta 130 m³/h)',
                'Operadores certificados con amplia experiencia',
                'Asesoramiento técnico sin cargo'
              ].map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <FaCheckCircle className="hormigon-check-icon text-red" />
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>
            <ContactButton variant="danger" text="SOLICITAR COTIZACIÓN DE BOMBEO" center={true} />
          </Col>
          <Col lg={6} className="order-lg-1">
            <Carousel indicators={true} interval={3500} variant="dark">
              {pumpingEquipment.map((equipment, idx) => (
                <Carousel.Item key={idx}>
                  <div className="pumping-image-container">
                    <img 
                      src={equipment.src} 
                      alt={equipment.alt} 
                      className="hormigon-pumping-img"
                      loading="lazy"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  ), [pumpingEquipment]);

  const SuppliersSection = useCallback(() => (
    <section className="hormigon-suppliers-section py-5">
      <Container>
        <h2 className="text-center mb-5 text-dark">
          EMPRESAS QUE <span className="text-red">CONFÍAN EN NOSOTROS</span>
        </h2>
        
        <div className="suppliers-carousel-container">
          <Carousel 
            indicators={false} 
            interval={3000} 
            pause="hover" 
            touch={true}
            wrap={true}
          >
            {Array.from({ length: Math.ceil(suppliers.length / 6) }).map((_, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <Row className="justify-content-center g-4">
                  {suppliers.slice(slideIndex * 6, (slideIndex + 1) * 6).map((supplier, idx) => (
                    <Col 
                      key={`${slideIndex}-${idx}`} 
                      md={2} 
                      sm={4} 
                      xs={6}
                      className="text-center"
                    >
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
      </Container>
    </section>
  ), [suppliers]);

  // SECCIÓN SOBRE NOSOTROS
  const AboutSection = useCallback(() => (
    <section className="hormigon-about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="pe-md-5">
            <h2 className="hormigon-section-title mb-4 text-dark">
              <span className="hormigon-text-red">40 AÑOS</span> LIDERANDO EL MERCADO
            </h2>
            <p className="hormigon-section-subtitle mb-4 text-dark">
              Desde 1978, Darom SA ha sido sinónimo de calidad y confiabilidad en el sector de la construcción.
            </p>
            <div className="hormigon-features-grid mb-4">
              {[
                'Hormigón elaborado bajo normas IRAM',
                'Tecnología de última generación',
                'Equipo técnico altamente capacitado',
                'Soporte integral pre y post venta'
              ].map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <FaCheckCircle className="hormigon-check-icon text-red" />
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>
            <ContactButton text="HABLAR CON UN EXPERTO" center={true} />
          </Col>
          <Col md={6}>
            <img 
              src="/IMG_3139.jpg" 
              alt="Historia Darom SA" 
              className="hormigon-about-img"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  ), []);

  return (
    <Container fluid className="px-0 hormigon-container">
      <Helmet>
        <title>Hormigón Elaborado de Alta Calidad | Darom SA</title>
        <meta name="description" content="Hormigón elaborado con garantía de calidad, servicio de bombeo y seguimiento satelital. ¡Solicita tu cotización hoy mismo!" />
        <meta name="keywords" content="hormigón elaborado, bombeo hormigón, construcción, Darom SA, hormigón premoldeado" />
        <link rel="canonical" href="https://daromsa.com.ar/services/hormigon" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Hormigón Elaborado y Bombeo",
            "provider": {
              "@type": "Organization",
              "name": "Darom SA",
              "url": "https://daromsa.com.ar"
            },
            "description": "Servicio profesional de hormigón elaborado con control de calidad IRAM y servicio de bombeo",
            "serviceType": "Construction",
            "areaServed": "Buenos Aires - Zona Sur"
          })}
        </script>
      </Helmet>

      <HeroSection />
      <TypesSection />
      <StatsSection />
      <BenefitsSection />
      <PumpingSection />
      <SuppliersSection />
      <AboutSection />
    </Container>
  );
}

export default Hormigon;