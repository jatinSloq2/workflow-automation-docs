import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function NodeCard({ 
  title, 
  description, 
  href, 
  icon 
}: { 
  title: string; 
  description: string; 
  href: string; 
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group p-6 border-2 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <span className="text-3xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {description}
          </p>
          <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
            Learn more
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}