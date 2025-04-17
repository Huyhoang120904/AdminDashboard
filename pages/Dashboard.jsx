import React, { useEffect, useState } from "react";
import OverviewCard from "../components/OverviewCard";
import overviewLogo from "../assets/overviewLogo.png";
import detailedReport from "../assets/detailedReport.png";
import DataTable from "../components/DataTable";

import {
  ShoppingCartOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";

import AddNewButton from "../components/AddNewButton";

function Dashboard() {
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
    <>
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
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <img src={detailedReport}></img>
          <h1 className="text-2xl font-bold w-[300px]">Detailed Report</h1>
        </div>
        <div className="flex space-x-2 items-center justify-center">
          <AddNewButton />
        </div>
      </div>
      <div className="datatable">
        <DataTable />
      </div>
    </>
  );
}

export default Dashboard;
