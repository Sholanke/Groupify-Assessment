import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/dashboard" style={{ padding: 20, display: "block" }}>
              Click to Login to Dashboard
            </Link>
          }
        />
        <Route path="dashboard" element={<DefaultLayout />}>
          <Route index element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
