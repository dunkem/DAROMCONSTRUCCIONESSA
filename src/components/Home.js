import { Container, Row, Col, Card, Carousel, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Home.css';
import { FaCheckCircle, FaBuilding, FaVials } from 'react-icons/fa';
import { FaHandshakeSimple, FaUserGroup } from 'react-icons/fa6';
import Contact from './Contact';
import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazar a la parte superior de la página

    // Cargar Google Tag Manager y gtag
    if (!document.getElementById('gtm-script')) {
      const gtmScript = document.createElement('script');
      gtmScript.id = 'gtm-script';
      gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-717135166";
      gtmScript.async = true;
      document.head.appendChild(gtmScript);
    }

    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'AW-717135166');
  }, []);

  // Servicios ofrecidos
  const services = [
    {
      src: '/portadaplumamixer.jpg',
      title: 'HORMIGÓN ELABORADO Y SERVICIOS DE BOMBEO',
      description: 'Proveemos hormigón de calidad superior, servicios de bombeo eficientes y especializados.',
      backup: { text: 'RESPALDADOS POR', logo: '/logolomanegra.png' },
      link: '/services/hormigon'
    },
    {
      src: '/portadacoralon.JPG',
      title: 'MATERIALES DE CONSTRUCCIÓN',
      description: 'Amplia gama de materiales de construcción, desde ladrillos hasta acabados y accesorios.',
      link: '/services/materiales'
    },
    {
      src: '/portadamovofi.jpg',
      title: 'ESTUDIO Y MOVIMIENTO DE SUELOS',
      description: 'Realizamos estudio y movimiento de suelos, obteniendo resultados precisos y confiables para tus proyectos.',
      link: '/services/suelos'
    },
    {
      src: '/portadapisosindustriales.png',
      title: 'PISOS INDUSTRIALES Y ACABADOS SUPERFICIALES',
      description: 'Transformamos superficies con pisos llaneados y acabados de alta calidad.',
      backup: { text: 'RESPALDADOS POR', logo: '/LOGOMAPEI.png' },
      link: '/services/pisos'
    }
  ];

  // Productos destacados
  const featuredProducts = [
    { src: '/mathidrofugosika20l.jpg', name: 'Hidrofugo Sika 20 lts', link: '/services/materiales' },
    { src: '/matlad12.jpg', name: 'Ladrillo 12x12x18', link: '/services/materiales' },
    { src: '/matbolsonarena.jpg', name: 'Arena en Bolsón', link: '/services/materiales' },
    { src: '/matcementoloma50kg.jpg', name: 'Cemento Loma Negra 50kg', link: '/services/materiales' },
    { src: '/matcalcaciquemax30kg.jpg', name: 'Cal Hidratada x 30kg', link: '/services/materiales' },
    { src: '/matvarillashierro.png', name: 'Hierro de Construcción', link: '/services/materiales' },
    { src: '/matpiedra620.jpg', name: 'Piedra en Bolsón', link: '/services/materiales' }
  ];

  // Proveedores
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

  // Componente para tarjetas de servicios
  const ServiceCard = ({ service }) => (
    <Card className="service-card shadow-sm">
      <div className="service-image-container">
        <Card.Img variant="top" src={service.src} alt={service.title} className="service-img" loading="lazy" />
        {service.backup && (
          <div className="backup-info">
            <p>{service.backup.text}</p>
            <img src={service.backup.logo} alt="Logo" className="backup-logo" loading="lazy" />
          </div>
        )}
      </div>
      <Card.Body className="service-body">
        <Card.Title className="service-title">{service.title}</Card.Title>
        <Card.Text className="service-description">{service.description}</Card.Text>
        <Link to={service.link}>
          <Button className="service-button" onClick={gtag_report_conversion}>
            Ver Más
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );

  // Componente para tarjetas de productos
  const ProductCard = ({ product }) => (
    <Card className="product-card text-center shadow-sm">
      <Card.Img variant="top" src={product.src} alt={product.name} className="product-img" loading="lazy" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Link to={product.link}>
          <Button className="service-button" onClick={gtag_report_conversion}>
            Ver Más
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );

  // Renderiza los elementos del carrusel
  const renderCarouselItems = (items, isSupplier = false) => {
    const itemsPerSlide = 4; // 4 elementos por diapositiva
    const slides = [];
    for (let i = 0; i < Math.ceil(items.length / itemsPerSlide); i++) {
      slides.push(
        <Carousel.Item key={i}>
          <Row className="justify-content-center">
            {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
              <Col md={isSupplier ? 2 : 3} sm={6} key={idx} className="mb-2">
                {isSupplier ? (
                  <Card className="supplier-card text-center">
                    <Card.Img variant="top" src={item.src} alt={item.alt} className="supplier-logo" loading="lazy" />
                  </Card>
                ) : (
                  <ProductCard product={item} />
                )}
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      );
    }
    return slides;
  };

  return (
    <Container fluid className="main-container">
      <Helmet>
        <title>Darom SA</title>
        <meta name="description" content="Daromsa, tu fuente confiable de hormigón elaborado, materiales de construcción y más." />
        <meta name="keywords" content="hormigón, materiales de construcción, suelos, pisos industriales" />
        <meta property="og:title" content="Daromsa - Inicio" />
        <meta property="og:description" content="Transforma tus proyectos con Daromsa, tu fuente de calidad y confianza." />
        <meta property="og:url" content="https://daromsa.com.ar" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://daromsa.com.ar/portada.webp" />
        <meta property="og:image:alt" content="Daromsa - Hormigón Elaborado" />
      </Helmet>

      {/* Sección Hero */}
      <Row className="hero-section text-center" style={{ 
        backgroundImage: 'url(/portada.jpg)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '60vh',
        color: 'white' 
      }}>
        <Col md={8} className="hero-content-wrapper">
          <div className="hero-content animated fadeIn">
            <h2 className="hero-title">COMPROMETIDOS CON LA CALIDAD Y LA CONFIANZA</h2>
            <h3 className="hero-subtitle">TRANSFORMA TUS PROYECTOS CON NUESTRA EXPERIENCIA E INNOVACIÓN EN CADA ETAPA DE CONSTRUCCIÓN.</h3>
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-end">
          <img src="/logolomanegra.png" alt="Logo Loma Negra" className="logo-hero" loading="lazy" />
        </Col>
      </Row>

      {/* Compromiso con el Cliente */}
      <Row className="text-center mb-4" style={{ backgroundColor: '#e9ecef', padding: '40px 0' }}>
        <Col md={6}>
          <h2 className="section-title">NUESTRO COMPROMISO CON EL CLIENTE</h2>
          <div className="line-divider"></div>
          <p className="commitment-description">
            <FaCheckCircle /> Descuentos por compras conjuntas.<br />
            <FaHandshakeSimple /> Atención personalizada en todas las etapas.<br />
            <FaBuilding /> Proveemos hormigón y materiales de los más altos estándares.<br />
            <FaVials /> Laboratorio en obra, rotura de probetas, y más.<br />
            <FaUserGroup /> Amplia flota de equipos para toda la gama de servicios.<br />           
          </p>
        </Col>
        <Col md={6}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/--7y8f63ZPk?autoplay=1"
            title="Video de Compromiso"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label="Video de Compromiso"
          ></iframe>
        </Col>
      </Row>

      {/* Servicios Section */}
      <Row className="text-center mb-4" style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
        <Col>
          <h2 className="section-title">NUESTROS SERVICIOS</h2>
          <div className="line-divider"></div>
        </Col>
      </Row>
      <Row className="mb-4">
        {services.map((service, index) => (
          <Col md={3} sm={6} key={index} className="mb-4 d-flex align-items-stretch">
            <ServiceCard service={service} />
          </Col>
        ))}
      </Row>

      {/* Sección Sobre la Empresa */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="section-title">LA EMPRESA</h2>
          <div className="line-divider"></div>
        </Col>
      </Row>
      <Row className="company-section text-center mb-4">
        <Col>
          <p className="company-description">
            Desde 1978, Darom SA ha liderado en la construcción con una dedicación inquebrantable a la calidad. Con una expansión desde Zona Sur hasta toda la Provincia de Buenos Aires, ofrecemos hormigón elaborado y materiales de construcción de alta calidad. Nos diferenciamos por un soporte integral pre y post compra, equipo de última tecnología y constante capacitación de nuestro personal. Aspiramos a ser líderes nacionales, llevando nuestros productos y servicios a toda la República Argentina.
          </p>
        </Col>
      </Row>

      {/* Productos Destacados Section - Carrusel */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="section-title">PRODUCTOS DESTACADOS</h2>
          <div className="line-divider"></div>
        </Col>
      </Row>
      <Carousel className="mb-4">
        {renderCarouselItems(featuredProducts)}
      </Carousel>

      {/* Sección logos proveedores */}
      <Row className="text-center mb-4">
        <Col>
          <h2 className="section-title">NUESTROS PROVEEDORES</h2>
          <div className="line-divider"></div>
        </Col>
      </Row>
      <Carousel className="mb-4">
        {renderCarouselItems(suppliers, true)}
      </Carousel>

      {/* Sección de Entregas */}
      <Row className="mb-4 align-items-center" style={{ backgroundColor: '#e9ecef', padding: '10px 0' }}>
        <Col md={{ span: 8, offset: 2 }} className="d-flex flex-column flex-md-row align-items-center">
          <Col md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <Image src="/ZONAS3.png" alt="Zonas de Entrega" fluid className="delivery-area-image" loading="lazy" />
          </Col>
          <Col md={8} className="text-center text-md-left">
            <h2 className="section-title">ÁREA DE ENTREGAS</h2>
            <div className="line-divider"></div>
            <p>Realizamos entregas en toda Zona Sur, también llegamos a La Plata y Puerto Madero.</p>
            <p>Desde nuestra planta ubicada en el Parque Industrial Tecnológico de Florencio Varela.</p>
          </Col>
        </Col>
      </Row>
      <Contact showContact={true} />
    </Container>
  );
}

export default Home;