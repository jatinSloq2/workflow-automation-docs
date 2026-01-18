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
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
      <code className="text-blue-600 dark:text-blue-400 font-mono text-sm">
        {expression}
      </code>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        {description}
      </p>
      {result && (
        <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded border">
          <p className="text-xs text-gray-500 mb-1">Result:</p>
          <code className="text-xs text-green-600 dark:text-green-400">
            {result}
          </code>
        </div>
      )}
    </div>
  );
}