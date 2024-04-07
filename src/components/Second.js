import { Link } from "react-router-dom";
import MainComponentSecond from "./MainComponentSecond";

const Second = (props) => {
  return (
    <div className="second">
      <MainComponentSecond />
      <div className="Options flex items-center w-50 m-20 p-3 justify-center border-4 border-gray">
        <h1>Learning specific skills to advance my career</h1>
      </div>
      <div className="Options flex items-center w-50 m-20 p-3 justify-center border-4 border-gray">
        <h1>Exploring new topics I'm interested in</h1>
      </div>
      <div className="Options flex items-center w-50 m-20 p-3 justify-center border-4 border-gray">
        <h1>Refreshing my math foundations</h1>
      </div>
      <div className="Options flex items-center w-50 m-20 p-3 justify-center border-4 border-gray">
        <h1>Exercising my brain to stay sharp</h1>
      </div>
      <div className="Options flex items-center w-50 m-20 p-3 justify-center border-4 border-gray">
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
