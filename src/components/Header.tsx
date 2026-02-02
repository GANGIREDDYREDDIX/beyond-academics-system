import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, Award, Users, Shield, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/", icon: GraduationCap },
    { name: "Beyond Academics", href: "/beyond-academics", icon: Award },
    { name: "Projects & Mentors", href: "/projects", icon: Users },
    { name: "Admin", href: "/admin", icon: Shield },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isAdminRoute = location.pathname.startsWith('/admin');
  const adminUser = isAdminRoute ? JSON.parse(localStorage.getItem("adminUser") || "null") : null;

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero shadow-hero transition-all duration-300 group-hover:scale-105">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold academic-heading">Edu Perks</h1>
              <p className="text-xs text-muted-foreground">Excellence Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={cn(
                      "flex items-center space-x-2 transition-all duration-300",
                      isActive(item.href) 
                        ? "bg-gradient-hero text-white shadow-hero hover:scale-105" 
                        : "hover:bg-card-accent hover:scale-105"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.name}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {isAdminRoute && adminUser ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-lg">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{adminUser.fullName}</span>
                </div>
                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : isAdminRoute ? (
              <Button variant="outline" asChild>
                <Link to="/admin/login">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin Login
                </Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="flex flex-col space-y-2 py-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.href} 
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className={cn(
                        "w-full flex items-center justify-start space-x-3 transition-all duration-300",
                        isActive(item.href) 
                          ? "bg-gradient-hero text-white shadow-hero" 
                          : "hover:bg-card-accent"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.name}</span>
                    </Button>
                  </Link>
                );
              })}

              <div className="border-t pt-4 mt-4 flex flex-col space-y-2">
                {isAdminRoute && adminUser ? (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg">
                      <Shield className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{adminUser.fullName}</p>
                        <p className="text-xs text-muted-foreground">{adminUser.role}</p>
                      </div>
                    </div>
                    <Button variant="outline" onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : isAdminRoute ? (
                  <Button variant="outline" asChild>
                    <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                      <Shield className="h-4 w-4 mr-2" />
                      Admin Login
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" asChild>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;