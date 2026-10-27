import React from 'react';
import { Mail, Phone, Code2, Globe2, MessageSquareCode, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function ConnectView() {
  const contactItems = [
    {
      label: 'Email',
      subtitle: 'Send a note',
      actionLabel: 'Compose Email',
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      tag: 'COMM // MAIL',
      accentColor: 'text-[#FF5722]'
    },
    {
      label: 'Call',
      subtitle: 'Talk directly',
      actionLabel: 'Start Call',
      href: 'tel:+918610799313',
      icon: Phone,
      tag: 'COMM // VOICE',
      accentColor: 'text-amber-400'
    },
    {
      label: 'LinkedIn',
      subtitle: 'Professional profile',
      actionLabel: 'Connect on LinkedIn',
      href: siteConfig.linkedinUrl,
      icon: Globe2,
      tag: 'COMM // LINKEDIN',
      accentColor: 'text-sky-400'
    },
    {
      label: 'GitHub',
      subtitle: 'Code & repositories',
      actionLabel: 'Browse GitHub',
      href: siteConfig.githubUrl,
      icon: Code2,
      tag: 'COMM // GITHUB',
      accentColor: 'text-violet-400'
    }
  ];

  return (
    <div className="hide-scrollbar relative flex min-h-full w-full flex-col px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-28 sm:pb-32 lg:pb-12 text-white overflow-y-auto">
      {/* Ambient Dot Matrix Background (Matching About, Skills & Projects) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,87,34,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5722]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5722]/30 bg-[#0e0704] text-[#FF5722] text-xs font-semibold tracking-wider uppercase shadow-inner">
            <MessageSquareCode size={14} /> Direct Communications
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Let’s Connect <span className="text-[#FF5722]">Directly.</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            I’m actively open to data analytics, full-stack software development roles, internships, and engineering collaborations.
          </p>
        </div>

        {/* Contact Cards Grid (No raw personal numbers, emails, or links displayed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-5 sm:p-6 text-center shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,87,34,0.2)] flex flex-col justify-between items-center"
              >
                {/* Glowing Laser Top Edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent group-hover:via-[#FF5722] transition-all" />

                {/* Left Energy Rail */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent" />

                {/* Ambient Hover Glow */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-[#FF5722]/5 blur-2xl pointer-events-none group-hover:bg-[#FF5722]/15 transition-all duration-500" />

                <div className="relative z-10 w-full flex items-center justify-between mb-4">
                  <span className="font-mono text-[9px] tracking-widest font-semibold uppercase text-[#FF5722] bg-[#FF5722]/10 px-2 py-0.5 rounded border border-[#FF5722]/20">
                    {item.tag}
                  </span>
                  <span className="text-gray-400 group-hover:text-[#FF5722] transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* Icon Container */}
                <div className="relative z-10 my-1.5 sm:my-2 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-[#FF5722]/20 bg-[#0e0704] shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:border-[#FF5722]/50">
                  <Icon size={26} className={item.accentColor} />
                </div>

                {/* Text Content */}
                <div className="relative z-10 mt-3 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-200 group-hover:text-[#FF5722] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {item.subtitle}
                  </div>

                  {/* Clean CTA Pill (No raw numbers/emails/links exposed) */}
                  <div className="pt-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5722]/30 bg-[#0e0704] px-3 py-1 text-[11px] font-semibold text-[#FF8A65] group-hover:border-[#FF5722] group-hover:bg-[#FF5722]/15 group-hover:text-white transition-all shadow-sm">
                      <span>{item.actionLabel}</span>
                      <ArrowUpRight size={11} className="text-[#FF5722] group-hover:text-white transition-colors" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}