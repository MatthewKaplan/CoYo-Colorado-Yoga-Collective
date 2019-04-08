import React, { Component } from 'react';
import TypeCard from '../TypeCard/TypeCard.js';
import '../Styles/Carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <section className='typeContainer'>
        {
          this.props.yogaTypes.map(yogaType =>
            <TypeCard
              name={yogaType.name}
              id={yogaType.typeId}
              purpose={yogaType.purpose}
              beginnerFriendly={yogaType.beginnerFriendly}
              propsUsed={yogaType.propsUsed}
              commonPoses={yogaType.commonPoses.map(poses => <p> {poses} </p>)}
              studios={this.props.studios}
              storeRendered={this.props.storeRendered}
            />
          )
        }
      </section>
    );
  }
}