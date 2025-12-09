import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { 
  Timer, 
  Zap, 
  Box, 
  ShieldCheck, 
  LayoutTemplate,
  Database, 
  Cpu,
  Code2,
  ArrowRight,
  MousePointerClick,
  Server
} from 'lucide-react';

export const Slide1: React.FC = () => {
  return (
    <SlideLayout 
      title="Project Outcomes & Business Value" 
      subtitle="Enterprise Container Loading Optimization System"
      slideNumber={1}
      breadcrumbs={['Overview', 'Metrics', 'Deliverables']}
    >
        <div className="flex flex-col lg:flex-row gap-6 h-full pb-1">
            
            {/* LEFT COLUMN: HERO METRICS */}
            <div className="w-full lg:w-[32%] flex flex-col gap-5 h-auto lg:h-full flex-shrink-0">
                
                {/* Dark Mode Hero Card */}
                <div className="flex-[1.5] bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-blue-900/20 ring-1 ring-white/10 group min-h-[240px]">
                     
                     {/* Dynamic Background */}
                     <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-700"></div>
                     <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>

                     <div className="relative z-10">
                        <div className="flex items-center gap-2 text-blue-200/80 font-bold uppercase tracking-widest text-[10px] mb-6 border-b border-white/5 pb-4">
                            <Timer size={14} className="text-blue-400" /> Development Velocity
                        </div>
                        
                        <div className="flex flex-col gap-1 mb-2">
                           <span className="text-6xl font-black text-white tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                             2 <span className="text-3xl font-bold text-slate-400 align-top ml-1">Days</span>
                           </span>
                           <span className="text-xs font-medium text-slate-400 mt-2 leading-relaxed">
                             Full-Stack Delivery: <br/>Concept → Production Ready
                           </span>
                        </div>
                     </div>
                     
                     <div className="relative z-10 bg-white/5 rounded-xl p-3 border border-white/10 backdrop-blur-sm mt-4">
                        <div className="flex items-center justify-between text-xs">
                           <div className="flex items-center gap-2 text-slate-400 line-through decoration-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> 12 Weeks
                           </div>
                           <ArrowRight size={14} className="text-slate-500" />
                           <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                              <Zap size={12} fill="currentColor" /> 30x Faster
                           </div>
                        </div>
                     </div>
                </div>

                {/* Secondary Metrics */}
                <div className="h-auto lg:flex-1 grid grid-cols-2 gap-4 min-h-[100px]">
                    <div className="bg-white rounded-2xl p-5 flex flex-col justify-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group hover:border-blue-100 transition-all">
                        <div className="absolute right-3 top-3 bg-blue-50/50 p-1.5 rounded-lg text-blue-600 opacity-50 group-hover:opacity-100 transition-opacity">
                             <Code2 size={16} />
                        </div>
                        <span className="text-2xl font-black text-slate-800 tracking-tight">15k+</span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 mt-1 leading-tight">Lines Generated<br/>(Clean Arch)</span>
                    </div>

                    <div className="bg-white rounded-2xl p-5 flex flex-col justify-center shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden group hover:border-emerald-100 transition-all">
                         <div className="absolute right-3 top-3 bg-emerald-50/50 p-1.5 rounded-lg text-emerald-600 opacity-50 group-hover:opacity-100 transition-opacity">
                             <Zap size={16} />
                        </div>
                        <span className="text-2xl font-black text-slate-800 tracking-tight">50%</span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 mt-1 leading-tight">Logistics Eff.<br/>Improvement</span>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: SYSTEM & FEATURES */}
            <div className="flex-1 flex flex-col gap-5 h-full min-w-0">
                
                {/* Tech Pipeline */}
                <div className="shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 flex flex-col justify-center relative overflow-hidden min-h-[140px]">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                     
                     <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-5">
                        <Cpu size={14} className="text-blue-500" /> Enterprise Architecture Pipeline
                     </h3>
                     
                     {/* Connected Flow */}
                     <div className="relative flex items-center justify-between gap-2 px-2">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10 transform -translate-y-1/2 mx-10 hidden md:block"></div>
                        
                        {[
                           { label: "Frontend", sub: "React 18 + TS + AntD", icon: LayoutTemplate, color: "text-blue-600", bg: "bg-blue-50" },
                           { label: "Backend API", sub: "FastAPI + .NET 6 Core", icon: Server, color: "text-purple-600", bg: "bg-purple-50" },
                           { label: "Data Layer", sub: "PostgreSQL 14 + Redis", icon: Database, color: "text-emerald-600", bg: "bg-emerald-50" }
                        ].map((node, i) => (
                           <div key={i} className="flex flex-col items-center gap-3 bg-white p-2 rounded-xl z-10">
                              <div className={`w-10 h-10 rounded-xl ${node.bg} ${node.color} flex items-center justify-center shadow-sm ring-1 ring-black/5`}>
                                 <node.icon size={18} />
                              </div>
                              <div className="text-center">
                                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{node.label}</div>
                                 <div className="text-[11px] font-bold text-slate-800 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{node.sub}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                </div>

                {/* Feature Grid */}
                <div className="flex-1 bg-slate-50/50 rounded-2xl border border-slate-200/60 p-6 flex flex-col min-h-[250px]">
                     <div className="flex items-center justify-between mb-4 shrink-0">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                            <Box size={14} className="text-indigo-500" /> Core System Modules
                        </h3>
                        <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[9px] font-bold text-slate-400 shadow-sm flex items-center gap-1.5">
                           <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                           Live V1.0
                        </span>
                     </div>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 min-h-0 overflow-y-auto custom-scrollbar pr-1">
                        {[
                          { title: "Smart Loading Engine", desc: "Genetic Algorithm + Bin Packing Heuristics", icon: Cpu, color: "text-blue-600", bg: "bg-blue-50" },
                          { title: "3D Digital Twin", desc: "WebGL/Three.js Interactive Visualization", icon: Box, color: "text-purple-600", bg: "bg-purple-50" },
                          { title: "Enterprise Security", desc: "RBAC (JWT/OAuth2) + Audit Logging", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
                          { title: "High Performance", desc: "Redis Caching + DB Indexing (<50ms)", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
                          { title: "Data Pipeline", desc: "Excel/CSV Integration via Pandas", icon: MousePointerClick, color: "text-cyan-600", bg: "bg-cyan-50" },
                          { title: "Auto-Documentation", desc: "OpenAPI (Swagger) + TypeDoc Generation", icon: Code2, color: "text-rose-600", bg: "bg-rose-50" },
                        ].map((item, idx) => (
                           <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.02)] flex items-start gap-3 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                              <div className={`mt-0.5 p-2 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                                 <item.icon size={14} />
                              </div>
                              <div className="min-w-0 pt-0.5">
                                 <div className="text-[11px] font-bold text-slate-800 truncate group-hover:text-blue-700 transition-colors">{item.title}</div>
                                 <div className="text-[10px] text-slate-500 leading-tight mt-0.5 font-medium">{item.desc}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                </div>

            </div>
        </div>
    </SlideLayout>
  );
};