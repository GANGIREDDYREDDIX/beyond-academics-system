import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
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
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  Calendar,
  TrendingUp,
  AlertCircle,
  MessageSquare,
  Award,
  DollarSign,
} from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

const AdminHOSPanel = () => {
  const [selectedTab, setSelectedTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [reviewComments, setReviewComments] = useState("");
  const [pointsAwarded, setPointsAwarded] = useState("");
  const [creditsAwarded, setCreditsAwarded] = useState("");
  const [scholarshipAmount, setScholarshipAmount] = useState("");
  const { toast } = useToast();

  // Mock data - replace with actual API calls
  const submissions = [
    {
      id: "1",
      studentName: "Raj Patel",
      registrationNo: "12012345",
      title: "First Place in National Hackathon",
      category: "Technical",
      school: "Computer Science and Engineering",
      program: "B.Tech. (CSE) - AI and Machine Learning",
      submittedDate: "2026-01-28",
      hodApprovedDate: "2026-01-29",
      status: "hod_approved",
      certificateUrl: "#",
      level: "National",
      description: "Won first place in Smart India Hackathon 2026",
      hodComments: "Verified achievement. Student represented university excellently. Certificate is authentic.",
      hodName: "Dr. Rajeev Sobti",
      avatar: "RP",
    },
    {
      id: "2",
      studentName: "Vikram Singh",
      registrationNo: "12012346",
      title: "Research Paper Published",
      category: "Technical",
      school: "Computer Science and Engineering",
      program: "B.Tech. (CSE) - Cloud Computing and Gen AI",
      submittedDate: "2026-01-27",
      hodApprovedDate: "2026-01-28",
      status: "hod_approved",
      certificateUrl: "#",
      level: "International",
      description: "Published paper in IEEE Conference on Cloud Computing",
      hodComments: "High impact research paper. Excellent contribution to the field.",
      hodName: "Dr. Rajeev Sobti",
      avatar: "VS",
    },
  ];

  const stats = {
    pending: 8,
    approved: 67,
    rejected: 2,
    totalSchool: 75,
    avgApprovalTime: "1.8 days",
  };

  const departmentStats = [
    { dept: "Computer Science", pending: 5, approved: 45 },
    { dept: "Information Technology", pending: 2, approved: 15 },
    { dept: "Data Science", pending: 1, approved: 7 },
  ];

  const handleApprove = () => {
    if (!reviewComments.trim() || !pointsAwarded || !creditsAwarded) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Achievement Approved",
      description: `Forwarded to Division of Academic Affairs with ${pointsAwarded} points and ${creditsAwarded} credits.`,
    });
    setIsReviewDialogOpen(false);
    resetForm();
  };

  const handleReject = () => {
    if (!reviewComments.trim()) {
      toast({
        title: "Comments Required",
        description: "Please provide a reason for rejection.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Achievement Rejected",
      description: "Student and HOD have been notified.",
      variant: "destructive",
    });
    setIsReviewDialogOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setReviewComments("");
    setPointsAwarded("");
    setCreditsAwarded("");
    setScholarshipAmount("");
  };

  const openReviewDialog = (achievement: any) => {
    setSelectedAchievement(achievement);
    setIsReviewDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">HOS Dashboard</h1>
              <p className="text-muted-foreground">
                School of Computer Science and Engineering - Dean Panel
              </p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">{stats.pending}</p>
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
                  <p className="text-2xl font-bold">{stats.approved}</p>
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
                  <p className="text-2xl font-bold">{stats.rejected}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-2xl font-bold">{stats.totalSchool}</p>
                </div>
                <Award className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-2xl font-bold">{stats.avgApprovalTime}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Department-wise Overview</CardTitle>
            <CardDescription>Achievement status by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold">{dept.dept}</p>
                    <p className="text-sm text-muted-foreground">
                      {dept.pending + dept.approved} total submissions
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-500">{dept.pending}</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-500">{dept.approved}</p>
                      <p className="text-xs text-muted-foreground">Approved</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle>HOD Approved Submissions</CardTitle>
                <CardDescription>
                  Review and assign benefits to student achievements
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search submissions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-40">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="it">Information Technology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="pending">
                  Pending ({stats.pending})
                </TabsTrigger>
                <TabsTrigger value="approved">
                  Approved ({stats.approved})
                </TabsTrigger>
                <TabsTrigger value="rejected">
                  Rejected ({stats.rejected})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="space-y-4">
                {submissions.map((submission) => (
                  <Card key={submission.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${submission.studentName}`} />
                          <AvatarFallback>{submission.avatar}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-lg">
                                {submission.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {submission.studentName} • {submission.registrationNo}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {submission.program}
                              </p>
                            </div>
                            <Badge variant="secondary">{submission.category}</Badge>
                          </div>

                          <p className="text-sm text-muted-foreground mb-3">
                            {submission.description}
                          </p>

                          {/* HOD Approval Info */}
                          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <p className="text-sm font-medium text-green-900 dark:text-green-100">
                                Approved by HOD: {submission.hodName}
                              </p>
                            </div>
                            <p className="text-sm text-green-800 dark:text-green-200">
                              "{submission.hodComments}"
                            </p>
                            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                              {submission.hodApprovedDate}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {submission.submittedDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {submission.level} Level
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open(submission.certificateUrl)}
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              View Certificate
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => openReviewDialog(submission)}
                            >
                              <Award className="w-4 h-4 mr-2" />
                              Review & Assign Benefits
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="approved">
                <p className="text-center text-muted-foreground py-8">
                  No approved submissions yet
                </p>
              </TabsContent>

              <TabsContent value="rejected">
                <p className="text-center text-muted-foreground py-8">
                  No rejected submissions yet
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Review Dialog */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Review & Assign Benefits</DialogTitle>
            <DialogDescription>
              {selectedAchievement?.title}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Student</p>
                <p className="font-medium">{selectedAchievement?.studentName}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Category</p>
                <p className="font-medium">{selectedAchievement?.category}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Level</p>
                <p className="font-medium">{selectedAchievement?.level}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{selectedAchievement?.submittedDate}</p>
              </div>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">HOD Comments</p>
              <p className="text-sm text-muted-foreground">
                {selectedAchievement?.hodComments}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="points">Points Awarded *</Label>
                <Input
                  id="points"
                  type="number"
                  placeholder="e.g., 250"
                  value={pointsAwarded}
                  onChange={(e) => setPointsAwarded(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="credits">Academic Credits *</Label>
                <Input
                  id="credits"
                  type="number"
                  placeholder="e.g., 5"
                  value={creditsAwarded}
                  onChange={(e) => setCreditsAwarded(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="scholarship">Scholarship (₹)</Label>
                <Input
                  id="scholarship"
                  type="number"
                  placeholder="e.g., 10000"
                  value={scholarshipAmount}
                  onChange={(e) => setScholarshipAmount(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="comments">HOS Comments *</Label>
              <Textarea
                id="comments"
                placeholder="Add your review, impact assessment, and recommendations..."
                value={reviewComments}
                onChange={(e) => setReviewComments(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsReviewDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              <XCircle className="w-4 h-4 mr-2" />
              Reject
            </Button>
            <Button onClick={handleApprove}>
              <CheckCircle className="w-4 h-4 mr-2" />
              Approve & Forward
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminHOSPanel;
