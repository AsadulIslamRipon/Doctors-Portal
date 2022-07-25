import React from "react";
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
    className="hero"
    style={{
        background: `url(${bg}) `,
        height: '500px',
    }} >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img className="w-[600px] h-[350px]"
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts <br></br> Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
