import React from "react";
import { FaUsers, FaChartLine, FaClock, FaArrowUp } from "react-icons/fa";

import StatsCard from "../components/StatsCard";
import ChartsSection from "../components/ChartsSection";
import RecentActivity from "../components/RecentActivity";
import useDashboardData from "../hooks/useDashboardData";
import "./Dashboard.css";

export default function Dashboard() {
  const { stats } = useDashboardData();

  // Map icon strings to React icons
  const iconMap = { FaUsers, FaChartLine, FaClock, FaArrowUp };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => {
          const Icon = iconMap[stat.icon];
          return <StatsCard key={idx} {...stat} Icon={Icon} />;
        })}
      </div>

      <ChartsSection />
      <RecentActivity />
    </div>
  );
}
