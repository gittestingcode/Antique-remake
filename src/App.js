import React from "react";
import {Link, BrowserRouter as Router } from "react-router-dom";
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
        </header>
        <body className="App-body">
          <div className="App-bodypage">
            <img src={collage} className="App-collage" alt="collage" />
            <Router>
            <Link to="/AppMantels"><button class="Mantels-link">MANTELS 
            </button></Link>
            <Link to="/AppBars"><button class="Bars-link">BARS
            </button></Link>
            <Link to="/AppDoors"><button class="Doors-link">DOORS
            </button></Link>
            <Link to="/AppMisc"><button class="Misc-link">MISC
            </button></Link>
            </Router>
            <div className="App-bottom">
              <img src={bottom} className="App-bottom" alt="bottom" />
              <button class="Top"></button>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
