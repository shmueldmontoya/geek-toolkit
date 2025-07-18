import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-title">
            <span className="text-geek-green">⚡</span>
            <span className="font-medium">Creado por Samuel Delgado</span>
            <span className="text-geek-green">⚡</span>
          </div>
          <p className="footer-subtitle">
            Geek Toolkit v1.0 - Herramientas útiles para desarrolladores
          </p>
          <div className="footer-tech">
            <span>React</span>
            <span>•</span>
            <span>Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 