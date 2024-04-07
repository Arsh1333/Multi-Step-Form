import { Link } from "react-router-dom";
import Pulley from "./pulley.png";

const Third = (props) => {
  return (
    <div className="third">
      <div className="thirdContent flex">
        <img src={Pulley} alt="" />
        <div className="third-content">
          <h1 className="ml-40 mt-40 font-bold text-3xl mb-10">
            You are in the right place
          </h1>
          <p className="ml-40 mr-10">
            Brilliant gets you hands-on help improve your professional skills
            and knowledge.You'll interact with concepts and solve fun problems
            in math,science and computer science
          </p>
        </div>
      </div>
      <Link to="/fourth">
        {" "}
        <button className=" md:ml-[600px] ml-[170px] p-3 w-30 rounded-md bg-blue-100">
          Continue
        </button>
      </Link>
    </div>
  );
};
export default Third;
