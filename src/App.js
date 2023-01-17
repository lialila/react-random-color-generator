// import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// pressing the generate button should generate a new color: choose the library to generate random color
// div should take the generated color as background color and print out the hex name of the color.
export default function App() {
  const [color, setColor] = useState('');
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        border: '2px solid #14213d',
        letterSpacing: '2px',
        borderRadius: '15px',
        margin: '20px',
        padding: '20px',
        fontWeight: '500',
      }}
    >
      <input
        style={{
          borderRadius: '7px',
        }}
        value={color}
        onChange={(event) => {
          console.log('event.currentTarget.value', event.currentTarget.value);
        }}
      />
      <br />
      <button
        style={{
          backgroundColor: '#14213d',
          color: 'white',
          borderRadius: '7px',
          letterSpacing: '2px',
        }}
        onClick={() => setColor(randomColor())}
      >
        Generate
      </button>

      <p>Generated Color: background-color {color}</p>
    </div>
  );
}
