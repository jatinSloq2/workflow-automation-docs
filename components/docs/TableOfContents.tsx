"use client"

import { ArrowRight, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function TableOfContents() {
  const [activeId, setActiveId] = useState('overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headings = [
    { id: 'overview', text: 'Overview', level: 2 },
    { id: 'getting-started', text: 'Getting Started', level: 2 },
    { id: 'installation', text: 'Installation', level: 3 },
    { id: 'configuration', text: 'Configuration', level: 2 },
    { id: 'usage', text: 'Usage', level: 2 },
    { id: 'examples', text: 'Examples', level: 3 },
    { id: 'best-practices', text: 'Best Practices', level: 2 },
  ];

  return (
    <div className={`sticky top-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Header */}
      <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white mb-6 px-3">
        <div className="h-1.5 w-1.5 bg-purple-600 dark:bg-purple-500 rounded-full animate-pulse" />
        <span>On This Page</span>
      </div>

      {/* TOC Links */}
      <div className="space-y-1 border-l-2 border-purple-300 dark:border-purple-500/20 pl-4 mb-8">
        {headings.map((heading, i) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveId(heading.id);
            }}
            className={`group block py-2 px-3 text-sm rounded-lg transition-all ${activeId === heading.id
                ? 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 font-semibold border-l-2 border-purple-600 dark:border-purple-400 -ml-[2px]'
                : 'text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-1'
              } ${heading.level === 3 ? 'ml-4 text-xs' : ''}`}
            style={{
              transitionDelay: `${i * 30}ms`,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(-10px)'
            }}
          >
            <span className="flex items-center justify-between">
              {heading.text}
              {activeId === heading.id && (
                <ChevronRight className="h-3 w-3 animate-pulse" />
              )}
            </span>
          </a>
        ))}
      </div>

      {/* Feedback Card */}
      <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-300 dark:border-purple-500/20 backdrop-blur-sm hover:border-purple-400 dark:hover:border-purple-500/40 transition-all group">
        <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm flex items-center gap-2">
          <span>Was this helpful?</span>
          <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 group-hover:rotate-12 transition-transform" />
        </h4>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-2.5 text-xs font-semibold bg-white dark:bg-white/5 hover:bg-green-100 dark:hover:bg-green-500/20 border border-gray-300 dark:border-white/10 hover:border-green-400 dark:hover:border-green-500/50 text-gray-900 dark:text-white rounded-lg transition-all hover:scale-105 group/btn">
            <span className="group-hover/btn:scale-110 inline-block transition-transform">👍</span> Yes
          </button>
          <button className="flex-1 px-3 py-2.5 text-xs font-semibold bg-white dark:bg-white/5 hover:bg-red-100 dark:hover:bg-red-500/20 border border-gray-300 dark:border-white/10 hover:border-red-400 dark:hover:border-red-500/50 text-gray-900 dark:text-white rounded-lg transition-all hover:scale-105 group/btn">
            <span className="group-hover/btn:scale-110 inline-block transition-transform">👎</span> No
          </button>
        </div>
      </div>

      {/* Help Card */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-300 dark:border-blue-500/20 backdrop-blur-sm hover:border-blue-400 dark:hover:border-blue-500/40 transition-all group">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 transition-transform">
            <MessageCircle className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">Need Help?</h4>
            <p className="text-xs text-gray-700 dark:text-gray-400 leading-relaxed">
              Join our community for support and discussions.
            </p>
          </div>
        </div>
        <a
          href="https://discord.com"
          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all group-hover:translate-x-1"
        >
          Join Discord
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10">
        <div className="flex items-center justify-between mb-2 text-xs">
          <span className="text-gray-700 dark:text-gray-400">Reading Progress</span>
          <span className="font-semibold text-purple-700 dark:text-purple-400">35%</span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-full w-[35%] transition-all duration-500" />
        </div>
      </div>
    </div>
  );
}