"use client"

import { ArrowRight, BookOpen, Code, Database, FileCode, GitBranch, Layers, Lightbulb, Mail, Rocket, Search, Sparkles, Star, Terminal, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function EnhancedDocsPage() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const quickStart = [
    {
      title: 'Installation',
      description: 'Set up your environment in under 2 minutes',
      href: '/docs/getting-started/installation',
      icon: Terminal,
      gradient: 'from-purple-500 to-pink-500',
      time: '2 min',
    },
    {
      title: 'Quick Start',
      description: 'Build your first workflow instantly',
      href: '/docs/getting-started/quick-start',
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
      time: '5 min',
    },
    {
      title: 'First Workflow',
      description: 'Complete step-by-step tutorial',
      href: '/docs/getting-started/first-workflow',
      icon: Rocket,
      gradient: 'from-green-500 to-emerald-500',
      time: '10 min',
    },
  ];

  const coreConcepts = [
    {
      title: 'Workflows',
      description: 'Orchestrate automated processes with visual flow design',
      href: '/docs/core-concepts/workflows',
      icon: GitBranch,
      color: 'purple',
      stats: '50+ templates',
    },
    {
      title: 'Nodes',
      description: 'Modular building blocks for any automation task',
      href: '/docs/core-concepts/nodes',
      icon: Layers,
      color: 'blue',
      stats: '35+ nodes',
    },
    {
      title: 'Expressions',
      description: 'Dynamic data manipulation with {{expressions}}',
      href: '/docs/core-concepts/expressions',
      icon: Code,
      color: 'pink',
      stats: '20+ functions',
    },
  ];

  const popularNodes = [
    {
      title: 'AI Chat',
      description: 'GPT-4, Claude, Llama integration',
      href: '/docs/nodes/ai/ai-chat',
      icon: Sparkles,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      tag: 'Popular',
    },
    {
      title: 'HTTP Request',
      description: 'REST APIs and webhooks',
      href: '/docs/nodes/data/http-request',
      icon: Database,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      tag: 'Essential',
    },
    {
      title: 'Send Email',
      description: 'SMTP automation',
      href: '/docs/nodes/communication/email',
      icon: Mail,
      gradient: 'from-green-500 via-emerald-500 to-lime-500',
      tag: 'Trending',
    },
    {
      title: 'Code Execute',
      description: 'Run Python, JavaScript',
      href: '/docs/nodes/transform/code',
      icon: FileCode,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      tag: 'Advanced',
    },
  ];

  const guides = [
    { title: 'File Processing', icon: '📁', desc: 'CSV, Excel, JSON handling' },
    { title: 'AI Workflows', icon: '🤖', desc: 'Intelligent automation' },
    { title: 'Email Campaigns', icon: '📧', desc: 'Bulk personalization' },
    { title: 'API Integration', icon: '🔌', desc: 'External services' },
    { title: 'Data Pipeline', icon: '🔄', desc: 'ETL workflows' },
    { title: 'Error Handling', icon: '⚠️', desc: 'Robust automation' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white to-blue-100/30 dark:from-purple-900/10 dark:via-black dark:to-blue-900/10 transition-colors duration-300" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow transition-colors duration-300" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slower transition-colors duration-300" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mb-20 text-center">
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-300 dark:border-purple-500/30 mb-8 backdrop-blur-sm transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </div>
          
          <h1 
            className={`text-6xl md:text-7xl font-black mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-purple-600 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent animate-gradient bg-300">
              Welcome to
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
              WorkflowHub
            </span>
          </h1>
          
          <p 
            className={`text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Build powerful automation workflows with AI, APIs, databases, and more.
            <span className="block mt-2 text-purple-600 dark:text-purple-400 font-semibold">No-code visual editor meets unlimited customization.</span>
          </p>

          {/* Search Bar */}
          <div 
            className={`relative max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${searchFocused ? 'text-purple-600 dark:text-purple-400' : 'text-gray-400 dark:text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search documentation..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:border-purple-500 focus:bg-white dark:focus:bg-white/10 transition-all outline-none backdrop-blur-xl"
              />
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded">⌘K</kbd>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`flex flex-wrap gap-3 justify-center transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {['Quick Start', 'API Reference', 'Examples'].map((link, i) => (
              <button
                key={link}
                className="px-5 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500/50 rounded-lg font-medium text-sm text-gray-900 dark:text-white transition-all hover:scale-105"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Start Cards */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-black mb-2 flex items-center gap-3 text-gray-900 dark:text-white">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                Getting Started
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Everything you need to begin building</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {quickStart.map((item, i) => (
              <div
                key={item.title}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 border-2 border-gray-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ 
                  transitionDelay: `${500 + i * 100}ms`,
                  transform: activeCard === i ? 'scale(1.05) translateY(-8px)' : ''
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/30 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300">
                      {item.time}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
                    <span>Start now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10`} />
              </div>
            ))}
          </div>
        </section>

        {/* Core Concepts */}
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="text-4xl font-black mb-2 flex items-center gap-3 text-gray-900 dark:text-white">
              <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              Core Concepts
            </h2>
            <p className="text-gray-700 dark:text-gray-400">Fundamental building blocks of WorkflowHub</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {coreConcepts.map((item, i) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 border-2 border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-500 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 rounded-full text-xs font-semibold text-blue-700 dark:text-blue-400">
                  {item.stats}
                </div>
                
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-6`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Nodes */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-black mb-2 flex items-center gap-3 text-gray-900 dark:text-white">
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                Popular Nodes
              </h2>
              <p className="text-gray-700 dark:text-gray-400">Most used automation components</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500/50 rounded-lg font-semibold text-sm text-gray-900 dark:text-white transition-all group">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {popularNodes.map((node, i) => (
              <div
                key={node.title}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 border-2 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${node.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-6 flex items-start gap-5">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${node.gradient} shadow-lg flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <node.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {node.title}
                      </h3>
                      <span className={`px-2 py-0.5 bg-gradient-to-r ${node.gradient} rounded-full text-xs font-bold text-white`}>
                        {node.tag}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-400 text-sm mb-3">
                      {node.description}
                    </p>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View docs</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guides Grid */}
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="text-4xl font-black mb-2 flex items-center gap-3 text-gray-900 dark:text-white">
              <Rocket className="h-8 w-8 text-green-600 dark:text-green-400" />
              Guides & Tutorials
            </h2>
            <p className="text-gray-700 dark:text-gray-400">Step-by-step walkthroughs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {guides.map((guide, i) => (
              <div
                key={guide.title}
                className="group flex items-center gap-4 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-green-400 dark:hover:border-green-500/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="text-3xl">{guide.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-500">{guide.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-600 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </section>

        {/* Help CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-500/20 dark:via-pink-500/20 dark:to-blue-500/20 border-2 border-purple-300 dark:border-purple-500/30 p-12 text-center backdrop-blur-xl shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
          
          <div className="relative">
            <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Need Help?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our community and support team are here to help.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg">
                Join Discord
              </button>
              <button className="px-6 py-3 bg-white/80 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-white dark:hover:bg-white/20 transition-all backdrop-blur-sm">
                Browse Troubleshooting
              </button>
              <button className="px-6 py-3 bg-white/80 dark:bg-white/10 border-2 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-xl font-bold hover:bg-white dark:hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-300 {
          background-size: 300% 300%;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}