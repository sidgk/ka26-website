import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  variant = 'dark',
  className = '',
  hover = false,
}: GlassCardProps) {
  const base = variant === 'dark'
    ? 'bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/10'
    : 'bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-sm';

  const hoverClass = hover
    ? variant === 'dark'
      ? 'hover-lift-dark transition-all'
      : 'hover-lift transition-all'
    : '';

  return (
    <div className={`rounded-2xl ${base} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
