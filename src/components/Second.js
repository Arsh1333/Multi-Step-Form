import { Link } from "react-router-dom";

const Second = (props) => {
  return (
    <div className="Options flex items-center w-50 m-20 p-3 justify-center border-4 border-gray">
      <h1>Second Page</h1>
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
