import React, { Component } from 'react';
import TypeCard from '../TypeCard/TypeCard.js';
import '../Styles/_Carousel.scss';


export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featuredCard: ''
    }
  }

  
  // updateTypes = (updatedTypes) => {
  //   this.setState({typesWithImages: updatedTypes})
  //   console.log(this.state.typesWithImages)
  // }



  render() {
    return (
      <section className='typeContainer'>
        {/* <article className="imageContainer">
           
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
        </article> */}
        <article className="imageContainer">
        {
          this.props.yogaTypes.map(yogaType =>
            <TypeCard
            // image={yogaType.image}
            name={yogaType.name}
            id={yogaType.typeId}
            purpose={yogaType.purpose}
            beginnerFriendly={yogaType.beginnerFriendly}
            propsUsed={yogaType.propsUsed}
            commonPoses={yogaType.commonPoses.map(pose => `${pose}, ` )}
            studios={this.props.studios}
            types={this.props.yogaTypes}
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