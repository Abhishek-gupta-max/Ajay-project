import React from 'react';
import { Bot, X, ChevronLeft } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  showAvatar?: boolean;
}

export default function ChatHeader({ 
  onClose, 
  onBack, 
  title = "AJ Compliance Assistant", 
  subtitle = "Online \u2022 Replies instantly",
  showAvatar = true
}: ChatHeaderProps) {
  return (
    <div className="bg-primary-600 text-white px-5 py-4 flex items-center justify-between shadow-sm z-20 relative shrink-0 rounded-none sm:rounded-t-2xl">
      <div className="flex items-center gap-3">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-1.5 -ml-1 hover:bg-white/10 rounded-full transition-colors text-white/90 hover:text-white"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        
        {showAvatar && (
          <div className="relative">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-accent-500 border-2 border-primary-600 rounded-full"></span>
          </div>
        )}
        
        <div>
          <h3 className="font-bold text-sm leading-tight">{title}</h3>
          {subtitle && <p className="text-primary-100 text-[11px] mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <button 
        onClick={onClose}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all shrink-0 ml-2"
        aria-label="Close chat"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
