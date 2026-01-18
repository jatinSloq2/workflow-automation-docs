"use client"
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white mt-15">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="fixed top-0 left-0 bottom-0 w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto lg:hidden">
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
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                <DocsSidebar />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 max-w-4xl">
            {/* Content Container with Premium Styling */}
            <article className="relative">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-30" />

              <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                {/* Custom Prose Styling for Dark Theme */}
                <div className="prose-docs">
                  {children}
                </div>
              </div>
            </article>

            {/* Navigation Footer */}
            <div className="mt-12 flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Next
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </main>

          {/* Table of Contents - Hidden on smaller screens */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-34">
              <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm">
                <TableOfContents />
              </div>

              {/* Feedback Card */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <h4 className="font-bold text-white mb-2 text-sm">Was this helpful?</h4>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
                    👍 Yes
                  </button>
                  <button className="flex-1 px-3 py-2 text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
                    👎 No
                  </button>
                </div>
              </div>

              {/* Discord Card */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h4 className="font-bold text-white mb-2 text-sm">Need Help?</h4>
                <p className="text-xs text-gray-400 mb-3">
                  Join our community for support and discussions.
                </p>
                <a
                  href="https://discord.com"
                  className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
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
        .prose-docs h1 {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(to right, rgb(192 132 252), rgb(96 165 250));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.5rem;
        }

        .prose-docs h2 {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
        }

        .prose-docs h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: rgb(192 132 252);
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .prose-docs p {
          color: rgb(209 213 219);
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .prose-docs code {
          background: rgba(168 85 247 / 0.1);
          color: rgb(192 132 252);
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          border: 1px solid rgba(168 85 247 / 0.2);
        }

        .prose-docs pre {
          background: rgb(17 24 39);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        .prose-docs pre code {
          background: transparent;
          border: none;
          padding: 0;
          color: rgb(229 231 235);
        }

        .prose-docs ul,
        .prose-docs ol {
          color: rgb(209 213 219);
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .prose-docs li {
          margin: 0.5rem 0;
        }

        .prose-docs a {
          color: rgb(147 197 253);
          text-decoration: none;
          transition: color 0.2s;
        }

        .prose-docs a:hover {
          color: rgb(96 165 250);
          text-decoration: underline;
        }

        .prose-docs table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .prose-docs th {
          background: rgba(255, 255, 255, 0.05);
          color: rgb(192 132 252);
          font-weight: 700;
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .prose-docs td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: rgb(209 213 219);
        }

        .prose-docs blockquote {
          border-left: 4px solid rgb(168 85 247);
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: rgb(156 163 175);
          font-style: italic;
        }

        .prose-docs strong {
          color: white;
          font-weight: 700;
        }

        .prose-docs img {
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin: 1.5rem 0;
        }
      `}</style>
    </div>
  );
}