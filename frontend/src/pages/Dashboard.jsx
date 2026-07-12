import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import SearchBar from "../components/SearchBar";
import CVETable from "../components/CVETable";
import IPLookup from "../components/IPLookup";
import SeverityChart from "../components/SeverityChart";

import api from "../services/api";

import "../styles/Dashboard.css";

function Dashboard() {
  const [cves, setCves] = useState([]);
  const [loading, setLoading] = useState(false);

  const [stats, setStats] = useState({
    total: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  });

  useEffect(() => {
    loadAllCVEs();
    loadDashboard();
  }, []);

  const refreshThreats = async () => {
    try {
      setLoading(true);

      await api.get("/cves/update");

      await loadAllCVEs();
      await loadDashboard();

      toast.success("Threat database updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update threats.");
    } finally {
      setLoading(false);
    }
  };

  const loadAllCVEs = async () => {
    try {
      const response = await api.get("/cves");

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.data || response.data.cves || [];

      setCves(data);
    } catch (error) {
      console.error(error);
      setCves([]);
    }
  };

  const loadDashboard = async () => {
    try {
      const response = await api.get("/dashboard");
      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard">
      <Navbar
        onRefresh={refreshThreats}
        loading={loading}
      />

      <DashboardCards stats={stats} />

      <SearchBar
        setCves={setCves}
        loadAllCVEs={loadAllCVEs}
      />

      <div className="dashboard-content">
        <div className="table-section">
          <CVETable cves={cves} />
        </div>

        <div className="chart-section">
          <SeverityChart stats={stats} />
        </div>
      </div>

      <IPLookup />
    </div>
  );
}

export default Dashboard;