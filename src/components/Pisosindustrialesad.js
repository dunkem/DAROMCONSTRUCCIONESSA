import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pisosindustrialesad = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // Eliminar cualquier padding/margin del body
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.overflowX = 'hidden';

    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    return () => {
      if (navbar) navbar.style.display = 'block';
      if (footer) footer.style.display = 'block';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  return (
    <div className="Pisosindustrialesad" style={{ margin: 0, padding: 0 }}>
      {/* Hero Section */}
<section className="py-4 py-lg-5 bg-black text-white position-relative overflow-hidden" style={{ margin: 0 }}>
  <div className="position-absolute top-0 end-0 w-100 h-100" style={{
    background: 'url(/images/industrial-floor-problems.jpg) no-repeat center/cover',
    opacity: 0.3
  }}></div>
  <Container className="position-relative">
    <Row className="align-items-center">
      <Col lg={10} className="mx-auto text-center" data-aos="fade-up">
        <h1 className="display-5 fw-bold mb-3">
          <span className="text-white">El 90% de los Pisos Industriales Sufren </span>
          <span className="text-danger">Fisuras y Sobrecostos</span>
          <span className="text-white"> por </span>
          <span className="text-danger">3 Errores Comunes</span>
        </h1>
        <p className="lead mb-3 fs-3 text-white">
          Descubre Cómo Evitarlos y Ahorrar en Tu Obra
        </p>
      </Col>
    </Row>
  </Container>
</section>
      {/* Sección de Errores */}
      <section id="errores" className="py-4 bg-white">
        <Container>
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="badge bg-danger rounded-pill px-3 py-2 mb-2 fs-6">ADVERTENCIA</span>
            <h2 className="display-5 fw-bold mb-2">Los 3 Errores que Arruinan tu Piso Industrial</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>Luego de 3 millones m² construidos en 47 años de experiencia, descubrimos estos errores que aumentan costos en pisos industriales.</p>
          </div>
          
          {/* Error 1 */}
          <Row className="g-4 mb-4 align-items-center" data-aos="fade-up">
            <Col lg={6} className="order-lg-1">
              <div className="p-4 bg-light rounded-4 h-100">
                <span className="badge bg-danger rounded-pill px-3 py-2 mb-2">Error #1</span>
                <h3 className="h2 mb-3">No realizar un Estudio de Suelo adecuado</h3>
                <div className="mb-3">
                  <h4 className="h4 text-danger mb-2">Consecuencias graves:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="text-danger me-2 fs-5">→</span>
                      <span>Hundimientos y fisuras por resistencia desconocida del terreno</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-danger me-2 fs-5">→</span>
                      <span>Rellenos inesperados que aumentan costos y plazos</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-danger me-2 fs-5">→</span>
                      <span>Improvisaciones que encarecen la obra</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-3 border border-2 border-danger">
                  <h4 className="h4 text-danger mb-2">Solución profesional:</h4>
                  <p className="fw-semibold">Estudio de suelo completo con pruebas de laboratorio y ensayos geotécnicos para máxima precisión.</p>
                  <ul className="list-unstyled">
                    <li className="mb-1 d-flex">
                      <span className="text-danger me-2">✓</span>
                      <span>Base sólida sin fisuras futuras</span>
                    </li>
                    <li className="mb-1 d-flex">
                      <span className="text-danger me-2">✓</span>
                      <span>Optimización de materiales</span>
                    </li>
                    <li className="mb-1 d-flex">
                      <span className="text-danger me-2">✓</span>
                      <span>Ejecución más rápida</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-0">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{paddingTop: '60%'}}>
                <img 
                  src="/fisuraspisos.jpg" 
                  alt="Fisuras graves en piso industrial por falta de estudio de suelo profesional" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-cover"
                  loading="lazy"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-black bg-opacity-75 text-white">
                  <p className="mb-0 small">Daños típicos por estudios de suelo insuficientes</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Error 2 - Versión con propuesta a la derecha en desktop */}
<Row className="g-4 mb-4 align-items-center" data-aos="fade-up">
  <Col lg={8}>
    <div className="p-4 bg-light rounded-4 h-100">
      <span className="badge bg-danger rounded-pill px-3 py-2 mb-2">Error #2</span>
      <h3 className="h2 mb-3">Contratar múltiples proveedores y perder control</h3>
      <div className="mb-3">
        <h4 className="h4 text-danger mb-2">Riesgos críticos:</h4>
        <ul className="list-unstyled">
          <li className="mb-2 d-flex">
            <span className="text-danger me-2 fs-5">→</span>
            <span>Retrasos por falta de coordinación entre proveedores</span>
          </li>
          <li className="mb-2 d-flex">
            <span className="text-danger me-2 fs-5">→</span>
            <span>"Pase de culpas" cuando hay fallas</span>
          </li>
          <li className="mb-2 d-flex">
            <span className="text-danger me-2 fs-5">→</span>
            <span>Costos ocultos por tiempos de espera</span>
          </li>
        </ul>
      </div>
    </div>
  </Col>
  
  <Col lg={4}>
    <div className="bg-white p-4 rounded-3 border border-2 border-danger h-100">
      <h4 className="h4 text-danger mb-3">Nuestra propuesta:</h4>
      <p className="fw-semibold mb-3">Gestión unificada con un solo equipo responsable de todas las etapas.</p>
      <ul className="list-unstyled">
        <li className="mb-2 d-flex align-items-start">
          <span className="text-danger me-2 mt-1">✓</span>
          <span>Coordinación perfecta de plazos</span>
        </li>
        <li className="mb-2 d-flex align-items-start">
          <span className="text-danger me-2 mt-1">✓</span>
          <span>Comunicación directa y transparente</span>
        </li>
        <li className="mb-2 d-flex align-items-start">
          <span className="text-danger me-2 mt-1">✓</span>
          <span>Responsabilidad total</span>
        </li>
      </ul>
    </div>
  </Col>
</Row>

          {/* Error 3 */}
          <Row className="g-4 mb-4 align-items-center" data-aos="fade-up">
            <Col lg={6} className="order-lg-1">
              <div className="p-4 bg-light rounded-4 h-100">
                <span className="badge bg-danger rounded-pill px-3 py-2 mb-2">Error #3</span>
                <h3 className="h2 mb-3">Falta de control en calidad del hormigón</h3>
                <div className="mb-3">
                  <h4 className="h4 text-danger mb-2">Peligros comunes:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="text-danger me-2 fs-5">→</span>
                      <span>Hormigón insuficiente o de baja calidad</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-danger me-2 fs-5">→</span>
                      <span>Compactación inadecuada que reduce resistencia</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-danger me-2 fs-5">→</span>
                      <span>Falta de garantías reales de durabilidad</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-3 border border-2 border-danger">
                  <h4 className="h4 text-danger mb-2">Nuestro método:</h4>
                  <p className="fw-semibold">Sistema de verificación con tecnología para control total del hormigón.</p>
                  <ul className="list-unstyled">
                    <li className="mb-1 d-flex">
                      <span className="text-danger me-2">✓</span>
                      <span>Supervisión profesional de compactación</span>
                    </li>
                    <li className="mb-1 d-flex">
                      <span className="text-danger me-2">✓</span>
                      <span>Mediciones exactas con equipos certificados</span>
                    </li>
                    <li className="mb-1 d-flex">
                      <span className="text-danger me-2">✓</span>
                      <span>Ensayos de resistencia documentados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-0">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{paddingTop: '60%'}}>
                <img 
                  src="/IMG_3139.jpg" 
                  alt="Problemas de compactación y calidad en hormigón industrial" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-cover"
                  loading="lazy"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-black bg-opacity-75 text-white">
                  <p className="mb-0 small">Defectos por falta de control en calidad del hormigón</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final Mejorado */}
      <section className="py-4 bg-black text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'url(/images/industrial-floor-solution.jpg) no-repeat center/cover',
          opacity: 0.15
        }}></div>
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-3">¿Planeas construir un piso industrial?</h2>
              <p className="lead fs-4 mb-4">
                Evita errores costosos con nuestra solución integral
              </p>
              
              {/* Card DRM 360 Impactante */}
<div className="position-relative rounded-4 overflow-hidden mb-4 border border-3 border-danger shadow-lg" 
     style={{minHeight: '400px'}}>
  
  {/* Imagen de fondo completa */}
  <div className="position-absolute top-0 start-0 w-100 h-100">
    <img 
      src="/UltraFloorPro.png" 
      alt="Tecnología avanzada en pisos industriales SUELO DRM 360™" 
      className="w-100 h-100 object-cover"
      loading="lazy"
      style={{objectPosition: 'center center'}}
    />
  </div>
  
  {/* Capa de overlay para mejor contraste */}
  <div className="position-absolute top-0 start-0 w-100 h-100" 
       style={{background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)'}}></div>
  
  {/* Contenido principal */}
  <div className="position-relative h-100 d-flex flex-column justify-content-center p-5">
    
    {/* Título principal con palabras destacadas */}
    <h2 className="display-3 fw-bold text-white mb-4">
      <span className="d-block">Pisos Industriales</span>
      <span className="text-danger">SUELO DRM 360™</span>
    </h2>
    
    {/* Descripción con palabras clave destacadas */}
    <div className="bg-white bg-opacity-10 p-4 rounded-3 mb-4" style={{maxWidth: '1200px', borderLeft: '4px solid #dc3545'}}>
      <p className="fs-3 mb-0 text-white">
        Sistema integral con <span className="text-danger fw-bold">garantía extendida</span>, 
        <span className="text-danger fw-bold"> control de calidad</span> certificado y 
        <span className="text-danger fw-bold"> tecnología de punta</span> para tus proyectos industriales.
      </p>
    </div>
    

  </div>
</div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Pisosindustrialesad;