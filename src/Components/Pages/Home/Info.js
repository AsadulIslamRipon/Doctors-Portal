import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-40">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        description="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Visit our location"
        bgClass="bg-accent"
        description="Brooklyn, NY 10036, United States"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact us now"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        description="+000 123 456789"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
