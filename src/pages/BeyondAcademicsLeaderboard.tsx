import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Star, TrendingUp, Filter, Crown, Target, Users, Search, GraduationCap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { LPU_DATA, getSchoolById } from "@/data/lpuData";

const BeyondAcademicsLeaderboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("all-time");
  const [searchQuery, setSearchQuery] = useState("");

  const leaderboardData = useMemo(() => [
    { 
      rank: 1, 
      name: "Raj Patel", 
      points: 245, 
      achievements: 12, 
      category: "Technical", 
      trend: "+15", 
      avatar: "RP", 
      college: "LPU",
      school: "Computer Science and Engineering",
      program: "B.Tech. (CSE) - AI and Machine Learning",
      year: "3rd Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RajPatel" 
    },
    { 
      rank: 2, 
      name: "Priya Sharma", 
      points: 220, 
      achievements: 10, 
      category: "Cultural", 
      trend: "+8", 
      avatar: "PS", 
      college: "LPU",
      school: "Business",
      program: "MBA Digital and Social Media Marketing",
      year: "2nd Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaSharma" 
    },
    { 
      rank: 3, 
      name: "Arjun Kumar", 
      points: 195, 
      achievements: 9, 
      category: "Sports", 
      trend: "+12", 
      avatar: "AK", 
      college: "LPU",
      school: "Mechanical Engineering",
      program: "B.Tech. Aerospace Engineering",
      year: "4th Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArjunKumar" 
    },
    { 
      rank: 4, 
      name: "Sneha Gupta", 
      points: 180, 
      achievements: 8, 
      category: "Leadership", 
      trend: "+5", 
      avatar: "SG", 
      college: "LPU",
      school: "Business",
      program: "BBA - Bachelor of Business Administration",
      year: "3rd Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=SnehaGupta" 
    },
    { 
      rank: 5, 
      name: "Vikram Singh", 
      points: 165, 
      achievements: 7, 
      category: "Technical", 
      trend: "+3", 
      avatar: "VS", 
      college: "LPU",
      school: "Computer Science and Engineering",
      program: "B.Tech. (CSE) - Cloud Computing and Gen AI (with Google Cloud)",
      year: "2nd Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=VikramSingh" 
    },
    { 
      rank: 6, 
      name: "Ananya Reddy", 
      points: 155, 
      achievements: 6, 
      category: "Cultural", 
      trend: "+7", 
      avatar: "AR", 
      college: "LPU",
      school: "Design",
      program: "B.Des Fashion Design",
      year: "3rd Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnanyaReddy" 
    },
    { 
      rank: 7, 
      name: "Karan Mehta", 
      points: 140, 
      achievements: 6, 
      category: "Sports", 
      trend: "+4", 
      avatar: "KM", 
      college: "LPU",
      school: "Electrical Engineering",
      program: "B.Tech. Electrical and Electronics Engineering (EEE)",
      year: "2nd Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=KaranMehta" 
    },
    { 
      rank: 8, 
      name: "Riya Jain", 
      points: 135, 
      achievements: 5, 
      category: "Leadership", 
      trend: "+2", 
      avatar: "RJ", 
      college: "LPU",
      school: "Law",
      program: "BA LL.B",
      year: "4th Year",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=RiyaJain" 
    },
  ], []);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Technical", label: "Technical" },
    { value: "Cultural", label: "Cultural" },
    { value: "Sports", label: "Sports" },
    { value: "Leadership", label: "Leadership" },
  ];

  const filteredData = useMemo(() => {
    let data = leaderboardData;
    
    // Filter by category
    if (selectedCategory !== "all") {
      data = data.filter(student => student.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      data = data.filter(student => 
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.program.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return data;
  }, [selectedCategory, searchQuery, leaderboardData]);

  const topPerformers = leaderboardData.slice(0, 3);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBackground = (rank: number) => {
    switch (rank) {
      case 1: return "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200";
      case 2: return "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200";
      case 3: return "bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200";
      default: return "bg-muted/30 border-border";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Beyond Academics Leaderboard
          </div>
          <h1 className="text-4xl md:text-5xl font-bold academic-heading mb-4">
            Top Achievers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Celebrate excellence and see where you stand among your peers.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/beyond-academics-add-achievement">
                Submit Achievement
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topPerformers.map((student, index) => (
            <Card key={student.rank} className={`text-center ${getRankBackground(student.rank)} relative overflow-hidden`}>
              {student.rank === 1 && (
                <div className="absolute top-2 right-2">
                  <Crown className="w-6 h-6 text-yellow-500" />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 mb-3 border-4 border-background shadow-lg">
                    <AvatarImage src={student.imageUrl} alt={student.name} />
                    <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
                      {student.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mb-3">
                    {getRankIcon(student.rank)}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{student.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{student.college}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <GraduationCap className="w-3 h-3" />
                    <span className="truncate">{student.school}</span>
                  </div>
                  <p className="text-xs text-muted-foreground/80 mb-2 line-clamp-1">{student.program}</p>
                  <Badge variant="outline" className="text-xs mb-2">{student.year}</Badge>
                  <div className="text-3xl font-bold text-primary mb-2">{student.points}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Target className="w-4 h-4" />
                    {student.achievements} achievements
                  </div>
                  <Badge variant="outline" className="mt-2">
                    {student.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overall" className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="overall">Overall Rankings</TabsTrigger>
              <TabsTrigger value="category">By Category</TabsTrigger>
            </TabsList>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, school, or program..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="overall" className="space-y-4">
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Full Rankings
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {filteredData.length} student{filteredData.length !== 1 ? 's' : ''}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Complete leaderboard updated in real-time
                  {(searchQuery || selectedCategory !== "all") && (
                    <span className="ml-2 text-primary">
                      • Filtered results
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {filteredData.length === 0 ? (
                  <div className="text-center py-12">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No students found</h3>
                    <p className="text-muted-foreground">
                      {searchQuery ? `No results for "${searchQuery}"` : "No students match the selected filters"}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="mt-4"
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredData.map((student) => (
                    <div 
                      key={student.rank} 
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${getRankBackground(student.rank)}`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 shadow-sm">
                        {getRankIcon(student.rank)}
                      </div>
                      
                      <Avatar className="w-12 h-12 border-2 border-background shadow-sm">
                        <AvatarImage src={student.imageUrl} alt={student.name} />
                        <AvatarFallback className="font-bold text-primary bg-primary/10">
                          {student.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{student.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <GraduationCap className="w-3 h-3" />
                          <span className="font-medium">{student.school}</span>
                          <span>•</span>
                          <span>{student.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <BookOpen className="w-3 h-3" />
                          <span className="line-clamp-1">{student.program}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {student.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {student.achievements} achievements
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{student.points}</div>
                        <div className="text-sm text-green-600 flex items-center gap-1 justify-end">
                          <TrendingUp className="w-3 h-3" />
                          {student.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="category" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.slice(1).map((category) => {
                const categoryLeaders = leaderboardData
                  .filter(student => student.category === category.value)
                  .slice(0, 3);
                
                return (
                  <Card key={category.value} className="bg-card/80 backdrop-blur-sm border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          {category.value === 'Technical' && '💻'}
                          {category.value === 'Cultural' && '🎭'}
                          {category.value === 'Sports' && '⚽'}
                          {category.value === 'Leadership' && '👥'}
                        </div>
                        {category.label} Leaders
                      </CardTitle>
                      <CardDescription className="text-xs">
                        Top performers in {category.label.toLowerCase()} achievements
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {categoryLeaders.length > 0 ? (
                          categoryLeaders.map((student, index) => (
                            <div 
                              key={student.name} 
                              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                                index === 0 ? 'bg-primary/5 border border-primary/20' : 'bg-muted/30 hover:bg-muted/50'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                                index === 0 ? 'bg-yellow-500 text-white' : 
                                index === 1 ? 'bg-gray-400 text-white' : 
                                'bg-amber-600 text-white'
                              }`}>
                                {index + 1}
                              </div>
                              <Avatar className="w-10 h-10 border-2 border-background">
                                <AvatarImage src={student.imageUrl} alt={student.name} />
                                <AvatarFallback className="text-xs font-bold text-primary bg-primary/10">
                                  {student.avatar}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-sm">{student.name}</p>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                                  <GraduationCap className="w-3 h-3 flex-shrink-0" />
                                  <span className="truncate">{student.school}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/80 mt-0.5">
                                  <BookOpen className="w-3 h-3 flex-shrink-0" />
                                  <span className="truncate">{student.program}</span>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="font-bold text-primary text-lg">{student.points}</p>
                                <p className="text-xs text-muted-foreground">points</p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8 text-muted-foreground">
                            <p className="text-sm">No leaders yet</p>
                            <p className="text-xs mt-1">Be the first to achieve!</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3">Ready to Join the Leaderboard?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start submitting your achievements today and climb the rankings to unlock exclusive perks and recognition!
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/beyond-academics-add-achievement">
                Submit Your First Achievement
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/beyond-academics">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeyondAcademicsLeaderboard;