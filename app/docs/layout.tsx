"use client"

import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DocsLayout({ children = null }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white mt-15 transition-colors duration-300">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white to-blue-100/30 dark:from-purple-900/10 dark:via-black dark:to-blue-900/10 transition-colors duration-300" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl transition-colors duration-300" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl transition-colors duration-300" />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 bg-gray-100 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all shadow-lg"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-gray-900 dark:text-white" />
          ) : (
            <Menu className="h-5 w-5 text-gray-900 dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="fixed top-0 left-0 bottom-0 w-80 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-r border-gray-300 dark:border-white/10 z-50 overflow-y-auto lg:hidden shadow-2xl">
            <div className="p-6 pt-24">
              <DocsSidebar />
            </div>
          </aside>
        </>
      )}

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="flex gap-8">
          {/* Desktop Sidebar - Hidden on mobile, shown on lg+ */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-34">
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-lg">
                <DocsSidebar />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 max-w-4xl">
            {/* Content Container with Premium Styling */}
            <article className="relative">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-blue-400/30 dark:from-purple-600/20 dark:to-blue-600/20 rounded-2xl blur opacity-30" />

              <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-xl">
                {/* Custom Prose Styling */}
                <div className="prose-docs">
                  {children || (
                    <div>
                      <h1>Documentation Title</h1>
                      <p>This is where your documentation content appears. The layout supports both light and dark themes with smooth transitions.</p>
                      <h2>Section Heading</h2>
                      <p>Content paragraphs automatically adjust colors based on the active theme.</p>
                      <pre>
                        <code>{`// Code blocks are styled for readability
function example() {
  return "Hello World";
}`}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </main>

          {/* Table of Contents - Hidden on smaller screens */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-34">
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/0 border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-lg">
                <TableOfContents />
              </div>

              {/* Feedback Card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-500/10 dark:to-blue-500/10 border border-purple-300 dark:border-purple-500/20 shadow-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Was this helpful?</h4>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 text-xs font-semibold bg-white dark:bg-white/5 hover:bg-green-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg transition-all">
                    👍 Yes
                  </button>
                  <button className="flex-1 px-3 py-2 text-xs font-semibold bg-white dark:bg-white/5 hover:bg-red-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-lg transition-all">
                    👎 No
                  </button>
                </div>
              </div>

              {/* Discord Card */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-300 dark:border-blue-500/20 shadow-lg">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Need Help?</h4>
                <p className="text-xs text-gray-700 dark:text-gray-400 mb-3">
                  Join our community for support and discussions.
                </p>
                <a
                  href="https://discord.com"
                  className="inline-flex items-center gap-2 text-xs text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-semibold"
                >
                  Join Discord →
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Custom Styles for Documentation Content */}
      <style jsx global>{`
        /* Light Theme Styles */
        .prose-docs h1 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
        }

        :root .prose-docs h1 {
          background: linear-gradient(to right, rgb(147 51 234), rgb(59 130 246));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        :root.dark .prose-docs h1 {
          background: linear-gradient(to right, rgb(192 132 252), rgb(96 165 250));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .prose-docs h2 {
          font-size: 2rem;
          font-weight: 800;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
        }

        :root .prose-docs h2 {
          color: rgb(17 24 39);
          border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        }

        :root.dark .prose-docs h2 {
          color: white;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .prose-docs h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        :root .prose-docs h3 {
          color: rgb(147 51 234);
        }

        :root.dark .prose-docs h3 {
          color: rgb(192 132 252);
        }

        .prose-docs p {
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        :root .prose-docs p {
          color: rgb(55 65 81);
        }

        :root.dark .prose-docs p {
          color: rgb(209 213 219);
        }

        .prose-docs code {
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          border: 1px solid rgba(168 85 247 / 0.2);
        }

        :root .prose-docs code {
          background: rgba(147 51 234 / 0.1);
          color: rgb(147 51 234);
        }

        :root.dark .prose-docs code {
          background: rgba(168 85 247 / 0.1);
          color: rgb(192 132 252);
        }

        .prose-docs pre {
          border-radius: 0.75rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        :root .prose-docs pre {
          background: rgb(31 41 55);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        :root.dark .prose-docs pre {
          background: rgb(17 24 39);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .prose-docs pre code {
          background: transparent;
          border: none;
          padding: 0;
          color: rgb(229 231 235);
        }

        .prose-docs ul,
        .prose-docs ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        :root .prose-docs ul,
        :root .prose-docs ol {
          color: rgb(55 65 81);
        }

        :root.dark .prose-docs ul,
        :root.dark .prose-docs ol {
          color: rgb(209 213 219);
        }

        .prose-docs li {
          margin: 0.5rem 0;
        }

        .prose-docs a {
          text-decoration: none;
          transition: color 0.2s;
        }

        :root .prose-docs a {
          color: rgb(59 130 246);
        }

        :root.dark .prose-docs a {
          color: rgb(147 197 253);
        }

        :root .prose-docs a:hover {
          color: rgb(37 99 235);
          text-decoration: underline;
        }

        :root.dark .prose-docs a:hover {
          color: rgb(96 165 250);
          text-decoration: underline;
        }

        .prose-docs table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        :root .prose-docs table {
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        :root.dark .prose-docs table {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .prose-docs th {
          font-weight: 700;
          padding: 0.75rem 1rem;
          text-align: left;
        }

        :root .prose-docs th {
          background: rgba(0, 0, 0, 0.05);
          color: rgb(147 51 234);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        :root.dark .prose-docs th {
          background: rgba(255, 255, 255, 0.05);
          color: rgb(192 132 252);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .prose-docs td {
          padding: 0.75rem 1rem;
        }

        :root .prose-docs td {
          color: rgb(55 65 81);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        :root.dark .prose-docs td {
          color: rgb(209 213 219);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .prose-docs blockquote {
          border-left: 4px solid rgb(168 85 247);
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
        }

        :root .prose-docs blockquote {
          color: rgb(107 114 128);
        }

        :root.dark .prose-docs blockquote {
          color: rgb(156 163 175);
        }

        .prose-docs strong {
          font-weight: 700;
        }

        :root .prose-docs strong {
          color: rgb(17 24 39);
        }

        :root.dark .prose-docs strong {
          color: white;
        }

        .prose-docs img {
          border-radius: 0.75rem;
          margin: 1.5rem 0;
        }

        :root .prose-docs img {
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        :root.dark .prose-docs img {
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}