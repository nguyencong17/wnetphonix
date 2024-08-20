import React from "react";
import IconButton from "../IconButton/IconButton";
import BGCTA from "../../../public/cta/cta.png";
import Image from "next/image";
function Cta() {
  return (
    <div className="cta">
      <div className="container mx-auto py-[128px]">
        <div className="py-[100px] px-[80px] relative">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <Image src={BGCTA} alt="cta" className="rounded-lg" />
          </div>
          <div className="flex justify-between items-center relative z-2">
          <div>
            <h2 className="mb-4">Start your free trial today!</h2>
            <p>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <IconButton label={"Start a Free Trial"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
