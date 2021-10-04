import React from "react";
import { sidebarData } from "./data/sidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {sidebarData.map((item) => (
          <li
            className="row"
            id={window.location.pathname === item.link ? "active" : null}
            key={item.title}
            onClick={() => (window.location.pathname = item.link)}
          >
            <div id="icon">{item.icon}</div>
            <div id="title">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
