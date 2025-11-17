// /pages/quienes-somos.js

import Head from 'next/head';
import Image from 'next/image';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Head>
        <title>Quiénes Somos - EMCOTIC S.A.S</title>
        <meta name="description" content="Conoce al equipo experto detrás de EMCOTIC: Gestión de Proyectos y Derecho Tecnológico." />
      </Head>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="bg-emcotic-blue text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Más que Consultores, <span className="text-emcotic-cyan">Socios Estratégicos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Desde 2010, fusionamos la rigurosidad de la gerencia de proyectos, la seguridad del derecho tecnológico y la innovación digital para escalar empresas.
            </p>
          </div>
        </section>

        {/* --- HISTORIA Y ENFOQUE --- */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emcotic-blue mb-6">Nuestra Trayectoria</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Fundada el 18 de marzo de 2010 en Barranquilla, <strong>EMCOTIC S.A.S.</strong> nació con una visión clara: ser el motor que impulsa la investigación, el desarrollo y la innovación tecnológica en la región.
                </p>
                <p>
                  A lo largo de más de una década, hemos evolucionado de ser una consultora tecnológica a convertirnos en una firma integral capaz de movilizar recursos superiores a los <strong>COP $37.600 millones</strong> en proyectos de alto impacto social y tecnológico.
                </p>
                <p>
                  Entendemos que la innovación no es solo tecnología; es una estructura legal sólida, una gestión humana eficiente y una estrategia financiera impecable.
                </p>
              </div>
            </div>
            {/* Espacio para una imagen corporativa o ilustración */}
            <div className="bg-gray-100 rounded-lg h-64 md:h-full flex items-center justify-center">
               {/* Puedes reemplazar esto con una foto de oficina o trabajo en equipo */}
               <Image 
                  src="/logoprincipal.png" 
                  alt="EMCOTIC Historia" 
                  width={200} 
                  height={200}
                  className="opacity-50 grayscale"
               />
            </div>
          </div>
        </section>

        {/* --- MISIÓN Y VISIÓN (Estilo Moderno) --- */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            
            {/* Tarjeta Misión */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emcotic-blue">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-emcotic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Nuestro Propósito (Misión)</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Democratizar el éxito de la innovación, blindando legal y técnicamente las ideas que transforman sociedades. Facilitamos la maduración tecnológica y empresarial con un enfoque ético y humano.
              </p>
            </div>

            {/* Tarjeta Visión */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emcotic-cyan">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-emcotic-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Nuestra Ambición (Visión)</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Ser el puente estratégico en Latinoamérica donde la tecnología, el derecho y la gestión humana convergen para convertir proyectos complejos en realidades sostenibles y rentables.
              </p>
            </div>

          </div>
        </section>

        {/* --- EL EQUIPO DIRECTIVO --- */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-emcotic-blue mb-16">Liderazgo Experto</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Perfil: Jorge Arango */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                {/* FOTO JORGE - Asegúrate de subir jorge.jpg a /public */}
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto">
                  {/* Descomenta la línea siguiente cuando tengas la foto */}
                  {/* <Image src="/jorge.jpg" alt="Jorge Arango" width={160} height={160} objectFit="cover" /> */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold">JA</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Jorge Arango Castaño</h3>
                <p className="text-emcotic-cyan font-semibold mb-3">CEO Fundador & Director de Proyectos</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Psicólogo y Magíster en Dirección y Gestión de Proyectos. Con más de 14 años de experiencia, ha liderado iniciativas de innovación y desarrollo social movilizando más de COP $37 mil millones. Experto en formulación de proyectos (Regalías, MinCiencias), metodologías ágiles y gestión financiera estratégica.
                </p>
                {/* Badges de habilidades */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Project Management</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Innovación Social</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Gestión Financiera</span>
                </div>
              </div>
            </div>

            {/* Perfil: Javier Cantillo */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                {/* FOTO JAVIER - Asegúrate de subir javier.jpg a /public */}
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto">
                   {/* Descomenta la línea siguiente cuando tengas la foto */}
                   {/* <Image src="/javier.jpg" alt="Javier Cantillo" width={160} height={160} objectFit="cover" /> */}
                   <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold">JC</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Javier Cantillo</h3>
                <p className="text-emcotic-cyan font-semibold mb-3">Socio & Director Legal-Tech</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Abogado y Magíster en Derecho con más de 20 años de experiencia. Especialista en Derecho Contractual y nuevas tecnologías. Ha sido Director Jurídico de importantes instituciones y es un referente en Propiedad Intelectual, Derecho del Consumidor y estructuración legal para Startups y emprendimientos digitales.
                </p>
                {/* Badges de habilidades */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Legal-Tech</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Propiedad Intelectual</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Contratos</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
