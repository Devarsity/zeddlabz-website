import React from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  Globe, 
  Cpu, 
  Zap 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and responsive design principles.",
      features: ["React & Vue.js", "Node.js Backend", "Progressive Web Apps", "E-commerce Solutions"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices", "Container Orchestration"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics solutions.",
      features: ["Big Data Processing", "Machine Learning", "Business Intelligence", "Data Visualization"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "PPC Campaigns"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Zap className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;