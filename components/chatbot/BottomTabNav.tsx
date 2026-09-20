import React from 'react';
import { Home, MessageSquare } from 'lucide-react';

interface BottomTabNavProps {
  activeTab: 'home' | 'messages';
  onTabChange: (tab: 'home' | 'messages') => void;
}

export default function BottomTabNav({ activeTab, onTabChange }: BottomTabNavProps) {
  return (
    <div className="flex items-center justify-around bg-white border-t border-gray-100 py-2 shrink-0 rounded-none sm:rounded-b-2xl shadow-[0_-4px_15px_rgba(0,0,0,0.03)] z-10">
      <button 
        onClick={() => onTabChange('home')}
        className={`flex flex-col items-center justify-center p-2.5 rounded-xl w-20 transition-all duration-200 ${activeTab === 'home' ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
      >
        <Home className="w-[22px] h-[22px] mb-1" />
        <span className="text-[10px] font-semibold tracking-wide">Home</span>
      </button>
      
      <button 
        onClick={() => onTabChange('messages')}
        className={`flex flex-col items-center justify-center p-2.5 rounded-xl w-20 transition-all duration-200 ${activeTab === 'messages' ? 'text-primary-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
      >
        <MessageSquare className="w-[22px] h-[22px] mb-1" />
        <span className="text-[10px] font-semibold tracking-wide">Messages</span>
      </button>
    </div>
  );
}
