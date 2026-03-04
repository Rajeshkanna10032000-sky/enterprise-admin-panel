// src/app/router/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard } from "@/features/Dashboard"; // using index.js export
import Users from "../../features/Users/pages/User";
import Settings from "../../features/settings/pages/Settings";

import AppLayout from "../../shared/layout/AppLayout/AppLayout";
import ProtectedRoute from "../../shared/components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes use AppLayout as the main layout */}
        <Route element={<AppLayout />}>
          {/* Dashboard route - wrapped in ProtectedRoute */}
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
            }
          />

          {/* Users route */}
          <Route
            path="/users"
            element={
              // <ProtectedRoute>
              <Users />
              // </ProtectedRoute>
            }
          />

          {/* Settings route */}
          <Route
            path="/settings"
            element={
              // <ProtectedRoute>
              <Settings />
              // </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
