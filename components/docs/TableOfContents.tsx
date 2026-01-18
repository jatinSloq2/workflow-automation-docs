'use client';

import { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    const headingData = elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName.substring(1)),
    }));
    setHeadings(headingData);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
        <BookOpen className="h-4 w-4" />
        On This Page
      </div>
      <ul className="space-y-2 text-sm border-l-2 border-gray-200 dark:border-gray-700 pl-4">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? 'ml-4' : ''}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 transition-colors ${
                activeId === heading.id
                  ? 'text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}