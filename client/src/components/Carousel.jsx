import React, { useState, useEffect } from 'react';

// Importa las imágenes desde src/assets/images
import img1 from '../assets/imagenUno.jpg';
import img2 from '../assets/imagenDos.jpg';
import img3 from '../assets/imagenTres.jpg';

const images = [img1, img2, img3];

export default function Carousel() {
  const [idx, setIdx] = useState(0);

  // Cambio automático cada 5 s
  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-8 relative w-full h-[60vh] overflow-hidden">
      {/* Imagen actual */}
      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />

      {/* Overlay de texto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug max-w-2xl mb-4">
          Mercado Libre Agudad Park | LGD Arquitectos
        </h2>
        <p className="max-w-xl leading-relaxed text-sm md:text-base mb-6">
          El principal desafío del proyecto fue la reconversión de una planta existente…
        </p>
        <button className="px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100">
          Ver proyecto →
        </button>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={() => setIdx((idx - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white text-2xl"
      >
        ‹
      </button>
      <button
        onClick={() => setIdx((idx + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white text-2xl"
      >
        ›
      </button>
    </section>
  );
}
