import React from 'react';

export default function TypingIndicator() {
  return (
    <div className="flex w-full gap-3 py-2 justify-start">
      <div className="px-4 py-3 bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tl-sm flex items-center gap-1.5 ml-11">
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>
    </div>
  );
}
