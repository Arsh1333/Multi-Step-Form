import { Link } from "react-router-dom";
import Five from "./five.png";

const Fifth = () => {
  return (
    <div className="third">
      <div className="thirdContent flex">
        <img src={Five} className="m-20" alt="" />
        <div className="third-content">
          <h1 className="ml-40 mt-40 font-bold text-3xl mb-10">
            You are on your way
          </h1>
          <p className="ml-40 mr-10 italic">
            "Through its engaging and well-structures courses, Brilliant has
            taught me mathematical conceptsthat I previouslystruggled to
            understand. I now feel confident approaching both technical job
            interviews and real world problem solving situation."
          </p>
          <p className="ml-40 mr-10 mt-10 italic">-Jacob</p>
        </div>
      </div>
      <Link to="/sixth">
        {" "}
        <button className=" md:ml-[600px] ml-[170px] p-3 w-30 rounded-md bg-blue-100">
          Continue
        </button>
      </Link>
    </div>
  );
};
export default Fifth;
