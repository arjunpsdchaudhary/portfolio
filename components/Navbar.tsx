import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import Image from 'next/image';
import pic from '@/public/arjun.jpeg';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f19]/80 backdrop-blur-md py-3.5 border-b border-slate-800/80 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            {/* <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center text-white font-mono font-bold text-lg"> */}
              <Image src={pic} alt='AC' className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center text-white font-mono font-bold text-lg bg-cover my-0.5"/>
            {/* </div> */}
          </div>
          <div>
            <div className="font-bold text-white tracking-tight flex items-center gap-1.5 text-base sm:text-lg">
              Arjun P. Chaudhary
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-[11px] text-slate-400 font-mono tracking-wider">Full-Stack & Mobile Dev</div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:arjunpsd2020@gmail.com"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium rounded-xl group bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-600 text-white focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer"
          >
            <span className="relative px-4 py-2.5 transition-all ease-in duration-75 bg-[#0b0f19] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              <Terminal size={14} className="text-blue-400 group-hover:text-white transition-colors" />
              <span>arjunpsd2020@gmail.com</span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 md:hidden hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b0f19]/95 backdrop-blur-xl border-b border-slate-800 p-6 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500 text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-900/80'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="mailto:arjunpsd2020@gmail.com"
                className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl text-white text-center font-medium shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Terminal size={16} />
                arjunpsd2020@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
