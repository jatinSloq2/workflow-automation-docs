import Link from 'next/link';
import { ArrowRight, Zap, Clock, Github, Play } from 'lucide-react';

export default function TriggersOverviewPage() {
  const triggers = [
    {
      title: 'Manual Trigger',
      description: 'Manually start a workflow execution with optional input data',
      icon: '▶️',
      href: '/docs/nodes/triggers/manual-trigger',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Webhook Trigger',
      description: 'Receive incoming HTTP requests and trigger workflows with real-time data',
      icon: '🪝',
      href: '/docs/nodes/triggers/webhook',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Schedule Trigger',
      description: 'Automatically execute workflows on a schedule or interval',
      icon: '⏰',
      href: '/docs/nodes/triggers/schedule',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/nodes" className="hover:text-white">Nodes</Link>
          <span>/</span>
          <span className="text-white">Triggers</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Zap className="h-4 w-4 text-green-400" />
            <span className="text-sm text-green-300">Trigger Nodes</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Trigger Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Trigger nodes are the starting point of any workflow. They define how and when your automation process begins - 
            whether manually triggered, event-driven via webhooks, or scheduled to run at specific times.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Available Triggers</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-6">
            {triggers.map((trigger) => (
              <Link
                key={trigger.href}
                href={trigger.href}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${trigger.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all h-full flex flex-col">
                  <div className="text-5xl mb-4">{trigger.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                    {trigger.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {trigger.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-blue-400">Real-time Events</h3>
              <p className="text-gray-400 text-sm mb-4">
                Respond immediately to events from external services like payment processors, form submissions, or git pushes.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Stripe payment notifications</li>
                <li>• GitHub commit webhooks</li>
                <li>• Form submission handlers</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-purple-400">Scheduled Tasks</h3>
              <p className="text-gray-400 text-sm mb-4">
                Automate routine operations that need to run on a schedule - daily reports, data backups, cleanup jobs.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Daily email newsletters</li>
                <li>• Nightly data syncs</li>
                <li>• Weekly report generation</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <h3 className="text-lg font-bold mb-3 text-orange-400">Manual Testing</h3>
              <p className="text-gray-400 text-sm mb-4">
                Test and debug workflows manually with custom input data before deploying to production.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Development and testing</li>
                <li>• One-off data processing</li>
                <li>• Manual workflow execution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Trigger Comparison</h2>
          
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="py-4 px-6 font-bold text-white">Trigger</th>
                  <th className="py-4 px-6 font-bold text-white">Start Condition</th>
                  <th className="py-4 px-6 font-bold text-white">Use Case</th>
                  <th className="py-4 px-6 font-bold text-white">Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-6">Manual Trigger</td>
                  <td className="py-4 px-6 text-gray-400">User clicks button</td>
                  <td className="py-4 px-6 text-gray-400">Testing, manual execution</td>
                  <td className="py-4 px-6"><span className="text-green-400 text-xs font-semibold px-2 py-1 bg-green-500/20 rounded">Simple</span></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-6">Webhook</td>
                  <td className="py-4 px-6 text-gray-400">HTTP POST received</td>
                  <td className="py-4 px-6 text-gray-400">Real-time event handling</td>
                  <td className="py-4 px-6"><span className="text-blue-400 text-xs font-semibold px-2 py-1 bg-blue-500/20 rounded">Intermediate</span></td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-6">Schedule</td>
                  <td className="py-4 px-6 text-gray-400">Time interval reached</td>
                  <td className="py-4 px-6 text-gray-400">Scheduled recurring tasks</td>
                  <td className="py-4 px-6"><span className="text-purple-400 text-xs font-semibold px-2 py-1 bg-purple-500/20 rounded">Intermediate</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Validate Input Data</h4>
              <p className="text-sm text-gray-300">
                Always validate and sanitize input from webhooks before processing. Use filter or if nodes to check data integrity.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Use Authentication</h4>
              <p className="text-sm text-gray-300">
                Secure webhooks with proper authentication (Bearer tokens, API keys) to prevent unauthorized access.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Handle Duplicate Events</h4>
              <p className="text-sm text-gray-300">
                Webhook providers may resend events. Implement idempotency checks to prevent duplicate processing.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Add Long Delays</h4>
              <p className="text-sm text-gray-300">
                Avoid heavy processing in workflows started by webhooks. Use async processing if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <h3 className="text-2xl font-bold mb-4">Choose Your First Trigger</h3>
          <p className="text-gray-300 mb-6">
            Pick a trigger type below to learn how to configure and use it:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/docs/nodes/triggers/manual-trigger" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Play className="h-4 w-4" />
              Manual Trigger
            </Link>
            <Link href="/docs/nodes/triggers/webhook" className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Github className="h-4 w-4" />
              Webhook Trigger
            </Link>
            <Link href="/docs/nodes/triggers/schedule" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Schedule Trigger
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
