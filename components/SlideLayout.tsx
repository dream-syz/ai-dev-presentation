import React from 'react';
import { Hexagon, Command, Cpu, Layers } from 'lucide-react';

interface SlideLayoutProps {
  title: string;
  subtitle?: string;
  slideNumber: number;
  children: React.ReactNode;
  breadcrumbs?: string[];
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  title, 
  subtitle, 
  slideNumber, 
  children,
  breadcrumbs = ['CONFIDENTIAL', 'INTERNAL']
}) => {
  return (
    <div className="w-full h-full bg-slate-50/50 text-slate-800 flex flex-col relative overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 z-50"></div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      {/* Header */}
      <div className="relative z-20 flex-none h-14 lg:h-16 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-6 lg:px-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-1.5 lg:p-2 rounded-xl text-white shadow-lg shadow-slate-900/10 ring-1 ring-white/10">
             <Hexagon size={18} fill="currentColor" className="text-blue-400" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-base lg:text-lg font-bold tracking-tight text-slate-900 leading-none mb-0.5 lg:mb-1">{title}</h1>
            <div className="flex items-center gap-2">
               <span className="w-1 h-1 rounded-full bg-blue-500"></span>
               <p className="text-[10px] lg:text-[11px] font-medium text-slate-500 uppercase tracking-wide">{subtitle}</p>
            </div>
          </div>
        </div>
        
        {/* Modern Breadcrumbs */}
        <div className="hidden md:flex items-center bg-slate-100/50 p-1 rounded-lg border border-slate-200/60">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span className={`text-[9px] lg:text-[10px] font-bold uppercase tracking-wider px-2 lg:px-3 py-1 rounded-md transition-all ${
                idx === breadcrumbs.length - 1 
                  ? 'bg-white text-blue-700 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-400'
              }`}>
                {crumb}
              </span>
              {idx < breadcrumbs.length - 1 && <span className="text-slate-300 px-1">/</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main Content - Reduced padding for better space utilization */}
      <div className="flex-1 relative z-10 p-5 lg:p-6 overflow-hidden flex flex-col animate-fade-in-up">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-20 flex-none h-9 lg:h-10 bg-white/60 backdrop-blur-md border-t border-slate-200/60 flex items-center justify-between px-6 lg:px-8 text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50/80 px-2.5 py-0.5 rounded-full border border-emerald-100/50 text-[10px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            SYSTEM ONLINE
          </span>
          <span className="hidden sm:flex text-slate-400 items-center gap-1.5 text-[10px] font-medium tracking-wide">
            <Cpu size={12} />
            AI-CO-PILOT v2.4
          </span>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <Layers size={12} />
              <span className="tracking-widest text-[9px] font-semibold uppercase">Enterprise Edition</span>
           </div>
           <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
             <span className="font-mono text-slate-400 text-[10px]">SLIDE</span>
             <span className="font-mono font-bold text-slate-800 text-xs lg:text-sm">0{slideNumber}</span>
           </div>
        </div>
      </div>
    </div>
  );
};