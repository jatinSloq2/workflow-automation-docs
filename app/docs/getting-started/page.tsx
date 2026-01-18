import Link from 'next/link';
import { Rocket, Download, Zap, Code, ArrowRight } from 'lucide-react';

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <span className="text-white">Getting Started</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Rocket className="h-4 w-4 text-green-400" />
            <span className="text-sm text-green-300">Getting Started</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Welcome to WorkflowHub
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Get up and running with WorkflowHub in minutes. This guide will help you install the platform, 
            understand the basics, and create your first automated workflow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Link
            href="/docs/getting-started/installation"
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition-all"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-black mb-3">Installation</h2>
              <p className="text-gray-400 text-sm mb-4">
                Set up WorkflowHub on your local machine or server with Docker
              </p>
              
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Start here</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link
            href="/docs/getting-started/quick-start"
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-black mb-3">Quick Start</h2>
              <p className="text-gray-400 text-sm mb-4">
                Learn the interface and create a simple workflow in under 5 minutes
              </p>
              
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>5 min tutorial</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>

          <Link
            href="/docs/getting-started/first-workflow"
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-green-500/50 transition-all"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity" />
            
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                <Code className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-black mb-3">First Workflow</h2>
              <p className="text-gray-400 text-sm mb-4">
                Build a complete workflow step-by-step with detailed explanations
              </p>
              
              <div className="flex items-center gap-2 text-green-400 font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Build now</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>

        {/* Learning Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-8">Recommended Learning Path</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20" />
            
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0 text-2xl font-black">
                  1
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Install WorkflowHub</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Get WorkflowHub running on your machine using Docker. Takes about 5 minutes.
                  </p>
                  <Link
                    href="/docs/getting-started/installation"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    Installation Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shrink-0 text-2xl font-black">
                  2
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Take the Quick Start Tour</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Learn the interface and create your first simple workflow in minutes.
                  </p>
                  <Link
                    href="/docs/getting-started/quick-start"
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                  >
                    Quick Start Tutorial
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shrink-0 text-2xl font-black">
                  3
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Build Your First Real Workflow</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Create a practical workflow that fetches data, processes it with AI, and sends results.
                  </p>
                  <Link
                    href="/docs/getting-started/first-workflow"
                    className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300"
                  >
                    First Workflow Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shrink-0 text-2xl font-black">
                  4
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">Explore Advanced Topics</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Dive into AI workflows, file processing, API integrations, and more advanced patterns.
                  </p>
                  <Link
                    href="/docs/guides"
                    className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300"
                  >
                    Browse Guides
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <h3 className="text-lg font-bold mb-4">Basics</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Installing and configuring WorkflowHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Understanding the workflow canvas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Adding and connecting nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Executing and debugging workflows</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h3 className="text-lg font-bold mb-4">Core Concepts</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Workflows, nodes, and connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Using expressions to reference data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Working with executions and logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Best practices and patterns</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="text-lg font-bold mb-4">Practical Skills</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Fetching data from APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Processing files (CSV, Excel, JSON)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Integrating AI models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Sending automated emails</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
              <h3 className="text-lg font-bold mb-4">Advanced Topics</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Conditional logic and branching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Loops and batch processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Error handling and retries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Webhooks and scheduling</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">System Requirements</h2>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Minimum Requirements</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Docker 20.10+ and Docker Compose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>4GB RAM (8GB recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>2 CPU cores (4 cores recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>10GB free disk space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Modern web browser (Chrome, Firefox, Safari, Edge)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">Supported Platforms</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Linux (Ubuntu, Debian, CentOS, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>macOS 10.15+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Windows 10/11 with WSL2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Cloud platforms (AWS, GCP, Azure)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Self-hosted or on-premises deployment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get Help */}
        <section className="mb-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-400 mb-6">
              If you get stuck or have questions, we're here to help!
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/docs/core-concepts"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
              >
                <h4 className="font-bold mb-1">Core Concepts</h4>
                <p className="text-sm text-gray-400">
                  Learn the fundamentals
                </p>
              </Link>
              
              <Link
                href="/docs/guides"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
              >
                <h4 className="font-bold mb-1">Guides</h4>
                <p className="text-sm text-gray-400">
                  Step-by-step tutorials
                </p>
              </Link>
              
              <Link
                href="/docs/examples"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
              >
                <h4 className="font-bold mb-1">Examples</h4>
                <p className="text-sm text-gray-400">
                  Real-world workflows
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="flex items-center justify-center pt-8 border-t border-white/10">
          <Link
            href="/docs/getting-started/installation"
            className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg transition-all text-lg font-bold"
          >
            <span>Start with Installation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}