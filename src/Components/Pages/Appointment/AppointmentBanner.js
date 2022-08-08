import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      className="hero min-h-full"
      style={{
        background: `url(${bg}) `,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-lg md:max-w-md rounded-lg shadow-2xl"
          alt="Dentist"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
