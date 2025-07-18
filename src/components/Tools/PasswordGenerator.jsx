import React, { useState } from 'react';

const charsetOptions = [
  { id: 'lower', label: 'Minúsculas', chars: 'abcdefghijklmnopqrstuvwxyz' },
  { id: 'upper', label: 'Mayúsculas', chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
  { id: 'numbers', label: 'Números', chars: '0123456789' },
  { id: 'symbols', label: 'Símbolos', chars: '!@#$%^&*()-_=+[]{};:,.<>/?' },
];

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [selected, setSelected] = useState({ lower: true, upper: true, numbers: true, symbols: false });
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCheckbox = (id) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const generatePassword = () => {
    let chars = '';
    charsetOptions.forEach(opt => { if (selected[opt.id]) chars += opt.chars; });
    if (!chars) return setPassword('');
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
    setCopied(false);
  };

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-geek-blue mb-2">🔣 Generador de Contraseñas</h2>
        <p className="text-gray-600">Crea contraseñas seguras y personalizadas al instante</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Opciones */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Longitud:</label>
          <input
            type="number"
            min={4}
            max={32}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="input-field mb-4"
            style={{ maxWidth: '6rem' }}
          />
          <div className="mb-4">
            {charsetOptions.map(opt => (
              <label key={opt.id} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  checked={selected[opt.id]}
                  onChange={() => handleCheckbox(opt.id)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
          <button className="btn-primary" onClick={generatePassword} type="button">
            Generar contraseña
          </button>
        </div>
        {/* Resultado */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🔐 Contraseña generada</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[3rem] text-gray-800 break-all flex items-center justify-between" style={{minHeight: '3rem'}}>
            <span>{password || <span className="text-gray-400">Aquí aparecerá tu contraseña...</span>}</span>
            {password && (
              <button className="btn-secondary ml-4" onClick={handleCopy} type="button">
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
            )}
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">💡 Consejos de seguridad:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Usa al menos 12 caracteres para mayor seguridad.</li>
              <li>• Combina letras, números y símbolos.</li>
              <li>• No reutilices contraseñas importantes.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator; 