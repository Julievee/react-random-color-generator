import randomColor from 'randomcolor';
import { useState } from 'react';

// Declaring a state variable called "color", with the default value randomColor
export default function App() {
  const [color, setColor] = useState(randomColor('#00000000'));

  // Website layout
  return (
    <div
      style={{
        backgroundColor: color,
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {/* Creating and styling button */}
      <h1>Random Color Generator</h1>
      <div
        style={{
          fontSize: '18px',
          padding: '14px',
          fontWeight: 'bold',
          fontColor: 'black',
        }}
      >
        Generated Color: {color}
      </div>
      <button
        style={{
          backgroundColor: color,
          width: 100,
          height: 80,
          border: '2px solid black',
          borderRadius: '18px',
        }}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
    </div>
  );
}
