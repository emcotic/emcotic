// /pages/_app.js

import '../styles/globals.css';
import Header from '../components/Header'; // Importamos el Header
import CookieBanner from '../components/CookieBanner'; // Importamos el Banner

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> {/* El Header siempre estará arriba */}
      
      <Component {...pageProps} /> {/* Aquí se carga la página (index.js, etc.) */}
      
      <CookieBanner /> {/* El banner de cookies siempre estará abajo */}
    </>
  );
}

export default MyApp;
