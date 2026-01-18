import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Globe, Lock, Zap, RefreshCw } from 'lucide-react';

export default function HttpRequestNode() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 blur-xl" />
                    <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">🌐</div>
                            <div className="flex-1">
                                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    HTTP Request
                                </h1>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge>Data</Badge>
                                    <Badge variant="outline">API</Badge>
                                    <Badge variant="outline">Integration</Badge>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Make HTTP requests to external APIs and services with authentication and retry support
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Globe className="h-8 w-8 text-blue-400 mb-2" />
                        <div className="text-2xl font-bold text-white">6 Methods</div>
                        <div className="text-sm text-gray-400">HTTP Verbs</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Lock className="h-8 w-8 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold text-white">5 Auth Types</div>
                        <div className="text-sm text-gray-400">Authentication</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <RefreshCw className="h-8 w-8 text-green-400 mb-2" />
                        <div className="text-2xl font-bold text-white">Auto Retry</div>
                        <div className="text-sm text-gray-400">On Failure</div>
                    </div>
                </div>

                {/* Overview */}
                <section id="overview">
                    <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The HTTP Request node enables you to make HTTP calls to external APIs, web services, and endpoints. 
                        It supports all standard HTTP methods, multiple authentication types, custom headers, query parameters, and automatic retry logic.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        This is the fundamental building block for integrating with third-party services like payment gateways, 
                        CRMs, databases, social media platforms, and any RESTful API.
                    </p>
                </section>

                {/* Configuration */}
                <section id="configuration">
                    <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

                    <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 border-b border-white/10">
                                <tr>
                                    <th className="py-4 px-6 text-sm font-bold text-blue-400">Field</th>
                                    <th className="py-4 px-6 text-sm font-bold text-blue-400">Type</th>
                                    <th className="py-4 px-6 text-sm font-bold text-blue-400">Required</th>
                                    <th className="py-4 px-6 text-sm font-bold text-blue-400">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { field: 'url', type: 'String', req: '✅', desc: 'Target URL for the request' },
                                    { field: 'method', type: 'Select', req: '❌', desc: 'HTTP method (GET, POST, PUT, DELETE, PATCH, HEAD)' },
                                    { field: 'headers', type: 'JSON', req: '❌', desc: 'Custom HTTP headers' },
                                    { field: 'queryParameters', type: 'Key-Value', req: '❌', desc: 'URL query parameters' },
                                    { field: 'body', type: 'JSON', req: '❌', desc: 'Request body (for POST, PUT, PATCH)' },
                                    { field: 'authentication', type: 'Select', req: '❌', desc: 'Auth type: none, basicAuth, bearerToken, apiKey, oauth2' },
                                    { field: 'timeout', type: 'Number', req: '❌', desc: 'Request timeout in milliseconds (default: 30000)' },
                                    { field: 'retryOnFail', type: 'Boolean', req: '❌', desc: 'Enable automatic retry on failure' },
                                    { field: 'retryCount', type: 'Number', req: '❌', desc: 'Maximum retry attempts (default: 3)' },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6">
                                            <code className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
                                        </td>
                                        <td className="py-4 px-6 text-gray-300 text-sm">{row.type}</td>
                                        <td className="py-4 px-6 text-sm">{row.req}</td>
                                        <td className="py-4 px-6 text-gray-400 text-sm">{row.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Callout type="info" title="Dynamic Values">
                        All fields support expressions like {`{{$node.previous.data.url}}`} to use data from previous nodes.
                    </Callout>
                </section>

                {/* Authentication */}
                <section id="authentication">
                    <h2 className="text-3xl font-black mb-6 text-white">Authentication Methods</h2>

                    <div className="space-y-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">1. No Authentication</h3>
                            <p className="text-gray-300 mb-4">For public APIs that don't require authentication.</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/public/data",
  "method": "GET",
  "authentication": "none"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-purple-400">2. Basic Authentication</h3>
                            <p className="text-gray-300 mb-4">Username and password encoded in Base64.</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/data",
  "method": "GET",
  "authentication": "basicAuth",
  "username": "myuser",
  "password": "mypassword"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">3. Bearer Token</h3>
                            <p className="text-gray-300 mb-4">JWT or OAuth tokens in Authorization header.</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/data",
  "method": "GET",
  "authentication": "bearerToken",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-orange-400">4. API Key</h3>
                            <p className="text-gray-300 mb-4">Custom header with API key.</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/data",
  "method": "GET",
  "authentication": "apiKey",
  "apiKey": "sk_live_abc123xyz",
  "apiKeyHeader": "X-API-Key"
}`}
                            />
                        </div>
                    </div>
                </section>

                {/* Output */}
                <section id="output">
                    <h2 className="text-3xl font-black mb-4 text-white">Output</h2>
                    <p className="text-gray-300 mb-4">
                        The HTTP Request node outputs the API response data:
                    </p>

                    <CodeBlock
                        language="json"
                        code={`{
  "data": {
    // Response body from the API
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "metadata": {
    "statusCode": 200,
    "headers": {
      "content-type": "application/json",
      "x-rate-limit": "100"
    },
    "attempt": 1
  }
}`}
                    />

                    <h3 className="text-xl font-bold mb-3 text-white mt-6">Accessing Response Data</h3>
                    <CodeBlock
                        language="javascript"
                        code={`// Access response data
{{ $node.http_1.data.id }}
{{ $node.http_1.data.email }}

// Access metadata
{{ $node.http_1.metadata.statusCode }}
{{ $node.http_1.metadata.headers['x-rate-limit'] }}`}
                    />
                </section>

                {/* Examples */}
                <section id="examples">
                    <h2 className="text-3xl font-black mb-6 text-white">Usage Examples</h2>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">Example 1: Fetch User Data (GET)</h3>
                            <p className="text-gray-300 mb-4">Simple GET request to fetch data:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/users/{{$input.userId}}",
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  },
  "queryParameters": {
    "include": "profile,settings"
  },
  "authentication": "bearerToken",
  "token": "your-api-token"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">Example 2: Create Resource (POST)</h3>
                            <p className="text-gray-300 mb-4">POST request with JSON body:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/orders",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "customerId": "{{$input.customerId}}",
    "items": [
      {
        "productId": "prod_123",
        "quantity": 2
      }
    ],
    "total": 99.99
  },
  "authentication": "apiKey",
  "apiKey": "sk_live_abc123"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-purple-400">Example 3: Update Data (PUT)</h3>
                            <p className="text-gray-300 mb-4">Update existing resource:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.example.com/users/{{$node.previous.data.userId}}",
  "method": "PUT",
  "body": {
    "name": "{{$input.name}}",
    "email": "{{$input.email}}",
    "updatedAt": "{{$now}}"
  },
  "authentication": "bearerToken",
  "token": "{{$node.auth.data.accessToken}}"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Example 4: With Retry Logic</h3>
                            <p className="text-gray-300 mb-4">Automatic retry on failure:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "url": "https://api.unreliable-service.com/data",
  "method": "GET",
  "timeout": 5000,
  "retryOnFail": true,
  "retryCount": 3,
  "authentication": "apiKey",
  "apiKey": "your-key"
}

// Will retry up to 3 times with exponential backoff
// Wait times: 1s, 2s, 3s between retries`}
                            />
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section id="best-practices">
                    <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

                    <div className="space-y-4">
                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Environment Variables for Secrets</h4>
                            <p className="text-sm text-gray-300">
                                Store API keys, tokens, and passwords as environment variables or in a secure credential store, 
                                never hardcode them in workflows.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Set Appropriate Timeouts</h4>
                            <p className="text-sm text-gray-300">
                                Configure timeouts based on expected API response times. Default 30 seconds may be too long 
                                for fast APIs or too short for slow ones.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Handle Errors Gracefully</h4>
                            <p className="text-sm text-gray-300">
                                Add error handling nodes after HTTP requests to manage failed responses, rate limits, and network errors.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Ignore Rate Limits</h4>
                            <p className="text-sm text-gray-300">
                                Respect API rate limits. Add delays or implement exponential backoff to avoid being blocked.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Send Sensitive Data in URLs</h4>
                            <p className="text-sm text-gray-300">
                                Never include passwords, API keys, or sensitive data in query parameters. Use headers or request body instead.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Response Validation</h4>
                            <p className="text-sm text-gray-300">
                                Always validate API responses before using the data. Check status codes and verify expected fields exist.
                            </p>
                        </div>
                    </div>
                </section>

                {/* When to Use */}
                <section id="when-to-use">
                    <h2 className="text-3xl font-black mb-6 text-white">When to Use HTTP Request</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <h4 className="font-bold text-green-400 mb-3">✅ Perfect For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Integrating with third-party APIs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Fetching external data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Sending data to webhooks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>RESTful API operations (CRUD)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Microservice communication</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Payment gateway integration</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                            <h4 className="font-bold text-red-400 mb-3">❌ Not Ideal For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>GraphQL queries (use specialized node)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>WebSocket connections</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Large file uploads (use file upload node)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Streaming data</span>
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
                            title="Webhook Trigger"
                            description="Receive HTTP requests from external services"
                            href="/docs/nodes/triggers/webhook"
                            icon="🪝"
                        />
                        <NodeCard
                            title="JSON Parse"
                            description="Parse and manipulate JSON responses"
                            href="/docs/nodes/data/json-parse"
                            icon="📋"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}