import React from 'react';

const TypeCard = ( props ) => {
  
  return (
    <section className="mainContainer">
      <h4 className='typeHeading'>{props.name}</h4>
      <h5 className='purpose'>Purpose: {props.purpose}</h5>
      <p className='beginner'>Difficulty: {props.beginnerFriendly ? 'Beginner friendly' : 'Advanced'}</p>
      <p className='poses'>Poses: {props.commonPoses}</p>



    </section>
  )
}

export default TypeCard;
