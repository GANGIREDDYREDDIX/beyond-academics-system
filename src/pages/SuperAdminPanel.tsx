import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Shield,
  Users,
  Settings,
  Activity,
  Database,
  Lock,
  UserPlus,
  Edit,
  Trash2,
  Download,
  RefreshCw,
  Server,
  AlertTriangle,
  CheckCircle,
  Eye,
  Save,
} from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { ADMIN_CREDENTIALS } from "@/data/adminCredentials";

const SuperAdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState("users");
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "",
    fullName: "",
    email: "",
    level: "",
  });
  const { toast } = useToast();

  // System stats
  const systemHealth = {
    status: "healthy",
    uptime: "99.98%",
    activeUsers: 14,
    totalUsers: 14,
    databaseSize: "2.4 GB",
    lastBackup: "2 hours ago",
  };

  const activityLogs = [
    {
      id: 1,
      timestamp: "2026-02-02 14:30:22",
      user: "Dr. Rajeev Sobti",
      action: "Approved Submission",
      details: "Achievement #1234 - National Hackathon",
      level: "HOD",
    },
    {
      id: 2,
      timestamp: "2026-02-02 14:15:10",
      user: "Dean, School of CSE",
      action: "Assigned Benefits",
      details: "Points: 1500, Credits: 8, Scholarship: ₹35000",
      level: "HOS",
    },
    {
      id: 3,
      timestamp: "2026-02-02 13:45:33",
      user: "Dr. Rajesh Sharma",
      action: "Policy Verification",
      details: "Achievement #1233 verified for compliance",
      level: "Academic Affairs",
    },
    {
      id: 4,
      timestamp: "2026-02-02 13:20:15",
      user: "admin",
      action: "Login",
      details: "Super Admin panel accessed",
      level: "Super Admin",
    },
    {
      id: 5,
      timestamp: "2026-02-02 12:55:40",
      user: "Dr. Vikram Singh",
      action: "Completed Processing",
      details: "Achievement #1230 - Benefits released",
      level: "Examination",
    },
  ];

  const systemSettings = {
    maxSubmissionsPerStudent: 10,
    approvalTimeout: 7,
    autoRejectAfterDays: 30,
    minPasswordLength: 8,
    sessionTimeout: 60,
    backupFrequency: "daily",
  };

  const handleAddUser = () => {
    if (!newUser.username || !newUser.password || !newUser.role) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "User Added Successfully! ✅",
      description: `${newUser.fullName} has been added to the system`,
    });
    setIsAddUserDialogOpen(false);
    setNewUser({
      username: "",
      password: "",
      role: "",
      fullName: "",
      email: "",
      level: "",
    });
  };

  const handleEditUser = (user: any) => {
    setSelectedUser(user);
    setIsEditUserDialogOpen(true);
  };

  const handleDeleteUser = (username: string) => {
    if (username === "admin") {
      toast({
        title: "Cannot Delete",
        description: "Main admin account cannot be deleted",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "User Deleted",
      description: `User ${username} has been removed from the system`,
    });
  };

  const handleBackupDatabase = () => {
    toast({
      title: "Backup Started",
      description: "Database backup is in progress...",
    });
    setTimeout(() => {
      toast({
        title: "Backup Complete! ✅",
        description: "Database backed up successfully",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Super Admin Panel</h1>
                <p className="text-muted-foreground">
                  System Management & Configuration
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={handleBackupDatabase}>
              <Database className="w-4 h-4 mr-2" />
              Backup Database
            </Button>
          </div>
        </div>

        {/* System Health Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="text-xl font-bold capitalize">{systemHealth.status}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                  <p className="text-xl font-bold">{systemHealth.uptime}</p>
                </div>
                <Activity className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-xl font-bold">{systemHealth.activeUsers}</p>
                </div>
                <Users className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-xl font-bold">{systemHealth.totalUsers}</p>
                </div>
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Database</p>
                  <p className="text-xl font-bold">{systemHealth.databaseSize}</p>
                </div>
                <Database className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Last Backup</p>
                  <p className="text-lg font-bold">{systemHealth.lastBackup}</p>
                </div>
                <Server className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>System Administration</CardTitle>
            <CardDescription>Manage users, settings, and system configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="users">
                  <Users className="w-4 h-4 mr-2" />
                  User Management
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Settings className="w-4 h-4 mr-2" />
                  System Settings
                </TabsTrigger>
                <TabsTrigger value="activity">
                  <Activity className="w-4 h-4 mr-2" />
                  Activity Logs
                </TabsTrigger>
                <TabsTrigger value="security">
                  <Lock className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
              </TabsList>

              {/* User Management Tab */}
              <TabsContent value="users">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Admin Users</h3>
                    <Button onClick={() => setIsAddUserDialogOpen(true)}>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add New User
                    </Button>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Username</TableHead>
                          <TableHead>Full Name</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Level</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {ADMIN_CREDENTIALS.map((user) => (
                          <TableRow key={user.username}>
                            <TableCell className="font-mono">{user.username}</TableCell>
                            <TableCell>{user.fullName}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{user.role}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge>{user.level}</Badge>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {user.email}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleEditUser(user)}
                                >
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleDeleteUser(user.username)}
                                  disabled={user.username === "admin"}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>

              {/* System Settings Tab */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Max Submissions Per Student</Label>
                      <Input
                        type="number"
                        defaultValue={systemSettings.maxSubmissionsPerStudent}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Approval Timeout (days)</Label>
                      <Input
                        type="number"
                        defaultValue={systemSettings.approvalTimeout}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Auto Reject After (days)</Label>
                      <Input
                        type="number"
                        defaultValue={systemSettings.autoRejectAfterDays}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Min Password Length</Label>
                      <Input
                        type="number"
                        defaultValue={systemSettings.minPasswordLength}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Session Timeout (minutes)</Label>
                      <Input
                        type="number"
                        defaultValue={systemSettings.sessionTimeout}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Backup Frequency</Label>
                      <Select defaultValue={systemSettings.backupFrequency}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Save Settings
                  </Button>
                </div>
              </TabsContent>

              {/* Activity Logs Tab */}
              <TabsContent value="activity">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Recent Activity</h3>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Logs
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {activityLogs.map((log) => (
                      <Card key={log.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge variant="outline">{log.level}</Badge>
                                <span className="font-semibold">{log.user}</span>
                                <span className="text-sm text-muted-foreground">
                                  {log.action}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">{log.details}</p>
                            </div>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                              {log.timestamp}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security">
                <div className="space-y-6">
                  <Card className="border-yellow-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        Security Alerts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm">✅ No failed login attempts in last 24 hours</p>
                        <p className="text-sm">✅ All admin accounts have strong passwords</p>
                        <p className="text-sm">✅ System firewall active</p>
                        <p className="text-sm">✅ SSL certificate valid until Dec 2026</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Security Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Force Password Reset for All Users
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Lock className="w-4 h-4 mr-2" />
                        Enable Two-Factor Authentication
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Eye className="w-4 h-4 mr-2" />
                        View Login Attempts
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="w-4 h-4 mr-2" />
                        Export Security Audit
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Add User Dialog */}
      <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Admin User</DialogTitle>
            <DialogDescription>Create a new administrator account</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Username *</Label>
              <Input
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                placeholder="e.g., hod_physics"
              />
            </div>
            <div className="space-y-2">
              <Label>Password *</Label>
              <Input
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                placeholder="Strong password"
              />
            </div>
            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                value={newUser.fullName}
                onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                placeholder="Dr. John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                placeholder="john.doe@lpu.in"
              />
            </div>
            <div className="space-y-2">
              <Label>Role *</Label>
              <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HOD">Head of Department</SelectItem>
                  <SelectItem value="HOS">Head of School</SelectItem>
                  <SelectItem value="Academic Affairs Officer">Academic Affairs Officer</SelectItem>
                  <SelectItem value="Examination Officer">Examination Officer</SelectItem>
                  <SelectItem value="Management Executive">Management Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Level *</Label>
              <Select value={newUser.level} onValueChange={(value) => setNewUser({ ...newUser, level: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Level 1">Level 1</SelectItem>
                  <SelectItem value="Level 2">Level 2</SelectItem>
                  <SelectItem value="Level 3">Level 3</SelectItem>
                  <SelectItem value="Level 4">Level 4</SelectItem>
                  <SelectItem value="Management">Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddUserDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddUser}>Add User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditUserDialogOpen} onOpenChange={setIsEditUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Admin User</DialogTitle>
            <DialogDescription>Update administrator account details</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <Input value={selectedUser?.username} disabled />
            </div>
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input defaultValue={selectedUser?.fullName} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue={selectedUser?.email} />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select defaultValue={selectedUser?.role}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HOD">Head of Department</SelectItem>
                  <SelectItem value="HOS">Head of School</SelectItem>
                  <SelectItem value="Academic Affairs Officer">Academic Affairs Officer</SelectItem>
                  <SelectItem value="Examination Officer">Examination Officer</SelectItem>
                  <SelectItem value="Management Executive">Management Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditUserDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              toast({ title: "User Updated", description: "Changes saved successfully" });
              setIsEditUserDialogOpen(false);
            }}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuperAdminPanel;
