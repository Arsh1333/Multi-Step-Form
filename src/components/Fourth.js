import { Link } from "react-router-dom";
import FourthBoxes from "./FourthBoxes";

const Fourth = () => {
  return (
    <div className="fourth">
      <div className=" flex flex-col justify-top items-center mt-16">
        <div className="max-w-7xl w-full p-8 text-left">
          <h1 className="text-5xl md:ml-[220px] font-bold text-stone-700 mb-5">
            What is your math comfort level?{" "}
          </h1>
          <p className="md:ml-[330px]">
            Choose the highest level you feel confident in - you can always
            adjust later.
          </p>
          <div className="cards flex justify-between m-20">
            <FourthBoxes content="Introductory" heading="5X1/2"></FourthBoxes>
            <FourthBoxes content="Foundational" heading="3x+5=4"></FourthBoxes>
            <FourthBoxes content="Intermediate" heading="5X1/2"></FourthBoxes>
            <FourthBoxes content="Calculus" heading="5X1/2"></FourthBoxes>
          </div>
        </div>
      </div>
      <Link to="/fifth">
        {" "}
        <button className=" md:ml-[600px] ml-[170px] p-3 w-30 rounded-md bg-blue-100">
          Continue
        </button>
      </Link>
    </div>
  );
};
export default Fourth;
