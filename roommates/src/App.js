import logo from './logo.svg';
import roomImage from './img/sven-brandsma-GmRiN7tVW1w-unsplash.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={roomImage}  alt="image of decorated room" style={{width: "100%", height: "auto"}}/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!!!!!!!!!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
