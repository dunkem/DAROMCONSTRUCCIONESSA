import { Container, Row, Col, Card, Carousel, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaCheckCircle, FaBuilding, FaVials } from 'react-icons/fa';
import { FaHandshakeSimple, FaUserGroup } from 'react-icons/fa6';
import Contact from './Contact';

function Home({ setLoading }) {
  // Servicios ofrecidos
  const services = [
    {
      src: '/portadaplumamixer.jpg',
      title: 'HORMIGÓN ELABORADO Y SERVICIOS DE BOMBEO',
      description: 'Proveemos hormigón de alta calidad, asegurando resistencia y durabilidad en cada aplicación.',
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
      title: 'ESTUDIO Y MOVIMIENTO DE SUELO',
      description: 'Realizamos estudios de suelos precisos y movimientos de tierra con eficiencia.',
      link: '/services/suelos'
    },
    {
      src: '/portadapisosindustriales.png',
      title: 'PISOS INDUSTRIALES Y ACABADOS SUPERFICIALES',
      description: 'Transformamos superficies con pisos llanos y acabados de alta calidad.',
      backup: { text: 'RESPALDADOS POR', logo: '/LOGOMAPEI.png' },
      link: '/services/pisos'
    }
  ];

  // Productos destacados
  const featuredProducts = [
    { src: '/mathidrofugosika20l.jpg', name: 'Hidrofugo Sika 20 lts', link: '/products/hidrofugo-sika-200' },
    { src: '/matlad12.jpg', name: 'Ladrillo 12x12x18', link: '/products/ladrillo-comun' },
    { src: '/matbolsonarena.jpg', name: 'Arena en Bolsón', link: '/products/arena-gruesa' },
    { src: '/matcementoloma50kg.jpg', name: 'Cemento Loma Negra 50kg', link: '/products/cemento-portland' },
    { src: '/matcalcaciquemax30kg.jpg', name: 'Cal Hidratada x 30kg', link: '/products/cal-hidratada' },
    { src: '/matvarillashierro.png', name: 'Hierro de Construcción', link: '/products/hierro-construccion' },
    { src: '/matpiedra620.jpg', name: 'Piedra en Bolsón', link: '/products/piedra-bolson' }
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
    { src: '/LOGOCANTERAS.jpg', alt: 'Canteras Argentinas' }
  ];

  // Renderiza los elementos del carrusel
  const renderCarouselItems = (items, isSupplier = false) => {
    const itemsPerSlide = 4; // Mantener 4 elementos por diapositiva
    const slides = [];
    for (let i = 0; i < Math.ceil(items.length / itemsPerSlide); i++) {
      slides.push(
        <Carousel.Item key={i}>
          <Row className="justify-content-center">
            {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
              <Col md={isSupplier ? 2 : 3} sm={6} key={idx} className="mb-2">
                <Card className={isSupplier ? "supplier-card text-center" : "product-card text-center"} style={{ width: '100%' }}>
                  <Card.Img variant="top" src={item.src} alt={item.alt} className={isSupplier ? "supplier-logo" : "product-img"} />
                  {!isSupplier && (
                    <Card.Body>
                      <Card.Title>{item.title || item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Body>
                  )}
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
    <Container fluid className="main-container">
      <Row className="hero-section text-center" style={{ 
    backgroundImage: 'url(/portada.jpg)', 
    backgroundSize: 'cover', // Asegura que la imagen cubra toda la sección
    backgroundPosition: 'center', // Centra la imagen
    height: '60vh'
}}>
    <Col md={8} className="hero-content-wrapper">
        <div className="hero-content animated fadeIn">
            <h2 className="hero-title">COMPROMETIDOS CON LA CALIDAD Y LA CONFIANZA</h2>
            <h3 className="hero-subtitle">TRANSFORMA TUS PROYECTOS CON NUESTRA EXPERIENCIA E INNOVACIÓN EN CADA ETAPA DE CONSTRUCCIÓN.</h3>
        </div>
    </Col>
    <Col md={4} className="d-flex align-items-center justify-content-end">
        <img src="/logolomanegra.png" alt="Logo Loma Negra" className="logo-hero" />
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
          {/* Video de YouTube */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/--7y8f63ZPk?autoplay=1"
            title="Video de Compromiso"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
            <Card className="service-card">
              <div className="service-image-container">
                <Card.Img variant="top" src={service.src} className="service-img" style={{ height: '300px' }} />
                {service.backup && (
                  <div className="backup-info">
                    <p>{service.backup.text}</p>
                    <img src={service.backup.logo} alt="Logo" className="backup-logo" />
                  </div>
                )}
              </div>
              <Card.Body className="service-body">
                <Card.Title className="service-title">{service.title}</Card.Title>
                <Card.Text className="service-description">{service.description}</Card.Text>
                <Link to={service.link}>
                  <Button className="service-button">Ver Más</Button>
                </Link>
              </Card.Body>
            </Card>
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
            <Image src="/ZONAS3.png" alt="Zonas de Entrega" fluid className="delivery-area-image" />
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