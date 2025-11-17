// /components/Header.js
// VERSIÓN 3.0 - Menú Móvil Funcional (Hamburguesa)

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* --- LOGO (Izquierda) --- */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/">
              <a className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image 
                  src="/logoprincipal.png" 
                  alt="EMCOTIC Logo"
                  width={100}
                  height={100}
                  objectFit="contain"
                  priority
                />
              </a>
            </Link>
          </div>
          
          {/* --- MENÚ DE ESCRITORIO (Oculto en móviles) --- */}
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
          
          {/* --- BOTÓN DE MENÚ MÓVIL (Visible solo en móviles) --- */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-emcotic-blue focus:outline-none p-2"
            >
              {/* Icono SVG: Si está abierto muestra X, si no, muestra Hamburguesa */}
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>
      </nav>

      {/* --- DESPLEGABLE DEL MENÚ MÓVIL --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/quienes-somos">
              <a 
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emcotic-blue hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
              >
                Quiénes Somos
              </a>
            </Link>
            <Link href="/servicios">
              <a 
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-emcotic-blue hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos y Servicios
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
