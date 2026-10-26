import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${siteConfig.githubUsername}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        
        setStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
        });
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="animate-pulse flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 h-[80px]">
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null; // Fail gracefully

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 w-full">
      <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="text-xl sm:text-2xl font-black text-[#FF5722]">{stats.repos}</div>
        <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Repos</div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="text-xl sm:text-2xl font-black text-[#FF5722]">{stats.followers}</div>
        <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Followers</div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="text-xl sm:text-2xl font-black text-[#FF5722]">{stats.following}</div>
        <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Following</div>
      </div>
    </div>
  );
}
