import React from 'react';
import './StudioCard.css';


const studioCardUI = ( props ) => {
  
  const starsInnerStyle = {
  width: props.roundedRating
};

  return (
      <article className="studioCard">
        <header class="cardCover">
          <img src={props.image} alt="Group Yoga in studio" className="studioImgs"/>
          <p className="studioName">{props.name}</p>
          <div class="studioFee">
            {props.fee} 
            <div class="drop-in-text">drop in</div>
          </div>
        </header>
        <p className="studioAddress">{props.address}</p>
        <p className="studioNumber">{props.phone}</p>
        <div className="mission-container">
          <h4 className="mission-heading">Mission:</h4>
          <p className="studioMission">{props.mission}</p>
        </div>
        <div className="inline">
          <div className="starsOuter">
            <div className="starsInner" style={starsInnerStyle}>
            </div>
          </div>
          <p className="studioRating">{props.rating}</p>
        </div>
        <a href={props.link} className="studioLink" target="_blank">{props.name} Website</a>
        {/* <div className="studioFee">
          <p className="drop-in-text">drop in</p> 
        </div> */}
      </article>
  )
}

export default studioCardUI;