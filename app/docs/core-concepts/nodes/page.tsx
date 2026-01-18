import Link from 'next/link';
import { Code, Zap, Database, Bot, Mail, GitBranch, Settings, Copy } from 'lucide-react';

export default function NodesConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-white">Nodes</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Core Concept</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Nodes</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Nodes are the building blocks of workflows. Each node performs a specific action like sending 
            an email, calling an API, processing data, or running AI models. Connect them together to 
            build powerful automations.
          </p>
        </div>

        {/* What is a Node */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What is a Node?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A node is a self-contained unit that performs a single, well-defined task in your workflow. 
            Think of nodes as LEGO blocks—each one does something specific, and by combining them in 
            different ways, you can build complex automations.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <div className="text-3xl mb-3">📥</div>
              <h3 className="text-lg font-bold mb-2">Inputs</h3>
              <p className="text-gray-400 text-sm">
                Receive data from previous nodes or workflow inputs
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-lg font-bold mb-2">Process</h3>
              <p className="text-gray-400 text-sm">
                Execute the node's specific function or transformation
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <div className="text-3xl mb-3">📤</div>
              <h3 className="text-lg font-bold mb-2">Outputs</h3>
              <p className="text-gray-400 text-sm">
                Send processed data to the next nodes in the workflow
              </p>
            </div>
          </div>
        </section>

        {/* Node Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Node Categories</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Trigger Nodes</h3>
                  <p className="text-gray-400 mb-4">
                    Start your workflows automatically or on-demand. Every workflow needs exactly one trigger node.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Manual Trigger</div>
                      <div className="text-gray-400 text-xs">Run on demand</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Webhook</div>
                      <div className="text-gray-400 text-xs">HTTP endpoints</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Schedule</div>
                      <div className="text-gray-400 text-xs">Cron or interval</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">AI Nodes</h3>
                  <p className="text-gray-400 mb-4">
                    Integrate powerful AI models for chat, text generation, image analysis, and sentiment detection.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">AI Chat</div>
                      <div className="text-gray-400 text-xs">GPT, Claude, Llama</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Image Analysis</div>
                      <div className="text-gray-400 text-xs">Vision models</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Sentiment</div>
                      <div className="text-gray-400 text-xs">Analyze emotions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Data Nodes</h3>
                  <p className="text-gray-400 mb-4">
                    Fetch, query, and manipulate data from APIs, databases, files, and external services.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">HTTP Request</div>
                      <div className="text-gray-400 text-xs">API calls</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Database</div>
                      <div className="text-gray-400 text-xs">SQL queries</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Upload File</div>
                      <div className="text-gray-400 text-xs">CSV, Excel, JSON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Transform Nodes</h3>
                  <p className="text-gray-400 mb-4">
                    Transform, filter, sort, and restructure your data to fit your needs.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Code</div>
                      <div className="text-gray-400 text-xs">Custom JavaScript</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Filter</div>
                      <div className="text-gray-400 text-xs">Conditional filtering</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Data Mapper</div>
                      <div className="text-gray-400 text-xs">Restructure data</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Logic Nodes</h3>
                  <p className="text-gray-400 mb-4">
                    Control workflow execution with conditional branching, switches, and loops.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">IF</div>
                      <div className="text-gray-400 text-xs">Conditional routing</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Switch</div>
                      <div className="text-gray-400 text-xs">Multiple branches</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Loop</div>
                      <div className="text-gray-400 text-xs">Iterate items</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Communication Nodes</h3>
                  <p className="text-gray-400 mb-4">
                    Send messages via email, Slack, SMS, and other communication channels.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Send Email</div>
                      <div className="text-gray-400 text-xs">SMTP integration</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Slack</div>
                      <div className="text-gray-400 text-xs">Send messages</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5">
                      <div className="font-semibold mb-1">Webhook</div>
                      <div className="text-gray-400 text-xs">HTTP callbacks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Node Properties */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Node Properties</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Each node has configurable properties that determine its behavior. Properties can be static 
            values or dynamic expressions that reference data from previous nodes.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold">Example: HTTP Request Node</h3>
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-2">URL (required)</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    https://api.example.com/users
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-400 mb-2">Method</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    GET
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-400 mb-2">Headers (JSON)</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  {`{ "Authorization": "Bearer {{$node.auth.data.token}}" }`}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-400 mb-2">Query Parameters</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  {`{ "page": 1, "limit": 10 }`}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Input & Output */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Node Input & Output</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📥</span>
                Input Data
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Nodes receive input data from connected nodes. This data is accessible in the node's 
                configuration using expressions.
              </p>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                {`{{$prev.data.userId}}`}
              </div>
              <p className="text-xs text-gray-500 mt-2">Access previous node's data</p>
            </div>

            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📤</span>
                Output Data
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                After execution, nodes produce output data that can be used by subsequent nodes. 
                Output typically includes the processed result.
              </p>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 text-xs">
                {`{ data: {...}, metadata: {...} }`}
              </div>
              <p className="text-xs text-gray-500 mt-2">Standard output format</p>
            </div>
          </div>
        </section>

        {/* Reusable Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Reusable Nodes</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            You can use the same node type multiple times in a workflow. Each instance is independent 
            and can have different configurations.
          </p>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <h3 className="text-xl font-bold mb-6">Example: Multiple API Calls</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-40 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center text-sm font-semibold">
                  HTTP Request #1
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Fetch user data from API
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-40 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center text-sm font-semibold">
                  HTTP Request #2
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Fetch user's orders from different API
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-40 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center text-sm font-semibold">
                  HTTP Request #3
                </div>
                <span className="text-gray-400">→</span>
                <div className="flex-1 text-sm text-gray-400">
                  Send combined data to webhook
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Code Node */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Custom Code Node</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            For advanced use cases, use the Code node to write custom JavaScript. This gives you complete 
            flexibility to process data however you need.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-bold">Example Code Node</h3>
            </div>

            <div className="p-4 rounded-lg bg-black/30 text-sm font-mono overflow-x-auto">
              <pre className="text-gray-300">{`// Access input data via 'items'
const processedItems = items.map(item => ({
  ...item,
  fullName: \`\${item.firstName} \${item.lastName}\`,
  isActive: item.status === 'active',
  createdAt: new Date().toISOString()
}));

// Return the processed data
return processedItems;`}</pre>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Quick Reference</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Copy className="h-4 w-4 text-blue-400" />
                30+ Pre-built Nodes
              </h4>
              <p className="text-sm text-gray-400">
                Choose from triggers, AI, data, transform, logic, and communication nodes
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Settings className="h-4 w-4 text-purple-400" />
                Configurable Properties
              </h4>
              <p className="text-sm text-gray-400">
                Each node has properties to control its behavior and data processing
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-orange-400" />
                Dynamic Expressions
              </h4>
              <p className="text-sm text-gray-400">
                Use expressions to reference data from previous nodes
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-green-400" />
                Multiple Outputs
              </h4>
              <p className="text-sm text-gray-400">
                Some nodes support branching with multiple output paths
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <Link
            href="/docs/core-concepts/workflows"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <span>←</span>
            <span>Workflows</span>
          </Link>
          
          <Link
            href="/docs/core-concepts/connections"
            className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all"
          >
            <span>Next: Connections</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}