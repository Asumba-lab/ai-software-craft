
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Shield, AlertTriangle, Users, Scale, Lightbulb, FileText } from "lucide-react";
import { useState } from "react";

const EthicalReflection = () => {
  const [reflections, setReflections] = useState({
    biases: "",
    fairnessTools: "",
    bonusProposal: ""
  });

  const handleReflectionChange = (field: string, value: string) => {
    setReflections(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-purple-600" />
            <CardTitle className="text-purple-900">Part 3: Ethical Reflection</CardTitle>
            <Badge className="bg-purple-600 hover:bg-purple-700">10% Weight</Badge>
          </div>
          <CardDescription className="text-purple-700">
            Analyze ethical implications of AI deployment in software engineering
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Context Scenario */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-slate-600" />
            <CardTitle>Scenario Context</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Deployment Scenario</h4>
                <p className="text-blue-800">
                  Your predictive model from Task 3 is deployed in a company to help prioritize software 
                  issues and allocate development resources. Consider the ethical implications of this deployment.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ethical Analysis Questions */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Bias Analysis */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-900">Potential Biases</CardTitle>
            </div>
            <CardDescription>
              Identify and analyze potential biases in your dataset and model
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-medium text-red-900 mb-2">Key Areas to Consider:</h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Underrepresented teams or departments</li>
                <li>• Historical data biases</li>
                <li>• Geographic or cultural factors</li>
                <li>• Experience level disparities</li>
                <li>• Technology stack preferences</li>
              </ul>
            </div>
            <Textarea
              placeholder="Discuss potential biases in your dataset (e.g., underrepresented teams, historical data skews, etc.)..."
              value={reflections.biases}
              onChange={(e) => handleReflectionChange("biases", e.target.value)}
              className="min-h-[150px] bg-white/80 backdrop-blur-sm"
            />
          </CardContent>
        </Card>

        {/* Fairness Tools */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-900">Fairness Solutions</CardTitle>
            </div>
            <CardDescription>
              Explore how fairness tools can address identified biases
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-900 mb-2">IBM AI Fairness 360 Features:</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Bias detection algorithms</li>
                <li>• Fairness metrics evaluation</li>
                <li>• Bias mitigation techniques</li>
                <li>• Explainable AI capabilities</li>
                <li>• Continuous monitoring tools</li>
              </ul>
            </div>
            <Textarea
              placeholder="How could fairness tools like IBM AI Fairness 360 address the biases you identified?..."
              value={reflections.fairnessTools}
              onChange={(e) => handleReflectionChange("fairnessTools", e.target.value)}
              className="min-h-[150px] bg-white/80 backdrop-blur-sm"
            />
          </CardContent>
        </Card>
      </div>

      {/* Bonus Task */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-amber-900">Bonus Task: Innovation Challenge</CardTitle>
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white">+10% Extra Credit</Badge>
          </div>
          <CardDescription className="text-amber-700">
            Propose an AI tool to solve a software engineering problem not covered in class
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-amber-100 rounded-lg border border-amber-300">
            <h4 className="font-semibold text-amber-900 mb-2">Innovation Ideas:</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-amber-800">
              <div>
                <strong>• Automated Documentation Generation</strong>
                <p className="text-xs mt-1">AI-powered code commenting and README generation</p>
              </div>
              <div>
                <strong>• Smart Code Refactoring</strong>
                <p className="text-xs mt-1">AI-driven code optimization and structure improvement</p>
              </div>
              <div>
                <strong>• Intelligent Merge Conflict Resolution</strong>
                <p className="text-xs mt-1">AI-assisted Git merge conflict detection and resolution</p>
              </div>
              <div>
                <strong>• Performance Bottleneck Prediction</strong>
                <p className="text-xs mt-1">ML-based performance issue prediction and optimization</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <h5 className="font-medium text-amber-900 mb-1">Purpose</h5>
                <p className="text-xs text-amber-700">What problem does it solve?</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <h5 className="font-medium text-amber-900 mb-1">Workflow</h5>
                <p className="text-xs text-amber-700">How does it work?</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-amber-200">
                <h5 className="font-medium text-amber-900 mb-1">Impact</h5>
                <p className="text-xs text-amber-700">What's the expected benefit?</p>
              </div>
            </div>
            
            <Textarea
              placeholder="Describe your innovative AI tool proposal (1-page: purpose, workflow, and impact)..."
              value={reflections.bonusProposal}
              onChange={(e) => handleReflectionChange("bonusProposal", e.target.value)}
              className="min-h-[200px] bg-white/80 backdrop-blur-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Ethical Guidelines */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-slate-600" />
            Ethical AI Development Principles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Transparency</h4>
                  <p className="text-sm text-slate-600">Make AI decision-making processes explainable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-green-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Fairness</h4>
                  <p className="text-sm text-slate-600">Ensure equitable treatment across all user groups</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-purple-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Accountability</h4>
                  <p className="text-sm text-slate-600">Take responsibility for AI system outcomes</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-red-600">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Privacy</h4>
                  <p className="text-sm text-slate-600">Protect user data and maintain confidentiality</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-orange-600">5</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Reliability</h4>
                  <p className="text-sm text-slate-600">Ensure consistent and dependable performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-teal-600">6</span>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">Inclusivity</h4>
                  <p className="text-sm text-slate-600">Design for diverse users and use cases</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 flex-1">
          <Shield className="h-4 w-4 mr-2" />
          Save Ethical Analysis
        </Button>
        <Button variant="outline" size="lg" className="flex-1">
          Export Reflection
        </Button>
      </div>
    </div>
  );
};

export default EthicalReflection;
