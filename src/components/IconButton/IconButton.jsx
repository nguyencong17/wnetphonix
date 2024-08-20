import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
const IconButton = (props) => {
  const { icon, label } = props;
  return (
    <button className="flex items-center space-x-2 hover:text-white bg-[#E50000] rounded-lg px-8 py-4 text-white">
      <PlayIcon className="w-7 h-7"/>
      {label}
    </button>
  );
};

export default IconButton;
