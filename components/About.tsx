import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { User, MapPin, Cpu, Award, ShieldCheck, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono mb-3">
            <User size={14} />
            <span>Personal Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Arjun P. Chaudhary</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Engineering robust web systems, graph databases, and native mobile apps with an uncompromising focus on clean architecture.
          </p>
        </div>

        <div >
          {/* Bio Story */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              {/* <div className="absolute top-0 right-0 p-8 text-9xl font-extrabold text-slate-800/30 pointer-events-none select-none">
                🇳🇵
              </div> */}
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="text-amber-400" />
                Nepal-Rupandehi, Building for the Global Web
              </h3>
              <p className="mb-4">
                Namaste! I am <strong className="text-white">Arjun Prasad Chaudhary</strong>, a 21-year-old passionate full-stack developer and mobile application architect from beautiful Nepal. My fascination with computers began early, sparking an intense curiosity for how code transforms ideas into interactive realities.
              </p>
              <p>
                Over the years, I've specialized heavily in <strong className="text-blue-400">Next.js</strong> for modern frontend architectures and backend API routes, combined with robust mobile engineering in <strong className="text-emerald-400">Java and Flutter</strong>. Whether setting up complex graph connections with <strong className="text-purple-400">Neo4j</strong> or structuring secure authentication mechanisms using <strong className="text-amber-400">JWT and PASETO tokens</strong>, I strive to write maintainable, efficient, and secure software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-slate-900 to-[#0f172a] rounded-xl border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Security First Architecture</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Deep expertise in stateless authentication using encrypted JWT and PASETO tokens for tamper-proof API communication.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-slate-900 to-[#0f172a] rounded-xl border border-slate-800 flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">Complex Data Modeling</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Proficient in both document stores (MongoDB) and graph relationships (Neo4j) for hierarchical node organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
        
        </div>
      </div>
    </section>
  );
};
