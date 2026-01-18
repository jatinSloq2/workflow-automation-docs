import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DataNodesPage() {
  const nodes = [
    {
      title: 'HTTP Request',
      description: 'Make HTTP API calls to fetch or send data',
      icon: '🌐',
      href: '/docs/nodes/data/http-request',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'JSON Parse',
      description: 'Parse and transform JSON data',
      icon: '📋',
      href: '/docs/nodes/data/json-parse',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database',
      description: 'Query and manage databases (MySQL, PostgreSQL, MongoDB)',
      icon: '🗄️',
      href: '/docs/nodes/data/database',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Upload File',
      description: 'Process uploaded files (CSV, Excel, JSON)',
      icon: '📤',
      href: '/docs/nodes/data/upload-file',
      color: 'from-yellow-500 to-orange-500',
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
          <span className="text-white">Data</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="text-sm text-orange-300">🗂️ Data Nodes</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Data & API Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Connect to external data sources, APIs, and databases. Fetch, transform, and manipulate data 
            from any service to power your automated workflows.
          </p>
        </div>

        {/* Available Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Core Data Operations</h2>
          
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
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed mb-4">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all">
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

        {/* Transform Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Transform & Process</h2>
          <p className="text-gray-400 mb-6">Additional nodes for transforming and processing data:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/docs/nodes/transform/data-mapper" className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all group">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">Data Mapper</h3>
              <p className="text-sm text-gray-400">Map and transform data structures</p>
            </Link>

            <Link href="/docs/nodes/transform/aggregate" className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all group">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors">Aggregate</h3>
              <p className="text-sm text-gray-400">Calculate sums, averages, and group data</p>
            </Link>

            <Link href="/docs/nodes/transform/filter" className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/50 transition-all group">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold mb-2 text-pink-400 group-hover:text-pink-300 transition-colors">Filter</h3>
              <p className="text-sm text-gray-400">Filter items based on conditions</p>
            </Link>

            <Link href="/docs/nodes/transform/sort" className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/50 transition-all group">
              <div className="text-3xl mb-3">🔃</div>
              <h3 className="text-lg font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors">Sort</h3>
              <p className="text-sm text-gray-400">Sort items by field and order</p>
            </Link>

            <Link href="/docs/nodes/transform/code" className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">Code</h3>
              <p className="text-sm text-gray-400">Run custom JavaScript code</p>
            </Link>

            <Link href="/docs/nodes/transform/limit" className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 hover:border-indigo-500/50 transition-all group">
              <div className="text-3xl mb-3">✂️</div>
              <h3 className="text-lg font-bold mb-2 text-indigo-400 group-hover:text-indigo-300 transition-colors">Limit</h3>
              <p className="text-sm text-gray-400">Limit number of items</p>
            </Link>
          </div>
        </section>

        {/* Common Workflows */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Common Data Workflows</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-blue-400">🔄 API Integration</h3>
              <ol className="text-gray-400 text-sm space-y-2 list-decimal list-inside">
                <li>Make HTTP request to API</li>
                <li>Parse JSON response</li>
                <li>Transform data for use</li>
                <li>Store or send results</li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-green-400">📊 Data Processing</h3>
              <ol className="text-gray-400 text-sm space-y-2 list-decimal list-inside">
                <li>Upload or fetch data</li>
                <li>Filter and aggregate</li>
                <li>Apply transformations</li>
                <li>Export or save results</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Validate API Responses</h4>
              <p className="text-sm text-gray-300">
                Always check response status and data format before processing.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Handle Large Datasets</h4>
              <p className="text-sm text-gray-300">
                Use filter and limit nodes to manage large data before processing.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Cache API Results</h4>
              <p className="text-sm text-gray-300">
                Store frequently accessed data to reduce API calls and improve performance.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Expose Secrets</h4>
              <p className="text-sm text-gray-300">
                Keep API keys and database passwords secure using environment variables.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
          <h3 className="text-2xl font-bold mb-4">Start with Data Nodes</h3>
          <p className="text-gray-300 mb-6">
            Choose a data operation to learn how to fetch, transform, and manage data:
          </p>
          <div className="flex flex-wrap gap-3">
            {nodes.slice(0, 3).map((node) => (
              <Link 
                key={node.href}
                href={node.href} 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all flex items-center gap-2"
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
