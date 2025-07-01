
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Upload, Github, FileText, Video, Users, Calendar, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const SubmissionGuidelines = () => {
  const [submissionStatus, setSubmissionStatus] = useState({
    code: false,
    report: false,
    video: false
  });

  const { toast } = useToast();

  const submissionProgress = Object.values(submissionStatus).filter(Boolean).length * 33.33;

  const handleCodeSubmission = () => {
    window.open('https://github.com/new', '_blank');
    setSubmissionStatus(prev => ({ ...prev, code: true }));
    toast({
      title: "GitHub Repository Created",
      description: "Your code repository is ready for submission.",
    });
  };

  const handleReportSubmission = () => {
    // Simulate sharing as article
    setSubmissionStatus(prev => ({ ...prev, report: true }));
    toast({
      title: "Report Shared Successfully",
      description: "Your report has been published as an article.",
    });
  };

  const handleVideoSubmission = () => {
    // Simulate video recording
    toast({
      title: "Recording Started",
      description: "Please record your 3-minute demo presentation.",
    });
    
    setTimeout(() => {
      setSubmissionStatus(prev => ({ ...prev, video: true }));
      toast({
        title: "Video Uploaded",
        description: "Your presentation has been submitted successfully.",
      });
    }, 3000);
  };

  const handleFinalSubmission = () => {
    const completedItems = Object.values(submissionStatus).filter(Boolean).length;
    if (completedItems === 3) {
      toast({
        title: "Assignment Submitted Successfully!",
        description: "All components have been submitted. Good luck!",
      });
    } else {
      toast({
        title: "Incomplete Submission",
        description: `Please complete ${3 - completedItems} more component(s) before final submission.`,
        variant: "destructive",
      });
    }
  };

  const handlePreviewSubmission = () => {
    const savedAnswers = localStorage.getItem('theoreticalAnalysisAnswers');
    const savedReflections = localStorage.getItem('ethicalReflections');
    
    if (savedAnswers || savedReflections) {
      toast({
        title: "Preview Available",
        description: "Your saved responses are ready for review.",
      });
    } else {
      toast({
        title: "No Content to Preview",
        description: "Please complete some sections first.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-indigo-600" />
            <CardTitle className="text-indigo-900">Submission Guidelines</CardTitle>
            <Badge className="bg-indigo-600 hover:bg-indigo-700">Final Deliverables</Badge>
          </div>
          <CardDescription className="text-indigo-700">
            Complete submission requirements and deadlines for your AI Software Engineering assignment
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Submission Progress */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Submission Progress</CardTitle>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              {Math.round(submissionProgress)}% Complete
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={submissionProgress} className="h-3" />
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className={`p-3 ${submissionStatus.code ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} rounded-lg border`}>
              {submissionStatus.code ? (
                <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
              ) : (
                <AlertCircle className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              )}
              <div className={`text-sm font-medium ${submissionStatus.code ? 'text-green-900' : 'text-yellow-900'}`}>
                {submissionStatus.code ? 'Code Submitted' : 'Code Pending'}
              </div>
            </div>
            <div className={`p-3 ${submissionStatus.report ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} rounded-lg border`}>
              {submissionStatus.report ? (
                <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
              ) : (
                <AlertCircle className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
              )}
              <div className={`text-sm font-medium ${submissionStatus.report ? 'text-green-900' : 'text-yellow-900'}`}>
                {submissionStatus.report ? 'Report Submitted' : 'Report Pending'}
              </div>
            </div>
            <div className={`p-3 ${submissionStatus.video ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200'} rounded-lg border`}>
              {submissionStatus.video ? (
                <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
              ) : (
                <AlertCircle className="h-6 w-6 text-slate-400 mx-auto mb-2" />
              )}
              <div className={`text-sm font-medium ${submissionStatus.video ? 'text-green-900' : 'text-slate-600'}`}>
                {submissionStatus.video ? 'Video Submitted' : 'Video Pending'}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Three Submission Components */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Code Submission */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-blue-900">Code Submission</CardTitle>
            </div>
            <CardDescription>Well-commented scripts and notebooks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Requirements:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Python functions with AI completion</li>
                <li>• Selenium test automation scripts</li>
                <li>• Jupyter notebook with ML model</li>
                <li>• Clear code documentation</li>
                <li>• Performance benchmarks</li>
              </ul>
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handleCodeSubmission}
            >
              <Github className="h-4 w-4 mr-2" />
              Submit to GitHub
            </Button>
            <div className="text-center">
              <Badge variant="outline" className={submissionStatus.code ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}>
                {submissionStatus.code ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Submitted
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Ready to Submit
                  </>
                )}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Report Submission */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-green-600" />
              <CardTitle className="text-green-900">Report Submission</CardTitle>
            </div>
            <CardDescription>PDF with answers and reflections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">Requirements:</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Theoretical analysis answers</li>
                <li>• Case study analysis</li>
                <li>• Implementation screenshots</li>
                <li>• Ethical reflection essay</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={handleReportSubmission}
            >
              <FileText className="h-4 w-4 mr-2" />
              Share as Article
            </Button>
            <div className="text-center">
              <Badge variant="outline" className={submissionStatus.report ? "bg-green-50 text-green-700 border-green-200" : "bg-yellow-50 text-yellow-700 border-yellow-200"}>
                {submissionStatus.report ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Submitted
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-3 w-3 mr-1" />
                    In Progress
                  </>
                )}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Presentation Submission */}
        <Card className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5 text-purple-600" />
              <CardTitle className="text-purple-900">Video Presentation</CardTitle>
            </div>
            <CardDescription>3-minute demo of AI implementation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Requirements:</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Live code demonstration</li>
                <li>• AI tool comparison</li>
                <li>• Test automation showcase</li>
                <li>• Model performance results</li>
                <li>• Key insights summary</li>
              </ul>
            </div>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={handleVideoSubmission}
            >
              <Video className="h-4 w-4 mr-2" />
              Record Demo
            </Button>
            <div className="text-center">
              <Badge variant="outline" className={submissionStatus.video ? "bg-green-50 text-green-700 border-green-200" : "bg-slate-50 text-slate-600 border-slate-200"}>
                {submissionStatus.video ? (
                  <>
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Submitted
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Not Started
                  </>
                )}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Submission Platforms */}
      <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
        <CardHeader>
          <CardTitle>Submission Platforms</CardTitle>
          <CardDescription>Where to submit each component of your assignment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <Github className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">GitHub Repository</h4>
              <p className="text-sm text-slate-600 mb-4">Code, notebooks, and documentation</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://github.com/new', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Create Repository
              </Button>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <Users className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">Community Platform</h4>
              <p className="text-sm text-slate-600 mb-4">Report as published article</p>
              <Link to="/community">
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
              </Link>
            </div>
            
            <div className="text-center p-6 bg-slate-50 rounded-lg border border-slate-200">
              <Video className="h-12 w-12 text-slate-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">Group Platform</h4>
              <p className="text-sm text-slate-600 mb-4">Video demo for peer review</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast({ title: "Video Platform", description: "Redirecting to video submission platform..." })}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Upload Video
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Deadline Information */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-red-600" />
            <CardTitle className="text-red-900">Important Deadline</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-red-900 mb-1">7 Days Remaining</h4>
              <p className="text-red-700">Complete all submissions before the deadline</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-600">7</div>
              <div className="text-sm text-red-700">Days Left</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-indigo-600 hover:bg-indigo-700 flex-1"
          onClick={handleFinalSubmission}
        >
          <Upload className="h-4 w-4 mr-2" />
          Submit Assignment
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1"
          onClick={handlePreviewSubmission}
        >
          <FileText className="h-4 w-4 mr-2" />
          Preview Submission
        </Button>
        <Link to="/community">
          <Button variant="outline" size="lg" className="w-full">
            <Users className="h-4 w-4 mr-2" />
            Get Help
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubmissionGuidelines;
