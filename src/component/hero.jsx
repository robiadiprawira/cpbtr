import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center py-120 gap-16 bg-hero-pattern bg-cover bg-no-repeat h-622">
        <div className="w-[860px] flex flex-col gap-2">
          <div className="text-5xl font-bold text-center leading-snug">
            Ready to Grow With Batara Guru
            <span className="block"> Technology</span>
          </div>
          <div className="text-center text-lg font-thin tracking-wider">
            Discuss now and we help digitize your business goal with system
            <span className="block">
              security guarantees to improve your company productivity
            </span>
          </div>
        </div>
        <button className="bg-buttonCollor py-4 px-8 font-bold">
          Consultation Now
        </button>
      </div>
    </>
  );
};

export default Hero;
