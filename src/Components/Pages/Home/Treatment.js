import React from "react";
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="my-40 flex justify-center items-center">
        <div className="flex-1">
          <img className="w-9/12 rounded-2xl"  src={treatment} alt="Treatment" />

        </div>
        <div className="flex-1">
            <h1 className="text-5xl font-bold text-accent py-7">Exceptional Dental <br /> Care, on Your Terms</h1>
            <p className="pb-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryButton>Get Started</PrimaryButton>
        </div>
    </div>
  );
};

export default Treatment;
