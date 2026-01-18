import React from 'react';
import { Webhook, Shield, Globe, Key } from 'lucide-react';
import { NodeCard } from '@/components/mdx/NodeCard';

const CodeBlock = ({ code, language = 'javascript' }: { code: string; language?: string }) => (
  <div className="relative group my-6">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-20 blur group-hover:opacity-30 transition-opacity" />
    <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30">
        <span className="text-xs font-mono text-purple-400">{language}</span>
        <button className="text-xs text-gray-400 hover:text-white">Copy</button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-100 leading-relaxed">{code}</code>
      </pre>
    </div>
  </div>
);

const Callout = ({ type = 'info', title, children }: any) => {
  const configs = {
    info: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
    warning: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
    tip: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  };
  const config = configs[type] || configs.info;
  return (
    <div className={`my-6 p-6 rounded-xl border ${config.border} ${config.bg}`}>
      {title && <h4 className={`font-bold mb-2 ${config.text}`}>{title}</h4>}
      <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
};

const Badge = ({ children, variant = 'default' }: any) => {
  const styles = {
    default: 'bg-red-500/20 border-red-500/30 text-red-400',
    outline: 'bg-white/5 border-white/20 text-gray-400',
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles[variant]}`}>
      {children}
    </span>
  );
};

export default function WebhookTriggerNode() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🪝</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Webhook Trigger
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Trigger</Badge>
                  <Badge variant="outline">HTTP</Badge>
                  <Badge variant="outline">Real-time</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Receive data from external services and trigger workflows via HTTP requests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Globe className="h-8 w-8 text-red-400 mb-2" />
            <div className="text-2xl font-bold text-white">Real-time</div>
            <div className="text-sm text-gray-400">Event Processing</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Shield className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-2xl font-bold text-white">3 Types</div>
            <div className="text-sm text-gray-400">Authentication Methods</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Key className="h-8 w-8 text-blue-400 mb-2" />
            <div className="text-2xl font-bold text-white">Secure</div>
            <div className="text-sm text-gray-400">Token-based Auth</div>
          </div>
        </div>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Webhook Trigger node listens for incoming HTTP requests from external services like GitHub,
            Stripe, Slack, or any custom application. When a request is received, the workflow is automatically
            triggered with the webhook payload data.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This is perfect for event-driven architectures where you need to respond to real-time events
            like new orders, form submissions, payment notifications, or git pushes.
          </p>
        </section>

        {/* Configuration */}
        <section id="configuration">
          <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

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
                {[
                  { field: 'path', type: 'String', req: '✅', desc: 'URL path for webhook endpoint (e.g., /webhook/orders)' },
                  { field: 'method', type: 'Select', req: '❌', desc: 'HTTP method (GET, POST, PUT, DELETE)' },
                  { field: 'authentication', type: 'Select', req: '❌', desc: 'Auth type (none, headerAuth, queryAuth)' },
                  { field: 'authHeaderValue', type: 'String', req: '⚠️', desc: 'Bearer token for headerAuth' },
                  { field: 'authQueryValue', type: 'String', req: '⚠️', desc: 'Secret key for queryAuth' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-red-400 bg-red-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
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

        {/* Authentication */}
        <section id="authentication">
          <h2 className="text-3xl font-black mb-6 text-white">Authentication Methods</h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">1. No Authentication</h3>
              <p className="text-gray-300 mb-4">
                The webhook is publicly accessible. Use only for testing or trusted environments.
              </p>
              <CodeBlock
                language="bash"
                code={`curl -X POST https://your-domain.com/webhook/my-endpoint \\
  -H "Content-Type: application/json" \\
  -d '{"event": "user_created", "userId": "12345"}'`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">2. Header Authentication</h3>
              <p className="text-gray-300 mb-4">
                Secure your webhook with a Bearer token in the Authorization header.
              </p>
              <CodeBlock
                language="bash"
                code={`curl -X POST https://your-domain.com/webhook/my-endpoint \\
  -H "Authorization: Bearer your-secret-token-here" \\
  -H "Content-Type: application/json" \\
  -d '{"event": "payment_received", "amount": 99.99}'`}
              />
              <Callout type="tip" title="Best Practice">
                Use environment variables to store your secret tokens. Never hardcode them in your codebase.
              </Callout>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-green-400">3. Query Authentication</h3>
              <p className="text-gray-300 mb-4">
                Pass a secret key as a query parameter. Useful for services that don't support custom headers.
              </p>
              <CodeBlock
                language="bash"
                code={`curl -X POST "https://your-domain.com/webhook/my-endpoint?key=your-secret-key" \\
  -H "Content-Type: application/json" \\
  -d '{"data": "sensitive information"}'`}
              />
              <Callout type="warning" title="Security Note">
                Query parameters may be logged by servers. Header authentication is more secure.
              </Callout>
            </div>
          </div>
        </section>

        {/* Output */}
        <section id="output">
          <h2 className="text-3xl font-black mb-4 text-white">Output</h2>
          <p className="text-gray-300 mb-4">
            The Webhook Trigger outputs the received HTTP request data:
          </p>

          <CodeBlock
            language="json"
            code={`{
  "path": "/webhook/my-endpoint",
  "method": "POST",
  "body": {
    // The JSON payload sent to the webhook
    "event": "order_created",
    "orderId": "ORD-12345",
    "customer": {
      "email": "customer@example.com",
      "name": "John Doe"
    }
  },
  "timestamp": "2024-01-18T10:30:00.000Z"
}`}
          />

          <h3 className="text-xl font-bold mb-3 text-white mt-6">Accessing Webhook Data</h3>
          <CodeBlock
            language="javascript"
            code={`// Access webhook body
{{ $node.webhook_1.data.body.orderId }}
{{ $node.webhook_1.data.body.customer.email }}

// Access metadata
{{ $node.webhook_1.data.method }}
{{ $node.webhook_1.data.timestamp }}`}
          />
        </section>

        {/* Examples */}
        <section id="examples">
          <h2 className="text-3xl font-black mb-6 text-white">Real-world Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-red-400">Example 1: Stripe Payment Webhook</h3>
              <p className="text-gray-300 mb-4">Process payment confirmations from Stripe:</p>
              <CodeBlock
                language="javascript"
                code={`// Webhook Configuration
Path: /webhook/stripe-payments
Method: POST
Authentication: headerAuth
Auth Header: Bearer sk_live_abc123...

// Stripe sends:
{
  "type": "payment_intent.succeeded",
  "data": {
    "object": {
      "id": "pi_123456",
      "amount": 2000,
      "currency": "usd",
      "customer": "cus_123"
    }
  }
}

// Access in next nodes:
{{ $node.webhook_1.data.body.data.object.amount }}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 2: GitHub Push Webhook</h3>
              <p className="text-gray-300 mb-4">Trigger CI/CD on code pushes:</p>
              <CodeBlock
                language="javascript"
                code={`// Webhook Configuration
Path: /webhook/github-deploy
Method: POST
Authentication: headerAuth

// GitHub sends:
{
  "ref": "refs/heads/main",
  "repository": {
    "name": "my-app",
    "url": "https://github.com/user/my-app"
  },
  "commits": [
    {
      "message": "Fix bug",
      "author": {
        "name": "Jane Doe"
      }
    }
  ]
}`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices">
          <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Always Use Authentication</h4>
              <p className="text-sm text-gray-300">
                Protect your webhooks with authentication to prevent unauthorized access and abuse.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Validate Webhook Signatures</h4>
              <p className="text-sm text-gray-300">
                For services like Stripe and GitHub, verify webhook signatures to ensure authenticity.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Expose Sensitive Paths</h4>
              <p className="text-sm text-gray-300">
                Use non-obvious webhook paths. Avoid generic names like /webhook or /api.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ Handle Failures Gracefully</h4>
              <p className="text-sm text-gray-300">
                Implement error handling. Many services retry failed webhooks, so ensure idempotency.
              </p>
            </div>
          </div>
        </section>

        {/* Related Nodes */}
        <section id="related">
          <h2 className="text-3xl font-black mb-6 text-white">Related Nodes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <NodeCard
              title="Manual Trigger"
              description="Receive data from external services and APIs"
              href="/docs/nodes/triggers/manual"
              icon="🪝"
            />
            <NodeCard
              title="Schedule Trigger"
              description="Run workflows automatically on a schedule"
              href="/docs/nodes/triggers/schedule"
              icon="⏰"
            />
          </div>
        </section>
      </div>
    </div>
  );
}