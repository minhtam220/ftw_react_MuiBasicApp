import { AuthContext } from "./AuthContext";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";

export function RequireAuth({ children }) {
  let { isAuthenticated } = useContext(AuthContext);
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
