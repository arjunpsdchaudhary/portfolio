import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Mail, Send, CheckCircle, Copy, Terminal, MessageSquare, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Full-Time Engineering Role', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTemplatePick = (subject: string, templateMsg: string) => {
    setFormData(prev => ({
      ...prev,
      subject,
      message: templateMsg
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    
    // Trigger confetti celebration!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Full-Time Engineering Role', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono mb-3">
            <Mail size={14} />
            <span>Direct Inquiries & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"></span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            I am currently open to full-time roles, freelance architectures, and collaborative open-source projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2">Connect Directly</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                Whether you have an enterprise hierarchy that needs graph modeling or a mobile app requiring robust Java architectures, my inbox is always open.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Official Email</span>
                    <span className="text-sm font-bold text-white font-mono truncate block">{portfolioData.personal.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle size={18} className="text-emerald-400" /> : <Copy size={18} />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-bold text-white block">Rupandehi-Nepal (Willing to relocate / Remote)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">Availability Status</span>
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Immediate Starts
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Prompt Pill */}
              {/* <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-400 font-mono">
                  Replies typically within <strong className="text-blue-400">12 hours</strong>.
                </span>
              </div> */}
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-16 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out! Your inquiry has been formatted and simulated for delivery to <strong className="text-white">{portfolioData.personal.email}</strong>. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <MessageSquare size={20} className="text-blue-400" /> Send a Message
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">Secure Form</span>
                  </div>

                  {/* Template Picker */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Quick Message Templates</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { title: 'Job Offer', subject: 'Full-Time Full-Stack Role', msg: 'Hi Arjun, we were thoroughly impressed by your TreeOrg and LMS projects. We have a full-time role open in our engineering team.' },
                        { title: 'Freelance Architecture', subject: 'Freelance System Architecture', msg: 'Namaste Arjun, we need an experienced Next.js and Neo4j developer to structure our company graph database.' },
                        { title: 'Coffee Chat', subject: 'Tech Coffee Chat', msg: 'Hi Arjun! Would love to connect and chat about your journey in Nepal and your passion for secure auth tokens.' },
                      ].map((tmpl, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTemplatePick(tmpl.subject, tmpl.msg)}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-600/20 hover:border-blue-500/40 border border-slate-700 text-xs font-medium text-slate-300 transition-all cursor-pointer"
                        >
                          ⚡ {tmpl.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Your Email *</label>
                      <input
                        type="email"
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Subject</label>
                    <input
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Your Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Share details about your project, timeline, or team..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-base shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send size={18} />
                    <span>Dispatch Secure Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
