import { Link } from "react-router-dom";
import FourthBoxes from "./FourthBoxes";

const Sixth = () => {
  return (
    <div className="fourth">
      <div className=" flex flex-col justify-top items-center mt-16">
        <div className="max-w-7xl w-full p-8 text-left">
          <h1 className="text-5xl md:ml-[150px] font-bold text-stone-700 mb-5">
            Learning paths based on your answers{" "}
          </h1>
          <p className="md:ml-[400px]">
            Choose one to get started , You can switch anytime
          </p>
          <div className="cards flex justify-between m-20">
            <FourthBoxes content="Introductory" heading="5X1/2"></FourthBoxes>
            <FourthBoxes content="Foundational" heading="3x+5=4"></FourthBoxes>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sixth;
