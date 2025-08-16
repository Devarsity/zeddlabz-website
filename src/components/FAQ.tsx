import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does ZeddLabz offer?",
      answer: "We offer a comprehensive range of IT services including web development, mobile app development, cloud solutions, cybersecurity, data analytics, and digital marketing. Our team specializes in creating custom solutions tailored to your specific business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. Our support plans range from 3 months to 12 months, depending on your chosen package."
    },
    {
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular client communication. Our process includes: discovery and planning, design and prototyping, development and testing, deployment, and ongoing support. We provide regular updates and demos throughout the project."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and can work with various platforms, databases, and third-party services. We'll assess your current infrastructure and recommend the best approach for seamless integration."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, AWS, Docker, and many others. We choose the best technology stack based on your project requirements, scalability needs, and long-term goals."
    },
    {
      question: "How do you ensure project security?",
      answer: "Security is our top priority. We implement industry best practices including secure coding standards, regular security audits, encryption, secure hosting, and compliance with relevant regulations like GDPR and HIPAA when applicable."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. We accept various payment methods and can discuss custom payment arrangements based on your needs."
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes, we provide comprehensive training for your team on how to use and maintain the solutions we develop. This includes documentation, video tutorials, and hands-on training sessions to ensure your team is comfortable with the new systems."
    },
    {
      question: "Can you help with digital transformation?",
      answer: "Definitely! We specialize in digital transformation initiatives, helping businesses modernize their operations, improve efficiency, and stay competitive. We assess your current processes and recommend technology solutions to drive growth and innovation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-16 w-16 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 rounded-2xl transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <Minus className="h-6 w-6 text-blue-400" />
                      ) : (
                        <Plus className="h-6 w-6 text-blue-400" />
                      )}
                    </div>
                  </button>
                  
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <div className="border-t border-gray-700 pt-6">
                        <p className="text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our services or how we can support your project.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;