import React, { useState, Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Lazy load views for better performance
const SkillsView = lazy(() => import('./views/SkillsView'));
const ExperienceView = lazy(() => import('./views/ExperienceView'));
const ConnectView = lazy(() => import('./views/ConnectView'));
const AboutView = lazy(() => import('./views/AboutView'));

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderCurrentView = () => {
    switch (activeTab) {
      case 'about':
        return <AboutView />;
      case 'skills':
        return <SkillsView />;
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
    <div className="h-dvh w-full bg-[#110805] p-3 text-white selection:bg-[#FF5722] selection:text-white sm:p-6 overflow-hidden">
      <div className="relative h-full w-full overflow-hidden rounded-[30px] border border-[#FF5722]/10 bg-[#24130c] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="h-full w-full pb-6 pt-20 sm:pt-24">
          <Suspense fallback={<div className="flex h-full items-center justify-center text-[#FF5722]">Loading...</div>}>
            <div key={activeTab} className={`h-full w-full animate-fadeIn hide-scrollbar ${activeTab === 'home' || activeTab === 'about' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
              {renderCurrentView()}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
