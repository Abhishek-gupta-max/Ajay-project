'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { MessageProps } from './ChatMessage';
import ChatHomeScreen from './screens/ChatHomeScreen';
import ConversationListScreen from './screens/ConversationListScreen';
import ActiveChatScreen from './screens/ActiveChatScreen';
import BottomTabNav from './BottomTabNav';
import ServiceCard from './cards/ServiceCard';
import LeadCaptureCard from './cards/LeadCaptureCard';
import ConnectExpertCard from './cards/ConnectExpertCard';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'messages'>('home');
  const [activeView, setActiveView] = useState<'tab_view' | 'active_chat'>('tab_view');
  
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close on ESC or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeView === 'active_chat' && messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'bot',
          content: 'Hi there! 👋 Welcome to Aj Legal Consultant. How can I help you today?',
          timestamp: new Date()
        }
      ]);
    }
  }, [activeView, messages.length]);

  const handleSendMessage = (text: string) => {
    const newUserMsg: MessageProps = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: React.ReactNode = "I can certainly help you with that. Could you provide a few more details?";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('company') || lowerText.includes('register')) {
        botResponse = (
          <div>
            <p className="mb-2">We offer complete Private Limited Company incorporation packages. Here is our most popular plan:</p>
            <ServiceCard 
              title="Private Limited Registration" 
              description="Complete compliance, DSC, DIN, and incorporation certificates in days." 
              onSelect={() => handleSendMessage('Get Started with Company Registration')}
            />
          </div>
        );
      } else if (lowerText.includes('gst')) {
         botResponse = (
          <div>
            <p className="mb-2">Looking for GST Registration? We can fast-track your application.</p>
            <ServiceCard 
              title="Express GST Registration" 
              description="Fast-track your GSTIN allocation with expert documentation support." 
              onSelect={() => handleSendMessage('Apply for GST')}
            />
          </div>
        );
      } else if (lowerText.includes('expert') || lowerText.includes('talk') || lowerText.includes('human') || lowerText.includes('call')) {
         botResponse = (
          <div>
            <p className="mb-2">I will connect you with our compliance experts right away.</p>
            <ConnectExpertCard />
          </div>
         );
      } else if (lowerText.includes('hi') || lowerText.includes('hello')) {
        botResponse = "Hello! How can I assist you with your business compliance and registration needs today?";
      } else if (lowerText.includes('callback') || lowerText.includes('phone') || lowerText.includes('contact')) {
        botResponse = (
          <div>
            <p className="mb-2">Sure, please provide your number and we will call you back.</p>
            <LeadCaptureCard onSubmit={() => {
              setMessages(prev => [...prev, {
                id: Date.now().toString() + '3',
                role: 'bot',
                content: 'Thank you! Our expert will call you within 15 minutes.',
                timestamp: new Date()
              }]);
            }} />
          </div>
        );
      }

      const newBotMsg: MessageProps = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const openChat = () => {
    setActiveView('active_chat');
    setActiveTab('messages');
  };

  const closeChat = () => {
    setActiveView('tab_view');
  };

  const hasConversations = messages.length > 0;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-primary-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 z-50 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100 animate-pulse-slow'}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <div 
        ref={widgetRef}
        className={`fixed bottom-0 right-0 w-full h-full sm:bottom-6 sm:right-6 sm:w-[380px] md:w-[400px] sm:h-[580px] sm:max-h-[85vh] bg-white rounded-none sm:rounded-2xl shadow-2xl flex flex-col z-[100] transition-all duration-300 ease-in-out transform origin-bottom-right border border-gray-200 overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        {activeView === 'tab_view' && (
          <div className="flex-1 flex flex-col min-h-0 bg-slate-50 relative">
            {activeTab === 'home' ? (
              <ChatHomeScreen onStartChat={openChat} onClose={() => setIsOpen(false)} />
            ) : (
              <ConversationListScreen hasConversations={hasConversations} onStartChat={openChat} onClose={() => setIsOpen(false)} />
            )}
            <BottomTabNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        )}

        {activeView === 'active_chat' && (
          <div className="flex-1 flex flex-col min-h-0 relative bg-white">
             <ActiveChatScreen 
                messages={messages} 
                isTyping={isTyping} 
                onSendMessage={handleSendMessage}
                onBack={closeChat}
                onClose={() => setIsOpen(false)}
             />
          </div>
        )}
      </div>
    </>
  );
}
