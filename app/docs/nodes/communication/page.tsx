import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CommunicationNodesPage() {
  const nodes = [
    {
      title: 'Send Email',
      description: 'Send automated emails via SMTP with HTML support',
      icon: '📧',
      href: '/docs/nodes/communication/email',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Slack',
      description: 'Send messages directly to Slack channels or users',
      icon: '💬',
      href: '/docs/nodes/communication/slack',
      color: 'from-purple-500 to-pink-500',
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
          <span className="text-white">Communication</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-sm text-blue-300">📨 Communication Nodes</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Communication Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Notify users and teams by sending messages through various communication channels 
            including email, Slack, and more. Perfect for alerts, confirmations, and notifications.
          </p>
        </div>

        {/* Available Nodes */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Available Channels</h2>
          
          <div className="space-y-6">
            {nodes.map((node) => (
              <Link
                key={node.href}
                href={node.href}
                className="group relative overflow-hidden rounded-2xl block"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${node.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="text-4xl mb-4">{node.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed mb-4">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
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
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Notifications</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Order confirmations</li>
                <li>• System alerts</li>
                <li>• Status updates</li>
                <li>• Reminder emails</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">Team Coordination</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Slack notifications</li>
                <li>• Team alerts</li>
                <li>• Progress reports</li>
                <li>• Approval requests</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/50 transition-all">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg font-bold mb-3 text-pink-400">Business Process</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Invoice sending</li>
                <li>• Report delivery</li>
                <li>• Newsletter distribution</li>
                <li>• Certificate delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Personalize Messages</h4>
              <p className="text-sm text-gray-300">
                Use expressions to include recipient names and relevant data in messages.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Template Email Content</h4>
              <p className="text-sm text-gray-300">
                Create professional email templates with consistent branding and styling.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Handle Delivery Failures</h4>
              <p className="text-sm text-gray-300">
                Add error handling to catch and log failed message deliveries.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Spam Users</h4>
              <p className="text-sm text-gray-300">
                Respect user preferences and add unsubscribe options to emails.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4">Get Started with Communication</h3>
          <p className="text-gray-300 mb-6">
            Choose a communication channel to learn how to send messages:
          </p>
          <div className="flex flex-wrap gap-3">
            {nodes.map((node) => (
              <Link 
                key={node.href}
                href={node.href} 
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all flex items-center gap-2"
              >
                <span>{node.icon}</span>
                {node.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
