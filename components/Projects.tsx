import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { TreeOrgDemo } from './demos/TreeOrgDemo';
import { LmsDemo } from './demos/LmsDemo';
import { ChatDemo } from './demos/ChatDemo';
import { FolderGit2, Play, CheckCircle, Sparkles, X, ChevronRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  const renderDemoComponent = (demoType: string) => {
    switch (demoType) {
      case 'treeorg': return <TreeOrgDemo />;
      case 'lms': return <LmsDemo />;
      case 'chat': return <ChatDemo />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/40 border-y border-slate-800/80">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono mb-3">
            <FolderGit2 size={14} />
            <span>Showcase & Live Simulators</span>
          </div> */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
             <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Engineering Projects</span>
          </h2>
          {/* <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Click <strong className="text-white">"Launch Live Simulator"</strong> on any project to interactively experience its core architecture directly in your browser.
          </p> */}

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Graph & Enterprise (Neo4j / Flow)' },
              { id: 'web', label: 'Web Systems & RBAC' },
              { id: 'mobile', label: 'Mobile Apps & Sockets' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 font-semibold scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
               
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group shadow-xl"
            >
              <div className="p-6 sm:p-8">
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-lg bg-gradient-to-r ${project.color} text-white shadow`}>
                    {project.category.toUpperCase()}
                  </span>
                  {/* <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Interactive Simulator
                  </div> */}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-indigo-400 font-mono font-medium mb-4">
                  {project.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="mb-6">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">Technologies</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-2 font-semibold">Core Capabilities</p>
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 mt-auto">
                <button
                 // onClick={() => setActiveModal(project)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02] cursor-pointer"
                >
                   <a href="https://github.com/arjunpsdchaudhary" className='w-full flex items-center justify-center gap-2 transition-all transform group-hover:scale-[1.02] cursor-pointer'>
                   <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
                   <span>Link to Github</span>
                   
                </a>
                
                  {/* <Play size={16} className="fill-white" /> */}
                  {/* <span>Launch Live Simulator</span> */}
                 
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup for Live Simulators */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0b0f19] border border-slate-700 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
              {/* Modal Header */}
              <div className="p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between sticky top-0 z-20 backdrop-blur-md">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                    <Sparkles size={14} /> Architecture Simulation Environment
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    {activeModal.title}
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono font-normal">
                      {activeModal.subtitle}
                    </span>
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-8 flex-1">
                <div>
                  <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-2">Detailed Overview</h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {activeModal.description}
                  </p>
                </div>

                {/* Embedded Live Simulator */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                      <Play size={14} className="fill-emerald-400" /> Interactive Browser Simulator
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono">Simulating client & server interaction</span>
                  </div>
                  <div className="rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
                    {renderDemoComponent(activeModal.demoType)}
                  </div>
                </div>

                {/* Tech & Feature Grid inside Modal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                  <div>
                    <h5 className="text-xs uppercase font-mono text-slate-400 mb-3 font-semibold">Tech Stack Employed</h5>
                    <div className="flex flex-wrap gap-2">
                      {activeModal.technologies.map((t, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs uppercase font-mono text-slate-400 mb-3 font-semibold">Architectural Highlights</h5>
                    <div className="space-y-2">
                      {activeModal.features.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-mono">
                  Engineered by Arjun P. Chaudhary • Nepal
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
