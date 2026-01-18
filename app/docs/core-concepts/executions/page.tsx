import Link from 'next/link';
import { Play, Clock, CheckCircle, XCircle, AlertCircle, BarChart3 } from 'lucide-react';

export default function ExecutionsConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-white">Executions</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Play className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-orange-300">Core Concept</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6">Executions</h1>
          
          <p className="text-xl text-gray-400 leading-relaxed">
            An execution is a single run of your workflow from start to finish. Every time a workflow 
            runs, WorkflowHub creates an execution record with complete logs, timing data, and results.
          </p>
        </div>

        {/* What is an Execution */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">What is an Execution?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            When you trigger a workflow—either manually, via webhook, or on a schedule—WorkflowHub 
            creates an execution. This execution tracks every node that runs, the data it processes, 
            how long it takes, and whether it succeeds or fails.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <Clock className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Timing Data</h3>
              <p className="text-gray-400 text-sm">
                Track when the execution started, how long each node took, and total execution time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <BarChart3 className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Node Outputs</h3>
              <p className="text-gray-400 text-sm">
                View input and output data for every node that executed in the workflow.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <AlertCircle className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Error Logs</h3>
              <p className="text-gray-400 text-sm">
                See detailed error messages and stack traces when nodes fail.
              </p>
            </div>
          </div>
        </section>

        {/* Execution Lifecycle */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Execution Lifecycle</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 shrink-0">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">1. Running</h3>
                  <p className="text-gray-400 mb-3">
                    The workflow has been triggered and is currently executing. Nodes run in sequence 
                    according to their connections.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold">
                      Status: Running
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Nodes executing...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">2. Success</h3>
                  <p className="text-gray-400 mb-3">
                    All nodes completed successfully without errors. The execution finished and 
                    produced the expected output.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">
                      Status: Success
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">All nodes completed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 shrink-0">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">3. Error</h3>
                  <p className="text-gray-400 mb-3">
                    One or more nodes failed during execution. The workflow stopped at the point of 
                    failure, and error details are available in the logs.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 font-semibold">
                      Status: Error
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">Check error logs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Execution Data */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Execution Data</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Each execution stores comprehensive data about what happened during the workflow run. 
            This data is essential for debugging, monitoring, and optimizing your workflows.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-lg font-bold mb-4">What's Stored in an Execution</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-3">Metadata</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Execution ID (unique identifier)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Workflow ID and name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Start and end timestamps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Total execution time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Trigger type (manual, webhook, schedule)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-3">Node Data</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Input data received by each node</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Output data produced by each node</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Execution time per node</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Success/failure status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Error messages and stack traces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Viewing Executions */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Viewing Execution Details</h2>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <h3 className="text-lg font-bold mb-4">How to Inspect an Execution</h3>
            
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">1</span>
                <div>
                  <p className="font-semibold mb-1">Navigate to Executions</p>
                  <p className="text-sm text-gray-400">Go to your workflow and click the "Executions" tab to see all runs</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">2</span>
                <div>
                  <p className="font-semibold mb-1">Select an execution</p>
                  <p className="text-sm text-gray-400">Click on any execution to view its detailed information</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">3</span>
                <div>
                  <p className="font-semibold mb-1">Inspect node data</p>
                  <p className="text-sm text-gray-400">Click on individual nodes to see their input/output data and timing</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-sm font-bold shrink-0">4</span>
                <div>
                  <p className="font-semibold mb-1">Review errors</p>
                  <p className="text-sm text-gray-400">For failed executions, check error messages to diagnose issues</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Example Execution */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Example Execution</h2>
          
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Email Campaign Workflow</h3>
                <p className="text-sm text-gray-400">Execution ID: exec_abc123</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-semibold text-sm">
                Success
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-white/5">
                <div className="text-xs text-gray-400 mb-1">Started</div>
                <div className="font-semibold">2024-01-15 09:00:00</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <div className="text-xs text-gray-400 mb-1">Finished</div>
                <div className="font-semibold">2024-01-15 09:02:45</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <div className="text-xs text-gray-400 mb-1">Duration</div>
                <div className="font-semibold">2m 45s</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-green-500/10 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Schedule Trigger</div>
                  <div className="text-xs text-gray-400">0.01s</div>
                </div>
                <div className="text-xs text-gray-400">Triggered at 9:00 AM</div>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Upload File</div>
                  <div className="text-xs text-gray-400">1.2s</div>
                </div>
                <div className="text-xs text-gray-400">Loaded 150 subscribers from CSV</div>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">AI Chat</div>
                  <div className="text-xs text-gray-400">45.3s</div>
                </div>
                <div className="text-xs text-gray-400">Generated 150 personalized messages</div>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Send Email</div>
                  <div className="text-xs text-gray-400">119.5s</div>
                </div>
                <div className="text-xs text-gray-400">Sent 150 emails successfully</div>
              </div>
            </div>
          </div>
        </section>

        {/* Debugging Failed Executions */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Debugging Failed Executions</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            When an execution fails, WorkflowHub provides detailed error information to help you 
            identify and fix the problem quickly.
          </p>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-red-400">
                <XCircle className="h-5 w-5" />
                Common Error Types
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-black/30">
                  <div className="font-semibold text-red-300 mb-2">API Errors</div>
                  <p className="text-gray-400 text-xs mb-2">HTTP requests failing or returning errors</p>
                  <p className="text-gray-500 text-xs">Check API key, URL, and rate limits</p>
                </div>

                <div className="p-4 rounded-lg bg-black/30">
                  <div className="font-semibold text-red-300 mb-2">Data Errors</div>
                  <p className="text-gray-400 text-xs mb-2">Missing or malformed data fields</p>
                  <p className="text-gray-500 text-xs">Verify data structure and field names</p>
                </div>

                <div className="p-4 rounded-lg bg-black/30">
                  <div className="font-semibold text-red-300 mb-2">Timeout Errors</div>
                  <p className="text-gray-400 text-xs mb-2">Node execution exceeds time limit</p>
                  <p className="text-gray-500 text-xs">Increase timeout or optimize logic</p>
                </div>

                <div className="p-4 rounded-lg bg-black/30">
                  <div className="font-semibold text-red-300 mb-2">Configuration Errors</div>
                  <p className="text-gray-400 text-xs mb-2">Invalid node configuration or expressions</p>
                  <p className="text-gray-500 text-xs">Review node properties and syntax</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <h3 className="font-bold mb-3">Debugging Checklist</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">1.</span>
                  <span>Check the error message and stack trace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">2.</span>
                  <span>Verify input data structure matches expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">3.</span>
                  <span>Review expressions for syntax errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">4.</span>
                  <span>Test with sample data manually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">5.</span>
                  <span>Check API credentials and permissions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Execution History */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Execution History</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            WorkflowHub keeps a complete history of all workflow executions, allowing you to track 
            performance over time, identify patterns, and audit workflow activity.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-400" />
                Performance Tracking
              </h3>
              <p className="text-sm text-gray-400">
                Monitor execution times to identify slow nodes or bottlenecks. Track success rates 
                and error trends over time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                Audit Trail
              </h3>
              <p className="text-sm text-gray-400">
                Review when workflows ran, what data they processed, and what results they produced. 
                Essential for compliance and troubleshooting.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <Link
            href="/docs/core-concepts/connections"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
          >
            <span>←</span>
            <span>Connections</span>
          </Link>
          
          <Link
            href="/docs/core-concepts/expressions"
            className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-all"
          >
            <span>Next: Expressions</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}