import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
      {/* Premium Footer Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, #3b82f6 0.5px, transparent 0.5px),
              linear-gradient(180deg, #3b82f6 0.5px, transparent 0.5px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center relative z-10">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
            Vaibhav Singh Rajawat
          </div>
          <p className="text-gray-400 mb-6">
            AI & ML Enthusiast | Full-Stack Developer | UI/UX Designer
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Vaibhav</span>
          </div>
          
          <div className="mb-6">
            <a 
              href="https://carrerforgepro.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              carrerforgepro.vercel.app
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 Vaibhav Singh Rajawat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;