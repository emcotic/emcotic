// /pages/politica-de-datos.js

import Head from 'next/head';
import Link from 'next/link';

// Componente de estilo para reutilizar
const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-emcotic-blue mt-6 mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export default function PoliticaDeDatos() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Head>
          <title>Política de Tratamiento de Datos - EMCOTIC S.A.S</title>
        </Head>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-emcotic-blue mb-4">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="text-lg text-gray-600">
            Última actualización: 16 de noviembre de 2025
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <Section title="1. Identificación del Responsable del Tratamiento">
            <p>
              <strong>Razón Social:</strong> EMPRESA CONSULTORA EN TECNOLOGIA INFORMATICA DE LA COMUNICACION INVESTIGACION Y DESARROLLO S.A.S. EMCOTIC S.A.S.
            </p>
            <p>
              <strong>Sigla:</strong> EMCOTIC S.A.S.
            </p>
            <p>
              <strong>NIT:</strong> 900.347.443-4
            </p>
            <p>
              <strong>Domicilio Principal:</strong> Barranquilla, Atlántico, Colombia
            </p>
            <p>
              <strong>Dirección Domicilio Principal:</strong> CRA 55 # 100 OFICINA 613, CENTRO EMPRESARIAL BLUE GARDENS
            </p>
            <p>
              <strong>Correo Electrónico de Contacto:</strong> jarangoc@emcotic.com
            </p>
            <p>
              <strong>Teléfono de Contacto:</strong> (+57) 3175103393
            </p>
          </Section>

          <Section title="2. Marco Legal y Ámbito de Aplicación">
            <p>
              La presente política se desarrolla en cumplimiento de la Ley 1581 de 2012 ("Régimen General de Protección de Datos Personales"), el Decreto 1377 de 2013 y demás normas concordantes. Se aplicará a todas las bases de datos que contengan datos personales y que sean objeto de tratamiento por parte de EMCOTIC S.A.S., actuando como Responsable del Tratamiento.
            </p>
          </Section>

          <Section title="3. Principios Aplicables">
            <p>
              EMCOTIC S.A.S. aplicará los siguientes principios en el tratamiento de datos personales:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Principio de Legalidad:</strong> El tratamiento de datos se sujetará a las disposiciones legales vigentes.</li>
              <li><strong>Principio de Finalidad:</strong> El tratamiento obedecerá a una finalidad legítima, informada al Titular.</li>
              <li><strong>Principio de Libertad:</strong> El tratamiento solo se ejercerá con el consentimiento previo, expreso e informado del Titular.</li>
              <li><strong>Principio de Veracidad o Calidad:</strong> La información será veraz, completa, exacta, actualizada, comprobable y comprensible.</li>
              <li><strong>Principio de Transparencia:</strong> Se garantizará el derecho del Titular a obtener información sobre sus datos en cualquier momento.</li>
              <li><strong>Principio de Acceso y Circulación Restringida:</strong> El tratamiento se sujetará a los límites que se derivan de la naturaleza de los datos.</li>
              <li><strong>Principio de Seguridad:</strong> Se adoptarán las medidas técnicas, humanas y administrativas necesarias para dar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado.</li>
              <li><strong>Principio de Confidencialidad:</strong> Todas las personas intervinientes en el tratamiento de datos están obligadas a garantizar la reserva de la información.</li>
            </ul>
          </Section>

          <Section title="4. Finalidades del Tratamiento">
            <p>
              EMCOTIC S.A.S. tratará sus datos personales para las siguientes finalidades, derivadas de nuestro objeto social:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Gestión de Clientes y Proyectos:</strong> Contactar a clientes actuales o potenciales, gestionar cotizaciones, proveer los servicios de consultoría, desarrollo tecnológico, e-learning, machine learning, propiedad intelectual y formulación de proyectos.</li>
              <li><strong>Comunicaciones y Mercadeo:</strong> Enviar información sobre nuestros servicios, eventos (como ruedas de negocios), alianzas estratégicas, publicidad y novedades que consideremos de su interés.</li>
              <li><strong>Gestión Contractual:</strong> Cumplir con las obligaciones contractuales y legales derivadas de la relación comercial o laboral.</li>
              <li><strong>Gestión de Contacto Web:</strong> Dar respuesta a las consultas, peticiones, quejas y reclamos (PQR) recibidas a través de canales digitales como el formulario web, WhatsApp o correo electrónico.</li>
              <li><strong>Procesos de Selección y Gestión de Talento Humano:</strong> Evaluar perfiles de candidatos y gestionar la relación laboral con empleados y contratistas.</li>
              <li><strong>Cumplimiento Legal:</strong> Suministrar información a entidades públicas o administrativas en ejercicio de sus funciones legales.</li>
            </ul>
          </Section>

          <Section title="5. Derechos del Titular (Habeas Data)">
            <p>
              De conformidad con la Ley 1581 de 2012, usted como Titular de los datos tiene derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Conocer, Actualizar y Rectificar</strong> sus datos personales.</li>
              <li><strong>Solicitar Prueba de la Autorización</strong> otorgada para el tratamiento.</li>
              <li><strong>Ser Informado</strong> sobre el uso que se ha dado a sus datos.</li>
              <li><strong>Presentar Quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la ley.</li>
              <li><strong>Revocar la Autorización y/o Solicitar la Supresión</strong> del dato cuando no se respeten los principios, derechos y garantías constitucionales.</li>
              <li><strong>Acceder en Forma Gratuita</strong> a sus datos personales que hayan sido objeto de tratamiento.</li>
            </ul>
          </Section>

          <Section title="6. Procedimiento para el Ejercicio de Derechos">
            <p>
              Para el ejercicio de sus derechos de Habeas Data, el Titular podrá contactar a EMCOTIC S.A.S. a través de los siguientes canales:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Correo Electrónico:</strong> Enviando su solicitud a <strong>jarangoc@emcotic.com</strong>.
              </li>
              <li>
                <strong>Comunicación Escrita:</strong> Radicando su solicitud en la dirección <strong>CRA 55 # 100 OFICINA 613, CENTRO EMPRESARIAL BLUE GARDENS, en Barranquilla</strong>.
              </li>
            </ul>
            <p>
              Su solicitud (PQR) deberá contener, como mínimo, la identificación del Titular, la descripción de los hechos que dan lugar a la solicitud y los datos de contacto.
            </p>
            <p>
              <strong>Tiempos de Respuesta:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Consultas:</strong> Se atenderán en un término máximo de diez (10) días hábiles.</li>
              <li><strong>Reclamos (Rectificación, Supresión, etc.):</strong> Se atenderán en un término máximo de quince (15) días hábiles.</li>
            </ul>
