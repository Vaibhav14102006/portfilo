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
        
        {/* Enhanced Watermark Text - Fills entire footer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-[0.04] pointer-events-none overflow-hidden">
          <div className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-white whitespace-nowrap select-none leading-none">
            VAIBHAV
          </div>
          <div className="text-[6rem] md:text-[8rem] lg:text-[11rem] font-black text-white whitespace-nowrap select-none leading-none mt-[-2rem] md:mt-[-3rem] lg:mt-[-4rem]">
            SINGH RAJAWAT
          </div>
        </div>
        
        {/* Diagonal Watermark Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-0 right-0 text-[4rem] md:text-[6rem] font-bold text-white transform rotate-45 translate-x-10 -translate-y-10">
            VSR
          </div>
          <div className="absolute bottom-0 left-0 text-[4rem] md:text-[6rem] font-bold text-white transform rotate-45 -translate-x-10 translate-y-10">
            VSR
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center relative z-10">
          {/* Professional Watermark Style Name */}
          <div className="text-3xl md:text-4xl font-bold text-gray-300 mb-2 tracking-wide">
            Vaibhav Singh Rajawat
          </div>
          <p className="text-gray-400 mb-8">
            AI & Full-Stack Engineer | Voice AI Developer | System Automation Expert
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Vaibhav</span>
          </div>
          
          {/* Projects Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <a 
                href="https://invested-mauve.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="font-medium">invested-mauve.vercel.app</span>
                <div className="text-xs text-gray-400 group-hover:text-gray-200 mt-1">Investment Platform</div>
              </a>
              
              <a 
                href="https://vaibhav-rouge.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-teal-600/20 to-indigo-600/20 border border-teal-500/30 rounded-lg text-teal-400 hover:text-white hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <span className="font-medium">vaibhav-rouge.vercel.app</span>
                <div className="text-xs text-gray-400 group-hover:text-gray-200 mt-1">Personal Portfolio</div>
              </a>
              
              <a 
                href="https://carrerforgepro.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-purple-400 hover:text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span className="font-medium">carrerforgepro.vercel.app</span>
                <div className="text-xs text-gray-400 group-hover:text-gray-200 mt-1">Career Platform</div>
              </a>

              <a 
                href="https://satyapatra-email.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-lg text-red-400 hover:text-white hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
              >
                <span className="font-medium">satyapatra-email.vercel.app</span>
                <div className="text-xs text-gray-400 group-hover:text-gray-200 mt-1">AI Spam Detector</div>
              </a>
            </div>
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