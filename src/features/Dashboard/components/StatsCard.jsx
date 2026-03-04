import React from "react";

export default function StatsCard({ label, value, Icon, color, trend }) {
  return (
    <div className={`stat-card stat-${color}`}>
      <div className="stat-icon">
        <Icon />
      </div>
      <div className="stat-content">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
        <p className="stat-trend">{trend} from last month</p>
      </div>
    </div>
  );
}
