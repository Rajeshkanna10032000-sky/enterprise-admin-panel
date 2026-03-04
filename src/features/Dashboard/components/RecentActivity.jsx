import React from "react";

const activities = [
  { text: "New user registered", time: "2 hours ago" },
  { text: "Revenue milestone reached", time: "5 hours ago" },
  { text: "System update completed", time: "1 day ago" },
];

export default function RecentActivity() {
  return (
    <div className="activity-card">
      <h3 className="activity-title">Recent Activity</h3>
      <div className="activity-list">
        {activities.map((act, index) => (
          <div key={index} className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-details">
              <p className="activity-text">{act.text}</p>
              <p className="activity-time">{act.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
