import logo from './logo.svg';
import './App.css';
import { Card } from './components/card.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="not">This is not the page you are looking for!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>
          Hi, I'm carol!
        </p>
      </div>
      <Card></Card>
    </div>
  );
}

export default App;
