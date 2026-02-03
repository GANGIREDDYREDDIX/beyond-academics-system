import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, Award, Users, ArrowRight, Target, 
  TrendingUp, Lightbulb, GraduationCap, Star,
  CheckCircle, Trophy, FileText, MessageCircle
} from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const pathways = [
    {
      title: "Beyond Academics",
      subtitle: "Holistic Achievement Pathway",
      description: "Showcase achievements beyond the classroom - sports, cultural activities, competitions, and extracurricular excellence with direct academic benefits.",
      icon: Trophy,
      href: "/beyond-academics",
      color: "secondary",
      features: [
        "Sports & cultural achievements",
        "Competition recognition",
        "Scholarship opportunities",
        "Holistic development rewards"
      ],
      gradient: "bg-gradient-secondary bg-green-500"
    },
    {
      title: "Projects & Mentors",
      subtitle: "Innovation & Collaboration",
      description: "Engage in cutting-edge research projects and connect with expert faculty mentors. Build skills while contributing to impactful innovations.",
      icon: Users,
      href: "/projects",
      color: "success",
      features: [
        "Research project opportunities",
        "Expert faculty mentorship",
        "Skill development programs",
        "Industry collaboration"
      ],
      gradient: "bg-gradient-subtle bg-blue-500"
    }
  ];

  const quickLinks = [
    { name: "Policies & Guidelines", icon: FileText, href: "#" },
    { name: "Submit Achievement", icon: Target, href: "/beyond-academics-add-achievement" },
    { name: "Beyond Academics", icon: Trophy, href: "/beyond-academics" },
    { name: "Contact Support", icon: MessageCircle, href: "#" }
  ];

  const stats = [
    { label: "Active Students", value: "2,847", icon: Users },
    { label: "Achievements Verified", value: "12,453", icon: CheckCircle },
    { label: "Benefits Unlocked", value: "8,921", icon: Star },
    { label: "Success Rate", value: "94.7%", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] transform -translate-x-1/2 -translate-y-1/2 scale-110"
            src="https://www.youtube.com/embed/wdzPDWAehn0?autoplay=1&mute=1&loop=1&playlist=wdzPDWAehn0&controls=0&showinfo=0&autohide=1&modestbranding=1&iv_load_policy=3&playsinline=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-blue-500/20 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-white/10 text-white border-white/20 px-6 py-3 backdrop-blur-md text-base font-medium shadow-2xl animate-fade-in-up">
              🎓 Excellence Recognition Platform
            </Badge>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] drop-shadow-2xl animate-fade-in-up animation-delay-200">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">EDU</span>
              <br className="md:hidden" />
              <span className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-300 bg-clip-text text-transparent"> REVOLUTION</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/95 mb-12 leading-relaxed drop-shadow-xl font-light max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Revolutionizing the way student achievements are
              <span className="font-semibold text-orange-300"> recognized</span>,
              <span className="font-semibold text-blue-300"> verified</span>, and
              <span className="font-semibold text-green-300"> rewarded</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in-up animation-delay-600">
              <Button variant="hero" size="lg" asChild className="shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-300 text-lg px-8 py-6 h-auto">
                <Link to="/edu-rev">
                  <BookOpen className="mr-2 h-6 w-6" />
                  Explore Pathways
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-110 transition-all duration-300 bg-white/5 border-2 border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto shadow-xl">
                <Lightbulb className="mr-2 h-6 w-6" />
                Learn More
              </Button>
            </div>

            {/* Enhanced Stats with animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up animation-delay-800">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:bg-white/10 cursor-pointer shadow-2xl">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400/20 to-blue-500/20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Pathways */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary px-6 py-2 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              CHOOSE YOUR JOURNEY
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black academic-heading mb-6 px-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              Choose Your Path to Excellence
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Specialized pathways designed to <span className="text-primary font-semibold">capture</span>, <span className="text-green-600 font-semibold">verify</span>, and <span className="text-orange-600 font-semibold">reward</span> your achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <Card 
                  key={index} 
                  className="relative shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] group overflow-hidden border-2 border-transparent hover:border-primary/20 bg-gradient-to-br from-white to-gray-50/50"
                >
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 ${pathway.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
                  </div>
                  
                  <CardHeader className="relative z-10 p-8">
                    <div className="flex items-start gap-5">
                      <div className={`flex items-center justify-center w-20 h-20 rounded-3xl ${pathway.gradient} shadow-2xl mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="h-10 w-10 text-white drop-shadow-md" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">{pathway.title}</CardTitle>
                        <CardDescription className="text-lg md:text-xl font-semibold text-primary/80 mb-3">
                          {pathway.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                      {pathway.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-6 p-8 pt-0">
                    <div className="space-y-3 bg-gray-50/50 rounded-2xl p-5 border border-gray-100">
                      {pathway.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/item">
                          <div className="mt-0.5">
                            <CheckCircle className="h-5 w-5 text-green-600 group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-sm md:text-base text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full mt-6 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 text-base py-6 h-auto font-semibold"
                      variant={index === 0 ? "hero" : "academic"}
                    >
                      <Link to={pathway.href}>
                        <Target className="mr-2 h-5 w-5" />
                        Explore {pathway.title}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary px-5 py-2 font-semibold">
              <Zap className="w-4 h-4 mr-2 inline" />
              QUICK ACCESS
            </Badge>
            <h3 className="text-3xl md:text-5xl font-black academic-heading mb-4">
              Fast Track Your Journey
            </h3>
            <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto">
              Frequently used features and important resources at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer shadow-lg border-2 hover:border-primary/30 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                  
                  <CardContent className="flex flex-col items-center text-center space-y-4 p-8 relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-bold text-base md:text-lg group-hover:text-primary transition-colors">{link.name}</span>
                    <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Card className="max-w-5xl mx-auto shadow-2xl bg-gradient-to-br from-white via-gray-50/50 to-white border-2 border-primary/10 hover:border-primary/20 transition-all duration-500 overflow-hidden group">
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1500"></div>
            </div>
            
            <CardContent className="p-10 md:p-16 relative z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <GraduationCap className="h-12 w-12 md:h-14 md:w-14 text-primary" />
              </div>
              
              <h3 className="text-3xl md:text-5xl font-black academic-heading mb-6 px-4">
                <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
                  Ready to Unlock Your Potential?
                </span>
              </h3>
              
              <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
                Join <span className="font-bold text-primary">thousands of students</span> who have already transformed their academic journey. 
                Start submitting your achievements today and unlock the <span className="font-bold text-orange-600">benefits you deserve</span>.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all duration-500 text-lg px-10 py-7 h-auto font-semibold">
                  <Link to="/edu-rev">
                    <Award className="mr-2 h-6 w-6" />
                    Submit First Achievement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto hover:scale-110 transition-all duration-500 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-lg px-10 py-7 h-auto font-semibold shadow-lg" asChild>
                  <Link to="/projects">
                    <Users className="mr-2 h-6 w-6" />
                    Browse Projects
                  </Link>
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Secure & Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">94.7% Success Rate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;