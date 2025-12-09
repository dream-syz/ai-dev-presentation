import React, { useState, useEffect, useCallback } from 'react';
import { Slide1 } from './components/slides/Slide1';
import { Slide2 } from './components/slides/Slide2';
import { Slide3 } from './components/slides/Slide3';
import { ChevronLeft, ChevronRight, Maximize2, LayoutList, MonitorPlay } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Default to 'list' mode so all 3 slides are visible immediately
  const [viewMode, setViewMode] = useState<'slideshow' | 'list'>('list');
  const totalSlides = 3;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'list') return; // Disable slide nav in list mode

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, viewMode]);

  const renderSlide = (index: number) => {
    switch (index) {
      case 0: return <Slide1 />;
      case 1: return <Slide2 />;
      case 2: return <Slide3 />;
      default: return <Slide1 />;
    }
  };

  return (
    <div className={`min-h-screen w-full bg-slate-200 flex items-center justify-center p-4 lg:p-8 font-sans selection:bg-blue-100 selection:text-blue-800 ${viewMode === 'list' ? 'h-auto items-start overflow-y-auto' : 'h-screen overflow-hidden'}`}>
      
      {/* Main Container */}
      <div className={`w-full max-w-7xl transition-all duration-500 ease-in-out relative flex flex-col ${
          viewMode === 'slideshow' 
            ? 'aspect-video bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden ring-1 ring-slate-900/5' 
            : 'bg-transparent shadow-none gap-8'
        }`}>
        
        {/* VIEW MODE: SLIDESHOW */}
        {viewMode === 'slideshow' && (
          <div key={currentSlide} className="flex-1 w-full h-full min-h-0 animate-fade-in-up">
              {renderSlide(currentSlide)}
          </div>
        )}

        {/* VIEW MODE: VERTICAL LIST (Entry Page / Default) */}
        {viewMode === 'list' && (
          <div className="flex flex-col gap-8 pb-32 animate-fade-in-up">
             {[0, 1, 2].map((index) => (
                <div key={index} className="w-full aspect-video bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-slate-900/5 relative group hover:ring-4 hover:ring-blue-500/10 transition-all duration-500">
                   {renderSlide(index)}
                </div>
             ))}
          </div>
        )}

        {/* --- CONTROLS OVERLAY --- */}

        {/* Navigation Arrows (Only in Slideshow) */}
        {viewMode === 'slideshow' && (
          <div className="absolute bottom-5 right-8 flex items-center gap-3 z-50 group">
            <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/80 shadow-lg shadow-slate-200/50 flex items-center gap-2 transition-all opacity-30 hover:opacity-100 hover:scale-105">
              <button 
                onClick={prevSlide}
                className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
                title="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-[10px] font-mono font-bold text-slate-400 min-w-[50px] text-center border-l border-r border-slate-200/60 px-2 select-none">
                {currentSlide + 1} / {totalSlides}
              </span>
              <button 
                onClick={nextSlide}
                className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-colors"
                title="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Bottom Floating Tools */}
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${viewMode === 'slideshow' ? 'translate-y-20 hover:translate-y-0 opacity-0 hover:opacity-100' : 'translate-y-0 opacity-100'}`}>
            <div className="bg-slate-900/90 text-white p-1.5 rounded-full shadow-2xl backdrop-blur-md border border-white/10 flex items-center gap-1">
                {/* View Toggle */}
                <button 
                    onClick={() => setViewMode(prev => prev === 'slideshow' ? 'list' : 'slideshow')}
                    className={`flex items-center gap-2 text-[10px] font-bold transition-colors px-4 py-2 rounded-full uppercase tracking-wider ${
                        viewMode === 'slideshow' 
                        ? 'text-slate-300 hover:text-white hover:bg-white/10' 
                        : 'bg-white text-slate-900 shadow-sm'
                    }`}
                >
                    {viewMode === 'slideshow' ? (
                        <>
                            <LayoutList size={14} /> Overview
                        </>
                    ) : (
                        <>
                            <MonitorPlay size={14} /> Present
                        </>
                    )}
                </button>

                {/* Fullscreen */}
                <button 
                    onClick={() => document.documentElement.requestFullscreen()}
                    className="flex items-center gap-2 text-[10px] font-bold transition-colors px-4 py-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white uppercase tracking-wider"
                >
                    <Maximize2 size={12} />
                </button>
            </div>
        </div>

      </div>

    </div>
  );
}