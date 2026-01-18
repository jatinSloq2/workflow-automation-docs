"use client"

import { ArrowRight, BarChart, Boxes, Brain, Check, ChevronRight, Code2, Database, GitBranch, Globe, Lock, Play, Rocket, Shield, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

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

  // Intersection Observer for lazy loading animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  const isVisible = (id) => visibleSections.has(id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-60 dark:opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent dark:from-purple-900/20 dark:via-transparent dark:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 dark:via-transparent dark:to-transparent" />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gradient-to-r dark:from-purple-500/20 dark:to-blue-500/20 border border-purple-200 dark:border-purple-500/30 rounded-full mb-8 backdrop-blur-sm shadow-lg animate-fade-in-up">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              The Future of Workflow Automation
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-fade-in-up animation-delay-100">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient bg-300">
              Automate Everything
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">With AI Power</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Build intelligent workflows without code. Connect AI models, APIs, databases, and services in minutes.
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> 10x your productivity.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-300">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-lg text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 dark:hover:shadow-purple-500/30">
              <span className="relative z-10 flex items-center gap-2">
                Start Building Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 rounded-xl font-semibold text-lg text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all backdrop-blur-sm shadow-lg">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative max-w-5xl mx-auto mb-16 animate-fade-in-up animation-delay-400">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-white/10 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 w-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-white/50 dark:bg-white/10 rounded-lg backdrop-blur-sm animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-xl animate-float-delayed" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
            {[
              { value: "35+", label: "AI-Powered Nodes", gradient: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" },
              { value: "10K+", label: "Workflows Created", gradient: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400" },
              { value: "99.9%", label: "Uptime", gradient: "from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400" }
            ].map((stat, i) => (
              <div key={i} className="text-center transform hover:scale-105 transition-transform">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-gray-400 dark:text-gray-600 rotate-90" />
        </div>
      </section>

      {/* Animated Feature Showcase */}
      <section id="features" data-animate className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Next-generation automation that thinks, learns, and adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "AI Intelligence", desc: "GPT-4, Claude, and local models integrated", color: "purple", bgColor: "bg-purple-50 dark:bg-purple-900/10" },
              { icon: Zap, title: "Lightning Fast", desc: "Execute workflows in milliseconds", color: "blue", bgColor: "bg-blue-50 dark:bg-blue-900/10" },
              { icon: Lock, title: "Secure & Private", desc: "Enterprise-grade security built-in", color: "pink", bgColor: "bg-pink-50 dark:bg-pink-900/10" }
            ].map((feature, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 border-2 border-gray-200 dark:border-white/10 hover:border-${feature.color}-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${isVisible('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                  transform: activeFeature === i ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 dark:from-${feature.color}-400 dark:to-${feature.color}-500 flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Node Categories - Expanded */}
      <section id="categories" data-animate className="relative py-32 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:via-purple-950/5 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              35+ specialized nodes to build any automation workflow you can imagine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "AI & ML", count: 6, gradient: "from-purple-500 to-pink-500", desc: "GPT, Claude, Vision, Sentiment" },
              { icon: Zap, title: "Triggers", count: 4, gradient: "from-blue-500 to-cyan-500", desc: "Webhooks, Schedule, Manual" },
              { icon: Database, title: "Data Sources", count: 8, gradient: "from-green-500 to-emerald-500", desc: "APIs, DBs, Files, JSON" },
              { icon: Code2, title: "Transform", count: 10, gradient: "from-orange-500 to-red-500", desc: "Code, Map, Filter, Aggregate" },
              { icon: GitBranch, title: "Logic Flow", count: 5, gradient: "from-indigo-500 to-purple-500", desc: "If/Else, Switch, Loops" },
              { icon: Users, title: "Communication", count: 4, gradient: "from-pink-500 to-rose-500", desc: "Email, Slack, SMS" },
              { icon: BarChart, title: "Analytics", count: 3, gradient: "from-yellow-500 to-orange-500", desc: "Charts, Reports, Insights" },
              { icon: Boxes, title: "Utilities", count: 5, gradient: "from-cyan-500 to-blue-500", desc: "Debug, Delay, Variables" },
            ].map((cat, i) => (
              <div
                key={i}
                className={`group relative p-6 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 border-2 border-gray-200 dark:border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl ${isVisible('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative">
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                    <cat.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cat.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-500">{cat.count} nodes</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section with Images */}
      <section id="use-cases" data-animate className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible('use-cases') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Built for Every Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From startups to enterprises, teams love our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Rocket,
                title: "Marketing Automation",
                desc: "Automate campaigns, social media, and lead nurturing",
                gradient: "from-pink-500 to-rose-500",
                image: "bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20"
              },
              {
                icon: TrendingUp,
                title: "Sales Pipeline",
                desc: "Streamline CRM updates, follow-ups, and reporting",
                gradient: "from-blue-500 to-cyan-500",
                image: "bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20"
              },
              {
                icon: Shield,
                title: "Data Processing",
                desc: "Transform, analyze, and visualize data at scale",
                gradient: "from-purple-500 to-indigo-500",
                image: "bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20"
              },
              {
                icon: Globe,
                title: "Customer Support",
                desc: "AI-powered ticket routing and response automation",
                gradient: "from-green-500 to-emerald-500",
                image: "bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
              }
            ].map((useCase, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible('use-cases') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`h-48 ${useCase.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-50">
                    <div className="grid grid-cols-4 gap-2 p-4 h-full">
                      {[...Array(12)].map((_, j) => (
                        <div
                          key={j}
                          className="bg-white/30 dark:bg-white/10 rounded backdrop-blur-sm animate-pulse"
                          style={{ animationDelay: `${j * 100}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-2xl`}>
                    <useCase.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.desc}</p>
                  <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" data-animate className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:via-blue-950/5 dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-5xl font-black mb-16 transition-all duration-1000 ${isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Trusted by <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Innovators</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "AI Engineer", quote: "This platform saved me 20 hours a week. The AI nodes are incredible!", avatar: "from-purple-500 to-pink-500" },
              { name: "Marcus Rodriguez", role: "Data Scientist", quote: "Best workflow tool I've used. Integrations are seamless.", avatar: "from-blue-500 to-cyan-500" },
              { name: "Aisha Patel", role: "Product Manager", quote: "Our team automated 50+ processes in the first month. Game changer.", avatar: "from-pink-500 to-rose-500" },
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl bg-white dark:bg-gradient-to-br dark:from-white/5 dark:to-white/0 border-2 border-gray-200 dark:border-white/10 hover:scale-105 transition-all shadow-lg hover:shadow-2xl ${isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${testimonial.avatar} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-600 dark:text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" data-animate className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`relative p-16 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
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
                <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl">
                  Start Building Now
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm">
                  View Documentation
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animation-delay-100 {
        animation-delay: 100ms;
      }
      
      .animation-delay-200 {
        animation-delay: 200ms;
      }
      
      .animation-delay-300 {
        animation-delay: 300ms;
      }
      
      .animation-delay-400 {
        animation-delay: 400ms;
      }
      
      .animation-delay-500 {
        animation-delay: 500ms;
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) translateX(0px);
        }
        50% {
          transform: translateY(-20px) translateX(10px);
        }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      @keyframes float-delayed {
        0%, 100% {
          transform: translateY(0px) translateX(0px);
        }
        50% {
          transform: translateY(-15px) translateX(-10px);
        }
      }
      
      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
        animation-delay: 1s;
      }
      
      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar for dark mode */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
      }
      
      .dark ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(147, 51, 234, 0.5);
        border-radius: 5px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(147, 51, 234, 0.7);
      }
      
      /* Improve text rendering */
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Enhance focus states for accessibility */
      *:focus-visible {
        outline: 2px solid rgb(147, 51, 234);
        outline-offset: 2px;
      }
      
      /* Lazy load image optimization */
      img {
        content-visibility: auto;
      }
    `}</style>
    </div>
  )
}