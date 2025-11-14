
import React from 'react';

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: 'blue' | 'purple' | 'green' | 'indigo';
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-300',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    border: 'border-purple-300',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-300',
  },
  indigo: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-800',
    border: 'border-indigo-300',
  },
};


export const InfoCard: React.FC<InfoCardProps> = ({ title, icon, color, children }) => {
  const classes = colorClasses[color];
  return (
    <section className="bg-white rounded-xl shadow-lg overflow-hidden w-full">
      <header className={`flex items-center gap-3 p-4 border-b ${classes.border} ${classes.bg}`}>
        <span className={classes.text}>{icon}</span>
        <h2 className={`text-xl font-bold ${classes.text}`}>
          {title}
        </h2>
      </header>
      <div className="p-6">
        {children}
      </div>
    </section>
  );
};
