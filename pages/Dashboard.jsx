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
      <div className="flex items-center space-x-3 mb-6">
        <img src={overviewLogo} alt="Overview Logo" />
        <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {overview && (
          <>
            <OverviewCard
              obj={overview.turnover}
              title={"Turnover"}
              bgColor={"bg-pink-100"}
              ringColor={"ring-pink-400"}
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "#ec4899",
                    fontSize: "24px",
                  }}
                />
              }
              money={true}
            />
            <OverviewCard
              obj={overview.profit}
              title={"Profit"}
              bgColor={"bg-blue-100"}
              ringColor={"ring-blue-400"}
              icon={
                <MoneyCollectOutlined
                  style={{
                    color: "#3b82f6",
                    fontSize: "24px",
                  }}
                />
              }
              money={true}
            />
            <OverviewCard
              obj={overview.newCustomers}
              title={"New Customers"}
              bgColor={"bg-green-100"}
              ringColor={"ring-green-400"}
              icon={
                <UserOutlined
                  style={{
                    color: "#10b981",
                    fontSize: "24px",
                  }}
                />
              }
              money={false}
            />
          </>
        )}
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <img src={detailedReport} alt="Detailed Report" />
          <h1 className="text-2xl font-bold text-gray-800">Detailed Report</h1>
        </div>
        <AddNewButton />
      </div>
      <div className="datatable">
        <DataTable />
      </div>
    </>
  );
}

export default Dashboard;
