import React, { Component } from 'react';
import image2 from "../Images/circumvelo_screenshot.png";
import image3 from "../Images/made2fit-screenshot.png";
import image4 from "../Images/reciplease_screenshot.png";

class Portfolio extends Component {
  render() {
    return (

<div>
  <article class="media">
  <figure class="media-left">
    <p class="image is-128x128">
    <img src={image2} alt="screenshot of bike sharing app with map" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
      <a href="https://circumvelo.herokuapp.com">
        <strong id="title">CircumVelo</strong>
         </a><small> React, RestAPI, Javascript</small> 
        <br />
        <p id="description">
        The selection from the dropdown list re­renders the location on the map by integrating the longitude and latitude coordinates from both the MapBoxAPI and CityBikes API.</p>
      </p>
      </div>
      <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
        <a href="https://circumvelo.herokuapp.com">
          <span class="icon is-small"><i class="fas fa-link" id="title"></i></span></a>
        </a>
        <a class="level-item">
        <a href="https://github.com/shenae/circumvelo">
          <span class="icon is-small"><i class="fab fa-github" id="title"></i></span></a>
        </a>
      </div>
    </nav>
</div>
</article>
<article class="media">
  <figure class="media-left">
    <p class="image is-128x128">
    <img src={image3} alt="screenshot of ux collaboration clothing site" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
      <a href="https://epic-jones-4619fa.netlify.com/">
        <strong id="title">Made2fit</strong>
         </a><small> React, HTML, CSS, Javascript</small> 
        <br />
        <p id="description">
        I was the project manager for this group collaboration website with 4 UX/DI students and 3 fellow SEI students. In addition to using InDesign and Zeppelin for wireframes and mockups, we contributed to the overall concept and design.</p>
      </p>
      </div>
      <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
        <a href="https://epic-jones-4619fa.netlify.com/">
          <span class="icon is-small"><i class="fas fa-link" id="title"></i></span></a>
        </a>
        <a class="level-item">
          <a href="https://github.com/shenae/made2fit"><span class="icon is-small"><i class="fab fa-github" id="title"></i></span></a>
        </a>
      </div>
    </nav>
</div>
</article>
<article class="media">
  <figure class="media-left">
    <p class="image is-128x128">
    <img src={image4} alt="screenshot of bike sharing app with map" />
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
      <a href="http://reciplease.surge.sh/">
        <strong id="title">ReciPlease</strong>
         </a><small> Express, PostgreSQL, OAuth, React</small> 
        <br />
        <p id="description">
        As the project manager for this full stack website, I supervised the version control for the backend and front end components. I composed the ux design for the frontend components.</p>
      </p>
      </div>
      <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
        <a href="http://reciplease.surge.sh/">
          <span class="icon is-small"><i class="fas fa-link" id="title"></i></span></a>
        </a>
        <a class="level-item">
        <a href="https://github.com/shenae/reciplease">
          <span class="icon is-small"><i class="fab fa-github" id="title"></i></span></a>
        </a>
      </div>
    </nav>
</div>
</article>


</div>


        );
  }
}

export default Portfolio;