import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export function RequireAuth({ children }) {
  let { isAuthenticated } = useContext(AuthContext);
  let location = useLocation();
  let { setLoginModalOpen } = useContext(AuthContext);

  if (!isAuthenticated) {
    //return <Navigate to='/login' state={{ from: location }} replace />;
    setLoginModalOpen(true);
  }

  return children;
}
