import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import image1 from "./components/Images/me_at_ga_portfolio.png";

function App() {
  return (
    <div className="App">
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <h1 class="title" id="title">Shenae Simmons</h1>
  </div>
</nav>
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
      <center>
      <ul class="menu-list">
          <li id="links"><Link to="/resume">Resume</Link></li>
          <li id="links"><Link to="/portfolio">Portfolio</Link></li>
          <li id="links"><Link to="/about">About</Link></li>
        </ul>
        </center>
      </div>
    </div>
    <div class="tile is-child">
    <center>
    <img src={image1} id="img-profile" alt="me at desk at General Assembly" />
    </center>
    </div>
  </div>
    </div>
    <nav class="breadcrumb is-centered has-bullet-separator" aria-label="breadcrumbs">
  <ul>
    <li id="links"><a href="http://www.github.com/shenae" id="title">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/shenae-simmons/" id="title">LinkedIN</a></li>
    <li><a href="mailto:shhnae@gmail.com" id="title">Contact</a></li>
  </ul>
</nav>
    </div>
  );
}

export default App;
