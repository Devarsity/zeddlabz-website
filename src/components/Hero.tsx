import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Cpu, Globe, Zap, Rocket, Star } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Innovative IT Solutions for Tomorrow's Challenges";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: <Code className="h-6 w-6" />, delay: '0s', position: 'top-20 left-20' },
    { icon: <Cpu className="h-8 w-8" />, delay: '1s', position: 'top-32 right-32' },
    { icon: <Globe className="h-7 w-7" />, delay: '2s', position: 'top-48 left-1/4' },
    { icon: <Zap className="h-6 w-6" />, delay: '0.5s', position: 'top-60 right-20' },
    { icon: <Rocket className="h-7 w-7" />, delay: '1.5s', position: 'top-80 left-16' },
    { icon: <Star className="h-6 w-6" />, delay: '2.5s', position: 'top-96 right-1/4' },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.01}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            top: `${20 + mousePosition.y * 0.008}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{
            left: `${40 + mousePosition.x * 0.01}%`,
            bottom: `${10 + mousePosition.y * 0.005}%`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Floating tech icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} opacity-20 animate-bounce hidden lg:block`}
            style={{ animationDelay: item.delay, animationDuration: '3s' }}
          >
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <div className="text-blue-400">
                {item.icon}
              </div>
            </div>
          </div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-16">
            {/* Company logo/name with enhanced styling */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <Zap className="relative h-16 w-16 text-blue-400 animate-bounce" />
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-tight px-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  ZeddLabz
                </span>
              </h1>
              
              {/* Animated tagline */}
              <div className="h-16 sm:h-20 flex items-center justify-center mb-8 px-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light text-center max-w-4xl">
                  {text}
                  {isTyping && <span className="animate-pulse text-blue-400">|</span>}
                </p>
              </div>
            </div>

            {/* Enhanced description */}
            <div className="max-w-5xl mx-auto mb-16 px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed mb-8 max-w-4xl mx-auto">
                We transform businesses through cutting-edge technology solutions, from web development 
                to cloud infrastructure, delivering excellence in every project.
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 max-w-4xl mx-auto">
                <div className="group">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-2">150+</div>
                    <div className="text-gray-300 text-sm lg:text-base">Projects Delivered</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-gray-300 text-sm lg:text-base">Happy Clients</div>
                  </div>
                </div>
                <div className="group sm:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                    <div className="text-gray-300 text-sm lg:text-base">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 lg:mb-20 px-4">
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-semibold text-base lg:text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl flex items-center overflow-hidden w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="relative z-10 ml-3 h-5 w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button
                onClick={scrollToServices}
                className="group border-2 border-blue-400 text-blue-400 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-semibold text-base lg:text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-2xl relative overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>

            {/* Interactive tech showcase */}
            <div className="flex justify-center items-center space-x-8 lg:space-x-12 px-4">
              <div className="group cursor-pointer">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <Code className="h-8 w-8 lg:h-12 lg:w-12 text-blue-400 mx-auto mb-2" />
                  <div className="text-xs lg:text-sm text-gray-300">Development</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-purple-500/20 to-transparent rounded-2xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:-rotate-3">
                  <Cpu className="h-8 w-8 lg:h-12 lg:w-12 text-purple-400 mx-auto mb-2" />
                  <div className="text-xs lg:text-sm text-gray-300">AI & ML</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="p-4 lg:p-6 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:scale-110 hover:rotate-3">
                  <Globe className="h-8 w-8 lg:h-12 lg:w-12 text-emerald-400 mx-auto mb-2" />
                  <div className="text-xs lg:text-sm text-gray-300">Global Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;