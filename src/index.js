import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./AuthContext";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  useParams,
} from "react-router-dom";

import App from "./App";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/LoginPage";
import JobDetailPage from "./pages/JobDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<JobsPage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:jobId" element={<JobDetailPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h2>There's nothing here!</h2>
            </main>
          }
        />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
