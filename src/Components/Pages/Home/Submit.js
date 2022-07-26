import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Submit = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className=" my-40 rounded-xl px-10 py-14"
    >
      <div className="text-center pb-14">
        <h4 className="text-xl font-bold text-secondary">Contact Us</h4>
        <h1 className="text-4xl text-white">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
        className="input w-full max-w-md"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
        className="input w-full max-w-md"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        />
        <textarea
        className="textarea w-full max-w-md"
          type="text"
          name="message"
          id="message"
          placeholder="Your Message"
          rows={6}
        />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Submit;
