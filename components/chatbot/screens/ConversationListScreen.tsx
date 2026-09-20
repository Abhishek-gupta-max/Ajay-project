import React from 'react';
import { MessageSquarePlus, X } from 'lucide-react';

interface ConversationListScreenProps {
  onStartChat: () => void;
  hasConversations: boolean;
  onClose: () => void;
}

export default function ConversationListScreen({ onStartChat, hasConversations, onClose }: ConversationListScreenProps) {
  return (
    <div className="flex-1 flex flex-col bg-white overflow-y-auto">
      <div className="px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">Messages</h2>
        <button onClick={onClose} className="p-1 -mr-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-5">
        <button 
          onClick={onStartChat}
          className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-xl font-semibold text-[13px] transition-all duration-200 shadow-[0_2px_8px_rgba(3,70,151,0.2)] hover:shadow-[0_4px_12px_rgba(3,70,151,0.3)] hover:-translate-y-0.5"
        >
          <MessageSquarePlus className="w-4 h-4" /> Start a new chat
        </button>

        <div className="mt-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Recent</h3>
          
          {hasConversations ? (
            <button 
              onClick={onStartChat}
              className="w-full bg-white border border-primary-100 hover:border-primary-300 p-4 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-start gap-4 transition-all text-left group"
            >
              <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center shrink-0 border border-primary-100">
                <span className="text-primary-600 font-bold text-sm">AJ</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-[13px] text-slate-900 truncate group-hover:text-primary-600 transition-colors">AJ Compliance Assistant</h4>
                  <span className="text-[10px] text-slate-400 font-medium">Just now</span>
                </div>
                <p className="text-xs text-slate-500 truncate">I can certainly help you with that.</p>
              </div>
            </button>
          ) : (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                <MessageSquarePlus className="w-6 h-6 text-slate-300" />
              </div>
              <p className="text-slate-600 font-semibold text-sm mb-1">No recent conversations</p>
              <p className="text-slate-400 text-xs max-w-[200px]">Send us a message to get started with your legal compliance.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
