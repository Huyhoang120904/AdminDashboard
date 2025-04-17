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
      } relative space-y-2 h-40 p-6 rounded-lg shadow-md`}
    >
      <h1 className="text-lg font-semibold text-gray-800">{title && title}</h1>
      <span className="text-3xl font-bold text-gray-900">
        {money ? "$" : ""}
        {obj && formatNumber(obj.value)}
      </span>
      <br></br>
      <span className="text-sm text-gray-500">
        <b className="text-green-500">{obj && obj.changePercentage}%</b> period
        of change
      </span>
      <div
        className={`${
          ringColor ? ringColor : "ring-gray-400"
        } ring-2 absolute right-5 top-5 aspect-square h-10 rounded-full flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  );
}

export default OverviewCard;
