import React, { Component } from 'react';

class DisplayMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <article className="displayMessageContainer">
          <p className="emptyTypeText">{this.props.emptyType}</p>
      </article>
    )
  }
}


export default DisplayMessage;