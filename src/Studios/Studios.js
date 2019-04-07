import React, {Component} from 'react';
import StudioCard from '../StudioCard/StudioCard.js';
// import Controls from '../Controls/Controls.js';

export default class Studios extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   all: [],
    //   sortByPrice: []
    // }
  }

  //put setState methods in here for:
    // sort by price 
    //display all studios

  //import controls which will be where the buttons and onClick methods live

  render() { 

    return (
      <section className='cardsContainer'>
      {
        this.props.studios.map( studio => 
        <StudioCard
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
      </section>
  );
  }
}