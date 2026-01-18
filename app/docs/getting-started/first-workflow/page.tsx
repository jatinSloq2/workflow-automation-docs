import Link from 'next/link';
import { Code, Database, Bot, Mail, CheckCircle, Lightbulb } from 'lucide-react';

export default function FirstWorkflowPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-white">Docs</Link>
                    <span>/</span>
                    <Link href="/docs/getting-started" className="hover:text-white">Getting Started</Link>
                    <span>/</span>
                    <span className="text-white">First Workflow</span>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                        <Code className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-green-300">Complete Tutorial • 15 minutes</span>
                    </div>

                    <h1 className="text-5xl font-black mb-6">Build Your First Real Workflow</h1>

                    <p className="text-xl text-gray-400 leading-relaxed">
                        Create a practical workflow that fetches GitHub user data, analyzes it with AI, and sends
                        personalized insights via email. This tutorial covers all the essentials you'll use daily.
                    </p>
                </div>

                {/* What You'll Build */}
                <div className="mb-12 p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">What You'll Build</h3>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-40 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-center text-sm font-semibold">
                                Manual Trigger
                            </div>
                            <span className="text-gray-400">→</span>
                            <div className="flex-1 text-sm text-gray-400">
                                Start the workflow on demand
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-40 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center text-sm font-semibold">
                                HTTP Request
                            </div>
                            <span className="text-gray-400">→</span>
                            <div className="flex-1 text-sm text-gray-400">
                                Fetch GitHub user profile data
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-40 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-center text-sm font-semibold">
                                AI Chat
                            </div>
                            <span className="text-gray-400">→</span>
                            <div className="flex-1 text-sm text-gray-400">
                                Generate personalized developer insights
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-40 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-center text-sm font-semibold">
                                Send Email
                            </div>
                            <span className="text-gray-400">→</span>
                            <div className="flex-1 text-sm text-gray-400">
                                Email the AI-generated report
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <p className="text-sm text-gray-400">
                            <span className="font-semibold text-blue-400">Result:</span> A workflow that analyzes any
                            GitHub developer's profile and sends you an AI-generated summary of their work and expertise.
                        </p>
                    </div>
                </div>

                {/* Prerequisites */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black mb-6">Before You Start</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-400" />
                                Completed Quick Start
                            </h3>
                            <p className="text-sm text-gray-400">
                                You should be familiar with the WorkflowHub interface and how to add/connect nodes
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                            <h3 className="font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-purple-400" />
                                AI Provider (Optional)
                            </h3>
                            <p className="text-sm text-gray-400">
                                OpenAI API key for AI Chat node. You can skip this step and complete it later
                            </p>
                        </div>
                    </div>
                </section>

                {/* Step 1: Create Workflow */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-black text-xl">
                            1
                        </div>
                        <h2 className="text-3xl font-black">Create the Workflow</h2>
                    </div>

                    <div className="pl-16 space-y-6">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <ol className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-blue-400 min-w-[20px]">1.</span>
                                    <span>Click <strong>"+ New Workflow"</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-blue-400 min-w-[20px]">2.</span>
                                    <span>Name it <code className="px-2 py-1 rounded bg-white/10">"GitHub Developer Analyzer"</code></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-blue-400 min-w-[20px]">3.</span>
                                    <span>Description: <code className="px-2 py-1 rounded bg-white/10">"Fetch GitHub profile and generate AI insights"</code></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-blue-400 min-w-[20px]">4.</span>
                                    <span>Click <strong>"Create"</strong></span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Step 2: Add Manual Trigger */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 font-black text-xl">
                            2
                        </div>
                        <h2 className="text-3xl font-black">Add Manual Trigger</h2>
                    </div>

                    <div className="pl-16 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Add a Manual Trigger node to start the workflow on demand.
                        </p>

                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <ol className="space-y-3 text-sm text-gray-300">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-400 min-w-[20px]">1.</span>
                                    <span>Click <strong>"+ Add Node"</strong> or press <kbd className="px-2 py-1 rounded bg-white/10 text-xs">A</kbd></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-400 min-w-[20px]">2.</span>
                                    <span>Search for and select <strong>"Manual Trigger"</strong></span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Step 3: Add HTTP Request */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 font-black text-xl">
                            3
                        </div>
                        <h2 className="text-3xl font-black">Fetch GitHub Profile Data</h2>
                    </div>

                    <div className="pl-16 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Add an HTTP Request node to fetch user data from GitHub's public API.
                        </p>

                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Database className="h-5 w-5 text-blue-400" />
                                Configure HTTP Request
                            </h4>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Add the node:</div>
                                    <ol className="space-y-2 text-sm text-gray-300 mb-4">
                                        <li className="flex items-start gap-3">
                                            <span className="font-bold text-blue-400 min-w-[20px]">1.</span>
                                            <span>Click <strong>"+ Add Node"</strong></span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="font-bold text-blue-400 min-w-[20px]">2.</span>
                                            <span>Search for and select <strong>"HTTP Request"</strong></span>
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Click the node and configure:</div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">URL:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                https://api.github.com/users/octocat
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                💡 Replace "octocat" with any GitHub username
                                            </p>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Method:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                GET
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Connect to trigger:</div>
                                    <p className="text-sm text-gray-300">
                                        Drag from Manual Trigger's output to HTTP Request's input
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-3">
                            <Lightbulb className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-sm font-semibold text-blue-400 mb-1">Test It Now!</p>
                                <p className="text-sm text-gray-400">
                                    Click "Execute Workflow" to test. You should see GitHub user data in the HTTP Request node output.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 4: Add AI Chat */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 font-black text-xl">
                            4
                        </div>
                        <h2 className="text-3xl font-black">Analyze with AI</h2>
                    </div>

                    <div className="pl-16 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Add an AI Chat node to generate insights about the developer based on their GitHub profile.
                        </p>

                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Bot className="h-5 w-5 text-purple-400" />
                                Configure AI Chat
                            </h4>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Add the node:</div>
                                    <ol className="space-y-2 text-sm text-gray-300 mb-4">
                                        <li className="flex items-start gap-3">
                                            <span className="font-bold text-purple-400 min-w-[20px]">1.</span>
                                            <span>Click <strong>"+ Add Node"</strong></span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="font-bold text-purple-400 min-w-[20px]">2.</span>
                                            <span>Search for and select <strong>"AI Chat"</strong></span>
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Configure the node:</div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Provider:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                OpenAI (or Ollama for local/free)
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Model:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                gpt-4o-mini
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">API Key:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                Your OpenAI API key
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Get one from <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">platform.openai.com</a>
                                            </p>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Prompt:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 whitespace-pre-wrap">
                                                {`Analyze this GitHub developer profile and provide insights:

Name: {{$prev.data.name}}
Bio: {{$prev.data.bio}}
Public Repos: {{$prev.data.public_repos}}
Followers: {{$prev.data.followers}}
Location: {{$prev.data.location}}

Provide:
1. A brief summary of their expertise
2. Their likely areas of focus
3. What makes them interesting as a developer`}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                💡 Note the {`{{$prev.data.field}}`} expressions - they reference GitHub data!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Connect nodes:</div>
                                    <p className="text-sm text-gray-300">
                                        Drag from HTTP Request's output to AI Chat's input
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex gap-3">
                            <Lightbulb className="h-5 w-5 text-yellow-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-sm font-semibold text-yellow-400 mb-1">Using Ollama (Free Alternative)</p>
                                <p className="text-sm text-gray-400 mb-2">
                                    If you don't have an OpenAI key, select "Ollama" as provider and use model "llama3.2".
                                    Make sure Ollama is installed and running locally.
                                </p>
                                <a
                                    href="https://ollama.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-yellow-400 hover:text-yellow-300"
                                >
                                    Download Ollama →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 5: Add Email */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 font-black text-xl">
                            5
                        </div>
                        <h2 className="text-3xl font-black">Send Email Report</h2>
                    </div>

                    <div className="pl-16 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Add a Send Email node to deliver the AI-generated insights to your inbox.
                        </p>

                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Mail className="h-5 w-5 text-orange-400" />
                                Configure Email Node
                            </h4>

                            <div className="space-y-4">
                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Add the node:</div>
                                    <ol className="space-y-2 text-sm text-gray-300 mb-4">
                                        <li className="flex items-start gap-3">
                                            <span className="font-bold text-orange-400 min-w-[20px]">1.</span>
                                            <span>Click <strong>"+ Add Node"</strong></span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="font-bold text-orange-400 min-w-[20px]">2.</span>
                                            <span>Search for and select <strong>"Send Email"</strong></span>
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Configure email details:</div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">From Email:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                your-email@gmail.com
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">To Email:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                your-email@gmail.com
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Subject:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300">
                                                GitHub Analysis: {`{{$node.http_request_1.data.name}}`}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">Body:</div>
                                            <div className="p-3 rounded-lg bg-black/30 text-sm font-mono text-gray-300 whitespace-pre-wrap">
                                                {`Developer Analysis Report

GitHub Profile: {{$node.http_request_1.data.html_url}}

AI Insights:
{{$prev.data.response}}

---
Generated by WorkflowHub`}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs text-gray-500 mb-1">SMTP Configuration:</div>
                                            <div className="space-y-2 text-sm">
                                                <div className="p-3 rounded-lg bg-black/30 font-mono text-gray-300">
                                                    <div>Host: smtp.gmail.com</div>
                                                    <div>Port: 587</div>
                                                    <div>Username: your-email@gmail.com</div>
                                                    <div>Password: your-app-password</div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">
                                                📧 For Gmail, use an <a href="https://support.google.com/accounts/answer/185833" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">App Password</a>, not your regular password
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xs text-gray-400 mb-2">Connect nodes:</div>
                                    <p className="text-sm text-gray-300">
                                        Drag from AI Chat's output to Send Email's input
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 6: Test Complete Workflow */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 font-black text-xl">
                            6
                        </div>
                        <h2 className="text-3xl font-black">Test the Complete Workflow</h2>
                    </div>

                    <div className="pl-16 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                            Now let's run the complete workflow and see all four nodes work together!
                        </p>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                            <h4 className="font-bold mb-4">Execute & Verify</h4>

                            <ol className="space-y-3 text-sm text-gray-300 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-400 min-w-[20px]">1.</span>
                                    <span>Click <strong>"Execute Workflow"</strong> in the top toolbar</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-400 min-w-[20px]">2.</span>
                                    <span>Watch nodes execute in sequence (Manual Trigger → HTTP → AI → Email)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-400 min-w-[20px]">3.</span>
                                    <span>All nodes should show green checkmarks ✓</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-green-400 min-w-[20px]">4.</span>
                                    <span>Check your email inbox for the AI-generated report!</span>
                                </li>
                            </ol>

                            <div className="p-4 rounded-lg bg-black/30">
                                <p className="text-sm font-semibold text-green-400 mb-2">Expected Result:</p>
                                <p className="text-sm text-gray-400">
                                    You should receive an email with AI-generated insights about the GitHub developer,
                                    including their expertise, focus areas, and what makes them interesting.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-3">
                            <Lightbulb className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-sm font-semibold text-blue-400 mb-1">Debugging Tips</p>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>• Click each node to view its input/output data</li>
                                    <li>• Check execution logs for error messages</li>
                                    <li>• Verify all expressions use correct syntax: {`{{$prev.data.field}}`}</li>
                                    <li>• Ensure SMTP credentials are correct for email sending</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Learned */}
                <section className="mb-16">
                    <h2 className="text-3xl font-black mb-6">What You Learned</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                            <h3 className="text-lg font-bold mb-4 text-blue-400">Core Skills</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                                    <span>Building multi-node workflows</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                                    <span>Connecting nodes and passing data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                                    <span>Configuring node properties</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                                    <span>Testing and debugging workflows</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                            <h3 className="text-lg font-bold mb-4 text-purple-400">Advanced Concepts</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                                    <span>Using expressions to reference data</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                                    <span>Integrating with external APIs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                                    <span>Working with AI models</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-400 mt-1 shrink-0" />
                                    <span>Sending automated emails</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="mb-16">
                    <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                        <h2 className="text-2xl font-bold mb-4">Congratulations! 🎉</h2>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            You've successfully built a complete, real-world automation workflow. This same pattern can
                            be extended to dozens of use cases—from monitoring APIs to automating business operations.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <Link
                                href="/docs/workflows/expressions"
                                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/40 transition"
                            >
                                <h3 className="font-bold mb-2">Master Expressions</h3>
                                <p className="text-sm text-gray-400">
                                    Learn advanced data mapping and transformations
                                </p>
                            </Link>

                            <Link
                                href="/docs/nodes"
                                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition"
                            >
                                <h3 className="font-bold mb-2">Explore Nodes</h3>
                                <p className="text-sm text-gray-400">
                                    Discover all available integrations and actions
                                </p>
                            </Link>

                            <Link
                                href="/docs/workflows/advanced"
                                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition"
                            >
                                <h3 className="font-bold mb-2">Advanced Workflows</h3>
                                <p className="text-sm text-gray-400">
                                    Branching logic, schedules, retries, and more
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer Navigation */}
                <div className="flex justify-between items-center pt-12 border-t border-white/10">
                    <Link
                        href="/docs/getting-started"
                        className="text-sm text-gray-400 hover:text-white transition"
                    >
                        ← Getting Started
                    </Link>

                    <Link
                        href="/docs/workflows/expressions"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition"
                    >
                        Continue: Expressions
                        <span>→</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
