// /lib/firebaseAdmin.js

import admin from 'firebase-admin';

// Decodificamos la variable de entorno Base64
const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

if (!serviceAccountBase64) {
  throw new Error('La variable de entorno FIREBASE_SERVICE_ACCOUNT_BASE64 no está definida.');
}

const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf8'));

// Evitamos reinicializaciones en Vercel (que puede reusar instancias)
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // Opcional: si usarás la base de datos Realtime
      // databaseURL: "https://TU_PROYECTO_ID.firebaseio.com" 
    });
  } catch (error) {
    console.error('Error al inicializar Firebase Admin SDK:', error);
  }
}

// Exportamos la instancia de admin y, más útil, el acceso a Firestore
export const db = admin.firestore();
export default admin;