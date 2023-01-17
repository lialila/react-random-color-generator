// import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

import { }// emotion from lecture 17.02

// pressing the generate button should generate a new color: choose the library to generate random color
// div should take the generated color as background color and print out the hex name of the color.
function App(props) {
  const [color, setColor] = useState('');
  return (
    <div>
      <button style={{ border: '5px solid purple', borderRadius: '10%' }}
      onClick={() => setColor(randomColor())}>Generate</button
      <p>Generated Color:background color {props.color}</p>
   </div>
  );
}
