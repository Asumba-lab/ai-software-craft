
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, Code, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Assignment = () => {
  const progress = 25;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-slate-900">Assignment Dashboard</h1>
              <p className="text-sm text-slate-600">Track your progress and complete tasks</p>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Progress: {progress}%
            </Badge>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-900">Theoretical Analysis</CardTitle>
              </div>
              <CardDescription>Answer questions and analyze case studies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Progress</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Complete
                  </Badge>
                </div>
                <Progress value={100} className="h-2" />
                <Link to="/">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-green-600" />
                <CardTitle className="text-green-900">Practical Implementation</CardTitle>
              </div>
              <CardDescription>Code tasks and AI implementations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Progress</span>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    In Progress
                  </Badge>
                </div>
                <Progress value={60} className="h-2" />
                <Link to="/">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Continue Work
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-purple-900">Ethical Reflection</CardTitle>
              </div>
              <CardDescription>Discuss AI ethics and bias mitigation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Progress</span>
                  <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                    Not Started
                  </Badge>
                </div>
                <Progress value={0} className="h-2" />
                <Link to="/">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Start Task
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              <CardTitle className="text-orange-900">Deadline Reminder</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold text-orange-900 mb-1">7 Days Remaining</h4>
                <p className="text-orange-700">Complete all tasks before the deadline</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-orange-600">7</div>
                <div className="text-sm text-orange-700">Days Left</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Assignment;
