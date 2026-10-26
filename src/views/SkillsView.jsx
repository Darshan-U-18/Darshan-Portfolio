import React from 'react';
import { BarChart2, Table, Cpu, Sparkles } from 'lucide-react';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import pythonLogo from '../assets/python.png';
import mysqlLogo from '../assets/mysql.png';
import jsLogo from '../assets/js.png';

export default function SkillsView() {
  const ReactIcon = () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );

  const skills = [
    { name: 'Python', image: pythonLogo, category: 'CORE // LANG' },
    { name: 'MySQL', image: mysqlLogo, category: 'CORE // DB' },
    { name: 'HTML', image: htmlLogo, category: 'CORE // WEB' },
    { name: 'CSS', image: cssLogo, category: 'CORE // STYLE' },
    { name: 'JavaScript', image: jsLogo, category: 'CORE // SCRIPT' },
    { name: 'React JS', svg: ReactIcon, category: 'CORE // UI' },
    { name: 'Power BI', icon: BarChart2, color: '#F2C811', category: 'ANALYTICS' },
    { name: 'Excel', icon: Table, color: '#217346', category: 'DATA // SPREAD' },
  ];

  return (
    <div className="hide-scrollbar relative flex h-full w-full flex-col px-4 text-white sm:px-8 lg:px-12 py-8 lg:py-12 overflow-y-auto">
      {/* Ambient Dot Matrix Background (Matching About & Projects) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,87,34,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
      
      {/* Side Vertical Text */}
      <div className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 hidden lg:flex pointer-events-none">
        <div className="w-[2px] h-16 bg-[#FF5722]/30" />
        <span className="text-xl font-black uppercase tracking-[0.3em] text-white/80 font-mono" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Tech Stack
        </span>
        <div className="w-[2px] h-16 bg-[#FF5722]" />
        <div className="w-[2px] h-16 bg-[#FF5722]/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl flex-1 flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5722]/30 bg-[#0e0704] text-[#FF5722] text-xs font-semibold tracking-wider uppercase mb-3">
            <Cpu size={14} /> Technical Arsenal
          </div>
          <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-white mb-3">
            What I <span className="text-[#FF5722]">Build With.</span>
          </h1>
          <p className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I specialize in transforming complex data into actionable insights through robust analytics and engineering dynamic full-stack systems with modern frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:pl-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[24px] border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-5 lg:p-7 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(255,87,34,0.2)] flex flex-col items-center justify-center"
            >
              {/* Glowing Top Laser Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent group-hover:via-[#FF5722] transition-all" />

              {/* Left Energy Rail */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent" />

              {/* Ambient Hover Glow */}
              <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-[#FF5722]/5 blur-2xl pointer-events-none group-hover:bg-[#FF5722]/20 transition-all duration-500" />

              {/* Category Micro Tag */}
              <span className="font-mono text-[9px] tracking-widest font-semibold uppercase text-[#FF5722]/80 bg-[#FF5722]/10 px-2 py-0.5 rounded border border-[#FF5722]/20 mb-3">
                {skill.category}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 lg:w-16 lg:h-16 mb-3 flex items-center justify-center rounded-2xl border border-[#FF5722]/20 bg-[#0e0704] p-3 shadow-inner group-hover:border-[#FF5722]/50 group-hover:scale-110 transition-all duration-300">
                {skill.image && (
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-contain drop-shadow" />
                )}
                {skill.svg && (
                  <skill.svg />
                )}
                {skill.icon && (
                  <skill.icon size={36} color={skill.color} className="w-full h-full drop-shadow" />
                )}
              </div>

              {/* Name */}
              <span className="text-xs lg:text-sm font-bold tracking-wide text-white group-hover:text-[#FF5722] transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}