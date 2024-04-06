import React from "react";

const MainComponent = () => {
  return (
    <div className=" flex flex-col justify-top items-center mt-16">
      <div className="max-w-7xl w-full p-8 text-left">
        <h1 className="text-5xl md:ml-[250px] font-bold text-stone-700 mb-5">
          Which describes you the best?{" "}
        </h1>
        <p className="md:ml-[450px]">
          This will help us personalize your experience
        </p>
      </div>
    </div>
  );
};

export default MainComponent;
