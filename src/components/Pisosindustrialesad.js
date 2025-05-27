import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pisosindustrialesad = () => {
  useEffect(() => {
    // Ocultar elementos de la página principal
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';

    // Inicializar animaciones
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    return () => {
      // Restaurar elementos al desmontar
      if (navbar) navbar.style.display = 'block';
      if (footer) footer.style.display = 'block';
    };
  }, []);

  return (
    <div className="Pisosindustrialesad">
      {/* Hero Section */}
      <section className="py-6 py-lg-7 bg-dark text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 end-0 w-100 h-100" style={{
          background: 'url(/images/industrial-floor-problems.jpg) no-repeat center/cover',
          opacity: 0.3
        }}></div>
        <Container className="position-relative">
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center" data-aos="fade-up">
              <h1 className="display-3 fw-bold mb-4">
                <span className="text-danger d-block">¿Tu piso industrial presenta fisuras?</span>
                <span className="d-block mt-2">El 90% de los problemas se originan por estos 3 errores</span>
              </h1>
              <p className="lead mb-5 fs-2">
                Descubre cómo evitarlos y <span className="text-warning">ahorrar hasta 40%</span> en tu proyecto
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="#solucion" className="btn btn-danger btn-lg px-5 py-3 rounded-pill fw-bold shadow hover-scale" style={{transition: 'transform 0.3s'}}>
                  Ver Solución Completa
                </Link>
                <Link to="/contacto" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold shadow hover-scale" style={{transition: 'transform 0.3s'}}>
                  Consultar Expertos
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Autoridad */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="pe-lg-5">
                <h2 className="display-5 mb-4 fw-bold">¿Por qué podemos ayudarte?</h2>
                <div className="d-flex align-items-start mb-5">
                  <div className="bg-danger text-white rounded-3 display-4 fw-bold d-flex align-items-center justify-content-center me-4 flex-shrink-0" style={{width: '90px', height: '90px'}}>47</div>
                  <div>
                    <p className="mb-0 fs-4 fw-semibold">Años en construcción industrial</p>
                    <p className="text-muted">Expertos en soluciones duraderas</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="bg-danger text-white rounded-3 display-4 fw-bold d-flex align-items-center justify-content-center me-4 flex-shrink-0" style={{width: '90px', height: '90px'}}>150K</div>
                  <div>
                    <p className="mb-0 fs-4 fw-semibold">m² de pisos industriales</p>
                    <p className="text-muted">Instalados con éxito en Argentina</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="ps-lg-5 bg-white p-5 rounded-4 shadow-sm">
                <h3 className="h2 mb-4 text-danger">Descubrimientos Clave</h3>
                <p className="lead fs-3 mb-4">Identificamos 3 errores críticos que comprometen tus pisos:</p>
                <ul className="list-unstyled">
                  <li className="mb-4 pb-2 border-bottom">
                    <div className="d-flex">
                      <span className="text-danger me-3 fs-1">✓</span>
                      <div>
                        <h4 className="h5 fw-bold">Costos imprevistos</h4>
                        <p className="mb-0">Aumentan hasta 40% por mala planificación</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4 pb-2 border-bottom">
                    <div className="d-flex">
                      <span className="text-danger me-3 fs-1">✓</span>
                      <div>
                        <h4 className="h5 fw-bold">Fisuras prematuras</h4>
                        <p className="mb-0">Aparecen en los primeros 6 meses por errores de base</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-4">
                    <div className="d-flex">
                      <span className="text-danger me-3 fs-1">✓</span>
                      <div>
                        <h4 className="h5 fw-bold">Tiempos extendidos</h4>
                        <p className="mb-0">Retrasos de hasta 3 semanas por descoordinación</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Errores */}
      <section id="errores" className="py-6 bg-white">
        <Container>
          <div className="text-center mb-6" data-aos="fade-up">
            <span className="badge bg-danger rounded-pill px-3 py-2 mb-3 fs-6">ADVERTENCIA</span>
            <h2 className="display-5 fw-bold mb-3">Los 3 Errores que Arruinan tu Piso Industrial</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>Estos problemas son más comunes de lo que crees y pueden costarte miles de dólares</p>
          </div>
          
          {/* Error 1 */}
          <Row className="g-5 mb-6 align-items-center" data-aos="fade-up">
            <Col lg={6} className="order-lg-1">
              <div className="p-5 bg-light rounded-4 h-100">
                <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">Error #1</span>
                <h3 className="h2 mb-4">Estudio de suelo inadecuado o inexistente</h3>
                <div className="mb-5">
                  <h4 className="h4 text-danger mb-3">Consecuencias graves:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Hundimientos imprevistos en zonas críticas</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Fisuras que aparecen a los pocos meses</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Costos adicionales por refuerzos de emergencia</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-3 border border-2 border-danger">
                  <h4 className="h4 text-success mb-3">Nuestra solución:</h4>
                  <p className="fw-semibold">Estudio geotécnico completo que incluye:</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Análisis de resistencia del terreno</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Identificación de zonas problemáticas</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Recomendaciones de cimentación específicas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-0">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{paddingTop: '75%'}}>
                <img 
                  src="/fisuras.webp" 
                  alt="Problemas por mal estudio de suelo" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-cover"
                  loading="lazy"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75 text-white">
                  <p className="mb-0 fw-bold">Fisuras en piso industrial por falta de estudio de suelo adecuado</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Error 2 */}
          <Row className="g-5 mb-6 align-items-center" data-aos="fade-up">
            
            <Col lg={6}>
              <div className="p-5 bg-light rounded-4 h-100">
                <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">Error #2</span>
                <h3 className="h2 mb-4">Multiplicidad de proveedores y contratistas</h3>
                <div className="mb-5">
                  <h4 className="h4 text-danger mb-3">Problemas frecuentes:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Retrasos acumulados por descoordinación</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Nadie asume responsabilidad por fallas</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Costos ocultos por tiempos muertos</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-3 border border-2 border-danger">
                  <h4 className="h4 text-success mb-3">Nuestra solución:</h4>
                  <p className="fw-semibold">Gestión integral con un solo proveedor:</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Un único responsable desde inicio a fin</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Planificación coordinada de todas las etapas</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Garantía única sobre todo el proyecto</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{paddingTop: '75%'}}>
                <img 
                  src="/multiples.jpg" 
                  alt="Problemas por múltiples proveedores" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-cover"
                  loading="lazy"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75 text-white">
                  <p className="mb-0 fw-bold">Ejemplo: Retraso por descoordinación entre proveedores</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Error 3 */}
          <Row className="g-5 mb-6 align-items-center" data-aos="fade-up">
            <Col lg={6} className="order-lg-1">
              <div className="p-5 bg-light rounded-4 h-100">
                <span className="badge bg-danger rounded-pill px-3 py-2 mb-3">Error #3</span>
                <h3 className="h2 mb-4">Falta de control en calidad del hormigón</h3>
                <div className="mb-5">
                  <h4 className="h4 text-danger mb-3">Riesgos importantes:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Resistencia inferior a la requerida</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Pérdida de material por mala dosificación</span>
                    </li>
                    <li className="mb-3 d-flex">
                      <span className="text-danger me-3 fs-5">→</span>
                      <span>Fisuración prematura por compactación inadecuada</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-3 border border-2 border-danger">
                  <h4 className="h4 text-success mb-3">Nuestra solución:</h4>
                  <p className="fw-semibold">Sistema de control de calidad integral:</p>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Verificación de dosificación y resistencia</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Supervisión permanente de compactación</span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="text-success me-2">✓</span>
                      <span>Certificados de calidad documentados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-0">
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" style={{paddingTop: '75%'}}>
                <img 
                  src="/IMG_3139.jpg" 
                  alt="Problemas por falta de control en hormigón" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-cover"
                  loading="lazy"
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-75 text-white">
                  <p className="mb-0 fw-bold">Resultado de mala compactación: Fisuras en piso de almacén</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Solución - Mejorada */}
      <section id="solucion" className="py-6 bg-dark text-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center" data-aos="fade-up">
              <h2 className="display-4 fw-bold mb-4 text-warning">Solución Integral DRM360™</h2>
              <p className="lead fs-3 mb-5 text-light">Todo lo que necesitas para un piso industrial perfecto, en un solo lugar</p>
              
              <Row className="g-4 text-start">
                <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-dark bg-opacity-50 p-4 rounded-4 h-100 border border-warning border-opacity-25 hover-scale" style={{transition: 'transform 0.3s'}}>
                    <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                      <span className="fs-2 fw-bold">1</span>
                    </div>
                    <h3 className="h4 mb-3 text-warning">Estudio Geotécnico</h3>
                    <p className="mb-0 text-light">Análisis completo del terreno para cimentación adecuada</p>
                  </div>
                </Col>
                
                <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-dark bg-opacity-50 p-4 rounded-4 h-100 border border-warning border-opacity-25 hover-scale" style={{transition: 'transform 0.3s'}}>
                    <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                      <span className="fs-2 fw-bold">2</span>
                    </div>
                    <h3 className="h4 mb-3 text-warning">Diseño Especializado</h3>
                    <p className="mb-0 text-light">Planos y especificaciones técnicas personalizadas</p>
                  </div>
                </Col>
                
                <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-dark bg-opacity-50 p-4 rounded-4 h-100 border border-warning border-opacity-25 hover-scale" style={{transition: 'transform 0.3s'}}>
                    <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                      <span className="fs-2 fw-bold">3</span>
                    </div>
                    <h3 className="h4 mb-3 text-warning">Ejecución Controlada</h3>
                    <p className="mb-0 text-light">Supervisión permanente de calidad y plazos</p>
                  </div>
                </Col>
                
                <Col md={6} lg={3} data-aos="fade-up" data-aos-delay="400">
                  <div className="bg-dark bg-opacity-50 p-4 rounded-4 h-100 border border-warning border-opacity-25 hover-scale" style={{transition: 'transform 0.3s'}}>
                    <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-4" style={{width: '60px', height: '60px'}}>
                      <span className="fs-2 fw-bold">4</span>
                    </div>
                    <h3 className="h4 mb-3 text-warning">Garantía Documentada</h3>
                    <p className="mb-0 text-light">Respaldo escrito de durabilidad y resistencia</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final - Mejorado */}
      <section className="py-6 bg-black text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'url(/images/industrial-floor-solution.jpg) no-repeat center/cover',
          opacity: 0.15
        }}></div>
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center" data-aos="fade-up">
              <h2 className="display-4 fw-bold mb-4">¿Listo para construir tu piso industrial sin errores?</h2>
              <p className="lead fs-3 mb-5">Nuestro equipo está listo para asesorarte y garantizarte un piso industrial durable, sin sobrecostos ocultos.</p>
              
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <Link to="https://daromsa.com.ar/services/pisos" className="btn btn-danger btn-lg px-5 py-3 rounded-pill fw-bold fs-4 shadow hover-scale" style={{transition: 'transform 0.3s'}}>
                  Solicitar Asesoría Gratuita
                </Link>
            
              </div>
            
            </Col>
          </Row>
        </Container>
      </section>

      {/* Redirección discreta */}
      <div className="text-center py-4 bg-light">
        <a 
          href="https://daromsa.com.ar/services/pisos" 
          className="text-decoration-none small text-muted"
        >
          ← Volver al sitio principal de Darom
        </a>
      </div>
    </div>
  );
};

export default Pisosindustrialesad;