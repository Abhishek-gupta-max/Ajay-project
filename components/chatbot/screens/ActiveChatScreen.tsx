import React, { useEffect, useRef } from 'react';
import ChatHeader from '../ChatHeader';
import ChatMessage, { MessageProps } from '../ChatMessage';
import TypingIndicator from '../TypingIndicator';
import QuickActionChips from '../QuickActionChips';
import ChatInput from '../ChatInput';

interface ActiveChatScreenProps {
  messages: MessageProps[];
  isTyping: boolean;
  onSendMessage: (msg: string) => void;
  onBack: () => void;
  onClose: () => void;
}

export default function ActiveChatScreen({ messages, isTyping, onSendMessage, onBack, onClose }: ActiveChatScreenProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setTimeout(scrollToBottom, 50);
  }, [messages, isTyping]);

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden absolute inset-0 z-20">
      <ChatHeader onClose={onClose} onBack={onBack} title="AJ Compliance Assistant" />
      
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1 relative scroll-smooth pattern-dots pattern-slate-200 pattern-bg-white pattern-size-4 opacity-100">
        <div className="absolute inset-0 bg-white/80 z-0"></div>
        <div className="z-10 flex flex-col gap-1 min-h-full justify-start pb-2">
          {messages.length === 0 && (
             <div className="py-10 flex flex-col items-center justify-center text-center mt-4 mb-4">
               <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 border border-primary-100 shadow-sm">
                 <span className="text-2xl font-bold text-primary-600 tracking-tighter">AJ</span>
               </div>
               <h3 className="font-bold text-slate-900 mb-1.5 text-[15px]">Start a Conversation</h3>
               <p className="text-xs text-slate-500 max-w-[200px] leading-relaxed">We typically reply in a few minutes. Ask us anything.</p>
             </div>
          )}

          {messages.map((msg, index) => {
             const prevMsg = index > 0 ? messages[index - 1] : null;
             const isNewGroup = prevMsg && prevMsg.role !== msg.role;
             return (
               <div key={msg.id} className={isNewGroup ? 'mt-3' : 'mt-1'}>
                 <ChatMessage message={msg} />
               </div>
             )
          })}
          
          {isTyping && (
             <div className="mt-3">
               <TypingIndicator />
             </div>
          )}
          
          {messages.length > 0 && messages.length <= 2 && !isTyping && (
            <QuickActionChips onActionSelect={(action) => onSendMessage(action)} />
          )}
          <div ref={messagesEndRef} className="h-4 shrink-0" />
        </div>
      </div>

      <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
    </div>
  );
}
