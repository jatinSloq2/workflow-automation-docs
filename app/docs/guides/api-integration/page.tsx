import Link from 'next/link';
import { Globe, Key, AlertCircle, CheckCircle } from 'lucide-react';

export default function APIIntegrationGuide() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/guides" className="hover:text-white">Guides</Link>
          <span>/</span>
          <span className="text-white">API Integration</span>
        </div>

        {/* Hero */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🌐</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  API Integration Guide
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Learn how to connect to external APIs and build powerful integrations into your workflows
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm text-indigo-300">Intermediate</span>
                  <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">30 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="font-bold mb-4">Quick Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#basics" className="text-indigo-400 hover:text-indigo-300">Basics of API Requests</a></li>
            <li><a href="#auth" className="text-indigo-400 hover:text-indigo-300">Authentication Methods</a></li>
            <li><a href="#workflow" className="text-indigo-400 hover:text-indigo-300">Building API Workflows</a></li>
            <li><a href="#errors" className="text-indigo-400 hover:text-indigo-300">Error Handling</a></li>
            <li><a href="#examples" className="text-indigo-400 hover:text-indigo-300">Real-World Examples</a></li>
            <li><a href="#best" className="text-indigo-400 hover:text-indigo-300">Best Practices</a></li>
          </ul>
        </nav>

        {/* Basics */}
        <section id="basics">
          <h2 className="text-3xl font-black mb-6 text-white">Basics of API Requests</h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              An API (Application Programming Interface) allows your workflows to communicate with external services. 
              The HTTP Request node in WorkflowHub makes it easy to fetch data, submit information, and interact with any 
              web-based service that provides an API.
            </p>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4">Essential Concepts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-400 mb-2">HTTP Methods</h4>
                  <ul className="text-gray-400 text-sm space-y-1 ml-4">
                    <li>• <strong>GET</strong> - Retrieve data from the server</li>
                    <li>• <strong>POST</strong> - Submit new data to the server</li>
                    <li>• <strong>PUT</strong> - Update existing data</li>
                    <li>• <strong>DELETE</strong> - Remove data from the server</li>
                    <li>• <strong>PATCH</strong> - Partially update data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-indigo-400 mb-2">Status Codes</h4>
                  <ul className="text-gray-400 text-sm space-y-1 ml-4">
                    <li>• <strong>2xx (Success)</strong> - Request succeeded (200, 201, 204)</li>
                    <li>• <strong>4xx (Client Error)</strong> - Request has issues (400, 401, 404)</li>
                    <li>• <strong>5xx (Server Error)</strong> - Server encountered an error (500, 503)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section id="auth">
          <h2 className="text-3xl font-black mb-6 text-white">Authentication Methods</h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Most APIs require authentication to verify your identity and ensure you have access. Here are the common methods:
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🔑 No Authentication</h3>
              <p className="text-gray-400 mb-4">Some APIs are public and don't require authentication.</p>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-xs text-gray-400 mb-2">Example: OpenWeather API (free tier)</div>
                <code className="text-sm text-gray-200">GET https://api.openweathermap.org/data/2.5/weather?q=London</code>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-purple-400">🔐 Bearer Token</h3>
              <p className="text-gray-400 mb-4">Include a token in the Authorization header. Most common for modern APIs.</p>
              <div className="bg-black/30 p-4 rounded-lg space-y-2">
                <div className="text-xs text-gray-400">Configure in HTTP Request node:</div>
                <div className="text-sm">
                  <div className="text-gray-300">Authentication: <span className="text-purple-400">bearerToken</span></div>
                  <div className="text-gray-300">Token: <span className="text-purple-400">your_api_key_here</span></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-green-400">👤 Basic Auth</h3>
              <p className="text-gray-400 mb-4">Username and password encoded in the header.</p>
              <div className="bg-black/30 p-4 rounded-lg space-y-2">
                <div className="text-xs text-gray-400">Configure in HTTP Request node:</div>
                <div className="text-sm">
                  <div className="text-gray-300">Authentication: <span className="text-green-400">basicAuth</span></div>
                  <div className="text-gray-300">Username: <span className="text-green-400">your_username</span></div>
                  <div className="text-gray-300">Password: <span className="text-green-400">your_password</span></div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-orange-400">🔑 API Key</h3>
              <p className="text-gray-400 mb-4">A unique key passed as a header or query parameter.</p>
              <div className="bg-black/30 p-4 rounded-lg space-y-2">
                <div className="text-xs text-gray-400">Configure in HTTP Request node:</div>
                <div className="text-sm">
                  <div className="text-gray-300">Authentication: <span className="text-orange-400">apiKey</span></div>
                  <div className="text-gray-300">API Key: <span className="text-orange-400">your_api_key</span></div>
                  <div className="text-gray-300">Header Name: <span className="text-orange-400">X-API-Key</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Workflows */}
        <section id="workflow">
          <h2 className="text-3xl font-black mb-6 text-white">Building API Workflows</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20">
              <h3 className="text-xl font-bold mb-4 text-indigo-400">Step 1: Create HTTP Request Node</h3>
              <ol className="text-gray-400 text-sm space-y-2 ml-4 list-decimal">
                <li>Add an HTTP Request node to your workflow</li>
                <li>Enter the API URL (endpoint)</li>
                <li>Select the HTTP method (GET, POST, etc.)</li>
                <li>Add authentication if required</li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Step 2: Parse Response</h3>
              <p className="text-gray-400 text-sm mb-3">
                After the request succeeds, you'll get a response. Use JSON Parse node to extract the data you need:
              </p>
              <div className="bg-black/30 p-3 rounded-lg text-xs text-gray-300 font-mono">
                {`$node.httpRequest_1.data.results[0].name`}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="text-xl font-bold mb-4 text-green-400">Step 3: Transform Data</h3>
              <p className="text-gray-400 text-sm mb-3">
                Use Data Mapper or Code nodes to transform the response data into the format you need
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-400">Step 4: Use Results</h3>
              <p className="text-gray-400 text-sm">
                Connect to other nodes (Send Email, Slack, Database) to use the API results
              </p>
            </div>
          </div>
        </section>

        {/* Error Handling */}
        <section id="errors">
          <h2 className="text-3xl font-black mb-6 text-white">Error Handling</h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              APIs can fail for various reasons. Always build error handling into your workflows.
            </p>

            <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20">
              <h3 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Common API Errors
              </h3>
              <div className="space-y-3 text-sm">
                <div className="ml-4">
                  <div className="font-semibold text-red-300">401 Unauthorized</div>
                  <div className="text-gray-400">Invalid or missing API key. Check your credentials.</div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-red-300">404 Not Found</div>
                  <div className="text-gray-400">Wrong URL or endpoint doesn't exist. Check the documentation.</div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-red-300">429 Rate Limited</div>
                  <div className="text-gray-400">Too many requests. Add delays between API calls.</div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-red-300">500 Server Error</div>
                  <div className="text-gray-400">API server error. Implement retry logic.</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="text-lg font-bold mb-4 text-green-400 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Error Handling Strategy
              </h3>
              <ol className="text-gray-400 text-sm space-y-2 ml-4 list-decimal">
                <li>Use IF node to check response status</li>
                <li>Enable retry with exponential backoff</li>
                <li>Log errors to track problems</li>
                <li>Send alerts for critical failures</li>
                <li>Implement fallback logic when possible</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples">
          <h2 className="text-3xl font-black mb-6 text-white">Real-World Examples</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Example 1: Fetch GitHub User Data</h3>
              <div className="bg-black/30 p-4 rounded-lg space-y-2 text-sm font-mono text-gray-300">
                <div><span className="text-gray-500">URL:</span> https://api.github.com/users/octocat</div>
                <div><span className="text-gray-500">Method:</span> GET</div>
                <div><span className="text-gray-500">Authentication:</span> None (public API)</div>
                <div className="mt-3 text-gray-400">Response includes: login, name, public_repos, followers</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Example 2: Send Slack Message via API</h3>
              <div className="bg-black/30 p-4 rounded-lg space-y-2 text-sm font-mono text-gray-300">
                <div><span className="text-gray-500">URL:</span> https://slack.com/api/chat.postMessage</div>
                <div><span className="text-gray-500">Method:</span> POST</div>
                <div><span className="text-gray-500">Authentication:</span> Bearer Token</div>
                <div className="mt-3 text-gray-400">Body: {'{channel, text, thread_ts}'}</div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-green-400">Example 3: Create Stripe Charge</h3>
              <div className="bg-black/30 p-4 rounded-lg space-y-2 text-sm font-mono text-gray-300">
                <div><span className="text-gray-500">URL:</span> https://api.stripe.com/v1/charges</div>
                <div><span className="text-gray-500">Method:</span> POST</div>
                <div><span className="text-gray-500">Authentication:</span> Basic Auth (API Key)</div>
                <div className="mt-3 text-gray-400">Body: {'{amount, currency, source, description}'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best">
          <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Always Validate Responses</h4>
              <p className="text-sm text-gray-300">
                Check status code and response data before processing. APIs can return unexpected formats.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Store API Keys Securely</h4>
              <p className="text-sm text-gray-300">
                Use environment variables, not hardcoded values. Never commit secrets to version control.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Implement Retry Logic</h4>
              <p className="text-sm text-gray-300">
                Use exponential backoff for transient failures. Don't retry on authentication errors.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ Respect Rate Limits</h4>
              <p className="text-sm text-gray-300">
                Add delays between requests. Monitor response headers for rate limit information.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Log Sensitive Data</h4>
              <p className="text-sm text-gray-300">
                Never log API keys, tokens, or personal information in workflow logs.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
          <h3 className="text-2xl font-bold mb-4">Ready to Build API Integrations?</h3>
          <p className="text-gray-300 mb-6">
            Start by exploring the HTTP Request node and try connecting to a public API like GitHub or OpenWeather.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs/nodes/data/http-request" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-all">
              HTTP Request Node
            </Link>
            <Link href="/docs/guides/error-handling" className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all">
              Error Handling Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
