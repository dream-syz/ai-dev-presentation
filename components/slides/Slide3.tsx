import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { Terminal, GitMerge, Shield, Code, Layers, Settings, Workflow, CheckCircle2 } from 'lucide-react';

const PhaseCard = ({ number, title, subtitle, items, color, icon: Icon, isLast }: any) => (
  <div className="relative h-full flex flex-col">
    <div className="bg-white border border-slate-200/60 rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group relative z-10 ring-1 ring-slate-100 justify-between">
      
      {/* Header */}
      <div>
        <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl ${color} text-white flex items-center justify-center shadow-lg shadow-slate-200 ring-2 ring-white group-hover:scale-110 transition-transform`}>
            <Icon size={20} />
            </div>
            <span className="text-4xl font-black text-slate-100 tracking-tighter select-none">0{number}</span>
        </div>
        
        <div className="mb-4">
            <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">{title}</h3>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">{subtitle}</p>
        </div>
      </div>
      
      {/* List */}
      <div className="space-y-2.5 mt-auto bg-slate-50/50 rounded-xl p-3 border border-slate-100">
        {items.map((item: string, i: number) => (
          <div key={i} className="text-[10px] lg:text-[11px] text-slate-600 flex items-center gap-2.5">
            <div className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'bg-')} shadow-sm shrink-0`}></div>
            <span className="font-semibold leading-tight">{item}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Connector (Desktop Only) */}
    {!isLast && (
      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-200 z-0 opacity-60">
        <div className="absolute right-0 top-1/2 -mt-1 w-2 h-2 border-t-2 border-r-2 border-slate-200 rotate-45 bg-white"></div>
      </div>
    )}
  </div>
);

export const Slide3: React.FC = () => {
  return (
    <SlideLayout 
      title="Development Methodology (HOW)" 
      subtitle="20-Question Deterministic AI Framework"
      slideNumber={3}
      breadcrumbs={['Process', 'Templates', 'Best Practices']}
    >
      <div className="flex flex-col gap-5 h-full pb-1">
        
        {/* Top: 3-Phase Process (Increased to 55% height - The Hero) */}
        <div className="h-[55%] animate-fade-in-up delay-100 flex flex-col shrink-0">
           <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2 flex-none px-1">
             <GitMerge size={14} className="text-blue-500" /> Execution Pipeline
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 h-full min-h-0 px-1">
              <PhaseCard 
                number="1"
                color="bg-slate-800"
                icon={Layers}
                title="Architecture"
                subtitle="Foundation & Clean Architecture"
                items={[
                    'Tech Stack (Next.js, FastAPI)', 
                    'Schema Design (3NF, PostGIS)', 
                    'Pattern Definition (Repository)'
                ]}
              />
              <PhaseCard 
                number="2"
                color="bg-blue-600"
                icon={Code}
                title="Implementation"
                subtitle="Core Features & Business Logic"
                items={[
                    'Auth System (JWT, OAuth2)', 
                    'CRUD API + Pydantic DTOs', 
                    '3D Bin Packing Algorithm'
                ]}
              />
              <PhaseCard 
                number="3"
                color="bg-emerald-500"
                icon={Settings}
                title="Enhancement"
                subtitle="Optimization & Security"
                items={[
                    'Query Optimization & Indexing', 
                    'OWASP Security Hardening', 
                    'Docker & CI/CD Pipelines'
                ]}
                isLast={true}
              />
           </div>
        </div>

        {/* Bottom Section (Compressed to ~45%) */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-5 animate-fade-in-up delay-200">
            
            {/* Bottom Left: Prompt Template (Compact) */}
            <div className="flex flex-col h-full min-h-0">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2 shrink-0 px-1">
                 <Terminal size={14} className="text-purple-500" /> Universal Prompt Template
               </h3>
               
               {/* Premium Code Editor */}
               <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md flex flex-col flex-1 font-mono text-xs ring-1 ring-slate-900/5 h-full min-h-0 group">
                  {/* Window Controls */}
                  <div className="bg-[#0f172a] px-3 py-1.5 flex items-center justify-between border-b border-white/5 shrink-0">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                         <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                         <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                         <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                      </div>
                      <span className="text-slate-500 text-[9px] font-semibold opacity-60 ml-2">prompt_master.md</span>
                    </div>
                  </div>

                  {/* Code Area */}
                  <div className="flex-1 bg-[#1e293b] relative overflow-y-auto custom-scrollbar">
                    <div className="flex gap-3 p-3 min-h-full">
                      {/* Line Numbers */}
                      <div className="text-slate-600/50 select-none text-right min-w-[1.2rem] leading-5 font-mono text-[9px] border-r border-slate-700/30 pr-2">
                        1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
                      </div>
                      
                      {/* Code Content */}
                      <div className="text-slate-300 leading-5 font-medium text-[9px] font-jet flex-1">
                        
                        {/* Section 1 */}
                        <div className="flex items-center gap-2">
                            <span className="text-purple-400 font-bold">@Context</span> 
                            <span className="text-slate-500 opacity-80">// Enterprise System V2.0</span>
                        </div>
                        <div className="pl-4 text-slate-400 mb-1">
                            Stack: <span className="text-[#61dafb]">React</span> + <span className="text-[#009688]">FastAPI</span> + <span className="text-[#336791]">PostgreSQL</span>
                        </div>

                        {/* Section 2 */}
                        <div className="flex items-center gap-2">
                            <span className="text-blue-400 font-bold">@Rules</span> 
                            <span className="text-slate-500 opacity-80">// Security & Performance</span>
                        </div>
                        <div className="pl-4 text-slate-400">
                            - Auth: <span className="text-yellow-300">OAuth2 (JWT)</span> + RBAC
                        </div>
                        <div className="pl-4 text-slate-400 mb-2">
                            - Data: <span className="text-yellow-300">Async SQLAlchemy</span> + Pydantic
                        </div>

                        {/* Section 3 - The Prompt */}
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-700/50">
                            <span className="text-emerald-400 font-bold">$ TASK_EXECUTION</span>
                        </div>
                        <div className="pl-3 border-l-2 border-emerald-500/20 text-slate-300 ml-1 mt-1 italic opacity-90">
                           "Generate <span className="text-white font-bold">AuthService</span> module with login, refresh-token logic, <br/>
                           Redis rate-limiting, and 100% Pytest coverage."
                        </div>
                        
                        {/* Extra Content to enable scrolling */}
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-700/30">
                            <span className="text-amber-400 font-bold">@Output_Format</span>
                        </div>
                        <div className="pl-4 text-slate-400">
                             Return: [JSON Schema, OpenAPI Spec, Python Code]
                        </div>

                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Bottom Right: Human-in-the-Loop (Compact) */}
            <div className="flex flex-col h-full min-h-0">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2 shrink-0 px-1">
                 <Shield size={14} className="text-emerald-600" /> Human-in-the-Loop
               </h3>
               
               {/* Info Card */}
               <div className="bg-white border border-slate-200/60 rounded-xl p-4 shadow-sm flex flex-col flex-1 h-full min-h-0 hover:border-emerald-200 hover:shadow-md transition-all duration-300 ring-1 ring-slate-100 justify-center">
                  <div className="flex items-center gap-4 mb-3">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                        <Workflow size={18} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold text-slate-900">Co-Pilot Workflow</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                           AI generates 80% boilerplate & logic. Humans refine business rules.
                        </p>
                     </div>
                  </div>
                  
                  <div className="w-full h-px bg-slate-100 my-1"></div>

                  <div className="flex items-center gap-4 mt-1">
                     <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                        <Shield size={18} />
                     </div>
                     <div>
                        <h4 className="text-xs font-bold text-slate-900">Security Gate</h4>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                           Manual review for Authentication, Payments & Data Access layers.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

        </div>
      </div>
    </SlideLayout>
  );
};