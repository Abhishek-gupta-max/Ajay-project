import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSendMessage, disabled = false }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-3 bg-white border-t border-slate-100 rounded-b-2xl">
      <form onSubmit={handleSubmit} className="flex gap-2 items-end">
        <div className="relative flex-grow">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Ask your compliance question..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all disabled:opacity-50 resize-none max-h-32 min-h-[44px]"
            rows={1}
          />
          <button 
            type="button"
            className="absolute right-3 top-3 text-slate-400 hover:text-primary-600 transition-colors"
          >
            <Paperclip className="w-4 h-4" />
          </button>
        </div>
        <button
          type="submit"
          disabled={!input.trim() || disabled}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-xl p-3 h-[44px] flex items-center justify-center flex-shrink-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
