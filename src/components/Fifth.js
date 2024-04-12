import { Link } from "react-router-dom";
import Five from "./five.png";

const Fifth = () => {
  return (
    <div className="third">
      <div className="flex flex-col md:flex-row items-center">
        <img src={Five} className="m-8 md:m-20" alt="" />
        <div className="md:ml-8">
          <h1 className="font-bold text-3xl mb-4">You are on your way</h1>
          <p className="italic mb-4">
            "Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real-world problem-solving situations."
          </p>
          <p className="italic">- Jacob</p>
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
