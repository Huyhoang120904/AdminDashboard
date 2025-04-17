import React from "react";
import search from "../../assets/Search.png";
import bell from "../../assets/bell.png";
import question from "../../assets/question.png";
import avt from "../../assets/avt.png";

function Header() {
  return (
    <div className="p-5 flex justify-between">
      <h1 className="text-3xl font-bold text-pink-500">Dashboard</h1>
      <div className="flex justify-center items-center space-x-3">
        <div className="bg-gray-100 rounded-[8px] text-gray-600 text-[15px] w-80 flex justify-between items-center py-2 px-2">
          <img src={search}></img>
          <input
            type="text"
            className="outline-none w-70"
            placeholder="Search..."
          ></input>
        </div>
        <img src={bell} className="w-[25px] h-[25px] "></img>
        <img src={question} className="w-[25px] h-[25px] "></img>
        <img src={avt} className="w-[25px] h-[25px] "></img>
      </div>
    </div>
  );
}

export default Header;
