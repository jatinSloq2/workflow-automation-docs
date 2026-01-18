import Link from 'next/link';
import { Zap, Code, GitBranch, Play, Braces } from 'lucide-react';

export default function CoreConceptsPage() {
  const concepts = [
    {
      title: 'Workflows',
      description: 'A workflow is a series of connected nodes that automate a process from start to finish.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      href: '/docs/core-concepts/workflows',
      details: [
        'Visual canvas for building automations',
        'Drag-and-drop interface',
        'Save, version, and reuse workflows',
        'Execute manually or via triggers',
      ],
      example: 'A workflow might fetch data from an API, process it with AI, and send results via email.',
    },
    {
      title: 'Nodes',
      description: 'Nodes are the building blocks that perform specific actions in your workflow.',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      href: '/docs/core-concepts/nodes',
      details: [
        '30+ pre-built nodes available',
        'Categories: Triggers, AI, Data, Transform, Logic, Communication',
        'Each node has configurable properties',
        'Reusable and customizable',
      ],
      example: 'AI Chat node, HTTP Request node, Email node, Database node, etc.',
    },
    {
      title: 'Connections',
      description: 'Connections link nodes together to pass data from one node to the next.',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      href: '/docs/core-concepts/connections',
      details: [
        'Data flows from source to target',
        'Support for multiple outputs (branching)',
        'Conditional routing with IF/Switch nodes',
        'Loop nodes for iteration',
      ],
      example: 'Connect HTTP Request → AI Chat → Email to fetch data, analyze it, and send results.',
    },
    {
      title: 'Executions',
      description: 'An execution is a single run of your workflow, from start to finish.',
      icon: Play,
      color: 'from-orange-500 to-red-500',
      href: '/docs/core-concepts/executions',
      details: [
        'Track execution history',
        'View input/output data for each node',
        'Monitor execution time and status',
        'Debug failed executions',
      ],
      example: 'When you run a workflow, it creates an execution with complete logs and results.',
    },
    {
      title: 'Expressions',
      description: 'Dynamic references to access data from previous nodes or workflow inputs.',
      icon: Braces,
      color: 'from-pink-500 to-rose-500',
      href: '/docs/core-concepts/expressions',
      details: [
        'Syntax: {{$node.nodeId.data.field}}',
        'Reference previous node: {{$prev.data}}',
        'Access input: {{$input.field}}',
        'Built-in functions: {{$now}}, {{$uuid}}',
      ],
      example: 'Use {{$prev.data.email}} to reference the email from the previous node.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300">Core Concepts</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Understanding WorkflowHub
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Learn the fundamental concepts that power WorkflowHub. Understanding these core ideas will help you build 
            powerful automation workflows quickly and efficiently.
          </p>
        </div>

        {/* Concepts */}
        <div className="space-y-8">
          {concepts.map((concept, index) => (
            <div key={concept.title} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity" style={{
                backgroundImage: `linear-gradient(to right, ${concept.color.split(' ')[1]}, ${concept.color.split(' ')[3]})`
              }} />
              
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/20 transition-all">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${concept.color} shrink-0`}>
                    <concept.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-black text-white/10">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-3xl font-black">{concept.title}</h2>
                    </div>
                    <p className="text-gray-400 text-lg">
                      {concept.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {concept.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white mb-3">Example:</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {concept.example}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={concept.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all group/link"
                >
                  Learn More About {concept.title}
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6">Next Steps</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/getting-started/first-workflow"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-1">Build Your First Workflow</h4>
              <p className="text-sm text-gray-400">Step-by-step tutorial</p>
            </Link>
            <Link
              href="/docs/nodes"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-1">Browse All Nodes</h4>
              <p className="text-sm text-gray-400">30+ nodes available</p>
            </Link>
            <Link
              href="/docs/examples"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-1">View Examples</h4>
              <p className="text-sm text-gray-400">Real-world workflows</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}