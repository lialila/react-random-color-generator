import './App.css';
import Button from './Button.js';

export default function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <p>Generated Color:background color {props.color}</p>
      </header>
    </div>
  );
}
