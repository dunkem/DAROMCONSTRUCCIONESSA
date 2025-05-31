import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, ButtonGroup, Carousel } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Helmet } from 'react-helmet';
import './Materiales.css';

function Materiales() {
    const { addToCart } = useContext(CartContext);
    const [selectedSubrubro, setSelectedSubrubro] = useState(localStorage.getItem('selectedSubrubro') || 'hidrofugos');
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);

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

    // Save selected subrubro to local storage
    useEffect(() => {
        localStorage.setItem('selectedSubrubro', selectedSubrubro);
    }, [selectedSubrubro]);

    const materiales = {
        hidrofugos: [
            { id: 1, name: "Hidrofugo Sika 1 Tambor x 200 Kg", img: "/mathidrofugosika200lts.jpg" },
            { id: 2, name: "Hidrofugo Sika 1 Bidón x 20 Kg", img: "/mathidrofugosikabidon20kg.jpg" },
            { id: 3, name: "Hidrofugo Sika 1 Bidón x 10 Kg", img: "/matsikahidrofugo.jpg" },
            { id: 4, name: "Hidrófugo Sika 1 x 4 Lts.", img: "/matsikahidrofugo.jpg" },
            { id: 5, name: "Hidrófugo Darapel 19 Grace", img: "/matsikahidrofugo.jpg" }
        ],
        ladrillos: [
            { id: 11, name: "Ladrillo Común", img: "/matladcomun.png" },
            { id: 12, name: "Ladrillo Hueco 8x18x33 CTIBOR [216 x pallet]", img: "/matladhueco8x18x33-1.jpg" },
            { id: 13, name: "Ladrillo Hueco 12x18x33 [9A] FANELLI [144 x pallet]", img: "/matladhueco12.jpg" },
            { id: 14, name: "Ladrillo Hueco 18x18x33 FANELLI [90 x pallet]", img: "/matladhueco18.jpg" },
            { id: 15, name: "Ladrillo Portante 18x19x33 CTIBOR [90 x pallet]", img: "/matladportante12.jpg" },
            { id: 16, name: "Ladrillo Portante 12x19x33 CTIBOR [120 x pallet]", img: "/matladportante12.jpg" },
            { id: 17, name: "Ladrillo Retak® 60 15 [64 un]", img: "/matladretak.jpg" },
            { id: 18, name: "Ladrillo Portante 12x25x33 FANELLI", img: "/matladportante12.jpg" },
            { id: 19, name: "Ladrillo Doble Pared 24x18x33 FANELLI [72 x pallet]", img: "/matladfanelli_doblepared_24x18x33.jpg" },
            { id: 20, name: "Ladrillo Klimablock 27x19x20 FANELLI", img: "/matladbloque.jpeg" }
        ],
        aridos: [
            { id: 31, name: "Arena gruesa en bolsón", img: "/matbolsonarena.jpg" },
            { id: 32, name: "Tosca a granel x m3", img: "/mattoscaagranel.png" },
            { id: 33, name: "Tosca en bolsón x m3", img: "/mattoscaenbolson.jpg" },
            { id: 34, name: "Tierra de relleno a granel x m3", img: "/mattierraagranel.jpg" },
            { id: 35, name: "Tierra de relleno en bolsón", img: "/mattoscaenbolson.jpg" }
        ],
        "cementos y cales": [
            { id: 50, name: "Cemento Loma Negra x 50 Kg", img: "/matcementoloma50kg.jpg" },
            { id: 51, name: "Cemento a granel x Kg", img: "/TOLVA.jpg" },
            { id: 52, name: "Plasticor x 40 Kg", img: "/matplasticor.jpg" },
            { id: 53, name: "Cal Cacique Max x 30 Kg", img: "/matcalcaciquemax30kg.jpg" },
            { id: 54, name: "Cal Milagro x 25 Kg", img: "/matcalmilagro.jpg" }
        ],
        hierros: [
            { id: 58, name: "Hierro Ø 4.2 mm", img: "/matvarillashierro.png" },
            { id: 59, name: "Hierro Ø 6 mm Acindar", img: "/matvarillashierro.png" },
            { id: 60, name: "Hierro Ø 8 mm Acindar", img: "/matvarillashierro.png" },
            { id: 61, name: "Hierro Ø 10 mm Acindar", img: "/matvarillashierro.png" }
        ],
        mallas: [
            { id: 67, name: "Malla #4 [15x25] 2x3 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 68, name: "Malla #4 [15x15] 2x5 mts [Trafilada]", img: "/matmallas.jpg" },
            { id: 69, name: "Malla #5.1 [15x25] 2x5 mts [Trafilada]", img: "/matmallas.jpg" }
        ],
        yeso: [
            { id: 79, name: "Yeso Sika 30 Kg", img: "/matyeso.jpg" },
        ],
        pegamentos: [
            { id: 82, name: "Pegamento SikaCeram Flex x 20 kg", img: "/matpegamentoporcelanato.jpg" },
            { id: 83, name: "Pegamento SikaCeram Tradicional x 30 kg", img: "/matsikaceram.jpg" }
        ],
        viguetas: [
            { id: 86, name: "Vigueta 6 x 12", img: "/matvigasdobles.jpg" },
            { id: 87, name: "Vigueta 4 x 10", img: "/matvigasdobles.jpg" },
            { id: 88, name: "Vigueta 6 x 10", img: "/matvigasdobles.jpg" }
        ],
        "caños de hormigón": [
            { id: 93, name: "Caño de hormigón 150x300", img: "/matcañosdecemento.png" },
            { id: 94, name: "Caño de hormigón 200x400", img: "/matcañosdecemento.png" }
        ],
        membranas: [
            { id: 95, name: "Membrana líquida x 20kg", img: "/matmembranaliquidasika.jpg" },
            { id: 96, name: "Membrana polimérica x 4mm", img: "/matmembrana.jpg" }
        ],
        separadores: [
            { id: 97, name: "Separador de hormigón", img: "/matseparadores.jpg" },
        ],
        fijaciones: [
            { id: 99, name: "Fijación de hormigón", img: "/matfijacioneshormigon.jpg" },
            { id: 100, name: "Fijaciones para construcción en seco", img: "/matfijacionesdur.jpg" }
        ]
    };

    const handleSubrubroSelect = (subrubro) => {
        setSelectedSubrubro(subrubro);
        setVisibleProducts(8);
        setSearchQuery('');
    };

    const handleLoadMore = () => {
        setVisibleProducts((prev) => prev + 8);
    };

    const normalizeString = (str) => 
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const handleSearch = (query) => {
        setSearchQuery(query);
        setVisibleProducts(8);
    };

    const filteredProducts = materiales[selectedSubrubro].filter(material =>
        normalizeString(material.name).includes(normalizeString(searchQuery.trim()))
    );

    const trackConversion = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC'
            });
        }
    };

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

    // Beneficios de comprar en Darom SA
    const benefits = [
        
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Precios Competitivos", 
            description: "Las mejores condiciones del mercado gracias a nuestra gama de proveedores" 
        },
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Calidad Garantizada", 
            description: "Productos de primeras marcas para la construcción desde 19678" 
        },
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Asesoramiento", 
            description: "Expertos en construcción a tu disposición en cada etapa de tu obra" 
        },
        { 
            icon: <FaCheck className="text-danger" size={24} />, 
            title: "Entrega Rápida", 
            description: "Despachos en 24/48hs" 
        },
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

    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4;
        return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }, (_, i) => (
            <Carousel.Item key={i}>
                <Row className="justify-content-center">
                    {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                        <Col md={3} sm={6} key={idx} className="mb-2">
                            <Card className="supplier-card text-center border-0 bg-transparent">
                                <Card.Img 
                                    variant="top" 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="supplier-logo img-fluid" 
                                    loading="lazy" 
                                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    const subrubroNames = {
        'hidrofugos': 'Hidrofugos',
        'ladrillos': 'Ladrillos',
        'aridos': 'Áridos',
        'cementos y cales': 'Cementos y Cales',
        'hierros': 'Hierros',
        'mallas': 'Mallas',
        'yeso': 'Yesos',
        'pegamentos': 'Pegamentos',
        'viguetas': 'Viguetas',
        'caños de hormigón': 'Caños de Hormigón',
        'membranas': 'Membranas',
        'separadores': 'Separadores',
        'fijaciones': 'Fijaciones'
    };

    return (
        <>
            <Helmet>
                <title>Materiales de Construcción en zona sur del Gran Buenos Aires | Darom SA</title>
                <meta name="description" content="Distribuidor mayorista de materiales para construcción en Mar del Plata. Productos de calidad al mejor precio. ¡Consultanos!" />
                <meta name="keywords" content="materiales construcción, corralón mar del plata, ladrillos, cemento, hierros, áridos, materiales para construcción" />
                <link rel="canonical" href="https://daromsa.com.ar/materiales" />
            </Helmet>

            {/* Hero Section - Full Width Centrado con Badge Google */}
<div 
  className="heroc-section bg-dark text-white py-5 d-flex align-items-center" 
  style={{
    minHeight: '100vh',
    position: 'relative',
    backgroundImage: 'url(/portadacoralon.JPG)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
    <Container>
        <div className="heroc-content text-center" style={{position: 'relative', zIndex: 2}}>
            <Row className="justify-content-center">
                <Col lg={8} xl={6}>
                    <h1 className="display-4 fw-bold mb-4">CONSTRUÍ SIN LÍMITES CON NUESTRO SOPORTE 360°</h1>
                    <p className="lead mb-4">Distribuidores mayoristas de materiales para la construcción en zona sur del Gran Buenos Aires</p>
                    
                    {/* Beneficios centrados */}
                    <div className="benefits-grid mb-4 mx-auto" style={{maxWidth: '800px'}}>
                        <Row className="g-3 justify-content-center">
                            {benefits.map((benefit, index) => (
                                <Col md={6} lg={5} key={index}>
                                    <div className="d-flex align-items-start px-3">
                                        <div className="benefit-icon me-2 text-danger">
                                            {benefit.icon}
                                        </div>
                                        <div className="text-start">
                                            <h5 className="fw-bold mb-1">{benefit.title}</h5>
                                            <p className="small mb-0">{benefit.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    
                    <div className="d-flex flex-column align-items-center">
                        <Button 
                            variant="danger" 
                            size="lg"
                            href="https://api.whatsapp.com/send/?phone=5492215739000&text=Hola%2C+estoy+interesado+en+sus+materiales.&type=phone_number&app_absent=0" 
                            target="_blank"
                            onClick={trackConversion}
                            className="mt-2 px-4 mb-3"
                        >
                            <FaWhatsapp className="me-2" /> SOLICITAR PRESUPUESTO
                        </Button>
                        
                        {/* Badge de Google moderno - Debajo del botón */}
                        <div className="google-rating-container" style={{zIndex: 3}}>
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
        </div>
    </Container>
</div>
            

            {/* Product Categories */}
            <section className="categories-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5 text-start">Nuestros Productos</h2>
                    
                    <div className="category-selector mb-4">
                        <ButtonGroup className="flex-wrap">
                            {Object.keys(materiales).map((subrubro) => (
                                <Button
                                    key={subrubro}
                                    variant={selectedSubrubro === subrubro ? "danger" : "outline-dark"}
                                    onClick={() => handleSubrubroSelect(subrubro)}
                                    className="m-1 text-uppercase fw-bold"
                                >
                                    {subrubroNames[subrubro] || subrubro}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>

                    <SearchBar onSearch={handleSearch} className="mb-4" />

                    <Row>
                        {filteredProducts.slice(0, visibleProducts).map((material) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={material.id} className="mb-4">
                                <Card className="product-card h-100 shadow-sm border-0">
                                    <div className="product-badge bg-danger">OFERTA</div>
                                    <Card.Img 
                                        variant="top" 
                                        src={material.img} 
                                        alt={`Imagen de ${material.name}`} 
                                        loading="lazy" 
                                        className="product-image"
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="product-title fw-bold">{material.name}</Card.Title>
                                        <div className="mt-auto">
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() => {
                                                    addToCart(material);
                                                    trackConversion();
                                                }}
                                                className="w-100 fw-bold"
                                                block
                                            >
                                                Agregar al Carrito
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    {visibleProducts < filteredProducts.length && (
                        <div className="text-center mt-4">
                            <Button variant="outline-danger" onClick={handleLoadMore} className="fw-bold">
                                Ver más productos
                            </Button>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 bg-danger text-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={8} className="text-start">
                            <h2 className="mb-3 fw-bold">¿Necesitás asesoramiento para tu proyecto?</h2>
                            <p className="lead mb-0">Nuestros expertos están listos para ayudarte a encontrar los materiales perfectos</p>
                        </Col>
                        <Col md={4} className="text-end">
                            <Button 
                                variant="light" 
                                size="lg" 
                                href="https://api.whatsapp.com/send/?phone=5492215739000&text=Hola%2C+estoy+interesado+en+sus+materiales.&type=phone_number&app_absent=0" 
                                target="_blank"
                                onClick={trackConversion}
                                className="fw-bold"
                            >
                                <FaWhatsapp /> Contactar Ahora
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Suppliers Section */}
            <section className="suppliers-section py-5 bg-white">
                <Container>
                    <h2 className="section-title mb-5 text-start">Empresas que confían en nosotros</h2>
                    <Carousel indicators={false} controls={suppliers.length > 4}>
                        {renderCarouselItems(suppliers)}
                    </Carousel>
                </Container>
            </section>

            {/* Testimonios - Carrusel Responsive */}
<section className="testimonials-section py-5 bg-light">
  <Container>
    <h2 className="section-title mb-5 text-start">Opiniones de nuestros clientes</h2>
    
    {/* Versión Desktop (3 testimonios por slide) */}
    <div className="d-none d-md-block">
      <Carousel indicators={false} interval={null} variant="dark">
        {[...Array(Math.ceil(testimonios.length / 3))].map((_, i) => (
          <Carousel.Item key={`desktop-${i}`}>
            <Row>
              {testimonios.slice(i * 3, i * 3 + 3).map((testimonio, idx) => (
                <Col md={4} key={`d-${i}-${idx}`}>
                  <Card className="testimonial-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <blockquote className="mb-0">
                        <p className="fst-italic">"{testimonio.text}"</p>
                        <footer className="blockquote-footer mt-3">
                          <strong>{testimonio.author}</strong>
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

    {/* Versión Móvil (1 testimonio por slide) */}
    <div className="d-block d-md-none">
      <Carousel indicators={true} interval={5000}>
        {testimonios.map((testimonio, idx) => (
          <Carousel.Item key={`mobile-${idx}`}>
            <Card className="testimonial-card border-0 shadow-sm">
              <Card.Body className="p-4">
                <blockquote className="mb-0">
                  <p className="fst-italic">"{testimonio.text}"</p>
                  <footer className="blockquote-footer mt-3">
                    <strong>{testimonio.author}</strong>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </Container>
</section>
        </>
    );
}

export default Materiales;