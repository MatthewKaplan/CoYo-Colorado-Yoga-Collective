import React, { Component } from 'react';
import '../Styles/_TypeCard.scss';


export class TypeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleCards: [],
      typeId: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      typeId: e.target.id
    })
    this.handleClickChange(e);
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

    if(userInput === 9 || userInput === 10) {
      alert("Sorry there are no studios currently teching this type of yoga at the time, please check back or pick another type")
    } else {
      let result = this.filterStudioId(userInput);
      this.props.storeRendered(result)
    }
  }

  render() {
  return (
    (<section className="yogaTypeCard">
      <h4 className='typeHeading'>{this.props.name}</h4>
      <h5 className='purpose'>Purpose:</h5>
      <h5 className='purpose'>{this.props.purpose}</h5>
      <p className='beginner'>Difficulty:</p>
      <p className='beginner'>{this.props.beginnerFriendly ? 'Beginner friendly' : 'Advanced'}</p>
      <p className='poses'>Poses: </p>
      <p className='poses'>{this.props.commonPoses}</p>
      <input onClick={this.handleChange} className='findStudioBtn' type="submit" value="Find Studios" id={this.props.id} />
    </section>)
    )
  }
}

export default TypeCard;
