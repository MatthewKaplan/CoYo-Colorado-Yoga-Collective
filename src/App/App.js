import React, { Component } from "react";
import "../Styles/Main.scss";
import { Header } from "../Header/Header.js";
import Carousel from "../Carousel/Carousel.js";
import Studios from "../Studios/Studios.js";
import { DisplayMessage } from "../DisplayMessage/DisplayMessage.js";
import Search from "../Search/Search.js";
import Controls from "../Controls/Controls.js";
import anusara from "../Styles/images/ANUSARA.png";
import ashtanga from "../Styles/images/ASHTANGA.png";
import bikram from "../Styles/images/BIKRAM.png";
import hatha from "../Styles/images/HATHA.png";
import iyengar from "../Styles/images/IYENGAR.png";
import jivamukti from "../Styles/images/JIVAMUKTI.png";
import kundalini from "../Styles/images/KUNDALINI.png";
import vinyasa from "../Styles/images/VINYASA.png";
import yin from "../Styles/images/YIN.png";
import restorative from "../Styles/images/RESTORATIVE.png";
import "../Styles/Main.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studios: [],
      yogaTypes: [],
      rendered: [],
      typeImages: [
        { anusara },
        { ashtanga },
        { bikram },
        { hatha },
        { iyengar },
        { jivamukti },
        { kundalini },
        { restorative },
        { vinyasa },
        { yin }
      ],
      emptyType: "",
      error: ""
    };
  }

  componentDidMount() {
    this.fetchStudios(
      "https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/studios"
    );
    this.fetchTypes(
      "https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/yoga"
    );
  }

  fetchStudios = async url => {
    try {
      const yogaStudiosResults = await fetch(url);
      const jsonStudioResults = await yogaStudiosResults.json();
      this.setState({
        studios: jsonStudioResults.studios
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  fetchTypes = async url => {
    try {
      const yogaTypesResults = await fetch(url);
      const jsonTypeResults = await yogaTypesResults.json();
      this.setState({ yogaTypes: jsonTypeResults.yoga.types })
      this.addImgs()
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("studiosRendered", JSON.stringify(nextState.rendered));
  }

  componentWillMount() {
    localStorage.getItem("studiosRendered") &&
      this.setState({
        rendered: JSON.parse(localStorage.getItem("studiosRendered"))
      });
  }

  addImgs = () => {
    const orderedTypes = this.state.yogaTypes.sort((typeA, typeB) =>
      typeA.name > typeB.name ? 1 : -1
    );
    orderedTypes.forEach((type, i) => {
      type.image = this.state.typeImages[i][type.name.toLowerCase()];
    });
    this.updateTypes(orderedTypes);
  };

  storeEmptyType = message => {
    this.setState({ emptyType: message });
  };

  updateTypes = updatedTypes => {
    this.setState({ yogaTypes: updatedTypes });
  };

  storeRendered = cardsDisplayed => {
    this.setState({ rendered: cardsDisplayed });
  };

  render() {
    return (
      <section className="App" data-test="component-app">
        <Header />
        <Carousel
          studios={this.state.studios}
          yogaTypes={this.state.yogaTypes}
          storeRendered={this.storeRendered}
          storeEmptyType={this.storeEmptyType}
        />
        <Search
          studios={this.state.studios}
          storeRendered={this.storeRendered}
        />
        <Controls
          storeEmptyType={this.storeEmptyType}
          studios={this.state.studios}
          storeRendered={this.storeRendered}
          rendered={this.state.rendered}
        />
        {this.state.emptyType ? (
          <DisplayMessage emptyType={this.state.emptyType} />
        ) : null}
        {this.state.emptyType ? null : (
          <Studios
            studios={this.state.studios}
            rendered={this.state.rendered}
          />
        )}
      </section>
    );
  }
}
