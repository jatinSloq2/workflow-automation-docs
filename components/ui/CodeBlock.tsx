
'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

// CodeBlock Component with Premium Styling
export function CodeBlock({ code, language = 'javascript' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-20 blur group-hover:opacity-30 transition-opacity" />
      
      <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-white/10">
        {/* Language Badge */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/30">
          <span className="text-xs font-mono text-purple-400">{language}</span>
          <button
            onClick={copyCode}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-xs"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 text-gray-400" />
                <span className="text-gray-400">Copy</span>
              </>
            )}
          </button>
        </div>
        
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language} text-sm text-gray-100 leading-relaxed`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}