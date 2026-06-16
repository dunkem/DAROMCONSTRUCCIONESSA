import React, { useContext, useState, useEffect, useRef, useMemo } from 'react';
import { Container, Row, Col, Button, Card, Carousel, Badge } from 'react-bootstrap';
import { CartContext } from '../contexts/CartContext';
import { FaWhatsapp, FaCheck, FaTruck, FaBuilding, FaSearch, FaMapMarkerAlt, FaStar, FaShippingFast, FaHeadset, FaAward } from 'react-icons/fa';
import SearchBar from './SearchBar';
import { Helmet } from 'react-helmet';
import './Materiales.css';

// Importamos todos los datos extraídos
import { materiales, subrubroNames, suppliers, testimonios, zonasCobertura, ITEMS_PER_PAGE } from '../data/materialesData';

// Función sacada fuera del componente para que no se recree en cada render
const normalizeString = (str) => 
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function Materiales() {
    const { addToCart } = useContext(CartContext);
    const [selectedSubrubro, setSelectedSubrubro] = useState(localStorage.getItem('selectedSubrubro') || 'hidrofugos');
    const [visibleProducts, setVisibleProducts] = useState(ITEMS_PER_PAGE);
    const [searchQuery, setSearchQuery] = useState('');
    const [clientType, setClientType] = useState('minorista');
    const [isLoading, setIsLoading] = useState(false);
    const [animateHero, setAnimateHero] = useState(false);
    const productGridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const heroTimeout = setTimeout(() => setAnimateHero(true), 100);
        return () => clearTimeout(heroTimeout);
    }, []);

    useEffect(() => {
        localStorage.setItem('selectedSubrubro', selectedSubrubro);
    }, [selectedSubrubro]);

    const handleSubrubroSelect = (subrubro) => {
        setIsLoading(true);
        setSelectedSubrubro(subrubro);
        setVisibleProducts(ITEMS_PER_PAGE);
        setSearchQuery('');
        
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
            if (productGridRef.current) {
                productGridRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 300);
        return () => clearTimeout(loadingTimeout);
    };

    const handleLoadMore = () => {
        setIsLoading(true);
        const loadMoreTimeout = setTimeout(() => {
            setVisibleProducts((prev) => prev + ITEMS_PER_PAGE);
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(loadMoreTimeout);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setVisibleProducts(ITEMS_PER_PAGE);
    };

    const handleAddToCart = (material) => {
        addToCart(material);
        // Aquí podés disparar un Toast de éxito
    };

    // Filtramos productos usando useMemo para mejor rendimiento
    const filteredProducts = useMemo(() => {
        return materiales[selectedSubrubro]?.filter(material =>
            normalizeString(material.name).includes(normalizeString(searchQuery.trim()))
        ) || [];
    }, [selectedSubrubro, searchQuery]);

    const getWhatsappLink = () => {
        const baseMessage = "Hola Darom SA, vi su página web y me interesa solicitar información";
        if (clientType === 'mayorista') {
            return `https://wa.me/5491128312705?text=${encodeURIComponent(baseMessage + ' para compras mayoristas')}`;
        }
        return `https://wa.me/542215739000?text=${encodeURIComponent(baseMessage)}`;
    };

    const benefits = [
        { 
            icon: <FaAward className="text-danger" size={28} />, 
            title: "Precios Mayoristas", 
            description: "Condiciones exclusivas para constructoras y revendedores" 
        },
        { 
            icon: <FaShippingFast className="text-danger" size={28} />, 
            title: "Distribución Zona Sur", 
            description: "Líderes en distribución de materiales en el Gran Buenos Aires Sur" 
        },
        { 
            icon: <FaCheck className="text-danger" size={28} />, 
            title: "Stock Permanente", 
            description: "Amplio stock para entrega inmediata minorista y mayorista" 
        },
        { 
            icon: <FaHeadset className="text-danger" size={28} />, 
            title: "Asesoramiento Técnico", 
            description: "Expertos en construcción para asesorarte en tu proyecto" 
        },
    ];

    const renderCarouselItems = (items) => {
        const itemsPerSlide = 4;
        return Array.from({ length: Math.ceil(items.length / itemsPerSlide) }, (_, i) => (
            <Carousel.Item key={i}>
                <Row className="justify-content-center align-items-center">
                    {items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide).map((item, idx) => (
                        <Col md={3} sm={6} key={idx} className="mb-2">
                            <Card className={`supplier-card text-center border-0 bg-transparent ${item.featured ? 'featured-supplier' : ''}`}>
                                <Card.Img 
                                    variant="top" 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="supplier-logo img-fluid" 
                                    loading="lazy" 
                                    onError={(e) => { e.target.src = '/placeholder-logo.png'; }} // Fallback de imagen
                                    style={{ 
                                        maxHeight: '80px', 
                                        objectFit: 'contain',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                {item.featured && (
                                    <div className="featured-badge">
                                        <FaStar size={12} />
                                    </div>
                                )}
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Carousel.Item>
        ));
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar 
                key={i} 
                size={14} 
                className={i < rating ? "text-warning" : "text-muted"} 
            />
        ));
    };

    return (
        <>
            <Helmet>
                <title>Corralón en Zona Sur GBA | Materiales Mayoristas y Minoristas | Darom SA</title>
                <meta name="description" content="Corralón líder en zona sur del Gran Buenos Aires. Distribuidores mayoristas y minoristas de materiales de construcción. Precios competitivos, entrega rápida." />
                <meta name="keywords" content="corralón zona sur, materiales construcción mayorista, distribuidor materiales construcción, corralón GBA sur, materiales para construcción, cemento, hierros, ladrillos, precios mayoristas" />
                <meta property="og:title" content="Corralón Darom SA - Mayorista y Minorista en Zona Sur GBA" />
                <meta property="og:description" content="Distribuidores de materiales de construcción para mayoristas y minoristas en zona sur del Gran Buenos Aires." />
                <link rel="canonical" href="https://daromsa.com.ar/materiales" />
                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "HardwareStore",
                        "name": "Darom SA Corralón",
                        "description": "Distribuidor mayorista y minorista de materiales de construcción en zona sur del Gran Buenos Aires",
                        "url": "https://daromsa.com.ar",
                        "telephone": "+54-221-573-9000",
                        "address": {
                            "@type": "PostalAddress",
                            "addressRegion": "Buenos Aires",
                            "addressCountry": "AR"
                        },
                        "areaServed": "Zona Sur Gran Buenos Aires",
                        "priceRange": "$$",
                        "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-13:00"
                    }`}
                </script>
            </Helmet>

            <div className={`heroc-section bg-dark text-white py-5 d-flex align-items-center ${animateHero ? 'animate-in' : ''}`} 
                style={{
                    minHeight: '100vh',
                    position: 'relative',
                    backgroundImage: 'url(/portadacoralon.JPG)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}>
                <Container>
                    <div className="heroc-content text-center" style={{position: 'relative', zIndex: 2}}>
                        <Row className="justify-content-center">
                            <Col lg={10} xl={8}>
                                <div className="mb-4 animate-delay-1">
                                    <Badge bg="danger" className="me-2 mb-2 p-3 fs-6 badge-darom">MAYORISTA</Badge>
                                    <Badge bg="warning" text="dark" className="me-2 mb-2 p-3 fs-6">MINORISTA</Badge>
                                    <Badge bg="success" className="me-2 mb-2 p-3 fs-6">ZONA SUR GBA</Badge>
                                </div>
                                
                                <h1 className="display-4 fw-bold mb-4 animate-delay-2">
                                    CORRALÓN EN ZONA SUR GBA<br />
                                    <span className="hero-highlight">MAYORISTA Y MINORISTA</span>
                                </h1>
                                
                                <p className="lead mb-4 fs-5 animate-delay-3">
                                    <strong>Distribuidores líderes</strong> de materiales para la construcción en zona sur del Gran Buenos Aires. 
                                    <br /><span className="text-warning fw-bold hero-subtitle">Precios mayoristas exclusivos para corralones, constructoras y revendedores.</span>
                                </p>
                                
                                {/* Client Selector sin ButtonGroup */}
                                <div className="client-selector mb-4 animate-delay-4">
                                    <div className="text-center mb-3">
                                        <small className="text-light opacity-75">SELECCIONÁ TU TIPO DE CLIENTE</small>
                                    </div>
                                    <div className="d-flex justify-content-center gap-2 mb-3">
                                        <Button
                                            variant={clientType === 'minorista' ? "danger" : "outline-light"}
                                            onClick={() => setClientType('minorista')}
                                            className="fw-bold px-4 py-3 client-btn"
                                        >
                                            <FaBuilding className="me-2" />
                                            CLIENTE MINORISTA
                                        </Button>
                                        <Button
                                            variant={clientType === 'mayorista' ? "warning" : "outline-light"}
                                            onClick={() => setClientType('mayorista')}
                                            className="fw-bold px-4 py-3 client-btn"
                                        >
                                            <FaTruck className="me-2" />
                                            CLIENTE MAYORISTA
                                        </Button>
                                    </div>
                                </div>

                                <div className="benefits-grid mb-4 mx-auto animate-delay-5" style={{maxWidth: '900px'}}>
                                    <Row className="g-3 justify-content-center">
                                        {benefits.map((benefit, index) => (
                                            <Col md={6} lg={5} key={index}>
                                                <div className="benefit-item d-flex align-items-start px-3 py-3">
                                                    <div className="benefit-icon me-3">
                                                        {benefit.icon}
                                                    </div>
                                                    <div className="text-start">
                                                        <h5 className="fw-bold mb-2 text-warning">{benefit.title}</h5>
                                                        <p className="small mb-0 text-light">{benefit.description}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                
                                <div className="text-center mb-3 animate-delay-6">
                                    <a 
                                        href="#reviews" 
                                        aria-label="Calificación en Google Maps"
                                        className="google-rating-badge-md d-inline-flex align-items-center text-decoration-none py-2 px-3"
                                    >
                                        <div className="d-flex align-items-center me-2">
                                            <svg width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                            </svg>
                                        </div>
                                        
                                        <div className="d-flex align-items-center me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FFD700">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                                            </svg>
                                            <span className="rating-value-md">4.7</span>
                                        </div>
                                        
                                        <div className="rating-details-md">
                                            <div className="rating-count-md">+50 valoraciones</div>
                                            <div className="rating-source-md">Google Maps</div>
                                        </div>
                                    </a>
                                </div>
                                
                                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-4 animate-delay-7">
                                    <Button 
                                        variant="danger" 
                                        size="lg"
                                        href={getWhatsappLink()}
                                        target="_blank"
                                        className="px-5 py-3 fw-bold btn-darom-primary"
                                    >
                                        <FaWhatsapp className="me-2" size={20} />
                                        {clientType === 'mayorista' ? 'COTIZACIÓN MAYORISTA' : 'SOLICITAR PRESUPUESTO'}
                                    </Button>
                                    
                                    <Button 
                                        variant="outline-light" 
                                        size="lg"
                                        href="#productos"
                                        className="px-5 py-3 fw-bold btn-darom-outline"
                                    >
                                        <FaSearch className="me-2" />
                                        VER PRODUCTOS
                                    </Button>
                                </div>
                                
                                <div className="contact-info mt-4 p-4 animate-delay-8">
                                    <Row className="g-4 justify-content-center">
                                        <Col xs={12} sm={5} className="text-center">
                                            <div className="mb-2">
                                                <FaBuilding className="text-light me-2" />
                                                <small className="text-light">CLIENTES MINORISTAS</small>
                                            </div>
                                            <div className="fw-bold fs-5 contact-phone">+54 221 573-9000</div>
                                        </Col>
                                        <Col xs={12} sm={5} className="text-center">
                                            <div className="mb-2">
                                                <FaTruck className="text-warning me-2" />
                                                <small className="text-warning">CLIENTES MAYORISTAS</small>
                                            </div>
                                            <div className="fw-bold fs-5 text-warning contact-phone">+54 9 11 2831-2705</div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <section id="productos" className="categories-section py-5 bg-light" ref={productGridRef}>
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title mb-3 display-5 fw-bold">Materiales de Construcción</h2>
                        <p className="lead text-muted fs-5">
                            Amplio stock para <strong className="text-danger">venta mayorista y minorista</strong> en zona sur del GBA
                        </p>
                    </div>
                    
                    {/* SOLUCIÓN AL ESTIRAMIENTO DE "YESOS": Usar un div en vez de un ButtonGroup */}
                    <div className="category-selector mb-5">
                        <div className="text-center mb-3">
                            <h5 className="text-muted category-subtitle">SELECCIONÁ UNA CATEGORÍA</h5>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            {Object.keys(materiales).map((subrubro) => (
                                <Button
                                    key={subrubro}
                                    variant={selectedSubrubro === subrubro ? "danger" : "outline-dark"}
                                    onClick={() => handleSubrubroSelect(subrubro)}
                                    className="text-uppercase fw-bold px-4 py-2 category-btn"
                                >
                                    {subrubroNames[subrubro] || subrubro}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="search-bar-container mb-5">
                        <SearchBar onSearch={handleSearch} className="mb-4" />
                    </div>

                    {isLoading && (
                        <div className="text-center py-5">
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p className="mt-2 text-muted">Cargando productos...</p>
                        </div>
                    )}

                    {!isLoading && (
                        <Row>
                            {filteredProducts.slice(0, visibleProducts).map((material) => (
                                <Col xs={12} sm={6} md={4} lg={3} key={material.id} className="mb-4">
                                    <Card className="product-card h-100 shadow-sm border-0">
                                        <div className="product-badge bg-danger">STOCK DISPONIBLE</div>
                                        {clientType === 'mayorista' && (
                                            <div className="product-badge bg-warning text-dark" style={{ top: '60px' }}>
                                                PRECIO MAYORISTA
                                            </div>
                                        )}
                                        <Card.Img 
                                            variant="top" 
                                            src={material.img} 
                                            alt={`Imagen de ${material.name}`} 
                                            loading="lazy" 
                                            onError={(e) => { e.target.src = '/placeholder-product.jpg'; }} // Imagen por defecto de producto
                                            className="product-image"
                                        />
                                        <Card.Body className="d-flex flex-column p-4">
                                            <Card.Title className="product-title fw-bold mb-3">{material.name}</Card.Title>
                                            <div className="mt-auto">
                                                <small className="text-muted d-block mb-3 product-availability">
                                                    ✅ Disponible para {clientType === 'mayorista' ? 'compra mayorista' : 'venta minorista'}
                                                </small>
                                                <Button
                                                    variant="danger"
                                                    size="lg"
                                                    onClick={() => handleAddToCart(material)}
                                                    className="w-100 fw-bold py-2 product-add-btn"
                                                >
                                                    Agregar al Carrito
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}

                    {!isLoading && visibleProducts < filteredProducts.length && (
                        <div className="text-center mt-5">
                            <Button 
                                variant="outline-danger" 
                                onClick={handleLoadMore} 
                                className="fw-bold px-5 py-2 load-more-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Cargando...' : 'Ver más productos'}
                            </Button>
                        </div>
                    )}

                    {!isLoading && filteredProducts.length === 0 && (
                        <div className="text-center py-5">
                            <p className="text-muted">No se encontraron productos para esta búsqueda.</p>
                        </div>
                    )}
                </Container>
            </section>

            <section className="cta-section py-5 bg-gradient">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="text-white mb-3 display-5 fw-bold">¿Necesitás precios mayoristas o asesoramiento técnico?</h2>
                            <p className="lead text-light fs-5">Contamos con equipo especializado para cada tipo de cliente</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col md={6}>
                            <Card className="h-100 border-0 shadow-lg cta-card">
                                <Card.Body className="text-center p-5">
                                    <FaBuilding size={60} className="text-danger mb-4 cta-icon" />
                                    <h4 className="fw-bold mb-3 display-6">Clientes Minoristas</h4>
                                    <p className="text-muted mb-4 fs-6">
                                        Atención personalizada para proyectos particulares, reformas y construcciones familiares
                                    </p>
                                    <Button 
                                        variant="danger" 
                                        size="lg"
                                        href="https://wa.me/542215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información%20para%20mi%20proyecto"
                                        target="_blank"
                                        className="fw-bold w-100 py-3"
                                    >
                                        <FaWhatsapp className="me-2" />
                                        CONSULTA MINORISTA
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="h-100 border-0 shadow-lg cta-card">
                                <Card.Body className="text-center p-5">
                                    <FaTruck size={60} className="text-warning mb-4 cta-icon" />
                                    <h4 className="fw-bold mb-3 display-6">Clientes Mayoristas</h4>
                                    <p className="text-muted mb-4 fs-6">
                                        Condiciones especiales para constructoras, revendedores, empresas y proyectos grandes
                                    </p>
                                    <Button 
                                        variant="warning" 
                                        size="lg"
                                        href="https://wa.me/5491128312705?text=Hola%20Darom%20SA,%20me%20interesa%20solicitar%20información%20y%20precios%20para%20compra%20mayorista"
                                        target="_blank"
                                        className="fw-bold w-100 py-3"
                                    >
                                        <FaWhatsapp className="me-2" />
                                        COTIZACIÓN MAYORISTA
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="coverage-section py-5 bg-white">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="section-title mb-4 display-5 fw-bold">Cobertura en Zona Sur GBA</h2>
                            <p className="lead text-muted mb-4 fs-5">
                                <strong>Servicio de distribución a toda la zona sur del Gran Buenos Aires</strong>
                            </p>
                            <Row>
                                {zonasCobertura.map((zona, index) => (
                                    <Col xs={6} key={index} className="mb-3">
                                        <div className="d-flex align-items-center coverage-item">
                                            <FaMapMarkerAlt className="text-danger me-2 flex-shrink-0" />
                                            <span className="fw-semibold">{zona}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col md={6}>
                            <div className="bg-light p-5 rounded-3 text-center border coverage-card">
                                <FaTruck size={50} className="text-danger mb-3 coverage-icon" />
                                <h5 className="fw-bold text-danger mb-3 display-6">¿No encontrás tu localidad?</h5>
                                <p className="text-muted mb-4 fs-6">
                                    Consultanos por cobertura en otras zonas del Gran Buenos Aires. 
                                    Realizamos envíos a toda la región.
                                </p>
                                <Button 
                                    variant="outline-danger"
                                    size="lg"
                                    href="https://wa.me/5491128312705?text=Hola%20Darom%20SA,%20quisiera%20consultar%20si%20realizan%20envíos%20a%20mi%20localidad"
                                    target="_blank"
                                    className="fw-bold px-4 coverage-btn"
                                >
                                    CONSULTAR COBERTURA
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="suppliers-section py-5 bg-light">
                <Container>
                    <h2 className="section-title mb-5 text-center display-5 fw-bold">Marcas Líderes que Distribuimos</h2>
                    <Carousel indicators={false} controls={suppliers.length > 4} variant="dark">
                        {renderCarouselItems(suppliers)}
                    </Carousel>
                </Container>
            </section>

            <section className="testimonials-section py-5 bg-white">
                <Container>
                    <h2 className="section-title mb-5 text-center display-5 fw-bold">Confían en Nosotros</h2>
                    <Row>
                        {testimonios.map((testimonio, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card className="testimonial-card h-100 border-0 shadow-sm">
                                    <Card.Body className="p-4">
                                        <div className="rating mb-3">
                                            {renderStars(testimonio.rating)}
                                        </div>
                                        <blockquote className="mb-0">
                                            <p className="fst-italic fs-6 testimonial-text">"{testimonio.text}"</p>
                                            <footer className="blockquote-footer mt-3">
                                                <strong className="text-danger">{testimonio.author}</strong>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Materiales;