import React, { useState, useEffect } from 'react';
import { Send, Bell, Smartphone, CheckCheck, Wifi } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'contact';
  text: string;
  time: string;
}

export const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'm1', sender: 'contact', text: 'Namaste Arjun! Saw your TreeOrg and LMS projects. Incredible work!', time: '10:14 AM' },
    { id: 'm2', sender: 'user', text: 'Dhanyabad! Built the chat backend using Java sockets and push notification handlers.', time: '10:15 AM' },
    { id: 'm3', sender: 'contact', text: 'That background notification service is super smooth. Are you available for full-time roles?', time: '10:16 AM' },
  ]);
  const [inputText, setInputText] = useState('');
  const [notification, setNotification] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: `m-${Date.now()}`,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate reply and notification
    setTimeout(() => {
      setIsTyping(false);
      const replyMsg: ChatMessage = {
        id: `m-reply-${Date.now()}`,
        sender: 'contact',
        text: 'Awesome! I am dispatching an official email to arjunpsd2020@gmail.com right away.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, replyMsg]);
      setNotification('New message from Recruiter! Background notification triggered.');
    }, 2000);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="bg-[#0f172a] rounded-xl border border-slate-700/80 p-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400">
            <Smartphone size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-white flex items-center gap-2">
              Java Socket Chat Live Demo
              <span className="text-[10px] uppercase px-2 py-0.5 bg-purple-500/20 text-purple-300 font-mono rounded">Sockets + Background Services</span>
            </h4>
            <p className="text-xs text-slate-400">Real-time messaging & instant notification simulator</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700/60">
          <Wifi size={14} className="text-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-medium">Socket Connected</span>
        </div>
      </div>

      {/* Simulated Background Notification Toast */}
      {notification && (
        <div className="mb-4 bg-gradient-to-r from-purple-950 to-pink-950 border border-purple-500 rounded-xl p-3 shadow-2xl flex items-center gap-3 animate-bounce">
          <div className="p-2 bg-purple-500 text-white rounded-lg">
            <Bell size={18} className="animate-spin" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Java Background Service Alert</span>
              <span className="text-[10px] text-purple-300 font-mono">Just Now</span>
            </div>
            <p className="text-xs text-purple-200 mt-0.5">{notification}</p>
          </div>
        </div>
      )}

      {/* Phone Frame View */}
      <div className="max-w-md mx-auto bg-slate-950 rounded-[30px] border-[6px] border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[380px]">
        {/* Phone Header */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow">
              R
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                Tech Recruiter
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[10px] text-slate-400 font-mono">Online</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Bell size={14} className="hover:text-white cursor-pointer" onClick={() => setNotification('Simulated Manual Test Alert')} />
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:12px_12px]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-purple-600 text-white rounded-br-none shadow-md shadow-purple-900/20'
                    : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700/80 shadow-md'
                }`}
              >
                {msg.text}
              </div>
              <div className="flex items-center gap-1 mt-1 text-[9px] text-slate-500 font-mono px-1">
                <span>{msg.time}</span>
                {msg.sender === 'user' && <CheckCheck size={12} className="text-purple-400" />}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 bg-slate-800 text-slate-400 px-3 py-1.5 rounded-2xl rounded-bl-none w-max text-xs italic">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="ml-1 text-[10px]">Recruiter is typing...</span>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSend} className="bg-slate-900 p-2.5 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 disabled:text-slate-600 text-white p-2 rounded-full transition-colors flex items-center justify-center shadow"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
