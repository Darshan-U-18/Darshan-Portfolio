import React from 'react';
import { BarChart2, Table } from 'lucide-react';
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
    { name: 'Python', image: pythonLogo },
    { name: 'MySQL', image: mysqlLogo },
    { name: 'HTML', image: htmlLogo },
    { name: 'CSS', image: cssLogo },
    { name: 'JavaScript', image: jsLogo },
    { name: 'React JS', svg: ReactIcon },
    { name: 'Power BI', icon: BarChart2, color: '#F2C811' },
    { name: 'Excel', icon: Table, color: '#217346' },
  ];

  return (
    <div className="relative flex h-full w-full flex-col px-4 text-white sm:px-8 lg:px-12 py-8 lg:py-12">
      
      {/* Side Vertical Text (Like in screenshot) */}
      <div className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 hidden lg:flex">
        <div className="w-[2px] h-16 bg-white/20"></div>
        <span className="text-xl font-black uppercase tracking-[0.3em] text-white/80" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          Skills
        </span>
        <div className="w-[2px] h-16 bg-[#FF5722]"></div>
        <div className="w-[2px] h-16 bg-white/20"></div>
      </div>

      <div className="mx-auto w-full max-w-5xl flex-1 flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight text-[#FF5722] mb-4">What I do</h2>
          <p className="text-sm lg:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in transforming complex data into actionable insights through robust analytics, 
            and engineering dynamic, end-to-end full-stack architectures. From database management to highly interactive user interfaces, 
            these are the core technologies I utilize to build scalable solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 lg:pl-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 lg:p-8 rounded-[24px] bg-[#1a0f08]/80 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-[#2a170d]/90 hover:border-[#FF5722]/40 hover:shadow-[0_15px_40px_rgba(255,87,34,0.15)]"
            >
              <div className="w-14 h-14 lg:w-20 lg:h-20 mb-4 lg:mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {skill.image && (
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-contain drop-shadow-lg" />
                )}
                {skill.svg && (
                  <skill.svg />
                )}
                {skill.icon && (
                  <skill.icon size={64} color={skill.color} className="w-full h-full drop-shadow-lg" />
                )}
              </div>
              <span className="text-[10px] lg:text-xs font-bold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}