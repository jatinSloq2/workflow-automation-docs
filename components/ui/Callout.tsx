
'use client';

import { AlertCircle, AlertTriangle, CheckCircle, Info, Lightbulb } from 'lucide-react';

// Callout Component with Premium Styling
type CalloutType = 'info' | 'warning' | 'success' | 'error' | 'tip';

const calloutConfig = {
  info: {
    icon: Info,
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
  },
  warning: {
    icon: AlertTriangle,
    gradient: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
  },
  success: {
    icon: CheckCircle,
    gradient: 'from-green-500 to-emerald-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
  },
  error: {
    icon: AlertCircle,
    gradient: 'from-red-500 to-pink-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
  },
  tip: {
    icon: Lightbulb,
    gradient: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
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
    <div className={`relative my-6 p-6 rounded-xl border ${config.border} ${config.bg} backdrop-blur-sm overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} opacity-5`} />
      
      <div className="relative flex gap-4">
        <div className={`flex-shrink-0 p-2 ${config.bg} rounded-lg border ${config.border}`}>
          <Icon className={`h-5 w-5 ${config.text}`} />
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-bold mb-2 ${config.text}`}>{title}</h4>
          )}
          <div className="text-sm text-gray-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}