// src/app/router/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../../features/dashboard/pages/Dashboard";
import Users from "../../features/Users/pages/User";
import Settings from "../../features/settings/pages/Settings";

import AppLayout from "../../shared/layout/AppLayout/AppLayout";
import ProtectedRoute from "../../shared/components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
              <Dashboard />
              /* </ProtectedRoute> */
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
