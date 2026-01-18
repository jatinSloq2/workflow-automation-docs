import Link from 'next/link';
import { Braces, Code, Zap, Database, Calendar, Hash } from 'lucide-react';

export default function ExpressionsConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-white">Expressions</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
            <Braces className="h-4 w-4 text-pink-400" />
            <span className="text-sm text-pink-300">Core Concept</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Expressions</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            Expressions are dynamic references that allow you to access data from previous nodes, 
            workflow inputs, and use built-in functions. They make your workflows flexible and 
            data-driven.
          </p>
        </div>

        {/* What are Expressions */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What are Expressions?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Expressions are placeholders wrapped in double curly braces <code className="px-2 py-1 rounded bg-white/10 text-sm">{`{{...}}`}</code> that 
            get replaced with actual values when your workflow runs. They let you reference data from 
            other nodes and create dynamic, reusable workflows.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <h3 className="text-lg font-bold mb-4">Basic Example</h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-2">Static value (no expression):</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  john@example.com
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-400 mb-2">Dynamic value (with expression):</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  {`{{$prev.data.email}}`}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  → Automatically uses the email from the previous node's output
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expression Syntax */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Expression Syntax</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shrink-0">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">$node Reference</h3>
                  <p className="text-gray-400 mb-4">
                    Access data from any specific node in your workflow by its ID or type.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                        {`{{$node.http_request_1.data.userId}}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Access userId from a specific HTTP Request node
                      </div>
                    </div>

                    <div>
                      <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                        {`{{$node.aiChat_1.data.response}}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Get the AI-generated response from an AI Chat node
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">$prev Reference</h3>
                  <p className="text-gray-400 mb-4">
                    Quick access to data from the immediately previous node. Perfect for linear workflows.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                        {`{{$prev.data.email}}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Access email from the previous node
                      </div>
                    </div>

                    <div>
                      <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                        {`{{$prev.data.items[0].name}}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Access first item's name from an array in previous node
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">$input Reference</h3>
                  <p className="text-gray-400 mb-4">
                    Access data passed into the workflow when it's triggered.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                        {`{{$input.customerName}}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Use customer name from workflow input
                      </div>
                    </div>

                    <div>
                      <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                        {`{{$input.orderId}}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Reference order ID passed to the workflow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built-in Functions */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Built-in Functions</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            WorkflowHub provides built-in functions that generate dynamic values like timestamps, 
            UUIDs, and random numbers.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="h-6 w-6 text-orange-400" />
                <h3 className="text-lg font-bold">$now</h3>
              </div>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                {`{{$now}}`}
              </div>
              <p className="text-xs text-gray-400">
                Current date and time in ISO format
              </p>
              <div className="text-xs text-gray-500 mt-2">
                Example: 2024-01-15T09:30:00.000Z
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Hash className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-bold">$timestamp</h3>
              </div>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                {`{{$timestamp}}`}
              </div>
              <p className="text-xs text-gray-400">
                Current Unix timestamp (milliseconds)
              </p>
              <div className="text-xs text-gray-500 mt-2">
                Example: 1705311000000
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Code className="h-6 w-6 text-purple-400" />
                <h3 className="text-lg font-bold">$uuid</h3>
              </div>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                {`{{$uuid}}`}
              </div>
              <p className="text-xs text-gray-400">
                Generate a unique identifier (UUID v4)
              </p>
              <div className="text-xs text-gray-500 mt-2">
                Example: a1b2c3d4-e5f6-7890-...
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Hash className="h-6 w-6 text-green-400" />
                <h3 className="text-lg font-bold">$random()</h3>
              </div>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                {`{{$random(1, 100)}}`}
              </div>
              <p className="text-xs text-gray-400">
                Random number between min and max
              </p>
              <div className="text-xs text-gray-500 mt-2">
                Example: 42
              </div>
            </div>
          </div>
        </section>

        {/* Practical Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Practical Examples</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Example 1: Personalized Email</h3>
              <p className="text-gray-400 text-sm mb-4">
                Send emails with personalized content using data from previous nodes.
              </p>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-400 mb-2">To Address:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    {`{{$prev.data.email}}`}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-2">Subject:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    Welcome to our service, {`{{$prev.data.firstName}}`}!
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-2">Body:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    Hello {`{{$prev.data.firstName}} {{$prev.data.lastName}}`},<br/><br/>
                    Your account {`{{$prev.data.accountId}}`} has been created successfully!
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Example 2: Dynamic API Request</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build API URLs and payloads dynamically based on previous data.
              </p>

              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-400 mb-2">URL:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    https://api.example.com/users/{`{{$prev.data.userId}}`}/orders
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-2">Headers:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    {`{ "Authorization": "Bearer {{$node.auth.data.token}}" }`}
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-2">Body:</div>
                  <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                    {`{
  "orderId": "{{$uuid}}",
  "customerId": "{{$prev.data.userId}}",
  "timestamp": "{{$now}}"
}`}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Example 3: AI Prompt with Context</h3>
              <p className="text-gray-400 text-sm mb-4">
                Create dynamic AI prompts using data from your workflow.
              </p>

              <div>
                <div className="text-xs text-gray-400 mb-2">AI Prompt:</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  Analyze the following customer feedback for {`{{$prev.data.productName}}`}:<br/><br/>
                  Customer: {`{{$prev.data.customerName}}`}<br/>
                  Rating: {`{{$prev.data.rating}}`}/5<br/>
                  Feedback: {`{{$prev.data.comment}}`}<br/><br/>
                  Provide a summary and sentiment analysis.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessing Nested Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Accessing Nested Data</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Use dot notation to access nested objects and array indices to access specific items.
          </p>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
            <h3 className="text-lg font-bold mb-4">Example Data Structure</h3>
            
            <div className="p-4 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-6">
              {`{
  "user": {
    "id": 123,
    "name": "John Doe",
    "address": {
      "city": "San Francisco",
      "country": "USA"
    }
  },
  "orders": [
    { "id": 1, "total": 99.99 },
    { "id": 2, "total": 149.99 }
  ]
}`}
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-400 mb-2">Access nested object:</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  {`{{$prev.data.user.address.city}}`}
                </div>
                <div className="text-xs text-gray-500 mt-1">→ "San Francisco"</div>
              </div>

              <div>
                <div className="text-xs text-gray-400 mb-2">Access array item:</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  {`{{$prev.data.orders[0].total}}`}
                </div>
                <div className="text-xs text-gray-500 mt-1">→ 99.99</div>
              </div>

              <div>
                <div className="text-xs text-gray-400 mb-2">Access second item:</div>
                <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                  {`{{$prev.data.orders[1].id}}`}
                </div>
                <div className="text-xs text-gray-500 mt-1">→ 2</div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Patterns */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Common Patterns</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 text-blue-400">Combining Text & Data</h3>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                Order #{`{{$prev.data.orderId}}`} from {`{{$prev.data.customerName}}`}
              </div>
              <p className="text-xs text-gray-400">
                Mix static text with dynamic values
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 text-purple-400">Multiple References</h3>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                {`{{$node.http_1.data.name}} - {{$node.ai_1.data.response}}`}
              </div>
              <p className="text-xs text-gray-400">
                Reference multiple nodes in one field
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 text-green-400">Timestamp Formatting</h3>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                Created at: {`{{$now}}`}
              </div>
              <p className="text-xs text-gray-400">
                Add timestamps to your data
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-bold mb-3 text-orange-400">Unique IDs</h3>
              <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 mb-2">
                transaction-{`{{$uuid}}`}
              </div>
              <p className="text-xs text-gray-400">
                Generate unique identifiers
              </p>
            </div>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Tips & Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">✓</span>
                Always Test Expressions
              </h3>
              <p className="text-sm text-gray-400">
                Run your workflow with sample data to verify expressions resolve correctly before 
                activating it for production use.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Check Data Structure
              </h3>
              <p className="text-sm text-gray-400">
                View the output of previous nodes to understand the exact data structure and field 
                names before writing expressions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Use $prev for Linear Flows
              </h3>
              <p className="text-sm text-gray-400">
                In simple linear workflows, $prev is cleaner than $node references. Use $node when 
                you need data from specific nodes in complex workflows.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Handle Missing Data
              </h3>
              <p className="text-sm text-gray-400">
                If an expression references a field that doesn't exist, the workflow may fail. Use 
                IF nodes to check for data before using it in expressions.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <Link
            href="/docs/core-concepts/executions"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <span>←</span>
            <span>Executions</span>
          </Link>
          
          <Link
            href="/docs/guides"
            className="flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg transition-all"
          >
            <span>Explore Guides</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}