import React from "react";

function OverviewCard({ obj, bgColor, title, money, ringColor, icon }) {
  // Format number with commas
  const formatNumber = (value) => {
    return value ? value.toLocaleString() : value;
  };

  return (
    <div
      className={`${
        bgColor ? bgColor : "bg-stone-300"
      } relative space-y-1 h-35 p-5 rounded-2xl`}
    >
      <h1 className="text-[18px] font-bold">{title && title}</h1>
      <span className="text-4xl">
        {money ? "$" : ""}
        {obj && formatNumber(obj.value)}
      </span>
      <br></br>
      <span className="text-gray-400 text-[18px]">
        <b className="text-green-400">{obj && obj.changePercentage}%</b> period
        of change
      </span>
      <div
        className={`${
          ringColor ? ringColor : "ring-gray-400"
        } ring-2 absolute right-5 top-5 aspect-square h-8 rounded-[5px] flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  );
}

export default OverviewCard;
