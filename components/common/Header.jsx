import React from "react";
import search from "../../assets/Search.png";
import bell from "../../assets/bell.png";
import question from "../../assets/question.png";
import avt from "../../assets/avt.png";

function Header() {
  return (
    <div className="header-container p-5 flex justify-between">
      <h1 className="text-3xl font-bold text-pink-500">Dashboard</h1>
      <div className="flex justify-center items-center space-x-3">
        <div className="search-bar bg-gray-100 rounded-[8px] text-gray-600 text-[15px] w-80 flex justify-between items-center py-2 px-2">
          <img src={search} alt="Search Icon" />
          <input
            type="text"
            className="outline-none w-70"
            placeholder="Search..."
          />
        </div>
        <img src={bell} className="icon w-[25px] h-[25px]" alt="Bell Icon" />
        <img
          src={question}
          className="icon w-[25px] h-[25px]"
          alt="Question Icon"
        />
        <img src={avt} className="icon w-[25px] h-[25px]" alt="Avatar Icon" />
      </div>
    </div>
  );
}

export default Header;
