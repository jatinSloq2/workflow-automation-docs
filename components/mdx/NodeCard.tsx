import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      className="group relative p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-[1.02] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all" />
      
      <div className="relative flex items-start gap-4">
        <div className="text-4xl group-hover:scale-110 transition-transform">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-3 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center text-sm text-purple-400">
            <span>Learn more</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
