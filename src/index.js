import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Función para cargar scripts de forma asíncrona
const loadScript = (src, async = true, defer = false) => {
  const script = document.createElement('script');
  script.src = src;
  script.async = async;
  script.defer = defer;
  document.head.appendChild(script);
};

// Declaración de gtag en el ámbito global
window.dataLayer = window.dataLayer || [];
window.gtag = function() { window.dataLayer.push(arguments); };

// Inicialización de Google Tag Manager (GTM) y Google Ads solo en producción
if (process.env.NODE_ENV === 'production') {
  // Configuración inicial
  window.gtag('js', new Date());

  // Configuración de Google Ads (AW-717135166)
  window.gtag('config', 'AW-717135166', {
    'anonymize_ip': true,
    'allow_enhanced_conversions': true,
  });

  // Configuración de Google Analytics 4 (GA4)
  window.gtag('config', 'G-340030138');

  // Cargar el script de Google Tag Manager
  loadScript('https://www.googletagmanager.com/gtag/js?id=AW-717135166', true, true);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Medición de Web Vitals (opcional)
reportWebVitals(console.log);