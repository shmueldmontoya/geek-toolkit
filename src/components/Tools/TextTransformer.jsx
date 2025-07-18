import React, { useState } from 'react';

// Funciones de transformación
const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();
const toFancy = (str) => str.replace(/[A-Za-z]/g, c => String.fromCodePoint(c <= 'Z' ? 0x1D4D0 + (c.charCodeAt(0) - 65) : 0x1D4EA + (c.charCodeAt(0) - 97)));
const toZalgo = (str) => str.split('').map(c => c + '\u0301\u0300\u0361').join('');

const transformations = [
  { id: 'upper', label: 'MAYÚSCULAS', fn: toUpper },
  { id: 'lower', label: 'minúsculas', fn: toLower },
  { id: 'fancy', label: '𝓕𝓪𝓷𝓬𝔂', fn: toFancy },
  { id: 'zalgo', label: 'Zalgo', fn: toZalgo },
];

const TextTransformer = () => {
  const [input, setInput] = useState('');
  const [type, setType] = useState('upper');

  const transform = transformations.find(t => t.id === type)?.fn || ((x) => x);
  const result = input ? transform(input) : '';

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-geek-blue mb-2">🔤 Transformador de Texto</h2>
        <p className="text-gray-600">Convierte tu texto a diferentes estilos divertidos</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entrada de texto y selección */}
        <div>
          <label htmlFor="transform-input" className="block text-sm font-medium text-gray-700 mb-2">
            Escribe tu texto aquí:
          </label>
          <textarea
            id="transform-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe o pega tu texto..."
            className="input-field h-64 resize-none mb-4"
          />
          <div className="space-x-2">
            {transformations.map(t => (
              <button
                key={t.id}
                className={`btn-secondary ${type === t.id ? 'btn-primary' : ''}`}
                onClick={() => setType(t.id)}
                type="button"
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        {/* Resultado */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">✨ Resultado</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[4rem] text-gray-800 break-words" style={{minHeight: '4rem'}}>
            {result || <span className="text-gray-400">El texto transformado aparecerá aquí...</span>}
          </div>
          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">💡 Tip:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Prueba los diferentes estilos y copia el resultado.</li>
              <li>• El modo Zalgo es solo para valientes 😈</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTransformer; 