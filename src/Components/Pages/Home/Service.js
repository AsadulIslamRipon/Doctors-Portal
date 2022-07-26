import React from "react";

const Service = ({ service }) => {
    const {img, name, description} = service;
  return (
    <div class="card w-96 bg-base-100 m-2 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center font-semibold text-accent">
        <h2 class="card-title text-xl font-">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
