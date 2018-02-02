import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderRow from './components/header_row'
import ProjectRow from './components/project_row'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderRow mainImage="media/ny.jpg" headshot="media/headshot.png" />
        <ProjectRow name="Weather Forecaster (React)" link="weather" image="media/weather.jpg"/>
        <ProjectRow name="Ryantube! (YT-ish Clone Using React)" link="ryantube" image="media/ryantube.jpg"/>
        <ProjectRow name="Todo List App (React)" link="todo" image="media/todo.png"/>
        <ProjectRow name="Neighborhood Map" link="neighborhood" image="media/maps.jpg"/>
        <ProjectRow name="AJAX Location API Information" link="ajax" image="media/nyt.jpg"/>
        <ProjectRow name="Frogger Game" link="frogger" image="media/rainforest.jpg"/>
        <ProjectRow name="Design Mockup Project" link="design" image="media/design.jpg"/>
        <ProjectRow name="My Resume" link="resume" image="media/resume.jpg"/>
        <ProjectRow name="Contact Me!" link="contact" image="media/contact.jpg"/>
      </div>
    );
  }
}

export default App;
