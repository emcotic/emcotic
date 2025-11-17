// /components/Header.js
// VERSIÓN 2.0 - Logo Grande y Menú Corporativo

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    // Aumentamos la altura base y aseguramos que esté siempre arriba (sticky)
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Aumentamos la altura del contenedor a h-24 (96px) para dar espacio al logo */}
        <div className="flex justify-between items-center h-24">
          
          {/* --- LOGO (Izquierda) --- */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <a className="flex items-center">
                <Image 
                  src="/logoprincipal.png" 
                  alt="EMCOTIC Logo"
                  width={100} // Mucho más grande (antes era 40)
                  height={100}
                  objectFit="contain" // Asegura que el logo se vea completo sin recortarse
                  priority
                />
              </a>
            </Link>
          </div>
          
          {/* --- MENÚ (Derecha) --- */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              
              <Link href="/quienes-somos">
                <a className="text-lg font-medium text-gray-600 hover:text-emcotic-blue transition-colors duration-200">
                  Quiénes Somos
                </a>
              </Link>

              <Link href="/servicios">
                <a className="text-lg font-medium text-gray-600 hover:text-emcotic-blue transition-colors duration-200">
                  Productos y Servicios
                </a>
              </Link>

            </div>
          </div>
          
          {/* Menú Móvil (Placeholder para futuro desarrollo responsive) */}
          <div className="md:hidden">
            {/* Aquí iría el icono de hamburguesa */}
          </div>
          
        </div>
      </nav>
    </header>
  );
}
