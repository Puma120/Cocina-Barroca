import fs from 'fs';
import https from 'https';

// --- CONFIGURACIÓN ---
// Reemplaza esta variable con el link exacto de tu deploy en Vercel
// Ejemplo: 'https://cocina-barroca.vercel.app'
const VERCEL_URL = 'https://cocina-barroca-utp.vercel.app'; 

// Ruta donde se guardará la imagen del QR
const OUTPUT_PATH = './public/qr-deploy.png';
// ---------------------

console.log(`Generando código QR para: ${VERCEL_URL}...`);

// Usamos una API pública para generar el QR. 
// Al ser un QR que contiene directamente el texto de la URL (QR Estático),
// NUNCA caducará y no dependerá de ningún servicio de redirección de pago.
const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(VERCEL_URL)}&margin=10`;

https.get(qrApiUrl, (response) => {
    if (response.statusCode === 200) {
        const file = fs.createWriteStream(OUTPUT_PATH);
        response.pipe(file);
        
        file.on('finish', () => {
            file.close();
            console.log(`✅ ¡Código QR generado con éxito!`);
            console.log(`📂 Guardado en: ${OUTPUT_PATH}`);
            console.log('💡 Recuerda: Este QR es estático. No caducará nunca mientras tu link de Vercel siga funcionando.');
        });
    } else {
        console.error(`❌ Error al generar el QR. Código de estado de la API: ${response.statusCode}`);
    }
}).on('error', (err) => {
    console.error('❌ Error de conexión:', err.message);
});
