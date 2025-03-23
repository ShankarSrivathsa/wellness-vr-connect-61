
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const WellbeingAssessment: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [assessmentSummary, setAssessmentSummary] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simulated Gemini responses based on the chat script provided
  const simulatedResponses = [
    "Hi there! 👋 Welcome to Serapisuto! I'm here to help you check in with your overall well-being today.\n\nFirst, are you feeling physically okay? 👍 Are you experiencing any pain or physical discomfort? 🤔 Once we've touched on that, we can move on to checking in with your mental well-being. How are you feeling generally? 😊",
    "Thank you for sharing that with me. 🙏 To get a better understanding of how you're doing, could you tell me a bit more about the following?\n\n• *Sleep:* How has your sleep been lately? Are you getting enough restful sleep? 😴\n• *Concentration:* Are you finding it hard to focus during the day? 🧠\n• *Mood:* How would you describe your mood over the past couple of weeks? 😊😔\n• *Stress:* Are you currently experiencing significant stress in any area of your life? 😟\n• *Energy:* How are your energy levels throughout the day? ⚡",
    "Thanks for your responses. Based on what you've shared, I can provide some insights into your wellbeing. 🌟\n\nYou appear to be experiencing some challenges that might benefit from our therapeutic approach. The combination of AR/VR, aromatherapy, and music therapy could help address your specific needs.\n\nWould you like to proceed with a session or explore self-care options? 💭",
    "To proceed with booking a session, please access the options below. You can explore available time slots, select your preferred address, and specify any allergies or sensitivities. 👇\n\n• *Book a Session* 🗓\n• *View Available Therapists* 🧑‍⚕️\n• *Learn More About the Therapy Process* ℹ️\n• *Contact Support* ❓\n\nRemember, these therapies offered by Serapisuto aren't just for mental health. They can also significantly enhance physical healing, whether you're recovering from an accident or dealing with chronic pain. The calming and restorative effects of AR/VR, aromatherapy, and music can aid in the body's natural healing processes. 🌟"
  ];

  const responseIndex = useRef(0);

  // Initial welcome message when component mounts
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: simulatedResponses[0],
      },
    ]);
  }, []);

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response with delay
    setTimeout(() => {
      responseIndex.current = (responseIndex.current + 1) % simulatedResponses.length;
      const botResponse = {
        role: "assistant" as const,
        content: simulatedResponses[responseIndex.current],
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);

      // After a few exchanges, consider the assessment complete
      if (messages.length > 5) {
        setAssessmentComplete(true);
        generateSummary();
      }
    }, 1000);
  };

  const generateSummary = () => {
    // In a real implementation, this would analyze the conversation
    // For now, we'll create a simulated summary
    const userName = localStorage.getItem("userName") || "User";
    const summary = `
      Based on our conversation with ${userName}, we've identified some key areas for attention:
      
      • Sleep quality appears to be affected by stress
      • Concentration and focus challenges are present
      • Mood fluctuations suggest potential for improvement
      • Energy levels are inconsistent throughout the day
      
      Recommended approach: A combination of AR/VR therapy with aromatherapy targeting stress reduction and improved focus. Music therapy sessions focusing on delta wave patterns for improved sleep quality are also advised.
      
      This holistic approach should address both the physical and mental aspects of wellbeing, with benefits expected within 2-3 sessions.
    `;
    
    setAssessmentSummary(summary);
    localStorage.setItem("wellbeingAssessment", summary);
  };

  const handleComplete = () => {
    toast({
      title: "Assessment Complete",
      description: "Thank you for completing your wellbeing assessment.",
    });
    navigate("/");
  };

  const handleSelfAssisted = () => {
    navigate("/blog");
  };

  const handleBookSession = () => {
    navigate("/booking");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wellness-50 pt-4 pb-16 px-4">
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-2xl font-bold text-wellness-800 mb-6 text-center">
          Serapisuto Assessment Guide
        </h1>
        
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="h-[60vh] overflow-y-auto p-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-wellness-500 text-white"
                        : "bg-gray-100 text-wellness-800"
                    }`}
                  >
                    {message.content.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < message.content.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
        </Card>
        
        {assessmentComplete ? (
          <div className="text-center space-y-4">
            <Button 
              onClick={handleComplete} 
              className="bg-wellness-500 hover:bg-wellness-600"
            >
              Complete Assessment
            </Button>
            <div className="flex justify-center space-x-4 mt-4">
              <Button 
                onClick={handleSelfAssisted} 
                variant="outline"
                className="border-wellness-500 text-wellness-600 hover:bg-wellness-50"
              >
                Self Assisted
              </Button>
              <Button 
                onClick={handleBookSession} 
                className="bg-wellness-500 hover:bg-wellness-600"
              >
                Book a Session
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex space-x-2 mb-4">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                disabled={isLoading}
                className="flex-grow"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading}
                className="bg-wellness-500 hover:bg-wellness-600"
              >
                Send
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={handleSelfAssisted} 
                variant="outline"
                className="border-wellness-500 text-wellness-600 hover:bg-wellness-50"
              >
                Self Assisted
              </Button>
              <Button 
                onClick={handleBookSession} 
                className="bg-wellness-500 hover:bg-wellness-600"
              >
                Book a Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WellbeingAssessment;
