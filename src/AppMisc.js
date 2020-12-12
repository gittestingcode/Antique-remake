import React from "react";
import {Link, BrowserRouter as Router } from "react-router-dom";
import exchange from './Img/AAExchangelogo.jpg';
import collage from './Img/collageBIG2.jpg';
import bottom from './Img/Bottombar.svg';
import misc1 from './Img/misc1.jpg';
import './App.css';

function AppMisc() {
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
            <Link to="/AppMantels"><button class="Mantels-link">MANTELS 
            </button></Link>
            <Link to="/AppBars"><button class="Bars-link">BARS
            </button></Link>
            <Link to="/AppDoors"><button class="Doors-link">DOORS
            </button></Link>
            <button class="Misc-link">MISC
            </button>
            <div><img src={misc1} className="Stock" alt="misc1" /></div>
            <div className="ContentTitle">
            <p>
            Miscellaneous</p>
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

export default AppMisc;
