import Link from 'next/link';
import { Wrench, FileText, Bot, Mail, Globe, AlertCircle, ArrowRight } from 'lucide-react';

export default function GuidesPage() {
  const guides = [
    {
      title: 'Building Workflows',
      description: 'Learn the fundamentals of creating, connecting, and executing workflows',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500',
      href: '/docs/guides/building-workflows',
      topics: [
        'Creating your first workflow',
        'Adding and connecting nodes',
        'Configuring node properties',
        'Testing and debugging',
        'Saving and versioning',
      ],
      difficulty: 'Beginner',
      time: '15 min',
    },
    {
      title: 'File Processing',
      description: 'Upload, parse, and process CSV, Excel, JSON files in your workflows',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      href: '/docs/guides/file-processing',
      topics: [
        'Uploading files to workflows',
        'Parsing CSV and Excel files',
        'Processing JSON data',
        'Filtering and transforming data',
        'Bulk operations on file data',
      ],
      difficulty: 'Intermediate',
      time: '20 min',
    },
    {
      title: 'AI Workflows',
      description: 'Build intelligent automations with OpenAI, Claude, and local AI models',
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
      href: '/docs/guides/ai-workflows',
      topics: [
        'Connecting to AI providers',
        'Prompt engineering best practices',
        'Processing AI responses',
        'Batch AI operations',
        'Combining AI with other nodes',
      ],
      difficulty: 'Intermediate',
      time: '25 min',
    },
    {
      title: 'Email Automation',
      description: 'Send personalized emails at scale with SMTP integration',
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      href: '/docs/guides/email-automation',
      topics: [
        'Setting up SMTP credentials',
        'Creating email templates',
        'Sending bulk personalized emails',
        'Using AI for email content',
        'Tracking delivery and errors',
      ],
      difficulty: 'Beginner',
      time: '20 min',
    },
    {
      title: 'API Integration',
      description: 'Connect to external APIs and build powerful integrations',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      href: '/docs/guides/api-integration',
      topics: [
        'Making HTTP requests',
        'Authentication methods',
        'Handling API responses',
        'Error handling and retries',
        'Rate limiting and pagination',
      ],
      difficulty: 'Intermediate',
      time: '30 min',
    },
    {
      title: 'Error Handling',
      description: 'Build resilient workflows with proper error handling',
      icon: AlertCircle,
      color: 'from-red-500 to-pink-500',
      href: '/docs/guides/error-handling',
      topics: [
        'Understanding execution errors',
        'Using IF nodes for validation',
        'Retry strategies',
        'Error notifications',
        'Debugging failed workflows',
      ],
      difficulty: 'Advanced',
      time: '25 min',
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/10';
      case 'Advanced': return 'text-red-400 bg-red-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Wrench className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-orange-300">Guides & Tutorials</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Learn by Doing
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Step-by-step guides to help you master WorkflowHub. From basic workflows to advanced automation patterns, 
            these tutorials will teach you everything you need to know.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-orange-400 mb-1">6</div>
            <div className="text-sm text-gray-400">Guides</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-green-400 mb-1">2</div>
            <div className="text-sm text-gray-400">Beginner</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-yellow-400 mb-1">3</div>
            <div className="text-sm text-gray-400">Intermediate</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="text-3xl font-black text-red-400 mb-1">1</div>
            <div className="text-sm text-gray-400">Advanced</div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guides.map((guide) => (
            <div key={guide.title} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity" style={{
                backgroundImage: `linear-gradient(to right, ${guide.color.split(' ')[1]}, ${guide.color.split(' ')[3]})`
              }} />
              
              <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/20 transition-all flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${guide.color} shrink-0`}>
                    <guide.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{guide.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⏱️ {guide.time}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex-1 mb-6">
                  <h4 className="text-sm font-bold text-gray-400 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {guide.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={guide.href}
                  className="group/link inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all w-full justify-center"
                >
                  Start Guide
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-8">Recommended Learning Path</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-yellow-500 to-red-500 opacity-20" />
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shrink-0 text-2xl font-black">
                  1
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Start with Building Workflows</h3>
                  <p className="text-gray-400 text-sm">Learn the fundamentals and create your first workflow</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 shrink-0 text-2xl font-black">
                  2
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Try File Processing or Email Automation</h3>
                  <p className="text-gray-400 text-sm">Pick based on your use case and build practical workflows</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shrink-0 text-2xl font-black">
                  3
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Explore AI Workflows and API Integration</h3>
                  <p className="text-gray-400 text-sm">Unlock advanced automation with AI and external services</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 shrink-0 text-2xl font-black">
                  4
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Master Error Handling</h3>
                  <p className="text-gray-400 text-sm">Build production-ready, resilient workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6">More Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/docs/examples"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-2">Examples</h4>
              <p className="text-sm text-gray-400">
                Real-world workflow templates you can copy
              </p>
            </Link>
            
            <Link
              href="/docs/nodes"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-2">Node Reference</h4>
              <p className="text-sm text-gray-400">
                Complete documentation for all 30+ nodes
              </p>
            </Link>
            
            <Link
              href="/docs/troubleshooting"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-2">Troubleshooting</h4>
              <p className="text-sm text-gray-400">
                Common issues and how to solve them
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}