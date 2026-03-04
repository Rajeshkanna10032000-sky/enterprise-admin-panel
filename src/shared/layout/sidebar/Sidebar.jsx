import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTh,
  FaUsers,
  FaCog,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { IconButton, Tooltip } from "../../ui";

export default function Sidebar({
  open,
  collapsed,
  toggleCollapse,
  closeSidebar,
}) {
  const location = useLocation();

  const links = [
    { path: "/", label: "Dashboard", icon: FaTh },
    { path: "/users", label: "Users", icon: FaUsers },
  ];

  return (
    <aside
      className={`sidebar ${open ? "open" : ""} ${collapsed ? "collapsed" : ""}`}
    >
      {/* LOGO */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-circle">A</span>
          {!collapsed && <span className="logo-text">Admin</span>}
        </div>

        <Tooltip text="Close Sidebar">
          <IconButton
            onClick={closeSidebar}
            icon={() => <>✕</>}
            className="close-btn"
          />
        </Tooltip>
      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeSidebar}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              <Icon className="nav-icon" />
              {!collapsed && <span className="nav-label">{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <Link to="/settings" className="nav-link" onClick={closeSidebar}>
          <FaCog className="nav-icon" />
          {!collapsed && <span className="nav-label">Settings</span>}
        </Link>
      </div>
    </aside>
  );
}
