// /components/Header.js

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center">
                <Image 
                  src="/logoprincipal.png" // Desde /public
                  alt="EMCOTIC Logo"
                  width={40} // Tamaño de logo en barra de menú
                  height={40}
                  className="rounded-full" // Opcional: si tu logo es cuadrado
                />
              </a>
            </Link>
          </div>
          
          {/* Menú a la derecha */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Aquí pondremos "Nosotros", "Servicios", etc. en el futuro */}
              
              {/* Por ahora, un botón de Contacto que lleva al formulario */}
              <a 
                href="#contacto" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-emcotic-blue hover:bg-emcotic-cyan hover:text-emcotic-blue"
              >
                Contáctanos
              </a>
            </div>
          </div>
          
          {/* Menú Móvil (placeholder) */}
          <div className="md:hidden">
            {/* <button>Menu</button> */}
          </div>
          
        </div>
      </nav>
    </header>
  );
}