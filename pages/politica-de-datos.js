// /pages/politica-de-datos.js

import Head from 'next/head';

export default function PoliticaDeDatos() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-3xl mx-auto py-16 px-4">
        <Head>
          <title>Política de Tratamiento de Datos - EMCOTIC S.A.S</title>
        </Head>

        <h1 className="text-3xl font-bold text-emcotic-blue mb-8">
          Política de Tratamiento de Datos Personales
        </h1>
        
        <div className="prose prose-lg text-gray-700">
          <p>
            En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, 
            EMPRESA CONSULTORA EN TECNOLOGIA INFORMATICA DE LA COMUNICACION INVESTIGACION Y DESARROLLO S.A.S. EMCOTIC S.A.S., 
            con domicilio principal en Barranquilla[cite: 166], establece la presente Política para el Tratamiento 
            de Datos Personales.
          </p>

          <h2 className="text-2xl font-bold text-emcotic-blue mt-6">
            1. Responsable del Tratamiento
          </h2>
          <p>
            EMCOTIC S.A.S., con NIT 900.347.443-4[cite: 165], será el responsable del tratamiento 
            de los datos personales que recolecte.
          </p>
          
          <h2 className="text-2xl font-bold text-emcotic-blue mt-6">
            2. Finalidad
          </h2>
          <p>
            Los datos personales recolectados serán utilizados para...
          </p>
          
          <p className="font-bold text-red-600 mt-8">
            [PENDIENTE: Dr. Javier Cantillo, por favor completar esta sección 
            con las finalidades específicas, derechos del titular, 
            procedimientos y vigencia, acorde a la actividad lícita 
            de la empresa.]
          </p>

        </div>
      </div>
    </div>
  );
}
