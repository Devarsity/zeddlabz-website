import React from 'react';
import { Zap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Cybersecurity',
    'Data Analytics',
    'Digital Marketing'
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#' },
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-white">ZeddLabz</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We deliver excellence in every project.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 hover:bg-blue-500 rounded-full transition-colors duration-300"
                >
                  <span className="text-gray-400 hover:text-white">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">hello@zeddlabz.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
            <p className="text-gray-400 text-sm">
              © {currentYear} ZeddLabz. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;