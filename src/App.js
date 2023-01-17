import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('');
  return (
    <div
      style={{
        // eslint-disable-next-line @upleveled/upleveled/no-unnecessary-interpolations
        backgroundColor: `${color}`,
        border: '2px solid #14213d',
        letterSpacing: '2px',
        borderRadius: '15px',
        margin: '20px',
        padding: '20px',
        fontWeight: '500',
        transition: 'all 1s ease',
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
