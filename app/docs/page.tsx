import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Code, BookOpen, Wrench, FileCode, Bot, Database, Mail } from 'lucide-react';

export default function DocsPage() {
  const quickStart = [
    {
      title: 'Installation',
      description: 'Set up your development environment and install dependencies',
      href: '/docs/getting-started/installation',
      icon: Sparkles,
    },
    {
      title: 'Quick Start',
      description: 'Build your first workflow in under 5 minutes',
      href: '/docs/getting-started/quick-start',
      icon: Zap,
    },
    {
      title: 'First Workflow',
      description: 'Step-by-step guide to creating a complete workflow',
      href: '/docs/getting-started/first-workflow',
      icon: Code,
    },
  ];

  const coreConcepts = [
    {
      title: 'Workflows',
      description: 'Learn how workflows orchestrate automated processes',
      href: '/docs/core-concepts/workflows',
      icon: Zap,
    },
    {
      title: 'Nodes',
      description: 'Building blocks that perform specific actions',
      href: '/docs/core-concepts/nodes',
      icon: Code,
    },
    {
      title: 'Expressions',
      description: 'Dynamic data referencing with {{expressions}}',
      href: '/docs/core-concepts/expressions',
      icon: BookOpen,
    },
  ];

  const popularNodes = [
    {
      title: 'AI Chat',
      description: 'Integrate AI language models (GPT-4, Claude, Llama)',
      href: '/docs/nodes/ai/ai-chat',
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'HTTP Request',
      description: 'Make API calls and fetch external data',
      href: '/docs/nodes/data/http-request',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Send Email',
      description: 'Send automated emails via SMTP',
      href: '/docs/nodes/communication/email',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      description: 'Query MySQL, PostgreSQL, MongoDB',
      href: '/docs/nodes/data/database',
      icon: Database,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const guides = [
    {
      title: 'File Processing',
      description: 'Upload and process CSV, Excel, JSON files',
      href: '/docs/guides/file-processing',
    },
    {
      title: 'AI Workflows',
      description: 'Build intelligent automation with AI',
      href: '/docs/guides/ai-workflows',
    },
    {
      title: 'Email Automation',
      description: 'Send personalized bulk emails',
      href: '/docs/guides/email-automation',
    },
    {
      title: 'API Integration',
      description: 'Connect to external APIs and services',
      href: '/docs/guides/api-integration',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Welcome to WorkflowHub
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Build powerful automation workflows with AI, APIs, databases, and more. 
            No-code visual editor meets unlimited customization.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              href="/docs/getting-started/quick-start"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/docs/nodes"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Browse Nodes
            </Link>
          </div>
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-purple-400" />
            Getting Started
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickStart.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/20"
              >
                <item.icon className="h-10 w-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-blue-400" />
            Core Concepts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coreConcepts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <item.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Nodes */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-black flex items-center gap-3">
              <Code className="h-8 w-8 text-green-400" />
              Popular Nodes
            </h2>
            <Link 
              href="/docs/nodes"
              className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group"
            >
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {popularNodes.map((node) => (
              <Link
                key={node.href}
                href={node.href}
                className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${node.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${node.color}`}>
                    <node.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors">
                      {node.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {node.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Wrench className="h-8 w-8 text-orange-400" />
            Guides & Tutorials
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all"
              >
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-orange-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {guide.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-orange-400 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-pink-400" />
            More Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/docs/expressions"
              className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 hover:border-pink-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-pink-400">Expressions</h3>
              <p className="text-gray-400 text-sm">
                Learn to use dynamic expressions and data references
              </p>
            </Link>
            
            <Link
              href="/docs/examples"
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-400">Examples</h3>
              <p className="text-gray-400 text-sm">
                Real-world workflow examples you can use
              </p>
            </Link>
            
            <Link
              href="/docs/api-reference"
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-green-400">API Reference</h3>
              <p className="text-gray-400 text-sm">
                Complete API documentation for developers
              </p>
            </Link>
          </div>
        </section>

        {/* Help */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Check out our troubleshooting guide or join our community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/docs/troubleshooting"
              className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              Troubleshooting
            </Link>
            <a 
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-all"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}