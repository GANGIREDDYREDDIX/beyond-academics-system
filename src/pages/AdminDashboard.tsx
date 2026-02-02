import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Building2,
  GraduationCap,
  FileCheck,
  BarChart3,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  // Mock data - replace with real API calls
  const systemStats = {
    totalSubmissions: 127,
    pending: 45,
    approved: 78,
    rejected: 4,
    avgProcessingTime: "3.2 days",
  };

  const adminPanels = [
    {
      id: "hod",
      level: "Level 1",
      title: "HOD Panel",
      subtitle: "Head of Department",
      description: "Department-specific achievement verification and initial approval",
      icon: Users,
      route: "/admin/hod",
      color: "bg-blue-500",
      stats: {
        pending: 12,
        approved: 45,
        rejected: 3,
      },
      responsibilities: [
        "Verify achievement authenticity",
        "Check certificate validity",
        "Add verification comments",
        "Approve/Reject submissions",
      ],
      active: true,
    },
    {
      id: "hos",
      level: "Level 2",
      title: "HOS Panel",
      subtitle: "Head of School / Dean",
      description: "School-wide review and benefits assignment",
      icon: Building2,
      route: "/admin/hos",
      color: "bg-green-500",
      stats: {
        pending: 8,
        approved: 67,
        rejected: 2,
      },
      responsibilities: [
        "Review HOD-approved submissions",
        "Assign points and credits",
        "Calculate scholarship amounts",
        "Forward to Academic Affairs",
      ],
      active: true,
    },
    {
      id: "academic",
      level: "Level 3",
      title: "Academic Affairs Panel",
      subtitle: "Division of Academic Affairs",
      description: "University-wide policy compliance and benefit verification",
      icon: GraduationCap,
      route: "/admin/academic-affairs",
      color: "bg-purple-500",
      stats: {
        pending: 15,
        approved: 102,
        rejected: 1,
      },
      responsibilities: [
        "Ensure policy compliance",
        "Verify eligibility criteria",
        "Validate benefit calculations",
        "Forward to Examination",
      ],
      active: true,
    },
    {
      id: "examination",
      level: "Level 4",
      title: "Examination Panel",
      subtitle: "Examination Department",
      description: "Final validation and official record management",
      icon: FileCheck,
      route: "/admin/examination",
      color: "bg-orange-500",
      stats: {
        pending: 10,
        approved: 95,
        rejected: 0,
      },
      responsibilities: [
        "Final validation",
        "Add to student records",
        "Issue certificates",
        "Release scholarships",
      ],
      active: true,
    },
    {
      id: "management",
      level: "Management",
      title: "Management Panel",
      subtitle: "Executive Overview",
      description: "University-wide analytics, monitoring, and system oversight",
      icon: BarChart3,
      route: "/admin/management",
      color: "bg-red-500",
      stats: {
        pending: 45,
        approved: 309,
        rejected: 6,
      },
      responsibilities: [
        "Real-time system monitoring",
        "Performance analytics",
        "Bottleneck identification",
        "Executive reports",
      ],
      active: true,
    },
    {
      id: "super",
      level: "Super Admin",
      title: "Super Admin Panel",
      subtitle: "System Administration",
      description: "User management, system configuration, and security settings",
      icon: Shield,
      route: "/admin/super",
      color: "bg-gray-900",
      stats: {
        pending: 0,
        approved: 0,
        rejected: 0,
      },
      responsibilities: [
        "User management",
        "System settings",
        "Security configuration",
        "Database management",
      ],
      active: true,
    },
  ];

  const approvalPipeline = [
    { status: "Submitted", count: 45, color: "bg-yellow-500" },
    { status: "HOD Review", count: 12, color: "bg-blue-500" },
    { status: "HOS Review", count: 8, color: "bg-green-500" },
    { status: "Academic Review", count: 15, color: "bg-purple-500" },
    { status: "Exam Review", count: 10, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Admin Control Center</h1>
              <p className="text-muted-foreground">
                Multi-level achievement approval and management system
              </p>
            </div>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{systemStats.totalSubmissions}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">{systemStats.pending}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-2xl font-bold">{systemStats.approved}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                  <p className="text-2xl font-bold">{systemStats.rejected}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-2xl font-bold">{systemStats.avgProcessingTime}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Approval Pipeline Visualization */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Approval Pipeline</CardTitle>
            <CardDescription>Current status distribution across approval levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-2">
              {approvalPipeline.map((stage, index) => (
                <div key={stage.status} className="flex items-center flex-1">
                  <div className="flex-1">
                    <div className={`${stage.color} h-16 rounded-lg flex flex-col items-center justify-center text-white`}>
                      <p className="text-2xl font-bold">{stage.count}</p>
                      <p className="text-xs">{stage.status}</p>
                    </div>
                  </div>
                  {index < approvalPipeline.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-muted-foreground mx-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Admin Panels Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Admin Panels</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {adminPanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <Card 
                  key={panel.id} 
                  className={`relative overflow-hidden border-l-4 ${
                    panel.active 
                      ? 'hover:shadow-lg transition-all duration-300' 
                      : 'opacity-60'
                  }`}
                  style={{ borderLeftColor: panel.color.replace('bg-', '#') }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 ${panel.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {panel.level}
                            </Badge>
                            {!panel.active && (
                              <Badge variant="secondary" className="text-xs">
                                Coming Soon
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl">{panel.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {panel.subtitle}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {panel.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-yellow-600">{panel.stats.pending}</p>
                        <p className="text-xs text-yellow-700 dark:text-yellow-300">Pending</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-950 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-green-600">{panel.stats.approved}</p>
                        <p className="text-xs text-green-700 dark:text-green-300">Approved</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-red-600">{panel.stats.rejected}</p>
                        <p className="text-xs text-red-700 dark:text-red-300">Rejected</p>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">Key Responsibilities:</p>
                      <ul className="space-y-1">
                        {panel.responsibilities.map((resp, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    {panel.active ? (
                      <Button asChild className="w-full">
                        <Link to={panel.route}>
                          Access {panel.title}
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled className="w-full">
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Additional system resources and documentation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start" asChild>
                <Link to="/beyond-academics">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Student Portal
                </Link>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <Link to="/beyond-academics-leaderboard">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Leaderboard
                </Link>
              </Button>
              <Button variant="outline" className="justify-start">
                <FileCheck className="w-4 h-4 mr-2" />
                Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
