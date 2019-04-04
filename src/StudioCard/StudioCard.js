import React from 'react';
import './StudioCard.css';



const studioCardUI = ( props ) => {
  return (
    <div className="cardContainer">
      <section className="studioCards">
        <img src={props.image} alt="Group Yoga in studio" className="studioImgs"/>
        <p className="studioName">{props.name}</p>
        <p className="studioAddress">{props.address}</p>
        <p className="studioNumber">{props.phone}</p>
        <p className="studioMission">{props.mission}</p>
        <p className="studioRating">{props.rating}</p>
        <a href={props.link} className="studioLink" target="_blank">{props.name} Website</a>
        <p className="studioFee">{props.fee}</p>
      </section>
    </div>
  )
}

export default studioCardUI;