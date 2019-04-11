import React, {Component} from 'react';
import StudioCard from '../StudioCard/StudioCard.js';
import '../Styles/_studioCard.scss';

export default class Studios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO:this should be a stateless container
    }
  }

  renderDisplay = () => {
    let display;

    console.log(this.props.rendered)

    if(this.props.rendered.length >= 1) {
      display = 
      this.props.rendered.map( studio => 
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
      this.props.studios.map( studio => 
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
    return display;
  }

  render() { 
    return (
      <section className='studioCardContainer'>
        {this.renderDisplay()}
      </section>
    );
  }
}