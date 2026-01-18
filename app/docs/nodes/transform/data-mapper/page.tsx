import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Map, ArrowRightLeft, Layers, Shuffle } from 'lucide-react';

export default function DataMapperNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🗺️</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Data Mapper
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Transform</Badge>
                  <Badge variant="outline">Restructure</Badge>
                  <Badge variant="outline">Field Mapping</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Map and transform data structures by renaming fields, extracting nested values, and restructuring objects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Map, label: 'Field Mapping', color: 'text-indigo-400' },
            { icon: ArrowRightLeft, label: 'Restructure', color: 'text-purple-400' },
            { icon: Layers, label: 'Nested Data', color: 'text-pink-400' },
            { icon: Shuffle, label: 'Transform', color: 'text-blue-400' }
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
            The Data Mapper node allows you to restructure data by mapping input fields to new output field names. Perfect for standardizing data formats, preparing data for APIs, renaming fields, extracting nested properties, and transforming complex objects into simpler structures.
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="py-4 px-6 text-sm font-bold text-indigo-400">Field</th>
                  <th className="py-4 px-6 text-sm font-bold text-indigo-400">Type</th>
                  <th className="py-4 px-6 text-sm font-bold text-indigo-400">Required</th>
                  <th className="py-4 px-6 text-sm font-bold text-indigo-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'mappings', type: 'Key-Value', req: '✅', desc: 'Output field → Input field mappings' },
                  { field: 'keepUnmapped', type: 'Boolean', req: '❌', desc: 'Keep fields not in mappings (default: false)' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
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

        {/* How It Works */}
        <section>
          <h2 className="text-3xl font-black mb-6">How It Works</h2>

          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <p className="text-gray-300 mb-4">Mappings are defined as <strong>Output Field: Input Path</strong></p>
            
            <CodeBlock
              language="javascript"
              code={`// Input Data
{
  "firstName": "John",
  "lastName": "Doe",
  "contact": {
    "email": "john@example.com",
    "phone": "555-0123"
  }
}

// Mappings Configuration
{
  "fullName": "firstName",        // Simple field rename
  "email": "contact.email",       // Extract nested field
  "phoneNumber": "contact.phone"  // Extract and rename
}

// Output
{
  "fullName": "John",
  "email": "john@example.com",
  "phoneNumber": "555-0123"
}`}
            />
          </div>
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">Example 1: Rename Fields</h3>
              <p className="text-gray-300 mb-4">Standardize field names from API:</p>
              <CodeBlock
                language="yaml"
                code={`Input:
{
  "user_name": "Alice",
  "user_email": "alice@example.com",
  "user_id": 123
}

Mappings:
name: user_name
email: user_email
id: user_id

keepUnmapped: false

Output:
{
  "name": "Alice",
  "email": "alice@example.com",
  "id": 123
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 2: Flatten Nested Object</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
{
  "user": {
    "profile": {
      "name": "Bob",
      "age": 30
    },
    "settings": {
      "theme": "dark"
    }
  }
}

Mappings:
userName: user.profile.name
userAge: user.profile.age
preferredTheme: user.settings.theme

Output:
{
  "userName": "Bob",
  "userAge": 30,
  "preferredTheme": "dark"
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Example 3: Prepare Data for API</h3>
              <CodeBlock
                language="yaml"
                code={`Input (from webhook):
{
  "name": "John Doe",
  "email": "john@example.com",
  "plan": "premium"
}

Mappings (for CRM API):
full_name: name
contact_email: email
subscription_tier: plan

Output:
{
  "full_name": "John Doe",
  "contact_email": "john@example.com",
  "subscription_tier": "premium"
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 4: Extract Multiple Nested Fields</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
{
  "order": {
    "id": "ORD-123",
    "customer": {
      "name": "Alice",
      "email": "alice@example.com"
    },
    "items": [
      {"name": "Widget", "price": 29.99}
    ],
    "total": 29.99
  }
}

Mappings:
orderId: order.id
customerName: order.customer.name
customerEmail: order.customer.email
orderTotal: order.total

Output:
{
  "orderId": "ORD-123",
  "customerName": "Alice",
  "customerEmail": "alice@example.com",
  "orderTotal": 29.99
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Example 5: Keep Original Fields</h3>
              <CodeBlock
                language="yaml"
                code={`Input:
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "age": 30
}

Mappings:
name: firstName

keepUnmapped: true

Output:
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "name": "John"     // Added by mapping
}`}
              />
            </div>
          </div>
        </section>

        {/* Advanced Usage */}
        <section>
          <h2 className="text-3xl font-black mb-6">Advanced Usage</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-indigo-400">Mapping Arrays</h3>
              <p className="text-gray-300 mb-4">When input is an array, mappings apply to each item:</p>
              <CodeBlock
                language="yaml"
                code={`Input:
[
  {"user_name": "Alice", "user_email": "alice@example.com"},
  {"user_name": "Bob", "user_email": "bob@example.com"}
]

Mappings:
name: user_name
email: user_email

Output:
[
  {"name": "Alice", "email": "alice@example.com"},
  {"name": "Bob", "email": "bob@example.com"}
]`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Combining with Set Node</h3>
              <p className="text-gray-300 mb-4">Use Data Mapper for structure, Set node for computed values:</p>
              <CodeBlock
                language="text"
                code={`1. Data Mapper: Restructure fields
   firstName → name
   contact.email → email

2. Set Node: Add computed fields
   fullName = "{{name}} {{lastName}}"
   timestamp = {{$now}}`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Descriptive Output Names</h4>
              <p className="text-sm text-gray-300">
                Choose clear, consistent field names that match your system's conventions.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Map Before Database Insert</h4>
              <p className="text-sm text-gray-300">
                Transform external API data to match your database schema before inserting.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Overuse keepUnmapped</h4>
              <p className="text-sm text-gray-300">
                Only keep unmapped fields when necessary to avoid cluttered output.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Validation After Mapping</h4>
              <p className="text-sm text-gray-300">
                Add a Filter or IF node after mapping to validate required fields exist.
              </p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section>
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20">
              <h4 className="font-bold text-indigo-400 mb-3">API Integration</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Standardize third-party API responses</li>
                <li>• Prepare data for external API requests</li>
                <li>• Convert between different API schemas</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20">
              <h4 className="font-bold text-purple-400 mb-3">Database Operations</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Match database column names</li>
                <li>• Transform before INSERT/UPDATE</li>
                <li>• Flatten nested objects for SQL</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-pink-500/10 to-red-500/5 border border-pink-500/20">
              <h4 className="font-bold text-pink-400 mb-3">Data Cleanup</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Standardize field naming conventions</li>
                <li>• Remove unwanted nested structures</li>
                <li>• Create consistent data formats</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
              <h4 className="font-bold text-blue-400 mb-3">Email Templates</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Prepare data for email merge fields</li>
                <li>• Simplify complex objects for templates</li>
                <li>• Extract relevant user information</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}