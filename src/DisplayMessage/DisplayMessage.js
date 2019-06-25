import React from 'react';

export const DisplayMessage = ({emptyType}) => {
  return(
    <article className="displayMessageContainer">
        <p className="emptyTypeText">{emptyType}</p>
    </article>
  )
}