import React from "react";
import { Link } from "react-router-dom";
import Pulley from "./pulley.png";

const Third = (props) => {
  return (
    <div className="third  py-8 px-4 md:px-0">
      <div className="container mx-auto md:flex items-center">
        <img src={Pulley} alt="" className="md:mr-8 mb-4 md:mb-0" />
        <div className="md:w-1/2">
          <h1 className="font-bold text-3xl mb-4">
            You are in the right place
          </h1>
          <p className="mb-4">
            Brilliant gets you hands-on help improve your professional skills
            and knowledge. You'll interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
          <Link
            to="/fourth"
            className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-md"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Third;
