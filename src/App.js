import React, { useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';
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
import './App.css';

function App() {
    const [expanded, setExpanded] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpanded(false);
    }, [location]);

    return (
        <CartProvider>
            <Helmet>
                <title>Daromsa - Hormigón elaborado, Materiales y Servicios de Construcción</title>
                <meta name="description" content="Daromsa ofrece hormigón elaborado, materiales de construcción y servicios de movimiento de suelos, pisos industriales, respaldados por años de experiencia y calidad." />
                <meta name="keywords" content="hormigón, materiales de construcción, estudio de suelos, movimiento de suelos, pisos industriales, servicios de bombeo, construcción, Daromsa" />
                <meta property="og:title" content="Daromsa - Hormigón, Materiales y Servicios de Construcción" />
                <meta property="og:description" content="Transforma tus proyectos con Daromsa, tu proveedor confiable de hormigón elaborado, materiales de construcción y más." />
                <meta property="og:url" content="https://daromsa.com.ar" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://daromsa.com.ar/portada.jpg" />
            </Helmet>

            <Container fluid>
                <Navbar bg="light" expand="lg" className="shadow-sm mb-3 rounded navbar-custom" expanded={expanded}>
                    <Container fluid className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Navbar.Brand as={Link} to="/" className="me-2">
                                <img src="/ultimologodarom.png" alt="Darom SA" className="img-fluid" style={{ height: 50 }} />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="ms-auto nav-links">
                                <Nav.Link as={Link} to="/" className="mx-2" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/services/hormigon" className="mx-2" onClick={() => setExpanded(false)}>Hormigón Elaborado</Nav.Link>
                                <Nav.Link as={Link} to="/services/materiales" className="mx-2" onClick={() => setExpanded(false)}>Materiales</Nav.Link>
                                <Nav.Link as={Link} to="/services/suelos" className="mx-2" onClick={() => setExpanded(false)}>Estudio y Movimiento de Suelos</Nav.Link>
                                <Nav.Link as={Link} to="/services/pisos" className="mx-2" onClick={() => setExpanded(false)}>Pisos Industriales</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="mx-2" onClick={() => setExpanded(false)}>Sobre Nosotros</Nav.Link>
                                <Nav.Link as={Link} to="/contact" className="mx-2" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
                                <Nav className="social-icons ms-2">
                                    <Nav.Link href="https://www.facebook.com/DAROMSRL/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="mx-1">
                                        <FaFacebook size={25} />
                                    </Nav.Link>
                                    <Nav.Link href="https://www.instagram.com/daromsrl/?hl=es-la" target="_blank" rel="noopener noreferrer" className="mx-1">
                                        <FaInstagram size={25} />
                                    </Nav.Link>
                                    <Nav.Link href="https://www.youtube.com/watch?v=--7y8f63ZPk" target="_blank" rel="noopener noreferrer" className="mx-1">
                                        <FaYoutube size={25} />
                                    </Nav.Link>
                                    <CartSummary />
                                </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* Rutas de la aplicación */}
                <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services/materiales" element={<Materiales />} />
    <Route path="/services/hormigon" element={<Hormigon />} />
    <Route path="/services/suelos" element={<Suelos />} />
    <Route path="/services/pisos" element={<Pisos />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />
</Routes>

                <a href="https://wa.me/5492215739000" target="_blank" rel="noopener noreferrer" className="whatsapp-float" title="Chat on WhatsApp">
                    <FaWhatsapp size={50} className="whatsapp-icon" />
                </a>

                {/* Footer global */}
                <Footer />
            </Container>
        </CartProvider>
    );
}

function CartSummary() {
    const { cart } = useContext(CartContext);
    const totalItems = cart.length;
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <NavDropdown title={<><FaShoppingCart /> ({totalItems})</>} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/cart">Ver Carrito</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item disabled>Artículos: {totalItems}</NavDropdown.Item>
            <NavDropdown.Item disabled>Total: ${totalPrice.toFixed(2)}</NavDropdown.Item>
        </NavDropdown>
    );
}

export default App;