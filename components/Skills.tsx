import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, CheckCircle2, Code2, Server, Smartphone, ShieldCheck, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [inspectedSkill, setInspectedSkill] = useState<string | null>('Next.js');

  const categories = portfolioData.skillsCategories;

  const filteredCategories = activeTab === 'all'
    ? categories
    : categories.filter(c => c.title.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.toLowerCase().includes(c.title.split(' ')[0].toLowerCase()));

  const getCategoryIcon = (title: string) => {
    if (title.includes('Frontend')) return <Code2 size={20} className="text-blue-400" />;
    if (title.includes('Backend')) return <Server size={20} className="text-emerald-400" />;
    if (title.includes('Mobile')) return <Smartphone size={20} className="text-sky-400" />;
    return <ShieldCheck size={20} className="text-purple-400" />;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-3">
            <Layers size={14} />
            <span>Comprehensive Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Technical Background</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Click on any technology below to inspect specific use-cases and architectural highlights from my full-stack projects.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & DBs' },
              { id: 'mobile', label: 'Mobile App Dev' },
              { id: 'security', label: 'Security & Auth' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 font-semibold scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Grids */}
        <div className="space-y-16">
          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx} className="bg-slate-900/50 rounded-3xl p-6 sm:p-8 border border-slate-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
                <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 shadow-inner">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-slate-400 font-mono tracking-wide">Hover or click items to view architectural details</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.skills.map((skill, skillIdx) => {
                  const isInspected = inspectedSkill === skill.name;
                  return (
                    <button
                      key={skillIdx}
                      onClick={() => setInspectedSkill(skill.name === inspectedSkill ? null : skill.name)}
                      className={`group p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                        isInspected
                          ? 'bg-slate-800/90 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/50 transform scale-[1.02]'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold border ${skill.color}`}>
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          {/* <span>{skill.level}%</span> */}
                          {isInspected && <Sparkles size={14} className="text-amber-400 animate-spin" />}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      {/* <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div> */}

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                        {skill.description}
                      </p>

                      <div className="mt-3 pt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                        <span className="flex items-center gap-1 text-emerald-400 font-medium">
                          <CheckCircle2 size={12} /> Active in Projects
                        </span>
                        {/* <span>Click to inspect</span> */}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
