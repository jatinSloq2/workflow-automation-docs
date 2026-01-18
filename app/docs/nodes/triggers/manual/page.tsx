import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Clock, Play, Zap } from 'lucide-react';



export default function ManualTriggerNode() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-20 blur-xl" />
                    <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                            <div className="text-6xl">▶️</div>
                            <div className="flex-1">
                                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                    Manual Trigger
                                </h1>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge>Trigger</Badge>
                                    <Badge variant="outline">Start Node</Badge>
                                    <Badge variant="outline">Manual</Badge>
                                </div>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Manually start your workflow execution with custom input data
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Play className="h-8 w-8 text-green-400 mb-2" />
                        <div className="text-2xl font-bold text-white">Instant</div>
                        <div className="text-sm text-gray-400">Execution Time</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Zap className="h-8 w-8 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold text-white">0 Inputs</div>
                        <div className="text-sm text-gray-400">Required Connections</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <Clock className="h-8 w-8 text-blue-400 mb-2" />
                        <div className="text-2xl font-bold text-white">On-Demand</div>
                        <div className="text-sm text-gray-400">Trigger Type</div>
                    </div>
                </div>

                {/* Overview */}
                <section id="overview">
                    <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The Manual Trigger node is the starting point for workflows that need to be executed on-demand.
                        It allows you to manually initiate a workflow and optionally pass input data that will be available
                        to all subsequent nodes in the execution.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        This is the most common trigger type for workflows that are initiated by user actions, API calls,
                        or testing purposes.
                    </p>
                </section>

                {/* Configuration */}
                <section id="configuration">
                    <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

                    <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 border-b border-white/10">
                                <tr>
                                    <th className="py-4 px-6 text-sm font-bold text-green-400">Field</th>
                                    <th className="py-4 px-6 text-sm font-bold text-green-400">Type</th>
                                    <th className="py-4 px-6 text-sm font-bold text-green-400">Default</th>
                                    <th className="py-4 px-6 text-sm font-bold text-green-400">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6">
                                        <code className="text-green-400 bg-green-500/10 px-2 py-1 rounded text-sm">triggerType</code>
                                    </td>
                                    <td className="py-4 px-6 text-gray-300 text-sm">Select</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">manual</td>
                                    <td className="py-4 px-6 text-gray-400 text-sm">Type of trigger (manual or scheduled)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Callout type="info" title="Note">
                        Manual triggers have minimal configuration. The real power comes from the input data you
                        provide when executing the workflow.
                    </Callout>
                </section>

                {/* Output */}
                <section id="output">
                    <h2 className="text-3xl font-black mb-4 text-white">Output</h2>
                    <p className="text-gray-300 mb-4">
                        The Manual Trigger node outputs the data you provide when starting the workflow:
                    </p>

                    <CodeBlock
                        language="json"
                        code={`{
  "triggered": true,
  "timestamp": "2024-01-18T10:30:00.000Z",
  "triggerType": "manual",
  // ... any custom input data you provided
}`}
                    />

                    <h3 className="text-xl font-bold mb-3 text-white mt-6">Accessing Trigger Data</h3>
                    <CodeBlock
                        language="javascript"
                        code={`// Access trigger data in subsequent nodes
{{ $input.userId }}
{{ $input.email }}
{{ $input.customData }}

// Or reference the trigger node directly
{{ $node.trigger_1.data.userId }}`}
                    />
                </section>

                {/* Usage Examples */}
                <section id="examples">
                    <h2 className="text-3xl font-black mb-6 text-white">Usage Examples</h2>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-green-400">Example 1: User Registration Workflow</h3>
                            <p className="text-gray-300 mb-4">
                                Start a workflow with user registration data:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`// Input data when triggering workflow
{
  "userId": "user_12345",
  "email": "newuser@example.com",
  "name": "John Doe",
  "registeredAt": "2024-01-18T10:30:00.000Z"
}

// This data is then available in all nodes via {{$input.*}}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-emerald-400">Example 2: Data Processing Workflow</h3>
                            <p className="text-gray-300 mb-4">
                                Pass an array of data to process:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`// Input data
{
  "orders": [
    { "id": 1, "total": 99.99, "status": "pending" },
    { "id": 2, "total": 149.99, "status": "pending" },
    { "id": 3, "total": 79.99, "status": "shipped" }
  ],
  "processDate": "2024-01-18"
}`}
                            />
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-blue-400">Example 3: Simple Test Execution</h3>
                            <p className="text-gray-300 mb-4">
                                Test your workflow with minimal data:
                            </p>
                            <CodeBlock
                                language="json"
                                code={`// Minimal input for testing
{
  "test": true,
  "message": "Testing workflow"
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
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Structure Your Input Data</h4>
                            <p className="text-sm text-gray-300">
                                Organize input data in a clear structure that subsequent nodes can easily reference.
                                Use nested objects and arrays when appropriate.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-green-400">✅ DO: Document Expected Input</h4>
                            <p className="text-sm text-gray-300">
                                Keep track of what input data your workflow expects. Add comments or create a
                                documentation file listing all required fields.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Rely on Optional Data</h4>
                            <p className="text-sm text-gray-300">
                                Make sure critical workflow paths don't depend on optional input data. Always validate
                                or provide defaults in your workflow logic.
                            </p>
                        </div>

                        <div className="p-5 border-l-4 border-amber-500 bg-amber-500/10 rounded-r-xl">
                            <h4 className="font-bold mb-2 text-amber-400">⚠️ CONSIDER: Input Validation</h4>
                            <p className="text-sm text-gray-300">
                                Add validation nodes early in your workflow to check that required input data is present
                                and in the correct format.
                            </p>
                        </div>
                    </div>
                </section>

                {/* When to Use */}
                <section id="when-to-use">
                    <h2 className="text-3xl font-black mb-6 text-white">When to Use Manual Trigger</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                            <h4 className="font-bold text-green-400 mb-3">✅ Perfect For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>User-initiated workflows (forms, buttons)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>API-triggered automations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>Testing and development</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    <span>One-time data processing tasks</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20">
                            <h4 className="font-bold text-red-400 mb-3">❌ Not Ideal For:</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Automated recurring tasks (use Schedule Trigger)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Event-driven workflows (use Webhook Trigger)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>Background monitoring (use Schedule Trigger)</span>
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
                            description="Receive data from external services and APIs"
                            href="/docs/nodes/triggers/webhook"
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