import React from 'react';

export default function AboutView() {
  const academicHistory = [
    {
      school: 'Panimalar Engineering College',
      detail: 'Bachelor of Technology – Information Technology'
    },
    {
      school: 'Madras Christian College Higher Secondary School',
      detail: 'Higher Secondary Course (HSC) – Completed'
    },
    {
      school: 'Jawahar Vidyalaya Senior Secondary School',
      detail: 'Secondary School Leaving Certificate (SSLC) – Completed'
    }
  ];

  return (
    <div className="relative flex h-full w-full flex-col justify-center px-4 text-white sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl space-y-4 lg:space-y-6">
        <section className="space-y-2 lg:space-y-3">
          <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl lg:text-3xl">Professional Profile</h2>
          <div className="rounded-[32px] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl sm:p-5 lg:p-7">
            <p className="text-xs leading-relaxed text-gray-200 sm:text-sm lg:text-base">
              Analytical and metrics-driven candidate engineering clear information processing systems.
              Competent in evaluating raw backend transactional tables, organizing operational workflows,
              and deploying high-impact visualization suites to monitor corporate data targets seamlessly.
            </p>
          </div>
        </section>

        <section className="space-y-2 lg:space-y-3">
          <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl lg:text-3xl">Academic History</h2>
          <div className="rounded-[32px] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl sm:p-5 lg:p-7">
            <div className="space-y-2 lg:space-y-4">
              {academicHistory.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 text-sm font-bold text-white sm:text-base lg:text-lg">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#FF5722] shadow-[0_0_10px_rgba(255,87,34,0.7)] lg:h-2.5 lg:w-2.5" />
                    {item.school}
                  </div>
                  <div className="mt-0.5 text-xs text-gray-300 sm:text-sm lg:mt-1">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
