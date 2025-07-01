
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, MessageCircle, Heart, Share, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const discussions = [
    {
      title: "GitHub Copilot vs Manual Coding: Performance Comparison",
      author: "Sarah Chen",
      replies: 24,
      likes: 89,
      timeAgo: "2 hours ago",
      tags: ["AI Tools", "Code Quality"]
    },
    {
      title: "Bias in ML Models: Real-world Case Studies",
      author: "Alex Rodriguez",
      replies: 15,
      likes: 67,
      timeAgo: "5 hours ago",
      tags: ["Ethics", "Machine Learning"]
    },
    {
      title: "Selenium Test Automation: Best Practices",
      author: "Mike Johnson",
      replies: 31,
      likes: 112,
      timeAgo: "1 day ago",
      tags: ["Testing", "Automation"]
    },
    {
      title: "AIOps Implementation: Lessons Learned",
      author: "Lisa Wang",
      replies: 18,
      likes: 45,
      timeAgo: "2 days ago",
      tags: ["DevOps", "AI"]
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
              <h1 className="text-xl font-bold text-slate-900">Community Discussion</h1>
              <p className="text-sm text-slate-600">#AISoftwareAssignment</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              New Discussion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Join the Discussion</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connect with fellow students, share insights, and get help with your AI software engineering assignment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  Recent Discussions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h4>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      {discussion.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>by {discussion.author} • {discussion.timeAgo}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {discussion.replies}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {discussion.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">247</div>
                  <div className="text-sm text-green-700">Active Members</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">89</div>
                  <div className="text-sm text-blue-700">Discussions</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <div className="text-sm text-purple-700">Solutions Shared</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-900">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-orange-800">
                  <p>• Be respectful and constructive</p>
                  <p>• Share code snippets and solutions</p>
                  <p>• Help others learn and grow</p>
                  <p>• Use relevant tags for discussions</p>
                  <p>• No plagiarism or academic dishonesty</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
