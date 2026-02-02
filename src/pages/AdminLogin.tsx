import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Shield, Eye, EyeOff, Info, Lock, User, Building2 } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import {
  authenticateAdmin,
  getPanelRouteByRole,
  ADMIN_CREDENTIALS_GUIDE,
} from "@/data/adminCredentials";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const admin = authenticateAdmin(username, password);

      if (admin) {
        // Store admin info in localStorage (in production, use secure session management)
        localStorage.setItem("adminUser", JSON.stringify(admin));

        toast({
          title: "Login Successful! 🎉",
          description: `Welcome, ${admin.fullName}`,
        });

        // Navigate to appropriate panel
        const route = getPanelRouteByRole(admin.role);
        navigate(route);
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid username or password. Please try again.",
          variant: "destructive",
        });
      }

      setIsLoading(false);
    }, 1000);
  };

  const quickLogin = (user: string, pass: string) => {
    setUsername(user);
    setPassword(pass);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Admin Panel Login</CardTitle>
                <CardDescription>
                  Secure access for authorized personnel only
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="level">Access Level</Label>
                    <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                      <SelectTrigger>
                        <Building2 className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Select your role level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hod">Level 1 - Head of Department</SelectItem>
                        <SelectItem value="hos">Level 2 - Head of School</SelectItem>
                        <SelectItem value="academic">Level 3 - Academic Affairs</SelectItem>
                        <SelectItem value="exam">Level 4 - Examination Department</SelectItem>
                        <SelectItem value="management">Management - Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Authenticating...
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4 mr-2" />
                        Login to Admin Panel
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowCredentials(true)}
                  >
                    <Info className="w-4 h-4 mr-2" />
                    View Demo Credentials
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    For security purposes, all login attempts are logged and monitored.
                    If you've forgotten your credentials, please contact IT support.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Access Levels
                  </CardTitle>
                  <CardDescription>
                    5-Level hierarchical approval system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                      <Badge variant="outline" className="bg-blue-500 text-white">Level 1</Badge>
                      <div>
                        <p className="font-semibold text-sm">Head of Department</p>
                        <p className="text-xs text-muted-foreground">Initial verification and approval</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                      <Badge variant="outline" className="bg-green-500 text-white">Level 2</Badge>
                      <div>
                        <p className="font-semibold text-sm">Head of School</p>
                        <p className="text-xs text-muted-foreground">Benefits assignment and school review</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                      <Badge variant="outline" className="bg-purple-500 text-white">Level 3</Badge>
                      <div>
                        <p className="font-semibold text-sm">Academic Affairs</p>
                        <p className="text-xs text-muted-foreground">Policy compliance verification</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                      <Badge variant="outline" className="bg-orange-500 text-white">Level 4</Badge>
                      <div>
                        <p className="font-semibold text-sm">Examination Department</p>
                        <p className="text-xs text-muted-foreground">Final processing and record update</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                      <Badge variant="outline" className="bg-red-500 text-white">Mgmt</Badge>
                      <div>
                        <p className="font-semibold text-sm">Management</p>
                        <p className="text-xs text-muted-foreground">Analytics and system oversight</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-sm">Security Notice</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs text-muted-foreground space-y-2">
                    <li>• Use strong, unique passwords</li>
                    <li>• Never share your credentials</li>
                    <li>• Log out after each session</li>
                    <li>• Report suspicious activity immediately</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Dialog */}
      <Dialog open={showCredentials} onOpenChange={setShowCredentials}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Demo Admin Credentials</DialogTitle>
            <DialogDescription>
              Click on any credential to auto-fill the login form
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {Object.entries(ADMIN_CREDENTIALS_GUIDE).map(([level, credentials]) => (
              <div key={level}>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Badge>{level}</Badge>
                </h3>
                <div className="grid gap-2">
                  {credentials.map((cred, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => {
                        quickLogin(cred.username, cred.password);
                        setShowCredentials(false);
                        toast({
                          title: "Credentials Loaded",
                          description: "Click login to proceed",
                        });
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-mono text-sm font-semibold">{cred.username}</p>
                            <p className="font-mono text-xs text-muted-foreground">
                              {cred.password}
                            </p>
                            {'department' in cred && (
                              <p className="text-xs text-muted-foreground mt-1">
                                Department: {cred.department}
                              </p>
                            )}
                            {'school' in cred && (
                              <p className="text-xs text-muted-foreground mt-1">
                                School: {cred.school}
                              </p>
                            )}
                          </div>
                          <Button size="sm" variant="ghost">
                            Use
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminLogin;
