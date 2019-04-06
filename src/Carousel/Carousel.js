import React, { Component } from 'react';
import data from '../data.js';
import TypeCard from '../TypeCard/TypeCard.js';
import '../Styles/Carousel.scss';


export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCards: []
    }
  }

  render() {
    return (
      <section className='typeContainer'>
        {
          data.yoga.types.map(yogaType =>
            <TypeCard
              name={yogaType.name}
              purpose={yogaType.purpose}
              beginnerFriendly={yogaType.beginnerFriendly}
              propsUsed={yogaType.propsUsed}
              commonPoses={yogaType.commonPoses.map(poses => <p> {poses} </p>)}
            />
          )
        }
      </section>
    );
  }
}