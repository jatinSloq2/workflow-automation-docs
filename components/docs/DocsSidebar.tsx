"use client"

import { AlertCircle, ArrowRight, BookOpen, ChevronDown, ChevronRight, Code, Github, Home, MessageCircle, Sparkles, Wrench, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const navigation = [
  {
    title: 'Getting Started',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
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
    gradient: 'from-blue-500 to-cyan-500',
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
    gradient: 'from-green-500 to-emerald-500',
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
    gradient: 'from-orange-500 to-red-500',
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
    gradient: 'from-pink-500 to-purple-500',
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
    title: 'Troubleshooting',
    icon: AlertCircle,
    gradient: 'from-yellow-500 to-orange-500',
    links: [
      { title: 'Common Errors', href: '/docs/troubleshooting/common-errors' },
      { title: 'Debugging', href: '/docs/troubleshooting/debugging' },
    ],
  },
];

export function DocsSidebar() {
  const [pathname, setPathname] = useState('/docs');
  const [openSections, setOpenSections] = useState(new Set(navigation.map(section => section.title)));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSection = (title) => {
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
      <a
        href="/"
        className={`flex items-center gap-2 px-4 py-3 mb-6 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-300 dark:border-purple-500/20 text-sm font-semibold text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-500/20 transition-all group ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
      >
        <Home className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </a>

      {navigation.map((section, i) => {
        const isOpen = openSections.has(section.title);
        const SectionIcon = section.icon;

        return (
          <div
            key={section.title}
            className={`mb-2 transition-all duration-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <button
              onClick={() => toggleSection(section.title)}
              className="group flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative flex items-center gap-3">
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${section.gradient}`}>
                  <SectionIcon className="h-3.5 w-3.5 text-white" />
                </div>
                <span>{section.title}</span>
              </div>
              <div className="relative">
                {isOpen ? (
                  <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all" />
                )}
              </div>
            </button>

            {isOpen && (
              <ul className="mt-2 space-y-0.5 ml-2 border-l-2 border-purple-300 dark:border-purple-500/20 pl-4">
                {section.links.map((link, j) => {
                  const isActive = pathname === link.href;

                  return (
                    <li
                      key={link.href}
                      className={`transition-all duration-300`}
                      style={{ transitionDelay: `${j * 30}ms` }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setPathname(link.href);
                        }}
                        className={`group block py-2.5 px-3 text-sm rounded-lg transition-all ${isActive
                          ? 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 font-semibold border-l-2 border-purple-600 dark:border-purple-400 -ml-[2px] shadow-lg shadow-purple-200/50 dark:shadow-purple-500/10'
                          : 'text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 hover:translate-x-1'
                          }`}
                      >
                        <span className="flex items-center justify-between">
                          {link.title}
                          {isActive && (
                            <div className="h-1.5 w-1.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse" />
                          )}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}

      {/* Quick Links Section */}
      <div className="mt-8 pt-8 border-t border-gray-300 dark:border-white/10">
        <div className="px-4 mb-4 flex items-center gap-2">
          <div className="h-1 w-1 bg-purple-600 dark:bg-purple-500 rounded-full" />
          <span className="text-xs font-bold text-gray-600 dark:text-gray-500 uppercase tracking-wider">
            Quick Links
          </span>
        </div>
        <div className="space-y-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all hover:translate-x-1"
          >
            <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
            <span>GitHub</span>
            <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all hover:translate-x-1"
          >
            <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
            <span>Discord</span>
            <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>

      {/* Version Badge */}
      <div className="mt-6 px-4">
        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-300 dark:border-purple-500/20 text-center">
          <div className="text-xs text-gray-600 dark:text-gray-500 mb-1">Version</div>
          <div className="text-sm font-bold text-purple-700 dark:text-purple-400">v2.0.0</div>
        </div>
      </div>
    </nav>
  );
}