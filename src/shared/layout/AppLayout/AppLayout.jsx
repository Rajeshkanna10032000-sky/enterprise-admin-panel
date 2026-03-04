import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "../header/header.css";
import "../sidebar/sidebar.css";
import "../footer/footer.css";
import "../../../styles/base/variables.css";
import "../../../styles/base/global.css";
import "../../../styles/base/utilities.css";
import "../../../styles/base/responsive.css";
import "./Applayout.css";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className={`app-layout ${sidebarCollapsed ? "collapsed" : ""}`}>
      {/* BACKDROP OVERLAY */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <Sidebar
        open={sidebarOpen}
        collapsed={sidebarCollapsed}
        toggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        closeSidebar={closeSidebar}
      />

      <div className="main-wrapper">
        <Header
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          toggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          collapsed={sidebarCollapsed}
          isMobile={window.innerWidth <= 768}
        />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
