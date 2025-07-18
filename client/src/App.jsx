import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <NavBar />
      <Carousel />
      {/* Aquí vendría el resto de tu contenido */}
    </div>
  );
}
