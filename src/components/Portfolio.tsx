import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'Data Analytics'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with advanced features and seamless user experience.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live"
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "Mobile Apps",
      description: "Secure financial application with real-time transactions and analytics.",
      image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Firebase", "Node.js", "AWS"],
      status: "Live"
    },
    {
      id: 3,
      title: "Cloud Migration Project",
      category: "Cloud Solutions",
      description: "Complete infrastructure migration to AWS with 99.9% uptime guarantee.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      status: "Completed"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      category: "Web Development",
      description: "Comprehensive healthcare management platform with patient portal and analytics.",
      image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Vue.js", "Python", "PostgreSQL", "Redis"],
      status: "Live"
    },
    {
      id: 5,
      title: "AI-Powered Analytics Dashboard",
      category: "Data Analytics",
      description: "Advanced analytics dashboard with machine learning insights and predictions.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      status: "Live"
    },
    {
      id: 6,
      title: "Logistics Mobile App",
      category: "Mobile Apps",
      description: "Real-time logistics tracking and management application for delivery services.",
      image: "https://images.pexels.com/photos/1010594/pexels-photo-1010594.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Flutter", "Firebase", "Google Maps", "Node.js"],
      status: "Live"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Showcasing our successful projects and innovative solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{project.category}</span>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700 hover:bg-blue-500 rounded-full transition-colors duration-300">
                      <Github className="h-4 w-4 text-white" />
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-blue-500 rounded-full transition-colors duration-300">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;