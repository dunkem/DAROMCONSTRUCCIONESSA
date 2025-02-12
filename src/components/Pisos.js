import React, { useEffect } from 'react';
import { Container, Image, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet'; // Importa Helmet
import './Pisos.css';
import Contact from './Contact';

function Pisos() {
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

    const trackConversion = () => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-717135166/PXf2CJL65fgZEL66-tUC' // ID de conversión y etiqueta
            });
        }
    };

    return (
        <Container className="mt-4 position-relative">
            <Helmet>
                <title>Pisos Industriales - Darom SA</title> {/* Establece el título de la pestaña */}
                <meta name="description" content="Pisos industriales de hormigón llaneado de alta calidad. Ofrecemos durabilidad, resistencia y acabados personalizados." />
                <meta name="keywords" content="pisos industriales, hormigón llaneado, endurecedores, pigmentos, Darom SA" />
                <link rel="canonical" href="https://daromsa.com.ar/pisos" /> {/* Cambia la URL a tu dominio */}
            </Helmet>

            <div className="pisos-materiales-container-custom">
                <h1 className="display-4 pisos-title-custom">PISOS INDUSTRIALES DE HORMIGÓN ELABORADO</h1>

                {/* Primera Tarjeta */}
                <div className="pisos-material-card-custom">
                    <Image 
                        src="/portadapisosindustriales.png" 
                        alt="Hormigón llaneado" 
                        fluid 
                        className="pisos-image-left"
                        loading="lazy" // Carga diferida
                    />
                    <div className="pisos-text">
                        <h2>HORMIGÓN LLANEADO</h2>
                        <p>
                            El <strong>hormigón llaneado</strong> es una losa de al menos 5 cm de espesor. Este tipo de piso es ideal para soportar cargas pesadas y se utiliza comúnmente en entornos industriales, como fábricas y almacenes.
                        </p>
                        <p>
                            El proceso de llaneado implica la aplicación de <strong>endurecedores</strong> o <strong>pigmentos</strong>, seguido de un acabado con llana mecánica. Los endurecedores mejoran la <strong>durabilidad</strong>, <strong>resistencia</strong> y facilitan la limpieza del piso, mientras que los pigmentos permiten una <strong>terminación estética</strong> personalizable.
                        </p>
                    </div>
                </div>

                {/* Segunda Tarjeta */}
                <div className="pisos-material-card-custom">
                    <Image 
                        src="/portadapisollaneado2.jpeg" 
                        alt="Proceso de llaneado" 
                        fluid 
                        className="pisos-image-right"
                        loading="lazy" // Carga diferida
                    />
                    <div className="pisos-text">
                        <h2>TRAYECTORIA Y EXPERIENCIA</h2>
                        <p>
                            <strong>Darom</strong> se destaca en el mercado por su experiencia en hormigón y su compromiso con la calidad. Nuestros pisos industriales están diseñados para resistir el desgaste y cumplir con las normativas más estrictas.
                        </p>
                        <p>
                            En <strong>Darom</strong>, la <strong>tecnología</strong> es clave. Utilizamos equipos de última generación y técnicas avanzadas para garantizar que cada piso cumpla con los más altos estándares de seguridad y rendimiento.
                        </p>
                    </div>
                </div>

                {/* Tercera Tarjeta */}
                <div className="pisos-material-card-custom">
                    <Image 
                        src="/portadaverticalpisos.jpg" 
                        alt="Innovación y Calidad" 
                        fluid 
                        className="pisos-image-right"
                        loading="lazy" // Carga diferida
                    />
                    <div className="pisos-text">
                        <h2>INNOVACIÓN Y CALIDAD</h2>
                        <p>
                            Ofrecemos un servicio integral que abarca desde la planificación inicial hasta la ejecución final, asegurando que cada proyecto sea un éxito. Nuestros pisos son perfectos para:
                        </p>
                        <ul>
                            <li><strong>Resistencia y Durabilidad:</strong> Ideales para tráfico intenso y condiciones exigentes.</li>
                            <li><strong>Acabado Perfecto:</strong> Superficies lisas y uniformes que facilitan el mantenimiento.</li>
                            <li><strong>Versatilidad:</strong> Aplicaciones en almacenes, plantas de producción y áreas comerciales.</li>
                        </ul>
                        <p>
                            <strong>Conclusión:</strong> Confía en <strong>Darom</strong> para transformar tus espacios industriales con pisos llaneados de calidad superior. Nuestra dedicación a la excelencia garantiza un producto final <strong>funcional y estéticamente atractivo</strong>.
                        </p>
                    </div>
                </div>

                {/* Botón de contacto */}
                <Button 
                    as="a" 
                    href="https://api.whatsapp.com/send/?phone=5492215739000&text=Hola%2C+estoy+interesado+en+sus+pisos+industriales.&type=phone_number&app_absent=0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="upload-button mt-4"
                    onClick={trackConversion}
                    aria-label="Contactar a un asesor por WhatsApp"
                >
                    <FaWhatsapp className="upload-icon" /> CONTÁCTATE CON UN ASESOR
                </Button>
            </div>
            <Contact showContact={true} />
        </Container>
    );
}

export default Pisos;