import React, { Component } from "react";
import Header from "./components/Header";
import Project from "./components/Project";

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <Header mainImage="media/ny.jpg" headshot="media/headshot.png" />
        <Project
          name="Service Now"
          link="service-now"
          image="media/service_now.jpg"
        />
        <Project
          name="Oscar Watch Tracker"
          link="oscar watch"
          image="media/oscar-watch.jpg"
        />
        <Project
          name="Cole Haan Chasing Ambition"
          link="cole haan"
          image="media/cole-haan.png"
        />
        <Project
          name="Movie Finder (React/Flux)"
          link="movie-finder"
          image="media/movie-finder.jpg"
        />
        <Project
          name="Weather Forecaster (React/Redux)"
          link="weather"
          image="media/weather.jpg"
        />
        <Project
          name="Ryantube (React)"
          link="ryantube"
          image="media/ryantube.jpg"
        />
        <Project
          name="Todo List App (React)"
          link="todo"
          image="media/todo.png"
        />
        <Project
          name="Neighborhood Map"
          link="neighborhood"
          image="media/maps.jpg"
        />
        <Project
          name="AJAX Location API Information"
          link="ajax"
          image="media/nyt.jpg"
        />
        <Project
          name="Frogger Game"
          link="frogger"
          image="media/rainforest.jpg"
        />
        <Project
          name="Design Mockup Project"
          link="design"
          image="media/design.jpg"
        />
        <Project name="My Resume" link="resume" image="media/resume.jpg" />
        <Project name="Contact Me!" link="contact" image="media/contact.jpg" />
      </div>
    );
  }
}

export default App;
