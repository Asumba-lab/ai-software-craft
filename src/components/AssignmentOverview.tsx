
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Brain, Code, Shield, Trophy, Clock, Target, Lightbulb, AlertCircle } from "lucide-react";

const AssignmentOverview = () => {
  return (
    <div className="space-y-8">
      {/* Objective */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-blue-900">Assignment Objective</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800 leading-relaxed">
            This assignment evaluates your understanding of AI applications in software engineering 
            through theoretical analysis, practical implementation, and ethical reflection. You will 
            demonstrate how AI can automate tasks, enhance decision-making, and address challenges 
            in software development.
          </p>
        </CardContent>
      </Card>

      {/* Grading Rubric */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            <CardTitle>Grading Rubric</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <Brain className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-blue-900">Theoretical Depth & Accuracy</div>
                  <div className="text-sm text-blue-700">Understanding of AI concepts and applications</div>
                </div>
              </div>
              <Badge className="bg-blue-600 hover:bg-blue-700">30%</Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium text-green-900">Code Functionality & Quality</div>
                  <div className="text-sm text-green-700">Implementation, documentation, and efficiency</div>
                </div>
              </div>
              <Badge className="bg-green-600 hover:bg-green-700">50%</Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-medium text-purple-900">Ethical Reflection</div>
                  <div className="text-sm text-purple-700">Bias awareness and fairness considerations</div>
                </div>
              </div>
              <Badge className="bg-purple-600 hover:bg-purple-700">10%</Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-orange-600" />
                <div>
                  <div className="font-medium text-orange-900">Creativity & Presentation</div>
                  <div className="text-sm text-orange-700">Innovation and clear communication</div>
                </div>
              </div>
              <Badge className="bg-orange-600 hover:bg-orange-700">10%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Resources */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle>Tools & Resources</CardTitle>
          <CardDescription>Essential tools and platforms for completing your assignment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">AI Tools</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">GitHub Copilot</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Testim.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Google Colab</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Datasets</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Kaggle Datasets</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">GitHub Issues</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Breast Cancer Dataset</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900">Libraries</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Scikit-learn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Pandas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Selenium</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why This Matters */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-900">Why This Matters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Trophy className="h-3 w-3 text-white" />
            </div>
            <div>
              <div className="font-medium text-green-900">Career Relevance</div>
              <div className="text-sm text-green-700">Mastery of AI tools like Copilot and Selenium is highly sought after in tech roles</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Shield className="h-3 w-3 text-white" />
            </div>
            <div>
              <div className="font-medium text-green-900">Ethical Awareness</div>
              <div className="text-sm text-green-700">Prepares you to build fair and inclusive AI-driven software</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pro Tip */}
      <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-amber-900">Pro Tip</div>
              <div className="text-amber-800">Start early and test incrementally—AI thrives on iteration!</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 flex-1">
          <Clock className="h-4 w-4 mr-2" />
          Start Assignment
        </Button>
        <Button variant="outline" size="lg" className="flex-1">
          Download Resources
        </Button>
      </div>
    </div>
  );
};

export default AssignmentOverview;
