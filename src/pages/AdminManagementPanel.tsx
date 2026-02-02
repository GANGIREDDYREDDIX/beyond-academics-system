import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Award,
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Search,
  Calendar,
  Building2,
  Target,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";

const AdminManagementPanel = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [selectedSchool, setSelectedSchool] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock analytics data
  const stats = {
    totalSubmissions: 487,
    pendingApprovals: 67,
    completedThisMonth: 134,
    avgApprovalTime: "4.2 days",
    totalScholarships: 12450000,
    totalCredits: 3247,
    approvalRate: 94.5,
    rejectionRate: 5.5,
  };

  const categoryData = [
    { name: "Technical", value: 185, color: "#3b82f6" },
    { name: "Sports", value: 142, color: "#10b981" },
    { name: "Cultural", value: 98, color: "#f59e0b" },
    { name: "Leadership", value: 62, color: "#8b5cf6" },
  ];

  const schoolPerformance = [
    { school: "CSE", submissions: 145, approved: 138, rejected: 7, avgTime: 3.2 },
    { school: "Business", submissions: 87, approved: 82, rejected: 5, avgTime: 3.8 },
    { school: "Mechanical", submissions: 76, approved: 71, rejected: 5, avgTime: 4.1 },
    { school: "Civil", submissions: 54, approved: 51, rejected: 3, avgTime: 3.5 },
    { school: "ECE", submissions: 48, approved: 45, rejected: 3, avgTime: 3.9 },
    { school: "Others", submissions: 77, approved: 73, rejected: 4, avgTime: 4.3 },
  ];

  const monthlyTrend = [
    { month: "Aug", submissions: 42, completed: 38 },
    { month: "Sep", submissions: 58, completed: 54 },
    { month: "Oct", submissions: 67, completed: 63 },
    { month: "Nov", submissions: 71, completed: 68 },
    { month: "Dec", submissions: 83, completed: 79 },
    { month: "Jan", submissions: 134, completed: 127 },
  ];

  const approvalPipeline = [
    { stage: "Student", count: 487, color: "#6366f1" },
    { stage: "HOD", count: 425, color: "#3b82f6" },
    { stage: "HOS", count: 378, color: "#10b981" },
    { stage: "Academic", count: 343, color: "#8b5cf6" },
    { stage: "Examination", count: 312, color: "#f59e0b" },
    { stage: "Completed", count: 298, color: "#22c55e" },
  ];

  const bottlenecks = [
    {
      stage: "HOS Review",
      avgTime: "2.1 days",
      pending: 47,
      status: "warning",
      improvement: "-8%",
    },
    {
      stage: "Academic Affairs",
      avgTime: "1.5 days",
      pending: 35,
      status: "good",
      improvement: "+12%",
    },
    {
      stage: "HOD Review",
      avgTime: "1.2 days",
      pending: 22,
      status: "excellent",
      improvement: "+18%",
    },
    {
      stage: "Examination",
      avgTime: "0.8 days",
      pending: 10,
      status: "excellent",
      improvement: "+25%",
    },
  ];

  const topPerformers = [
    { name: "Dr. Rajeev Sobti", role: "HOD, CSE", reviews: 45, avgTime: "0.9 days", rating: 4.8 },
    { name: "Dean, School of CSE", role: "HOS", reviews: 38, avgTime: "1.2 days", rating: 4.7 },
    { name: "Dr. Business HOD", role: "HOD, Business", reviews: 32, avgTime: "1.1 days", rating: 4.6 },
    { name: "Academic Officer", role: "Academic Affairs", reviews: 35, avgTime: "1.4 days", rating: 4.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">Management Dashboard</h1>
              <p className="text-muted-foreground">
                Executive Overview & System Analytics
              </p>
            </div>
            <div className="flex gap-2">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-32">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-8 h-8 text-blue-500" />
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12%
                </Badge>
              </div>
              <p className="text-2xl font-bold">{stats.totalSubmissions}</p>
              <p className="text-sm text-muted-foreground">Total Submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 text-yellow-500" />
                <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                  {stats.pendingApprovals}
                </Badge>
              </div>
              <p className="text-2xl font-bold">{stats.avgApprovalTime}</p>
              <p className="text-sm text-muted-foreground">Avg. Approval Time</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="w-8 h-8 text-green-500" />
                <Badge variant="outline" className="text-green-600 border-green-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18%
                </Badge>
              </div>
              <p className="text-2xl font-bold">₹{(stats.totalScholarships / 1000000).toFixed(1)}M</p>
              <p className="text-sm text-muted-foreground">Total Scholarships</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {stats.approvalRate}%
                </Badge>
              </div>
              <p className="text-2xl font-bold">{stats.completedThisMonth}</p>
              <p className="text-sm text-muted-foreground">Completed This Month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Achievements by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Monthly Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Submission Trends</CardTitle>
              <CardDescription>Monthly submission and completion rate</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="submissions" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* School Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>School-wise Performance</CardTitle>
            <CardDescription>Submissions, approvals, and processing time by school</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={schoolPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="school" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="submissions" fill="#3b82f6" />
                <Bar dataKey="approved" fill="#10b981" />
                <Bar dataKey="rejected" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Approval Pipeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Approval Pipeline</CardTitle>
            <CardDescription>Current status across all approval stages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 gap-4">
              {approvalPipeline.map((stage, index) => (
                <div key={index} className="text-center">
                  <div
                    className="rounded-lg p-4 mb-2"
                    style={{ backgroundColor: `${stage.color}20` }}
                  >
                    <p className="text-3xl font-bold" style={{ color: stage.color }}>
                      {stage.count}
                    </p>
                  </div>
                  <p className="text-sm font-medium">{stage.stage}</p>
                  {index < approvalPipeline.length - 1 && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.round(((stage.count - approvalPipeline[index + 1].count) / stage.count) * 100)}% processed
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottleneck Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Bottleneck Analysis</CardTitle>
              <CardDescription>Processing time and pending items by stage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bottlenecks.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {item.status === "excellent" && <Zap className="w-5 h-5 text-green-500" />}
                      {item.status === "good" && <Target className="w-5 h-5 text-blue-500" />}
                      {item.status === "warning" && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                      <div>
                        <p className="font-semibold">{item.stage}</p>
                        <p className="text-sm text-muted-foreground">{item.avgTime} avg time</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{item.pending}</p>
                      <Badge
                        variant="outline"
                        className={
                          item.improvement.startsWith("+")
                            ? "text-green-600 border-green-600"
                            : "text-red-600 border-red-600"
                        }
                      >
                        {item.improvement}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Reviewers</CardTitle>
              <CardDescription>Best performing approval officers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">{performer.name}</p>
                      <p className="text-sm text-muted-foreground">{performer.role}</p>
                      <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                        <span>{performer.reviews} reviews</span>
                        <span>•</span>
                        <span>{performer.avgTime} avg</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1 mb-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <p className="font-bold">{performer.rating}</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Top {index + 1}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed School Stats Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Detailed School Statistics</CardTitle>
                <CardDescription>Complete breakdown by school</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search schools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">School</th>
                    <th className="text-center p-3 font-semibold">Submissions</th>
                    <th className="text-center p-3 font-semibold">Approved</th>
                    <th className="text-center p-3 font-semibold">Rejected</th>
                    <th className="text-center p-3 font-semibold">Success Rate</th>
                    <th className="text-center p-3 font-semibold">Avg Time</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolPerformance.map((school, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="font-medium">{school.school}</span>
                        </div>
                      </td>
                      <td className="text-center p-3">{school.submissions}</td>
                      <td className="text-center p-3">
                        <span className="text-green-600 font-medium">{school.approved}</span>
                      </td>
                      <td className="text-center p-3">
                        <span className="text-red-600 font-medium">{school.rejected}</span>
                      </td>
                      <td className="text-center p-3">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {((school.approved / school.submissions) * 100).toFixed(1)}%
                        </Badge>
                      </td>
                      <td className="text-center p-3">{school.avgTime} days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminManagementPanel;
