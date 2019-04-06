import React from 'react';
import '../Styles/TypeCard.scss';

const TypeCard = (props) => {

  return (
    <section className="mainContainer">
      <h4 className='typeHeading'>{props.name}</h4>
      <h5 className="purpose">Purpose:</h5>
      <h5 className='purpose'>{props.purpose}</h5>
      <p className="beginner">Difficulty:</p>
      <p className='beginner'>{props.beginnerFriendly ? 'Beginner friendly' : 'Advanced'}</p>
      <p className="poses">Poses: </p>
      <p className='poses'>{props.commonPoses}</p>
    </section>
  )
}

export default TypeCard;
