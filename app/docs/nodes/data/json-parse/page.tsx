import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { FileJson, Search, Code, Layers } from 'lucide-react';

export default function JsonParseNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">📋</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  JSON Parse
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Data</Badge>
                  <Badge variant="outline">Transform</Badge>
                  <Badge variant="outline">JSONPath</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Parse, stringify, extract, and transform JSON data with JSONPath support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: FileJson, label: 'Parse', value: 'JSON' },
            { icon: Code, label: 'Stringify', value: 'Object' },
            { icon: Search, label: 'Extract', value: 'Path' },
            { icon: Layers, label: 'Transform', value: 'Data' }
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <stat.icon className="h-8 w-8 text-green-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section>
          <h2 className="text-3xl font-black mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            The JSON Parse node provides powerful tools for working with JSON data. Convert JSON strings to objects, objects to JSON strings, extract specific values using JSONPath expressions, and transform complex nested data structures.
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-green-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-green-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-green-400">Required</th>
                  <th className="py-4 px-6 text-sm font-bold text-green-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'operation', type: 'Select', req: '✅', desc: 'parse, stringify, extract, transform' },
                  { field: 'jsonPath', type: 'String', req: '❌', desc: 'JSONPath expression (for extract)' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-green-400 bg-green-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
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

        {/* Operations */}
        <section>
          <h2 className="text-3xl font-black mb-6">Operations</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Parse</h3>
              <p className="text-gray-300 mb-4">Convert JSON string to JavaScript object:</p>
              <CodeBlock
                language="javascript"
                code={`// Input (string)
'{"name":"John","age":30,"city":"NYC"}'

// Output (object)
{
  "name": "John",
  "age": 30,
  "city": "NYC"
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Stringify</h3>
              <p className="text-gray-300 mb-4">Convert object to JSON string:</p>
              <CodeBlock
                language="javascript"
                code={`// Input (object)
{
  "name": "John",
  "age": 30
}

// Output (string)
'{"name":"John","age":30}'`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Extract</h3>
              <p className="text-gray-300 mb-4">Extract specific values using JSONPath:</p>
              <CodeBlock
                language="javascript"
                code={`// Input
{
  "data": {
    "users": [
      {"id": 1, "name": "Alice"},
      {"id": 2, "name": "Bob"}
    ]
  }
}

// JSONPath: $.data.users[0].name
// Output: "Alice"

// JSONPath: $.data.users[*].name
// Output: ["Alice", "Bob"]`}
              />
            </div>
          </div>
        </section>

        {/* JSONPath Guide */}
        <section>
          <h2 className="text-3xl font-black mb-6">JSONPath Syntax</h2>

          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-green-400 mb-2">Basic Paths:</h4>
                <CodeBlock
                  language="javascript"
                  code={`$                  // Root object
$.store            // 'store' property
$.store.book       // Nested property
$['store']         // Bracket notation`}
                />
              </div>

              <div>
                <h4 className="font-bold text-emerald-400 mb-2">Array Access:</h4>
                <CodeBlock
                  language="javascript"
                  code={`$.users[0]         // First element
$.users[-1]        // Last element
$.users[0,1]       // Multiple elements
$.users[0:3]       // Slice (0 to 2)
$.users[*]         // All elements`}
                />
              </div>

              <div>
                <h4 className="font-bold text-teal-400 mb-2">Wildcards & Filters:</h4>
                <CodeBlock
                  language="javascript"
                  code={`$..name            // Recursive descent
$.store.*          // All properties
$.users[?(@.age > 18)]        // Filter by condition
$.users[?(@.status == 'active')]  // String comparison`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">Example 1: Parse API Response</h3>
              <p className="text-gray-300 mb-4">Convert API string response to object:</p>
              <CodeBlock
                language="yaml"
                code={`Operation: parse

Input: '{"status":"success","data":{"count":42}}'
Output: { status: "success", data: { count: 42 } }`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Example 2: Extract User Emails</h3>
              <CodeBlock
                language="yaml"
                code={`Operation: extract
JSONPath: $.users[*].email

Input:
{
  "users": [
    {"name": "Alice", "email": "alice@example.com"},
    {"name": "Bob", "email": "bob@example.com"}
  ]
}

Output: ["alice@example.com", "bob@example.com"]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-teal-400">Example 3: Extract Nested Data</h3>
              <CodeBlock
                language="yaml"
                code={`Operation: extract
JSONPath: $.data.items[0].attributes.price

Input:
{
  "data": {
    "items": [
      {
        "id": "123",
        "attributes": {
          "name": "Widget",
          "price": 29.99
        }
      }
    ]
  }
}

Output: 29.99`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Example 4: Filter by Condition</h3>
              <CodeBlock
                language="yaml"
                code={`Operation: extract
JSONPath: $.products[?(@.price < 50)]

Input:
{
  "products": [
    {"name": "A", "price": 30},
    {"name": "B", "price": 60},
    {"name": "C", "price": 25}
  ]
}

Output: [
  {"name": "A", "price": 30},
  {"name": "C", "price": 25}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 5: Prepare Data for API</h3>
              <CodeBlock
                language="yaml"
                code={`Operation: stringify

Input:
{
  "user": {
    "name": "{{$prev.data.name}}",
    "email": "{{$prev.data.email}}",
    "role": "admin"
  }
}

Output: '{"user":{"name":"John","email":"john@example.com","role":"admin"}}'

// Perfect for sending as HTTP request body`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Validate JSON Before Parsing</h4>
              <p className="text-sm text-gray-300">
                Use error handling to catch invalid JSON and prevent workflow failures.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use JSONPath for Complex Extraction</h4>
              <p className="text-sm text-gray-300">
                Instead of multiple nodes, use JSONPath to extract exactly what you need in one step.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Parse Already-Parsed Data</h4>
              <p className="text-sm text-gray-300">
                Most HTTP nodes return objects automatically. Only parse when you have a JSON string.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Performance with Large JSON</h4>
              <p className="text-sm text-gray-300">
                For very large JSON files (>10MB), consider filtering or pagination at the source.
              </p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section>
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
              <h4 className="font-bold text-green-400 mb-3">✅ Perfect For:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Extracting specific fields from API responses</li>
                <li>• Converting webhook payloads to structured data</li>
                <li>• Preparing JSON for database insertion</li>
                <li>• Filtering arrays by conditions</li>
                <li>• Flattening nested objects</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
              <h4 className="font-bold text-blue-400 mb-3">💡 Pro Tips:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Test JSONPath expressions with online tools first</li>
                <li>• Use wildcards (*) for flexible matching</li>
                <li>• Combine with Set node to restructure data</li>
                <li>• Chain multiple JSON Parse nodes for complex transforms</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}