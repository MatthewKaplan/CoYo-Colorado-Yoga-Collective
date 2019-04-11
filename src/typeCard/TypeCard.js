import React, { Component } from 'react';
import '../Styles/_TypeCard.scss';

export class TypeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeId: 0
    }
  }
  


  filterStudioId = (userInput) => {
    return this.props.studios.filter(studio => {
      let studioId = studio.mainTypeOffered;
      return studioId === userInput;
    });
  }

  handleClickChange = (e) => {
    e.preventDefault()
    let userInput = parseInt(e.target.id);
    let result = this.filterStudioId(userInput);
    this.props.storeRendered(result)
    if(userInput === 9 || userInput === 10) {
      let message = "Sorry but the style of yoga you choose is not currently being offered at any studios, please check back or choose another style.";
      this.props.storeEmptyType(message)
    } else {
      let message = "";
      this.props.storeEmptyType(message)
      let result = this.filterStudioId(userInput);
      this.props.storeRendered(result)
    }
  }

  handleTypeClick = (e) => {
    const infoCard = e.target.parentElement.nextSibling;
    e.target.parentElement.classList.add('hidden');
    infoCard.classList.remove('hidden');
  }

  hideInfo = (e) => {
    e.target.classList.add('hidden');
    e.target.previousSibling.classList.remove('hidden')
  }


  render() {
 
  return (
    (<section className="imageContainer">
      <article className="typeCoverImage typeSmall">
        {this.props.types[0] && <img src={this.props.image} alt={this.props.name} className="typeSmallImg" id={this.props.name} onClick={this.handleTypeClick}/>}
      </article>
      <article className="yogaTypeCard hidden" onMouseLeave={this.hideInfo}>
        <h4 className='typeHeading heading'>{this.props.name}</h4>
        <h5 className='purposeHeading heading'>Purpose</h5>
        <p className='purpose'>{this.props.purpose}</p>
        <p className='beginner'>Level of Difficulty: {this.props.beginnerFriendly ? 'Beginner friendly' : 'Advanced'}</p>
        <h5 className='posesHeading heading'>Common Poses </h5>
        <p className='poses'>{this.props.commonPoses}</p>
        <div>
          <input onClick={this.handleClickChange} className='findStudioBtn' type="submit" value="Find Studios" id={this.props.id} />
        </div>
      </article>
    </section>)
    )
  }
}

export default TypeCard;
