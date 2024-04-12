import FourthBox from "./FourthBoxes";

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
            <div className="fourth-box mt-20 h-[200px] pb-0 border-2 border-gray-400 p-5">
              <div className="box">
                <div className="heading">
                  <h1>Foundational Math</h1>
                </div>
                <div className="box-content">
                  Build your foundational skills in algebra, geometry, and
                  probability
                </div>
              </div>
            </div>
            <div className="cards flex justify-between m-20">
              <div className="fourth-box h-[200px] border-2 border-gray-400 p-5">
                <div className="box">
                  <div className="heading">
                    <h1>Mathematical Thinking</h1>
                  </div>
                  <div className="box-content">
                    Build your foundational skills in algebra, geometry, and
                    probability
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sixth;
