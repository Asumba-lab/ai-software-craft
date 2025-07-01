
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText, Video, Code, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const resources = [
    {
      title: "GitHub Copilot Documentation",
      description: "Complete guide to using GitHub Copilot for AI-powered code completion",
      type: "Documentation",
      icon: Code,
      downloadUrl: "https://docs.github.com/en/copilot",
      size: "Web Guide"
    },
    {
      title: "Selenium WebDriver Guide",
      description: "Learn automated testing with Selenium WebDriver",
      type: "Tutorial",
      icon: FileText,
      downloadUrl: "https://selenium-python.readthedocs.io/",
      size: "Web Guide"
    },
    {
      title: "AI Ethics Framework",
      description: "IBM AI Fairness 360 toolkit and best practices",
      type: "Framework",
      icon: BookOpen,
      downloadUrl: "https://aif360.mybluemix.net/",
      size: "Web Resource"
    },
    {
      title: "Kaggle Dataset Collection",
      description: "Curated datasets for machine learning practice",
      type: "Dataset",
      icon: Download,
      downloadUrl: "https://www.kaggle.com/datasets",
      size: "Various"
    },
    {
      title: "Python ML Libraries Setup",
      description: "Installation guide for Scikit-learn, Pandas, and more",
      type: "Setup Guide",
      icon: Code,
      downloadUrl: "https://scikit-learn.org/stable/install.html",
      size: "Web Guide"
    },
    {
      title: "Video Tutorials Playlist",
      description: "Step-by-step video guides for all assignment tasks",
      type: "Video",
      icon: Video,
      downloadUrl: "https://www.youtube.com/playlist?list=PLExample",
      size: "2.5 hours"
    }
  ];

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
              <h1 className="text-xl font-bold text-slate-900">Download Resources</h1>
              <p className="text-sm text-slate-600">Access all materials needed for your assignment</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Assignment Resources</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to complete your AI in Software Engineering assignment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-blue-900 text-lg">{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {resource.type}
                      </Badge>
                      <span className="text-sm text-slate-600">{resource.size}</span>
                    </div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(resource.downloadUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-green-900">Quick Setup Guide</CardTitle>
            <CardDescription className="text-green-700">
              Follow these steps to get started with your development environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/60 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">1. Install Python & Libraries</h4>
                  <p className="text-sm text-green-800 mb-3">Set up your Python environment with required packages</p>
                  <code className="text-xs bg-green-100 p-2 rounded block text-green-900">
                    pip install pandas scikit-learn selenium jupyter
                  </code>
                </div>
                <div className="p-4 bg-white/60 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">2. Setup GitHub Copilot</h4>
                  <p className="text-sm text-green-800 mb-3">Enable AI-powered code completion in your IDE</p>
                  <Button variant="outline" size="sm" onClick={() => window.open('https://copilot.github.com/', '_blank')}>
                    Get Copilot
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Resources;
