import React from 'react';
import { ArrowRight, Rocket, Star, Zap } from 'lucide-react';

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Free consultation and project assessment",
    "Dedicated project manager",
    "Agile development process",
    "24/7 support and maintenance"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg animate-pulse"></div>
                <Rocket className="relative h-16 w-16 text-white" />
              </div>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have revolutionized their business with our innovative solutions.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center md:justify-start">
                  <Star className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={scrollToContact}
                className="group relative bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-blue-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-blue-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
            </div>

            {/* Urgency element */}
            <div className="mt-12 inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Zap className="h-5 w-5 text-yellow-300 mr-2 animate-pulse" />
              <span className="text-white font-medium">Limited time: Free consultation for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;