import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "ZeddLabz transformed our entire digital infrastructure. Their expertise in cloud solutions and web development is unmatched. We saw a 300% increase in performance and our customers love the new platform.",
      project: "E-commerce Platform & Cloud Migration"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, FinanceFlow",
      company: "FinanceFlow",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The mobile app they developed for us exceeded all expectations. The security features and user experience are top-notch. ZeddLabz delivered on time and within budget.",
      project: "Mobile Banking Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, HealthTech Solutions",
      company: "HealthTech Solutions",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with ZeddLabz was a game-changer for our healthcare platform. Their attention to detail and understanding of compliance requirements made the project seamless.",
      project: "Healthcare Management System"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "VP of Technology, LogiCorp",
      company: "LogiCorp",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The AI-powered analytics dashboard they built has revolutionized how we make business decisions. The insights we get are incredible and the interface is intuitive.",
      project: "AI Analytics Dashboard"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-blue-400">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="relative">
            {/* Main testimonial display */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700 relative overflow-hidden">
              <div className="absolute top-6 left-6 opacity-20">
                <Quote className="h-16 w-16 text-blue-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  {/* Client image and info */}
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto lg:mx-0 mb-4 object-cover border-4 border-blue-400/30"
                    />
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-blue-400 mb-1">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start mt-3">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="flex-1">
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
                      <p className="text-sm text-gray-400 mb-1">Project:</p>
                      <p className="text-blue-400 font-medium">
                        {testimonials[currentTestimonial].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Client logos */}
          <div className="mt-16">
            <p className="text-center text-gray-400 mb-8">Trusted by leading companies worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {['TechStart', 'FinanceFlow', 'HealthTech', 'LogiCorp'].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors duration-300">
                    <p className="text-gray-300 font-semibold">{company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;