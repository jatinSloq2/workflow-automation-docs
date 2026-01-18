"use client"

import { ArrowRight, Brain, Check, ChevronRight, Lock, Play, Sparkles, Star, Workflow, Zap, Code2, Database } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden mt-8">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Future of Workflow Automation
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Automate Everything
            </span>
            <br />
            <span className="text-white">With AI Power</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Build intelligent workflows without code. Connect AI models, APIs, databases, and services in minutes. 
            <span className="text-purple-400 font-semibold"> 10x your productivity.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/docs/getting-started" className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Start Building Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
            </Link>
            <a href="#features" className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              <Play className="h-5 w-5" />
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">35+</div>
              <div className="text-gray-500 text-sm">AI-Powered Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-gray-500 text-sm">Workflows Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-gray-500 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-gray-600 rotate-90" />
        </div>
      </section>

      {/* Animated Feature Showcase */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Next-generation automation that thinks, learns, and adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "AI Intelligence", desc: "GPT-4, Claude, and local models integrated", color: "purple" },
              { icon: Zap, title: "Lightning Fast", desc: "Execute workflows in milliseconds", color: "blue" },
              { icon: Lock, title: "Secure & Private", desc: "Enterprise-grade security built-in", color: "pink" }
            ].map((feature, i) => (
              <div 
                key={i}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-${feature.color}-500/50 transition-all duration-500 hover:scale-105 cursor-pointer`}
                style={{ 
                  opacity: activeFeature === i ? 1 : 0.6,
                  transform: activeFeature === i ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/0 to-${feature.color}-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <feature.icon className={`h-12 w-12 mb-4 text-${feature.color}-400`} />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Node Categories - Expanded */}
      <section id="features" className="relative py-32 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              35+ specialized nodes to build any automation workflow you can imagine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🤖", title: "AI & ML", count: 6, gradient: "from-purple-500 to-pink-500", desc: "GPT, Claude, Vision, Sentiment" },
              { icon: "⚡", title: "Triggers", count: 4, gradient: "from-blue-500 to-cyan-500", desc: "Webhooks, Schedule, Manual" },
              { icon: "🗄️", title: "Data Sources", count: 8, gradient: "from-green-500 to-emerald-500", desc: "APIs, DBs, Files, JSON" },
              { icon: "🔄", title: "Transform", count: 10, gradient: "from-orange-500 to-red-500", desc: "Code, Map, Filter, Aggregate" },
              { icon: "🔀", title: "Logic Flow", count: 5, gradient: "from-indigo-500 to-purple-500", desc: "If/Else, Switch, Loops" },
              { icon: "📧", title: "Communication", count: 4, gradient: "from-pink-500 to-rose-500", desc: "Email, Slack, SMS" },
              { icon: "📊", title: "Analytics", count: 3, gradient: "from-yellow-500 to-orange-500", desc: "Charts, Reports, Insights" },
              { icon: "🛠️", title: "Utilities", count: 5, gradient: "from-cyan-500 to-blue-500", desc: "Debug, Delay, Variables" },
            ].map((cat, i) => (
              <div 
                key={i}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{cat.count} nodes</span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Latest Insights
                </span>
              </h2>
              <p className="text-xl text-gray-400">Learn from experts and the community</p>
            </div>
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "10 Advanced AI Automation Patterns", 
                category: "Tutorial", 
                read: "8 min",
                gradient: "from-purple-500/20 to-pink-500/20",
                image: "🎯"
              },
              { 
                title: "Building RAG Pipelines with Workflow", 
                category: "Guide", 
                read: "12 min",
                gradient: "from-blue-500/20 to-cyan-500/20",
                image: "📚"
              },
              { 
                title: "Scale Your Automations: Best Practices", 
                category: "Engineering", 
                read: "6 min",
                gradient: "from-pink-500/20 to-orange-500/20",
                image: "🚀"
              },
            ].map((post, i) => (
              <div 
                key={i}
                className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/30 transition-all overflow-hidden cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-6xl`}>
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.read} read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-16">
            Trusted by <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Innovators</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "AI Engineer", quote: "This platform saved me 20 hours a week. The AI nodes are incredible!" },
              { name: "Marcus Rodriguez", role: "Data Scientist", quote: "Best workflow tool I've used. Integrations are seamless." },
              { name: "Aisha Patel", role: "Product Manager", quote: "Our team automated 50+ processes in the first month. Game changer." },
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-16 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
                Ready to Automate?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join thousands of developers and teams building the future with AI-powered workflows
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Start Building Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/docs" className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                  View Documentation
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 mt-10 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
