import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Pisos.css';
import Contact from './Contact';

function Pisos() {

    useEffect(() => {
        window.scrollTo(0, 0); // Desplazar a la parte superior de la página
    }, []);

    return (
        <Container className="mt-4 position-relative">
            <video preload="auto" autoPlay loop muted className="pisos-video-background-custom">
    <source src="/IMG_20241112132439452.mp4" type="video/mp4" />
    Tu navegador no soporta el elemento de video.
</video>
            
            <div className="pisos-materiales-container-custom">
                <h1 className="display-4 pisos-title-custom">PISOS INDUSTRIALES DE HORMIGÓN ELABORADO</h1>
                
                

                <div className="pisos-material-card-custom">
                    <p>
                        El <strong>hormigón llaneado</strong>, es una losa de al menos 5 cm de espesor. Este tipo de piso es ideal para soportar cargas pesadas y se utiliza comúnmente en entornos industriales, como fábricas y almacenes.
                    </p>
                    <Image 
                        src="/portadapisosindustriales.png" 
                        alt="Hormigón llaneado" 
                        fluid 
                        className="pisos-image-custom" 
                        style={{ float: 'right', marginLeft: '10px' }} 
                    />
                    <p>
                        El proceso de llaneado implica la aplicación de <strong>endurecedores</strong> o <strong>pigmentos</strong>, seguido de un acabado con llana mecánica. Los endurecedores mejoran la <strong>durabilidad</strong>, <strong>resistencia</strong> y facilitan la limpieza del piso, mientras que los pigmentos permiten una <strong>terminación estética</strong> personalizable.
                    </p>
                    <Image 
                        src="/portadapisollaneado2.jpeg" 
                        alt="Proceso de llaneado" 
                        fluid 
                        className="pisos-image-custom" 
                        style={{ float: 'left', marginRight: '10px' }} 
                    />
                    <p>
                        <strong>Trayectoria y Experiencia</strong>: <strong>Darom</strong> se destaca en el mercado por su experiencia en hormigón y su compromiso con la calidad. Nuestros pisos industriales están diseñados para resistir el desgaste y cumplir con las normativas más estrictas.
                    </p>
                    <p>
                        <strong>Innovación y Calidad</strong>: En <strong>Darom</strong>, la <strong>tecnología</strong> es clave. Utilizamos equipos de última generación y técnicas avanzadas para garantizar que cada piso cumpla con los más altos estándares de seguridad y rendimiento.
                    </p>
                    <Image 
                        src="/portadaverticalpisos.jpg" 
                        alt="Proceso de llaneado" 
                        fluid 
                        className="pisos-image-custom" 
                        style={{ float: 'right', marginLeft: '10px' }} 
                    />
                    <p>
                        Ofrecemos un servicio integral que abarca desde la planificación inicial hasta la ejecución final, asegurando que cada proyecto sea un éxito. Nuestros pisos son perfectos para:
                        <ul>
                            <li><strong>Resistencia y Durabilidad</strong>: Ideales para tráfico intenso y condiciones exigentes.</li>
                            <li><strong>Acabado Perfecto</strong>: Superficies lisas y uniformes que facilitan el mantenimiento.</li>
                            <li><strong>Versatilidad</strong>: Aplicaciones en almacenes, plantas de producción y áreas comerciales.</li>
                        </ul>
                    </p>
                    <p>
                        <strong>Innovación en Cada Paso</strong>: Nos mantenemos a la vanguardia, utilizando métodos de instalación que minimizan el tiempo de inactividad y maximizan la eficiencia. 
                    </p>
                    <p>
                        <strong>Conclusión</strong>: Confía en <strong>Darom</strong> para transformar tus espacios industriales con pisos llaneados de calidad superior. Nuestra dedicación a la excelencia garantiza un producto final <strong>funcional y estéticamente atractivo</strong>.
                    </p>
                </div>
            </div>
            <Contact showContact={true} />
        </Container>
    );
}

export default Pisos;