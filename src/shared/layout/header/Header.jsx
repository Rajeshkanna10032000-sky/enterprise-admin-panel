import React from "react";
import { useTheme } from "../../../app/providers/ThemeProvider";
import {
  FaSun,
  FaMoon,
  FaBell,
  FaBars,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import {
  IconButton,
  SearchInput,
  Tooltip,
  Badge,
  Avatar,
  ProfileMenu,
  ProfileDropdown,
} from "../../ui";

export default function Header({ toggleSidebar, toggleCollapse, collapsed }) {
  const { dark, toggleTheme } = useTheme();

  const [notificationCount] = React.useState(3);
  const [profileOpen, setProfileOpen] = React.useState(false);

  const user = {
    name: "Ryan",
    role: "Admin",
    avatarSrc: "", // optional image url
    status: "Online", // text or dot
    statusVariant: "success",
    statusDot: true, // true = small dot instead of text
  };

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        {/* MOBILE MENU */}
        <Tooltip text="Open menu">
          <IconButton
            icon={FaBars}
            onClick={toggleSidebar}
            className="mobile-toggle"
          />
        </Tooltip>

        {/* DESKTOP COLLAPSE */}
        <Tooltip text="Toggle sidebar">
          <IconButton
            icon={collapsed ? FaAngleDoubleRight : FaAngleDoubleLeft}
            onClick={toggleCollapse}
            className="desktop-toggle"
          />
        </Tooltip>

        <div className="header-logo">
          <span className="logo-badge">AD</span>
          <h1 className="logo-text">Admin Dashboard</h1>
        </div>
      </div>

      {/* CENTER */}
      <div className="header-center">
        <SearchInput placeholder="Search anything..." />
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {/* Notifications */}
        <Tooltip text="Notifications">
          <IconButton
            icon={FaBell}
            badge={notificationCount}
            className="notification-btn"
          />
        </Tooltip>

        {/* Theme toggle */}
        <Tooltip text="Toggle theme">
          <IconButton
            icon={dark ? FaSun : FaMoon}
            onClick={toggleTheme}
            className="theme-btn"
          />
        </Tooltip>

        {/* User Avatar + Separate Status Badge */}
        <Tooltip text={user.name}>
          <div
            className="user-avatar-wrapper"
            onClick={() => setProfileOpen((v) => !v)}
          >
            <Avatar name={user.name} src={user.avatarSrc} size={40} />

            {/* Status Badge outside avatar */}
            <Badge
              value={user.status}
              variant={user.statusVariant}
              dot={user.statusDot}
              className="user-status-badge"
            />
          </div>
        </Tooltip>
      </div>

      {/* Profile Dropdown */}
      <ProfileDropdown open={profileOpen} onClose={() => setProfileOpen(false)}>
        <ProfileMenu
          name={user.name}
          role={user.role}
          avatarSrc={user.avatarSrc}
        />
      </ProfileDropdown>
    </header>
  );
}
