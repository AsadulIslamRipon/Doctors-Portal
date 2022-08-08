import React from "react";
import bgFooter from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${bgFooter})`,
        backgroundSize: "cover",
      }}
      className=" px-10 py-20"
    >
      <div className="footer p-10  text-neutral-content ">
        <div>
          <span className="footer-title  font-bold text-lg text-secondary">SERVICES</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title text-secondary">ORAL HEALTH</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title text-secondary">OUR ADDRESS</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <p className="text-center text-secondary text-xl">
        Copyright © 2022 - All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
