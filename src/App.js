import logo from './logo.svg';
import collage from './collageBIG2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test line
        </p>
        <a
          className="Mantels-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test link
        </a>
      </header>
      <body className="App-body">
      <img src={collage} className="App-collage" alt="collage" />
      </body>
    </div>
  );
}

export default App;
