import React from 'react';
import {
  Briefcase,
  Building2,
  Calendar,
  Award,
  CheckCircle2,
  Trophy,
  Zap,
  MapPin,
  Users,
  Clock,
  Brain,
  MessageSquare,
  type LucideIcon,
  Sparkles
} from 'lucide-react';

export interface ProfessionalExperience {
  company: string;
  role: string;
  type: 'Internship' | 'Full-Time';
  period: string;
  tag: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface HackathonExperience {
  event: string;
  host: string;
  duration: string;
  location: string;
  tag: string;
  description: string;
  keyLearnings: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  skills: string[];
}

export default function ExperienceView() {
  const experiences: ProfessionalExperience[] = [
    {
      company: 'Customer Analytics Pvt. Ltd.',
      role: 'Data Analyst Intern',
      type: 'Internship',
      period: 'Enterprise Analytics',
      tag: 'EXP // 01',
      description:
        'Utilized database structures alongside Power BI analytics systems to clean enterprise operational datasets and build clean performance metric visualization tracking panels.',
      highlights: [
        'Analyzed and cleaned complex enterprise datasets using SQL querying techniques',
        'Built interactive Power BI dashboards tracking core business performance KPIs',
        'Streamlined database operations and recurring data validation procedures'
      ],
      skills: ['SQL', 'Power BI', 'Data Analytics', 'Database Architecture', 'Python']
    },
    {
      company: 'Stalwarts Learning',
      role: 'Sourcing Intern',
      type: 'Internship',
      period: 'Technical Operations',
      tag: 'EXP // 02',
      description:
        'Organized structured metrics records and coordinated documentation parameters within professional technical sourcing channels.',
      highlights: [
        'Maintained structured talent and candidate metrics within operational pipelines',
        'Coordinated cross-functional documentation and communication standards',
        'Optimized record tracking workflows across technical sourcing channels'
      ],
      skills: ['Technical Sourcing', 'Operational Metrics', 'Data Coordination', 'Documentation']
    }
  ];

  const hackathon: HackathonExperience = {
    event: 'HackgenIX 2K26',
    host: 'Sathyabama University',
    duration: '24-Hour Hackathon',
    location: 'Sathyabama Institute of Science and Technology',
    tag: 'SPRINT // 24H',
    description:
      'Participated in the HackgenIX 2K26 24-hour hackathon held at Sathyabama University. It proved to be a transformative experience that improved my teamwork, time management, communication skills, and fundamentally reshaped my problem-solving thinking ability.',
    keyLearnings: [
      {
        title: 'Team Work',
        description: 'Collaborated closely under intense pressure, aligning individual strengths into cohesive execution.',
        icon: Users
      },
      {
        title: 'Time Management',
        description: 'Prioritized feature roadmaps, beat critical phase milestones, and managed a strict 24-hour clock.',
        icon: Clock
      },
      {
        title: 'Communication',
        description: 'Refined technical clarity, streamlined real-time peer feedback, and delivered articulate solution pitches.',
        icon: MessageSquare
      },
      {
        title: 'Problem-Solving Thinking',
        description: 'Transformed approach to dissecting edge cases, architecting resilient flows, and rapid prototyping.',
        icon: Brain
      }
    ],
    skills: ['Rapid Prototyping', 'Agile Teamwork', 'Critical Thinking', 'Time Optimization', 'Full-Stack Engineering']
  };

  return (
    <section id="experience" className="hide-scrollbar relative w-full overflow-y-auto px-4 pb-16 pt-8 text-white sm:px-8 lg:px-12">
      {/* Subtle Warm Cyber Dot Grid Background (Replaces Glass) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,87,34,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#FF5722]/15 pb-6">
          <div className="flex items-center gap-2 text-[#FF5722] text-xs font-semibold uppercase tracking-wider mb-1">
            <Briefcase size={15} />
            <span>Career Milestones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Experience & Hackathons<span className="text-[#FF5722]">.</span>
          </h1>
          <p className="mt-2 text-sm text-gray-300 max-w-xl">
            Demonstrated industry track record spanning enterprise analytics, technical sourcing operations, and competitive 24-hour hackathon sprints.
          </p>
        </div>

        {/* 1. Professional Work & Internships */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF5722]/30 bg-[#FF5722]/15 text-[#FF5722]">
                <Building2 size={16} />
              </span>
              <h2>Professional Roles & Internships</h2>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-gray-400">
              Verified Experience
            </span>
          </div>

          <div className="space-y-6">
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:shadow-[0_20px_50px_rgba(255,87,34,0.18)] hover:-translate-y-0.5"
              >
                {/* Glowing Top Ember Laser Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent opacity-80 group-hover:opacity-100 group-hover:h-[3px] transition-all duration-300" />

                {/* Left Illuminated Energy Rail */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent group-hover:w-1.5 transition-all duration-300" />

                {/* Ambient Radial Hover Glow */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-[#FF5722]/5 blur-3xl pointer-events-none group-hover:bg-[#FF5722]/15 transition-all duration-500" />

                {/* Card Header */}
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] tracking-widest font-semibold uppercase text-[#FF5722]/80 bg-[#FF5722]/10 px-2 py-0.5 rounded border border-[#FF5722]/20">
                        {item.tag}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#FF8A65]">
                        {item.company}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF5722] transition-colors">
                      {item.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="rounded-full bg-[#FF5722]/15 border border-[#FF5722]/40 px-3 py-1 text-xs font-semibold text-[#FF8A65] shadow-inner">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Main Description */}
                <p className="relative z-10 mt-4 text-sm sm:text-base leading-relaxed text-gray-200">
                  {item.description}
                </p>

                {/* Core Responsibilities Box */}
                <div className="relative z-10 mt-6 space-y-2.5 border-t border-[#FF5722]/15 pt-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#FF5722]" />
                    <span>Key Responsibilities & Deliverables</span>
                  </div>
                  <div className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-3 rounded-xl border border-[#FF5722]/10 bg-[#0e0704]/90 p-3 text-xs sm:text-sm text-gray-200 transition-colors group-hover:border-[#FF5722]/20"
                      >
                        <CheckCircle2 size={16} className="mt-0.5 text-[#FF5722] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="rounded-full border border-[#FF5722]/20 bg-[#0e0704] px-3 py-1 text-xs font-medium text-gray-300 transition-all group-hover:border-[#FF5722]/50 group-hover:text-white group-hover:bg-[#FF5722]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Hackathons & Competitions */}
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF5722]/30 bg-[#FF5722]/15 text-[#FF5722]">
                <Trophy size={16} />
              </span>
              <h2>Hackathons & Competitive Sprints</h2>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-[#FF8A65]">
              Intensive 24h Prototyping
            </span>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#FF5722]/35 bg-gradient-to-br from-[#22120a] via-[#180e07] to-[#100703] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[#FF5722]/80 hover:shadow-[0_25px_60px_rgba(255,87,34,0.25)] hover:-translate-y-0.5">
            {/* Top Ember Laser Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722] to-transparent opacity-90 group-hover:h-[3px] transition-all duration-300" />

            {/* Left Energy Rail */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF5722] via-[#ff9800] to-transparent" />

            {/* Ambient Radial Hover Glow */}
            <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-[#FF5722]/10 blur-3xl pointer-events-none group-hover:bg-[#FF5722]/25 transition-all duration-500" />

            {/* Header */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest font-semibold uppercase text-[#FF5722] bg-[#FF5722]/15 px-2 py-0.5 rounded border border-[#FF5722]/30">
                    {hackathon.tag}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF8A65]">
                    {hackathon.duration}
                  </span>
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white group-hover:text-[#FF5722] transition-colors">
                  {hackathon.event}
                </h3>
                <div className="mt-1.5 flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <MapPin size={14} className="text-[#FF5722] shrink-0" />
                  <span>Held at {hackathon.host}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="rounded-full bg-[#FF5722]/20 border border-[#FF5722]/50 px-3.5 py-1 text-xs font-bold text-[#FF8A65] flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,87,34,0.2)]">
                  <Zap size={13} className="text-[#FF5722]" />
                  <span>24 Hours Non-Stop</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="relative z-10 mt-4 text-sm sm:text-base leading-relaxed text-gray-200">
              {hackathon.description}
            </p>

            {/* Core Growth Dimensions Grid */}
            <div className="relative z-10 mt-6 border-t border-[#FF5722]/20 pt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A65] mb-3.5 flex items-center gap-1.5">
                <Award size={15} />
                <span>Core Capabilities & Mindset Evolution</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hackathon.keyLearnings.map((learning, lIdx) => {
                  const Icon = learning.icon;
                  return (
                    <div
                      key={lIdx}
                      className="rounded-xl border border-[#FF5722]/15 bg-[#0e0704]/90 p-4 transition-all duration-200 hover:border-[#FF5722]/50 hover:bg-[#1a0f08]"
                    >
                      <div className="flex items-center gap-2.5 text-white font-bold text-sm mb-1.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF5722]/40 bg-[#FF5722]/20 text-[#FF5722] shrink-0">
                          <Icon size={14} />
                        </div>
                        <span>{learning.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {learning.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="relative z-10 mt-6 flex flex-wrap gap-2 border-t border-[#FF5722]/15 pt-5">
              {hackathon.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-full border border-[#FF5722]/25 bg-[#0e0704] px-3 py-1 text-xs font-medium text-gray-300 transition-all group-hover:border-[#FF5722]/60 group-hover:bg-[#FF5722]/15 group-hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
