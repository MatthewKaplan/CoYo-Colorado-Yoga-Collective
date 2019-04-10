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
    let ordered;
    if(this.props.rendered.length >= 1) {
      ordered = this.props.rendered.sort((a, b) => (a.dropInFee > b.dropInFee) ? 1 : -1);
    } else {
      ordered = this.props.studios.sort((a, b) => (a.dropInFee > b.dropInFee) ? 1 : -1);
    }

    ordered.forEach(el => {
      if(el.dropInFee.endsWith('Suggested donation')) {
        let lastElement = ordered.pop();
        ordered.unshift(lastElement);
      }
    });
    return ordered;
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
          data-test="show-all-button"
          />
          <input
          value='Sort by price' 
          type='submit'
          className='sort'
          onClick={this.sortByPrice}
          data-test="sort-price-button"
          />
      </section>
    )
  }
}

export default Controls;
