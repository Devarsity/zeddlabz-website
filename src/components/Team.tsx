import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Visionary leader with 15+ years in tech industry. Expert in business strategy and digital transformation.",
      skills: ["Leadership", "Strategy", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@zeddlabz.com"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "CTO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Technical architect with expertise in cloud computing, AI/ML, and scalable system design.",
      skills: ["Cloud Architecture", "AI/ML", "DevOps"],
      social: {
        github: "#",
        linkedin: "#",
        email: "sarah@zeddlabz.com"
      }
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Lead Developer",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer passionate about creating elegant solutions and mentoring junior developers.",
      skills: ["React", "Node.js", "Python"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "UI/UX Designer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer focused on user-centered design and creating intuitive digital experiences.",
      skills: ["UI Design", "UX Research", "Prototyping"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@zeddlabz.com"
      }
    },
    {
      id: 5,
      name: "David Kim",
      position: "DevOps Engineer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployment pipelines.",
      skills: ["AWS", "Docker", "Kubernetes"],
      social: {
        github: "#",
        linkedin: "#",
        email: "david@zeddlabz.com"
      }
    },
    {
      id: 6,
      name: "Lisa Thompson",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Agile project management expert ensuring timely delivery and client satisfaction.",
      skills: ["Agile", "Scrum", "Communication"],
      social: {
        linkedin: "#",
        email: "lisa@zeddlabz.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our <span className="text-blue-400">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Talented professionals dedicated to delivering exceptional results and driving innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="p-2 bg-gray-900/80 hover:bg-blue-500 rounded-full transition-colors duration-300"
                      >
                        <Github className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-2 bg-gray-900/80 hover:bg-blue-500 rounded-full transition-colors duration-300"
                      >
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-2 bg-gray-900/80 hover:bg-blue-500 rounded-full transition-colors duration-300"
                      >
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-gray-900/80 hover:bg-blue-500 rounded-full transition-colors duration-300"
                      >
                        <Mail className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 rounded-full text-xs border border-blue-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join our team CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;