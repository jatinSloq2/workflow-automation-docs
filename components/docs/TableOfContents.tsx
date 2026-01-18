'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Table of Contents Component
export function TableOfContents() {
  const [activeId, setActiveId] = useState('');

  // Mock headings for demo
  const headings = [
    { id: 'overview', text: 'Overview', level: 2 },
    { id: 'configuration', text: 'Configuration', level: 2 },
    { id: 'output', text: 'Output', level: 2 },
    { id: 'examples', text: 'Examples', level: 2 },
    { id: 'best-practices', text: 'Best Practices', level: 2 },
  ];

  return (
    <div className="sticky top-8">
      <div className="flex items-center gap-2 text-sm font-bold text-white mb-4 px-3">
        <div className="h-1 w-1 bg-purple-500 rounded-full" />
        On This Page
      </div>
      <div className="space-y-1 border-l-2 border-purple-500/20 pl-4">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block py-2 px-3 text-sm rounded-lg transition-all ${
              activeId === heading.id
                ? 'text-purple-400 bg-purple-500/10 font-medium'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            } ${heading.level === 3 ? 'ml-4' : ''}`}
          >
            {heading.text}
          </a>
        ))}
      </div>

      {/* Community Help Card */}
      <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <h4 className="font-bold text-white mb-2 text-sm">Need Help?</h4>
        <p className="text-xs text-gray-400 mb-3">
          Join our community for support and discussions.
        </p>
        <a
          href="https://discord.com"
          className="inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors"
        >
          Join Discord
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}