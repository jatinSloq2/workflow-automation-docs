import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Search, Check, X, Sliders } from 'lucide-react';

export default function FilterNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🔍</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Filter
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Transform</Badge>
                  <Badge variant="outline">Conditions</Badge>
                  <Badge variant="outline">Data Quality</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Filter array items based on conditions to keep only data that matches your criteria
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Sliders, label: 'Conditions', color: 'text-red-400' },
            { icon: Check, label: 'Include', color: 'text-green-400' },
            { icon: X, label: 'Exclude', color: 'text-orange-400' },
            { icon: Search, label: 'Match', color: 'text-blue-400' }
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
            The Filter node removes items from arrays that don't meet specified conditions. Use it to clean data, remove invalid entries, select specific records, or process only items matching certain criteria. Multiple conditions can be combined with AND/OR logic.
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-red-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-red-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-red-400">Required</th>
                  <th className="py-4 px-6 text-sm font-bold text-red-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6">
                    <code className="text-red-400 bg-red-500/10 px-2 py-1 rounded text-sm">conditions</code>
                  </td>
                  <td className="py-4 px-6 text-gray-300 text-sm">Array</td>
                  <td className="py-4 px-6 text-sm">✅</td>
                  <td className="py-4 px-6 text-gray-400 text-sm">Filter conditions to apply</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Operators */}
        <section>
          <h2 className="text-3xl font-black mb-6">Available Operators</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-red-400">Comparison Operators</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <code className="text-orange-400">equals</code>
                  <span className="text-gray-400">Field == Value</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-orange-400">notEquals</code>
                  <span className="text-gray-400">Field != Value</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-orange-400">greaterThan</code>
                  <span className="text-gray-400">Field {'>'} Value</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-orange-400">lessThan</code>
                  <span className="text-gray-400">Field {'<'} Value</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-orange-400">String Operators</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <code className="text-red-400">contains</code>
                  <span className="text-gray-400">Substring match</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-red-400">startsWith</code>
                  <span className="text-gray-400">Prefix match</span>
                </div>
                <div className="flex justify-between">
                  <code className="text-red-400">endsWith</code>
                  <span className="text-gray-400">Suffix match</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Example 1: Filter Active Users</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Alice", "status": "active", "age": 28},
  {"name": "Bob", "status": "inactive", "age": 35},
  {"name": "Charlie", "status": "active", "age": 42}
]

Condition:
Field: status
Operator: equals
Value: "active"

Output:
[
  {"name": "Alice", "status": "active", "age": 28},
  {"name": "Charlie", "status": "active", "age": 42}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Example 2: Filter by Number Range</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"product": "A", "price": 25},
  {"product": "B", "price": 75},
  {"product": "C", "price": 40}
]

Condition:
Field: price
Operator: lessThan
Value: 50

Output:
[
  {"product": "A", "price": 25},
  {"product": "C", "price": 40}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-amber-400">Example 3: Filter by Email Domain</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Alice", "email": "alice@gmail.com"},
  {"name": "Bob", "email": "bob@company.com"},
  {"name": "Charlie", "email": "charlie@gmail.com"}
]

Condition:
Field: email
Operator: contains
Value: "@gmail.com"

Output:
[
  {"name": "Alice", "email": "alice@gmail.com"},
  {"name": "Charlie", "email": "charlie@gmail.com"}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Example 4: Remove Empty Fields</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Alice", "email": "alice@example.com"},
  {"name": "Bob", "email": ""},
  {"name": "Charlie", "email": "charlie@example.com"}
]

Condition:
Field: email
Operator: notEquals
Value: ""

Output:
[
  {"name": "Alice", "email": "alice@example.com"},
  {"name": "Charlie", "email": "charlie@example.com"}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Example 5: Filter Premium Users Over 18</h3>
              <p className="text-gray-300 mb-4">Multiple conditions (AND logic):</p>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"name": "Alice", "age": 25, "plan": "premium"},
  {"name": "Bob", "age": 17, "plan": "premium"},
  {"name": "Charlie", "age": 30, "plan": "free"}
]

Conditions (AND):
1. Field: age, Operator: greaterThan, Value: 18
2. Field: plan, Operator: equals, Value: "premium"

Output:
[
  {"name": "Alice", "age": 25, "plan": "premium"}
]`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Filter Early in Workflow</h4>
              <p className="text-sm text-gray-300">
                Remove unwanted data as soon as possible to reduce processing load in subsequent nodes.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Validate Email Addresses</h4>
              <p className="text-sm text-gray-300">
                Use contains operator to check for "@" before sending emails to avoid errors.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Filter on Non-Existent Fields</h4>
              <p className="text-sm text-gray-300">
                Always verify the field exists in your data structure to avoid unexpected results.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Case Sensitivity</h4>
              <p className="text-sm text-gray-300">
                String comparisons are case-sensitive. Normalize data first if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20">
              <h4 className="font-bold text-red-400 mb-3">Data Quality</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Remove invalid email addresses</li>
                <li>• Filter out test/demo data</li>
                <li>• Remove empty or null values</li>
                <li>• Validate required fields exist</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20">
              <h4 className="font-bold text-orange-400 mb-3">Business Logic</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Process only premium customers</li>
                <li>• Filter by date ranges</li>
                <li>• Select specific regions/countries</li>
                <li>• Target specific user segments</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}