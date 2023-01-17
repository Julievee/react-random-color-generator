import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// Declaring a state variable called "color", with the default value randomColor
export default function App() {
  const [color, setColor] = useState(randomColor());

  // Website layout
  return (
    <div
      style={{
        backgroundColor: color,
        flex: 1,
        textAlign: 'center',
        padding: '200px',
        justifyContent: 'center',
        height: '60vh',
      }}
    >
      {/* Creating and styling button */}

      <h1>Random Color Generator</h1>
      <button
        onClick={() => {
          setColor(randomColor());
        }}
        style={{
          backgroundColor: color,
          width: 300,
          height: 80,
          border: '2px solid black',
          borderRadius: '18px',
        }}
      >
        <h2>Generated Color: {color}</h2>
      </button>
      <div />
    </div>
  );
}
