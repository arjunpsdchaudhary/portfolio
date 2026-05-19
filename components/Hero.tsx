import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Code, Terminal, Upload, Sparkles, MapPin, Calendar, Check, Camera, RefreshCw } from 'lucide-react';
import pic from '@/public/arjun.jpeg'
import Image from 'next/image';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [userImage, setUserImage] = useState<string>(portfolioData.personal.defaultAvatar);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetDefaultImage = () => {
    setUserImage(portfolioData.personal.defaultAvatar);
    setImageUploaded(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background Gradients & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-medium text-slate-300 mb-6 shadow-inner">
              {/* <Sparkles size={14} className="text-amber-400 animate-spin" /> */}
              <span>Namaste 👋 Welcome to my portfolio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-mono">Available for Hire</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">{portfolioData.personal.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              I am <span className="font-semibold text-white">21 years old</span>, proudly from <span className="font-semibold text-amber-400">Nepal 🇳🇵</span>. I am obsessed with coding and engineering secure, highly interactive web & mobile apps.
            </p>

            {/* Quick Tech Badges */}
            <div className="mb-8 w-full">
              <p className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-3 font-semibold">
                Expertise Highlights
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js & React', 'MongoDB & Neo4j', 'Java & Flutter Mobile Dev', 'JWT & PASETO Tokens', 'React Flow Trees'].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1.5 hover:border-blue-500/50 transition-colors"
                  >
                    <Code size={12} className="text-blue-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={onExplore}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-base shadow-xl shadow-blue-500/25 flex items-center gap-3 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={copyEmail}
                className="px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-base flex items-center gap-2.5 transition-all cursor-pointer shadow"
              >
                {copied ? <Check size={18} className="text-emerald-400" /> : <Terminal size={18} className="text-blue-400" />}
                <span>{copied ? "Email Copied!" : portfolioData.personal.email}</span>
              </button>
            </div>

            {/* Quick stats mini bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Calendar size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">21 Years</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Age</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Nepal 🇳🇵</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Location</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Code size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">12+ Techs</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Mastered</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">3 Major</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Full Systems</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Image Placeholder & Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 transform scale-95" />

            {/* Main Image Frame Container */}
            <div className="relative bg-[#0f172a]/90 p-3 rounded-3xl border border-slate-700/80 shadow-2xl w-full max-w-sm sm:max-w-md">
              {/* Image Frame */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group">
                <Image
                  src={pic}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs text-white font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  <span>Arjun Prasad Chaudhary</span>
                </div>

                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-xs text-amber-400 font-mono">
                  🇳🇵 Nepal
                </div>

                {/* Upload Hover Overlay */}
                {/* <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center z-20">
                  <div className="p-4 rounded-full bg-blue-600 text-white mb-3 shadow-lg transform group-hover:scale-110 transition-transform">
                    <Camera size={28} />
                  </div>
                  <p className="text-sm font-bold text-white mb-1">Custom Image Placeholder</p>
                  <p className="text-xs text-slate-300 mb-4 max-w-[240px]">
                    Click below to upload your own photo to personalize this portfolio instantly!
                  </p>
                  
                  <label className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all">
                    <Upload size={14} />
                    <span>Choose Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div> */}
              </div>

              {/* Upload Controls Bar Below Image */}
              {/* <div className="mt-3 p-3 bg-slate-900/90 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <div className={`w-2.5 h-2.5 rounded-full ${imageUploaded ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                  <span className="truncate">{imageUploaded ? "Custom Photo Uploaded" : "Default High-Res Avatar"}</span>
                </div>

                <div className="flex items-center gap-2">
                  <label className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5">
                    <Upload size={12} />
                    <span>Upload</span>
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>

                  {imageUploaded && (
                    <button
                      onClick={resetDefaultImage}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Reset Default Avatar"
                    >
                      <RefreshCw size={14} />
                    </button>
                  )}
                </div>
              </div> */}

              {/* Decorative Tech Badges floating on frame */}
              {/* <div className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="p-1 rounded bg-emerald-500/20">🚀</span>
                <span>Next.js 15 Active</span>
              </div> */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
