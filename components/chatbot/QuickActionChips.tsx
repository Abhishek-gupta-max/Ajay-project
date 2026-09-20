import React from 'react';

interface QuickActionChipsProps {
  onActionSelect: (action: string) => void;
}

export default function QuickActionChips({ onActionSelect }: QuickActionChipsProps) {
  const actions = [
    "Register my company",
    "Apply for GST",
    "Trademark help",
    "FSSAI license",
    "Talk to expert"
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-3 mb-1 ml-11">
      {actions.map((action, idx) => (
        <button
          key={idx}
          onClick={() => onActionSelect(action)}
          className="text-xs font-semibold text-primary-700 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-3.5 py-2 rounded-full transition-colors text-left shadow-sm"
        >
          {action}
        </button>
      ))}
    </div>
  );
}
