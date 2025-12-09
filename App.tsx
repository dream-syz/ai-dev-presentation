import React, { useState, useEffect, useCallback } from 'react';
import { Slide1 } from './components/slides/Slide1';
import { Slide2 } from './components/slides/Slide2';
import { Slide3 } from './components/slides/Slide3';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1 />;
      case 1: return <Slide2 />;
      case 2: return <Slide3 />;
      default: return <Slide1 />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-200 flex items-center justify-center p-4 lg:p-12 font-sans selection:bg-blue-100 selection:text-blue-800">
      
      {/* 16:9 Presentation Container */}
      <div className="w-full max-w-7xl aspect-video bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden relative ring-1 ring-slate-900/5 flex flex-col">
        
        {/* Slide Content */}
        <div key={currentSlide} className="flex-1 w-full h-full min-h-0">
            {renderSlide()}
        </div>

        {/* Navigation Controls Overlay */}
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

        {/* Fullscreen Toggle */}
        <div className="absolute bottom-5 left-8 flex items-center gap-6 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
             <button 
                onClick={() => document.documentElement.requestFullscreen()}
                className="flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-slate-700 transition-colors bg-white/80 px-4 py-2 rounded-full border border-slate-200/60 backdrop-blur-sm shadow-sm hover:shadow uppercase tracking-wider"
              >
                <Maximize2 size={12} /> Fullscreen
             </button>
        </div>

      </div>

    </div>
  );
}