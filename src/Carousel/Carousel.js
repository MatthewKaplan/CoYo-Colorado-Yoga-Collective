import React, { Component } from 'react';
import TypeCard from '../TypeCard/TypeCard.js';
import '../Styles/_Carousel.scss';
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
      featuredCard: '',
      typeImages: [{ anusara }, { ashtanga }, { bikram }, { jivamukti }, { iyengar }, { hatha }, { restorative }, { vinyasa }, { kundalini }, { yin }],
      typesWithImages: []
    }
  }

  
  // updateTypes = (updatedTypes) => {
  //   this.setState({typesWithImages: updatedTypes})
  //   console.log(this.state.typesWithImages)
  // }

  reorderArray = () => {
    const orderedTypes = this.props.yogaTypes.sort((typeA, typeB) => (typeA.name > typeB.name) ? 1 : -1);
    orderedTypes.forEach((type, i)  => {
      type.image = this.state.typeImages[i];
    })
    // this.updateTypes(orderedTypes);
    return orderedTypes;
  }

  render() {
    this.reorderArray();
    return (
      <section className='typeContainer'>
        <article className="imageContainer">
          {/* this.state.typeImages.forEach(typeImg => {
            console.log(this.props.yogaTypes.name)
            // this.props.yogaTypes.forEach(yogaType => {
              
              // })
            }) */}
          <img src={anusara} alt="anusara" className="anusara typeSmall" 
          // onClick={this.addImgs}
          />
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
        <article className="imageContainer2">
        {
          this.props.yogaTypes.map(yogaType =>
            <TypeCard
            name={yogaType.name}
            id={yogaType.typeId}
            purpose={yogaType.purpose}
            beginnerFriendly={yogaType.beginnerFriendly}
            propsUsed={yogaType.propsUsed}
            commonPoses={yogaType.commonPoses.map(pose => `${pose}, ` )}
            studios={this.props.studios}
            checkImgs={this.addImgs}
            storeRendered={this.props.storeRendered}
            />
            )
          }
          </article>
      </section>
    );
  }
}