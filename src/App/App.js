import React, { Component } from 'react';
import '../Styles/Main.scss';
import Header from '../Header/Header.js';
import Carousel from '../Carousel/Carousel.js';
import Studios from '../Studios/Studios.js';
import Search from '../Search/Search.js';
import Controls from '../Controls/Controls.js';
import anusara from '../Styles/images/ANUSARA.png'
import ashtanga from '../Styles/images/ASHTANGA.png'
import bikram from '../Styles/images/BIKRAM.png'
import hatha from '../Styles/images/HATHA.png'
import iyengar from '../Styles/images/IYENGAR.png'
import jivamukti from '../Styles/images/JIVAMUKTI.png'
import kundalini from '../Styles/images/KUNDALINI.png'
import vinyasa from '../Styles/images/VINYASA.png'
import yin from '../Styles/images/YIN.png'
import restorative from '../Styles/images/RESTORATIVE.png'
import DisplayMessage from '../DisplayMessage/DisplayMessage.js';


import '../Styles/Main.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studios: [],
      yogaTypes: [],
      rendered: [],
      typeImages: [{ anusara }, { ashtanga }, { bikram }, { hatha }, { iyengar }, { jivamukti }, { kundalini },  { restorative }, { vinyasa },  { yin }],
      emptyType: ''
    };
  }

  componentWillMount() {
    localStorage.getItem('studiosRendered') && this.setState({
      rendered: JSON.parse(localStorage.getItem('studiosRendered'))
    })
    localStorage.getItem('types') && this.setState({
      yogaTypes: JSON.parse(localStorage.getItem('types'))
    })
    localStorage.getItem('studios') && this.setState({
      studios: JSON.parse(localStorage.getItem('studios'))
    })
    localStorage.getItem('emptyType') && this.setState({
      emptyType: JSON.parse(localStorage.getItem('emptyType'))
    })
  }

  componentDidMount(){
    if(!localStorage.getItem('studiosRendered')){
      this.fetchData();
      this.addImgs();
    } else {
      this.addImgs();
    }
  }

  fetchData(){
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/studios')
      .then(response => response.json())
      .then(yogaStudios => this.setState( {studios: yogaStudios.studios} ))
      .catch(err => console.log(err))
    fetch('https://fe-apps.herokuapp.com/api/v1/whateverly/1901/SallyHaefling/yoga')
      .then(response => response.json())
      .then(yogaTypes => this.setState( {yogaTypes: yogaTypes.yoga.types}))
      .catch(err => console.log(err))
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('studiosRendered', JSON.stringify(nextState.rendered));
    localStorage.setItem('types', JSON.stringify(nextState.yogaTypes));
    localStorage.setItem('studios', JSON.stringify(nextState.studios));
    localStorage.setItem('emptyType', JSON.stringify(nextState.emptyType));
  }

  storeEmptyType = (message) => {
    this.setState({emptyType: message})
  }

  addImgs = () => {
    const orderedTypes = this.state.yogaTypes.sort((typeA, typeB) => (typeA.name > typeB.name) ? 1 : -1);
    orderedTypes.forEach((type, i) => {
      type.image = this.state.typeImages[i][type.name.toLowerCase()];
    })
    this.updateTypes(orderedTypes);
  }
  
  
  updateTypes = (updatedTypes) => {
    this.setState({yogaTypes: updatedTypes})
  }

  storeRendered = (cardsDisplayed) => {
    this.setState({rendered: cardsDisplayed})
  }


  render() {
    return (
      <section className="App" data-test="component-app">
        <Header />
        <Carousel 
        studios={this.state.studios}
        yogaTypes={this.state.yogaTypes}
        storeRendered={this.storeRendered}
        storeEmptyType={this.storeEmptyType}
        typeId={this.typeId}
        storeTypeId={this.storeTypeId}
        />
        <Search 
        studios={this.state.studios}
        storeRendered={this.storeRendered}
        />
        <Controls 
        studios={this.state.studios}
        storeRendered={this.storeRendered}
        rendered={this.state.rendered}
        />
        {this.state.emptyType ?
          <DisplayMessage 
          emptyType={this.state.emptyType}
          /> : null
        }
        {this.state.emptyType ? 
          null :
          <Studios 
          studios={this.state.studios}
          rendered={this.state.rendered}
          />
        }
      </section>
    );
  }
}
