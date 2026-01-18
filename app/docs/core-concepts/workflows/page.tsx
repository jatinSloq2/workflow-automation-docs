import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-gray-700 dark:hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-gray-700 dark:hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Workflows</span>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
            Workflows
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            A workflow is the core building block of automation. It represents a sequence of connected nodes 
            that work together to automate a process, respond to events, or orchestrate complex business logic.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">What is a Workflow?</h2>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A workflow is a visual representation of an automated process. It consists of nodes (tasks/actions) 
              connected by edges (connections) that define the flow of data and execution between nodes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Workflows can be triggered manually, on a schedule, or by external events like webhooks. 
              Once started, the workflow executes its nodes in the order defined by their connections.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Key Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">Nodes</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Individual tasks or actions. Each node performs a specific function like fetching data, 
                sending emails, or processing information.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Connections</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Links between nodes that define the data flow and execution order. 
                Data flows from one node to the next through connections.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-green-600 dark:text-green-400">Triggers</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                The starting point of a workflow. Defines how and when the workflow begins execution - 
                manually, on schedule, or via webhook.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-pink-600 dark:text-pink-400">Execution</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                A single run of the workflow. Each execution processes data through all nodes 
                and records the results and any errors.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Workflow Structure</h2>
          <div className="p-8 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-purple-500 dark:bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 dark:text-white">Trigger</h4>
                  <p className="text-gray-600 dark:text-gray-400">Specifies when the workflow should start (manual, schedule, or webhook)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-500 dark:bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 dark:text-white">Nodes</h4>
                  <p className="text-gray-600 dark:text-gray-400">Connected tasks that fetch data, transform it, or perform actions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-green-500 dark:bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 dark:text-white">Output</h4>
                  <p className="text-gray-600 dark:text-gray-400">The result of the workflow execution, which can be viewed or used elsewhere</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="p-8 rounded-xl bg-gradient-to-r from-purple-100 dark:from-purple-500/10 to-blue-100 dark:to-blue-500/10 border border-purple-200 dark:border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your First Workflow?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Start with our getting started guide to learn how to create and execute your first workflow.
            </p>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 dark:bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-700 text-white rounded-lg font-semibold transition-all"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
