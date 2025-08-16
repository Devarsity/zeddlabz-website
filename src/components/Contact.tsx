import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "hello@zeddlabz.com",
      description: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      info: "123 Tech Street, Silicon Valley",
      description: "San Francisco, CA 94107"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      info: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a specific project in mind or need guidance on your digital transformation journey, 
                our team is here to help. We offer free consultations to understand your needs and provide 
                tailored solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white mr-3">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-300 font-medium mb-1">{item.info}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Service of Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;