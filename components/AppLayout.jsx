import React from "react";

function AppLayout() {
  return (
    <div className="grid grid-cols-[1fr_4fr] min-h-screen gap-2">
      <div className="col-span-1 bg-stone-300 menu"></div>
      <div className="col-span-1 grid grid-rows-[80px_1fr] gap-3">
        <div className="row-span-1 bg-stone-300 header"></div>
        <div className="row-span-1 bg-stone-300 content"></div>
      </div>
    </div>
  );
}

export default AppLayout;
