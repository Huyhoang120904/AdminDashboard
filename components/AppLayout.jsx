import React, { useEffect, useState } from "react";

import Menu from "./common/Menu";
import { Outlet } from "react-router-dom";
import Header from "./common/Header";

function AppLayout() {
  return (
    <div className="grid grid-cols-[1fr_4fr] min-h-screen gap-4 p-6 bg-gray-50">
      <div className="col-span-1 menu ring-2 ring-gray-200 bg-white rounded-lg shadow-md">
        <Menu />
      </div>
      <div className="col-span-1 grid grid-rows-[80px_1fr] gap-4">
        <div className="row-span-1 header bg-white rounded-lg shadow-md">
          <Header />
        </div>
        <div className="row-span-1 content p-6 bg-white rounded-lg shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
