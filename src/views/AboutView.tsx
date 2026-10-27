import React from 'react';
import {
  GraduationCap,
  Languages as LanguagesIcon,
  User,
  Calendar,
  MapPin,
  Sparkles,
  Award,
  Globe
} from 'lucide-react';

export default function AboutView() {
  const educationHistory = [
    {
      degree: 'Bachelor of Technology',
      field: 'Information Technology Engineering',
      institution: 'Panimalar Engineering College, Chennai',
      period: '2024 – 2028',
      status: 'In Progress',
      tag: 'Undergraduate'
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Bio-Maths Stream',
      institution: 'Madras Christian College Higher Secondary School',
      period: '2022 – 2024',
      status: 'Completed',
      tag: 'Higher Secondary'
    }
  ];

  const languages = [
    {
      name: 'Tamil',
      native: 'தமிழ்',
      level: 'Native / Fluent',
      proficiency: 'First Language'
    },
    {
      name: 'English',
      native: 'English',
      level: 'Professional Working Proficiency',
      proficiency: 'Fluent Communication'
    },
    {
      name: 'Hindi',
      native: 'हिन्दी',
      level: 'Working Proficiency',
      proficiency: 'Conversational'
    }
  ];

  return (
    <div className="hide-scrollbar relative flex w-full overflow-y-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-28 sm:pb-32 lg:pb-16 text-white">
      {/* Subtle Dot Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,87,34,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="relative z-10 mx-auto w-full max-w-5xl space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="border-b border-[#FF5722]/15 pb-5 sm:pb-6">
          <div className="flex items-center gap-2 text-[#FF5722] text-xs font-semibold uppercase tracking-wider mb-1">
            <User size={15} />
            <span>Profile & Background</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            About Me<span className="text-[#FF5722]">.</span>
          </h1>
          <p className="mt-2 text-sm text-gray-300 max-w-xl">
            Information Technology undergraduate specializing in data analytics, full-stack systems engineering, and automated workflows.
          </p>
        </div>

        {/* 1. Professional Profile */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF5722]/30 bg-[#FF5722]/15 text-[#FF5722]">
              <Sparkles size={16} />
            </span>
            <h2>Professional Profile</h2>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-6 sm:p-7 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/50">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent" />
            <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
              Information Technology professional with a strong foundation in data analytics, SQL, and Python programming. Proven ability to analyze complex datasets, create insightful visualizations, and coordinate cross-functional engineering projects. Seeking to leverage technical skills, algorithmic thinking, and analytical mindset in dynamic data and software development environments.
            </p>
          </div>
        </section>

        {/* 2. Education (Renamed from Academic History) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF5722]/30 bg-[#FF5722]/15 text-[#FF5722]">
                <GraduationCap size={16} />
              </span>
              <h2>Education</h2>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-gray-400">
              Academic Background
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {educationHistory.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(255,87,34,0.18)]"
              >
                {/* Laser Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent group-hover:via-[#FF5722] transition-all" />

                {/* Left Rail */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-mono text-[10px] tracking-widest font-semibold uppercase text-[#FF5722] bg-[#FF5722]/10 px-2 py-0.5 rounded border border-[#FF5722]/20">
                    {item.tag}
                  </span>
                  <span className="rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 px-2.5 py-0.5 text-[11px] font-medium text-[#FF8A65]">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FF5722] transition-colors">
                  {item.degree}
                </h3>
                <div className="mt-1 text-sm font-semibold text-[#FF8A65]">
                  {item.field}
                </div>

                <div className="mt-4 pt-4 border-t border-[#FF5722]/15 space-y-2 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-2">
                    <MapPin size={15} className="mt-0.5 text-[#FF5722] shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} className="text-[#FF5722] shrink-0" />
                    <span className="font-mono">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Languages */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF5722]/30 bg-[#FF5722]/15 text-[#FF5722]">
                <LanguagesIcon size={16} />
              </span>
              <h2>Languages</h2>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-gray-400">
              Multilingual Proficiency
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(255,87,34,0.15)]"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/60 to-transparent" />

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF5722] transition-colors">
                    {lang.name}
                  </h3>
                  <span className="text-xs font-mono text-[#FF8A65] bg-[#FF5722]/10 px-2 py-0.5 rounded border border-[#FF5722]/20">
                    {lang.native}
                  </span>
                </div>

                <div className="text-xs font-medium text-gray-200">
                  {lang.level}
                </div>
                <div className="mt-1 text-[11px] text-gray-400">
                  {lang.proficiency}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
