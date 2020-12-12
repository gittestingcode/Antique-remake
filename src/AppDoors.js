import React from "react";
import {Link, BrowserRouter as Router } from "react-router-dom";
import exchange from './Img/AAExchangelogo.jpg';
import collage from './Img/collageBIG2.jpg';
import bottom from './Img/Bottombar.svg';
import doors1 from './Img/doors1.jpg';
import './App.css';

function AppDoors() {
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
            <button class="Doors-link">DOORS
            </button>
            <Link to="/AppMisc"><button class="Misc-link">MISC
            </button></Link>
            <div><img src={doors1} className="Stock" alt="doors1" /></div>
            <div className="ContentTitle">
            <p>
            Doors</p>
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

export default AppDoors;
