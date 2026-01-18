import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Code2, Zap, Shield, Terminal } from 'lucide-react';

export default function CodeNode() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-xl" />
                    <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">💻</div>
                            <div className="flex-1">
                                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Code
                                </h1>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge>Transform</Badge>
                                    <Badge variant="outline">JavaScript</Badge>
                                    <Badge variant="outline">Custom Logic</Badge>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Run custom JavaScript code to transform data, implement complex logic, and extend workflow capabilities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Code2 className="h-8 w-8 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold text-white">JavaScript</div>
                        <div className="text-sm text-gray-400">ES6+ Syntax</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Shield className="h-8 w-8 text-green-400 mb-2" />
                        <div className="text-2xl font-bold text-white">Sandboxed</div>
                        <div className="text-sm text-gray-400">Secure Execution</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Zap className="h-8 w-8 text-yellow-400 mb-2" />
                        <div className="text-2xl font-bold text-white">5 Second</div>
                        <div className="text-sm text-gray-400">Timeout Limit</div>
                    </div>
                </div>

                {/* Overview */}
                <section id="overview">
                    <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The Code node allows you to write custom JavaScript code to transform data, implement business logic, 
                        perform calculations, and manipulate arrays and objects. It runs in a secure sandboxed environment with a 5-second timeout.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        This is your Swiss Army knife for custom transformations that aren't covered by built-in nodes. 
                        You have access to modern JavaScript (ES6+) features including arrow functions, destructuring, async/await, and more.
                    </p>
                </section>

                {/* Configuration */}
                <section id="configuration">
                    <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

                    <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 border-b border-white/10">
                                <tr>
                                    <th className="py-4 px-6 text-sm font-bold text-purple-400">Field</th>
                                    <th className="py-4 px-6 text-sm font-bold text-purple-400">Type</th>
                                    <th className="py-4 px-6 text-sm font-bold text-purple-400">Required</th>
                                    <th className="py-4 px-6 text-sm font-bold text-purple-400">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded text-sm">code</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Code</td>
                                    <td className="py-4 px-6 text-sm">✅</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">JavaScript code to execute</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded text-sm">mode</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Select</td>
                                    <td className="py-4 px-6 text-sm">❌</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">runOnceForAllItems or runOnceForEachItem</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Callout type="info" title="Execution Context">
                        Input data is available via the `items` variable. Your code should return the transformed data.
                    </Callout>
                </section>

                {/* Available Variables */}
                <section id="variables">
                    <h2 className="text-3xl font-black mb-6 text-white">Available Variables & Methods</h2>

                    <div className="space-y-4">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-purple-400">Input Data: items</h3>
                            <p className="text-gray-300 mb-4">
                                The input data from previous nodes is available as `items` array:
                            </p>
                            <CodeBlock
                                language="javascript"
                                code={`// items is always an array
const items = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];

// Access individual items
const firstItem = items[0];
const names = items.map(item => item.name);`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">Console Logging</h3>
                            <p className="text-gray-300 mb-4">
                                Use console.log() for debugging (logs appear in execution logs):
                            </p>
                            <CodeBlock
                                language="javascript"
                                code={`console.log('Processing items:', items.length);
console.log('First item:', items[0]);

// Logs will appear in the workflow execution details`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">Return Value</h3>
                            <p className="text-gray-300 mb-4">
                                Always return the transformed data:
                            </p>
                            <CodeBlock
                                language="javascript"
                                code={`// Transform and return
const output = items.map(item => ({
  ...item,
  processed: true
}));

return output;

// Or return early with conditions
if (items.length === 0) {
  return [];
}

return items.filter(item => item.active);`}
                            />
                        </div>
                    </div>
                </section>

                {/* Examples */}
                <section id="examples">
                    <h2 className="text-3xl font-black mb-6 text-white">Usage Examples</h2>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-purple-400">Example 1: Transform Data</h3>
                            <p className="text-gray-300 mb-4">Add computed fields and format data:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Add computed fields
const output = items.map(item => ({
  ...item,
  fullName: \`\${item.firstName} \${item.lastName}\`,
  age: new Date().getFullYear() - new Date(item.birthYear).getFullYear(),
  processedAt: new Date().toISOString()
}));

return output;`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">Example 2: Filter and Sort</h3>
                            <p className="text-gray-300 mb-4">Complex filtering and sorting logic:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Filter active users over 18, sort by age
const output = items
  .filter(item => item.status === 'active' && item.age >= 18)
  .sort((a, b) => b.age - a.age)
  .slice(0, 10); // Take top 10

return output;`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">Example 3: Aggregate Data</h3>
                            <p className="text-gray-300 mb-4">Calculate statistics and group data:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Calculate summary statistics
const total = items.reduce((sum, item) => sum + item.amount, 0);
const average = total / items.length;
const max = Math.max(...items.map(i => i.amount));

// Group by category
const grouped = items.reduce((acc, item) => {
  const category = item.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(item);
  return acc;
}, {});

return {
  summary: { total, average, max, count: items.length },
  grouped: grouped
};`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Example 4: Data Validation</h3>
                            <p className="text-gray-300 mb-4">Validate and clean data:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Validate email and phone format
const output = items.map(item => {
  const emailValid = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(item.email);
  const phoneValid = /^\\+?[1-9]\\d{1,14}$/.test(item.phone);
  
  return {
    ...item,
    email: emailValid ? item.email : null,
    phone: phoneValid ? item.phone : null,
    valid: emailValid && phoneValid,
    errors: [
      !emailValid && 'Invalid email',
      !phoneValid && 'Invalid phone'
    ].filter(Boolean)
  };
});

return output;`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-pink-400">Example 5: JSON Manipulation</h3>
                            <p className="text-gray-300 mb-4">Parse and restructure JSON data:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Flatten nested structure
const output = items.map(item => ({
  id: item.id,
  name: item.profile?.name || 'Unknown',
  email: item.contact?.email || '',
  city: item.address?.city || '',
  tags: item.metadata?.tags?.join(', ') || '',
  // Extract from deep nesting
  preference: item.settings?.preferences?.notifications?.email || false
}));

return output;`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-cyan-400">Example 6: Custom Business Logic</h3>
                            <p className="text-gray-300 mb-4">Implement complex calculations:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Calculate pricing with discounts and taxes
const output = items.map(item => {
  const basePrice = item.price;
  const quantity = item.quantity;
  const subtotal = basePrice * quantity;
  
  // Apply volume discount
  let discount = 0;
  if (quantity >= 100) discount = 0.2;
  else if (quantity >= 50) discount = 0.15;
  else if (quantity >= 10) discount = 0.1;
  
  const discountedPrice = subtotal * (1 - discount);
  const tax = discountedPrice * 0.08; // 8% tax
  const total = discountedPrice + tax;
  
  return {
    ...item,
    subtotal: subtotal.toFixed(2),
    discount: (discount * 100) + '%',
    discountAmount: (subtotal - discountedPrice).toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
});

return output;`}
                            />
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section id="best-practices">
                    <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

                    <div className="space-y-4">
                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Always Return a Value</h4>
                            <p className="text-sm text-gray-300">
                                Your code must return data. If no return statement is used, the input data is passed through unchanged.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Handle Empty Arrays</h4>
                            <p className="text-sm text-gray-300">
                                Always check if items array is empty before processing to avoid errors in reduce, map operations.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Modern JavaScript</h4>
                            <p className="text-sm text-gray-300">
                                Take advantage of ES6+ features like destructuring, spread operator, arrow functions, and template literals.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Use Async Operations</h4>
                            <p className="text-sm text-gray-300">
                                Async/await, promises, setTimeout, and API calls are not supported. Use HTTP Request node for external calls.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Access External Resources</h4>
                            <p className="text-sm text-gray-300">
                                File system, network, and external modules are not available. Code runs in a secure sandbox.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Performance</h4>
                            <p className="text-sm text-gray-300">
                                Code has a 5-second timeout. Optimize loops for large datasets and avoid nested iterations when possible.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Error Handling</h4>
                            <p className="text-sm text-gray-300">
                                Use try-catch blocks for operations that might fail (JSON parsing, null checks) to prevent workflow crashes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Limitations */}
                <section id="limitations">
                    <h2 className="text-3xl font-black mb-6 text-white">Limitations</h2>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                        <h4 className="font-bold text-red-400 mb-4">Not Available:</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                <span>External npm modules or libraries</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                <span>File system access (fs module)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                <span>Network requests (use HTTP Request node)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                <span>Async/await, Promises, setTimeout</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                <span>Global state or variables between executions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 mt-1">✗</span>
                                <span>Process, Buffer, or Node.js built-ins</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 mt-4">
                        <h4 className="font-bold text-green-400 mb-4">Available:</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>All ES6+ JavaScript features</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>Math, Date, String, Array, Object methods</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>JSON.parse() and JSON.stringify()</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>Regular expressions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">✓</span>
                                <span>console.log() for debugging</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* When to Use */}
                <section id="when-to-use">
                    <h2 className="text-3xl font-black mb-6 text-white">When to Use Code Node</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <h4 className="font-bold text-green-400 mb-3">✅ Perfect For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Complex data transformations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Custom business logic calculations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Data validation and sanitization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Conditional data manipulation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Restructuring nested JSON</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Custom formatting and string manipulation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                            <h4 className="font-bold text-red-400 mb-3">❌ Not Ideal For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Simple field mapping (use Data Mapper)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Basic filtering (use Filter node)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Sorting (use Sort node)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>API calls (use HTTP Request node)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Database queries (use Database node)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Related Nodes */}
                <section id="related">
                    <h2 className="text-3xl font-black mb-6 text-white">Related Nodes</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <NodeCard
                            title="Function"
                            description="Execute JavaScript functions"
                            href="/docs/nodes/transform/function"
                            icon="ƒ"
                        />
                        <NodeCard
                            title="Data Mapper"
                            description="Map fields without code"
                            href="/docs/nodes/transform/data-mapper"
                            icon="🗺️"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}