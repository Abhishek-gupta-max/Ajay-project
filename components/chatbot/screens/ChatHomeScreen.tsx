import React from 'react';
import Image from 'next/image';
import { ChevronRight, Send, X } from 'lucide-react';

interface ChatHomeScreenProps {
  onStartChat: () => void;
  onClose: () => void;
}

export default function ChatHomeScreen({ onStartChat, onClose }: ChatHomeScreenProps) {
  const actions = [
    {
      icon: <Send className="w-4 h-4 text-primary-600" />,
      title: "Chat with us now",
      onClick: onStartChat
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 overflow-y-auto">
      {/* Premium Deep Blue Header Area for Home */}
      <div className="bg-primary-600 px-5 pt-5 pb-10 relative text-white rounded-none sm:rounded-t-2xl flex flex-col">
        <div className="flex flex-row items-start justify-between">
          <div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm border border-white/20 overflow-hidden relative">
              <Image src="/logo.png" alt="Aj Legal Consultant Logo" fill className="object-contain p-1" />
            </div>

            <p className="text-primary-100 text-sm italic">We are here to help you</p>
          </div>

          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Action Cards overlapping header for depth */}
      <div className="px-5 -mt-6 z-10 space-y-3 pb-6 border-b border-transparent">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className="w-full bg-white p-3.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-between hover:shadow-md hover:border-primary-100 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                {action.icon}
              </div>
              <span className="font-semibold text-[13px] text-slate-800 tracking-tight">{action.title}</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-500 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
