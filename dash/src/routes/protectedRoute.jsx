
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../utils/auth";

export default function ProtectedRoute() {
  const [allowed, setAllowed] = useState(null);
  const location = useLocation();

  useEffect(() => {
    isAuthenticated().then(setAllowed);
  }, []);

  if (allowed === null) return null; // or spinner

  return allowed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
