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
    return this.props.studios.filter((studio) => {
      let studioId = studio.mainTypeOffered;
      if(studioId === userInput) {
        return studioId === userInput;
      }
    });
  }

  handleClickChange = (e) => {
    e.preventDefault()
    let userInput = parseInt(e.target.id);
    let result = this.filterStudioId(userInput);
    
    this.props.storeRendered(result)
  }

  render() {
  return (
    (<article className="yogaTypeCard scaleUpCenter">
      <h4 className='typeHeading heading'>{this.props.name}</h4>
      <h5 className='purposeHeading heading'>Purpose</h5>
      <p className='purpose'>{this.props.purpose}</p>
      {/* <h5 className='beginnerHeading heading'>Difficulty</h5> */}
      <p className='beginner'>Level of Difficulty: {this.props.beginnerFriendly ? 'Beginner friendly' : 'Advanced'}</p>
      <h5 className='posesHeading heading'>Common Poses </h5>
      <p className='poses'>{this.props.commonPoses}</p>
      <div>
        <input onClick={this.handleChange} className='findStudioBtn' type="submit" value="Find Studios" id={this.props.id} />
      </div>
    </article>)
    )
  }
}

export default TypeCard;
