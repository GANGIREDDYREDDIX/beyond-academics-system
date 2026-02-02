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
  Award,
  DollarSign,
  BookOpen,
  FileCheck,
  Send,
} from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const AdminExaminationPanel = () => {
  const [selectedTab, setSelectedTab] = useState("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);
  const [isProcessDialogOpen, setIsProcessDialogOpen] = useState(false);
  const [finalComments, setFinalComments] = useState("");
  const [checkedItems, setCheckedItems] = useState({
    transcript: false,
    certificate: false,
    scholarship: false,
    records: false,
  });
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
      year: "3rd Year",
      submittedDate: "2026-01-28",
      academicApprovedDate: "2026-01-31",
      status: "academic_approved",
      certificateUrl: "#",
      level: "National",
      description: "Won first place in Smart India Hackathon 2026",
      academicComments: "All policies verified. Benefits approved as per university guidelines.",
      pointsAwarded: 1500,
      creditsAwarded: 8,
      scholarshipAmount: 35000,
      dutyLeaves: 5,
      avatar: "RP",
    },
    {
      id: "2",
      studentName: "Arjun Kumar",
      registrationNo: "12012348",
      title: "Gold Medal in National Sports Championship",
      category: "Sports",
      school: "Mechanical Engineering",
      program: "B.Tech. Aerospace Engineering",
      year: "4th Year",
      submittedDate: "2026-01-25",
      academicApprovedDate: "2026-01-30",
      status: "academic_approved",
      certificateUrl: "#",
      level: "National",
      description: "Gold medal in 100m sprint at National University Games",
      academicComments: "Outstanding sports achievement. Benefits verified.",
      pointsAwarded: 1200,
      creditsAwarded: 7,
      scholarshipAmount: 25000,
      dutyLeaves: 7,
      avatar: "AK",
    },
  ];

  const stats = {
    pending: 10,
    completed: 95,
    rejected: 0,
    creditsIssued: 847,
    scholarshipsReleased: 6895000,
    avgProcessingTime: "0.8 days",
  };

  const processingChecklist = [
    { id: "transcript", label: "Add to Student Transcript", icon: FileText },
    { id: "certificate", label: "Generate Achievement Certificate", icon: Award },
    { id: "scholarship", label: "Process Scholarship Payment", icon: DollarSign },
    { id: "records", label: "Update Official Records", icon: BookOpen },
  ];

  const handleComplete = () => {
    const allChecked = Object.values(checkedItems).every(v => v);
    
    if (!allChecked) {
      toast({
        title: "Incomplete Processing",
        description: "Please complete all checklist items before finalizing.",
        variant: "destructive",
      });
      return;
    }

    if (!finalComments.trim()) {
      toast({
        title: "Comments Required",
        description: "Please add final processing comments.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Achievement Completed! 🎉",
      description: "All benefits have been processed and added to student records.",
    });
    setIsProcessDialogOpen(false);
    setFinalComments("");
    setCheckedItems({
      transcript: false,
      certificate: false,
      scholarship: false,
      records: false,
    });
  };

  const handleReject = () => {
    if (!finalComments.trim()) {
      toast({
        title: "Comments Required",
        description: "Please provide a reason for rejection.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Achievement Rejected",
      description: "Previous approvers have been notified.",
      variant: "destructive",
    });
    setIsProcessDialogOpen(false);
    setFinalComments("");
  };

  const openProcessDialog = (achievement: any) => {
    setSelectedAchievement(achievement);
    setIsProcessDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold">Examination Department Dashboard</h1>
              <p className="text-muted-foreground">
                Final Validation & Official Record Management
              </p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
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
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">{stats.completed}</p>
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
                  <p className="text-sm text-muted-foreground">Credits</p>
                  <p className="text-2xl font-bold">{stats.creditsIssued}</p>
                </div>
                <FileCheck className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Scholarships</p>
                  <p className="text-xl font-bold">₹{(stats.scholarshipsReleased / 100000).toFixed(1)}L</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Time</p>
                  <p className="text-2xl font-bold">{stats.avgProcessingTime}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle>Academic Affairs Approved Submissions</CardTitle>
                <CardDescription>
                  Final processing and record management
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
                  <SelectTrigger className="w-32">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
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
                <TabsTrigger value="completed">
                  Completed ({stats.completed})
                </TabsTrigger>
                <TabsTrigger value="rejected">
                  Rejected ({stats.rejected})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="space-y-4">
                {submissions.map((submission) => (
                  <Card key={submission.id} className="hover:shadow-md transition-shadow border-l-4 border-l-orange-500">
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
                                {submission.studentName} • {submission.registrationNo} • {submission.year}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {submission.school} • {submission.program}
                              </p>
                            </div>
                            <Badge variant="secondary">{submission.category}</Badge>
                          </div>

                          {/* Benefits Summary */}
                          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 mb-3">
                            <p className="text-sm font-medium mb-2">Final Benefits to Process:</p>
                            <div className="grid grid-cols-4 gap-3 text-sm">
                              <div className="text-center">
                                <p className="text-muted-foreground text-xs">Points</p>
                                <p className="font-bold text-lg">{submission.pointsAwarded}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-muted-foreground text-xs">Credits</p>
                                <p className="font-bold text-lg">{submission.creditsAwarded}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-muted-foreground text-xs">Scholarship</p>
                                <p className="font-bold text-lg">₹{submission.scholarshipAmount}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-muted-foreground text-xs">Leaves</p>
                                <p className="font-bold text-lg">{submission.dutyLeaves} days</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-3 mb-3">
                            <p className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-1">
                              Academic Affairs Verification Complete
                            </p>
                            <p className="text-xs text-purple-800 dark:text-purple-200">
                              "{submission.academicComments}"
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {submission.submittedDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <FileCheck className="w-4 h-4" />
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
                              View Documents
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => openProcessDialog(submission)}
                            >
                              <FileCheck className="w-4 h-4 mr-2" />
                              Process & Complete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="completed">
                <p className="text-center text-muted-foreground py-8">
                  No completed submissions yet
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

      {/* Process Dialog */}
      <Dialog open={isProcessDialogOpen} onOpenChange={setIsProcessDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Final Processing & Record Update</DialogTitle>
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
                <p className="text-muted-foreground">Registration No.</p>
                <p className="font-medium">{selectedAchievement?.registrationNo}</p>
              </div>
              <div>
                <p className="text-muted-foreground">School</p>
                <p className="font-medium">{selectedAchievement?.school}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Year</p>
                <p className="font-medium">{selectedAchievement?.year}</p>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm font-medium mb-3">Final Benefits to be Released:</p>
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-1 text-primary" />
                  <p className="font-bold text-lg">{selectedAchievement?.pointsAwarded}</p>
                  <p className="text-xs text-muted-foreground">Points</p>
                </div>
                <div className="text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-1 text-blue-500" />
                  <p className="font-bold text-lg">{selectedAchievement?.creditsAwarded}</p>
                  <p className="text-xs text-muted-foreground">Credits</p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-1 text-green-500" />
                  <p className="font-bold text-lg">₹{selectedAchievement?.scholarshipAmount}</p>
                  <p className="text-xs text-muted-foreground">Scholarship</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-1 text-orange-500" />
                  <p className="font-bold text-lg">{selectedAchievement?.dutyLeaves}</p>
                  <p className="text-xs text-muted-foreground">Days Leave</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
              <p className="text-sm font-medium mb-3">Processing Checklist *</p>
              <div className="space-y-3">
                {processingChecklist.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={item.id}
                        checked={checkedItems[item.id as keyof typeof checkedItems]}
                        onCheckedChange={(checked) =>
                          setCheckedItems({ ...checkedItems, [item.id]: checked as boolean })
                        }
                      />
                      <label
                        htmlFor={item.id}
                        className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Label htmlFor="comments">Final Processing Comments *</Label>
              <Textarea
                id="comments"
                placeholder="Add final verification notes, record update confirmation, and completion remarks..."
                value={finalComments}
                onChange={(e) => setFinalComments(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setIsProcessDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleReject}>
              <XCircle className="w-4 h-4 mr-2" />
              Reject
            </Button>
            <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700">
              <Send className="w-4 h-4 mr-2" />
              Complete & Release Benefits
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminExaminationPanel;
