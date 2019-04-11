import React from 'react';
import TypeCard from '../TypeCard/TypeCard.js';
import '../Styles/_Carousel.scss';

export const Carousel = (props) => {
  return (
    <main className='carouselContainer'>
      <section className='carouselText'>
        <h3 className="carouselHeading">Scroll to explore yoga types >>> </h3>
        <p className="carouselMessage">Click a type to learn more and find a local studio offering that style</p>
      </section>
      <section className='typeContainer'>
      {
      props.yogaTypes.map(yogaType =>
        <TypeCard
          image={yogaType.image}
          name={yogaType.name}
          id={yogaType.typeId}
          purpose={yogaType.purpose}
          beginnerFriendly={yogaType.beginnerFriendly}
          propsUsed={yogaType.propsUsed}
          commonPoses={yogaType.commonPoses.map(pose => `${pose}, ` )}
          studios={props.studios}
          types={props.yogaTypes}
          storeRendered={props.storeRendered}
          storeEmptyType={props.storeEmptyType}
        />
        )
      }
    </section>
  </main>
  );
}