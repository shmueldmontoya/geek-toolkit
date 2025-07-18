import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  // Calculamos las estadísticas
  const characterCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const lineCount = text === '' ? 0 : text.split('\n').length;
  const byteCount = new Blob([text]).size;

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-geek-blue mb-2">📐 Contador de Caracteres</h2>
        <p className="text-gray-600">Analiza tu texto y obtén estadísticas detalladas</p>
      </div>

      <div className="grid grid-cols-1 lg-grid-cols-2 gap-6">
        {/* Área de entrada */}
        <div>
          <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
            Escribe tu texto aquí:
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe o pega tu texto aquí..."
            className="input-field h-64 resize-none"
          />
        </div>

        {/* Estadísticas */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📊 Estadísticas</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Caracteres:</span>
                <span className="text-2xl font-bold text-geek-blue">{characterCount}</span>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Palabras:</span>
                <span className="text-2xl font-bold text-geek-green">{wordCount}</span>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Líneas:</span>
                <span className="text-2xl font-bold text-purple-600">{lineCount}</span>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Bytes:</span>
                <span className="text-2xl font-bold text-orange-600">{byteCount}</span>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">💡 Información útil:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Un tweet tiene máximo 280 caracteres</li>
              <li>• Un SMS tiene máximo 160 caracteres</li>
              <li>• Una palabra promedio tiene 5 caracteres</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter; 