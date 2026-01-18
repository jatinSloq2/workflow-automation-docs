import Link from 'next/link';
import { Zap, Play, Save, Eye, Clock, GitBranch, CheckCircle } from 'lucide-react';

export default function WorkflowsConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-white">Workflows</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-300">Core Concept</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Workflows</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            A workflow is a series of connected nodes that automate a process from start to finish. 
            Think of it as a visual program where each node performs a specific task, and connections 
            determine the order of execution.
          </p>
        </div>

        {/* What is a Workflow */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What is a Workflow?</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Workflows are the foundation of WorkflowHub. They provide a visual, intuitive way to build 
              automation without writing complex code. Each workflow consists of nodes (the building blocks) 
              and connections (the flow of data between them).
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                <CheckCircle className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Visual Programming</h3>
                <p className="text-gray-400 text-sm">
                  Build complex automations by dragging and connecting nodes on a canvas. No coding required for most tasks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                <GitBranch className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Flow</h3>
                <p className="text-gray-400 text-sm">
                  Create linear sequences, conditional branches, loops, and parallel executions to handle any use case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Components */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Key Components</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Trigger Nodes
              </h3>
              <p className="text-gray-400">
                Every workflow starts with a trigger node. This determines when and how the workflow runs—manually, 
                via webhook, on a schedule, or triggered by an event.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Action Nodes
              </h3>
              <p className="text-gray-400">
                Action nodes perform the actual work: fetching data from APIs, processing files, sending emails, 
                running AI models, querying databases, and more. Chain multiple actions together to create powerful automations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🔀</span>
                Logic Nodes
              </h3>
              <p className="text-gray-400">
                Control the flow of your workflow with IF conditions, Switch statements, and Loop iterations. 
                These nodes enable complex decision-making and data processing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                Connections
              </h3>
              <p className="text-gray-400">
                Connections link nodes together, passing data from one node to the next. They define the execution 
                order and data flow throughout your workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Workflow Lifecycle */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Workflow Lifecycle</h2>
          
          <div className="relative pl-8 space-y-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 opacity-30" />
            
            <div className="relative">
              <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-bold">1</div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Save className="h-5 w-5 text-green-400" />
                  <h3 className="text-xl font-bold">Design & Build</h3>
                </div>
                <p className="text-gray-400">
                  Create your workflow by adding nodes to the canvas, configuring their properties, 
                  and connecting them together. Save frequently to preserve your work.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">2</div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-5 w-5 text-blue-400" />
                  <h3 className="text-xl font-bold">Test & Debug</h3>
                </div>
                <p className="text-gray-400">
                  Execute your workflow manually to test it. View the output of each node, identify errors, 
                  and refine your logic until everything works perfectly.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-sm font-bold">3</div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Play className="h-5 w-5 text-purple-400" />
                  <h3 className="text-xl font-bold">Activate & Run</h3>
                </div>
                <p className="text-gray-400">
                  Activate your workflow to enable automatic execution. Depending on your trigger, it will 
                  run on schedule, when webhooks are received, or when triggered manually.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[42px] w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold">4</div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-orange-400" />
                  <h3 className="text-xl font-bold">Monitor & Maintain</h3>
                </div>
                <p className="text-gray-400">
                  Track execution history, review logs, and monitor performance. Update your workflow 
                  as requirements change or new features become available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <h3 className="text-lg font-bold mb-3 text-green-400">✓ Do</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Give your workflows descriptive names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Test workflows thoroughly before activating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Use error handling nodes for production workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Keep workflows focused on a single purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Document complex logic with node notes</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="text-lg font-bold mb-3 text-red-400">✗ Don't</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Create overly complex workflows with 50+ nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Forget to handle errors and edge cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Hard-code sensitive data in node properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Mix multiple unrelated tasks in one workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Skip testing after making changes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Simple Workflow Example</h2>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Email Newsletter Automation</h3>
            <p className="text-gray-400 mb-6">
              This workflow fetches new blog posts from an API, generates personalized summaries using AI, 
              and sends them via email to subscribers.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-center text-sm font-semibold">
                  Schedule Trigger
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Runs daily at 9 AM
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center text-sm font-semibold">
                  HTTP Request
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Fetch latest blog posts from API
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-center text-sm font-semibold">
                  AI Chat
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Generate personalized summaries
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-center text-sm font-semibold">
                  Send Email
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Email newsletter to subscribers
                </div>
              </div>
            </div>
          </div>
        </section>       
      </div>
    </div>
  );
}