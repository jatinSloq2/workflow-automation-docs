import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AggregateNodePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/nodes" className="hover:text-white">Nodes</Link>
          <span>/</span>
          <Link href="/docs/nodes/transform" className="hover:text-white">Transform</Link>
          <span>/</span>
          <span className="text-white">Aggregate</span>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📊</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Aggregate Node
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Calculate aggregate functions on data like sum, average, count, min, max, and group data by field
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
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-blue-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'operation', type: 'Select', desc: 'sum, average, count, min, max, groupBy' },
                  { field: 'field', type: 'String', desc: 'Field name to aggregate on' },
                  { field: 'groupByField', type: 'String', desc: 'Field to group by (for groupBy operation)' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
                    </td>
                    <td className="py-4 px-6 text-gray-300 text-sm">{row.type}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples">
          <h2 className="text-3xl font-black mb-6 text-white">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Calculate Total Sales</h3>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div>Operation: sum</div>
                <div>Field: amount</div>
                <div className="mt-4 text-gray-400">Input:</div>
                <div className="bg-black/50 p-2 rounded mt-1">
                  [{'{ amount: 100 }'}, {'{ amount: 200 }'}, {'{ amount: 50 }'}]
                </div>
                <div className="mt-4 text-gray-400">Output:</div>
                <div className="bg-black/50 p-2 rounded mt-1">
                  {'{ sum: 350, field: "amount" }'}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Group Sales by Category</h3>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div>Operation: groupBy</div>
                <div>groupByField: category</div>
                <div className="mt-4 text-gray-400">Input:</div>
                <div className="bg-black/50 p-2 rounded mt-1 text-xs">
                  [{'{ category: "electronics", price: 100 }'},
                  <div>{'{ category: "electronics", price: 200 }'},</div>
                  <div>{'{ category: "books", price: 50 }'}]</div>
                </div>
                <div className="mt-4 text-gray-400">Output:</div>
                <div className="bg-black/50 p-2 rounded mt-1 text-xs">
                  {'{ electronics: [...], books: [...] }'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices">
          <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Use Correct Data Types</h4>
              <p className="text-sm text-gray-300">
                Ensure numeric fields contain numbers for sum/average operations.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Use on Non-Numeric Fields</h4>
              <p className="text-sm text-gray-300">
                Sum and average operations only work with numeric values.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
