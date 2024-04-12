import { Link } from "react-router-dom";
import { useState } from "react";
import MainComponentSecond from "./MainComponentSecond";

const Second = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="second">
      <MainComponentSecond />
      <div
        className={`border ${
          isClicked
            ? "border-yellow-600 border-10 border-solid shadow-slate-700"
            : "border-gray-400"
        } Options flex items-center h-30 w-50 m-20 p-3 justify-center border-6 border-gray p-4`}
        onClick={handleClick}
      >
        <h1>Learning specific skills to advance my career</h1>
      </div>
      <div
        className={`border ${
          isClicked
            ? "border-yellow-600 border-10 border-solid shadow-slate-700"
            : "border-gray-400"
        } Options flex items-center h-30 w-50 m-20 p-3 justify-center border-6 border-gray p-4`}
        onClick={handleClick}
      >
        <h1>Exploring new topics I'm interested in</h1>
      </div>
      <div
        className={`border ${
          isClicked
            ? "border-yellow-600 border-10 border-solid shadow-slate-700"
            : "border-gray-400"
        } Options flex items-center h-30 w-50 m-20 p-3 justify-center border-6 border-gray p-4`}
        onClick={handleClick}
      >
        <h1>Refreshing my math foundations</h1>
      </div>
      <div
        className={`border ${
          isClicked
            ? "border-yellow-600 border-10 border-solid shadow-slate-700"
            : "border-gray-400"
        } Options flex items-center h-30 w-50 m-20 p-3 justify-center border-6 border-gray p-4`}
        onClick={handleClick}
      >
        <h1>Exercising my brain to stay sharp</h1>
      </div>
      <div
        className={`border ${
          isClicked
            ? "border-yellow-600 border-10 border-solid shadow-slate-700"
            : "border-gray-400"
        } Options flex items-center h-30 w-50 m-20 p-3 justify-center border-6 border-gray p-4`}
        onClick={handleClick}
      >
        <h1>Something else !</h1>
      </div>
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
