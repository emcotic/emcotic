// /pages/_app.js

// Importamos los estilos globales de Tailwind
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
