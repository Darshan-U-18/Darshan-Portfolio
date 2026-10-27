import React, { useState, useEffect } from 'react';
import { Mail, Zap, Quote } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import girijaProfile from '../assets/girija-profile.jpg';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import pythonLogo from '../assets/python.png';
import mysqlLogo from '../assets/mysql.png';
import jsLogo from '../assets/js.png';
import { siteConfig } from '../config/site';

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

  const resumeUrl = `${import.meta.env.BASE_URL}Darshan_U_Resume.pdf`;

  return (
    <div className="relative flex h-full w-full flex-col md:flex-row items-center justify-center bg-[#160d08] px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-0 pb-28 md:pb-16 lg:pb-0 overflow-y-auto md:overflow-hidden overflow-x-hidden hide-scrollbar">
      
      {/* Ambient Dot Matrix Background (Matching About & Projects) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,87,34,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,87,34,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(255,100,50,0.05),transparent_60%)] rounded-full pointer-events-none" />

      {/* Decorative Thunder Spikes */}
      <div className="absolute left-[-5%] top-[40%] text-[#FF5722]/80 opacity-40 sm:opacity-60 pointer-events-none rotate-[20deg] scale-100 lg:scale-150 blur-[2px] hidden sm:block">
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
      
      <div className="absolute right-[-2%] top-[10%] text-[#FF5722]/80 opacity-60 sm:opacity-80 pointer-events-none rotate-[-15deg] scale-75 lg:scale-125 hidden sm:block">
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

      <div className="z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 relative md:h-full">
        
        {/* Left Column: Text & Actions */}
        <div className="space-y-2.5 sm:space-y-3 lg:space-y-4 z-20 flex flex-col justify-center text-left">
          <div>
            <h2 className="text-sm sm:text-base lg:text-lg text-gray-300 font-medium mb-1">
              Hey, I am <span className="text-[#FF5722]">{siteConfig.name.split(' ')[0]}</span>
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-1.5 min-h-[50px] sm:min-h-[58px] md:min-h-[64px] lg:min-h-[88px] flex items-start bg-gradient-to-r from-[#FF5722] to-[#ff9800] bg-clip-text text-transparent">
              <span className="typing-cursor leading-tight">
                {currentText || '\u00A0'}
              </span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm lg:text-sm max-w-lg leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:gap-4 pt-1 mb-1">
            <button
              onClick={() => setActiveTab('connect')}
              className="bg-[#FF5722] hover:bg-[#E64A19] active:scale-95 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-xs sm:text-xs lg:text-sm shadow-[0_4px_15px_rgba(255,87,34,0.4)]"
            >
              Hire me
            </button>
            <a
              href={resumeUrl}
              download="Darshan_U_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0e0704] border border-[#FF5722]/40 text-[#FF8A65] hover:text-white hover:bg-[#FF5722]/15 hover:border-[#FF5722] active:scale-95 font-semibold px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 text-xs sm:text-xs lg:text-sm shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
            >
              Download CV
            </a>
            <button
              onClick={() => setActiveTab('connect')}
              className="w-10 h-10 bg-[#0e0704] border border-[#FF5722]/30 hover:border-[#FF5722] hover:bg-[#FF5722]/15 active:scale-95 rounded-full flex items-center justify-center text-[#FF5722] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
              title="Direct Message"
            >
              <Mail size={16} />
            </button>
          </div>
          
          <div className="w-full max-w-md h-px bg-gradient-to-r from-[#FF5722]/30 to-transparent my-1 hidden md:block" />

          {/* Obsidian Carbon Quote Box (Shown on tablet & desktop in left column) */}
          <div className="hidden md:block group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-3.5 lg:p-5 max-w-md shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:-translate-y-0.5">
            {/* Top Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent group-hover:via-[#FF5722] transition-all" />

            {/* Left Rail */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent" />

            <Quote size={18} className="text-[#FF5722] mb-1.5 opacity-80" />
            <p className="text-gray-200 text-xs sm:text-xs lg:text-sm leading-relaxed mb-2.5">
              "Darshan consistently delivers exceptional problem-solving frameworks, bridging analytics and AI-powered execution seamlessly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#FF5722]/30 shadow-sm shrink-0">
                <img src={girijaProfile} alt="Girija" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Girija Manoharan</h4>
                <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">IT Architect senior @ FIS Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Character & Floating Tech & Mobile Quote Box */}
        <div className="flex flex-col items-center justify-center w-full z-10">
          <div 
            className="relative flex justify-center items-center my-3 sm:my-4 md:my-0" 
            style={{ width: 'var(--orbit-size)', height: 'var(--orbit-size)', minHeight: 'var(--orbit-size)' }}
          >
            
            {/* Orbit Rings */}
            <div 
              className="absolute border border-[#FF5722]/15 rounded-full pointer-events-none" 
              style={{ width: 'var(--orbit-size)', height: 'var(--orbit-size)' }}
            />
            <div 
              className="absolute border border-[#FF5722]/10 rounded-full pointer-events-none" 
              style={{ width: 'calc(var(--orbit-size) * 0.74)', height: 'calc(var(--orbit-size) * 0.74)' }}
            />
            
            {/* Rotating Tech Badges */}
            <div 
              className="absolute rounded-full animate-[spin_40s_linear_infinite] pointer-events-none z-30"
              style={{ width: 'var(--orbit-size)', height: 'var(--orbit-size)' }}
            >
              
              {/* 1. HTML (0deg) */}
              <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(0deg) translateY(calc(-1 * var(--orbit-radius)))' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#0e0704]/90 rounded-xl p-1.5 sm:p-2 shadow-[0_4px_15px_rgba(0,0,0,0.7)] border border-[#FF5722]/30 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(0deg)' }}>
                  <img src={htmlLogo} alt="HTML" className="w-full h-full object-contain pointer-events-none" />
                </div>
              </div>

              {/* 2. JS (72deg) */}
              <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(72deg) translateY(calc(-1 * var(--orbit-radius)))' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#0e0704]/90 rounded-xl p-1.5 sm:p-2 shadow-[0_4px_15px_rgba(0,0,0,0.7)] border border-[#FF5722]/30 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-72deg)' }}>
                  <img src={jsLogo} alt="JS" className="w-full h-full object-contain pointer-events-none" />
                </div>
              </div>

              {/* 3. CSS (144deg) */}
              <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(144deg) translateY(calc(-1 * var(--orbit-radius)))' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#0e0704]/90 rounded-xl p-1.5 sm:p-2 shadow-[0_4px_15px_rgba(0,0,0,0.7)] border border-[#FF5722]/30 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-144deg)' }}>
                  <img src={cssLogo} alt="CSS" className="w-full h-full object-contain pointer-events-none" />
                </div>
              </div>

              {/* 4. MySQL (216deg) */}
              <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(216deg) translateY(calc(-1 * var(--orbit-radius)))' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#0e0704]/90 rounded-xl p-1.5 sm:p-2 shadow-[0_4px_15px_rgba(0,0,0,0.7)] border border-[#FF5722]/30 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-216deg)' }}>
                  <img src={mysqlLogo} alt="MySQL" className="w-full h-full object-contain pointer-events-none" />
                </div>
              </div>
              
              {/* 5. Python (288deg) */}
              <div className="absolute inset-0 flex items-center justify-center origin-center" style={{ transform: 'rotate(288deg) translateY(calc(-1 * var(--orbit-radius)))' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-[#0e0704]/90 rounded-xl p-1.5 sm:p-2 shadow-[0_4px_15px_rgba(0,0,0,0.7)] border border-[#FF5722]/30 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]" style={{ transform: 'rotate(-288deg)' }}>
                  <img src={pythonLogo} alt="Python" className="w-full h-full object-contain pointer-events-none" />
                </div>
              </div>
              
            </div>

            {/* Main Character Image - Circular with Ember Ring (Big & prominent on all screens) */}
            <div className="relative z-20 w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] rounded-full overflow-hidden border-[5px] sm:border-[6px] lg:border-[8px] border-[#31180f] shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(255,87,34,0.18)] bg-[#1a0f08]">
               <img 
                  src={profileImage} 
                  alt="Darshan U." 
                  className="w-full h-full object-cover object-top"
                />
            </div>

          </div>

          {/* Obsidian Carbon Quote Box (Shown on mobile screens right below profile picture) */}
          <div className="block md:hidden w-full mt-6 group relative overflow-hidden rounded-[24px] border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-4 sm:p-5 max-w-md shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300">
            {/* Top Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent group-hover:via-[#FF5722] transition-all" />

            {/* Left Rail */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent" />

            <Quote size={18} className="text-[#FF5722] mb-1.5 opacity-80" />
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-3">
              "Darshan consistently delivers exceptional problem-solving frameworks, bridging analytics and AI-powered execution seamlessly."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#FF5722]/30 shadow-sm shrink-0">
                <img src={girijaProfile} alt="Girija" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Girija Manoharan</h4>
                <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">IT Architect senior @ FIS Global</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}