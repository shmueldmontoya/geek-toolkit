import React, { useState } from 'react';

function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode(
      c.charCodeAt(0) + (c.toLowerCase() < 'n' ? 13 : -13)
    );
  });
}

function toBase64(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return '';
  }
}

function fromBase64(str) {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    return '';
  }
}

const modes = [
  { id: 'rot13', label: 'ROT13', encode: rot13, decode: rot13 },
  { id: 'base64', label: 'Base64', encode: toBase64, decode: fromBase64 },
];

const TextEncoder = () => {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('rot13');
  const [action, setAction] = useState('encode');

  const current = modes.find(m => m.id === mode);
  const result = input ? (action === 'encode' ? current.encode(input) : current.decode(input)) : '';

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-geek-blue mb-2">🧠 Codificador</h2>
        <p className="text-gray-600">Codifica o decodifica texto usando ROT13 o Base64</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Entrada y opciones */}
        <div>
          <label htmlFor="encoder-input" className="block text-sm font-medium text-gray-700 mb-2">
            Escribe tu texto aquí:
          </label>
          <textarea
            id="encoder-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe o pega tu texto..."
            className="input-field h-64 resize-none mb-4"
          />
          <div className="space-x-2 mb-2">
            {modes.map(m => (
              <button
                key={m.id}
                className={`btn-secondary ${mode === m.id ? 'btn-primary' : ''}`}
                onClick={() => setMode(m.id)}
                type="button"
              >
                {m.label}
              </button>
            ))}
          </div>
          <div className="space-x-2">
            <button
              className={`btn-secondary ${action === 'encode' ? 'btn-primary' : ''}`}
              onClick={() => setAction('encode')}
              type="button"
            >
              Codificar
            </button>
            <button
              className={`btn-secondary ${action === 'decode' ? 'btn-primary' : ''}`}
              onClick={() => setAction('decode')}
              type="button"
            >
              Decodificar
            </button>
          </div>
        </div>
        {/* Resultado */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">📝 Resultado</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[4rem] text-gray-800 break-words" style={{minHeight: '4rem'}}>
            {result || <span className="text-gray-400">El resultado aparecerá aquí...</span>}
          </div>
          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">💡 Tip:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• ROT13 es reversible, útil para ocultar mensajes simples.</li>
              <li>• Base64 es útil para codificar datos en texto plano.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEncoder; 