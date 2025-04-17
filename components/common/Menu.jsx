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
    <div className="flex flex-col justify-between min-h-screen bg-gray-50">
      {/* Upper Menu */}
      <div className="upper-menu">
        <div className="p-3 flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        <div className="nav p-5 space-y-2 text-lg text-gray-700">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "hover:bg-white hover:text-gray-600 text-gray-500"
              } flex items-center p-3 rounded-md transition-colors duration-300 ease-in-out`
            }
            to={"/dashboard"}
          >
            <img src={dashboard} className="mr-3 w-5 h-5" alt="Dashboard" />
            <span className="font-medium">Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "hover:bg-white hover:text-gray-600 text-gray-500"
              } flex items-center p-3 rounded-md transition-colors duration-300 ease-in-out `
            }
            to={"/project"}
          >
            <img src={project} className="mr-3 w-5 h-5" alt="Project" />
            <span className="font-medium">Project</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "hover:bg-white hover:text-gray-600 text-gray-500"
              } flex items-center p-3 rounded-md transition-colors duration-300 ease-in-out`
            }
            to={"/teams"}
          >
            <img src={team} className="mr-3 w-5 h-5" alt="Teams" />
            <span className="font-medium">Teams</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "hover:bg-white hover:text-gray-600 text-gray-500"
              } flex items-center p-3 rounded-md transition-colors duration-300 ease-in-out`
            }
            to={"/analytics"}
          >
            <img src={analytist} className="mr-3 w-5 h-5" alt="Analytics" />
            <span className="font-medium">Analytics</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "hover:bg-white hover:text-gray-600 text-gray-500"
              } flex items-center p-3 rounded-md transition-colors duration-300 ease-in-out`
            }
            to={"/mess"}
          >
            <img src={mess} className="mr-3 w-5 h-5" alt="Messages" />
            <span className="font-medium">Messages</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-pink-600 text-white font-bold shadow-md"
                  : "hover:bg-white hover:text-gray-600 text-gray-500"
              } flex items-center p-3 rounded-md transition-colors duration-300 ease-in-out`
            }
            to={"/intergrations"}
          >
            <img
              src={intergration}
              className="mr-3 w-5 h-5"
              alt="Integrations"
            />
            <span className="font-medium">Intergrations</span>
          </NavLink>
        </div>
      </div>

      {/* Banner */}
      <div className="flex justify-center items-center p-5">
        <div className="bg-pink-50 p-6 space-y-3 rounded-lg shadow-md w-full max-w-sm">
          <img src={banner} alt="Banner" className="mx-auto h-20" />
          <p className="text-center font-semibold text-gray-700">
            New version V2.0 is available!
          </p>
          <button className="bg-pink-600 text-white font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition-colors duration-300 w-full">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
