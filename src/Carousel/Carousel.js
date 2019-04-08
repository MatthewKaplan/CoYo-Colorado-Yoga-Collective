import React, { Component } from 'react';
import TypeCard from '../TypeCard/TypeCard.js';
import '../Styles/Carousel.scss';
import anusara from './ANUSARA.png'
import ashtanga from './ASHTANGA.png'
import bikram from './BIKRAM.png'
import hatha from './HATHA.png'
import iyengar from './IYENGAR.png'
import jivamukti from './JIVAMUKTI.png'
import kundalini from './KUNDALINI.png'
import vinyasa from './VINYASA.png'
import yin from './YIN.png'
import restorative from './RESTORATIVE.png'

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <section className='typeContainer'>
        <article className="imageContainer">
          <img src={anusara} alt="anusara" className="anusara typeSmall" />
          <img src={ashtanga} alt="ashtanga" className="ashtanga typeSmall" />
          <img src={bikram} alt="bikram" className="bikram typeSmall" />
          <img src={jivamukti} alt="jivamukti" className="jivamukti typeSmall" />
          <img src={iyengar} alt="iyengar" className="iyengar typeSmall" />
          <img src={hatha} alt="hatha" className="hatha typeSmall" />
          <img src={restorative} alt="restorative" className="restorative typeSmall" />
          <img src={vinyasa} alt="vinyasa" className="vinyasa typeSmall" />
          <img src={kundalini} alt="kundalini" className="kundalini typeSmall" />
          <img src={yin} alt="yin" className="yin typeSmall" />
        </article>
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