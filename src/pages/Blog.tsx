
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import AnimatedGradientText from "@/components/ui/AnimatedGradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Blog = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "5 Breathing Exercises to Reduce Anxiety",
      excerpt:
        "Learn effective breathing techniques that can help calm your mind and reduce anxiety symptoms in just minutes.",
      image: "/placeholder.svg",
      date: "June 15, 2023",
      author: "Dr. Sarah Johnson",
      categories: ["Anxiety", "Self-Help", "Techniques"],
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How VR Can Improve Focus and Concentration",
      excerpt:
        "Discover the science behind how virtual reality environments can train your brain to improve focus and attention span.",
      image: "/placeholder.svg",
      date: "July 3, 2023",
      author: "Michael Chen",
      categories: ["VR Therapy", "Concentration", "Technology"],
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "The Science of Aromatherapy and Mental Wellness",
      excerpt:
        "Explore how different scents can affect your mood, memory, and overall mental wellbeing according to recent research.",
      image: "/placeholder.svg",
      date: "July 22, 2023",
      author: "Amara Patel",
      categories: ["Aromatherapy", "Research", "Wellness"],
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "EEG Monitoring: Understanding Your Brain Waves",
      excerpt:
        "Learn how EEG monitoring works and what your brain wave patterns can reveal about your mental state and cognitive function.",
      image: "/placeholder.svg",
      date: "August 10, 2023",
      author: "Dr. James Wilson",
      categories: ["Neuroscience", "Technology", "EEG"],
      readTime: "10 min read",
    },
    {
      id: 5,
      title: "Virtual Reality Exposure Therapy for Phobias",
      excerpt:
        "How gradual exposure to fears in a virtual environment can help overcome phobias safely and effectively.",
      image: "/placeholder.svg",
      date: "September 5, 2023",
      author: "Dr. Sarah Johnson",
      categories: ["VR Therapy", "Phobias", "Treatment"],
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Mindfulness Techniques to Incorporate in Daily Life",
      excerpt:
        "Simple mindfulness practices you can integrate into your routine to reduce stress and improve mental clarity.",
      image: "/placeholder.svg",
      date: "September 28, 2023",
      author: "Amara Patel",
      categories: ["Mindfulness", "Daily Practices", "Stress Relief"],
      readTime: "5 min read",
    },
  ];

  // Categories for the filter section
  const categories = [
    "VR Therapy",
    "Aromatherapy",
    "Mindfulness",
    "Technology",
    "Research",
    "Self-Help",
    "Techniques",
    "Neuroscience",
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">
            <AnimatedGradientText>Wellness Resources & Blog</AnimatedGradientText>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Educational content about the benefits of VR, EEG, and aroma therapy,
            along with mental wellness tips and mindfulness techniques.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="lg:w-3/4">
            <div className="mb-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      By {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category, index) => (
                        <Badge key={index} variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">
                      Read Full Article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>

          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Popular Articles</h2>
              <ul className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <li key={post.id} className="border-b border-gray-100 pb-3">
                    <a href="#" className="hover:text-wellness-600 font-medium">
                      {post.title}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">{post.readTime}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-wellness-50 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-sm text-gray-700 mb-4">
                Get the latest mental wellness tips and updates directly to your inbox.
              </p>
              <Input placeholder="Your email address" className="mb-3" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
