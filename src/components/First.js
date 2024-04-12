import Options from "./Options";
import MainComponent from "./MainComponent";
import { Link } from "react-router-dom";
import { useState } from "react";

const First = () => {
  const iconUrlOne =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQMZnWTqKuBT9iluwbaHxZeqYIjlaFbLlpQ&s";
  return (
    <div className="first">
      <MainComponent />

      <Options description="Student or soon to be enrolled" icon={iconUrlOne} />
      <Options description="Professional pursuing a career" icon={iconUrlOne} />
      <Options description="Parent of a school-age child" icon={iconUrlOne} />
      <Options description="Lifelong Learner" icon={iconUrlOne} />
      <Options description="Teacher" icon={iconUrlOne} />
      <Options description="Other" icon={iconUrlOne} />
      <Link to="/second">
        {" "}
        <button className=" md:ml-[600px]  ml-[200px] p-3 w-30 rounded-md bg-blue-100">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default First;
