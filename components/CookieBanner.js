// /components/CookieBanner.js

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo mostramos el banner si el usuario NO ha aceptado
    if (!localStorage.getItem('cookiesAccepted')) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          Utilizamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra 
          <Link href="/politica-de-datos">
            <a className="text-emcotic-cyan underline ml-1">Política de Datos</a>
          </Link>.
        </p>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-md text-sm font-medium bg-emcotic-cyan text-emcotic-blue hover:bg-white"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}