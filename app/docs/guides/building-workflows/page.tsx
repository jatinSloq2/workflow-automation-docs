import Link from 'next/link';
import { Wrench, Plus, Link2, Settings, Play, Save, AlertCircle } from 'lucide-react';

export default function BuildingWorkflowsGuide() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/guides" className="hover:text-white">Guides</Link>
          <span>/</span>
          <span className="text-white">Building Workflows</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Wrench className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-orange-300">Beginner Guide • 15 min</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Building Your First Workflow</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Learn the fundamentals of creating, connecting, and executing workflows in WorkflowHub. 
            By the end of this guide, you'll build a complete workflow that fetches data, processes it, 
            and sends results via email.
          </p>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12 p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            What You'll Learn
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-blue-400">✓</span>
              Creating your first workflow
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-blue-400">✓</span>
              Adding and connecting nodes
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-blue-400">✓</span>
              Configuring node properties
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-blue-400">✓</span>
              Testing and debugging
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-blue-400">✓</span>
              Saving and versioning
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span className="text-blue-400">✓</span>
              Best practices
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-black text-xl">
              1
            </div>
            <h2 className="text-3xl font-black">Create a New Workflow</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Start by creating a new workflow from the dashboard. Give it a descriptive name that 
              clearly indicates its purpose.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Plus className="h-5 w-5 text-blue-400" />
                Steps
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">1.</span>
                  <span>Click the "Create Workflow" button on your dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">2.</span>
                  <span>Enter a workflow name (e.g., "Daily Data Processing Pipeline")</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">3.</span>
                  <span>Optionally add a description to explain what this workflow does</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400 min-w-[20px]">4.</span>
                  <span>Click "Create" to open the workflow canvas</span>
                </li>
              </ol>
            </div>

            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-yellow-400 mb-1">Naming Tip</p>
                <p className="text-sm text-gray-400">
                  Use clear, action-oriented names like "Process Customer Orders" or "Generate Weekly Reports" 
                  instead of vague names like "Workflow 1".
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 font-black text-xl">
              2
            </div>
            <h2 className="text-3xl font-black">Add Your First Node</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Every workflow needs a trigger node to start the execution. Let's add a Manual Trigger 
              that allows you to run the workflow on demand.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3">Adding Nodes</h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">1.</span>
                  <span>Click the "+ Add Node" button in the canvas or press <kbd className="px-2 py-1 rounded bg-white/10 text-xs">A</kbd></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">2.</span>
                  <span>Browse or search for "Manual Trigger" in the node picker</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">3.</span>
                  <span>Click on the node to add it to your canvas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-purple-400 min-w-[20px]">4.</span>
                  <span>The node will appear in the center of your canvas</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h4 className="font-bold mb-3 text-green-400">Node Categories</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-gray-300 mb-2">Triggers</div>
                  <p className="text-gray-400">Start workflows (Manual, Webhook, Schedule)</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-300 mb-2">Data</div>
                  <p className="text-gray-400">HTTP, Database, File operations</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-300 mb-2">AI</div>
                  <p className="text-gray-400">AI Chat, Text Generation, Analysis</p>
                </div>
                <div>
                  <div className="font-semibold text-gray-300 mb-2">Logic</div>
                  <p className="text-gray-400">IF, Switch, Loop controls</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 font-black text-xl">
              3
            </div>
            <h2 className="text-3xl font-black">Connect Nodes Together</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Connections define the flow of data between nodes. Let's add an HTTP Request node 
              and connect it to our trigger.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Link2 className="h-5 w-5 text-orange-400" />
                Creating Connections
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">1.</span>
                  <span>Add an "HTTP Request" node from the Data category</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">2.</span>
                  <span>Hover over the Manual Trigger node to see connection handles (small circles)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">3.</span>
                  <span>Click and drag from the output handle (right side) of the trigger</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-orange-400 min-w-[20px]">4.</span>
                  <span>Release on the input handle (left side) of the HTTP Request node</span>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="font-bold text-sm text-blue-400 mb-2">Input Handles (Left)</div>
                <p className="text-xs text-gray-400">
                  Receive data from previous nodes. A node can have one or more input handles.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="font-bold text-sm text-green-400 mb-2">Output Handles (Right)</div>
                <p className="text-xs text-gray-400">
                  Send data to next nodes. Some nodes have multiple outputs for branching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 font-black text-xl">
              4
            </div>
            <h2 className="text-3xl font-black">Configure Node Properties</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Each node has properties that control its behavior. Let's configure our HTTP Request 
              node to fetch data from an API.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Settings className="h-5 w-5 text-green-400" />
                Configuring Nodes
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">1.</span>
                  <span>Click on the HTTP Request node to open its properties panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">2.</span>
                  <span>Set the URL to: <code className="px-2 py-1 rounded bg-black/30 text-xs">https://jsonplaceholder.typicode.com/users</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">3.</span>
                  <span>Leave Method as "GET" (default)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-green-400 min-w-[20px]">4.</span>
                  <span>Click outside the panel or press <kbd className="px-2 py-1 rounded bg-white/10 text-xs">Esc</kbd> to close</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h4 className="font-bold mb-3">Using Expressions</h4>
              <p className="text-sm text-gray-400 mb-4">
                You can reference data from previous nodes using expressions in curly braces:
              </p>
              <div className="space-y-2 text-sm font-mono">
                <div className="p-3 rounded bg-black/30 text-gray-300">
                  {`{{$node.trigger_1.data.email}}`}
                </div>
                <div className="p-3 rounded bg-black/30 text-gray-300">
                  {`{{$prev.data.userId}}`}
                </div>
                <div className="p-3 rounded bg-black/30 text-gray-300">
                  {`{{$input.customerName}}`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 font-black text-xl">
              5
            </div>
            <h2 className="text-3xl font-black">Test Your Workflow</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Before activating your workflow, test it to ensure everything works correctly. 
              You can see the output of each node and identify any errors.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Play className="h-5 w-5 text-indigo-400" />
                Running a Test
              </h4>
              <ol className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">1.</span>
                  <span>Click the "Execute Workflow" button in the top toolbar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">2.</span>
                  <span>Watch as nodes execute in sequence (they'll light up)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">3.</span>
                  <span>Click on any node to view its input and output data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-indigo-400 min-w-[20px]">4.</span>
                  <span>Check the execution log for any errors or warnings</span>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="font-bold text-sm text-green-400 mb-2">✓ Success</div>
                <p className="text-xs text-gray-400">
                  Nodes with successful execution show a green checkmark. View their output data in the node panel.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="font-bold text-sm text-red-400 mb-2">✗ Error</div>
                <p className="text-xs text-gray-400">
                  Failed nodes show a red X. Click to see the error message and stack trace for debugging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 6 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 font-black text-xl">
              6
            </div>
            <h2 className="text-3xl font-black">Save and Version</h2>
          </div>

          <div className="pl-16 space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Save your workflow regularly to prevent losing work. WorkflowHub automatically creates 
              versions so you can revert changes if needed.
            </p>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Save className="h-5 w-5 text-pink-400" />
                Saving Your Work
              </h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-pink-400">Auto-save:</span>
                  <span>WorkflowHub saves your changes automatically every 30 seconds</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-pink-400">Manual save:</span>
                  <span>Press <kbd className="px-2 py-1 rounded bg-white/10 text-xs">Ctrl+S</kbd> or click the Save button anytime</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-pink-400">Versions:</span>
                  <span>Access previous versions from the workflow settings menu</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Example */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Complete Example</h2>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Weather Report Workflow</h3>
            <p className="text-gray-400 mb-6">
              Here's a complete workflow that fetches weather data and sends a daily email report.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-center text-sm font-semibold">
                  Schedule
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Triggers every day at 7 AM
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center text-sm font-semibold">
                  HTTP Request
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  GET https://api.weather.com/data
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-center text-sm font-semibold">
                  AI Chat
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Generate friendly weather summary
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-center text-sm font-semibold">
                  Send Email
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Email report to subscribers
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-blue-400">Result:</span> Subscribers receive a 
                personalized weather report email every morning at 7 AM with AI-generated commentary.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Next Steps</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/guides/file-processing"
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-2">File Processing</h4>
              <p className="text-sm text-gray-400">
                Learn to upload and process CSV, Excel, and JSON files
              </p>
            </Link>
            
            <Link
              href="/docs/guides/ai-workflows"
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-2">AI Workflows</h4>
              <p className="text-sm text-gray-400">
                Build intelligent automations with AI models
              </p>
            </Link>
            
            <Link
              href="/docs/core-concepts/expressions"
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <h4 className="font-bold mb-2">Expressions</h4>
              <p className="text-sm text-gray-400">
                Master data referencing and dynamic values
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}