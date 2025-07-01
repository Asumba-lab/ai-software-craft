
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Brain, HelpCircle, BookOpen, FileText, CheckCircle2, ExternalLink, Save, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from 'jspdf';

const TheoreticalAnalysis = () => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    caseStudy: ""
  });

  const { toast } = useToast();

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSaveAnswers = () => {
    // Save to localStorage
    localStorage.setItem('theoreticalAnalysisAnswers', JSON.stringify(answers));
    
    toast({
      title: "Answers Saved Successfully",
      description: "Your responses have been saved and can be restored later.",
    });
  };

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = 30;

    // Title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("AI Software Engineering - Theoretical Analysis", margin, yPosition);
    yPosition += 20;

    // Date
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, margin, yPosition);
    yPosition += 20;

    // Question 1
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Q1: AI-Driven Code Generation Tools", margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const q1Lines = doc.splitTextToSize(answers.q1 || "No answer provided", maxWidth);
    doc.text(q1Lines, margin, yPosition);
    yPosition += q1Lines.length * 5 + 10;

    // Question 2
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Q2: Supervised vs Unsupervised Learning", margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const q2Lines = doc.splitTextToSize(answers.q2 || "No answer provided", maxWidth);
    doc.text(q2Lines, margin, yPosition);
    yPosition += q2Lines.length * 5 + 10;

    // Check if we need a new page
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 30;
    }

    // Question 3
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Q3: Bias Mitigation in AI", margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const q3Lines = doc.splitTextToSize(answers.q3 || "No answer provided", maxWidth);
    doc.text(q3Lines, margin, yPosition);
    yPosition += q3Lines.length * 5 + 10;

    // Case Study
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 30;
    }

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Case Study Analysis: AIOps Efficiency", margin, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const caseStudyLines = doc.splitTextToSize(answers.caseStudy || "No answer provided", maxWidth);
    doc.text(caseStudyLines, margin, yPosition);

    // Save the PDF
    doc.save('theoretical-analysis-answers.pdf');
    
    toast({
      title: "PDF Export Complete",
      description: "Your theoretical analysis has been exported successfully.",
    });
  };

  // Load saved answers on component mount
  useState(() => {
    const savedAnswers = localStorage.getItem('theoreticalAnalysisAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  });

  const articles = [
    {
      title: "AI in DevOps: Automating Deployment Pipelines",
      description: "Comprehensive guide on how AI transforms DevOps practices",
      url: "https://www.redhat.com/en/topics/devops/what-is-aiops"
    },
    {
      title: "Machine Learning for Software Engineering",
      description: "Research paper on ML applications in software development",
      url: "https://arxiv.org/abs/1909.11436"
    },
    {
      title: "AIOps: The Future of IT Operations",
      description: "Industry insights on AI-powered IT operations",
      url: "https://www.ibm.com/topics/aiops"
    },
    {
      title: "Automated Testing with AI",
      description: "Best practices for AI-driven testing strategies",
      url: "https://www.selenium.dev/documentation/test_practices/encouraged/test_automation/"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-blue-900">Part 1: Theoretical Analysis</CardTitle>
            <Badge className="bg-blue-600 hover:bg-blue-700">30% Weight</Badge>
          </div>
          <CardDescription className="text-blue-700">
            Demonstrate your understanding of AI concepts in software engineering
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Short Answer Questions */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-slate-600" />
            <CardTitle>Short Answer Questions</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Question 1 */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Q1</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    AI-Driven Code Generation Tools
                  </h4>
                  <p className="text-slate-700">
                    Explain how AI-driven code generation tools (e.g., GitHub Copilot) reduce development time. 
                    What are their limitations?
                  </p>
                </div>
              </div>
            </div>
            <Textarea
              placeholder="Enter your answer here..."
              value={answers.q1}
              onChange={(e) => handleAnswerChange("q1", e.target.value)}
              className="min-h-[120px] bg-white/80 backdrop-blur-sm"
            />
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Q2</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Supervised vs Unsupervised Learning
                  </h4>
                  <p className="text-slate-700">
                    Compare supervised and unsupervised learning in the context of automated bug detection.
                  </p>
                </div>
              </div>
            </div>
            <Textarea
              placeholder="Enter your answer here..."
              value={answers.q2}
              onChange={(e) => handleAnswerChange("q2", e.target.value)}
              className="min-h-[120px] bg-white/80 backdrop-blur-sm"
            />
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Q3</Badge>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Bias Mitigation in AI
                  </h4>
                  <p className="text-slate-700">
                    Why is bias mitigation critical when using AI for user experience personalization?
                  </p>
                </div>
              </div>
            </div>
            <Textarea
              placeholder="Enter your answer here..."
              value={answers.q3}
              onChange={(e) => handleAnswerChange("q3", e.target.value)}
              className="min-h-[120px] bg-white/80 backdrop-blur-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Case Study Analysis */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-slate-600" />
            <CardTitle>Case Study Analysis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-orange-900 mb-3">Required Reading Materials</h4>
                <p className="text-orange-800 mb-4">
                  Access the following articles to complete your case study analysis:
                </p>
                
                <div className="grid gap-3">
                  {articles.map((article, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-lg border border-orange-200">
                      <div className="flex-1">
                        <h5 className="font-medium text-orange-900 mb-1">{article.title}</h5>
                        <p className="text-sm text-orange-700">{article.description}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-orange-700 border-orange-300 hover:bg-orange-50 ml-3"
                        onClick={() => window.open(article.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Access Article
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Analysis Question</h4>
              <p className="text-slate-700">
                How does AIOps improve software deployment efficiency? Provide two examples from the articles above.
              </p>
            </div>
            <Textarea
              placeholder="Provide your analysis with two specific examples from the required reading materials..."
              value={answers.caseStudy}
              onChange={(e) => handleAnswerChange("caseStudy", e.target.value)}
              className="min-h-[150px] bg-white/80 backdrop-blur-sm"
            />
          </div>
        </CardContent>
      </Card>

      {/* Progress Tracker */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium text-green-900">Progress Tracking</div>
                <div className="text-sm text-green-700">Complete all questions to proceed</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">
                {Object.values(answers).filter(answer => answer.trim()).length}/4
              </div>
              <div className="text-sm text-green-700">Completed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 flex-1"
          onClick={handleSaveAnswers}
        >
          <Save className="h-4 w-4 mr-2" />
          Save Answers
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1"
          onClick={handleExportToPDF}
        >
          <Download className="h-4 w-4 mr-2" />
          Export to PDF
        </Button>
      </div>
    </div>
  );
};

export default TheoreticalAnalysis;
