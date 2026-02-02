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
  Building2,
  GraduationCap,
  DollarSign,
  Shield,
} from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

const AdminAcademicAffairsPanel = () => {
  const [selectedTab, setSelectedTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [reviewComments, setReviewComments] = useState("");
  const { toast } = useToast();

  // Mock data
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
      hosApprovedDate: "2026-01-30",
      status: "hos_approved",
      certificateUrl: "#",
      level: "National",
      description: "Won first place in Smart India Hackathon 2026",
      hodComments: "Verified achievement. Student represented university excellently.",
      hodName: "Dr. Rajeev Sobti",
      hosComments: "Outstanding achievement. Assigned maximum benefits.",
      hosName: "Dean, School of CSE",
      pointsAwarded: 1500,
      creditsAwarded: 8,
      scholarshipAmount: 35000,
      avatar: "RP",
    },
    {
      id: "2",
      studentName: "Priya Sharma",
      registrationNo: "12012347",
      title: "Best Paper Award at Research Conference",
      category: "Technical",
      school: "Business",
      program: "MBA Business Analytics",
      submittedDate: "2026-01-26",
      hodApprovedDate: "2026-01-27",
      hosApprovedDate: "2026-01-29",
      status: "hos_approved",
      certificateUrl: "#",
      level: "International",
      description: "Received best paper award at International Business Analytics Conference",
      hodComments: "Exceptional research work with industry impact.",
      hodName: "Dr. Business HOD",
      hosComments: "Excellent representation of business school.",
      hosName: "Dean, Business School",
      pointsAwarded: 2000,
      creditsAwarded: 10,
      scholarshipAmount: 45000,
      avatar: "PS",
    },
  ];

  const stats = {
    pending: 15,
    approved: 102,
    rejected: 1,
    totalSchools: 12,
    avgApprovalTime: "1.5 days",
  };

  const schoolStats = [
    { school: "Computer Science & Engineering", pending: 5, approved: 45 },
    { school: "Business", pending: 3, approved: 28 },
    { school: "Mechanical Engineering", pending: 4, approved: 18 },
    { school: "Others", pending: 3, approved: 11 },
  ];

  const policyChecks = [
    { check: "Eligibility verified", status: "pass" },
    { check: "Benefit limits within policy", status: "pass" },
    { check: "Timeline compliance", status: "pass" },
    { check: "Documentation complete", status: "pass" },
  ];

  const handleApprove = () => {
    if (!reviewComments.trim()) {
      toast({
        title: "Comments Required",
        description: "Please add your review comments.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Achievement Approved",
      description: "Forwarded to Examination Department for final processing.",
    });
    setIsReviewDialogOpen(false);
    setReviewComments("");
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
      description: "Student and previous approvers have been notified.",
      variant: "destructive",
    });
    setIsReviewDialogOpen(false);
    setReviewComments("");
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
              <h1 className="text-3xl font-bold">Academic Affairs Dashboard</h1>
              <p className="text-muted-foreground">
                Division of Academic Affairs - University-wide Policy Compliance
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
                  <p className="text-sm text-muted-foreground">Schools</p>
                  <p className="text-2xl font-bold">{stats.totalSchools}</p>
                </div>
                <Building2 className="w-8 h-8 text-blue-500" />
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

        {/* School-wise Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>School-wise Overview</CardTitle>
            <CardDescription>Achievement distribution across schools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {schoolStats.map((school, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">{school.school}</p>
                      <p className="text-sm text-muted-foreground">
                        {school.pending + school.approved} total submissions
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-yellow-500">{school.pending}</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-500">{school.approved}</p>
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
                <CardTitle>HOS Approved Submissions</CardTitle>
                <CardDescription>
                  Review policy compliance and forward to Examination Department
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
                    <SelectValue placeholder="School" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Schools</SelectItem>
                    <SelectItem value="cse">CSE</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="me">Mechanical</SelectItem>
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
                                {submission.school} • {submission.program}
                              </p>
                            </div>
                            <Badge variant="secondary">{submission.category}</Badge>
                          </div>

                          <p className="text-sm text-muted-foreground mb-3">
                            {submission.description}
                          </p>

                          {/* Approval Chain */}
                          <div className="space-y-2 mb-3">
                            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <Shield className="w-4 h-4 text-blue-600" />
                                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                                  HOD: {submission.hodName}
                                </p>
                              </div>
                              <p className="text-xs text-blue-800 dark:text-blue-200">
                                "{submission.hodComments}"
                              </p>
                            </div>

                            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-3">
                              <div className="flex items-center gap-2 mb-1">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <p className="text-sm font-medium text-green-900 dark:text-green-100">
                                  HOS: {submission.hosName}
                                </p>
                              </div>
                              <p className="text-xs text-green-800 dark:text-green-200 mb-2">
                                "{submission.hosComments}"
                              </p>
                              <div className="flex gap-4 text-xs">
                                <span className="font-medium">Points: {submission.pointsAwarded}</span>
                                <span className="font-medium">Credits: {submission.creditsAwarded}</span>
                                <span className="font-medium">Scholarship: ₹{submission.scholarshipAmount}</span>
                              </div>
                            </div>
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
                              <Shield className="w-4 h-4 mr-2" />
                              Review & Verify Policy
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
            <DialogTitle>Policy Compliance Review</DialogTitle>
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
                <p className="text-muted-foreground">School</p>
                <p className="font-medium">{selectedAchievement?.school}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Category</p>
                <p className="font-medium">{selectedAchievement?.category}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Level</p>
                <p className="font-medium">{selectedAchievement?.level}</p>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Benefits Assigned by HOS</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Points</p>
                  <p className="font-bold text-lg">{selectedAchievement?.pointsAwarded}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Credits</p>
                  <p className="font-bold text-lg">{selectedAchievement?.creditsAwarded}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Scholarship</p>
                  <p className="font-bold text-lg">₹{selectedAchievement?.scholarshipAmount}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Policy Compliance Checks</p>
              <div className="space-y-2">
                {policyChecks.map((check, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{check.check}</span>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {check.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="comments">Academic Affairs Comments *</Label>
              <Textarea
                id="comments"
                placeholder="Add policy compliance notes, recommendations, and final verification..."
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
              Approve & Forward to Examination
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAcademicAffairsPanel;
