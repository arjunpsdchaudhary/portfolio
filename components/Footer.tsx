import React from 'react';
import { Heart, ArrowUp, Globe, Share2 } from 'lucide-react';
import pic from '@/public/arjun.jpeg'
import Image from 'next/image';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Nepal Tribute */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5 flex items-center justify-center shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-mono font-bold text-xl">
                <Image
                src={pic}
                alt='AC'
                className='w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-mono font-bold text-xl my-0.5s'
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg tracking-tight">
                Arjun Prasad Chaudhary
              </h3>
              <p className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <span>21-Year-Old Architect</span> • <span>Nepal</span> • <span>arjunpsd2020@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Social / External Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/arjunpsdchaudhary"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300 hover:text-white transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2 text-xs font-mono"
            >
              <Share2 size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-chaudhary-b1a318310/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 text-slate-300 hover:text-white transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2 text-xs font-mono"
            >
              <Globe size={16} /> LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-xl border border-blue-500/30 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-mono"
              title="Scroll to Top"
            >
              <ArrowUp size={16} /> Top
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>
            &copy; {new Date().getFullYear()} Arjun Prasad Chaudhary. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Built with Next.js & React Flow spirit in</span>
            <span className="text-white font-bold">Nepal 🇳🇵</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse inline ml-0.5" />
          </p>
        </div>
      </div>
    </footer>
  );
};
