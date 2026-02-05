import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Servicios() {
  // Estado inicial apuntando al nuevo producto estrella
  const [activeTab, setActiveTab] = useState('salud_mental');

  return (
    <div className="bg-slate-50 font-sans text-gray-800">
      <Head>
        <title>Servicios y Soluciones | EMCOTIC S.A.S.</title>
        <meta name="description" content="Inteligencia Artificial para el Bienestar Corporativo, Fábrica de Proyectos y Consultoría Estratégica." />
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/20 text-yellow-400 text-xs md:text-sm font-bold tracking-wide mb-4 border border-yellow-500/30">
            NUEVO PRODUCTO: IA + BIENESTAR
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Transformamos el Riesgo en <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Bienestar Productivo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Desde nuestra <strong>Fábrica de Proyectos</strong> hasta la gestión de la <strong>Salud Mental</strong> con Inteligencia Artificial. En EMCOTIC, blindamos a los líderes para que las empresas no se detengan.
          </p>
        </div>
      </section>

      {/* --- NAVEGACIÓN DE SERVICIOS (TABS REORGANIZADOS) --- */}
      <section className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 md:justify-center min-w-max px-2">
            {[
              { id: 'salud_mental', label: 'Salud Mental & IA', icon: '🧠' },
              { id: 'proyectos', label: 'Fábrica de Proyectos', icon: '🏗️' },
              { id: 'legal', label: 'Legal Tech & IP', icon: '⚖️' },
              { id: 'infraestructura', label: 'Infraestructura', icon: '🏢' },
              { id: 'finanzas', label: 'Finanzas', icon: '📈' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-4 text-xs md:text-sm font-bold uppercase tracking-wider border-b-4 transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-yellow-500 text-blue-900 bg-blue-50'
                    : 'border-transparent text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTENIDO DINÁMICO --- */}
      <main className="max-w-7xl mx-auto py-12 md:py-20 px-6 min-h-[600px]">
        
        {/* 1. SALUD MENTAL Y IA (NUEVO PRODUCTO ESTRELLA) */}
        {activeTab === 'salud_mental' && (
          <div className="animate-fadeIn space-y-16">
            
            {/* Problema y Datos */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-yellow-600 font-bold tracking-wider text-sm uppercase">El Asesino Silencioso</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 mt-2">
                  ¿Sabías que tu Salud Mental dicta la productividad de tu empresa?
                </h2>
                <p className="text-lg text-gray-600 mb-6 text-justify leading-relaxed">
                  En Colombia, el <strong>75% de los emprendimientos fracasan antes de los 3 años</strong>. Solemos culpar a las finanzas, pero el verdadero enemigo es invisible.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📉</span>
                    <p className="text-gray-700"><strong>6 de cada 10</strong> emprendedores sufren de Burnout, ansiedad severa o depresión.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌩️</span>
                    <p className="text-gray-700">Los trastornos mentales se han <strong>cuadruplicado</strong> en la última década (Fuente: Confecámaras).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛑</span>
                    <p className="text-gray-700">Cuando el líder cae, la empresa cae. La falta de motivación es la barrera invisible para escalar.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center mb-8">
                    <span className="text-6xl">🤖 + ❤️</span>
                    <h3 className="text-2xl font-bold text-blue-900 mt-4">Nuestra Solución: Tecnología DSME</h3>
                    <p className="text-gray-500 text-sm">Diagnóstico y gestión emocional basada en datos.</p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <div className="bg-yellow-100 text-yellow-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Medición (Online & IA)</h4>
                        <p className="text-sm text-gray-600">Evaluamos el estado de salud mental del CEO y directivos con nuestra herramienta propia.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="bg-yellow-100 text-yellow-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Índice Consolidado</h4>
                        <p className="text-sm text-gray-600">Reporte claro de riesgo: Burnout, nivel de ansiedad y motivación.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="bg-yellow-100 text-yellow-700 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-slate-800">Plan de Rescate</h4>
                        <p className="text-sm text-gray-600">Intervención inmediata para recuperar al líder y al equipo.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Servicios de Intervención */}
            <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-10">Consultoría de Intervención: De los datos a la acción</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-yellow-400">
                  <h4 className="font-bold text-lg mb-2">Mentorías 1 a 1</h4>
                  <p className="text-gray-600 text-sm">Para CEOs y Directivos. Enfoque exclusivo en autoliderazgo y manejo de presión extrema.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-yellow-400">
                  <h4 className="font-bold text-lg mb-2">Cohesión de Equipos</h4>
                  <p className="text-gray-600 text-sm">Talleres de alto impacto para sanar el clima laboral y reactivar la comunicación efectiva.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-yellow-400">
                  <h4 className="font-bold text-lg mb-2">Formación en Liderazgo</h4>
                  <p className="text-gray-600 text-sm">Herramientas prácticas para gestionar la incertidumbre sin sacrificar la salud mental.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 2. GESTIÓN DE PROYECTOS (FÁBRICA) */}
        {activeTab === 'proyectos' && (
          <div className="animate-fadeIn grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-cyan-600 font-bold tracking-wider text-sm uppercase">Gestión Estratégica</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 mt-2">Fábrica de Proyectos</h2>
              <p className="text-lg text-gray-600 mb-6 text-justify">
                Acceda a financiación pública o privada, nacional o internacional. Ayudamos a empresas a estructurar proyectos complejos maximizando la probabilidad de éxito ante el <strong>SGR (Regalías), Ministerios y Cooperación Internacional</strong>.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <span className="text-green-500">✅</span> Formulación Técnica
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">Alineación estricta con metodología MGA, requisitos estatales y normativos.</p>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                       <span className="text-green-500">✅</span> Gerencia Delegada
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">Nos encargamos de la administración integral del proyecto mientras usted se enfoca en su negocio.</p>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-500">
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                       <span className="text-green-500">✅</span> Consultoría Especializada
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">Red de consultores senior para resolver cuellos de botella técnicos y jurídicos.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
                 <div className="text-5xl mb-4">🏭</div>
                 <h3 className="text-2xl font-bold mb-2">Resultados Reales</h3>
                 <p className="text-blue-200">"Más de 14 años de experiencia transformando planes en ejecuciones exitosas."</p>
                 <div className="mt-6 pt-6 border-t border-blue-700">
                    <p className="text-sm font-semibold">Plataformas que dominamos:</p>
                    <div className="flex gap-3 mt-2">
                      <span className="bg-blue-800 px-3 py-1 rounded text-xs">Gesproy</span>
                      <span className="bg-blue-800 px-3 py-1 rounded text-xs">MGA Web</span>
                      <span className="bg-blue-800 px-3 py-1 rounded text-xs">Secop II</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. LEGAL TECH */}
        {activeTab === 'legal' && (
          <div className="animate-fadeIn grid md:grid-cols-2 gap-12 items-start">
             <div className="order-2 md:order-1 space-y-6">
               <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
                 <div className="text-5xl mb-4">⚖️</div>
                 <h3 className="text-2xl font-bold mb-2">Blindaje Jurídico</h3>
                 <p className="text-gray-300">Arquitectura legal para Startups y defensa de activos intangibles.</p>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Legal Tech & Propiedad Intelectual</h2>
              <div className="w-20 h-1 bg-cyan-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Protegemos la innovación en la economía digital.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-3 bg-white shadow-sm rounded">
                   <span className="text-cyan-600 font-bold">1.</span>
                   <span className="text-gray-700">Registro de Marcas y Patentes.</span>
                </li>
                <li className="flex items-center gap-4 p-3 bg-white shadow-sm rounded">
                   <span className="text-cyan-600 font-bold">2.</span>
                   <span className="text-gray-700">Contratos SaaS y Licenciamiento.</span>
                </li>
                <li className="flex items-center gap-4 p-3 bg-white shadow-sm rounded">
                   <span className="text-cyan-600 font-bold">3.</span>
                   <span className="text-gray-700">Habeas Data y Compliance Digital.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* 4. INFRAESTRUCTURA */}
        {activeTab === 'infraestructura' && (
          <div className="animate-fadeIn grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ingeniería & Obras Civiles</h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Dirección técnica especializada para ejecución de obras, interventoría y saneamiento básico.
              </p>
               <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-slate-800">Servicios Clave</h4>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Gerencia Integral de Obras</li>
                    <li>• Interventoría Técnica y Administrativa</li>
                    <li>• Consultoría en Saneamiento Básico</li>
                  </ul>
               </div>
            </div>
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                   <div className="text-6xl mb-4">🏗️</div>
                   <h3 className="font-bold text-xl">Ejecución Física</h3>
                </div>
            </div>
          </div>
        )}

        {/* 5. FINANZAS */}
        {activeTab === 'finanzas' && (
          <div className="animate-fadeIn grid md:grid-cols-2 gap-12 items-start">
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                   <div className="text-6xl mb-4">📈</div>
                   <h3 className="font-bold text-xl">Salud Financiera</h3>
                </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Auditoría & Finanzas Públicas</h2>
              <div className="w-20 h-1 bg-green-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Transparencia en la ejecución de recursos y optimización tributaria.
              </p>
              <ul className="space-y-2">
                 <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Auditoría de convenios públicos.</li>
                 <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Revisoría Fiscal.</li>
                 <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Gestión de nómina y parafiscales.</li>
              </ul>
            </div>
          </div>
        )}

      </main>

      {/* --- CTA FINAL --- */}
      <section className="bg-slate-900 text-white py-16 text-center border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-4">¿Tu equipo necesita un diagnóstico de bienestar?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          No dejes que el "Asesino Silencioso" detenga tu crecimiento. Hablemos hoy mismo.
        </p>
        <Link href="/contacto">
          <a className="inline-block bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-12 rounded-full shadow-lg transform transition hover:scale-105">
            Solicitar Diagnóstico DSME
          </a>
        </Link>
      </section>
    </div>
  );
}
