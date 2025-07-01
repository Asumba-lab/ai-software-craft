import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, Shield, Rocket, Calendar, Users, FileText, Video, Github } from "lucide-react";
import AssignmentOverview from "@/components/AssignmentOverview";
import TheoreticalAnalysis from "@/components/TheoreticalAnalysis";
import PracticalImplementation from "@/components/PracticalImplementation";
import EthicalReflection from "@/components/EthicalReflection";
import SubmissionGuidelines from "@/components/SubmissionGuidelines";
import { Link } from "react-router-dom";

const Index = () => {
  const progress = 25; // Can be made dynamic

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900">AI Software Engineering</h1>
                <p className="text-sm text-slate-600">Week 4 Assignment Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <Calendar className="h-3 w-3 mr-1" />
                7 Days Left
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Progress: {progress}%
              </Badge>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 mb-6">
            <Rocket className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Building Intelligent Software Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            AI in Software Engineering
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Master AI applications in software engineering through theoretical analysis, 
            practical implementation, and ethical reflection
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">30%</div>
              <div className="text-sm text-slate-600">Theoretical</div>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">50%</div>
              <div className="text-sm text-slate-600">Practical</div>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">10%</div>
              <div className="text-sm text-slate-600">Ethics</div>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">10%</div>
              <div className="text-sm text-slate-600">Creativity</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white/60 backdrop-blur-sm border border-slate-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="theoretical" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Theory
            </TabsTrigger>
            <TabsTrigger value="practical" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Practice
            </TabsTrigger>
            <TabsTrigger value="ethics" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Ethics
            </TabsTrigger>
            <TabsTrigger value="submission" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Submit
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <AssignmentOverview />
          </TabsContent>

          <TabsContent value="theoretical">
            <TheoreticalAnalysis />
          </TabsContent>

          <TabsContent value="practical">
            <PracticalImplementation />
          </TabsContent>

          <TabsContent value="ethics">
            <EthicalReflection />
          </TabsContent>

          <TabsContent value="submission">
            <SubmissionGuidelines />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-md border-t border-slate-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-slate-600">Need help? Join the community discussion</p>
              <p className="text-sm text-slate-500">#AISoftwareAssignment</p>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="hover:bg-blue-50 hover:border-blue-300"
                onClick={() => window.open('https://github.com', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Link to="/community">
                <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300">
                  <Users className="h-4 w-4 mr-2" />
                  Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
