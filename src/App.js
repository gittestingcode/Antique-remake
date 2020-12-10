import React from "react";
import {Link, BrowserRouter as Router } from "react-router-dom";
import exchange from './AAExchangelogo.jpg';
import collage from './collageBIG2.jpg';
import bottom from './Bottombar.svg';
import p1content1 from './p1content1.jpg';
import p1content2 from './p1content2.jpg';
import p1content3 from './p1content3.jpg';
import './App.css';

function App() {
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
            <Link to="/AppMisc"><button class="Misc-link">MISC
            </button></Link>
            <div><img src={p1content1} className="p1content1" alt="p1content1" /></div>
            <div><img src={p1content2} className="p1content2" alt="p1content2" /></div>
            <div><img src={p1content3} className="p1content3" alt="p1content3" /></div>
            <div className="ContentTitle">
            <p>
            Recent Additions</p>
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

export default App;
