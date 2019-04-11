import React, { Component } from 'react'
import '../Styles/_studioCard.scss';

export default class StudioCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const starsInnerStyle = {
    width: this.props.roundedRating
    }

  return (
      <article className="studioCard">
        <header className="cardCover">
          <img src={this.props.image} alt="Group Yoga in studio" className="studioImg"/>
          <h4 className="studioName">{this.props.name}</h4>
          <div className="studioFee">
            {this.props.fee} 
            <div className="dropInText">drop in</div>
          </div>
        </header>
        <main className="studioInfo">
          <address className="contactInfo">
            <p className="address">{this.props.address}</p>
            <a className="phoneNum" href="tel:3034162958">{this.props.phone}</a>      
          </address>
          <div className="missionContainer">
            <h4 className="missionHeading">Mission:</h4>
            <p className="studioMission">{this.props.mission}</p>
          </div>
          <div className="inline">
            <div className="starsOuter">
              <div className="starsInner" style={starsInnerStyle}></div>
          </div>
            <p className="studioRating">{this.props.rating}</p>
          </div>
          <a href={this.props.link} className="studioLink" rel="noopener noreferrer" target="_blank">Learn More</a>
        </main>
      </article>
    )
  }
}

