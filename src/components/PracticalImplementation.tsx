
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Code, Bot, TestTube, BarChart3, Github, Play, Upload, CheckCircle2 } from "lucide-react";

const PracticalImplementation = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-green-600" />
            <CardTitle className="text-green-900">Part 2: Practical Implementation</CardTitle>
            <Badge className="bg-green-600 hover:bg-green-700">60% Weight</Badge>
          </div>
          <CardDescription className="text-green-700">
            Hands-on implementation of AI tools and techniques in software engineering
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Task Tabs */}
      <Tabs defaultValue="task1" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/60 backdrop-blur-sm border border-slate-200">
          <TabsTrigger value="task1" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <Bot className="h-4 w-4 mr-2" />
            Task 1: AI Code Completion
          </TabsTrigger>
          <TabsTrigger value="task2" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <TestTube className="h-4 w-4 mr-2" />
            Task 2: Automated Testing
          </TabsTrigger>
          <TabsTrigger value="task3" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            <BarChart3 className="h-4 w-4 mr-2" />
            Task 3: Predictive Analytics
          </TabsTrigger>
        </TabsList>

        {/* Task 1: AI-Powered Code Completion */}
        <TabsContent value="task1" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <CardTitle>AI-Powered Code Completion</CardTitle>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  GitHub Copilot/Tabnine
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Task Requirements</h4>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Write a Python function to sort a list of dictionaries by a specific key
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Compare AI-suggested code with your manual implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    Document which version is more efficient and why
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-dashed border-slate-300 hover:border-slate-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 mb-2">AI-Generated Code</h4>
                    <p className="text-sm text-slate-600 mb-4">Upload your AI-assisted implementation</p>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Upload Code
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed border-slate-300 hover:border-slate-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Code className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 mb-2">Manual Implementation</h4>
                    <p className="text-sm text-slate-600 mb-4">Upload your manual code solution</p>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Code
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-amber-900 mb-2">Deliverable</h4>
                  <p className="text-amber-800">Code snippets + 200-word analysis comparing efficiency</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Task 2: Automated Testing */}
        <TabsContent value="task2" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TestTube className="h-5 w-5 text-purple-600" />
                  <CardTitle>Automated Testing with AI</CardTitle>
                </div>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  Selenium/Testim.io
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Task Requirements</h4>
                <ul className="space-y-2 text-purple-800">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    Automate a test case for a login page (valid/invalid credentials)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    Run the test and capture results (success/failure rates)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    Explain how AI improves test coverage vs manual testing
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-green-900">Test Automation</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Valid Login Tests</span>
                        <Badge className="bg-green-600">95%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Invalid Login Tests</span>
                        <Badge className="bg-green-600">92%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-700">Edge Cases</span>
                        <Badge className="bg-green-600">88%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-dashed border-slate-300 hover:border-slate-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Play className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h4 className="font-semibold text-slate-900 mb-2">Run Test Suite</h4>
                    <p className="text-sm text-slate-600 mb-4">Execute your automated tests</p>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      <Play className="h-4 w-4 mr-2" />
                      Start Testing
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-amber-900 mb-2">Deliverable</h4>
                  <p className="text-amber-800">Test script + screenshot of results + 150-word summary</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Task 3: Predictive Analytics */}
        <TabsContent value="task3" className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-orange-600" />
                  <CardTitle>Predictive Analytics for Resource Allocation</CardTitle>
                </div>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  Kaggle Dataset
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">Task Requirements</h4>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    Preprocess data (clean, label, split) from Kaggle Breast Cancer Dataset
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    Train a Random Forest model to predict issue priority (high/medium/low)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                    Evaluate using accuracy and F1-score metrics
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-blue-900 mb-2">Accuracy</h4>
                    <div className="text-3xl font-bold text-blue-600 mb-2">87.5%</div>
                    <Progress value={87.5} className="h-2" />
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-green-900 mb-2">F1-Score</h4>
                    <div className="text-3xl font-bold text-green-600 mb-2">0.84</div>
                    <Progress value={84} className="h-2" />
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-purple-900 mb-2">Precision</h4>
                    <div className="text-3xl font-bold text-purple-600 mb-2">0.86</div>
                    <Progress value={86} className="h-2" />
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-dashed border-slate-300 hover:border-slate-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Jupyter Notebook</h4>
                  <p className="text-sm text-slate-600 mb-4">Upload your complete analysis notebook</p>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Notebook
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-amber-900 mb-2">Deliverable</h4>
                  <p className="text-amber-800">Jupyter Notebook + performance metrics documentation</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Overall Progress */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-green-900 mb-1">Implementation Progress</h4>
              <p className="text-sm text-green-700">Complete all tasks to move to ethics section</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">1/3</div>
              <div className="text-sm text-green-700">Tasks Complete</div>
            </div>
          </div>
          <Progress value={33} className="mt-4 h-3" />
        </CardContent>
      </Card>
    </div>
  );
};

export default PracticalImplementation;
