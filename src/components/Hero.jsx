import React, { useState, useEffect } from 'react';
import { Mail, Zap, Quote } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import girijaProfile from '../assets/girija-profile.jpg';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import pythonLogo from '../assets/python.png';
import mysqlLogo from '../assets/mysql.png';
import jsLogo from '../assets/js.png';

const roles = ["Data Analyst", "AI - Powered FullStack Developer"];

export default function Hero({ setActiveTab }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(45);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(90);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div className="relative flex h-full w-full flex-col lg:flex-row items-center justify-center bg-[#24130c] px-4 py-4 lg:px-20 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,87,34,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,100,50,0.05),transparent_60%)] rounded-full pointer-events-none"></div>

      {/* Decorative Thunder Spikes (Like in the reference) */}
      <div className="absolute left-[-5%] top-[40%] text-[#FF5722]/80 opacity-60 pointer-events-none rotate-[20deg] scale-100 lg:scale-150 blur-[2px]">
        <svg width="200" height="300" viewBox="0 0 24 24" fill="url(#grad1)" stroke="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5722" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff9800" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      
      <div className="absolute right-[-2%] top-[10%] text-[#FF5722]/80 opacity-80 pointer-events-none rotate-[-15deg] scale-75 lg:scale-125">
        <svg width="200" height="300" viewBox="0 0 24 24" fill="url(#grad2)" stroke="none">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff9800" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF5722" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>

      <div className="z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-2 lg:gap-8 lg:grid-cols-2 relative h-full">
        
        {/* Left Column: Text & Actions */}
        <div className="space-y-1 sm:space-y-2 lg:space-y-3 z-20 flex flex-col justify-center">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium mb-1">
              Hey, I am <span className="text-[#FF5722]">Darshan</span>
            </h2>
            {/* Replaced min-h with strict fixed heights (h-[...]) that perfectly fit 2 lines of text, completely eliminating the jumping layout effect */}
            <h1 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-1 lg:mb-2 h-[60px] sm:h-[70px] lg:h-[96px] xl:h-[120px] flex items-start bg-gradient-to-r from-[#FF5722] to-[#ff9800] bg-clip-text text-transparent">
              <span className="typing-cursor leading-tight">
                {currentText || '\u00A0'}
              </span>
            </h1>
            <p className="text-gray-400 text-[10px] sm:text-xs lg:text-sm max-w-sm leading-relaxed">
              Transforming complex datasets into actionable insights and engineering robust, intelligent, end-to-end full-stack architectures.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 lg:gap-4 pt-1 mb-1">
            <button
              onClick={() => setActiveTab('connect')}
              className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-[10px] lg:text-xs shadow-[0_4px_15px_rgba(255,87,34,0.4)]"
            >
              Hire me
            </button>
            <button
              onClick={() => setActiveTab('connect')}
              className="w-8 h-8 lg:w-10 lg:h-10 bg-transparent border border-white/20 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300"
              title="Direct Message"
            >
              <Mail size={14} className="lg:scale-110" />
            </button>
          </div>
          
          <div className="w-full max-w-[250px] lg:max-w-sm h-px bg-gradient-to-r from-white/20 to-transparent my-1 sm:my-2"></div>

          {/* Glassmorphic Suggestion / Quote Box */}
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 p-2 sm:p-3 lg:p-4 rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] max-w-[260px] sm:max-w-[280px] lg:max-w-sm shadow-2xl">
            <Quote size={16} className="text-white/60 mb-1" />
            <p className="text-gray-200 text-[9px] lg:text-xs leading-relaxed mb-1.5 lg:mb-2">
              "Darshan consistently delivers exceptional problem-solving frameworks, bridging analytics and AI-powered execution seamlessly."
            </p>
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border border-white/20 shadow-sm shrink-0">
                <img src={girijaProfile} alt="Girija" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-[10px] lg:text-xs font-bold text-white leading-tight">Girija Manoharan</h4>
                <p className="text-[9px] lg:text-[10px] text-gray-400 leading-tight">IT Architect senior @ FIS Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Character & Floating Tech */}
        {/* Shrunk the document flow height so it pulls the bottom layout up, making room for the quote box */}
        <div className="relative flex justify-center items-center h-[160px] sm:h-[220px] lg:h-[400px] z-10 scale-[0.45] sm:scale-[0.6] lg:scale-95 origin-center lg:origin-right mt-1 lg:mt-0">
          
          {/* Orbit Rings */}
          <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full pointer-events-none"></div>
          <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full pointer-events-none"></div>
          
          {/* Rotating Tech Badges */}
          {/* The parent container rotates clockwise */}
          <div className="absolute w-[450px] h-[450px] rounded-full animate-[spin_40s_linear_infinite] pointer-events-none z-30">
            
            {/* 1. HTML (0deg) */}
            <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(0deg) translate(0, -225px)' }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm rounded-xl p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(0deg)' }}>
                <img src={htmlLogo} alt="HTML" className="w-full h-full object-contain pointer-events-none" />
              </div>
            </div>

            {/* 2. JS (72deg) */}
            <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(72deg) translate(0, -225px)' }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm rounded-xl p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-72deg)' }}>
                <img src={jsLogo} alt="JS" className="w-full h-full object-contain pointer-events-none" />
              </div>
            </div>

            {/* 3. CSS (144deg) */}
            <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(144deg) translate(0, -225px)' }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm rounded-xl p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-144deg)' }}>
                <img src={cssLogo} alt="CSS" className="w-full h-full object-contain pointer-events-none" />
              </div>
            </div>

            {/* 4. MySQL (216deg) */}
            <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(216deg) translate(0, -225px)' }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm rounded-xl p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-216deg)' }}>
                <img src={mysqlLogo} alt="MySQL" className="w-full h-full object-contain pointer-events-none" />
              </div>
            </div>
            
            {/* 5. Python (288deg) */}
            <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(288deg) translate(0, -225px)' }}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 backdrop-blur-sm rounded-xl p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-288deg)' }}>
                <img src={pythonLogo} alt="Python" className="w-full h-full object-contain pointer-events-none" />
              </div>
            </div>
            
          </div>

          {/* Main Character Image - Circular */}
          <div className="relative z-20 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-[6px] lg:border-[8px] border-[#31180f] shadow-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1a0f08]">
             <img 
                src={profileImage} 
                alt="Darshan U." 
                className="w-full h-full object-cover object-top"
              />
          </div>

        </div>

      </div>

    </div>
  );
}