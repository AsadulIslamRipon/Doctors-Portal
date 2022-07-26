import React from "react";

const InfoCard = ({img , cardTitle, bgClass, description}) => {
  return (
    <div className={`card card-side shadow-xl mx-2 ${bgClass}`}>
      <figure className="pl-5">
        <img src={img} alt="Movie" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title text-lg font-bold">{cardTitle}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
