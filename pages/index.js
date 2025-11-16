// /pages/index.js

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [mensaje, setMensaje] = useState('');
  
  const [status, setStatus] = useState(''); // 'enviando', 'exito', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, empresa, mensaje }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus('exito');
        // Limpiamos el formulario
        setNombre('');
        setEmail('');
        setEmpresa('');
        setMensaje('');
      } else {
        setStatus('error');
        console.error(data.message);
      }
    } catch (error) {
      setStatus('error');
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <Head>
        <title>EMCOTIC S.A.S - Innovación y Gestión de Proyectos</title>
        <meta name="description" content="Convertimos proyectos de innovación en realidades rentables y seguras." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-4xl mx-auto text-center">
        {/* Aquí puedes poner tu logo */}
        <img src="/logoprincipal.png" alt="EMCOTIC Logo" className="w-48 mx-auto mb-8" />
        
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4">
          EMCOTIC S.A.S
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Convertimos Proyectos de Innovación en Realidades Rentables y Seguras.
        </p>

        {/* Sección de Pilares */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">Gerencia de Proyectos</h3>
            <p className="text-gray-400">Formulación y ejecución de proyectos I+D+i bajo metodologías ágiles y PMI.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">Consultoría Legal-Tech</h3>
            <p className="text-gray-400">Protegemos tu innovación: Propiedad Intelectual, Contratos y Derecho de Autor.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-cyan-400">Desarrollo y Optimización</h3>
            <p className="text-gray-400">E-learning, Machine Learning y optimización de procesos empresariales.</p>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-gray-800 p-8 rounded-lg max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Contáctanos</h2>
          <p className="text-gray-400 mb-6">¿Listo para escalar tu proyecto? Hablemos.</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre *"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder="Tu Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              placeholder="Empresa (Opcional)"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Tu Mensaje *"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
              rows="4"
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            
            <button
              type="submit"
              disabled={status === 'enviando'}
              className="w-full p-4 font-bold rounded bg-cyan-500 hover:bg-cyan-600 transition-colors duration-300 disabled:bg-gray-500"
            >
              {status === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            {status === 'exito' && <p className="text-green-400 mt-4">¡Mensaje enviado con éxito!</p>}
            {status === 'error' && <p className="text-red-400 mt-4">Hubo un error. Intenta de nuevo.</p>}
          </form>
        </div>
      </main>

      <footer className="w-full max-w-4xl mx-auto mt-16 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} EMCOTIC S.A.S. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
