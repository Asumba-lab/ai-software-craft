
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Brain, Code, Shield, Rocket, Calendar, Users, FileText, Video, Download, Play } from "lucide-react";
import { Link } from "react-router-dom";

const AssignmentOverview = () => {
  const overallProgress = 25;

  return (
    <div className="space-y-8">
      {/* Assignment Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-blue-900">Week 4: AI in Software Engineering</CardTitle>
              </div>
              <CardDescription className="text-blue-700">
                Building Intelligent Software Solutions through AI applications
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link to="/assignment">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <Play className="h-4 w-4 mr-2" />
                  Start Assignment
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-900">Overall Progress</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {overallProgress}% Complete
              </Badge>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Assignment Parts Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-blue-900">Part 1: Theory</CardTitle>
            </div>
            <CardDescription>Theoretical analysis and case studies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className="bg-blue-600 hover:bg-blue-700">30% Weight</Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Complete
              </Badge>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• Short answer questions</p>
              <p>• Case study analysis</p>
              <p>• AI tools comparison</p>
            </div>
            <Progress value={100} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-900">Part 2: Practice</CardTitle>
            </div>
            <CardDescription>Hands-on coding and implementation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className="bg-green-600 hover:bg-green-700">50% Weight</Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                In Progress
              </Badge>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• AI code completion</p>
              <p>• Test automation</p>
              <p>• Predictive analytics</p>
            </div>
            <Progress value={60} className="h-2" />
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-purple-900">Part 3: Ethics</CardTitle>
            </div>
            <CardDescription>Ethical considerations and bias mitigation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className="bg-purple-600 hover:bg-purple-700">10% Weight</Badge>
              <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                Not Started
              </Badge>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• Bias analysis</p>
              <p>• Fairness tools</p>
              <p>• Ethical reflection essay</p>
            </div>
            <Progress value={0} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Tools and Resources */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle>Tools & Resources</CardTitle>
          <CardDescription>Everything you need to complete the assignment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
              <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-medium text-slate-900 mb-1">GitHub Copilot</div>
              <div className="text-sm text-slate-600">AI code completion</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
              <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="font-medium text-slate-900 mb-1">Selenium</div>
              <div className="text-sm text-slate-600">Test automation</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-medium text-slate-900 mb-1">Scikit-learn</div>
              <div className="text-sm text-slate-600">Machine learning</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
              <FileText className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="font-medium text-slate-900 mb-1">Jupyter</div>
              <div className="text-sm text-slate-600">Data analysis</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submission Requirements */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle>Submission Requirements</CardTitle>
          <CardDescription>Three deliverables due in 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Code Submission</h4>
              </div>
              <p className="text-sm text-blue-800 mb-3">Well-commented scripts and notebooks</p>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                GitHub Repository
              </Badge>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-900">Report</h4>
              </div>
              <p className="text-sm text-green-800 mb-3">PDF with answers and reflections</p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Community Article
              </Badge>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <Video className="h-5 w-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900">Video Demo</h4>
              </div>
              <p className="text-sm text-purple-800 mb-3">3-minute implementation showcase</p>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                Group Platform
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deadline and Actions */}
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 flex-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-900">Deadline</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">7 Days</div>
                <div className="text-sm text-red-700">Remaining</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-red-900">Due Date</div>
                <div className="text-sm text-red-700">Submit all components</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 flex-1">
          <CardHeader>
            <CardTitle className="text-blue-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/assignment">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Rocket className="h-4 w-4 mr-2" />
                Continue Assignment
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="outline" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Join Discussion
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssignmentOverview;
