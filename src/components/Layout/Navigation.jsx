import React from 'react';

const Navigation = ({ activeTool, onToolChange }) => {
  const tools = [
    { id: 'counter', name: 'Contador', icon: '📐' },
    { id: 'reverser', name: 'Inversor', icon: '🔁' },
    { id: 'transformer', name: 'Transformador', icon: '🔤' },
    { id: 'password', name: 'Generador', icon: '🔣' },
    { id: 'encoder', name: 'Codificador', icon: '🧠' }
  ];

  return (
    <nav>
      <div className="container">
        <div className="nav-buttons">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => onToolChange(tool.id)}
              className={`nav-button ${activeTool === tool.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{tool.icon}</span>
              {tool.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 