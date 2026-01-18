import Link from 'next/link';
import { ArrowRight, Brain, Zap } from 'lucide-react';

export default function AINodesOverviewPage() {
  const aiNodes = [
    {
      title: 'AI Chat',
      description: 'Interact with language models (GPT-4, Claude, Llama) for text generation and analysis',
      icon: '🤖',
      href: '/docs/nodes/ai/ai-chat',
      providers: ['OpenAI', 'Anthropic', 'Ollama', 'Groq'],
    },
    {
      title: 'AI Text Generation',
      description: 'Generate specialized content with predefined templates and tones',
      icon: '✍️',
      href: '/docs/nodes/ai/text-generation',
      providers: ['OpenAI', 'Anthropic'],
    },
    {
      title: 'AI Image Analysis',
      description: 'Analyze images and extract information with vision models',
      icon: '👁️',
      href: '/docs/nodes/ai/image-analysis',
      providers: ['OpenAI', 'Google', 'Anthropic'],
    },
    {
      title: 'Sentiment Analysis',
      description: 'Analyze the sentiment and emotional tone of text content',
      icon: '😊',
      href: '/docs/nodes/ai/sentiment',
      providers: ['Built-in'],
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
          <span className="text-white">AI & ML</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">AI & ML Nodes</span>
          </div>
          
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            AI & ML Nodes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Integrate powerful AI models into your workflows for intelligent automation. 
            Access leading AI providers including OpenAI, Anthropic, Ollama, and more.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Available AI Nodes</h2>
          
          <div className="space-y-6">
            {aiNodes.map((node) => (
              <Link
                key={node.href}
                href={node.href}
                className="group relative overflow-hidden rounded-2xl block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:border-white/30 transition-all">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="text-4xl mb-4">{node.icon}</div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {node.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed mb-4">
                        {node.description}
                      </p>
                      <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="flex-shrink-0 pt-2">
                      <div className="text-xs text-gray-400 mb-2 font-semibold uppercase">Providers:</div>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {node.providers.map((provider) => (
                          <span key={provider} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                            {provider}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Supported Providers */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Supported AI Providers</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
              <h3 className="text-lg font-bold mb-3 text-blue-400">☁️ Cloud Providers</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-1">OpenAI</h4>
                  <p className="text-sm text-gray-400">GPT-4, GPT-4 Turbo, GPT-3.5, DALL-E vision models</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Anthropic</h4>
                  <p className="text-sm text-gray-400">Claude 3 series (Opus, Sonnet, Haiku)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Groq</h4>
                  <p className="text-sm text-gray-400">Fast inference with Llama models</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Google</h4>
                  <p className="text-sm text-gray-400">PaLM 2, Gemini models, Vision API</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
              <h3 className="text-lg font-bold mb-3 text-green-400">🏠 Local & Open Source</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white mb-1">Ollama</h4>
                  <p className="text-sm text-gray-400">Run Llama 2, Mistral, and other models locally</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Benefits</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>✓ Privacy - Keep data local</li>
                    <li>✓ Cost - No API bills</li>
                    <li>✓ Speed - No network latency</li>
                    <li>✓ Control - Full customization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-bold mb-3 text-purple-400">Content Generation</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Blog posts & articles</li>
                <li>• Product descriptions</li>
                <li>• Email campaigns</li>
                <li>• Social media content</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/50 transition-all">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-bold mb-3 text-blue-400">Data Analysis</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Text summarization</li>
                <li>• Sentiment analysis</li>
                <li>• Document classification</li>
                <li>• Image recognition</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 hover:border-pink-500/50 transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold mb-3 text-pink-400">Customer Support</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>• Chatbot responses</li>
                <li>• FAQ automation</li>
                <li>• Email drafting</li>
                <li>• Support ticket routing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Considerations */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Cost Considerations</h2>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Cloud Provider Costs</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>
                    Most cloud AI providers charge per API call based on token usage. Costs vary depending on the model:
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                    <div className="space-y-2 font-mono text-xs">
                      <div>OpenAI GPT-3.5: ~$0.0015 / 1K tokens</div>
                      <div>OpenAI GPT-4: ~$0.03 / 1K tokens</div>
                      <div>Claude 3 Haiku: ~$0.0008 / 1K tokens</div>
                      <div>Groq (free tier): <span className="text-green-400">$0 - Fast inference</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 text-green-400">Local Model Costs</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>
                    Running models locally with Ollama has no API costs, but requires hardware:
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                    <div className="space-y-2">
                      <div><span className="text-green-400">✓ No API fees</span></div>
                      <div><span className="text-green-400">✓ Unlimited calls</span></div>
                      <div><span className="text-yellow-400">⚠ Hardware costs</span></div>
                      <div><span className="text-yellow-400">⚠ Maintenance overhead</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-6">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Start with Smaller Models</h4>
              <p className="text-sm text-gray-300">
                Test with smaller, faster models first (GPT-3.5, Claude Haiku) before scaling to larger ones.
              </p>
            </div>

            <div className="p-5 border-l-4 border-green-500 bg-green-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-green-400">✅ Optimize Prompts</h4>
              <p className="text-sm text-gray-300">
                Well-crafted prompts reduce processing time and token usage, lowering costs significantly.
              </p>
            </div>

            <div className="p-5 border-l-4 border-blue-500 bg-blue-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-blue-400">ℹ️ Cache Results</h4>
              <p className="text-sm text-gray-300">
                Store AI results for frequently asked questions to reduce API calls and improve performance.
              </p>
            </div>

            <div className="p-5 border-l-4 border-red-500 bg-red-500/10 rounded-r-xl">
              <h4 className="font-bold mb-2 text-red-400">❌ Don't Send Sensitive Data</h4>
              <p className="text-sm text-gray-300">
                Avoid sending PII, passwords, or confidential information to cloud AI providers. Use local models instead.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Start Using AI in Your Workflows</h3>
          <p className="text-gray-300 mb-6">
            Pick an AI node to learn how to integrate it into your automation:
          </p>
          <div className="flex flex-wrap gap-3">
            {aiNodes.slice(0, 3).map((node) => (
              <Link 
                key={node.href}
                href={node.href} 
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all flex items-center gap-2"
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
