import { AlertCircle, Info, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'success' | 'error' | 'tip';

const calloutConfig = {
  info: {
    icon: Info,
    className: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    iconClassName: 'text-blue-600 dark:text-blue-400',
  },
  warning: {
    icon: AlertTriangle,
    className: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800',
    iconClassName: 'text-amber-600 dark:text-amber-400',
  },
  success: {
    icon: CheckCircle,
    className: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800',
    iconClassName: 'text-green-600 dark:text-green-400',
  },
  error: {
    icon: AlertCircle,
    className: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800',
    iconClassName: 'text-red-600 dark:text-red-400',
  },
  tip: {
    icon: Lightbulb,
    className: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800',
    iconClassName: 'text-purple-600 dark:text-purple-400',
  },
};

export function Callout({ 
  type = 'info', 
  title, 
  children 
}: { 
  type?: CalloutType; 
  title?: string; 
  children: React.ReactNode;
}) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div className={`p-4 rounded-lg border-2 ${config.className}`}>
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${config.iconClassName}`} />
        <div className="flex-1">
          {title && (
            <p className="font-semibold mb-1">{title}</p>
          )}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}
