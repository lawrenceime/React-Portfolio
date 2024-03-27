import React, { Component } from "react";
import "./HeroImg2Styles.css";
import personImg2 from '../assets/Ime_panasonic.jpg'

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1> {this.props.heading} </h1>
          <p>{this.props.text}</p>
          <div className="image-box">
          <img src={personImg2} alt="Ime with a panasonic shirt" />
          </div>
        </div>

       
      </div>
    );
  }
}

export default HeroImg2;
