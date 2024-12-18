import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './About.css';
import Contact from './Contact';

function About() {
    const obras = [
        { src: "/obraconstrumex.jpg", title: "Obra Construmex" },
        { src: "/obracorredoresverdes.jpg", title: "Obra Corredores Verdes" },
        { src: "/obraecas.jpg", title: "Obra Ecas" },
        { src: "/obralibertatyfrench.jpg", title: "Obra Libertad y French" },
        { src: "/obramagallanes.jpg", title: "Obra Magallanes" },
        { src: "/obrapavimentacionmitre.jpg", title: "Obra Pavimentación Mitre" },
        { src: "/obrasvarias (3).jpg", title: "Obras" },
        { src: "/obrasvarias (4).jpg", title: "Obras" },
        { src: "/obrasvarias (5).jpg", title: "Obras" },
        { src: "/obrasvarias (7).jpg", title: "Obras" },
        { src: "/obraxapor.jpg", title: "Obra Xapor" }
    ];

    const renderCarouselItems = (images) => {
        const items = [];
        for (let i = 0; i < images.length; i += 3) {
            items.push(
                <Carousel.Item key={i}>
                    <Row className="justify-content-center">
                        {images.slice(i, i + 3).map((obra, index) => (
                            <Col xs={12} sm={4} key={index}>
                                <div className="carousel-image-container">
                                    <img
                                        className="d-block w-100 carousel-image"
                                        src={obra.src}
                                        alt={`Imagen de ${obra.title}`}
                                    />
                                    <Carousel.Caption className="carousel-caption">
                                        <h5 className="carousel-caption-title">{obra.title}</h5>
                                    </Carousel.Caption>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            );
        }
        return items;
    };

    return (
        <Container className="about-container mt-4">
            <Helmet>
                <title>Daromsa - Hormigón elaborado, Materiales y Servicios de Construcción</title>
                <meta name="description" content="Daromsa ofrece hormigón elaborado, materiales de construcción y servicios." />
                <meta name="keywords" content="hormigón, materiales, construcción, Daromsa" />
                {/* Etiqueta de Google */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-717135166"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-717135166');
                    `}
                </script>
                {/* Fragmento de evento de conversión */}
                <script>
                    {`
                        function gtag_report_conversion(url) {
                            var callback = function () {
                                if (typeof(url) != 'undefined') {
                                    window.location = url;
                                }
                            };
                            gtag('event', 'conversion', {
                                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC',
                                'value': 1.0,
                                'currency': 'ARS',
                                'event_callback': callback
                            });
                            return false;
                        }
                    `}
                </script>
            </Helmet>

            <Row>
                <Col>
                    <h1 className="about-title">La Empresa</h1>
                    <p className="about-paragraph">
                        Desde 1978, los socios actuales de Darom SA incursionan en la actividad de la construcción, comenzando como proveedores de Hormigón Elaborado para Zona Sur. Hoy, la empresa se ha expandido por toda la Provincia de Buenos Aires, comercializando sus productos y servicios en diversas localidades.
                    </p>
                    <p className="about-paragraph">
                        Iniciamos como un emprendimiento familiar y hemos crecido trabajando en distintos proyectos, desde obras públicas hasta civiles y particulares. Contamos con una planta de elaboración de hormigón en Bosques y oficinas administrativas en Hudson y La Plata.
                    </p>
                    <p className="about-paragraph">
                        En Darom, nos comprometemos con la calidad, integridad e innovación. Creemos en ofrecer productos y servicios de alta calidad, manteniendo relaciones éticas y transparentes con nuestros clientes y proveedores.
                    </p>
                    <p className="about-paragraph">
                        Nuestro equipo está compuesto por profesionales altamente capacitados y comprometidos con la excelencia, asegurando que cada proyecto se ejecute con los más altos estándares.
                    </p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Misión y Visión</h2>
                    <p className="about-paragraph">
                        Elaboramos hormigón y comercializamos materiales para diversas operaciones. Nos diferenciamos en el mercado por el servicio ofrecido, brindando soporte pre y post compra para asegurar la satisfacción de nuestros clientes.
                    </p>
                    <p className="about-paragraph">
                        Nuestro objetivo es comercializar nuestros materiales y servicios en toda la República Argentina, aspirando a ser líderes del mercado a nivel nacional.
                    </p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Nuestras Obras</h2>
                    <Carousel>
                        {renderCarouselItems(obras)}
                    </Carousel>
                </Col>
            </Row>

            <Contact showContact={true} />
        </Container>
    );
}

export default About;