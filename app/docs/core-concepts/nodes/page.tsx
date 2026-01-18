import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NodesConceptPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-gray-700 dark:hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-gray-700 dark:hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Nodes</span>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
            Nodes
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Nodes are the fundamental building blocks of workflows. Each node represents a single action, 
            task, or operation that can be performed within a workflow.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">What is a Node?</h2>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A node is a discrete unit of functionality that performs a specific action within a workflow. 
              Nodes can fetch data from APIs, transform data, send emails, integrate with AI models, or control 
              the flow of execution.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Each node has inputs (data it receives) and outputs (data it produces). Nodes are connected 
              together to form workflows, with the output of one node becoming the input to the next.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Node Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3">⚡ Trigger Nodes</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Start workflows automatically or manually. Examples: Manual trigger, Webhooks, Scheduled triggers.
              </p>
              <Link href="/docs/nodes/triggers" className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                Explore Triggers →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3">🤖 AI & ML Nodes</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Integrate AI models for text, images, and analysis. Examples: AI Chat, Sentiment Analysis.
              </p>
              <Link href="/docs/nodes/ai" className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                Explore AI Nodes →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3">🗂️ Data Nodes</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Fetch and process data from APIs and databases. Examples: HTTP Request, JSON Parse, Database.
              </p>
              <Link href="/docs/nodes/data" className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                Explore Data Nodes →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3">🔀 Logic Nodes</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Control workflow execution with conditions and loops. Examples: IF/Else, Switch, Loop.
              </p>
              <Link href="/docs/nodes/logic" className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline">
                Explore Logic Nodes →
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Anatomy of a Node</h2>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Node Type</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Identifies what the node does (e.g., "HTTP Request", "Send Email", "AI Chat")
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Configuration</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Settings that define how the node behaves (e.g., API URL, email recipient, model type)
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Inputs</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Data the node receives from previous nodes or the workflow trigger
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Outputs</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Data the node produces that can be used by subsequent nodes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="p-8 rounded-xl bg-gradient-to-r from-purple-100 dark:from-purple-500/10 to-blue-100 dark:to-blue-500/10 border border-purple-200 dark:border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Explore All Available Nodes</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Browse our complete library of 35+ nodes organized by category.
            </p>
            <Link
              href="/docs/nodes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 dark:bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-700 text-white rounded-lg font-semibold transition-all"
            >
              View All Nodes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
