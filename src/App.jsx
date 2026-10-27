import React, { useState, useEffect, Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Lazy load views for better performance
const SkillsView = lazy(() => import('./views/SkillsView'));
const ExperienceView = lazy(() => import('./views/ExperienceView'));
const Projects = lazy(() => import('./components/Projects'));
const ConnectView = lazy(() => import('./views/ConnectView'));
const AboutView = lazy(() => import('./views/AboutView'));

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = ['home', 'about', 'skills', 'projects', 'experience', 'connect'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderCurrentView = () => {
    switch (activeTab) {
      case 'about':
        return <AboutView />;
      case 'skills':
        return <SkillsView />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <ExperienceView />;
      case 'connect':
        return <ConnectView />;
      case 'home':
      default:
        return <Hero activeTab={activeTab} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="h-dvh w-full bg-[#0c0603] p-1.5 sm:p-3 md:p-5 text-white selection:bg-[#FF5722] selection:text-white overflow-hidden">
      <div className="relative h-full w-full overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-[#FF5722]/20 bg-[#160d08] shadow-[0_30px_90px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Top Laser Accent on App Shell */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent pointer-events-none z-50" />
        
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="h-full w-full pb-0 pt-16 sm:pt-20 md:pt-24">
          <Suspense fallback={<div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-widest text-[#FF5722]">Synchronizing view...</div>}>
            <div key={activeTab} className={`h-full w-full animate-fadeIn hide-scrollbar overflow-y-auto ${activeTab === 'home' ? 'lg:overflow-hidden' : ''}`}>
              {renderCurrentView()}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
