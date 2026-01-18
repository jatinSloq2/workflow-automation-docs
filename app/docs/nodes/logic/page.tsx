import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LogicNodesPage() {
  const nodes = [
    {
      title: 'IF/Else',
      description: 'Conditional branching based on rules and conditions',
      icon: '🔀',
      href: '/docs/nodes/logic/if',
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Switch',
      description: 'Route to multiple branches based on rules or expressions',
      icon: '🔄',
      href: '/docs/nodes/logic/switch',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Loop',
      description: 'Iterate over array items with batch processing support',
      icon: '🔁',
      href: '/docs/nodes/logic/loop',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Merge',
      description: 'Combine data from multiple branches into a single output',
      icon: '🔗',
      href: '/docs/nodes/logic/merge',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/nodes" className="hover:text-white">Nodes</Link>
          <span>/</span>
          <span className="text-white">Logic & Flow Control</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm text-purple-300">⚡ Logic & Flow</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Logic & Flow Control Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Control workflow execution with conditional branching, loops, and merging. 
            Create complex automation logic with IF/Else, Switch, and Loops.
          </p>
        </div>

        {/* Available Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Control Flow Nodes</h2>
          
          <div className="space-y-6">
            {nodes.map((node) => (
              <Link
                key={node.href}
                href={node.href}
                className="group relative overflow-hidden rounded-2xl block"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${node.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl flex-shrink-0">{node.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed mb-4">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Flow Patterns */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Common Flow Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-pink-400">🔀 Simple Branching</h3>
              <p className="text-gray-400 text-sm mb-4">
                Use IF/Else to split workflow into two paths based on a condition.
              </p>
              <div className="bg-black/30 p-3 rounded text-xs text-gray-300 font-mono">
                IF (status == "active") → Process
                ELSE → Skip
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 hover:border-red-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-red-400">🔄 Multi-way Routing</h3>
              <p className="text-gray-400 text-sm mb-4">
                Use Switch to route to one of many paths based on different conditions.
              </p>
              <div className="bg-black/30 p-3 rounded text-xs text-gray-300 font-mono">
                SWITCH (priority) →
                "high" | "medium" | "low"
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-purple-400">🔁 Iteration</h3>
              <p className="text-gray-400 text-sm mb-4">
                Use Loop to process each item in an array with batch processing.
              </p>
              <div className="bg-black/30 p-3 rounded text-xs text-gray-300 font-mono">
                LOOP over items
                Process in batches
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/20 hover:border-teal-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-teal-400">🔗 Merging Paths</h3>
              <p className="text-gray-400 text-sm mb-4">
                Use Merge to combine data from multiple branches back together.
              </p>
              <div className="bg-black/30 p-3 rounded text-xs text-gray-300 font-mono">
                MERGE [branch1, branch2]
                → Combined output
              </div>
            </div>
          </div>
        </section>

        {/* Additional Flow Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Additional Flow Control</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/docs/nodes/flow/delay" className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/50 transition-all group">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold mb-2 text-orange-400 group-hover:text-orange-300 transition-colors">Wait/Delay</h3>
              <p className="text-sm text-gray-400">Pause execution for a specified duration</p>
              <div className="flex items-center gap-2 text-orange-400 font-semibold mt-4 text-sm group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>

            <Link href="/docs/nodes/transform/filter" className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/50 transition-all group">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold mb-2 text-pink-400 group-hover:text-pink-300 transition-colors">Filter</h3>
              <p className="text-sm text-gray-400">Filter items based on conditions</p>
              <div className="flex items-center gap-2 text-pink-400 font-semibold mt-4 text-sm group-hover:gap-3 transition-all">
                <span>Learn more</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Keep Logic Clear</h4>
              <p className="text-sm text-gray-300">
                Use meaningful condition names and comments for complex branching logic.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Avoid Deep Nesting</h4>
              <p className="text-sm text-gray-300">
                Limit nested conditionals. Use Switch for many alternatives.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Merge After Branching</h4>
              <p className="text-sm text-gray-300">
                Always merge branches back together if they need to continue as one path.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ Be Careful with Loops</h4>
              <p className="text-sm text-gray-300">
                Large loops can be resource intensive. Use batching and delays as needed.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Master Control Flow</h3>
          <p className="text-gray-300 mb-6">
            Learn to create sophisticated workflows with branching and loops:
          </p>
          <div className="flex flex-wrap gap-3">
            {nodes.slice(0, 3).map((node) => (
              <Link 
                key={node.href}
                href={node.href} 
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <span>{node.icon}</span>
                {node.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
