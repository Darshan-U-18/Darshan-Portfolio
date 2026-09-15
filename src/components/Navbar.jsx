import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <header className="absolute inset-x-0 top-0 z-40 mx-auto flex w-full items-center justify-between px-6 py-4 sm:px-12 sm:py-5">
      {/* Logo */}
      <div 
        onClick={() => setActiveTab('home')} 
        className="cursor-pointer text-2xl font-bold tracking-tight text-white lowercase"
      >
        darshan<span className="text-[#FF5722]">.</span>
      </div>

      {/* Nav Menu Capsule */}
      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-1 rounded-full border border-white/20 bg-black/10 px-5 py-1.5 text-sm font-medium text-gray-300 shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl md:flex">
        <button 
          onClick={() => setActiveTab('home')} 
          className={`rounded-full px-4 py-1.5 transition ${activeTab === 'home' ? 'bg-white/15 text-white shadow-inner shadow-white/10' : 'hover:bg-white/10 hover:text-white'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setActiveTab('about')} 
          className={`rounded-full px-4 py-1.5 transition ${activeTab === 'about' ? 'bg-white/15 text-white shadow-inner shadow-white/10' : 'hover:bg-white/10 hover:text-white'}`}
        >
          About
        </button>
        <button 
          onClick={() => setActiveTab('skills')} 
          className={`rounded-full px-4 py-1.5 transition ${activeTab === 'skills' ? 'bg-white/15 text-white shadow-inner shadow-white/10' : 'hover:bg-white/10 hover:text-white'}`}
        >
          Skills
        </button>
        <button 
          onClick={() => setActiveTab('experience')} 
          className={`rounded-full px-4 py-1.5 transition ${activeTab === 'experience' ? 'bg-white/15 text-white shadow-inner shadow-white/10' : 'hover:bg-white/10 hover:text-white'}`}
        >
          Experience
        </button>
        <button 
          onClick={() => setActiveTab('connect')} 
          className={`rounded-full px-4 py-1.5 transition ${activeTab === 'connect' ? 'bg-white/15 text-white shadow-inner shadow-white/10' : 'hover:bg-white/10 hover:text-white'}`}
        >
          Connect
        </button>
      </nav>

      {/* Download Resume CTA */}
      <a 
        href="/Darshan_U_Resume.pdf" 
        download="Darshan_U_Resume.pdf"
        className="flex items-center space-x-2 rounded-full border border-white/20 bg-black/10 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-[0_12px_35px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:border-[#FF5722]/60 hover:bg-[#FF5722]/15 hover:text-white sm:px-4 sm:py-2"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#FF5722]/30 bg-[#FF5722]/20 text-[#FF5722]">
          <Download size={14} />
        </span>
        <span>Download Resume</span>
      </a>
    </header>
  );
}