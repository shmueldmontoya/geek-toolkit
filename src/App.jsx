import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Footer from './components/Layout/Footer';
import CharacterCounter from './components/Tools/CharacterCounter';
import TextReverser from './components/Tools/TextReverser';
import TextTransformer from './components/Tools/TextTransformer';
import PasswordGenerator from './components/Tools/PasswordGenerator';
import TextEncoder from './components/Tools/TextEncoder';

function App() {
  const [activeTool, setActiveTool] = useState('counter');

  const renderActiveTool = () => {
    switch (activeTool) {
      case 'counter':
        return <CharacterCounter />;
      case 'reverser':
        return <TextReverser />;
      case 'transformer':
        return <TextTransformer />;
      case 'password':
        return <PasswordGenerator />;
      case 'encoder':
        return <TextEncoder />;
      default:
        return <CharacterCounter />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation activeTool={activeTool} onToolChange={setActiveTool} />
      
      <main className="flex-1 py-8">
        <div className="container">
          {renderActiveTool()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
