import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Mail, Send, Users, FileText } from 'lucide-react';

export default function EmailNode() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-xl" />
                    <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">📧</div>
                            <div className="flex-1">
                                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Send Email
                                </h1>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge>Communication</Badge>
                                    <Badge variant="outline">SMTP</Badge>
                                    <Badge variant="outline">HTML Support</Badge>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Send personalized emails via SMTP with support for HTML templates and bulk sending
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Mail className="h-8 w-8 text-blue-400 mb-2" />
                        <div className="text-2xl font-bold text-white">HTML/Text</div>
                        <div className="text-sm text-gray-400">Email Formats</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Users className="h-8 w-8 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold text-white">Bulk Send</div>
                        <div className="text-sm text-gray-400">Multiple Recipients</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Send className="h-8 w-8 text-green-400 mb-2" />
                        <div className="text-2xl font-bold text-white">SMTP</div>
                        <div className="text-sm text-gray-400">Standard Protocol</div>
                    </div>
                </div>

                {/* Overview */}
                <section id="overview">
                    <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The Send Email node allows you to send emails via SMTP to one or multiple recipients.
                        It supports both plain text and HTML emails, dynamic content with expressions, and can send personalized emails to each item in an array.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Perfect for notifications, welcome emails, reports, alerts, newsletters, and any automated email communication in your workflows.
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
                                    { field: 'fromEmail', type: 'String', req: '✅', desc: 'Sender email address' },
                                    { field: 'toEmail', type: 'String', req: '✅', desc: 'Recipient email (supports expressions)' },
                                    { field: 'subject', type: 'String', req: '✅', desc: 'Email subject line' },
                                    { field: 'body', type: 'Text', req: '✅', desc: 'Email content (text or HTML)' },
                                    { field: 'html', type: 'Boolean', req: '❌', desc: 'Send as HTML email (default: false)' },
                                    { field: 'smtpHost', type: 'String', req: '✅', desc: 'SMTP server hostname' },
                                    { field: 'smtpPort', type: 'Number', req: '✅', desc: 'SMTP port (587 for TLS, 465 for SSL)' },
                                    { field: 'smtpUser', type: 'String', req: '✅', desc: 'SMTP username' },
                                    { field: 'smtpPassword', type: 'String', req: '✅', desc: 'SMTP password' },
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

                    <Callout type="warning" title="SMTP Credentials">
                        Store SMTP credentials securely. For Gmail, use App Passwords instead of your account password. Enable "Less secure app access" or use OAuth2 for better security.
                    </Callout>
                </section>

                {/* SMTP Providers */}
                <section id="smtp-providers">
                    <h2 className="text-3xl font-black mb-6 text-white">Common SMTP Providers</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h4 className="font-bold text-blue-400 mb-3">Gmail</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                                <div><strong>Host:</strong> smtp.gmail.com</div>
                                <div><strong>Port:</strong> 587 (TLS) or 465 (SSL)</div>
                                <div><strong>Note:</strong> Use App Password</div>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h4 className="font-bold text-purple-400 mb-3">Outlook / Office 365</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                                <div><strong>Host:</strong> smtp.office365.com</div>
                                <div><strong>Port:</strong> 587</div>
                                <div><strong>TLS:</strong> Required</div>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h4 className="font-bold text-green-400 mb-3">SendGrid</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                                <div><strong>Host:</strong> smtp.sendgrid.net</div>
                                <div><strong>Port:</strong> 587</div>
                                <div><strong>User:</strong> apikey</div>
                            </div>
                        </div>

                        <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h4 className="font-bold text-orange-400 mb-3">AWS SES</h4>
                            <div className="text-sm text-gray-300 space-y-1">
                                <div><strong>Host:</strong> email-smtp.region.amazonaws.com</div>
                                <div><strong>Port:</strong> 587</div>
                                <div><strong>Auth:</strong> SMTP credentials</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Output */}
                <section id="output">
                    <h2 className="text-3xl font-black mb-4 text-white">Output</h2>
                    <p className="text-gray-300 mb-4">
                        The Email node outputs send results for each email:
                    </p>

                    <CodeBlock
                        language="json"
                        code={`{
  "emails": [
    {
      "sent": true,
      "messageId": "<abc123@example.com>",
      "from": "noreply@example.com",
      "to": "user@example.com",
      "subject": "Welcome to Our Service",
      "item": { /* original data item */ }
    }
  ],
  "totalSent": 5,
  "totalFailed": 0
}`}
                    />
                </section>

                {/* Examples */}
                <section id="examples">
                    <h2 className="text-3xl font-black mb-6 text-white">Usage Examples</h2>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">Example 1: Simple Welcome Email</h3>
                            <p className="text-gray-300 mb-4">Send a plain text welcome email:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "fromEmail": "noreply@myapp.com",
  "toEmail": "{{$input.email}}",
  "subject": "Welcome to MyApp!",
  "body": "Hi {{$input.name}},\\n\\nWelcome to MyApp! We're excited to have you on board.\\n\\nBest regards,\\nThe MyApp Team",
  "html": false,
  "smtpHost": "smtp.gmail.com",
  "smtpPort": 587,
  "smtpUser": "your-email@gmail.com",
  "smtpPassword": "your-app-password"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-purple-400">Example 2: HTML Email Template</h3>
                            <p className="text-gray-300 mb-4">Rich HTML email with styling:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "fromEmail": "team@company.com",
  "toEmail": "{{$prev.data.email}}",
  "subject": "Your Order #{{$prev.data.orderId}} is Confirmed",
  "body": "<div style='font-family: Arial, sans-serif; max-width: 600px;'><h1 style='color: #333;'>Order Confirmed!</h1><p>Hi {{$prev.data.name}},</p><p>Thank you for your order. Your order <strong>#{{$prev.data.orderId}}</strong> has been confirmed.</p><div style='background: #f5f5f5; padding: 20px; margin: 20px 0;'><h3>Order Summary</h3><p>Total:<strong>\${{$prev.data.total}}</strong></p></div><p>We'll send you another email when your order ships.</p><p>Best regards,<br>The Team</p></div>",
  "html": true,
  "smtpHost": "smtp.sendgrid.net",
  "smtpPort": 587,
  "smtpUser": "apikey",
  "smtpPassword": "SG.xxx..."
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">Example 3: Bulk Personalized Emails</h3>
                            <p className="text-gray-300 mb-4">Send personalized email to each user in array:</p>
                            <CodeBlock
                                language="javascript"
                                code={`// Input: Array of users from previous node
[
  { "email": "alice@example.com", "name": "Alice", "score": 95 },
  { "email": "bob@example.com", "name": "Bob", "score": 87 }
]

// Email Configuration:
{
  "fromEmail": "results@school.com",
  "toEmail": "{{$prev.data.email}}",  // References each item's email
  "subject": "Your Test Results, {{$prev.data.name}}",
  "body": "Hi {{$prev.data.name}},\\n\\nYour test score: {{$prev.data.score}}%\\n\\nGreat job!",
  "html": false,
  ...
}

// Sends 2 personalized emails, one to Alice and one to Bob`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Example 4: Alert/Notification Email</h3>
                            <p className="text-gray-300 mb-4">Automated alert with data from workflow:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "fromEmail": "alerts@monitoring.com",
  "toEmail": "admin@company.com",
  "subject": "🚨 Alert: High CPU Usage Detected",
  "body": "Alert Details:\\n\\nServer: {{$node.monitor.data.serverName}}\\nCPU Usage: {{$node.monitor.data.cpuPercent}}%\\nThreshold: 80%\\n\\nTime: {{$now}}\\n\\nPlease investigate immediately.",
  "html": false,
  "smtpHost": "smtp.office365.com",
  "smtpPort": 587,
  "smtpUser": "alerts@company.com",
  "smtpPassword": "password"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-pink-400">Example 5: Daily Report Email</h3>
                            <p className="text-gray-300 mb-4">Automated daily summary with AI-generated content:</p>
                            <CodeBlock
                                language="json"
                                code={`{
  "fromEmail": "reports@analytics.com",
  "toEmail": "team@company.com",
  "subject": "Daily Sales Report - {{$now}}",
  "body": "<h2>📊 Daily Sales Report</h2><p>Generated: {{$now}}</p><h3>Summary</h3><ul><li>Total Sales: \${{$node.aggregate.data.total}}</li><li>Orders: {{$node.aggregate.data.count}}</li><li>Avg Order: {"\${{$node.aggregate.data.average}}"}</li></ul><h3>AI Insights</h3><p>{{$node.ai_analysis.data.response}}</p>",
  "html": true,
  "smtpHost": "smtp.gmail.com",
  "smtpPort": 587,
  "smtpUser": "reports@company.com",
  "smtpPassword": "app-password"
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
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Use App Passwords for Gmail</h4>
                            <p className="text-sm text-gray-300">
                                Never use your main Gmail password. Create an App Password in your Google Account settings for better security.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Validate Email Addresses</h4>
                            <p className="text-sm text-gray-300">
                                Add a filter or validation node before the email node to ensure all email addresses are valid and prevent send failures.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Include Unsubscribe Links</h4>
                            <p className="text-sm text-gray-300">
                                For marketing emails, always include an unsubscribe link to comply with regulations like CAN-SPAM and GDPR.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Send High Volume via Personal SMTP</h4>
                            <p className="text-sm text-gray-300">
                                Gmail, Outlook, etc. have daily sending limits (typically 100-500 emails/day). Use SendGrid, AWS SES, or Mailgun for bulk sending.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Hardcode Credentials</h4>
                            <p className="text-sm text-gray-300">
                                Never hardcode SMTP passwords in workflows. Use environment variables or secure credential storage.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Email Deliverability</h4>
                            <p className="text-sm text-gray-300">
                                Set up SPF, DKIM, and DMARC records for your domain to improve email deliverability and prevent emails from going to spam.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Rate Limiting</h4>
                            <p className="text-sm text-gray-300">
                                For bulk sends, add delays between emails or use batch processing to avoid SMTP rate limits and potential blocking.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Dynamic Content */}
                <section id="dynamic-content">
                    <h2 className="text-3xl font-black mb-6 text-white">Dynamic Content with Expressions</h2>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <p className="text-gray-300 mb-4">
                            Use expressions to personalize emails with data from previous nodes:
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-blue-400 mb-2">From Input Data:</h4>
                                <CodeBlock
                                    language="javascript"
                                    code={`// Access workflow input
{{$input.userName}}
{{$input.email}}
{{$input.orderNumber}}`}
                                />
                            </div>

                            <div>
                                <h4 className="font-bold text-purple-400 mb-2">From Previous Node:</h4>
                                <CodeBlock
                                    language="javascript"
                                    code={`// Access previous node data
{{$prev.data.email}}
{{$prev.data.name}}
{{$prev.data.response}}  // From AI node`}
                                />
                            </div>

                            <div>
                                <h4 className="font-bold text-green-400 mb-2">From Specific Node:</h4>
                                <CodeBlock
                                    language="javascript"
                                    code={`// Reference any node by ID
{{$node.http_1.data.userId}}
{{$node.ai_analysis.data.response}}
{{$node.aggregate.data.total}}`}
                                />
                            </div>

                            <div>
                                <h4 className="font-bold text-orange-400 mb-2">Built-in Functions:</h4>
                                <CodeBlock
                                    language="javascript"
                                    code={`// Use built-in functions
{{$now}}  // Current timestamp
{{$timestamp}}  // Unix timestamp
{{$uuid}}  // Generate UUID`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* When to Use */}
                <section id="when-to-use">
                    <h2 className="text-3xl font-black mb-6 text-white">When to Use Email Node</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <h4 className="font-bold text-green-400 mb-3">✅ Perfect For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Welcome emails for new users</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Order confirmations and receipts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Password reset notifications</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Automated reports and summaries</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>System alerts and monitoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Personalized campaigns (small scale)</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                            <h4 className="font-bold text-red-400 mb-3">❌ Not Ideal For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Large marketing campaigns (use ESP)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Transactional emails at scale</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Advanced tracking and analytics</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>A/B testing campaigns</span>
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
                            title="Slack"
                            description="Send messages to Slack channels"
                            href="/docs/nodes/communication/slack"
                            icon="💬"
                        />
                        <NodeCard
                            title="AI Chat"
                            description="Generate email content with AI"
                            href="/docs/nodes/ai/ai-chat"
                            icon="🤖"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}