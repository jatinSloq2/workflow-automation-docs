"use client"

import { ChevronDown, Code, Github, Menu, Sparkles, Workflow, X, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-200">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2.5 px-4 text-sm">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4 animate-pulse" />
          <span className="font-medium">New: AI Vision nodes now available</span>
          <span className="hidden sm:inline">-</span>
          <Link href="/blog/ai-vision" className="hidden sm:inline underline font-semibold hover:text-purple-200 transition-colors">
            Learn more →
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
              <Workflow className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-lg bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                AI Automations
              </span>
              <div className="text-[10px] text-gray-500 dark:text-gray-500 -mt-1">No-Code Workflows</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsOpen(true)}
                className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
              >
                Product
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in"
                >
                  <div className="p-2">
                    <Link href="/features" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                      <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Features</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Explore all capabilities</div>
                      </div>
                    </Link>
                    <Link href="/pricing" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                      <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Pricing</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Simple, transparent pricing</div>
                      </div>
                    </Link>
                    <Link href="/integrations" className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                      <Code className="h-5 w-5 text-pink-600 dark:text-pink-400 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Integrations</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Connect to 100+ services</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/docs"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Documentation
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Blog
            </Link>
            <Link
              href="/examples"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Examples
            </Link>
            <Link
              href="/community"
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            >
              Community
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* GitHub Star */}
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-sm group"
            >
              <Github className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Star</span>
              <span className="px-2 py-0.5 bg-gray-200 dark:bg-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300 font-semibold">2.5k</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Sign In */}
            <Link
              href="/login"
              className="hidden sm:block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
            >
              Sign In
            </Link>

            {/* Get Started Button */}
            <Link
              href="/signup"
              className="relative group px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 dark:hover:shadow-purple-500/30"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Product</div>
              <Link href="/features" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Pricing
              </Link>
              <Link href="/integrations" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Integrations
              </Link>
            </div>
            
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">Resources</div>
              <Link href="/docs" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Documentation
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Blog
              </Link>
              <Link href="/examples" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Examples
              </Link>
              <Link href="/community" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors">
                Community
              </Link>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-white/10">
              <Link
                href="/login"
                className="block w-full px-4 py-2 mb-2 text-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/10 rounded-lg transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block w-full px-4 py-2 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}