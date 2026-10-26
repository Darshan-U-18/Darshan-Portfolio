import React from 'react';
import { Download } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'connect', label: 'Connect' },
  ];

  const handleNavClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
    window.history.pushState(null, '', `#${tabId}`);

    // Allow view to render if needed, then smooth-scroll into view
    setTimeout(() => {
      const element = document.getElementById(tabId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const resumeUrl = `${import.meta.env.BASE_URL}Darshan_U_Resume.pdf`;

  return (
    <header className="absolute inset-x-0 top-0 z-40 mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-8 lg:px-12 sm:py-5">
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, 'home')}
        className="cursor-pointer text-xl sm:text-2xl font-bold tracking-tight text-white lowercase transition hover:opacity-90"
      >
        darshan<span className="text-[#FF5722]">.</span>
      </a>

      {/* Nav Menu Capsule */}
      <nav className="fixed bottom-6 left-1/2 z-50 flex w-[96%] max-w-md sm:max-w-lg md:max-w-none -translate-x-1/2 items-center justify-between sm:justify-center rounded-full border border-[#FF5722]/30 bg-[#120804]/95 px-1.5 py-1.5 text-[11px] font-medium text-gray-300 shadow-[0_12px_35px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:space-x-1 sm:px-3 sm:text-xs md:absolute md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:w-auto md:bg-[#120804]/90 md:py-1.5 md:text-sm">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`rounded-full px-2.5 py-1.5 sm:px-4 sm:py-1.5 transition-all duration-200 ${
                isActive
                  ? 'bg-[#FF5722] text-white font-semibold shadow-[0_0_15px_rgba(255,87,34,0.45)]'
                  : 'hover:bg-[#FF5722]/10 hover:text-white text-gray-300'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Download Resume / CV CTA */}
      <a
        href={resumeUrl}
        download="Darshan_U_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 rounded-full border border-[#FF5722]/30 bg-[#0e0704] px-3 py-1.5 text-xs font-semibold text-gray-200 shadow-[0_8px_25px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all hover:border-[#FF5722] hover:bg-[#FF5722]/15 hover:text-white hover:shadow-[0_0_15px_rgba(255,87,34,0.25)] sm:px-4 sm:py-2"
        title="Download Darshan U CV / Resume"
      >
        <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg border border-[#FF5722]/40 bg-[#FF5722]/20 text-[#FF5722]">
          <Download size={13} />
        </span>
        <span className="hidden sm:inline">Download CV</span>
        <span className="sm:hidden">CV</span>
      </a>
    </header>
  );
}