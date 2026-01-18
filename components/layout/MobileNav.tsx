'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { DocsSidebar } from '@/components/docs/DocsSidebar';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-900 dark:text-gray-100"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="font-semibold">Menu</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[57px] z-40 bg-white dark:bg-gray-900 overflow-y-auto">
          <div className="p-4">
            <DocsSidebar />
          </div>
        </div>
      )}
    </div>
  );
}