import React from "react";
import { FaUsers, FaChartLine, FaClock, FaArrowUp } from "react-icons/fa";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Users",
      value: "12,543",
      icon: FaUsers,
      color: "primary",
      trend: "+12%",
    },
    {
      label: "Revenue",
      value: "$45,231",
      icon: FaChartLine,
      color: "success",
      trend: "+8.5%",
    },
    {
      label: "Active Sessions",
      value: "2,847",
      icon: FaClock,
      color: "info",
      trend: "+3.2%",
    },
    {
      label: "Growth Rate",
      value: "24.5%",
      icon: FaArrowUp, // <-- replaced
      color: "warning",
      trend: "+4.1%",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Welcome back! Here's your performance overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`stat-card stat-${stat.color}`}>
              <div className="stat-icon">
                <Icon />
              </div>
              <div className="stat-content">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-trend">{stat.trend} from last month</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h3 className="chart-title">Revenue Trend</h3>
          <div className="chart-placeholder">
            {/* Add your chart library here (e.g., Chart.js, Recharts) */}
            <p>Chart will be displayed here</p>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">User Activity</h3>
          <div className="chart-placeholder">
            <p>Chart will be displayed here</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="activity-card">
        <h3 className="activity-title">Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-details">
              <p className="activity-text">New user registered</p>
              <p className="activity-time">2 hours ago</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-details">
              <p className="activity-text">Revenue milestone reached</p>
              <p className="activity-time">5 hours ago</p>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-details">
              <p className="activity-text">System update completed</p>
              <p className="activity-time">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* CSS for Dashboard Page */
/*
.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.dashboard-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0;
}

html.dark .page-title {
  color: var(--dark-text);
}

.page-subtitle {
  font-size: 14px;
  color: var(--gray-500);
  margin: 0;
}

html.dark .page-subtitle {
  color: var(--dark-text-secondary);
}

// Stats Grid
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.stat-card {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border-left: 4px solid transparent;
}

html.dark .stat-card {
  background-color: var(--dark-surface);
}

.stat-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.stat-primary {
  border-left-color: var(--primary);
}

.stat-success {
  border-left-color: var(--success);
}

.stat-info {
  border-left-color: var(--info);
}

.stat-warning {
  border-left-color: var(--warning);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  flex-shrink: 0;
}

.stat-primary .stat-icon {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary);
}

.stat-success .stat-icon {
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.stat-info .stat-icon {
  background-color: rgba(6, 182, 212, 0.1);
  color: var(--info);
}

.stat-warning .stat-icon {
  background-color: rgba(245, 158, 11, 0.1);
  color: var(--warning);
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.stat-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-600);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

html.dark .stat-label {
  color: var(--dark-text-secondary);
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  color: var(--gray-900);
  margin: 0;
}

html.dark .stat-value {
  color: var(--dark-text);
}

.stat-trend {
  font-size: 12px;
  color: var(--success);
  margin: 0;
  font-weight: 500;
}

// Charts Section
.charts-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

.chart-card {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

html.dark .chart-card {
  background-color: var(--dark-surface);
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 24px 0;
}

html.dark .chart-title {
  color: var(--dark-text);
}

.chart-placeholder {
  height: 300px;
  background-color: var(--gray-50);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
}

html.dark .chart-placeholder {
  background-color: var(--dark-surface-light);
  color: var(--dark-text-secondary);
}

// Activity Section
.activity-card {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

html.dark .activity-card {
  background-color: var(--dark-surface);
}

.activity-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-900);
  margin: 0 0 20px 0;
}

html.dark .activity-title {
  color: var(--dark-text);
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--gray-200);
}

html.dark .activity-item {
  border-bottom-color: var(--dark-surface-light);
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--primary);
  margin-top: 6px;
  flex-shrink: 0;
}

.activity-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.activity-text {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-800);
  margin: 0;
}

html.dark .activity-text {
  color: var(--dark-text);
}

.activity-time {
  font-size: 12px;
  color: var(--gray-500);
  margin: 0;
}

html.dark .activity-time {
  color: var(--dark-text-secondary);
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .charts-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 24px;
  }
}
*/
