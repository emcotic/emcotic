// /pages/api/contact.js

// Importamos nuestra base de datos inicializada de forma segura
import { db } from '../../lib/firebaseAdmin';

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { nombre, email, mensaje, empresa } = req.body;

    // Validación simple (puedes hacerla más robusta)
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ message: 'Faltan campos requeridos.' });
    }

    // Creamos un nuevo documento en la colección 'contactos'
    const contactoRef = await db.collection('contactos').add({
      nombre,
      email,
      empresa: empresa || '', // Opcional
      mensaje,
      fecha: new Date().toISOString(),
      fuente: 'LandingPage_CAF_Forum', // ¡Importante para seguimiento!
    });

    console.log('Contacto guardado con ID:', contactoRef.id);
    
    // Éxito
    return res.status(200).json({ message: 'Mensaje enviado correctamente.' });

  } catch (error) {
    console.error('Error en /api/contact:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
}