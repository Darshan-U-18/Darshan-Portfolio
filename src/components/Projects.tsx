import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  RefreshCw,
  Layers,
  Download,
  FolderGit2,
  Sparkles
} from 'lucide-react';

export interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  updated_at: string;
  id?: number;
  language?: string | null;
  languages?: string[];
  techStack?: string[];
  stargazers_count?: number;
  forks_count?: number;
  topics?: string[];
}

export interface Project {
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  updated_at: string;
  id?: number;
  language?: string | null;
  languages?: string[];
  techStack?: string[];
  stargazers_count?: number;
  forks_count?: number;
  topics?: string[];
}

// Curated metadata extracted directly from repository READMEs & package architectures
const REPO_METADATA_FALLBACK: Record<string, { description: string; frameworks: string[]; tag: string }> = {
  'kaadugal-clothing': {
    description:
      'A luxury 3D forest-themed e-commerce platform blending cinematic Three.js natural environments with interactive clothing storefront features, cart state management, and immersive visual storytelling.',
    frameworks: ['Three.js', 'React', 'React Three Fiber', 'Tailwind CSS', 'Vite'],
    tag: 'PROJ // 3D'
  },
  'moorti-screens': {
    description:
      'Official commercial web platform for Moorti Screens featuring multi-tier service showcases (Screen, Offset & Multicolour Printing), responsive pricing calculator, and inquiry lead capture.',
    frameworks: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    tag: 'PROJ // WEB'
  },
  'hackgenix-2k26': {
    description:
      'ResilSync Engine — An offline-first disaster-response data synchronization system MVP designed for humanitarian coordination and resilient peer-to-peer communication under network outages.',
    frameworks: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Vite'],
    tag: 'PROJ // SYS'
  }
};

// Fallback projects (excluding Darshan-Portfolio) in case of GitHub API rate limits
const FALLBACK_PROJECTS: Repository[] = [
  {
    name: 'Kaadugal-Clothing',
    description:
      'A luxury 3D forest-themed e-commerce platform blending cinematic Three.js natural environments with interactive clothing storefront features, cart state management, and immersive visual storytelling.',
    html_url: 'https://github.com/Darshan-U-18/Kaadugal-Clothing',
    fork: false,
    updated_at: '2026-10-24T18:00:24Z',
    language: 'TypeScript',
    languages: ['TypeScript', 'CSS', 'HTML'],
    techStack: ['Three.js', 'React', 'React Three Fiber', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    name: 'Moorti-Screens',
    description:
      'Official commercial web platform for Moorti Screens featuring multi-tier service showcases (Screen, Offset & Multicolour Printing), responsive pricing calculator, and inquiry lead capture.',
    html_url: 'https://github.com/Darshan-U-18/Moorti-Screens',
    fork: false,
    updated_at: '2026-10-16T16:50:49Z',
    language: 'TypeScript',
    languages: ['TypeScript', 'HTML', 'CSS', 'JavaScript'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons']
  },
  {
    name: 'HACKGENIX-2K26',
    description:
      'ResilSync Engine — An offline-first disaster-response data synchronization system MVP designed for humanitarian coordination and resilient peer-to-peer communication under network outages.',
    html_url: 'https://github.com/Darshan-U-18/HACKGENIX-2K26',
    fork: false,
    updated_at: '2026-09-26T01:20:27Z',
    language: 'JavaScript',
    languages: ['JavaScript', 'CSS', 'HTML'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Vite', 'JavaScript']
  }
];

const GithubIcon = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const getTechBadgeStyle = (tech: string) => {
  const normalized = tech.toLowerCase();
  if (normalized.includes('react')) return 'border-cyan-500/30 text-cyan-300 bg-[#0e0704]';
  if (normalized.includes('typescript')) return 'border-blue-500/30 text-blue-300 bg-[#0e0704]';
  if (normalized.includes('javascript')) return 'border-amber-400/30 text-amber-300 bg-[#0e0704]';
  if (normalized.includes('three')) return 'border-purple-500/30 text-purple-300 bg-[#0e0704]';
  if (normalized.includes('tailwind')) return 'border-sky-500/30 text-sky-300 bg-[#0e0704]';
  if (normalized.includes('node') || normalized.includes('express')) return 'border-emerald-500/30 text-emerald-300 bg-[#0e0704]';
  if (normalized.includes('mongo')) return 'border-green-500/30 text-green-300 bg-[#0e0704]';
  if (normalized.includes('python')) return 'border-yellow-500/30 text-yellow-300 bg-[#0e0704]';
  if (normalized.includes('vite')) return 'border-violet-500/30 text-violet-300 bg-[#0e0704]';
  return 'border-[#FF5722]/20 text-gray-300 bg-[#0e0704]';
};

export default function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users/Darshan-U-18/repos');
      const data: any = await response.json();

      // Ensure data is array (handle rate limits or API errors)
      if (!Array.isArray(data)) {
        console.warn('GitHub API rate limit or non-array response:', data);
        setRepositories(FALLBACK_PROJECTS);
        setLoading(false);
        return;
      }

      // Filter out fork: true repositories and specifically remove Darshan-Portfolio
      const nonForkRepos = data.filter((repo: any) => {
        if (repo.fork) return false;
        const normalized = (repo.name || '').toLowerCase().trim();
        return (
          normalized !== 'darshan-portfolio' &&
          normalized !== 'darshan-portfolio-main' &&
          !normalized.endsWith('portfolio')
        );
      });

      // Sort remainder by updated_at descending
      const sortedRepos = nonForkRepos.sort(
        (a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

      // Take the 6 most recent
      const top6 = sortedRepos.slice(0, 6);

      if (top6.length === 0) {
        setRepositories(FALLBACK_PROJECTS);
        setLoading(false);
        return;
      }

      // Fetch languages and tech stack details from GitHub for each repo in parallel
      const enrichedRepos: Repository[] = await Promise.all(
        top6.map(async (repo: any) => {
          let detectedLanguages: string[] = [];
          try {
            if (repo.languages_url) {
              const langRes = await fetch(repo.languages_url);
              if (langRes.ok) {
                const langData = await langRes.json();
                if (typeof langData === 'object' && !langData.message) {
                  detectedLanguages = Object.keys(langData);
                }
              }
            }
          } catch (e) {
            console.warn(`Could not load languages for ${repo.name}`, e);
          }

          const lookupKey = (repo.name || '').toLowerCase();
          const fallbackMeta = REPO_METADATA_FALLBACK[lookupKey];

          // Determine description: use GitHub description if available, otherwise repo metadata
          const description =
            repo.description && repo.description.trim().length > 0
              ? repo.description
              : fallbackMeta?.description ||
                `Open source project ${repo.name} developed by Darshan U, showcasing software engineering best practices.`;

          // Combine GitHub languages, topics, and detected frameworks into tech stack
          const combinedStackSet = new Set<string>();

          // Add frameworks if available
          if (fallbackMeta?.frameworks) {
            fallbackMeta.frameworks.forEach((f) => combinedStackSet.add(f));
          }

          // Add GitHub-detected primary language
          if (repo.language) {
            combinedStackSet.add(repo.language);
          }

          // Add all languages detected by GitHub API
          detectedLanguages.forEach((lang) => combinedStackSet.add(lang));

          // Add any GitHub repository topics
          if (Array.isArray(repo.topics)) {
            repo.topics.forEach((topic: string) => {
              if (topic) combinedStackSet.add(topic);
            });
          }

          const techStack = Array.from(combinedStackSet);

          return {
            name: repo.name,
            description,
            html_url: repo.html_url,
            fork: repo.fork,
            updated_at: repo.updated_at,
            id: repo.id,
            language: repo.language,
            languages: detectedLanguages,
            techStack,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            topics: repo.topics
          };
        })
      );

      setRepositories(enrichedRepos);
    } catch (err: any) {
      console.error('Error fetching GitHub repositories:', err);
      // Fallback gracefully without showing a broken state
      setRepositories(FALLBACK_PROJECTS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const resumeUrl = `${import.meta.env.BASE_URL}Darshan_U_Resume.pdf`;

  return (
    <section id="projects" className="hide-scrollbar relative w-full overflow-y-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-28 sm:pb-32 lg:pb-16 text-white">
      {/* Subtle Dot Matrix Background (Identical to About Section) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,87,34,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-[#FF5722]/15 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[#FF5722] text-xs font-semibold uppercase tracking-wider mb-1">
              <FolderGit2 size={15} />
              <span>Automated GitHub Feed</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Projects<span className="text-[#FF5722]">.</span>
            </h1>
            <p className="mt-2 text-sm text-gray-300 max-w-xl">
              Live repositories synchronized directly from GitHub with verified descriptions, repository URLs, and multi-technology stacks detected from repository contents.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={resumeUrl}
              download="Darshan_U_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#FF5722]/30 bg-[#0e0704] px-4 py-2 text-xs font-semibold text-gray-200 transition-all hover:border-[#FF5722] hover:bg-[#FF5722]/15 hover:text-white hover:shadow-[0_0_15px_rgba(255,87,34,0.2)]"
              title="Download Darshan U CV / Resume"
            >
              <Download size={13} className="text-[#FF5722]" />
              <span>Download CV</span>
            </a>

            <button
              onClick={fetchRepositories}
              disabled={loading}
              className="flex items-center gap-2 rounded-full border border-[#FF5722]/20 bg-[#0e0704] px-4 py-2 text-xs font-medium text-gray-300 transition-all hover:border-[#FF5722]/50 hover:bg-[#FF5722]/10 hover:text-white disabled:opacity-50"
              title="Refresh repositories from GitHub"
            >
              <RefreshCw size={13} className={loading ? 'animate-spin text-[#FF5722]' : 'text-gray-400'} />
              <span>Refresh</span>
            </button>

            <a
              href="https://github.com/Darshan-U-18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#FF5722] px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_15px_rgba(255,87,34,0.35)] transition-all hover:bg-[#E64A19] hover:shadow-[0_6px_20px_rgba(255,87,34,0.45)]"
            >
              <GithubIcon size={14} />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Loading Skeletons */}
        {loading && repositories.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl border border-[#FF5722]/15 bg-[#160d07] p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="h-6 w-3/5 rounded bg-[#FF5722]/15"></div>
                  <div className="h-4 w-12 rounded bg-[#0e0704]"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3.5 w-full rounded bg-[#0e0704]"></div>
                  <div className="h-3.5 w-4/5 rounded bg-[#0e0704]"></div>
                </div>
                <div className="pt-4 border-t border-[#FF5722]/10 flex items-center justify-between">
                  <div className="h-3 w-1/2 rounded bg-[#0e0704]"></div>
                  <div className="h-4 w-16 rounded bg-[#FF5722]/10"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Repositories Cards Grid (Styled exactly like About Section Cards) */}
        {repositories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, idx) => {
              const lookupKey = (repo.name || '').toLowerCase();
              const tag = REPO_METADATA_FALLBACK[lookupKey]?.tag || `PROJ // 0${idx + 1}`;

              return (
                <div
                  key={repo.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#FF5722]/20 bg-gradient-to-br from-[#1c100a] via-[#160d07] to-[#110804] p-6 shadow-[0_12px_35px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[#FF5722]/60 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(255,87,34,0.18)]"
                >
                  {/* Glowing Laser Top Edge Accent (Same as About section) */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5722]/70 to-transparent group-hover:via-[#FF5722] transition-all" />

                  {/* Left Energy Rail */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5722] via-[#FF8A65]/40 to-transparent" />

                  {/* Ambient Hover Glow */}
                  <div className="absolute -right-16 -bottom-16 w-44 h-44 rounded-full bg-[#FF5722]/5 blur-3xl pointer-events-none group-hover:bg-[#FF5722]/15 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Top Row: Tag + Action Link */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="font-mono text-[10px] tracking-widest font-semibold uppercase text-[#FF5722] bg-[#FF5722]/10 px-2 py-0.5 rounded border border-[#FF5722]/20">
                        {tag}
                      </span>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-[#FF5722]/20 bg-[#0e0704] p-1.5 text-gray-300 transition-all hover:border-[#FF5722] hover:bg-[#FF5722] hover:text-white hover:shadow-[0_0_10px_rgba(255,87,34,0.3)]"
                        title="Open repository on GitHub"
                      >
                        <ExternalLink size={13} />
                      </a>
                    </div>

                    {/* Repository Name */}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF5722] transition-colors line-clamp-1">
                      {repo.name}
                    </h3>

                    {/* Project Description */}
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-200 line-clamp-4 min-h-[4.5rem]">
                      {repo.description}
                    </p>

                    {/* Technology Stack Section */}
                    <div className="mt-5 space-y-2 border-t border-[#FF5722]/15 pt-4">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#FF8A65]">
                        <Layers size={13} />
                        <span>Technology Stack</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {repo.techStack && repo.techStack.length > 0 ? (
                          repo.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all group-hover:border-[#FF5722]/40 hover:!border-[#FF5722] hover:!text-white ${getTechBadgeStyle(
                                tech
                              )}`}
                            >
                              {tech}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-gray-400">Not specified</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Footer Section: URL & Metadata */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-[#FF5722]/15 space-y-3">
                    {/* Repository Action Button (No raw URL strings displayed) */}
                    <div className="flex items-center justify-between">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5722]/30 bg-[#0e0704] px-3 py-1 text-[11px] font-semibold text-[#FF8A65] transition-all hover:border-[#FF5722] hover:bg-[#FF5722]/15 hover:text-white shadow-sm"
                        title="View repository on GitHub"
                      >
                        <GithubIcon size={12} />
                        <span>View Repository</span>
                        <ExternalLink size={11} className="text-[#FF5722]" />
                      </a>
                    </div>

                    {/* Meta Pills (Stars, Forks, Updated Date) */}
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                      <div className="flex items-center gap-2">
                        {(repo.stargazers_count ?? 0) > 0 && (
                          <span className="flex items-center gap-1 text-amber-400">
                            <Star size={11} className="fill-amber-400" />
                            <span>{repo.stargazers_count}</span>
                          </span>
                        )}
                        {(repo.forks_count ?? 0) > 0 && (
                          <span className="flex items-center gap-1 text-gray-300">
                            <GitFork size={11} />
                            <span>{repo.forks_count}</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400 font-mono">
                        <Calendar size={12} className="text-[#FF5722]" />
                        <span>{formatDate(repo.updated_at)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
