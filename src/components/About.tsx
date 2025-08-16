import React from 'react';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <Target className="h-6 w-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Lightbulb className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">ZeddLabz</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to revolutionize the IT landscape, ZeddLabz combines cutting-edge 
              technology with innovative solutions to help businesses thrive in the digital age.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively to deliver 
              exceptional results that exceed expectations and drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Innovation-driven approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Client-centric solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Cutting-edge technology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span>Exceptional support</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;