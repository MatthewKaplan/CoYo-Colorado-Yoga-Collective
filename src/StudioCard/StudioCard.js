import React, { Component } from 'react';
import data from '../data.js';



const studioCardUI = ( props ) => {
  return (
    <div className="studioCards">
      <img src={props.image} className="studioImgs"/>
      <p className="studioName">{props.name}</p>
      <p className="studioAddress">{props.address}</p>
      <p className="studioNumber">{props.phone}</p>
      <p className="studioMission">{props.mission}</p>
      <p className="studioRating">{props.rating}</p>
      <a href={props.link}>{props.name} Website</a>
      <p className="studioFee">{props.fee}</p>
    </div>
  )
}

export default studioCardUI;