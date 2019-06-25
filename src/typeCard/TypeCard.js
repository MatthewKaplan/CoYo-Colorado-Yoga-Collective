import React, { Component } from 'react';
import '../Styles/_TypeCard.scss';

export class TypeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeId: 0
    }
  }

  setTypeId = (e) => {
    this.setState({typeId: parseInt(e.target.id)}, () => {
      this.handleClickChange(this.state.typeId);
    })
  }
  
  filterStudioId = (userInput) => {
    return this.props.studios.filter(studio => {
      let studioId = studio.mainTypeOffered;
      return studioId === userInput;
    });
  }

  handleClickChange = (typeId) => {
    let userInput = typeId;
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
    console.log(e.target.parentElement);
    console.log(e)
    e.target.parentElement.classList.add('hidden');
    infoCard.classList.remove('hidden');
  }

  hideInfo = (e) => {
    if (e.target.className === 'yogaTypeCard') {
      e.currentTarget.classList.add('hidden');
      e.target.parentElement.firstChild.classList.remove('hidden');
    }
  }

  render() {
  return (
    <section className="imageContainer">
      <article className="typeCoverImage typeSmall">
        {this.props.types[0] && (
          <img
            src={this.props.image}
            alt={this.props.name}
            className="typeSmallImg"
            data-test="handle-type-btn"
            id={this.props.name}
            onClick={e => this.handleTypeClick(e)}
          />
        )}
      </article>
      <article className="yogaTypeCard hidden" onMouseLeave={this.hideInfo}>
        <h4 className="typeHeading heading">{this.props.name}</h4>
        <h5 className="purposeHeading heading">Purpose</h5>
        <p className="purpose">{this.props.purpose}</p>
        <p className="beginner">
          Level of Difficulty:{" "}
          {this.props.beginnerFriendly ? "Beginner friendly" : "Advanced"}
        </p>
        <h5 className="posesHeading heading">Common Poses </h5>
        <p className="poses">{this.props.commonPoses}</p>
        <div>
          <input
            onClick={e => this.setTypeId(e)}
            className="findStudioBtn"
            data-test="find-studios-btn"
            type="submit"
            value="Find Studios"
            id={this.props.id}
          />
        </div>
      </article>
    </section>
  );
  }
}

export default TypeCard;