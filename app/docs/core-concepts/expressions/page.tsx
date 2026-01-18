import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ExpressionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link href="/docs" className="hover:text-gray-700 dark:hover:text-white">Docs</Link>
          <span>/</span>
          <Link href="/docs/core-concepts" className="hover:text-gray-700 dark:hover:text-white">Core Concepts</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Expressions</span>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
            Expressions
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
            Expressions allow you to dynamically reference and manipulate data throughout your workflows. 
            Use double curly braces to access data from nodes, inputs, and built-in functions.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">What are Expressions?</h2>
          <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Expressions are powerful ways to access and transform data within your workflows. 
              Instead of hardcoding values, you can reference data from previous nodes, workflow inputs, 
              and other sources using a simple syntax.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All expressions are wrapped in double curly braces: {'{{ expression }}'} syntax
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Expression Types</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">Node References</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Access output data from any node in your workflow.
              </p>
              <code className="block bg-gray-200 dark:bg-black/50 p-3 rounded text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
                $node.httpRequest_1.data.results[0].name
              </code>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-blue-600 dark:text-blue-400">Previous Node</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Reference data from the immediately previous node.
              </p>
              <code className="block bg-gray-200 dark:bg-black/50 p-3 rounded text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
                $prev.data.email
              </code>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-green-600 dark:text-green-400">Input Data</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Access workflow trigger input data.
              </p>
              <code className="block bg-gray-200 dark:bg-black/50 p-3 rounded text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
                $input.userId
              </code>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold mb-3 text-pink-600 dark:text-pink-400">Built-in Functions</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Use special functions for common operations.
              </p>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>• $now - Current timestamp</li>
                <li>• $timestamp - Unix timestamp</li>
                <li>• $uuid - Generate unique ID</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Personalized Emails</h4>
              <code className="block bg-gray-200 dark:bg-black/50 p-3 rounded text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
Dear customer name,
Your order is ready!
              </code>
            </div>

            <div className="p-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Conditional Logic</h4>
              <code className="block bg-gray-200 dark:bg-black/50 p-3 rounded text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
IF (price {'>'} 100)
  Apply discount
              </code>
            </div>
          </div>
        </section>

        <section>
          <div className="p-8 rounded-xl bg-gradient-to-r from-purple-100 dark:from-purple-500/10 to-blue-100 dark:to-blue-500/10 border border-purple-200 dark:border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Learn More About Expressions</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Explore advanced expression usage and examples.
            </p>
            <Link
              href="/docs/expressions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 dark:bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-700 text-white rounded-lg font-semibold transition-all"
            >
              Expressions Guide
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
