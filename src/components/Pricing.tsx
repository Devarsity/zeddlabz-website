import React, { useState } from 'react';
import { Check, X, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 999,
      annualPrice: 899,
      popular: false,
      features: [
        "Custom Website Development",
        "Responsive Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "SSL Certificate",
        "Contact Form Integration"
      ],
      notIncluded: [
        "E-commerce Functionality",
        "Advanced Analytics",
        "Priority Support"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 2499,
      annualPrice: 2199,
      popular: true,
      features: [
        "Everything in Starter",
        "E-commerce Integration",
        "Advanced SEO & Analytics",
        "6 Months Support",
        "Payment Gateway Setup",
        "Social Media Integration",
        "Performance Optimization",
        "Mobile App (Basic)"
      ],
      notIncluded: [
        "Custom API Development",
        "Advanced Security Features"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 4999,
      annualPrice: 4499,
      popular: false,
      features: [
        "Everything in Professional",
        "Custom API Development",
        "Advanced Security Features",
        "12 Months Support",
        "Cloud Infrastructure Setup",
        "AI/ML Integration",
        "Custom Integrations",
        "Dedicated Project Manager",
        "24/7 Priority Support"
      ],
      notIncluded: []
    }
  ];

  const addOns = [
    { name: "Additional Pages", price: 199 },
    { name: "Advanced Analytics Setup", price: 499 },
    { name: "Social Media Management", price: 799 },
    { name: "Content Management Training", price: 299 },
    { name: "Monthly Maintenance", price: 399 }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent <span className="text-blue-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our commitment to quality and excellence.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  isAnnual ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    isAnnual ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-2 text-sm bg-green-500 text-white px-2 py-1 rounded-full">Save 10%</span>
              </span>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-gray-700 hover:border-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center opacity-50">
                      <X className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-500 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons section */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <Zap className="inline h-6 w-6 text-blue-400 mr-2" />
              Popular Add-ons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns.map((addon, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-4 border border-gray-600 hover:border-blue-500/50 transition-colors duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{addon.name}</span>
                    <span className="text-blue-400 font-semibold">${addon.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ note */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Have questions about our pricing? We're here to help!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
            >
              Contact our sales team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;