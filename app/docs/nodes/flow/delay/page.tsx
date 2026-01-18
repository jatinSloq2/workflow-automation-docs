import Link from 'next/link';

export default function DelayNodePage() {
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
          <span className="text-white">Delay/Wait</span>
        </div>

        {/* Hero Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">⏱️</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Wait (Delay) Node
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Pause workflow execution for a specified duration in seconds, minutes, or hours
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
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-orange-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'amount', type: 'Number', desc: 'Duration value (required)' },
                  { field: 'unit', type: 'Select', desc: 'Time unit: seconds, minutes, hours' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
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
              <h3 className="text-xl font-bold mb-3 text-orange-400">Wait 30 Seconds Before Retry</h3>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div>Amount: 30</div>
                <div>Unit: seconds</div>
                <div className="mt-4 text-gray-400">Use case: Rate limiting, retry delays</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Wait 5 Minutes Between Batches</h3>
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm text-gray-300">
                <div>Amount: 5</div>
                <div>Unit: minutes</div>
                <div className="mt-4 text-gray-400">Use case: Batch processing, respecting API rate limits</div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices">
          <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Use for Rate Limiting</h4>
              <p className="text-sm text-gray-300">
                Add delays between API calls to respect rate limits.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Use for Long Waits</h4>
              <p className="text-sm text-gray-300">
                For waits longer than a few hours, use the Schedule trigger instead.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
