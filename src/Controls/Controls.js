import React, { Component } from 'react';
import '../Styles/_Controls.scss';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  displayAllStudios = (e) => {
    e.preventDefault()
    this.props.storeRendered(this.props.studios)
  }

  priceFilter = () => {
    let ordered = this.props.studios.sort((a, b) => (a.dropInFee > b.dropInFee) ? 1 : -1);
    let lastElement = ordered.pop();
    return ordered.unshift(lastElement);
  }

  sortByPrice = (e) => {
    e.preventDefault()
    let filteredPrice = this.priceFilter();
    
    this.props.storeRendered(filteredPrice);
  }


  render() {
    return  (
      <section className='btnContainer'>
          <input 
          value='Show all studios'
          type='submit'
          className='showAll'
          onClick={this.displayAllStudios}
          />
          <input
          value='Sort by price' 
          type='submit'
          className='sort'
          onClick={this.sortByPrice}
          />
      </section>
    )
  }
}

export default Controls;
