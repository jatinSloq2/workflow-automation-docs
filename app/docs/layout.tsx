import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { MobileNav } from '@/components/layout/MobileNav';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Mobile Navigation */}
      <MobileNav />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex gap-8 py-8">
          {/* Sidebar - Hidden on mobile, shown on lg+ */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <DocsSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 max-w-3xl">
            <article className="prose prose-blue dark:prose-invert max-w-none">
              {children}
            </article>
          </main>

          {/* Table of Contents - Hidden on smaller screens */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}