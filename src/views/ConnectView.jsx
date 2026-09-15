import React from 'react';
import { Mail, Phone, Code2, Globe2, MessageSquareCode } from 'lucide-react';

export default function Connect() {
  const contactItems = [
    {
      label: 'Email',
      subtitle: 'Send a note',
      href: 'mailto:darshanpec2006@gmail.com',
      icon: Mail,
      accent: 'from-[#FF5722]/25 to-[#FF8A65]/20',
      iconColor: 'text-[#FF5722]'
    },
    {
      label: 'Call',
      subtitle: 'Talk directly',
      href: 'tel:+918610799313',
      icon: Phone,
      accent: 'from-amber-400/20 to-orange-300/10',
      iconColor: 'text-amber-400'
    },
    {
      label: 'LinkedIn',
      subtitle: 'Professional profile',
      href: 'https://www.linkedin.com/in/darshan-u-0ab211434',
      icon: Globe2,
      accent: 'from-sky-500/20 to-cyan-400/10',
      iconColor: 'text-sky-400'
    },
    {
      label: 'GitHub',
      subtitle: 'Code & projects',
      href: 'https://github.com/Darshan-U-18',
      icon: Code2,
      accent: 'from-violet-500/20 to-fuchsia-400/10',
      iconColor: 'text-violet-400'
    }
  ];

  return (
    <div className="relative w-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,87,34,0.25)_0%,rgba(40,15,5,0.7)_45%,#030201_85%)] px-4 py-20 sm:px-8 lg:px-12">
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#FF5722]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 relative space-y-12">
        <div className="text-center space-y-4 pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 text-[#FF5722] text-xs font-bold tracking-widest uppercase shadow-lg">
            <MessageSquareCode size={14} /> Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let’s Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5722] to-amber-400">Beautifully</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            I’m open to product opportunities, collaborations, and meaningful tech conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-5 text-left shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-[0_25px_60px_rgba(255,87,34,0.15)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-80`} />
                <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 ${item.iconColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={28} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-200/80">{item.label}</div>
                    <div className="mt-2 text-sm text-gray-200">{item.subtitle}</div>
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