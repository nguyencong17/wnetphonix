import React from "react";
import IconButton from "../IconButton/IconButton";
import BGCTA from "../../../public/cta/cta.png";
import Image from "next/image";
function Cta() {
  return (
    <div className="cta">
      <div className="container mx-auto py-[36px] 2xl:py-[128px] px-4">
        <div className="p-[48px] 2xl:py-[100px] 2xl:px-[80px] relative">
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <Image src={BGCTA} alt="cta" className="rounded-lg w-full h-full object-cover" />
          </div>
          <div className="flex flex-col 2xl:flex-row justify-start 2xl:justify-between items-start 2xl:items-center gap-4 relative z-2">
          <div>
            <h2 className="mb-4 text-[24px] 2xl:text-[48px]">Start your free trial today!</h2>
            <p>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <IconButton className="text-left" label={"Start a Free Trial"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
