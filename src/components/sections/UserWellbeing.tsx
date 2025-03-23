
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const UserWellbeing: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [assessment, setAssessment] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  // Mock data for wellness metrics
  const wellnessData = [
    { name: "Stress", value: 70 },
    { name: "Sleep", value: 60 },
    { name: "Mood", value: 75 },
    { name: "Energy", value: 50 },
    { name: "Focus", value: 65 },
  ];

  useEffect(() => {
    // Check if user is logged in and has assessment data
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
    
    if (loginStatus) {
      setUserName(localStorage.getItem("userName") || "User");
      setAssessment(localStorage.getItem("wellbeingAssessment") || "");
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <section className="py-12 bg-wellness-50">
        <div className="container mx-auto px-6">
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-medium mb-4">
                Log in to see your wellness assessment
              </h3>
              <p className="text-wellness-600 mb-6">
                Create an account or log in to access your personalized wellness journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (!assessment) {
    return (
      <section className="py-12 bg-wellness-50">
        <div className="container mx-auto px-6">
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-medium mb-4">
                Complete your wellness assessment
              </h3>
              <p className="text-wellness-600 mb-6">
                Take a few minutes to tell us about your wellbeing so we can provide personalized recommendations
              </p>
              <Button asChild>
                <Link to="/wellbeing-assessment">Start Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-wellness-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          {userName}'s Wellness Assessment
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line">
                {assessment}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Wellness Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={wellnessData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center">
                <Button asChild className="bg-wellness-500 hover:bg-wellness-600">
                  <Link to="/booking">Book a Session</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UserWellbeing;
