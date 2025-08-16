import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Security Best Practices for Modern Businesses",
      excerpt: "Learn essential security measures to protect your cloud infrastructure and sensitive data.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Michael Johnson",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      category: "Cybersecurity",
      featured: false
    },
    {
      id: 3,
      title: "AI and Machine Learning: Transforming Business Operations",
      excerpt: "Discover how AI and ML technologies are revolutionizing business processes and decision-making.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Alex Rodriguez",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "AI & ML",
      featured: false
    },
    {
      id: 4,
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Compare the pros and cons of native and cross-platform development approaches for your next mobile app.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Emily Davis",
      date: "Dec 8, 2024",
      readTime: "4 min read",
      category: "Mobile Development",
      featured: false
    },
    {
      id: 5,
      title: "DevOps Culture: Building Efficient Development Pipelines",
      excerpt: "Learn how to implement DevOps practices to streamline your development and deployment processes.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "8 min read",
      category: "DevOps",
      featured: false
    },
    {
      id: 6,
      title: "UX Design Principles for Better User Engagement",
      excerpt: "Explore fundamental UX design principles that can significantly improve user engagement and satisfaction.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      author: "Lisa Thompson",
      date: "Dec 3, 2024",
      readTime: "5 min read",
      category: "Design",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Cybersecurity", "AI & ML", "Mobile Development", "DevOps", "Design"];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="text-blue-400">Insights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
          </div>

          {/* Featured post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="mb-16">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-blue-400 text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <button className="group flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600 hover:border-blue-500/50"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article
                key={post.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900/80 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="group flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load more button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;