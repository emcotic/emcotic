// /pages/index.js
// VERSIÓN 6.0 - Espaciado Superior Optimizado (Header <-> Logo)

import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let prefilledMessage = `¡Hola EMCOTIC!\n\nEstoy interesado en sus servicios. Por favor contáctenme.\n\nNombre: ${nombre}\nEmail: ${email}\n`;
    if (empresa) prefilledMessage += `Empresa: ${empresa}\n`;
    prefilledMessage += `Mensaje: ${mensaje}\n`;
    const encodedMessage = encodeURIComponent(prefilledMessage);
    const whatsappURL = `https://wa.me/573175103393?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setNombre(''); setEmail(''); setEmpresa(''); setMensaje('');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-800 font-sans p-4">
      <Head>
        <title>EMCOTIC S.A.S - Gerencia de Proyectos e Innovación Legal-Tech</title>
        <meta name="description" content="Sinergia experta en Gestión de Proyectos, Derecho Tecnológico y Desarrollo." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-5xl mx-auto px-4">
        
        {/* --- SECCIÓN HERO (Compacta) --- */}
        {/* CAMBIO AQUI: pt-10 (antes 20) y md:pt-16 (antes 32) */}
        <div className="flex flex-col items-center text-center pt-10 pb-10 md:pt-16 md:pb-12">
          
          <Image 
            src="/logoprincipal.png" 
            alt="EMCOTIC Logo" 
            width={320} 
            height={320} 
            className="mb-10" 
            priority 
          />
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            Sinergia experta en <span className="text-emcotic-blue font-semibold">Gerencia de Proyectos</span>, <span className="text-emcotic-blue font-semibold">Derecho Tecnológico</span> e <span className="text-emcotic-blue font-semibold">Innovación</span>.
          </p>
        </div>

        {/* --- SECCIÓN SERVICIOS --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-emcotic-blue">Gerencia de Proyectos</h3>
            <p className="text-gray-700">Formulación y ejecución de proyectos I+D+i bajo metodologías ágiles y PMI. Maximizamos tu ROI y aseguramos el éxito.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-emcotic-blue">Consultoría Legal-Tech</h3>
            <p className="text-gray-700">Protegemos tu innovación: Propiedad Intelectual, Contratos y Derecho de Autor. La armadura legal de tus activos digitales.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-bold mb-4 text-emcotic-blue">Desarrollo y Optimización</h3>
            <p className="text-gray-700">E-learning, Machine Learning y optimización de procesos. Convertimos datos en decisiones y procesos en ventajas competitivas.</p>
          </div>
        </div>

        {/* --- SECCIÓN CONTACTO --- */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl mx-auto mt-24 mb-20 border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-emcotic-blue">Contáctanos</h2>
          <p className="text-gray-600 mb-8 text-center">¿Listo para escalar tu proyecto? Hablemos.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Tu Nombre *"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emcotic-cyan"
              />
              <input
                type="email"
                placeholder="Tu Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emcotic-cyan"
              />
            </div>
            <input
              type="text"
              placeholder="Empresa (Opcional)"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emcotic-cyan"
            />
            <textarea
              placeholder="Tu Mensaje *"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              rows="4"
              className="w-full p-3 rounded-md bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emcotic-cyan"
            />
            
            <button
              type="submit"
              className="w-full p-4 font-bold rounded-md text-white bg-emcotic-blue hover:bg-emcotic-cyan hover:text-emcotic-blue transition-all duration-300"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </main>

      <footer className="w-full max-w-5xl mx-auto py-8 mt-12 text-center text-gray-500 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} EMCOTIC S.A.S. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
