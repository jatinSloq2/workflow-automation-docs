import { Badge } from '@/components/ui/badge';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Bell, MessageSquare, Users } from 'lucide-react';

export default function SlackNode() {

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">💬</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Slack
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Communication</Badge>
                  <Badge variant="outline">Webhooks</Badge>
                  <Badge variant="outline">Bot Token</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Send messages, notifications, and alerts to Slack channels via webhooks or bot tokens
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <MessageSquare className="h-8 w-8 text-purple-400 mb-2" />
            <div className="text-2xl font-bold text-white">Real-time</div>
            <div className="text-sm text-gray-400">Instant Delivery</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Users className="h-8 w-8 text-pink-400 mb-2" />
            <div className="text-2xl font-bold text-white">Channels</div>
            <div className="text-sm text-gray-400">Public & Private</div>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <Bell className="h-8 w-8 text-blue-400 mb-2" />
            <div className="text-2xl font-bold text-white">Alerts</div>
            <div className="text-sm text-gray-400">Notifications</div>
          </div>
        </div>

        {/* Overview */}
        <section>
          <h2 className="text-3xl font-black mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The Slack node enables you to send messages to Slack channels from your workflows. Perfect for team notifications, alerts, status updates, and automated reporting.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Supports both incoming webhooks (simpler setup) and bot tokens (more features like posting as a bot, reactions, etc.).
          </p>
        </section>

        {/* Configuration */}
        <section>
          <h2 className="text-3xl font-black mb-6">Configuration</h2>
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
                {[
                  { field: 'channel', type: 'String', req: '✅', desc: 'Channel name (e.g., #general, #alerts)' },
                  { field: 'text', type: 'Text', req: '✅', desc: 'Message content (supports expressions)' },
                  { field: 'authentication', type: 'Select', req: '✅', desc: 'webhook or token' },
                  { field: 'webhookUrl', type: 'String', req: '⚠️', desc: 'Required for webhook auth' },
                  { field: 'botToken', type: 'String', req: '⚠️', desc: 'Required for token auth' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6">
                      <code className="text-purple-400 bg-purple-500/10 px-2 py-1 rounded text-sm">{row.field}</code>
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

        {/* Setup Guide */}
        <section>
          <h2 className="text-3xl font-black mb-6">Setup Guide</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Option 1: Incoming Webhook (Recommended for Simple Use)</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <span>Go to your Slack workspace settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span>Navigate to "Apps" → "Manage" → "Custom Integrations"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <span>Click "Incoming Webhooks" → "Add to Slack"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <span>Choose a channel and copy the webhook URL</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">5.</span>
                  <span>Paste the URL into the webhookUrl field</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Option 2: Bot Token (Advanced Features)</h3>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">1.</span>
                  <span>Go to api.slack.com/apps</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">2.</span>
                  <span>Create a new app or select existing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">3.</span>
                  <span>Go to "OAuth & Permissions"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">4.</span>
                  <span>Add "chat:write" scope</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-400 font-bold">5.</span>
                  <span>Install app to workspace and copy Bot User OAuth Token</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Output */}
        <section>
          <h2 className="text-3xl font-black mb-4">Output</h2>
          <CodeBlock
            language="json"
            code={`{
  "sent": true,
  "channel": "#general",
  "text": "Deployment successful! 🚀"
}`}
          />
        </section>

        {/* Examples */}
        <section>
          <h2 className="text-3xl font-black mb-6">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 1: Simple Notification</h3>
              <CodeBlock
                language="json"
                code={`{
  "channel": "#general",
  "text": "New user signup: {{$prev.data.name}} ({{$prev.data.email}})",
  "authentication": "webhook",
  "webhookUrl": "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Example 2: Alert with Data</h3>
              <CodeBlock
                language="json"
                code={`{
  "channel": "#alerts",
  "text": "🚨 *High CPU Usage Detected*\\n\\nServer: {{$node.monitor.data.server}}\\nCPU: {{$node.monitor.data.cpu}}%\\nTime: {{$now}}",
  "authentication": "webhook",
  "webhookUrl": "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
}`}
              />
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 3: Success Message</h3>
              <CodeBlock
                language="json"
                code={`{
  "channel": "#deployments",
  "text": "✅ *Deployment Successful*\\n\\nEnvironment: Production\\nVersion: {{$node.build.data.version}}\\nCommit: {{$node.build.data.commit}}\\nDeployed by: {{$input.user}}",
  "authentication": "token",
  "botToken": "xoxb-your-bot-token"
}`}
              />
            </div>
          </div>
        </section>

        {/* Message Formatting */}
        <section>
          <h2 className="text-3xl font-black mb-6">Message Formatting</h2>
          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <p className="text-gray-300 mb-4">Slack supports mrkdwn formatting:</p>
            <CodeBlock
              language="text"
              code={`*Bold text*
_Italic text_
~Strikethrough~
\`Code\`
\`\`\`Code block\`\`\`
> Quote
• Bullet point
1. Numbered list
<https://example.com|Link text>
:emoji: Emojis`}
            />
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Webhooks for Simple Notifications</h4>
              <p className="text-sm text-gray-300">
                Webhooks are easier to set up and perfect for one-way notifications.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Include Context in Messages</h4>
              <p className="text-sm text-gray-300">
                Add relevant data, timestamps, and links to help your team act quickly.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Spam Channels</h4>
              <p className="text-sm text-gray-300">
                Group related messages or use threading to avoid overwhelming channels.
              </p>
            </div>

            <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Rate Limits</h4>
              <p className="text-sm text-gray-300">
                Slack has rate limits (1 message per second for webhooks). Add delays for bulk messages.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}