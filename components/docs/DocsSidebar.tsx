'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'Quick Start', href: '/docs/getting-started/quick-start' },
      { title: 'First Workflow', href: '/docs/getting-started/first-workflow' },
    ],
  },
  {
    title: 'Core Concepts',
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
    links: [
      { title: 'Email Campaign', href: '/docs/examples/email-campaign' },
      { title: 'Data Processing', href: '/docs/examples/data-processing' },
      { title: 'AI Content Generation', href: '/docs/examples/ai-content-generation' },
      { title: 'Webhook Handler', href: '/docs/examples/webhook-handler' },
    ],
  },
  {
    title: 'API Reference',
    links: [
      { title: 'Overview', href: '/docs/api-reference' },
      { title: 'Workflows', href: '/docs/api-reference/workflows' },
      { title: 'Executions', href: '/docs/api-reference/executions' },
      { title: 'Webhooks', href: '/docs/api-reference/webhooks' },
    ],
  },
  {
    title: 'Troubleshooting',
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
    <nav className="space-y-6">
      <div className="mb-8">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ← Back to Home
        </Link>
      </div>

      {navigation.map((section) => {
        const isOpen = openSections.has(section.title);
        
        return (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {section.title}
              {isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            
            {isOpen && (
              <ul className="space-y-1 ml-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                {section.links.map((link) => {
                  const isActive = pathname === link.href;
                  
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-1.5 text-sm transition-colors ${
                          isActive
                            ? 'text-blue-600 dark:text-blue-400 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
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
    </nav>
  );
}
