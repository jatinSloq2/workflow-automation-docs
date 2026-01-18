// src/app/page.tsx
import Link from 'next/link';
import { ArrowRight, Zap, Code2, GitBranch, Sparkles, FileCode, Mail, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              No-Code Workflow Automation
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Build Powerful Workflows
            <br />
            Without Code
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Automate your tasks with AI, APIs, databases, and more. 
            Connect nodes, configure logic, and let your workflows run automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-semibold text-lg transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Powerful features to automate any workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-8 w-8" />}
            title="Visual Workflow Builder"
            description="Drag and drop nodes to create complex workflows. See your automation logic come to life."
          />
          <FeatureCard
            icon={<Code2 className="h-8 w-8" />}
            title="Smart Expressions"
            description="Use variables and expressions to access data from previous nodes. Dynamic and powerful."
          />
          <FeatureCard
            icon={<Sparkles className="h-8 w-8" />}
            title="AI Integration"
            description="Connect to OpenAI, Anthropic, or local models. Generate content, analyze data, and more."
          />
          <FeatureCard
            icon={<Database className="h-8 w-8" />}
            title="Data Processing"
            description="Upload files, parse CSV/Excel, transform data, and aggregate results effortlessly."
          />
          <FeatureCard
            icon={<Mail className="h-8 w-8" />}
            title="Communication"
            description="Send emails, post to Slack, and integrate with your favorite communication tools."
          />
          <FeatureCard
            icon={<GitBranch className="h-8 w-8" />}
            title="Advanced Logic"
            description="Conditional branching, loops, filters, and custom code execution for complex scenarios."
          />
        </div>
      </section>

      {/* Node Categories */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Explore Node Categories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Over 30+ nodes to power your automations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Triggers"
            description="Start workflows manually, via webhooks, or on schedule"
            link="/docs/nodes/triggers"
            icon="⚡"
            count={3}
          />
          <CategoryCard
            title="AI Nodes"
            description="Chat, content generation, image analysis, sentiment"
            link="/docs/nodes/ai"
            icon="🤖"
            count={4}
          />
          <CategoryCard
            title="Data"
            description="HTTP requests, databases, file uploads, JSON parsing"
            link="/docs/nodes/data"
            icon="🗄️"
            count={8}
          />
          <CategoryCard
            title="Transform"
            description="Code, filters, sorting, mapping, aggregation"
            link="/docs/nodes/transform"
            icon="🔄"
            count={10}
          />
          <CategoryCard
            title="Logic"
            description="If/else, switch, loops, merge operations"
            link="/docs/nodes/logic"
            icon="🔀"
            count={5}
          />
          <CategoryCard
            title="Communication"
            description="Email, Slack, notifications"
            link="/docs/nodes/communication"
            icon="📧"
            count={3}
          />
          <CategoryCard
            title="Files"
            description="Read, write, upload files and documents"
            link="/docs/nodes/files"
            icon="📁"
            count={2}
          />
          <CategoryCard
            title="Utilities"
            description="Delays, variables, debugging tools"
            link="/docs/nodes/utilities"
            icon="🛠️"
            count={4}
          />
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Start Guide</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Build your first workflow in minutes
            </p>
          </div>

          <div className="space-y-6">
            <StepCard
              number={1}
              title="Install & Setup"
              description="Clone the repository and install dependencies"
              link="/docs/getting-started/installation"
            />
            <StepCard
              number={2}
              title="Create a Workflow"
              description="Add nodes, connect them, and configure settings"
              link="/docs/getting-started/first-workflow"
            />
            <StepCard
              number={3}
              title="Use Expressions"
              description="Reference data from previous nodes with {{expressions}}"
              link="/docs/expressions/basics"
            />
            <StepCard
              number={4}
              title="Execute & Monitor"
              description="Run your workflow and view execution results"
              link="/docs/core-concepts/executions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Automate?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start building powerful workflows today
          </p>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Read the Documentation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
      <div className="mb-4 text-blue-600 dark:text-blue-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function CategoryCard({ title, description, link, icon, count }: { title: string; description: string; link: string; icon: string; count: number }) {
  return (
    <Link
      href={link}
      className="p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{count} nodes</span>
        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

function StepCard({ number, title, description, link }: { number: number; title: string; description: string; link: string }) {
  return (
    <Link
      href={link}
      className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-md group"
    >
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <ArrowRight className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
    </Link>
  );
}