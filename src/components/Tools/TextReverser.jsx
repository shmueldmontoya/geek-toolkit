import React, { useState } from 'react';

const TextReverser = () => {
  const [input, setInput] = useState('');

  // Función para invertir el texto
  const reverseText = (str) => str.split('').reverse().join('');

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-geek-blue mb-2">🔁 Inversor de Texto</h2>
        <p className="text-gray-600">Escribe un texto y obtén su versión al revés</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entrada de texto */}
        <div>
          <label htmlFor="reverse-input" className="block text-sm font-medium text-gray-700 mb-2">
            Escribe tu texto aquí:
          </label>
          <textarea
            id="reverse-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe o pega tu texto..."
            className="input-field h-64 resize-none"
          />
        </div>
        {/* Resultado invertido */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🔄 Resultado</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[4rem] text-gray-800 break-words" style={{minHeight: '4rem'}}>
            {input.length > 0 ? reverseText(input) : <span className="text-gray-400">El texto invertido aparecerá aquí...</span>}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">💡 Tip:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Puedes copiar el resultado y usarlo donde quieras.</li>
              <li>• ¡Funciona con emojis, símbolos y cualquier texto!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextReverser; 