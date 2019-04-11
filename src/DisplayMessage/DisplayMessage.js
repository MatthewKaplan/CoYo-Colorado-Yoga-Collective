import React from 'react';

export const DisplayMessage = (props) => {
  return(
    <article className="displayMessageContainer">
        <p className="emptyTypeText">{props.emptyType}</p>
    </article>
  )
}