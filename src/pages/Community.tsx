
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Users, MessageCircle, Heart, Share, ExternalLink, Plus, Search, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newComment, setNewComment] = useState("");
  const { toast } = useToast();

  const discussions = [
    {
      id: 1,
      title: "GitHub Copilot vs Manual Coding: Performance Comparison",
      author: "Sarah Chen",
      replies: 24,
      likes: 89,
      timeAgo: "2 hours ago",
      tags: ["AI Tools", "Code Quality"],
      content: "I've been testing GitHub Copilot for the past month and wanted to share my findings. The AI-assisted coding significantly reduced my development time for boilerplate code, but I noticed some issues with complex algorithms. Has anyone else experienced similar results?",
      comments: [
        { author: "Mike Johnson", content: "Great analysis! I found similar results with Tabnine. The AI suggestions are excellent for standard patterns but need human oversight for edge cases.", timeAgo: "1 hour ago" },
        { author: "Lisa Wang", content: "Have you tried comparing the performance metrics? I'd be interested in seeing actual benchmark data.", timeAgo: "45 minutes ago" }
      ]
    },
    {
      id: 2,
      title: "Bias in ML Models: Real-world Case Studies",
      author: "Alex Rodriguez", 
      replies: 15,
      likes: 67,
      timeAgo: "5 hours ago",
      tags: ["Ethics", "Machine Learning"],
      content: "Discussing the ethical implications of AI bias in software engineering. I've encountered several cases where predictive models showed unfair bias towards certain user groups. What mitigation strategies have worked for your teams?",
      comments: [
        { author: "Emma Thompson", content: "IBM AI Fairness 360 has been helpful in our projects. The bias detection algorithms caught issues we missed during initial testing.", timeAgo: "3 hours ago" },
        { author: "David Park", content: "We implemented continuous monitoring to track model performance across different demographic groups. Essential for production systems.", timeAgo: "2 hours ago" }
      ]
    },
    {
      id: 3,
      title: "Selenium Test Automation: Best Practices",
      author: "Mike Johnson",
      replies: 31,
      likes: 112,
      timeAgo: "1 day ago",
      tags: ["Testing", "Automation"],
      content: "Sharing lessons learned from implementing Selenium automation in large-scale projects. Key insights: proper element selection strategies, handling dynamic content, and maintaining test reliability across different environments.",
      comments: [
        { author: "Sarah Chen", content: "The section on dynamic element handling is gold! We struggled with this for months until implementing similar strategies.", timeAgo: "18 hours ago" },
        { author: "James Wilson", content: "Could you elaborate on cross-browser testing strategies? We're seeing inconsistent results across different browsers.", timeAgo: "12 hours ago" }
      ]
    },
    {
      id: 4,
      title: "AIOps Implementation: Lessons Learned",
      author: "Lisa Wang",
      replies: 18,
      likes: 45,
      timeAgo: "2 days ago",
      tags: ["DevOps", "AI"],
      content: "Just completed a 6-month AIOps implementation project. The predictive analytics for system failures reduced our downtime by 40%. However, the initial setup and training phase was more complex than expected. Happy to share detailed insights.",
      comments: [
        { author: "Alex Rodriguez", content: "That's impressive! What were the main challenges during the training phase? We're planning a similar implementation.", timeAgo: "1 day ago" },
        { author: "Tom Brown", content: "Which AIOps platform did you use? Looking at options for our organization.", timeAgo: "20 hours ago" }
      ]
    }
  ];

  const handleViewDiscussion = (discussion) => {
    setSelectedDiscussion(discussion);
    toast({
      title: "Discussion Opened",
      description: `Viewing "${discussion.title}"`,
    });
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      toast({
        title: "Comment Added",
        description: "Your comment has been posted to the discussion.",
      });
      setNewComment("");
    }
  };

  const handleNewDiscussion = () => {
    toast({
      title: "New Discussion",
      description: "Opening discussion creation form...",
    });
  };

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
            <Button 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleNewDiscussion}
            >
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
            {!selectedDiscussion ? (
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
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewDiscussion(discussion)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-slate-700 mb-3 line-clamp-2">
                        {discussion.content}
                      </p>
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
            ) : (
              <Card className="bg-white/60 backdrop-blur-sm border-slate-200">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedDiscussion(null)}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Discussions
                    </Button>
                  </div>
                  <CardTitle>{selectedDiscussion.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    {selectedDiscussion.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-slate-900">{selectedDiscussion.author}</span>
                      <span className="text-sm text-slate-600">{selectedDiscussion.timeAgo}</span>
                    </div>
                    <p className="text-slate-700">{selectedDiscussion.content}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Comments ({selectedDiscussion.comments.length})</h4>
                    {selectedDiscussion.comments.map((comment, index) => (
                      <div key={index} className="p-3 bg-white rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-900">{comment.author}</span>
                          <span className="text-sm text-slate-600">{comment.timeAgo}</span>
                        </div>
                        <p className="text-sm text-slate-700">{comment.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Add Comment</h4>
                    <Textarea
                      placeholder="Share your thoughts or ask a question..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="bg-white/80 backdrop-blur-sm"
                    />
                    <Button 
                      onClick={handleAddComment}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Post Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
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

            <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-900">Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full text-left justify-start"
                  size="sm"
                  onClick={() => toast({ title: "AI Tools Help", description: "Opening AI tools discussion thread..." })}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  AI Tools Questions
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-left justify-start"
                  size="sm"
                  onClick={() => toast({ title: "Testing Help", description: "Opening testing automation discussion..." })}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Testing Automation
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-left justify-start"
                  size="sm"
                  onClick={() => toast({ title: "Ethics Help", description: "Opening ethics discussion thread..." })}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Ethics & Bias
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
