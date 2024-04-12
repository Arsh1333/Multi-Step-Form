import { Link } from "react-router-dom";
// import { useState } from "react";
import MainComponentSecond from "./MainComponentSecond";
import Options from "./Options";

const Second = (props) => {
  const iconUrlOne =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQMZnWTqKuBT9iluwbaHxZeqYIjlaFbLlpQ&s";
  return (
    <div className="second">
      <MainComponentSecond />
      <Options description="Learning specific skill" icon={iconUrlOne} />
      <Options
        description="Exploring new topics I am intrested in "
        icon={iconUrlOne}
      />
      <Options description="Refreshing my math foundations" icon={iconUrlOne} />
      <Options
        description="Exercising my brain to stay sharp"
        icon={iconUrlOne}
      />

      <Options description="Other" icon={iconUrlOne} />
      <Link to="/third">
        {" "}
        <button className=" md:ml-[600px] ml-[170px] p-3 w-30 rounded-md bg-blue-100">
          Continue
        </button>
      </Link>
    </div>
  );
};
export default Second;
