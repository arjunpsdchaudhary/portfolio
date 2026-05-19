import React, { useState } from 'react';
import { ArrowDown, Network } from 'lucide-react';

interface NodeData {
  id: string;
  name: string;
  role: string;
  level: number;
  reportsTo?: string;
  relationType?: 'manages' | 'collaborates';
  avatar: string;
  dept: string;
}

export const TreeOrgDemo: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('node-1');
  const [filterDept, setFilterDept] = useState<string>('all');

  const nodes: NodeData[] = [
    { id: 'node-1', name: 'Aarav Sharma', role: 'Chief Executive Officer', level: 1, avatar: '👑', dept: 'Executive' },
    { id: 'node-2', name: 'Arjun P. Chaudhary', role: 'Chief Technology Officer', level: 2, reportsTo: 'node-1', relationType: 'manages', avatar: '💻', dept: 'Engineering' },
    { id: 'node-3', name: 'Maya Thapa', role: 'VP of Product', level: 2, reportsTo: 'node-1', relationType: 'manages', avatar: '🚀', dept: 'Product' },
    { id: 'node-4', name: 'Siddharth Gurung', role: 'Lead Architect (Neo4j)', level: 3, reportsTo: 'node-2', relationType: 'manages', avatar: '🧠', dept: 'Engineering' },
    { id: 'node-5', name: 'Niti Shrestha', role: 'Senior Frontend Engineer', level: 3, reportsTo: 'node-2', relationType: 'collaborates', avatar: '🎨', dept: 'Engineering' },
    { id: 'node-6', name: 'Rohan Karki', role: 'Product Manager', level: 3, reportsTo: 'node-3', relationType: 'manages', avatar: '📊', dept: 'Product' },
  ];

  const currentSelection = nodes.find(n => n.id === selectedNode) || nodes[0];
  const directReports = nodes.filter(n => n.reportsTo === currentSelection.id);

  const filteredNodes = filterDept === 'all' ? nodes : nodes.filter(n => n.dept === filterDept);

  return (
    <div className="bg-[#0f172a] rounded-xl border border-slate-700/80 p-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
            <Network size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-white flex items-center gap-2">
              TreeOrg Live Simulator
              <span className="text-[10px] uppercase px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-mono rounded">Neo4j + React Flow</span>
            </h4>
            <p className="text-xs text-slate-400">Level-wise hierarchy graph simulation</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-lg border border-slate-700/50 text-xs font-medium">
          <button
            onClick={() => setFilterDept('all')}
            className={`px-2.5 py-1 rounded transition-all ${filterDept === 'all' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            All Levels
          </button>
          <button
            onClick={() => setFilterDept('Engineering')}
            className={`px-2.5 py-1 rounded transition-all ${filterDept === 'Engineering' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Engineering
          </button>
          <button
            onClick={() => setFilterDept('Product')}
            className={`px-2.5 py-1 rounded transition-all ${filterDept === 'Product' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
          >
            Product
          </button>
        </div>
      </div>

      {/* Interactive Tree Graph Area */}
      <div className="bg-slate-900/90 rounded-xl p-6 border border-slate-800 relative overflow-hidden min-h-[340px] flex flex-col justify-center items-center">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

        {/* Level 1: Executive */}
        <div className="w-full flex justify-center mb-8 relative z-10">
          {filteredNodes.filter(n => n.level === 1).map(node => (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all transform hover:scale-105 duration-200 shadow-lg ${
                selectedNode === node.id 
                  ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-500 text-amber-200 ring-2 ring-amber-500/50' 
                  : 'bg-slate-800/90 border-slate-700 hover:border-slate-500 text-slate-300'
              }`}
            >
              <span className="text-2xl">{node.avatar}</span>
              <div className="text-left">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  {node.name}
                  {selectedNode === node.id && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />}
                </div>
                <div className="text-[11px] text-amber-400 font-mono tracking-wide">{node.role}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Level 1 down arrow indicator */}
        <div className="flex justify-center text-slate-600 mb-6">
          <ArrowDown size={20} className="animate-bounce text-indigo-400" />
        </div>

        {/* Level 2 & 3 Nodes grid */}
        <div className="w-full flex flex-wrap justify-center gap-6 relative z-10">
          {filteredNodes.filter(n => n.level > 1).map(node => {
            const isSelected = selectedNode === node.id;
            const isManagedBySelected = node.reportsTo === selectedNode;

            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 text-left min-w-[210px] ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg ring-2 ring-blue-500/40 scale-105 z-20'
                    : isManagedBySelected
                    ? 'bg-indigo-950/60 border-indigo-500/60 text-indigo-200 ring-1 ring-indigo-500/40'
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-2xl p-1 bg-slate-900/50 rounded-lg">{node.avatar}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white truncate flex items-center justify-between">
                    <span>{node.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 font-mono">L{node.level}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">{node.role}</div>
                  
                  {node.reportsTo && (
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] text-blue-400/90 font-mono bg-blue-950/50 px-1.5 py-0.5 rounded w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {node.relationType === 'manages' ? 'Manages' : 'Collaborates'}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Node Details Panel */}
      <div className="mt-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl p-2.5 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
            {currentSelection.avatar}
          </div>
          <div>
            <div className="text-xs text-blue-400 font-mono uppercase tracking-wider">Active Inspector</div>
            <h5 className="font-bold text-white text-base">{currentSelection.name}</h5>
            <p className="text-xs text-slate-300">{currentSelection.role} • Department: <span className="text-indigo-400 font-medium">{currentSelection.dept}</span></p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-0 border-slate-700/50">
          <div className="bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-700 text-xs">
            <span className="text-slate-400 block text-[10px]">Hierarchy Level</span>
            <span className="font-bold text-white text-sm">Level {currentSelection.level}</span>
          </div>
          <div className="bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-700 text-xs">
            <span className="text-slate-400 block text-[10px]">Direct Connections</span>
            <span className="font-bold text-emerald-400 text-sm">{directReports.length} reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};
