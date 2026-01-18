import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NodesPage() {
  const categories = [
    {
      title: 'Triggers',
      description: 'Start your workflows with manual, webhook, or scheduled triggers',
      icon: '⚡',
      href: '/docs/nodes/triggers',
      color: 'from-green-500 to-emerald-500',
      nodes: 3,
    },
    {
      title: 'AI & ML',
      description: 'Integrate language models, vision AI, and sentiment analysis',
      icon: '🤖',
      href: '/docs/nodes/ai',
      color: 'from-purple-500 to-pink-500',
      nodes: 4,
    },
    {
      title: 'Data & APIs',
      description: 'Fetch, parse, and transform data from APIs and databases',
      icon: '🗂️',
      href: '/docs/nodes/data',
      color: 'from-orange-500 to-red-500',
      nodes: 4,
    },
    {
      title: 'Transform',
      description: 'Filter, map, aggregate, and process data with code',
      icon: '🔄',
      href: '/docs/nodes/transform',
      color: 'from-blue-500 to-cyan-500',
      nodes: 8,
    },
    {
      title: 'Logic & Flow',
      description: 'Control workflow execution with conditions, loops, and merges',
      icon: '🔀',
      href: '/docs/nodes/logic',
      color: 'from-pink-500 to-rose-500',
      nodes: 5,
    },
    {
      title: 'Communication',
      description: 'Send notifications via email, Slack, and other channels',
      icon: '📨',
      href: '/docs/nodes/communication',
      color: 'from-blue-500 to-purple-500',
      nodes: 2,
    },
    {
      title: 'Files & Storage',
      description: 'Upload, process, read, and write files',
      icon: '📂',
      href: '/docs/nodes/files',
      color: 'from-yellow-500 to-orange-500',
      nodes: 2,
    },
  ];

  const stats = [
    { label: 'Total Nodes', value: '35+', icon: '📦' },
    { label: 'Node Categories', value: '7', icon: '🏷️' },
    { label: 'AI Providers', value: '5+', icon: '🤖' },
    { label: 'Database Types', value: '4+', icon: '🗄️' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <span className="text-white">Nodes</span>
        </div>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-300">📦 35+ Nodes</span>
          </div>
          
          <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            All Available Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl leading-relaxed">
            Explore our comprehensive library of 35+ nodes for building powerful automation workflows. 
            From AI integration to data processing, communication, and file handling - everything you need 
            to automate any process.
          </p>
        </div>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-purple-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Node Categories */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8">Node Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all h-full flex flex-col">
                  <div className="text-5xl mb-4">{cat.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-semibold">{cat.nodes} nodes</span>
                    <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                      <span className="text-sm">Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Nodes */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8">Most Popular Nodes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'AI Chat', desc: 'GPT-4, Claude, Llama - Generate text with language models', icon: '🤖', href: '/docs/nodes/ai/ai-chat' },
              { title: 'HTTP Request', desc: 'Make API calls to external services', icon: '🌐', href: '/docs/nodes/data/http-request' },
              { title: 'Send Email', desc: 'Automated email notifications with HTML', icon: '📧', href: '/docs/nodes/communication/email' },
              { title: 'Webhook', desc: 'Receive incoming webhooks to trigger workflows', icon: '🪝', href: '/docs/nodes/triggers/webhook' },
              { title: 'If/Else', desc: 'Conditional branching for workflow logic', icon: '🔀', href: '/docs/nodes/logic/if' },
              { title: 'Schedule', desc: 'Run workflows on schedule or interval', icon: '⏰', href: '/docs/nodes/triggers/schedule' },
            ].map((node, i) => (
              <Link
                key={i}
                href={node.href}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{node.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {node.desc}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8">Quick Links</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/docs/nodes/triggers" className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2 text-green-400">Getting Started</h3>
              <p className="text-sm text-gray-400 mb-4">
                Learn about triggers and how to start your first workflow
              </p>
              <div className="flex items-center gap-2 text-green-400 font-semibold text-sm">
                <span>Trigger Nodes</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/docs/nodes/data" className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2 text-blue-400">Work with Data</h3>
              <p className="text-sm text-gray-400 mb-4">
                Fetch, parse, and transform data from APIs and databases
              </p>
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                <span>Data Nodes</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/docs/nodes/ai" className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2 text-purple-400">Use AI</h3>
              <p className="text-sm text-gray-400 mb-4">
                Integrate language models, vision AI, and sentiment analysis
              </p>
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                <span>AI Nodes</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </section>

        {/* Node Selection Guide */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8">Node Selection Guide</h2>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="text-3xl flex-shrink-0">1️⃣</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Choose a Trigger</h3>
                  <p className="text-gray-400">
                    Start with a trigger node to define when your workflow runs: manually, on schedule, or via webhook.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-3xl flex-shrink-0">2️⃣</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Your Data</h3>
                  <p className="text-gray-400">
                    Use HTTP Request, Database, or Upload File nodes to fetch data from external sources.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-3xl flex-shrink-0">3️⃣</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Process & Transform</h3>
                  <p className="text-gray-400">
                    Use AI Chat, Filter, Aggregate, Code nodes to process and analyze your data intelligently.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-3xl flex-shrink-0">4️⃣</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Send Output</h3>
                  <p className="text-gray-400">
                    Use Email, Slack, or other communication nodes to notify users or integrate with other systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Build?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Start with our getting started guide to build your first workflow, or explore specific node categories above.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/docs/getting-started" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-bold text-lg transition-all flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/docs/nodes/triggers" className="px-8 py-4 bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg font-bold text-lg transition-all">
              Explore Nodes
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
