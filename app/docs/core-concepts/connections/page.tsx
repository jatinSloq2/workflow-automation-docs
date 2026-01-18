import Link from 'next/link';
import { GitBranch, ArrowRight, Split, Repeat, Zap } from 'lucide-react';

export default function ConnectionsConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-white">Connections</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <GitBranch className="h-4 w-4 text-green-400" />
            <span className="text-sm text-green-300">Core Concept</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Connections</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Connections link nodes together to define the flow of data and the order of execution in 
            your workflow. They're the "wires" that connect your automation components.
          </p>
        </div>

        {/* What are Connections */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What are Connections?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            A connection is a directional link between two nodes. Data flows from a source node's output 
            to a target node's input. Connections determine both the execution order and how data is 
            passed through your workflow.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <ArrowRight className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Data Flow</h3>
              <p className="text-gray-400 text-sm">
                Output data from one node becomes the input for the next node, creating a continuous 
                flow of information through your workflow.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <Zap className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Execution Order</h3>
              <p className="text-gray-400 text-sm">
                Connections define the sequence in which nodes execute. A node only runs after all 
                its input nodes have completed.
              </p>
            </div>
          </div>
        </section>

        {/* Connection Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Connection Types</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">→</span>
                Linear Connection
              </h3>
              <p className="text-gray-400 mb-4">
                The simplest connection type. Data flows from one node directly to the next in a 
                straight line. This is the most common pattern for sequential operations.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30">
                <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-sm font-semibold">
                  Node A
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
                <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-sm font-semibold">
                  Node B
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400" />
                <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-sm font-semibold">
                  Node C
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Split className="h-6 w-6" />
                Branching Connection
              </h3>
              <p className="text-gray-400 mb-4">
                Used with IF or Switch nodes to route data down different paths based on conditions. 
                Only the branch that matches the condition executes.
              </p>
              
              <div className="p-4 rounded-lg bg-black/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="px-4 py-2 rounded-lg bg-pink-500/20 border border-pink-500/30 text-sm font-semibold min-w-[100px] text-center">
                    IF Node
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded bg-green-500/20 text-xs font-semibold text-green-400">true</div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-xs font-semibold">
                        Send Email
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 rounded bg-red-500/20 text-xs font-semibold text-red-400">false</div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <div className="px-3 py-1 rounded-lg bg-red-500/20 border border-red-500/30 text-xs font-semibold">
                        Log Error
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Repeat className="h-6 w-6" />
                Loop Connection
              </h3>
              <p className="text-gray-400 mb-4">
                Loop nodes process arrays by iterating over items. The loop output connects back 
                to process each item, then continues when done.
              </p>
              
              <div className="p-4 rounded-lg bg-black/30">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-sm font-semibold min-w-[120px] text-center">
                      Loop Node
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded bg-blue-500/20 text-xs font-semibold text-blue-400">loop</div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                        <div className="px-3 py-1 rounded-lg bg-blue-500/20 border border-blue-500/30 text-xs">
                          Process Item
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 rounded bg-green-500/20 text-xs font-semibold text-green-400">done</div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                        <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-xs">
                          Next Node
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Multiple Inputs
              </h3>
              <p className="text-gray-400 mb-4">
                Some nodes can receive data from multiple sources. The Merge node, for example, 
                combines data from different branches.
              </p>
              
              <div className="p-4 rounded-lg bg-black/30">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-xs font-semibold text-center">
                      Node A
                    </div>
                    <div className="px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-xs font-semibold text-center">
                      Node B
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-sm font-semibold">
                    Merge Node
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                  <div className="px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-sm font-semibold">
                    Next Node
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Connections */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Creating Connections</h2>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <h3 className="text-lg font-bold mb-4">How to Connect Nodes</h3>
            
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="font-semibold mb-1">Hover over a node</p>
                  <p className="text-sm text-gray-400">Small circles (handles) appear on the left and right sides</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="font-semibold mb-1">Click and drag from output handle</p>
                  <p className="text-sm text-gray-400">The output handle is on the right side of the source node</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="font-semibold mb-1">Release on input handle</p>
                  <p className="text-sm text-gray-400">Drop the connection on the input handle (left side) of the target node</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">4</span>
                <div>
                  <p className="font-semibold mb-1">Connection created</p>
                  <p className="text-sm text-gray-400">A line appears connecting the two nodes, showing the data flow</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Understanding Data Flow</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            When a workflow executes, data flows through connections from node to node. Each node 
            processes the input it receives and produces output for the next node.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold mb-4">Example Data Flow</h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-l-4 border-blue-500">
                  <div className="font-semibold text-blue-400 mb-2">Step 1: HTTP Request</div>
                  <div className="text-sm text-gray-400 mb-2">Fetches user data from API</div>
                  <div className="p-3 rounded bg-black/30 text-xs font-mono">
                    {`Output: { id: 1, name: "John Doe", email: "john@example.com" }`}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-purple-500/5 border-l-4 border-purple-500">
                  <div className="font-semibold text-purple-400 mb-2">Step 2: AI Chat</div>
                  <div className="text-sm text-gray-400 mb-2">Generates personalized greeting using previous data</div>
                  <div className="p-3 rounded bg-black/30 text-xs font-mono">
                    {`Input: {{$prev.data.name}}\nOutput: "Hello John Doe! Welcome back!"`}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-green-500/5 border-l-4 border-green-500">
                  <div className="font-semibold text-green-400 mb-2">Step 3: Send Email</div>
                  <div className="text-sm text-gray-400 mb-2">Emails the greeting to the user</div>
                  <div className="p-3 rounded bg-black/30 text-xs font-mono">
                    {`To: {{$node.http_1.data.email}}\nBody: {{$prev.data.response}}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connection Rules */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Connection Rules</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <h3 className="text-lg font-bold mb-3 text-green-400">✓ Valid Connections</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>One node to another (creates linear flow)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>One node to multiple nodes (branching)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Multiple nodes to one node (merging)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>IF/Switch nodes with labeled outputs</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="text-lg font-bold mb-3 text-red-400">✗ Invalid Connections</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Circular loops (except with Loop nodes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Connecting to a trigger node (triggers are always first)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Disconnected nodes (all nodes must be connected)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Output to output or input to input</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">📐</span>
                Keep It Organized
              </h3>
              <p className="text-sm text-gray-400">
                Arrange nodes in a logical left-to-right flow. Avoid crossing connections when possible 
                to make your workflow easier to understand.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🏷️</span>
                Label Your Branches
              </h3>
              <p className="text-sm text-gray-400">
                When using IF or Switch nodes, make sure the branch labels (true/false, case1/case2) 
                clearly indicate the logic path.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Test Data Flow
              </h3>
              <p className="text-sm text-gray-400">
                After creating connections, execute your workflow and verify that data flows correctly 
                from node to node. Check each node's output.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Handle All Branches
              </h3>
              <p className="text-sm text-gray-400">
                When using conditional logic, make sure all possible branches are connected to prevent 
                workflow execution from ending unexpectedly.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <Link
            href="/docs/core-concepts/nodes"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <span>←</span>
            <span>Nodes</span>
          </Link>
          
          <Link
            href="/docs/core-concepts/executions"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-all"
          >
            <span>Next: Executions</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}