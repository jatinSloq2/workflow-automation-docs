// src/app/docs/expressions/basics/page.tsx
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ExpressionsBasics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Expression Basics</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Learn how to use expressions to make your workflows dynamic and data-driven
        </p>
      </div>

      <Callout type="info" title="What are expressions?">
        Expressions allow you to reference data from previous nodes, use built-in functions,
        and create dynamic values in your workflows. They're wrapped in double curly braces{' '}
        <code>{'{{  }}'}</code>.
      </Callout>

      <section id="syntax">
        <h2 className="text-3xl font-bold mb-4">Expression Syntax</h2>
        <p className="mb-4">
          All expressions must be wrapped in double curly braces. Here's the basic syntax:
        </p>
        
        <CodeBlock
          language="javascript"
          code={`// Basic expression
{{ $node.nodeName.data.field }}

// With array access
{{ $node.httpRequest_1.data.users[0].email }}

// Built-in functions
{{ $now }}
{{ $uuid }}
{{ $random(1,100) }}`}
        />
      </section>

      <section id="types">
        <h2 className="text-3xl font-bold mb-4">Expression Types</h2>
        
        <Tabs defaultValue="node">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="node">Node References</TabsTrigger>
            <TabsTrigger value="prev">Previous Node</TabsTrigger>
            <TabsTrigger value="input">Input Data</TabsTrigger>
            <TabsTrigger value="builtin">Built-in</TabsTrigger>
          </TabsList>
          
          <TabsContent value="node" className="space-y-4">
            <h3 className="text-xl font-semibold">Node References ($node)</h3>
            <p>Access data from any node in your workflow by its ID.</p>
            
            <CodeBlock
              language="javascript"
              code={`// Access by node ID
{{ $node.node-1767543799718.data }}

// Access nested fields
{{ $node.httpRequest_1.data.user.email }}
{{ $node.httpRequest_1.data.users[0].name }}

// Access metadata
{{ $node.httpRequest_1.metadata.statusCode }}`}
            />

            <Callout type="tip">
              Use the <strong>Variables</strong> button in the node configuration dialog
              to easily insert node references without typing IDs manually.
            </Callout>
          </TabsContent>

          <TabsContent value="prev" className="space-y-4">
            <h3 className="text-xl font-semibold">Previous Node ($prev)</h3>
            <p>Shorthand to access the immediately preceding node's output.</p>
            
            <CodeBlock
              language="javascript"
              code={`// Access previous node data
{{ $prev.data }}

// Access specific fields
{{ $prev.data.email }}
{{ $prev.data.users[0].name }}

// Access metadata
{{ $prev.metadata.statusCode }}`}
            />

            <Callout type="warning">
              $prev only works when there's a single direct connection.
              For multiple inputs, use $node references instead.
            </Callout>
          </TabsContent>

          <TabsContent value="input" className="space-y-4">
            <h3 className="text-xl font-semibold">Workflow Input ($input)</h3>
            <p>Access data passed to the workflow when it's executed.</p>
            
            <CodeBlock
              language="javascript"
              code={`// Access workflow input
{{ $input.userId }}
{{ $input.email }}
{{ $input.config.apiKey }}`}
            />
          </TabsContent>

          <TabsContent value="builtin" className="space-y-4">
            <h3 className="text-xl font-semibold">Built-in Functions</h3>
            <p>Use pre-defined functions for common operations.</p>
            
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <code className="text-blue-600">{'{{ $now }}'}</code>
                <p className="text-sm text-gray-600 mt-2">
                  Returns current date/time in ISO format
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded">
                  "2024-01-18T10:30:00.000Z"
                </code>
              </div>

              <div className="p-4 border rounded-lg">
                <code className="text-blue-600">{'{{ $timestamp }}'}</code>
                <p className="text-sm text-gray-600 mt-2">
                  Returns current Unix timestamp in milliseconds
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded">
                  1705573800000
                </code>
              </div>

              <div className="p-4 border rounded-lg">
                <code className="text-blue-600">{'{{ $uuid }}'}</code>
                <p className="text-sm text-gray-600 mt-2">
                  Generates a random UUID v4
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded">
                  "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
                </code>
              </div>

              <div className="p-4 border rounded-lg">
                <code className="text-blue-600">{'{{ $random(1,100) }}'}</code>
                <p className="text-sm text-gray-600 mt-2">
                  Random integer between min and max (inclusive)
                </p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 p-1 rounded">
                  42
                </code>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section id="array-loops">
        <h2 className="text-3xl font-bold mb-4">Working with Arrays</h2>
        <p className="mb-4">
          When processing arrays (like uploaded CSV files), use <code>$item</code> to reference
          each item in the loop.
        </p>

        <CodeBlock
          language="javascript"
          code={`// Upload File node outputs an array:
[
  { name: "Alice", email: "alice@example.com", age: 25 },
  { name: "Bob", email: "bob@example.com", age: 30 }
]

// In Email node, when processing this array:
To: {{ $item.email }}
Subject: Hello {{ $item.name }}!

// This sends one email to each person`}
        />

        <Callout type="tip" title="Automatic Array Processing">
          Many nodes automatically process arrays. For example, the Email node will
          send one email for each item in an array input.
        </Callout>
      </section>

      <section id="examples">
        <h2 className="text-3xl font-bold mb-4">Common Examples</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Example 1: API Response in Email</h3>
            <CodeBlock
              language="javascript"
              code={`// HTTP Request returns:
{
  "data": {
    "user": {
      "name": "John Doe",
      "email": "john@example.com",
      "status": "active"
    }
  }
}

// In Email node:
To: {{ $prev.data.user.email }}
Subject: Account Status Update
Body: Hi {{ $prev.data.user.name }}, your status is {{ $prev.data.user.status }}`}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Example 2: AI + File Data</h3>
            <CodeBlock
              language="javascript"
              code={`// Upload File (CSV) returns:
[
  { product: "Laptop", price: 999, rating: 4.5 },
  { product: "Mouse", price: 29, rating: 4.2 }
]

// In AI Chat node prompt:
Analyze these products and suggest improvements:
{{ $node.uploadFile_1.data }}

// AI processes all products at once`}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Example 3: Conditional Webhook Data</h3>
            <CodeBlock
              language="javascript"
              code={`// Webhook receives:
{
  "event": "user.created",
  "user_id": 12345,
  "timestamp": "2024-01-18T10:30:00Z"
}

// In IF node condition:
Field: {{ $prev.data.event }}
Operator: equals
Value: user.created

// Then send welcome email based on condition`}
            />
          </div>
        </div>
      </section>

      <section id="best-practices">
        <h2 className="text-3xl font-bold mb-4">Best Practices</h2>

        <div className="space-y-4">
          <Callout type="success" title="Use the Variables Button">
            Click the <strong>Variables</strong> button in text fields to see available
            data and insert expressions without memorizing node IDs.
          </Callout>

          <Callout type="info" title="Test Your Expressions">
            Generate sample responses in the node configuration to see what data
            will be available and test your expressions before running.
          </Callout>

          <Callout type="warning" title="Handle Missing Data">
            Always consider that fields might be undefined. Some nodes provide
            default values, but it's good practice to have fallback logic.
          </Callout>

          <Callout type="tip" title="Use Descriptive Node Labels">
            Rename nodes to descriptive labels like "Fetch User Data" instead of
            "HTTP Request 1" to make expressions more readable.
          </Callout>
        </div>
      </section>

      <section id="next-steps">
        <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="/docs/expressions/node-references"
            className="p-6 border-2 rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-2">Node References →</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Deep dive into accessing data from different node types
            </p>
          </a>
          <a
            href="/docs/expressions/examples"
            className="p-6 border-2 rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-2">More Examples →</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Real-world expression patterns and use cases
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}