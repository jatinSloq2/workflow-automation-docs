import Link from 'next/link';
import { Zap, MousePointer, Plus, Settings, Play, Eye } from 'lucide-react';

export default function QuickStartPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/getting-started" className="hover:text-white">Getting Started</Link>
          <span>/</span>
          <span className="text-white">Quick Start</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Zap className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Quick Start • 5 minutes</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Quick Start Guide</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Learn the WorkflowHub interface and create your first workflow in under 5 minutes. 
            This hands-on tutorial will get you familiar with the basics.
          </p>
        </div>

        {/* What You'll Build */}
        <div className="mb-12 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            What You'll Build
          </h3>
          <p className="text-gray-300 mb-4">
            A simple workflow that fetches random user data from an API and displays it. Perfect for 
            learning the interface without worrying about configuration.
          </p>
          
          <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30">
            <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-sm font-semibold text-center">
              Manual Trigger
            </div>
            <span className="text-gray-400">→</span>
            <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-sm font-semibold text-center">
              HTTP Request
            </div>
            <span className="text-gray-400">→</span>
            <div className="text-sm text-gray-400">
              View Result
            </div>
          </div>
        </div>

        {/* Step 1: Access WorkflowHub */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-black text-xl">
              1
            </div>
            <h2 className="text-3xl font-black">Access WorkflowHub</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              If you haven't already, make sure WorkflowHub is running and open it in your browser.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Open your browser and navigate to:</div>
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <code className="text-lg font-mono text-green-400">http://localhost:3000</code>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">Login with default credentials:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono">
                    <div className="mb-1">Email: admin@workflowhub.local</div>
                    <div>Password: admin123</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-3">
              <MousePointer className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-blue-400 mb-1">After Login</p>
                <p className="text-sm text-gray-400">
                  You'll see the dashboard with a list of workflows (empty if this is your first time).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Create New Workflow */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 font-black text-xl">
              2
            </div>
            <h2 className="text-3xl font-black">Create a New Workflow</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Let's create your first workflow. This is where the magic begins!
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Plus className="h-5 w-5 text-purple-400" />
                Creating the Workflow
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">1.</span>
                  <span>Click the <strong className="text-white">"+ New Workflow"</strong> button in the top right</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">2.</span>
                  <span>Enter a name: <code className="px-2 py-1 rounded bg-white/10">"My First Workflow"</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">3.</span>
                  <span>(Optional) Add a description: <code className="px-2 py-1 rounded bg-white/10">"Learning WorkflowHub basics"</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">4.</span>
                  <span>Click <strong className="text-white">"Create"</strong></span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h4 className="font-bold mb-3">Understanding the Canvas</h4>
              <p className="text-sm text-gray-400 mb-4">
                You're now on the workflow canvas—your visual programming environment. Here you'll see:
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-black/30">
                  <div className="font-semibold text-blue-400 mb-1">Canvas Area</div>
                  <div className="text-gray-400 text-xs">Where you drag and connect nodes</div>
                </div>
                <div className="p-3 rounded-lg bg-black/30">
                  <div className="font-semibold text-purple-400 mb-1">Node Panel</div>
                  <div className="text-gray-400 text-xs">Browse available nodes (left side)</div>
                </div>
                <div className="p-3 rounded-lg bg-black/30">
                  <div className="font-semibold text-green-400 mb-1">Properties Panel</div>
                  <div className="text-gray-400 text-xs">Configure selected nodes (right side)</div>
                </div>
                <div className="p-3 rounded-lg bg-black/30">
                  <div className="font-semibold text-orange-400 mb-1">Toolbar</div>
                  <div className="text-gray-400 text-xs">Execute, save, and manage (top)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Add Trigger Node */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 font-black text-xl">
              3
            </div>
            <h2 className="text-3xl font-black">Add a Trigger Node</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Every workflow needs a trigger to start execution. We'll use a Manual Trigger so you 
              can run the workflow whenever you want.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Plus className="h-5 w-5 text-green-400" />
                Adding the Trigger
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">1.</span>
                  <span>Click the <strong className="text-white">"+ Add Node"</strong> button or press <kbd className="px-2 py-1 rounded bg-white/10 text-xs">A</kbd></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">2.</span>
                  <span>In the search box, type <code className="px-2 py-1 rounded bg-white/10">"manual"</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">3.</span>
                  <span>Click on <strong className="text-white">"Manual Trigger"</strong> from the results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">4.</span>
                  <span>The node appears in the center of your canvas</span>
                </li>
              </ol>
            </div>

            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-xl">
                  ▶️
                </div>
                <div>
                  <div className="font-semibold text-green-400">Manual Trigger</div>
                  <div className="text-xs text-gray-400">Manually start the workflow</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Add HTTP Request */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-black text-xl">
              4
            </div>
            <h2 className="text-3xl font-black">Add HTTP Request Node</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Now let's add a node that fetches data from an API. We'll use a free API that returns 
              random user data—no API key required!
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Plus className="h-5 w-5 text-blue-400" />
                Adding HTTP Request
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">1.</span>
                  <span>Click <strong className="text-white">"+ Add Node"</strong> again</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">2.</span>
                  <span>Search for <code className="px-2 py-1 rounded bg-white/10">"http"</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">3.</span>
                  <span>Click on <strong className="text-white">"HTTP Request"</strong></span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-400" />
                Configure the HTTP Request
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Click on the HTTP Request node to open its properties panel. Set the following:
              </p>
              
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-400 mb-2">URL:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    https://randomuser.me/api/
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-2">Method:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    GET (default, no need to change)
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                💡 This API returns random user data (name, email, photo, etc.) - perfect for testing!
              </p>
            </div>
          </div>
        </section>

        {/* Step 5: Connect Nodes */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 font-black text-xl">
              5
            </div>
            <h2 className="text-3xl font-black">Connect the Nodes</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Now connect the trigger to the HTTP Request so data flows from one to the other.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <MousePointer className="h-5 w-5 text-orange-400" />
                Creating the Connection
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">1.</span>
                  <span>Hover over the <strong className="text-white">Manual Trigger</strong> node</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">2.</span>
                  <span>You'll see small circles appear—these are connection handles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">3.</span>
                  <span>Click and drag from the <strong className="text-white">right handle</strong> (output)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">4.</span>
                  <span>Release on the <strong className="text-white">left handle</strong> (input) of the HTTP Request node</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30">
                <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-sm font-semibold">
                  Manual Trigger
                </div>
                <div className="text-orange-400 text-xl">→</div>
                <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-sm font-semibold">
                  HTTP Request
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                You should now see a line connecting the two nodes!
              </p>
            </div>
          </div>
        </section>

        {/* Step 6: Execute Workflow */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 font-black text-xl">
              6
            </div>
            <h2 className="text-3xl font-black">Execute Your Workflow</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Time to see your workflow in action! Let's run it and view the results.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Play className="h-5 w-5 text-indigo-400" />
                Running the Workflow
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">1.</span>
                  <span>Click the <strong className="text-white">"Execute Workflow"</strong> button in the top toolbar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">2.</span>
                  <span>Watch the nodes light up as they execute (green = success)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">3.</span>
                  <span>When finished, both nodes should have green checkmarks ✓</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Eye className="h-5 w-5 text-green-400" />
                View the Results
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Click on the HTTP Request node to see the data it fetched:
              </p>
              
              <div className="p-4 rounded-lg bg-black/30 text-xs font-mono text-gray-300 overflow-x-auto">
                {`{
  "results": [{
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "email": "john.doe@example.com",
    "phone": "(123) 456-7890",
    "picture": {
      "large": "https://..."
    }
  }]
}`}
              </div>

              <p className="text-xs text-gray-400 mt-3">
                🎉 You just fetched real data from an API using WorkflowHub!
              </p>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What's Next?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Congratulations! You've created and executed your first workflow. Now let's build something 
            more practical with multiple nodes and real-world use cases.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/getting-started/first-workflow"
              className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">
                Build Your First Real Workflow →
              </h3>
              <p className="text-sm text-gray-400">
                Create a workflow that fetches data, processes it with AI, and sends email results
              </p>
            </Link>

            <Link
              href="/docs/core-concepts"
              className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all group"
            >
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                Learn Core Concepts →
              </h3>
              <p className="text-sm text-gray-400">
                Understand workflows, nodes, connections, and expressions in depth
              </p>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <Link
            href="/docs/getting-started/installation"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <span>←</span>
            <span>Installation</span>
          </Link>
          
          <Link
            href="/docs/getting-started/first-workflow"
            className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all"
          >
            <span>Next: First Workflow</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}