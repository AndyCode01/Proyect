// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      {/* Esto va en TODAS las páginas */}
      <div className="pt-16">
        <Header />
        <NavBar />

        {/* Aquí React Router inyecta cada página (Home, About, etc.) */}
        <main className="mt-6 container mx-auto px-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}
