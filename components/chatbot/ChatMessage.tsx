import React from 'react';
import { Bot } from 'lucide-react';

export type MessageRole = 'user' | 'bot';

export interface MessageProps {
  id: string;
  role: MessageRole;
  content: string | React.ReactNode;
  timestamp: Date;
}

export default function ChatMessage({ message }: { message: MessageProps }) {
  const isUser = message.role === 'user';
  const timeString = message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex w-full gap-3 py-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600 mt-1 border border-primary-200 shadow-sm">
          <Bot className="w-4 h-4" />
        </div>
      )}
      
      <div className={`max-w-[80%] flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <div 
          className={`px-4 py-2.5 rounded-2xl text-sm ${
            isUser 
              ? 'bg-primary-600 text-white rounded-tr-sm shadow-sm' 
              : 'bg-white border border-slate-100 shadow-sm text-slate-700 rounded-tl-sm'
          }`}
        >
          {message.content}
        </div>
        <span className="text-[10px] text-slate-400 mt-1 px-1 font-medium">
          {timeString}
        </span>
      </div>
    </div>
  );
}
