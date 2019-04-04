import React, {Component} from 'react';
import data from '../data.js';
import StudioCard from '../StudioCard/StudioCard.js';
import '../StudioCard/StudioCard.css';

export default class Studios extends Component {
  constructor(props) {
    super(props);
  }

  render() { 

    return (
      <section className='cards-container'>
      {
        data.studios.map( studio => 
        <StudioCard
        image= {studio.img}
        name= {studio.name}
        address= {studio.address}
        phone= {studio.phoneNum}
        mission= {studio.mission}
        rating={studio.googleRating}
        roundedRating= {`${Math.round(studio.googleRating / 5 * 100 / 10) * 10}%`}
        link= {studio.link}
        fee={studio.dropInFee} />
        )
      }
      </section>
  );
  }
}