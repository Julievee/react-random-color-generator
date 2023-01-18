import { useState } from 'react';

// Declaring a state variable called "color", with the default value randomColor
export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const randombackgroundColor = () => {
    const hex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(hex);
  };

  // Website layout
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        height: '100vh',
        transition: 'background-color 0.4s ease-out',
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
        Generated Color: {backgroundColor}
      </div>
      <button
        style={{
          backgroundColor: backgroundColor,
          width: 100,
          height: 60,
          border: '2px solid black',
          borderRadius: '18px',
        }}
        onClick={randombackgroundColor}
      >
        Generate
      </button>
    </div>
  );
}
