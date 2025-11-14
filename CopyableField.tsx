
import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface CopyableFieldProps {
  label: string;
  value: string;
}

export const CopyableField: React.FC<CopyableFieldProps> = ({ label, value }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 sm:p-4">
        <div className="flex justify-between items-center">
            <div>
                <span className="block text-sm text-slate-500">{label}</span>
                <span className="block text-lg font-mono text-slate-700 tracking-wider mt-1">{value}</span>
            </div>
            <button
                onClick={handleCopy}
                className={`flex items-center gap-2 py-2 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                isCopied
                    ? 'bg-green-100 text-green-700'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
            >
                {isCopied ? <CheckIcon /> : <CopyIcon />}
                {isCopied ? 'کپی شد!' : 'کپی'}
            </button>
        </div>
    </div>
  );
};
