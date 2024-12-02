import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
const IconButton = (props) => {
  const { icon, label } = props;
  return (
    <button className="font-bold flex items-center space-x-2 hover:text-white bg-[#E50000] rounded-lg p-4 text-white">
      <PlayIcon className="w-4 h-4 mr-2"/>
      {label}
    </button>
  );
};

export default IconButton;
