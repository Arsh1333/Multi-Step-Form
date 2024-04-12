import { Link } from "react-router-dom";
import FourthBoxes from "./FourthBoxes";

const Fourth = () => {
  return (
    <div className="fourth">
      <div className="flex flex-col justify-center items-center mt-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-stone-700 mb-5 text-center">
          What is your math comfort level?
        </h1>
        <p className="text-center">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </p>
        <div className="cards flex flex-col md:flex-row justify-center md:justify-between mt-8 w-full md:max-w-3xl">
          <FourthBoxes content="Introductory" heading="5X1/2" />
          <FourthBoxes content="Foundational" heading="3x+5=4" />
          <FourthBoxes content="Intermediate" heading="5X1/2" />
          <FourthBoxes content="Calculus" heading="5X1/2" />
        </div>
      </div>
      <Link to="/fifth">
        {" "}
        <button className=" md:ml-[600px] ml-[170px] mt-9 p-3 w-30 rounded-md bg-blue-100">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Fourth;
