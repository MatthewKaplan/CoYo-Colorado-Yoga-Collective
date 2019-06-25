import React, { Component } from "react";
import TypeCard from "../TypeCard/TypeCard.js";
import "../Styles/_Carousel.scss";
const shortid = require("shortid");

class Carousel extends Component {
  renderYogaTypes = () => {
    return this.props.yogaTypes.map(yogaType => (
      <TypeCard
        key={yogaType.typeId}
        image={yogaType.image}
        name={yogaType.name}
        id={yogaType.typeId}
        purpose={yogaType.purpose}
        beginnerFriendly={yogaType.beginnerFriendly}
        propsUsed={yogaType.propsUsed}
        commonPoses={yogaType.commonPoses.map(pose => `${pose}, `)}
        studios={this.props.studios}
        types={this.props.yogaTypes}
        storeRendered={this.props.storeRendered}
        storeEmptyType={this.props.storeEmptyType}
      />
    ));
  };

  render() {
    return (
      <main className="carouselContainer">
        <section className="carouselText">
          <h3 className="carouselHeading">Scroll to explore yoga types >>> </h3>
          <p className="carouselMessage">
            Click a type to learn more and find a local studio offering that
            style
          </p>
        </section>
        <section className="typeContainer">{this.renderYogaTypes()}</section>
      </main>
    );
  }
}

export default Carousel;
