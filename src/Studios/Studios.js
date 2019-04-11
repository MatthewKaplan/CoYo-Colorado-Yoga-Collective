import React from 'react';
import {StudioCard} from '../StudioCard/StudioCard.js';
import '../Styles/_studioCard.scss';

export const Studios = (props) => {
  let display;

  if(props.rendered.length >= 1) {
    display = 
    props.rendered.map( studio => 
      <StudioCard
      key={studio.id}
      image={studio.img}
      name={studio.name}
      address={studio.address}
      phone={studio.phoneNum}
      mission={studio.mission}
      rating={studio.googleRating}
      roundedRating={`${Math.round(studio.googleRating / 5 * 100 / 10) * 10}%`}
      link={studio.link}
      fee={studio.dropInFee} />
      )
  } else {
    display = 
    props.studios.map( studio => 
      <StudioCard
      key={studio.id}
      image={studio.img}
      name={studio.name}
      address={studio.address}
      phone={studio.phoneNum}
      mission={studio.mission}
      rating={studio.googleRating}
      roundedRating={`${Math.round(studio.googleRating / 5 * 100 / 10) * 10}%`}
      link={studio.link}
      fee={studio.dropInFee} />
      )
  }

  return (
    <section className='studioCardContainer'>
      {display}
    </section>
  );
}