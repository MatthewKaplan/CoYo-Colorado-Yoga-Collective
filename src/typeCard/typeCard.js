import React from 'react';


const TypeCard = ( props ) => {
  
  return (
    <section className="typeContainer">
      <h4 className='typeHeading'>{props.name}</h4>
      <h5 className='purpose'>{props.purpose}</h5>
      <p className='beginner'>{props.beginnerFriendly}</p>
      <p className='propsUsed'>{props.propsUsed}</p>
      <p className='poses'>{props.commonPoses}</p>



    </section>
  )
}

export default TypeCard;