import React from 'react';

const studioCardUI = ( props ) => {
  
  const starsInnerStyle = {
  width: props.roundedRating
};

  return (
    <div className="cardContainer">
      <section className="studioCards">
        <img src={props.image} alt="Group Yoga in studio" className="studioImgs"/>
        <p className="studioName">{props.name}</p>
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
        <div className="studioFee">{props.fee} 
          <p className="drop-in-text">drop in</p> 
        </div>
      </section>
    </div>
  )
}

export default studioCardUI;