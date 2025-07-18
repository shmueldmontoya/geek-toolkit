import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="logo-container">
              <span className="logo">⚡</span>
            </div>
            <div>
              <h1 className="header-title">Geek Toolkit</h1>
              <p className="header-subtitle">Herramientas útiles para geeks</p>
            </div>
          </div>
          <div className="hidden md-block">
            <span className="version">v1.0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 