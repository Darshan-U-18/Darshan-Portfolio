import React from 'react';

export default function Experience() {
  const publications = [
    {
      title: 'IEEE Paper Publisher Participant',
      topic: 'TOPIC: ECO-SONIC SHIELD',
      description:
        'Contributed programmatic system logic evaluations on experimental acoustic security shields to minimize operational risk indices.'
    }
  ];

  const experiences = [
    {
      company: 'Customer Analytics Pvt. Ltd.',
      role: 'Data Analyst Intern',
      description:
        'Utilized database structures alongside Power BI analytics systems to clean enterprise operational datasets and build clean performance metric visualization tracking panels.'
    },
    {
      company: 'Stalwarts Learning',
      role: 'Sourcing Intern',
      description:
        'Organized structured metrics records and coordinated documentation parameters within professional technical sourcing channels.'
    }
  ];

  const projects = [
    {
      title: 'Company Sales Analysis',
      subTitle: 'Customer analytics Pvt. Ltd.',
      description:
        'Engineered clear visualization tracking metrics dashboards utilizing intermediate Power BI rules. Ran data queries to locate structural distribution variables across complex commercial sales parameters.'
    },
    {
      title: 'Stock Management System',
      subTitle: 'Inventory operations',
      description:
        'Designed structured software data parameters driven by clean SQL relational layout controls. Built operational item transaction alerts using Python variables and fundamental Java logic paths.'
    },
    {
      title: 'Smart Stop in Vehicles',
      subTitle: 'System architecture logic',
      description:
        'Configured distance threshold safety logic boundaries to execute real-time anti-collision metrics. Programmed speed reduction matrices derived directly from sensory processing calculations.'
    }
  ];

  return (
    <div className="hide-scrollbar relative w-full overflow-y-auto px-4 pb-12 pt-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">Research & Publications</h2>
          <div className="rounded-[32px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
            {publications.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-lg font-black text-white sm:text-xl">{item.title}</h3>
                <div className="text-xs font-semibold uppercase tracking-wide text-[#FF8A65] sm:text-sm">{item.topic}</div>
                <p className="text-sm leading-relaxed text-gray-200 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">Professional Experience</h2>
          <div className="space-y-4 rounded-[32px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
            {experiences.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-lg hover:bg-white/20 transition-all">
                <div className="text-lg font-bold text-white sm:text-xl">{item.company}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#FF8A65] sm:text-sm">{item.role}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">Core Strategic Projects</h2>
          <div className="space-y-4 rounded-[32px] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl sm:p-7">
            {projects.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-lg hover:bg-white/20 transition-all">
                <div className="text-lg font-bold text-white sm:text-xl">{item.title}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#FF8A65] sm:text-xs">{item.subTitle}</div>
                <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}