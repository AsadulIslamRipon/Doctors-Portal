import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "David Warner",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Donald Trump",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "California",
      img: people3,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mt-40">
        <div>
          <h3 className="text-xl font-bold text-primary">Testimonial</h3>
          <h1 className="text-4xl text-accent">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-[192px] h-[155px]" src={quote} alt="" />
        </div>
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            testimonials.map( testimonial => <Testimonial
            key={testimonial._id}
            testimonial={testimonial}
            ></Testimonial>)
        }
        </div>
    </div>
  );
};

export default Testimonials;
