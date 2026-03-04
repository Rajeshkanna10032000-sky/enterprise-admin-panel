// Mock API call
export async function fetchDashboardData() {
  return [
    { label: "Total Users", value: "12,543", icon: "FaUsers", color: "primary", trend: "+12%" },
    { label: "Revenue", value: "$45,231", icon: "FaChartLine", color: "success", trend: "+8.5%" },
    { label: "Active Sessions", value: "2,847", icon: "FaClock", color: "info", trend: "+3.2%" },
    { label: "Growth Rate", value: "24.5%", icon: "FaArrowUp", color: "warning", trend: "+4.1%" },
  ];
}
