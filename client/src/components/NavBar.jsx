import React from 'react';

export default function NavBar() {
    const items = ['Productos', 'Proveedores', 'Proyectos', 'Artículos', 'Geolocalización'];
    return (
        <nav className="mt-16 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex space-x-8">
              {['Productos', 'Proveedores', 'Proyectos', 'Artículos', 'Geolocalización'].map((item) => (
                <button key={item} className="hover:text-blue-600">
                    {item}
                </button> 
                ))}
            </div>
        </nav>
    );
}
