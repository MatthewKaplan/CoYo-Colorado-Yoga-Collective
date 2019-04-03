import React, {Component} from 'react';
import data from '../data./js';

export default class Studios extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <section class='cards-container'>
        <article class='card'>
        {
          this.data.studios.map((studio) => {
            return 
              <StudioCard
              image= {studio.img}
              name= {studio.name}
              address= {studio.address}
              phone= {studio.phoneNum}
              mission= {studio.mission}
              rating= {studio.googleRating}
              link= {studio.link}
              fee={studio.dropInFee} />
      })
    }
        </article>
      </section>
    )
  }
}