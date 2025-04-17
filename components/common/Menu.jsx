import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import project from "../../assets/Folder.png";
import dashboard from "../../assets/overviewLogo.png";
import team from "../../assets/Groups.png";
import analytist from "../../assets/analy.png";
import mess from "../../assets/Chat.png";
import intergration from "../../assets/Code.png";
import banner from "../../assets/Group.png";

function Menu() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="upper-menu">
        {" "}
        <div className="p-3 flex items-start">
          <img src={logo}></img>
        </div>
        <div className="nav p-5 space-y-[5px] text-lg text-gray-500">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : ""
              } flex p-3 rounded-[5px]`
            }
            to={"/dashboard"}
          >
            <img src={dashboard} className="mr-2"></img>{" "}
            <span className="font-semibold">Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : ""
              } flex p-3 rounded-[5px]`
            }
            to={"/project"}
          >
            <img src={project} className="mr-2"></img>{" "}
            <span className="font-semibold">Project</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : ""
              } flex p-3 rounded-[5px]`
            }
            to={"/teams"}
          >
            <img src={team} className="mr-2"></img>{" "}
            <span className="font-semibold">Teams</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : ""
              } flex p-3 rounded-[5px]`
            }
            to={"/analytics"}
          >
            <img src={analytist} className="mr-2"></img>{" "}
            <span className="font-semibold">Analytics</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : ""
              } flex p-3 rounded-[5px]`
            }
            to={"/mess"}
          >
            <img src={mess} className="mr-2"></img>{" "}
            <span className="font-semibold">Messages</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "bg-pink-500 text-white" : ""
              } flex p-3 rounded-[5px]`
            }
            to={"/intergrations"}
          >
            <img src={intergration} className="mr-2"></img>{" "}
            <span className="font-semibold">Intergrations</span>
          </NavLink>
        </div>
      </div>
      <div className="flex justify-center items-center p-10">
        <div className="bg-blue-200 p-10 space-y-2">
          <img src={banner}></img>
          <p className="text-center font-bold">V2.0 is available</p>
          <button className="text-blue-500 flex justify-center items-center bg-white w-full rounded-[5px] ring-2 ring-blue-700 font-bold hover:bg-blue-700 hover:text-white transition-all duration-500">
            Try now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
