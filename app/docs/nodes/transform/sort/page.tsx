import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { ArrowUpDown, ArrowUp, ArrowDown, List } from 'lucide-react';

export default function SortNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔃</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Sort
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Transform</Badge>
                  <Badge variant="outline">Order</Badge>
                  <Badge variant="outline">Arrange</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Sort array items by any field in ascending or descending order
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: ArrowUpDown, label: 'Sort By', color: 'text-teal-400' },
            { icon: ArrowUp, label: 'Ascending', color: 'text-green-400' },
            { icon: ArrowDown, label: 'Descending', color: 'text-orange-400' },
            { icon: List, label: 'Arrays', color: 'text-blue-400' }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
              <div className="text-sm font-bold text-white">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section>
          <h2 className="text-3xl font-black mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            The Sort node arranges array items by the value of a specified field. Sort alphabetically by name, numerically by price or date, or by any other field. Useful for presenting data in a specific order, ranking items, or preparing data for display.
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Required</th>
                  <th className="py-4 px-6 text-sm font-bold text-teal-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'sortBy', type: 'String', req: '✅', desc: 'Field name to sort by' },
                  { field: 'order', type: 'Select', req: '✅', desc: 'ascending or descending' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-teal-400 bg-teal-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
                    </td>
                    <td className="py-4 px-6 text-gray-300 text-sm">{row.type}</td>
                    <td className="py-4 px-6 text-sm">{row.req}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Output */}
        <section>
          <h2 className="text-3xl font-black mb-4">Output</h2>
          <p className="text-gray-300 mb-4">
            Returns the same array with items reordered based on the sort field and order.
          </p>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Example 1: Sort by Name (A-Z)</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Charlie", "age": 30},
  {"name": "Alice", "age": 25},
  {"name": "Bob", "age": 35}
]

Configuration:
sortBy: name
order: ascending

Output:
[
  {"name": "Alice", "age": 25},
  {"name": "Bob", "age": 35},
  {"name": "Charlie", "age": 30}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Example 2: Sort by Price (High to Low)</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"product": "Widget", "price": 29.99},
  {"product": "Gadget", "price": 59.99},
  {"product": "Tool", "price": 19.99}
]

Configuration:
sortBy: price
order: descending

Output:
[
  {"product": "Gadget", "price": 59.99},
  {"product": "Widget", "price": 29.99},
  {"product": "Tool", "price": 19.99}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 3: Sort by Date (Newest First)</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"id": 1, "created_at": "2024-01-15"},
  {"id": 2, "created_at": "2024-01-18"},
  {"id": 3, "created_at": "2024-01-10"}
]

Configuration:
sortBy: created_at
order: descending

Output:
[
  {"id": 2, "created_at": "2024-01-18"},
  {"id": 1, "created_at": "2024-01-15"},
  {"id": 3, "created_at": "2024-01-10"}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Example 4: Sort by Rating</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Product A", "rating": 3.5},
  {"name": "Product B", "rating": 4.8},
  {"name": "Product C", "rating": 4.2}
]

Configuration:
sortBy: rating
order: descending

Output:
[
  {"name": "Product B", "rating": 4.8},
  {"name": "Product C", "rating": 4.2},
  {"name": "Product A", "rating": 3.5}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 5: Sort by Age (Youngest to Oldest)</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Alice", "age": 45},
  {"name": "Bob", "age": 28},
  {"name": "Charlie", "age": 35}
]

Configuration:
sortBy: age
order: ascending

Output:
[
  {"name": "Bob", "age": 28},
  {"name": "Charlie", "age": 35},
  {"name": "Alice", "age": 45}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Example 6: Sort Orders by Total</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"order_id": "A123", "total": 150.00, "status": "completed"},
  {"order_id": "B456", "total": 89.50, "status": "pending"},
  {"order_id": "C789", "total": 220.00, "status": "completed"}
]

Configuration:
sortBy: total
order: descending

Output:
[
  {"order_id": "C789", "total": 220.00, "status": "completed"},
  {"order_id": "A123", "total": 150.00, "status": "completed"},
  {"order_id": "B456", "total": 89.50, "status": "pending"}
]

// Perfect for creating top customers report`}
              />
            </div>
          </div>
        </section>

        {/* Sort Behavior */}
        <section>
          <h2 className="text-3xl font-black mb-6">Sort Behavior</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-400">String Sorting</h3>
              <p className="text-gray-300 text-sm mb-3">Alphabetical, case-sensitive:</p>
              <CodeBlock
                language="text"
                code={`Ascending: A, B, C, a, b, c
Descending: c, b, a, C, B, A

Note: Uppercase comes before lowercase`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Number Sorting</h3>
              <p className="text-gray-300 text-sm mb-3">Numerical order:</p>
              <CodeBlock
                language="text"
                code={`Ascending: 1, 5, 10, 50, 100
Descending: 100, 50, 10, 5, 1

Works with integers and decimals`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Date Sorting</h3>
              <p className="text-gray-300 text-sm mb-3">Chronological order:</p>
              <CodeBlock
                language="text"
                code={`Ascending: Oldest → Newest
Descending: Newest → Oldest

Supports ISO 8601 date strings`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Boolean Sorting</h3>
              <p className="text-gray-300 text-sm mb-3">False before true:</p>
              <CodeBlock
                language="text"
                code={`Ascending: false, false, true, true
Descending: true, true, false, false`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Sort Before Limiting</h4>
              <p className="text-sm text-gray-300">
                When using with Limit node, sort first to get "Top 10" or "Bottom 5" items correctly.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Sort for User Display</h4>
              <p className="text-sm text-gray-300">
                Sort data alphabetically or by relevance before showing in UI or sending in emails.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Consistent Field Names</h4>
              <p className="text-sm text-gray-300">
                Ensure all items have the sort field to avoid undefined values causing issues.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Sort Non-Array Data</h4>
              <p className="text-sm text-gray-300">
                Sort node only works on arrays. For single objects, no sorting is needed.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Performance on Large Arrays</h4>
              <p className="text-sm text-gray-300">
                Sorting very large arrays (10,000+ items) may take time. Filter first if possible.
              </p>
            </div>
          </div>
        </section>

        {/* Common Workflows */}
        <section>
          <h2 className="text-3xl font-black mb-6">Common Workflows</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Top Customers Report</h3>
              <CodeBlock
                language="text"
                code={`1. Database (SELECT customers with total_spent)
2. Sort (sortBy: total_spent, order: descending)
3. Limit (maxItems: 10)
4. Email (Send top 10 customers list to sales team)`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Latest Orders First</h3>
              <CodeBlock
                language="text"
                code={`1. HTTP Request (Fetch orders from API)
2. Sort (sortBy: created_at, order: descending)
3. Slack (Send notification with 5 newest orders)`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Alphabetical User List</h3>
              <CodeBlock
                language="text"
                code={`1. Upload File (users.csv)
2. Filter (status = "active")
3. Sort (sortBy: name, order: ascending)
4. Database (INSERT sorted users)`}
              />
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-500/20">
              <h4 className="font-bold text-teal-400 mb-3">Ranking & Leaderboards</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Top performers by sales</li>
                <li>• Highest rated products</li>
                <li>• Most active users</li>
                <li>• Best performing content</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20">
              <h4 className="font-bold text-cyan-400 mb-3">Reports & Analytics</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Revenue reports (high to low)</li>
                <li>• Chronological activity logs</li>
                <li>• Prioritized task lists</li>
                <li>• Sorted expense reports</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-blue-500/20">
              <h4 className="font-bold text-blue-400 mb-3">User Experience</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Alphabetical dropdown lists</li>
                <li>• Price sorting (low to high)</li>
                <li>• Newest content first</li>
                <li>• Relevance sorting</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
              <h4 className="font-bold text-green-400 mb-3">Data Processing</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Process in priority order</li>
                <li>• Handle oldest items first</li>
                <li>• Batch processing by category</li>
                <li>• Sequential task execution</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}