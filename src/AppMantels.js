import React from "react";
import {Link, BrowserRouter as Router } from "react-router-dom";
import exchange from './AAExchangelogo.jpg';
import collage from './collageBIG2.jpg';
import bottom from './Bottombar.svg';
import mantels1 from './mantels1.jpg';
import './App.css';

function AppMantels() {
  return (
    <div className="App">
      <div className="App-wall">
        <header className="App-header">
          <a name="top"></a>
          <div className="App-exchange">
          <img src={exchange} className="App-logo" alt="exchange" />
          <Link to="/"><button class="Exchange-btn"></button></Link>
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
            <button class="Mantels-link">MANTELS 
            </button>
            <Link to="/AppBars"><button class="Bars-link">BARS
            </button></Link>
            <Link to="/AppDoors"><button class="Doors-link">DOORS
            </button></Link>
            <Link to="/AppMisc"><button class="Misc-link">MISC
            </button></Link>
            <div><img src={mantels1} className="Stock" alt="mantels1" /></div>
            <div className="ContentTitle">
            <p>
            Mantels</p>
            </div>
            <div className="App-bottom">
              <img src={bottom} className="App-bottom" alt="bottom" />
              <a href="#top"><button class="Top"></button></a>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default AppMantels;