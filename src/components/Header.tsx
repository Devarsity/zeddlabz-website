import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    'Home', 'Services', 'About', 'Portfolio', 'Team', 'Pricing', 'Blog', 'Contact'
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
                <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
              </div>
              <span className="text-2xl font-bold text-white">ZeddLabz</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group text-sm xl:text-base"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
              <div className="px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
                <div className="max-w-7xl mx-auto">
                  <nav className="flex flex-col p-4 space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left py-2"
                      >
                        {item}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;