import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';
import { Callout } from '@/components/ui/Callout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Brain, TrendingUp, Zap } from 'lucide-react';


export default function AIChatNode() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 blur-xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="text-6xl">🤖</div>
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  AI Chat Node
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>AI</Badge>
                  <Badge variant="outline">OpenAI</Badge>
                  <Badge variant="outline">Anthropic</Badge>
                  <Badge variant="outline">Ollama</Badge>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Interact with AI language models to generate text, analyze data, and automate content creation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Brain, label: 'AI Providers', value: '4+' },
            { icon: Zap, label: 'Response Time', value: '<2s' },
            { icon: TrendingUp, label: 'Success Rate', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <stat.icon className="h-8 w-8 text-purple-400 mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section id="overview">
          <h2 className="text-3xl font-black mb-4 text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            The AI Chat node allows you to integrate powerful language models into your workflows.
            It supports multiple providers including OpenAI (GPT-4, GPT-3.5), Anthropic (Claude),
            local models via Ollama, and Groq.
          </p>
        </section>

        {/* Configuration */}
        <section id="configuration">
          <h2 className="text-3xl font-black mb-6 text-white">Configuration</h2>

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
                  { field: 'provider', type: 'Select', req: '✅', desc: 'AI provider (openai, anthropic, ollama, groq)' },
                  { field: 'model', type: 'String', req: '✅', desc: 'Model name (e.g., gpt-4, claude-3-5-sonnet)' },
                  { field: 'apiKey', type: 'String', req: '⚠️', desc: 'API key (not required for Ollama)' },
                  { field: 'systemPrompt', type: 'Text', req: '❌', desc: 'System message to set behavior' },
                  { field: 'prompt', type: 'Text', req: '✅', desc: 'User prompt (supports expressions)' },
                  { field: 'temperature', type: 'Number', req: '❌', desc: 'Creativity (0-2, default: 0.7)' },
                  { field: 'maxTokens', type: 'Number', req: '❌', desc: 'Maximum response length (default: 1000)' },
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

        {/* Output */}
        <section id="output">
          <h2 className="text-3xl font-black mb-4 text-white">Output</h2>
          <p className="text-gray-300 mb-4">The AI Chat node returns the following data structure:</p>

          <CodeBlock
            language="json"
            code={`{
  "data": {
    "response": "The AI-generated text response",
    "model": "gpt-4",
    "usage": {
      "prompt_tokens": 25,
      "completion_tokens": 50,
      "total_tokens": 75
    }
  }
}`}
          />

          <h3 className="text-xl font-bold mb-3 text-white mt-6">Accessing Output in Other Nodes</h3>
          <CodeBlock
            language="javascript"
            code={`// Get the AI response
{{ $prev.data.response }}

// Get model name
{{ $prev.data.model }}

// Get token usage
{{ $prev.data.usage.total_tokens }}`}
          />
        </section>

        {/* Examples */}
        <section id="examples">
          <h2 className="text-3xl font-black mb-6 text-white">Examples</h2>

          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Example 1: Content Summarization</h3>
              <p className="text-gray-300 mb-4">
                Use AI to summarize article content fetched from an API:
              </p>
              <CodeBlock
                language="yaml"
                code={`Provider: openai
Model: gpt-4o-mini
System Prompt: You are a helpful assistant that summarizes content.
Prompt: Summarize this article in 3 bullet points:

{{ $node.httpRequest_1.data.content }}

Temperature: 0.5
Max Tokens: 300`}
              />
              <Callout type="tip">
                Lower temperature (0.3-0.5) for factual tasks like summarization.
                Higher temperature (0.7-1.0) for creative tasks.
              </Callout>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Example 2: Data Analysis from CSV</h3>
              <p className="text-gray-300 mb-4">
                Analyze uploaded CSV data and generate insights:
              </p>
              <CodeBlock
                language="yaml"
                code={`Provider: anthropic
Model: claude-3-5-sonnet-20241022
System Prompt: You are a data analyst expert.
Prompt: Analyze this sales data and provide key insights:

{{ $node.uploadFile_1.data }}

Focus on:
1. Top performing products
2. Sales trends
3. Recommendations`}
              />
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices">
          <h2 className="text-3xl font-black mb-6 text-white">Best Practices</h2>

          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ DO: Use Clear System Prompts</h4>
              <p className="text-sm text-gray-300">
                Define the AI's role and behavior in the system prompt for consistent results.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ DON'T: Send Sensitive Data</h4>
              <p className="text-sm text-gray-300">
                Avoid sending passwords, API keys, or PII to external AI providers.
                Use Ollama for local processing of sensitive data.
              </p>
            </div>
          </div>
        </section>

        {/* Related Nodes */}
        <section id="related">
          <h2 className="text-3xl font-black mb-6 text-white">Related Nodes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <NodeCard
              title="AI Text Generation"
              description="Specialized content generation with predefined templates"
              href="/docs/nodes/ai/text-generation"
              icon="✍️"
            />
            <NodeCard
              title="AI Image Analysis"
              description="Analyze images with vision models"
              href="/docs/nodes/ai/image-analysis"
              icon="👁️"
            />
          </div>
        </section>
      </div>
    </div>
  );
}