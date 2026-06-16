# Darom SA - Soluciones Integrales en Construcción

Sitio web corporativo y plataforma de cotización para **Darom SA**, empresa líder con más de 45 años de trayectoria en el mercado de la construcción en Zona Sur del Gran Buenos Aires.

La plataforma ofrece un sistema de catálogo y carrito de cotizaciones integrado con WhatsApp para la venta minorista y mayorista de materiales, además de secciones dedicadas a Hormigón Elaborado, Estudio/Movimiento de Suelos y Pisos Industriales (Paquete DRM 360™).

## 🚀 Stack Tecnológico

*   **Frontend:** React (SPA)
*   **Estilos y UI:** React Bootstrap & CSS3 personalizado
*   **Iconos:** React Icons (FontAwesome)
*   **Ruteo:** React Router Dom v6
*   **SEO:** React Helmet (Meta tags dinámicos y Schema.org JSON-LD local)
*   **Despliegue e Infraestructura:** Netlify

## 📁 Estructura Clave del Proyecto

```text
├── public/
│   ├── site.webmanifest       # Configuración PWA y Favicons unificados
│   ├── sitemap.xml            # Mapa del sitio optimizado para Google y bots de IA
│   └── robots.txt             # Configuración de rastreo abierta para SEO y Ads
├── src/
│   ├── components/            # Componentes visuales puros y secciones de la app
│   │   ├── Home.jsx           # Landing page principal
│   │   ├── Materiales.jsx     # Catálogo con grilla optimizada
│   │   ├── Hormigon.jsx       # Sección Hormigón con control de video nativo
│   │   ├── Suelos.jsx         # Paquetes de estudio geotécnico
│   │   └── Pisos.jsx          # Soluciones industriales DRM 360™
│   ├── contexts/
│   │   └── CartContext.js     # Estado global del carrito con persistencia en LocalStorage
│   ├── data/
│   │   └── materialesData.js  # Base de datos indexada del catálogo (Separada de la UI)
│   ├── App.js                 # Manejo central de rutas y Layout corporativo
│   └── index.html             # Entry point con carga diferida de Google Fonts y GTM
└── _redirects                 # Configuración de Netlify (SPA fallback y mudanza SRL a SA)