import React from "react";
import "../Styles/_studioCard.scss";

export const StudioCard = ({
  roundedRating,
  image,
  name,
  fee,
  address,
  phone,
  mission,
  rating,
  link
}) => {
  const starsInnerStyle = {
    width: roundedRating
  };

  return (
    <article className="studioCard">
      <header className="cardCover">
        <img src={image} alt="Group Yoga in studio" className="studioImg" />
        <h4 className="studioName">{name}</h4>
        <div className="studioFee">
          {fee}
          <div className="dropInText">drop in</div>
        </div>
      </header>
      <main className="studioInfo">
        <address className="contactInfo">
          <p className="address">{address}</p>
          <a className="phoneNum" href="tel:3034162958">
            {phone}
          </a>
        </address>
        <div className="missionContainer">
          <h4 className="missionHeading">Mission:</h4>
          <p className="studioMission">{mission}</p>
        </div>
        <div className="inline">
          <div className="starsOuter">
            <div className="starsInner" style={starsInnerStyle} />
          </div>
          <p className="studioRating">{rating}</p>
        </div>
        <a
          href={link}
          className="studioLink"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn More
        </a>
      </main>
    </article>
  );
};
