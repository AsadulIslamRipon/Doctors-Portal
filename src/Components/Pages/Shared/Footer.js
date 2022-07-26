import React from "react";
import bgFooter from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    
    <footer
    
    style={{
        background: `url(${bgFooter})`,
        backgroundSize: 'cover',
    }}

    className=" px-10 py-20">
      <div class="footer p-10  text-neutral-content">
        <div>
          <span class="footer-title font-bold text-lg">SERVICES</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <p className="text-center text-accent text-xl">Copyright © 2022 - All right reserved.</p>
    </footer>
  );
};

export default Footer;
