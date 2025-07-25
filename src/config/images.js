// Configuración de imágenes optimizadas
export const imageConfig = {
    // Rutas de imágenes optimizadas (WebP)
    optimized: {
        // Deployments
        cvitapilot: '/images/optimized/webs/cvitapilotcharacter.webp',
        svgstorm: '/images/optimized/webs/svgstorm.webp',
        spinandsell: '/images/optimized/webs/spinandselllogonobg.webp',
        gsapmotion: '/images/optimized/webs/gsap-multidev.webp',
        multidevstation: '/images/optimized/webs/multidevstation.webp',
        jimny: '/images/optimized/webs/jimny-lp.webp',
        realoia: '/images/optimized/webs/realoia.webp',
        realoiaapi: '/images/optimized/webs/realoiaapigallery.webp',
        galleryapi: '/images/optimized/webs/galleryapirest.webp',

        // Books
        odoo: '/images/optimized/books/odoo_development.webp',
        swiftui: '/images/optimized/books/swiftUI_development.webp',
        android: '/images/optimized/books/android_development.webp',
        jimnyai: '/images/optimized/books/jimnyai_project.webp',
    },

    // Rutas de imágenes originales (fallback)
    original: {
        // Deployments
        cvitapilot: '/images/webs/cvitapilotcharacter.png',
        svgstorm: '/images/webs/svgstorm.png',
        spinandsell: '/images/webs/spinandselllogonobg.png',
        gsapmotion: '/images/webs/gsap-multidev.png',
        multidevstation: '/images/webs/multidevstation.png',
        jimny: '/images/webs/jimny-lp.png',
        realoia: '/images/webs/realoia.png',
        realoiaapi: '/images/webs/realoiaapigallery.png',
        galleryapi: '/images/webs/galleryapirest.png',

        // Books
        odoo: '/images/books/odoo_development.jpg',
        swiftui: '/images/books/swiftUI_development.png',
        android: '/images/books/android_development.png',
        jimnyai: '/images/books/jimnyai_project.png',
    }
};

// Función para obtener la imagen optimizada con fallback
export const getOptimizedImage = (key) => {
    const optimized = imageConfig.optimized[key];
    const original = imageConfig.original[key];

    return {
        src: optimized || original,
        fallback: original,
        key
    };
};

// Función para verificar si el navegador soporta WebP
export const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}; 