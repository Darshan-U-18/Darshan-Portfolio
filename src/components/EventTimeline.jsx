import React from 'react';
import eventsData from '../data/events.json';

export default function EventTimeline() {
  return (
    <div className="space-y-4">
      <div className="relative border-l-2 border-[#FF5722]/30 pl-6 ml-3 space-y-8 py-4">
        {eventsData.map((event, idx) => (
          <div key={idx} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-[#FF5722] border-4 border-[#120D0A]" />
            
            <div className="rounded-xl border border-white/20 bg-white/10 p-5 shadow-lg hover:bg-white/20 transition-all">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="text-lg font-bold text-white sm:text-xl">{event.title}</div>
                <div className="text-xs font-semibold bg-white/10 px-2 py-1 rounded text-gray-300">
                  {event.date}
                </div>
              </div>
              <div className="mt-2 flex gap-2 items-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#FF8A65]">{event.type}</span>
                <span className="text-xs text-gray-400">• {event.organization}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">{event.description}</p>
              {event.location && (
                <div className="mt-3 text-xs text-gray-400 flex items-center gap-1">
                  <span>📍 {event.location}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
