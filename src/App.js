import React, { useEffect, useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaShoppingCart, FaArrowUp } from 'react-icons/fa';
import { CartProvider, CartContext } from './contexts/CartContext';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Hormigon from './components/Hormigon';
import Materiales from './components/Materiales';
import Suelos from './components/Suelos';
import Pisos from './components/Pisos';
import Footer from './components/Footer';

import PisosCombinados from './components/PisosCombinados';

import './App.css';

function App() {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === '/services/pisos/pisoscombinados';

    useEffect(() => {
        setExpanded(false);
        
        // Cargar GTM si no está en localhost
        if (window.location.hostname !== 'localhost' && !window.dataLayer) {
            const gtmScript = document.createElement('script');
            gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-717135166";
            gtmScript.async = true;
            document.head.appendChild(gtmScript);

            window.dataLayer = window.dataLayer || [];
            window.gtag = function() { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', 'AW-717135166');
            window.gtag('config', 'G-340030138');
        }
    }, [location]);

    const trackConversion = (eventCategory, eventLabel, value = 1.0) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                'value': value,
                'currency': 'ARS',
                'event_category': eventCategory,
                'event_label': eventLabel
            });
        }
    };

    const trackNavigation = (page) => {
        trackConversion('Navigation', `Nav_${page}`);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Determinar si mostrar el botón de WhatsApp y otros elementos flotantes
    const showFloatingElements = !['/services/suelos', '/services/pisos', '/services/Pisos/Pisoscombinados',].includes(location.pathname);

    return (
        <CartProvider>
            <Helmet>
                <title>Darom SA - Soluciones Integrales en Construcción</title>
                <meta name="description" content="Darom SA ofrece hormigón elaborado, materiales de construcción, pisos industriales y servicios de estudio y movimiento de suelos." />
                <meta name="keywords" content="hormigón elaborado, construcción, materiales, pisos industriales, movimiento de suelos, estudio de suelos" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Darom SA",
                        "url": "https://www.daromsa.com.ar",
                        "logo": "https://www.daromsa.com.ar/ultimologodarom.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+542215739000",
                            "contactType": "sales",
                            "areaServed": "Argentina"
                        },
                        "sameAs": [
                            "https://www.facebook.com/DAROMSRL",
                            "https://www.instagram.com/daromsa/",
                            "https://www.youtube.com/watch?v=--7y8f63ZPk"
                        ]
                    })}
                </script>
            </Helmet>

            <div className="app-container">
                {!isLandingPage && (
                    <Navbar bg="black" expand="lg" className="navbar-custom" expanded={expanded}>
                        <Container fluid>
                            <Navbar.Brand as={Link} to="/" className="me-0 me-lg-3" onClick={() => trackNavigation('Home')}>
                                <img 
                                    src="/ultimologodarom.png" 
                                    alt="Darom SA - Especialistas en construcción" 
                                    className="navbar-logo"
                                    width="180"
                                    height="60"
                                    loading="lazy"
                                />
                            </Navbar.Brand>
                            
                            <Navbar.Toggle 
                                aria-controls="main-navbar" 
                                onClick={() => setExpanded(!expanded)}
                                className="custom-toggler"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </Navbar.Toggle>
                            
                            <Navbar.Collapse id="main-navbar">
                                <Nav className="mx-auto flex-wrap justify-content-center">
                                    <Nav.Link as={Link} to="/services/hormigon" onClick={() => { trackNavigation('Hormigón'); setExpanded(false); }} className="nav-item-custom">Hormigón Elaborado</Nav.Link>
                                    <Nav.Link as={Link} to="/services/materiales" onClick={() => { trackNavigation('Materiales'); setExpanded(false); }} className="nav-item-custom">Materiales</Nav.Link>
                                    <Nav.Link as={Link} to="/services/suelos" onClick={() => { trackNavigation('Suelos'); setExpanded(false); }} className="nav-item-custom">Estudio y Movimiento de Suelos</Nav.Link>
                                    <Nav.Link as={Link} to="/services/pisos" onClick={() => { trackNavigation('Pisos'); setExpanded(false); }} className="nav-item-custom">Pisos Industriales</Nav.Link>
                                    <Nav.Link as={Link} to="/about" onClick={() => { trackNavigation('Empresa'); setExpanded(false); }} className="nav-item-custom">La Empresa</Nav.Link>
                                    <Nav.Link as={Link} to="/contact" onClick={() => { trackNavigation('Contacto'); setExpanded(false); }} className="nav-item-custom">Contacto</Nav.Link>
                                </Nav>
                                <div className="navbar-extra d-flex align-items-center">
                                    <div className="social-links d-flex">
                                        <Nav.Link href="https://www.facebook.com/DAROMSRL" target="_blank" rel="noopener noreferrer nofollow" onClick={() => trackNavigation('Facebook')} className="social-link" aria-label="Facebook">
                                            <FaFacebook className="social-icon" />
                                        </Nav.Link>
                                        <Nav.Link href="https://www.instagram.com/daromsa/" target="_blank" rel="noopener noreferrer nofollow" onClick={() => trackNavigation('Instagram')} className="social-link" aria-label="Instagram">
                                            <FaInstagram className="social-icon" />
                                        </Nav.Link>
                                        <Nav.Link href="https://www.youtube.com/watch?v=--7y8f63ZPk" target="_blank" rel="noopener noreferrer nofollow" onClick={() => trackNavigation('YouTube')} className="social-link" aria-label="YouTube">
                                            <FaYoutube className="social-icon" />
                                        </Nav.Link>
                                    </div>
                                    <CartSummary trackConversion={trackConversion} />
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                )}
                
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services/materiales" element={<Materiales />} />
                        <Route path="/services/hormigon" element={<Hormigon />} />
                        <Route path="/services/suelos" element={<Suelos />} />
                        <Route path="/services/pisos/pisoscombinados" element={<PisosCombinados />} />
                        <Route path="/services/pisos" element={<Pisos />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </main>

                {showFloatingElements && (
                    <>
                        <a 
                            href="https://wa.me/5492215739000?text=Hola%20Darom%20SA,%20vi%20su%20página%20web%20y%20me%20interesa%20solicitar%20información" 
                            target="_blank" 
                            rel="noopener noreferrer nofollow" 
                            className="whatsapp-float" 
                            aria-label="Contactar por WhatsApp"
                            onClick={() => trackConversion('WhatsApp', 'Float_Button')}
                        >
                            <FaWhatsapp className="whatsapp-icon" />
                        </a>

                        <button 
                            className="scroll-to-top" 
                            onClick={scrollToTop}
                            aria-label="Volver arriba"
                        >
                            <FaArrowUp />
                        </button>
                    </>
                )}

                {!isLandingPage && <Footer />}
            </div>
        </CartProvider>
    );
}

function CartSummary({ trackConversion }) {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <NavDropdown 
            title={<>
                <FaShoppingCart aria-hidden="true" /> 
                {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                <span className="visually-hidden">Carrito de compras</span>
            </>} 
            id="cart-dropdown"
            className="cart-dropdown"
            onClick={() => trackConversion('Cart', 'Cart_Icon_Click')}
            aria-label="Carrito de compras"
        >
            <NavDropdown.Item as={Link} to="/cart" onClick={() => trackConversion('Cart', 'View_Cart')}>Ver Carrito</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item disabled>Artículos: {totalItems}</NavDropdown.Item>
            <NavDropdown.Item disabled>Total: ${totalPrice.toFixed(2)}</NavDropdown.Item>
        </NavDropdown>
    );
}

export default App;