import React, {Component} from 'react';
import data from '../data.js';
import TypeCard from '../TypeCard/TypeCard.js';
export default class Type extends Component {
  constructor(props) {
    super(props);
  }

  render() { 

    return (
      <section className='typeContainer'>
      {
        data.yoga.types.map( yogaType => 
        <TypeCard
        name={yogaType.name}
        purpose={yogaType.purpose}
        beginnerFriendly={yogaType.beginnerFriendly}
        propsUsed={yogaType.propsUsed}
        commonPoses={yogaType.commonPoses}
         />
        )
      }
      </section>
  );
  }
}