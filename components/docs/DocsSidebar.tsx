'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown, Home, Sparkles, Zap, Code, BookOpen, Wrench, AlertCircle } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  {
    title: 'Getting Started',
    icon: Sparkles,
    links: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'First Workflow', href: '/docs/getting-started/first-workflow' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: Zap,
    links: [
      { title: 'Workflows', href: '/docs/core-concepts/workflows' },
      { title: 'Nodes', href: '/docs/core-concepts/nodes' },
      { title: 'Connections', href: '/docs/core-concepts/connections' },
      { title: 'Executions', href: '/docs/core-concepts/executions' },
      { title: 'Expressions', href: '/docs/core-concepts/expressions' },
    ],
  },
  {
    title: 'Nodes',
    icon: Code,
    links: [
      { title: 'Overview', href: '/docs/nodes' },
      { title: 'Triggers', href: '/docs/nodes/triggers' },
      { title: 'AI Nodes', href: '/docs/nodes/ai' },
      { title: 'Data Nodes', href: '/docs/nodes/data' },
      { title: 'Transform', href: '/docs/nodes/transform' },
      { title: 'Logic', href: '/docs/nodes/logic' },
      { title: 'Communication', href: '/docs/nodes/communication' },
      { title: 'Files', href: '/docs/nodes/files' },
    ],
  },
  {
    title: 'Expressions',
    icon: BookOpen,
    links: [
      { title: 'Basics', href: '/docs/expressions/basics' },
      { title: 'Node References', href: '/docs/expressions/node-references' },
      { title: 'Built-in Functions', href: '/docs/expressions/built-in-functions' },
      { title: 'Data Access', href: '/docs/expressions/data-access' },
      { title: 'Examples', href: '/docs/expressions/examples' },
    ],
  },
  {
    title: 'Guides',
    icon: Wrench,
    links: [
      { title: 'Building Workflows', href: '/docs/guides/building-workflows' },
      { title: 'File Processing', href: '/docs/guides/file-processing' },
      { title: 'AI Workflows', href: '/docs/guides/ai-workflows' },
      { title: 'Email Automation', href: '/docs/guides/email-automation' },
      { title: 'API Integration', href: '/docs/guides/api-integration' },
      { title: 'Error Handling', href: '/docs/guides/error-handling' },
    ],
  },
  {
    title: 'Examples',
    icon: Sparkles,
    links: [
      { title: 'Email Campaign', href: '/docs/examples/email-campaign' },
      { title: 'Data Processing', href: '/docs/examples/data-processing' },
      { title: 'AI Content Generation', href: '/docs/examples/ai-content-generation' },
      { title: 'Webhook Handler', href: '/docs/examples/webhook-handler' },
    ],
  },
  {
    title: 'API Reference',
    icon: Code,
    links: [
      { title: 'Overview', href: '/docs/api-reference' },
      { title: 'Workflows', href: '/docs/api-reference/workflows' },
      { title: 'Executions', href: '/docs/api-reference/executions' },
      { title: 'Webhooks', href: '/docs/api-reference/webhooks' },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: AlertCircle,
    links: [
      { title: 'Common Errors', href: '/docs/troubleshooting/common-errors' },
      { title: 'Debugging', href: '/docs/troubleshooting/debugging' },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(navigation.map(section => section.title))
  );

  const toggleSection = (title: string) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(title)) {
      newOpenSections.delete(title);
    } else {
      newOpenSections.add(title);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <nav className="space-y-2">
      {/* Back to Home */}
      <Link 
        href="/" 
        className="flex items-center gap-2 px-3 py-2 mb-6 text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors group"
      >
        <Home className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      {navigation.map((section) => {
        const isOpen = openSections.has(section.title);
        const SectionIcon = section.icon;
        
        return (
          <div key={section.title} className="mb-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-white hover:bg-white/5 rounded-lg transition-all group"
            >
              <div className="flex items-center gap-2">
                <SectionIcon className="h-4 w-4 text-purple-400" />
                {section.title}
              </div>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
              ) : (
                <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
              )}
            </button>
            
            {isOpen && (
              <ul className="mt-1 space-y-0.5 ml-2 border-l-2 border-purple-500/20 pl-4">
                {section.links.map((link) => {
                  const isActive = pathname === link.href;
                  
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-2 px-3 text-sm rounded-lg transition-all ${
                          isActive
                            ? 'text-purple-400 bg-purple-500/10 font-medium border-l-2 border-purple-400 -ml-[2px]'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}

      {/* Quick Links Section */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <div className="px-3 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Quick Links
        </div>
        <div className="space-y-1">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
          </a>
        </div>
      </div>
    </nav>
  );
}