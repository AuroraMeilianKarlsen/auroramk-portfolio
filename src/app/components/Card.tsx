import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`bg-[rgba(255,135,135,0.08)] rounded-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
