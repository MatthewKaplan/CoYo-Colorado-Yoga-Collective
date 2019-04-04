import React, {Component} from 'react';
import data from '../data.js';

export default class Type extends Component {
  constructor(props) {
    super(props);
  }

  render() { 

    return (
      <section className='typeContainer'>
      {
        data.yoga.map( yogaType => 
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