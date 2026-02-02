import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const location = useLocation();
  
  // Check if admin is logged in
  const adminUserStr = localStorage.getItem("adminUser");
  
  useEffect(() => {
    console.log("🔒 ProtectedAdminRoute Check:", {
      path: location.pathname,
      hasSession: !!adminUserStr,
      sessionData: adminUserStr ? JSON.parse(adminUserStr) : null
    });
  }, [location.pathname, adminUserStr]);
  
  if (!adminUserStr) {
    console.log("❌ No admin session found - Redirecting to login");
    // Redirect to login page, saving the attempted location
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  
  try {
    const adminUser = JSON.parse(adminUserStr);
    if (!adminUser.username || !adminUser.role) {
      console.log("❌ Invalid admin session - Redirecting to login");
      localStorage.removeItem("adminUser");
      return <Navigate to="/admin/login" state={{ from: location }} replace />;
    }
    console.log("✅ Valid admin session - Access granted");
  } catch (error) {
    console.log("❌ Corrupted admin session - Redirecting to login");
    localStorage.removeItem("adminUser");
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  
  // User is authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedAdminRoute;
