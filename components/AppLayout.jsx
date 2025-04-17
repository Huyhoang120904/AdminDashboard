import React, { useEffect, useState } from "react";
import overviewLogo from "../assets/overviewLogo.png";
import OverviewCard from "./OverviewCard";
import detailedReport from "../assets/detailedReport.png";

import {
  ShoppingCartOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DataTable from "./DataTable";

function AppLayout() {
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dashboardSummary")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOverview(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-[1fr_4fr] min-h-screen gap-2 p-10">
      <div className="col-span-1 menu ring-2 ring-gray-200"></div>
      <div className="col-span-1 grid grid-rows-[80px_1fr] gap-3 ring-2 ring-gray-200">
        <div className="row-span-1  header"></div>
        <div className="row-span-1  content p-7 space-y-3">
          <div className="flex space-x-2">
            <img src={overviewLogo}></img>
            <h1 className="text-2xl font-bold">Overview</h1>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {overview && (
              <>
                <OverviewCard
                  obj={overview.turnover}
                  title={"Turnover"}
                  bgColor={"bg-pink-200"}
                  ringColor={"ring-pink-500"}
                  icon={
                    <ShoppingCartOutlined
                      style={{
                        color: "oklch(0.67 0.3 2.17)",
                        fontSize: "25px",
                      }}
                    />
                  }
                  money={true}
                />
                <OverviewCard
                  obj={overview.profit}
                  title={"Profit"}
                  bgColor={"bg-blue-200"}
                  ringColor={"ring-blue-500"}
                  icon={
                    <MoneyCollectOutlined
                      style={{
                        color: "oklch(62.3% 0.214 259.815)",
                        fontSize: "25px",
                      }}
                    />
                  }
                  money={true}
                />
                <OverviewCard
                  obj={overview.newCustomers}
                  title={"New Customers"}
                  bgColor={"bg-blue-200"}
                  ringColor={"ring-blue-500"}
                  icon={
                    <UserOutlined
                      style={{
                        color: "oklch(62.3% 0.214 259.815)",
                        fontSize: "25px",
                      }}
                    />
                  }
                  money={false}
                />
              </>
            )}
          </div>
          <div className="flex space-x-2">
            <img src={detailedReport}></img>
            <h1 className="text-2xl font-bold">Detailed Report</h1>
          </div>
          <div className="datatable">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
