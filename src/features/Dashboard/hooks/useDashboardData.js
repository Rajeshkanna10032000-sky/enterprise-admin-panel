import { useState, useEffect } from "react";
import { fetchDashboardData } from "../services/dashboardService";

export default function useDashboardData() {
  const [stats, setStats] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const data = await fetchDashboardData();
      setStats(data);
    }
    getData();
  }, []);

  return { stats };
}