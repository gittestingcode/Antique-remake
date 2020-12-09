import exchange from './AAExchangelogo.jpg';
import collage from './collageBIG2.jpg';
import bottom from './Bottombar.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-wall">
        <header className="App-header">
          <div className="App-exchange">
          <img src={exchange} className="App-logo" alt="exchange" />
          </div>
          <div className="Street">
          <p>
            721 North Second Street</p>
          <p>
            Philadelphia, PA 19123</p>
            </div>
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
          <div className="App-bodypage">
            <img src={collage} className="App-collage" alt="collage" />
            <div className="App-bottom">
              <img src={bottom} className="App-bottom" alt="bottom" />
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
