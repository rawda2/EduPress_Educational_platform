// src/pages/DashboardHome.jsx
import { useEffect, useState } from "react";
import StatsCards from "@/features/admin/StatsCards";
import QuickActions from "@/features/admin/QuickActions";
import { fetchDashboardStats } from "@/features/admin/fetchDashboardStats";

export default function DashboardHome() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStats() {
      const result = await fetchDashboardStats();
      if (result.success) {
        setStats(result.stats);
      } else {
        console.error(result.message);
      }
      setLoading(false);
    }

    getStats();
  }, []);

  return (
    <div className="space-y-6 px-4 py-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>

      {/* Stats Cards */}
      {loading ? (
        <p className="text-muted-foreground">Loading stats...</p>
      ) : (
        <StatsCards stats={stats} />
      )}

      {/* Quick Actions */}
      <div className="mt-6">
        <QuickActions />
      </div>
    </div>
  );
}
