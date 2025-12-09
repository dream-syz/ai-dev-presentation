import React from 'react';
import { SlideLayout } from '../SlideLayout';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, FileCode, Zap, ArrowRight, Shield, Database, Layout, KeyRound } from 'lucide-react';

const data = [
  { name: 'Reqs', fullName: 'Requirements', traditional: 40, ai: 2 },
  { name: 'DB', fullName: 'Database', traditional: 40, ai: 3 },
  { name: 'Backend', fullName: 'Backend', traditional: 120, ai: 6 },
  { name: 'Frontend', fullName: 'Frontend', traditional: 120, ai: 8 },
  { name: 'Algo', fullName: 'Algorithm', traditional: 80, ai: 4 },
  { name: 'Test', fullName: 'Testing', traditional: 80, ai: 3 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const dataItem = payload[0].payload;
    return (
      <div className="bg-slate-800/95 backdrop-blur border border-slate-700 p-3 rounded-lg shadow-xl text-xs text-white min-w-[150px]">
        <p className="font-bold text-slate-200 mb-2 border-b border-slate-700 pb-2">{dataItem.fullName}</p>
        <div className="flex justify-between items-center mb-1.5">
             <span className="text-slate-400">Manual:</span>
             <span className="font-mono text-slate-300">{payload[0].value}h</span>
        </div>
        <div className="flex justify-between items-center">
             <span className="text-blue-400 font-bold">AI-Assisted:</span>
             <span className="font-mono text-blue-400 font-bold text-sm">{payload[1].value}h</span>
        </div>
      </div>
    );
  }
  return null;
};

export const Slide2: React.FC = () => {
  return (
    <SlideLayout 
      title="AI-Driven Productivity Revolution" 
      subtitle="Efficiency Comparison & Strategic Implementation"
      slideNumber={2}
      breadcrumbs={['Efficiency', 'ROI', 'Strategy']}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 h-full">
        
        {/* Left: Charts & ROI */}
        <div className="col-span-12 lg:col-span-7 flex flex-col h-full gap-5">
          {/* Main Chart Card */}
          <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm flex-1 flex flex-col animate-fade-in-up delay-100 min-h-[300px]">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 mb-1">
                    <TrendingUp size={14} className="text-blue-600" /> Efficiency Analysis
                  </h3>
                  <h2 className="text-base font-bold text-slate-900">Resource Consumption by Phase</h2>
               </div>
               
               <div className="flex gap-4 bg-slate-50/80 px-4 py-2 rounded-lg border border-slate-100">
                 <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
                    <div className="w-2.5 h-2.5 bg-slate-300 rounded-sm"></div> Traditional
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-sm shadow-sm shadow-blue-500/50"></div> AI-Driven
                 </div>
              </div>
            </div>
            
            <div className="flex-1 w-full min-h-0 relative">
               {/* Left Axis Label */}
               <div className="absolute -left-4 top-1/2 -rotate-90 text-[9px] font-bold text-slate-400 tracking-wider">HOURS SPENT</div>
               
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  barGap={4}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    tick={{fontSize: 10, fill: '#64748b', fontWeight: 600}} 
                    stroke="transparent" 
                    dy={10}
                    interval={0}
                  />
                  <YAxis 
                    tick={{fontSize: 10, fill: '#94a3b8'}} 
                    stroke="transparent" 
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: '#f8fafc', radius: 4}} />
                  <defs>
                    <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#cbd5e1" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#e2e8f0" stopOpacity={1}/>
                    </linearGradient>
                    <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={1}/>
                    </linearGradient>
                  </defs>
                  <Bar dataKey="traditional" fill="url(#colorTraditional)" radius={[4, 4, 4, 4]} barSize={16} />
                  <Bar dataKey="ai" fill="url(#colorAi)" radius={[4, 4, 4, 4]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* KPI Cards */}
          <div className="grid grid-cols-3 gap-5 animate-fade-in-up delay-200 shrink-0">
             <div className="bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">30<span className="text-lg text-slate-400 font-bold ml-0.5">x</span></div>
                 <div className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1">Velocity Increase</div>
             </div>
             <div className="bg-emerald-50/80 border border-emerald-100 p-4 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-emerald-100/50 scale-0 group-hover:scale-100 rounded-2xl transition-transform duration-500"></div>
                 <div className="relative z-10">
                    <div className="text-3xl font-black text-emerald-600">400<span className="text-lg text-emerald-500 font-bold ml-0.5">%</span></div>
                    <div className="text-[9px] uppercase font-bold text-emerald-700/60 tracking-widest mt-1">ROI / $ Invested</div>
                 </div>
             </div>
             <div className="bg-white border border-slate-200/60 p-4 rounded-2xl shadow-sm text-center group hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">95<span className="text-lg text-slate-400 font-bold ml-0.5">%</span></div>
                 <div className="text-[9px] uppercase font-bold text-slate-400 tracking-widest mt-1">Code Quality</div>
             </div>
          </div>
        </div>

        {/* Right: Strategy & Case Study */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          
          {/* Prompt Strategy Blueprint */}
          <div className="bg-[#0f172a] rounded-2xl p-6 relative overflow-hidden shadow-2xl flex flex-col min-h-[220px] ring-1 ring-slate-900/5 group">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 z-0 opacity-10" 
                 style={{ backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-5 flex items-center gap-2 pb-3 border-b border-white/10">
                <Zap size={14} className="text-yellow-400 fill-yellow-400" /> High-Impact Strategy
              </h3>
              
              <div className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                 "Leveraging <strong className="text-white font-medium bg-blue-500/20 px-1 rounded">Chain-of-Thought</strong> reasoning and strict TypeSpec constraints to force deterministic, production-ready code generation."
              </div>

              <div className="mt-auto bg-[#1e293b] rounded-lg border border-slate-700/60 p-3.5 font-mono text-[10px] text-blue-200/80 shadow-inner flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>INPUT: Single Structured Context</span>
                 </div>
                 <div className="h-px bg-slate-700 w-full"></div>
                 <div className="flex items-center gap-2 text-blue-300 font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                    <span>OUTPUT: Full System Module (DB+API+UI)</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm flex-1 flex flex-col animate-fade-in-up delay-300 min-h-[250px]">
             <div className="flex items-center justify-between mb-5">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <FileCode size={14} className="text-blue-600" />
                  Case Study: Auth Module
                </h3>
             </div>
             
             {/* Transformation Flow */}
             <div className="flex-1 flex flex-col justify-center gap-3">
                
                {/* Input */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Human Intent</p>
                    <p className="text-xs font-medium text-slate-700">"Implement secure JWT Authentication with Refresh Tokens"</p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center text-slate-300">
                   <ArrowRight size={16} className="rotate-90" />
                </div>

                {/* Output Grid */}
                <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: KeyRound, text: "Middleware + BCrypt", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100" },
                      { icon: Database, text: "SQLAlchemy Models", color: "text-indigo-700", bg: "bg-indigo-50", border: "border-indigo-100" },
                      { icon: Layout, text: "React + Zod Forms", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-100" },
                      { icon: Shield, text: "Redis Rate Limits", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-100" }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-center gap-2 p-2.5 rounded-lg ${item.bg} ${item.border} border shadow-sm`}>
                        <item.icon size={12} className={item.color} />
                        <span className={`text-[10px] font-bold ${item.color}`}>{item.text}</span>
                      </div>
                    ))}
                </div>

             </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};