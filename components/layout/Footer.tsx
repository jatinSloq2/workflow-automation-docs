import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/docs/getting-started">Quick Start</Link></li>
              <li><Link href="/docs/examples">Examples</Link></li>
              <li><Link href="/changelog">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/docs/nodes">All Nodes</Link></li>
              <li><Link href="/docs/expressions">Expressions</Link></li>
              <li><Link href="/docs/guides">Guides</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="https://github.com">GitHub</a></li>
              <li><a href="https://discord.com">Discord</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/license">License</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2024 Workflow Automation. Built with ❤️ and Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
