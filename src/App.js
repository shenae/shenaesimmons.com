import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import image1 from "./Images/me_at_ga_portfolio.png";

function App() {
  return (
    <div className="App">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <h1 class="title" id="title">Shenae Simmons</h1>
      {/* <h2 id="title">front end developer</h2> */}
  </div>
</nav>
    {/* <section class="hero is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Shenae Simmons
      </h1>
      <h2 class="subtitle">
      front end developer
      </h2>
    </div>
  </div>
</section> */}
    <div class="tile is-ancestor">
    <div class="tile is-parent is-8">
    <div class="tile is-child box">
      <Switch>
              <Route path="/resume" render={() => <Resume /> }/>
              <Route path="/portfolio" render={() => <Portfolio /> }/>
              <Route path="/about" render={() => <About/> }/>
              <Route path="/resume" component={ Resume }/>
              <Route path="/" render={() => <About/> }/>
              {/* <Route path="/" component={ About }/> */}
      </Switch>
    </div>
  </div>
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <div class="container">
      <ul class="menu-list">
          <li id="links"><Link to="/resume">Resume</Link></li>
          <li id="links"><Link to="/portfolio">Portfolio</Link></li>
          <li id="links"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
    <div class="tile is-child">
    <img src={image1} id="img-profile" alt="me at desk at General Assembly" />
    </div>
  </div>
    </div>
    </div>

    // color palette purple: #753ECE, dark grey: #4B4453 light grey: #B0A8B9, light purple: #BAA1D5
  );
}

export default App;
