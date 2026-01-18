import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Clock, Calendar, Repeat, Globe } from 'lucide-react';

export default function ScheduleTriggerNode() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-20 blur-xl" />
                    <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">⏰</div>
                            <div className="flex-1">
                                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                    Schedule Trigger
                                </h1>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge>Trigger</Badge>
                                    <Badge variant="outline">Start Node</Badge>
                                    <Badge variant="outline">Automated</Badge>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Automatically execute workflows on a recurring schedule using intervals or cron expressions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Clock className="h-8 w-8 text-orange-400 mb-2" />
                        <div className="text-2xl font-bold text-white">2 Types</div>
                        <div className="text-sm text-gray-400">Interval & Cron</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Repeat className="h-8 w-8 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold text-white">Automated</div>
                        <div className="text-sm text-gray-400">Execution Mode</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Globe className="h-8 w-8 text-blue-400 mb-2" />
                        <div className="text-2xl font-bold text-white">Timezone</div>
                        <div className="text-sm text-gray-400">Support</div>
                    </div>
                </div>

                {/* Overview */}
                <section id="overview">
                    <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The Schedule Trigger node enables automated, recurring workflow executions based on time intervals or cron expressions. 
                        Unlike manual triggers that require user action, scheduled workflows run automatically in the background at specified times.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        This is essential for automation tasks like data synchronization, report generation, monitoring, backups, and any 
                        recurring operations that need to happen without human intervention.
                    </p>
                </section>

                {/* Configuration */}
                <section id="configuration">
                    <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

                    <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 border-b border-white/10">
                                <tr>
                                    <th className="py-4 px-6 text-sm font-bold text-orange-400">Field</th>
                                    <th className="py-4 px-6 text-sm font-bold text-orange-400">Type</th>
                                    <th className="py-4 px-6 text-sm font-bold text-orange-400">Required</th>
                                    <th className="py-4 px-6 text-sm font-bold text-orange-400">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">enabled</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Boolean</td>
                                    <td className="py-4 px-6 text-sm">✅</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">Enable or disable the schedule</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">scheduleType</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Select</td>
                                    <td className="py-4 px-6 text-sm">✅</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">Type: interval or cron</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">interval</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Number</td>
                                    <td className="py-4 px-6 text-sm">⚠️</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">Time interval (for interval type)</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">unit</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Select</td>
                                    <td className="py-4 px-6 text-sm">⚠️</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">seconds, minutes, hours, days</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">cronExpression</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">String</td>
                                    <td className="py-4 px-6 text-sm">⚠️</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">Cron expression (for cron type)</td>
                                </tr>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-orange-400 bg-orange-500/10 px-2 py-1 rounded text-sm">timezone</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">String</td>
                                    <td className="py-4 px-6 text-sm">❌</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">Timezone for schedule (default: UTC)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Callout type="info" title="Configuration Note">
                        Either use interval + unit OR cronExpression, not both. Cron expressions provide more flexibility for complex schedules like "every Monday at 9 AM" or "first day of each month".
                    </Callout>
                </section>

                {/* Output */}
                <section id="output">
                    <h2 className="text-3xl font-black mb-4 text-white">Output</h2>
                    <p className="text-gray-300 mb-4">
                        The Schedule Trigger outputs execution metadata:
                    </p>

                    <CodeBlock
                        language="json"
                        code={`{
  "interval": 5,
  "timezone": "UTC",
  "executedAt": "2024-01-18T10:30:00.000Z",
  "scheduleType": "interval"
}`}
                    />
                </section>

                {/* Usage Examples */}
                <section id="examples">
                    <h2 className="text-3xl font-black mb-6 text-white">Usage Examples</h2>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-orange-400">Example 1: Run Every 5 Minutes</h3>
                            <p className="text-gray-300 mb-4">
                                Simple interval-based schedule for frequent tasks:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`{
  "enabled": true,
  "scheduleType": "interval",
  "interval": 5,
  "unit": "minutes"
}

// Workflow executes every 5 minutes automatically`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">Example 2: Daily Report at 9 AM</h3>
                            <p className="text-gray-300 mb-4">
                                Using cron expression for specific time:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`{
  "enabled": true,
  "scheduleType": "cron",
  "cronExpression": "0 0 9 * * *",
  "timezone": "America/New_York"
}

// Runs every day at 9:00 AM EST
// Cron format: second minute hour day month dayOfWeek`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">Example 3: Weekly Backup (Sunday Midnight)</h3>
                            <p className="text-gray-300 mb-4">
                                Run every Sunday at midnight:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`{
  "enabled": true,
  "scheduleType": "cron",
  "cronExpression": "0 0 0 * * 0",
  "timezone": "UTC"
}

// Sunday (0) at 00:00 UTC`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-purple-400">Example 4: First Day of Month</h3>
                            <p className="text-gray-300 mb-4">
                                Monthly reports on the first day:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`{
  "enabled": true,
  "scheduleType": "cron",
  "cronExpression": "0 0 8 1 * *",
  "timezone": "UTC"
}

// 1st day of every month at 8:00 AM`}
                            />
                        </div>
                    </div>
                </section>

                {/* Cron Expression Guide */}
                <section id="cron-guide">
                    <h2 className="text-3xl font-black mb-6 text-white">Cron Expression Guide</h2>
                    
                    <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 mb-6">
                        <h3 className="text-xl font-bold mb-4 text-orange-400">Format</h3>
                        <CodeBlock
                            language="text"
                            code={`┌───────────── second (0-59)
│ ┌─────────── minute (0-59)
│ │ ┌───────── hour (0-23)
│ │ │ ┌─────── day of month (1-31)
│ │ │ │ ┌───── month (1-12)
│ │ │ │ │ ┌─── day of week (0-6, Sunday = 0)
│ │ │ │ │ │
* * * * * *`}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                            <h4 className="font-bold text-blue-400 mb-2">Common Patterns</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                                <div><code className="text-blue-400">0 0 */6 * * *</code> - Every 6 hours</div>
                                <div><code className="text-blue-400">0 30 9 * * 1-5</code> - 9:30 AM weekdays</div>
                                <div><code className="text-blue-400">0 0 0 1,15 * *</code> - 1st and 15th</div>
                                <div><code className="text-blue-400">0 */15 * * * *</code> - Every 15 minutes</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                            <h4 className="font-bold text-purple-400 mb-2">Special Characters</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                                <div><code className="text-purple-400">*</code> - Any value</div>
                                <div><code className="text-purple-400">,</code> - Value list (1,3,5)</div>
                                <div><code className="text-purple-400">-</code> - Range (1-5)</div>
                                <div><code className="text-purple-400">/</code> - Step values (*/5)</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Practices */}
                <section id="best-practices">
                    <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

                    <div className="space-y-4">
                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Set Appropriate Intervals</h4>
                            <p className="text-sm text-gray-300">
                                Avoid overly frequent schedules that could overload systems. Consider API rate limits, database load, 
                                and system resources when choosing intervals.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Cron for Complex Schedules</h4>
                            <p className="text-sm text-gray-300">
                                For specific times, days, or complex patterns, cron expressions are more powerful and precise 
                                than simple intervals.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Run Too Frequently</h4>
                            <p className="text-sm text-gray-300">
                                Schedules under 1 minute can create excessive load. For high-frequency needs, consider using 
                                queue systems or event-driven architectures instead.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Timezone Settings</h4>
                            <p className="text-sm text-gray-300">
                                Always specify timezone for time-sensitive operations. Default UTC may not match your business hours. 
                                Use IANA timezone names like "America/New_York" or "Europe/London".
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Execution Overlap</h4>
                            <p className="text-sm text-gray-300">
                                If a workflow might take longer than the schedule interval, implement checks to prevent overlapping 
                                executions or use queuing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* When to Use */}
                <section id="when-to-use">
                    <h2 className="text-3xl font-black mb-6 text-white">When to Use Schedule Trigger</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <h4 className="font-bold text-green-400 mb-3">✅ Perfect For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Regular data synchronization between systems</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Automated report generation (daily, weekly, monthly)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Scheduled backups and data exports</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Periodic health checks and monitoring</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Recurring notifications or reminders</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Data cleanup and maintenance tasks</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Cache warming or data pre-fetching</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                            <h4 className="font-bold text-red-400 mb-3">❌ Not Ideal For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Event-driven workflows (use Webhook Trigger)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>User-initiated actions (use Manual Trigger)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Real-time responses to changes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>One-time executions (use Manual Trigger)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>High-frequency operations {"< 1 second interval"}</span>
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
                            title="Manual Trigger"
                            description="Manually start workflows on-demand"
                            href="/docs/nodes/triggers/manual"
                            icon="▶️"
                        />
                        <NodeCard
                            title="Webhook Trigger"
                            description="Trigger workflows from external HTTP requests"
                            href="/docs/nodes/triggers/webhook"
                            icon="🪝"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}