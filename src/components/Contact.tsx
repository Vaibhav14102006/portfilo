import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vaibhav-singh-rajawat-b92420341',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Vaibhav14102006',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:text-gray-700',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:vaibhavsinghrajawat483@gmail.com',
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:text-red-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50/50 dark:from-gray-800 dark:to-gray-900/50 transition-colors duration-500 relative overflow-hidden" ref={sectionRef}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent dark:via-blue-800"></div>
        
        {/* Sophisticated pattern overlay */}
        <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #14b8a6 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 120px 120px'
          }}></div>
        </div>
        
        {/* Elegant corner accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50/30 to-transparent dark:from-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-50/30 to-transparent dark:from-teal-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-on-scroll relative z-10">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto animate-on-scroll relative z-10"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 animate-on-scroll relative z-10">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact Info */}
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, collaborations, and interesting projects. 
                Feel free to reach out if you'd like to connect!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">vaibhavsinghrajawat483@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 7509702917</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <p className="font-semibold text-gray-800 dark:text-white mb-4">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 hover:shadow-lg`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-gray-500 dark:text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-gray-500 dark:text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer"
                    placeholder=" "
                  />
                  <label className="absolute text-gray-500 dark:text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 peer resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute text-gray-500 dark:text-gray-400 text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 dark:bg-gray-600 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    Your Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;