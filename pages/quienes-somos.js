// /pages/quienes-somos.js
// VERSIÓN FINAL - Perfiles con Email de Contacto

import Head from 'next/head';
import Image from 'next/image';

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Head>
        <title>Quiénes Somos - EMCOTIC S.A.S</title>
        <meta name="description" content="Conoce al equipo experto detrás de EMCOTIC: Gestión de Proyectos, Derecho Tecnológico y Finanzas Estratégicas." />
      </Head>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="bg-emcotic-blue text-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Más que Consultores, <span className="text-emcotic-cyan">Socios Estratégicos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Desde 2010, fusionamos la rigurosidad de la gerencia de proyectos, la seguridad del derecho tecnológico y la solidez financiera para escalar empresas.
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
            <div className="bg-gray-100 rounded-lg h-64 md:h-full flex items-center justify-center p-8">
               <Image 
                  src="/logoprincipal.png" 
                  alt="EMCOTIC Historia" 
                  width={300} 
                  height={300}
                  objectFit="contain"
                  className="opacity-90"
               />
            </div>
          </div>
        </section>

        {/* --- MISIÓN Y VISIÓN --- */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
          
          <div className="grid md:grid-cols-2 gap-12 gap-y-16">
            
            {/* 1. Jorge Arango */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto relative">
                  <Image src="/jac.png" alt="Jorge Arango" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Jorge Arango Castaño</h3>
                <p className="text-emcotic-cyan font-semibold mb-1">CEO Fundador & Director de Proyectos</p>
                <a href="mailto:jarangoc@emcotic.com" className="text-sm text-gray-500 hover:text-emcotic-blue mb-3 block transition-colors">jarangoc@emcotic.com</a>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Psicólogo y Magíster en Dirección y Gestión de Proyectos. Con más de 14 años de experiencia, ha liderado iniciativas de innovación movilizando más de COP $37 mil millones. Experto en formulación de proyectos (Regalías, MinCiencias) y metodologías ágiles.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Project Management</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Innovación</span>
                </div>
              </div>
            </div>

            {/* 2. Javier Cantillo */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto relative">
                   <Image src="/javier.png" alt="Javier Cantillo" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Javier Cantillo</h3>
                <p className="text-emcotic-cyan font-semibold mb-1">Socio & Director Legal-Tech</p>
                <a href="mailto:javier.cantillo@emcotic.com" className="text-sm text-gray-500 hover:text-emcotic-blue mb-3 block transition-colors">javier.cantillo@emcotic.com</a>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Abogado y Magíster en Derecho. Especialista en Derecho Contractual y nuevas tecnologías con más de 20 años de experiencia. Referente en Propiedad Intelectual y estructuración legal para Startups y emprendimientos digitales.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Legal-Tech</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Propiedad Intelectual</span>
                </div>
              </div>
            </div>

            {/* 3. Anasaria Vargas */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto relative">
                   <Image src="/anav.png" alt="Anasaria Vargas" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Anasaria Vargas Calderón</h3>
                <p className="text-emcotic-cyan font-semibold mb-1">Directora Financiera y Contable</p>
                <a href="mailto:ana.vargas@emcotic.com" className="text-sm text-gray-500 hover:text-emcotic-blue mb-3 block transition-colors">ana.vargas@emcotic.com</a>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Contadora Pública y Especialista en Finanzas. Aporta una visión estratégica en la gestión de recursos y presupuestos públicos y privados. Su experiencia en entidades como la Gobernación y la Cámara de Comercio garantiza la solidez y transparencia financiera en cada proyecto ejecutado.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Finanzas Corporativas</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Auditoría</span>
                </div>
              </div>
            </div>

            {/* 4. Jaime Blanco */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg mx-auto relative">
                   <Image src="/jaime.png" alt="Jaime Blanco" layout="fill" objectFit="cover" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emcotic-blue">Jaime Blanco Aristizábal</h3>
                <p className="text-emcotic-cyan font-semibold mb-1">Gestor de Proyectos Senior</p>
                <a href="mailto:jaime.blanco@emcotic.com" className="text-sm text-gray-500 hover:text-emcotic-blue mb-3 block transition-colors">jaime.blanco@emcotic.com</a>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Ingeniero Civil y Especialista en Gerencia Integral de Obras. Cuenta con una amplia trayectoria en el sector público y privado, liderando planes de desarrollo económico y social. Su experiencia asegura la viabilidad técnica y la ejecución eficiente de proyectos de gran envergadura.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Gerencia Integral</span>
                  <span className="bg-blue-50 text-emcotic-blue px-3 py-1 rounded-full text-xs font-semibold">Desarrollo Social</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
