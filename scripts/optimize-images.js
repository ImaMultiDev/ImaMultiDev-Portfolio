/* eslint-disable */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Verificar si sharp está instalado
try {
    require('sharp');
} catch {
    console.log('Instalando sharp para optimización de imágenes...');
    execSync('npm install sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar imagen
async function optimizeImage(inputPath, outputPath, options = {}) {
    const {
        width = 800,
        quality = 80
    } = options;

    try {
        await sharp(inputPath)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality })
            .toFile(outputPath);

        console.log(`✅ Optimizada: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`❌ Error optimizando ${inputPath}:`, error.message);
    }
}

// Función para procesar directorio recursivamente
async function processDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const relativeItemPath = path.join(relativePath, item);

        if (fs.statSync(fullPath).isDirectory()) {
            // Crear subdirectorio en output
            const outputSubDir = path.join(outputDir, relativeItemPath);
            if (!fs.existsSync(outputSubDir)) {
                fs.mkdirSync(outputSubDir, { recursive: true });
            }
            await processDirectory(fullPath, relativeItemPath);
        } else if (/\.(png|jpg|jpeg|gif)$/i.test(item)) {
            // Optimizar imagen
            const outputPath = path.join(outputDir, relativeItemPath.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp'));
            await optimizeImage(fullPath, outputPath);
        }
    }
}

// Función principal
async function main() {
    console.log('🚀 Iniciando optimización de imágenes...');

    if (!fs.existsSync(imagesDir)) {
        console.error('❌ No se encontró el directorio de imágenes');
        return;
    }

    await processDirectory(imagesDir);

    console.log('✅ Optimización completada!');
    console.log(`📁 Imágenes optimizadas guardadas en: ${outputDir}`);
    console.log('💡 Considera reemplazar las imágenes originales con las optimizadas');
}

main().catch(console.error); 