import { Bot, Code, Database, GitBranch, Mail, Zap } from 'lucide-react';
import Link from 'next/link';

export default function NodesPage() {
  const nodeCategories = [
    {
      title: 'Triggers',
      description: 'Start your workflows automatically or manually',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      href: '/docs/nodes/triggers',
      nodes: [
        { name: 'Manual Trigger', desc: 'Start workflow manually', href: '/docs/nodes/triggers/manual-trigger' },
        { name: 'Webhook', desc: 'Trigger via HTTP webhooks', href: '/docs/nodes/triggers/webhook' },
        { name: 'Schedule', desc: 'Run on a schedule', href: '/docs/nodes/triggers/schedule' },
      ],
    },
    {
      title: 'AI Nodes',
      description: 'Integrate powerful AI models into your workflows',
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
      href: '/docs/nodes/ai',
      nodes: [
        { name: 'AI Chat', desc: 'OpenAI, Claude, Ollama, Groq', href: '/docs/nodes/ai/ai-chat' },
        { name: 'Text Generation', desc: 'Generate content with AI', href: '/docs/nodes/ai/text-generation' },
        { name: 'Image Analysis', desc: 'Analyze images with vision models', href: '/docs/nodes/ai/image-analysis' },
        { name: 'Sentiment', desc: 'Analyze text sentiment', href: '/docs/nodes/ai/sentiment' },
      ],
    },
    {
      title: 'Data Nodes',
      description: 'Fetch, query, and manipulate data from various sources',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      href: '/docs/nodes/data',
      nodes: [
        { name: 'HTTP Request', desc: 'Make API calls', href: '/docs/nodes/data/http-request' },
        { name: 'Database', desc: 'Query MySQL, PostgreSQL, MongoDB', href: '/docs/nodes/data/database' },
        { name: 'JSON Parse', desc: 'Parse and extract JSON data', href: '/docs/nodes/data/json-parse' },
        { name: 'Upload File', desc: 'Process CSV, Excel, JSON files', href: '/docs/nodes/data/upload-file' },
      ],
    },
    {
      title: 'Transform',
      description: 'Transform, filter, and restructure your data',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      href: '/docs/nodes/transform',
      nodes: [
        { name: 'Code', desc: 'Run custom JavaScript', href: '/docs/nodes/transform/code' },
        { name: 'Filter', desc: 'Filter arrays by conditions', href: '/docs/nodes/transform/filter' },
        { name: 'Sort', desc: 'Sort items by field', href: '/docs/nodes/transform/sort' },
        { name: 'Data Mapper', desc: 'Map and restructure data', href: '/docs/nodes/transform/data-mapper' },
      ],
    },
    {
      title: 'Logic',
      description: 'Control workflow execution with conditional logic',
      icon: GitBranch,
      color: 'from-pink-500 to-rose-500',
      href: '/docs/nodes/logic',
      nodes: [
        { name: 'IF', desc: 'Conditional branching', href: '/docs/nodes/logic/if' },
        { name: 'Switch', desc: 'Multi-way branching', href: '/docs/nodes/logic/switch' },
        { name: 'Loop', desc: 'Iterate over items', href: '/docs/nodes/logic/loop' },
      ],
    },
    {
      title: 'Communication',
      description: 'Send messages via email, Slack, and more',
      icon: Mail,
      color: 'from-indigo-500 to-purple-500',
      href: '/docs/nodes/communication',
      nodes: [
        { name: 'Send Email', desc: 'SMTP email sending', href: '/docs/nodes/communication/email' },
        { name: 'Slack', desc: 'Send Slack messages', href: '/docs/nodes/communication/slack' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Nodes</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            All Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Nodes are the building blocks of workflows. Each node performs a specific action like sending an email, 
            calling an API, processing data, or running AI models. Connect them together to build powerful automations.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-purple-400 mb-1">30+</div>
            <div className="text-sm text-gray-400">Total Nodes</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-blue-400 mb-1">6</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-green-400 mb-1">4</div>
            <div className="text-sm text-gray-400">AI Providers</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-orange-400 mb-1">∞</div>
            <div className="text-sm text-gray-400">Possibilities</div>
          </div>
        </div>

        {/* Node Categories */}
        <div className="space-y-8">
          {nodeCategories.map((category) => (
            <div key={category.title} className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r opacity-20 blur-xl rounded-2xl" style={{
                backgroundImage: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
              }} />
              
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                {/* Category Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color}`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black mb-2">{category.title}</h2>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <Link
                    href={category.href}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-semibold transition-all"
                  >
                    View All
                  </Link>
                </div>

                {/* Nodes Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.nodes.map((node) => (
                    <Link
                      key={node.name}
                      href={node.href}
                      className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                    >
                      <h3 className="font-bold mb-1 group-hover:text-purple-400 transition-colors">
                        {node.name}
                      </h3>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {node.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-3">Can't Find What You Need?</h3>
          <p className="text-gray-400 mb-6">
            You can also write custom code with the Code node or request new nodes in our Discord community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/nodes/transform/code"
              className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              Code Node Docs
            </Link>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-all"
            >
              Request Feature
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}