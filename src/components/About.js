import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './About.css';

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
                                        alt={obra.title}
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
            <Row>
                <Col>
                    <h1 className="about-title">LA EMPRESA</h1>
                    <p className="about-paragraph">
                        Desde el año 1978, los actuales socios de Darom SA incursionan en la actividad de la construcción, habiendo comenzado como proveedor de Hormigón Elaborado para Zona Sur. Actualmente, la empresa se ha expandido en toda la Provincia de Buenos Aires, comercializando sus productos y servicios en diversas localidades.
                    </p>
                    <h2 className="about-section-title">Historia</h2>
                    <p className="about-paragraph">
                        DAROM ha iniciado sus actividades como un emprendimiento familiar, y al día de hoy ha podido expandir su negocio trabajando en distintos proyectos (obras públicas, civiles y particulares). La empresa cuenta con una planta de elaboración de Hormigón ubicada en la localidad de Bosques y, así mismo, centraliza sus operaciones en las oficinas administrativas en el partido de Hudson y La Plata.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Misión</h2>
                    <p className="about-paragraph">
                        Elaboramos Hormigón y comercializamos materiales para distintos tipos de operaciones. Nos diferenciamos en el mercado por el servicio ofrecido a nuestros clientes, brindando un soporte pre y post compra que asegurará la correcta satisfacción de sus necesidades.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">Visión</h2>
                    <p className="about-paragraph">
                        Comercializar nuestros materiales y servicios para toda la República Argentina con el objetivo de ser los líderes del mercado a nivel nacional.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2 className="about-section-title">NUESTRAS OBRAS</h2>
                    <Carousel>
                        {renderCarouselItems(obras)}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
