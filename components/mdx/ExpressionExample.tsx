// ExpressionExample Component
export function ExpressionExample({ 
  expression, 
  description, 
  result 
}: { 
  expression: string; 
  description: string; 
  result?: string;
}) {
  return (
    <div className="my-4 p-5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
      <div className="mb-3">
        <code className="text-purple-400 font-mono text-sm bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
          {expression}
        </code>
      </div>
      <p className="text-sm text-gray-300 mb-3 leading-relaxed">
        {description}
      </p>
      {result && (
        <div className="p-3 bg-black/30 rounded-lg border border-green-500/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500 uppercase tracking-wider">Result</span>
          </div>
          <code className="text-sm text-green-400 font-mono">
            {result}
          </code>
        </div>
      )}
    </div>
  );
}