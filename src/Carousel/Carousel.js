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

  render() {
    return (
      <main className='carouselContainer'>
        <section className='carouselText'>
          <h3 className="carouselHeading">Scroll to explore yoga types >>> </h3>
          <p className="carouselMessage">Click a type to learn more and find a local studio offering that style</p>
        </section>
        <section className='typeContainer'>
        {
        this.props.yogaTypes.map(yogaType =>
          <TypeCard
            image={yogaType.image}
            name={yogaType.name}
            id={yogaType.typeId}
            purpose={yogaType.purpose}
            beginnerFriendly={yogaType.beginnerFriendly}
            propsUsed={yogaType.propsUsed}
            commonPoses={yogaType.commonPoses.map(pose => `${pose}, ` )}
            studios={this.props.studios}
            types={this.props.yogaTypes}
            checkImgs={this.addImgs}
            typeId={this.props.typeId}
            storeRendered={this.props.storeRendered}
            storeTypeId={this.props.storeTypeId}
            storeEmptyType={this.props.storeEmptyType}
          />
          )
        }
      </section>
    </main>
    );
  }
}