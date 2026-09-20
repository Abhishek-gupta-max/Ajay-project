'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1E4E8C] mb-4">Something went wrong!</h1>
        <button onClick={() => reset()} className="px-6 py-3 bg-[#4CAF50] text-white font-bold rounded-xl hover:bg-[#43A047] transition-colors">
          Try again
        </button>
      </div>
    </div>
  );
}
