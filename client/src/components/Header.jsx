import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">JUST CREA</div>
        {/* Botones de sesión */}
        <div className="space-x-2">
          <button className="px-4 py-1 border rounded hover:bg-gray-100">Iniciar sesión</button>
          <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Registrarse</button>
        </div>
      </div>
    </header>
  );
}
