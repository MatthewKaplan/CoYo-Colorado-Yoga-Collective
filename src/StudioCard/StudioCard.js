import React, { Component } from 'react';
import data from '../data.js';

export default class StudioCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='card-container'>
        {/* <img src={data.studios.img} />
        <p className='studio-name'>{data.studios.name}</p>
        <p className='address'>{data.studios.address}</p>
        <p className='phone'>{data.studios.phoneNum}</p>
        <p className='mission'>{data.mission}</p>
        <p className='rating'>{data.googleRating}</p> */}
      </section>
    )
  }
}