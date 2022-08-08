import React from "react";

const Testimonial = ({ testimonial }) => {
  const { name, description, location, img } = testimonial;
  return (
    <div className="card w-96 bg-base-100 m-2 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex justify-center items-center mt-5">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100">
              <img src={img} alt="reviewer" />
            </div>
          </div>
          <div className="ml-5">
            <h3>{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
