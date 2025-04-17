import React, { useEffect, useState } from "react";

import Menu from "./common/Menu";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[1fr_4fr] min-h-screen gap-2 p-10">
      <div className="col-span-1 menu ring-2 ring-gray-200">
        <Menu />
      </div>
      <div className="col-span-1 grid grid-rows-[80px_1fr] gap-3 ring-2 ring-gray-200">
        <div className="row-span-1  header">
          <Header />
        </div>
        <div className="row-span-1  content p-7 space-y-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
