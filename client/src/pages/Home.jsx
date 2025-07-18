import React, { useState, useEffect } from 'react';

// Importa las imágenes desde src/assets/images
import img1 from '../assets/images/imagenUno.jpg';
import img2 from '../assets/images/imagenDos.jpg';
import img3 from '../assets/images/imagenTres.jpg';

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
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Imagen actual */}
      <img
        src={images[idx]}
        alt={`Slide ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      {/* Flechas */}
      <button
        onClick={() => setIdx((idx - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-2xl bg-black/30 p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={() => setIdx((idx + 1) % images.length)}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-2xl bg-black/30 p-2 rounded-full"
      >
        ›
      </button>
      {/* Botón “Ver proyecto” */}
      <div className="absolute bottom-8 left-8">
        <button className="px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100">
          Ver proyecto →
        </button>
      </div>
      {/* Texto sobre la imagen */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center text-white drop-shadow-lg max-w-xl">
        <h2 className="text-4xl font-bold">Mercado Libre Agudad Park | LGD Arquitectos</h2>
        <p className="mt-4">
          El principal desafío del proyecto fue la reconversión de una planta existente…
        </p>
      </div>
    </div>
  );
}
