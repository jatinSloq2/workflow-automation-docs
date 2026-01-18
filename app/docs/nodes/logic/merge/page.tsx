import Link from 'next/link';

export default function MergeNodePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/nodes" className="hover:text-white">Nodes</Link>
          <span>/</span>
          <Link href="/docs/nodes/logic" className="hover:text-white">Logic</Link>
          <span>/</span>
          <span className="text-white">Merge</span>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔗</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Merge Node
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Combine data from multiple branches or inputs into a single output
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <section id="configuration">
          <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'mode', type: 'Select', desc: 'append (combine arrays), merge (merge objects), keepKeyMatches' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-teal-400 bg-teal-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
                    </td>
                    <td className="py-4 px-6 text-gray-300 text-sm">{row.type}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modes */}
        <section id="modes">
          <h2 className="text-3xl font-black mb-6 text-white">Merge Modes</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Append Mode</h3>
              <p className="text-gray-400 mb-4">Flattens all input arrays into a single array</p>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div className="text-gray-400">Input:</div>
                <div>Branch 1: [1, 2, 3]</div>
                <div>Branch 2: [4, 5]</div>
                <div className="mt-2 text-gray-400">Output:</div>
                <div>[1, 2, 3, 4, 5]</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Merge Mode</h3>
              <p className="text-gray-400 mb-4">Merges all input objects into a single object</p>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300 text-xs">
                <div className="text-gray-400">Input:</div>
                <div>Branch 1: {'{ name: "John", age: 30 }'}</div>
                <div>Branch 2: {'{ email: "john@example.com" }'}</div>
                <div className="mt-2 text-gray-400">Output:</div>
                <div>{'{ name: "John", age: 30, email: "john@example.com" }'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases">
          <h2 className="text-3xl font-black mb-6 text-white">Common Use Cases</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-teal-500 bg-teal-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-teal-400">Combine Multiple Data Sources</h4>
              <p className="text-sm text-gray-300">
                Merge results from multiple API calls into a single dataset.
              </p>
            </div>

            <div className="p-5 border-l-4 border-cyan-500 bg-cyan-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-cyan-400">Join Branch Results</h4>
              <p className="text-sm text-gray-300">
                Combine outputs from if/else or switch nodes back into a single stream.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
