// src/app/docs/nodes/ai/ai-chat/page.tsx
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Callout } from '@/components/ui/Callout';
import { NodeCard } from '@/components/mdx/NodeCard';
import { Badge } from '@/components/ui/badge';

export default function AIChatNode() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl">🤖</span>
          <div>
            <h1 className="text-4xl font-bold">AI Chat</h1>
            <div className="flex gap-2 mt-2">
              <Badge>AI</Badge>
              <Badge variant="outline">OpenAI</Badge>
              <Badge variant="outline">Anthropic</Badge>
              <Badge variant="outline">Ollama</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Interact with AI language models to generate text, analyze data, and automate content creation
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p>
          The AI Chat node allows you to integrate powerful language models into your workflows.
          It supports multiple providers including OpenAI (GPT-4, GPT-3.5), Anthropic (Claude),
          local models via Ollama, and Groq.
        </p>
      </section>

      <section id="configuration">
        <h2 className="text-3xl font-bold mb-4">Configuration</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Provider Settings</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4">Field</th>
                    <th className="py-2 px-4">Type</th>
                    <th className="py-2 px-4">Required</th>
                    <th className="py-2 px-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>provider</code></td>
                    <td className="py-2 px-4">Select</td>
                    <td className="py-2 px-4">✅</td>
                    <td className="py-2 px-4">AI provider (openai, anthropic, ollama, groq)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>model</code></td>
                    <td className="py-2 px-4">String</td>
                    <td className="py-2 px-4">✅</td>
                    <td className="py-2 px-4">Model name (e.g., gpt-4, claude-3-5-sonnet)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>apiKey</code></td>
                    <td className="py-2 px-4">String</td>
                    <td className="py-2 px-4">⚠️</td>
                    <td className="py-2 px-4">API key (not required for Ollama)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>systemPrompt</code></td>
                    <td className="py-2 px-4">Text</td>
                    <td className="py-2 px-4">❌</td>
                    <td className="py-2 px-4">System message to set behavior</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>prompt</code></td>
                    <td className="py-2 px-4">Text</td>
                    <td className="py-2 px-4">✅</td>
                    <td className="py-2 px-4">User prompt (supports expressions)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>temperature</code></td>
                    <td className="py-2 px-4">Number</td>
                    <td className="py-2 px-4">❌</td>
                    <td className="py-2 px-4">Creativity (0-2, default: 0.7)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4"><code>maxTokens</code></td>
                    <td className="py-2 px-4">Number</td>
                    <td className="py-2 px-4">❌</td>
                    <td className="py-2 px-4">Maximum response length (default: 1000)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="output">
        <h2 className="text-3xl font-bold mb-4">Output</h2>
        <p className="mb-4">The AI Chat node returns the following data structure:</p>

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

        <div className="mt-4 space-y-2">
          <h3 className="font-semibold">Accessing Output in Other Nodes</h3>
          <CodeBlock
            language="javascript"
            code={`// Get the AI response
{{ $prev.data.response }}

// Get model name
{{ $prev.data.model }}

// Get token usage
{{ $prev.data.usage.total_tokens }}`}
          />
        </div>
      </section>

      <section id="examples">
        <h2 className="text-3xl font-bold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Example 1: Content Summarization</h3>
            <p className="mb-4">
              Use AI to summarize article content fetched from an API:
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm font-semibold mb-2">Configuration:</p>
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
              </div>

              <Callout type="tip">
                Lower temperature (0.3-0.5) for factual tasks like summarization.
                Higher temperature (0.7-1.0) for creative tasks.
              </Callout>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Example 2: Data Analysis from CSV</h3>
            <p className="mb-4">
              Analyze uploaded CSV data and generate insights:
            </p>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
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

          <div>
            <h3 className="text-xl font-semibold mb-3">Example 3: Personalized Email Content</h3>
            <p className="mb-4">
              Generate personalized email content for each user:
            </p>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <CodeBlock
                language="yaml"
                code={`Provider: groq
Model: llama-3.3-70b-versatile
Prompt: Write a personalized welcome email for:
Name: {{ $item.name }}
Industry: {{ $item.industry }}
Company: {{ $item.company }}

Make it friendly and professional.`}
              />
            </div>

            <Callout type="info">
              When processing arrays, AI Chat automatically processes each item and
              returns an array of responses.
            </Callout>
          </div>
        </div>
      </section>

      <section id="best-practices">
        <h2 className="text-3xl font-bold mb-4">Best Practices</h2>

        <div className="space-y-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold mb-2">✅ DO: Use Clear System Prompts</h4>
            <p className="text-sm">
              Define the AI's role and behavior in the system prompt for consistent results.
            </p>
          </div>

          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20">
            <h4 className="font-semibold mb-2">✅ DO: Include Context</h4>
            <p className="text-sm">
              Provide relevant context from previous nodes to get better responses.
            </p>
          </div>

          <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold mb-2">❌ DON'T: Send Sensitive Data</h4>
            <p className="text-sm">
              Avoid sending passwords, API keys, or PII to external AI providers.
              Use Ollama for local processing of sensitive data.
            </p>
          </div>

          <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-950/20">
            <h4 className="font-semibold mb-2">❌ DON'T: Over-rely on High Temperatures</h4>
            <p className="text-sm">
              High temperature can produce inconsistent results. Use 0.3-0.7 for most tasks.
            </p>
          </div>
        </div>
      </section>

      <section id="providers">
        <h2 className="text-3xl font-bold mb-4">Provider Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-50 dark:bg-gray-900">
                <th className="py-3 px-4 text-left">Provider</th>
                <th className="py-3 px-4 text-left">Models</th>
                <th className="py-3 px-4 text-left">Best For</th>
                <th className="py-3 px-4 text-left">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">OpenAI</td>
                <td className="py-3 px-4"><code>gpt-4</code>, <code>gpt-4o-mini</code></td>
                <td className="py-3 px-4">General purpose, coding, analysis</td>
                <td className="py-3 px-4">$$</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Anthropic</td>
                <td className="py-3 px-4"><code>claude-3-5-sonnet</code></td>
                <td className="py-3 px-4">Long context, writing, analysis</td>
                <td className="py-3 px-4">$$</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Groq</td>
                <td className="py-3 px-4"><code>llama-3.3-70b</code></td>
                <td className="py-3 px-4">Fast inference, cost-effective</td>
                <td className="py-3 px-4">$</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-semibold">Ollama</td>
                <td className="py-3 px-4"><code>llama3.2</code>, <code>mistral</code></td>
                <td className="py-3 px-4">Privacy, offline, no API costs</td>
                <td className="py-3 px-4">Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="troubleshooting">
        <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>

        <div className="space-y-4">
          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              "API key is required" error
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              <p>Make sure you've entered a valid API key for the selected provider.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>OpenAI: Get key from platform.openai.com</li>
                <li>Anthropic: Get key from console.anthropic.com</li>
                <li>Groq: Get key from console.groq.com</li>
                <li>Ollama: No API key needed (runs locally)</li>
              </ul>
            </div>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              Response is too short or incomplete
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              <p>Increase the <code>maxTokens</code> parameter. Default is 1000 tokens (~750 words).</p>
              <p className="mt-2">For longer responses, try 2000-4000 tokens.</p>
            </div>
          </details>

          <details className="p-4 border rounded-lg">
            <summary className="font-semibold cursor-pointer">
              "No response from AI API" error
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              <p>Check your internet connection and verify the API endpoint is accessible.</p>
              <p className="mt-2">For Ollama, ensure the server is running on <code>http://localhost:11434</code></p>
            </div>
          </details>
        </div>
      </section>

      <section id="related">
        <h2 className="text-3xl font-bold mb-4">Related Nodes</h2>
        <div className="grid md:grid-cols-2 gap-4">
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
  );
}