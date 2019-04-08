import React, { Component } from 'react'
import './StudioCard.css';

export default class StudioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const starsInnerStyle = {
    width: this.props.roundedRating
  };

    return (
      (<div className="cardContainer">
        <section className="studioCards">
          <img src={this.props.image} alt="Group Yoga in studio" className="studioImgs"/>
          <p className="studioName">{this.props.name}</p>
          <p className="studioAddress">{this.props.address}</p>
          <p className="studioNumber">{this.props.phone}</p>
          <div className="mission-container">
            <h4 className="mission-heading">Mission:</h4>
            <p className="studioMission">{this.props.mission}</p>
          </div>
          <div className="inline">
            <div className="starsOuter">
              <div className="starsInner" style={starsInnerStyle}>
              </div>
            </div>
            <p className="studioRating">{this.props.rating}</p>
          </div>
          <a href={this.props.link} className="studioLink" rel="noopener noreferrer" target="_blank">{this.props.name} Website</a>
          <div className="studioFee">{this.props.fee} 
            <p className="drop-in-text">drop in</p> 
          </div>
        </section>
      </div>)
    )
  }  
}