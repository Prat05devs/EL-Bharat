import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ExternalLink } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import dataset from '../../singel sourceoftruth.md?raw';

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function MagneticWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello! I am the EL Bharat AI Assistant. How can I help you with your global mobility, immigration, or corporate needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Store the chat instance
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the official AI assistant for EL Bharat. Use the following dataset as your ONLY source of truth. 
          
DATASET:
${dataset}

RULES:
1. Answer questions ONLY using the provided dataset.
2. Be professional, authoritative, and concise.
3. If a user asks a question that cannot be answered using this dataset, DO NOT guess or make up information. Instead, reply EXACTLY with the phrase: 'REDIRECT_TO_WHATSAPP'.`,
        },
      });
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      const text = response.text;
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'REDIRECT_TO_WHATSAPP' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-[#000033] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse" />
              <h3 className="text-white font-bold text-sm">EL Bharat Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => {
              const isRedirect = msg.text.includes('REDIRECT_TO_WHATSAPP');
              
              return (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#000033] text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}>
                    {isRedirect ? (
                      <div className="flex flex-col gap-3">
                        <p>I need to connect you with a human expert for that specific inquiry.</p>
                        <a 
                          href="https://wa.me/919876543210" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 px-4 rounded-lg font-bold hover:bg-[#20bd5a] transition-colors"
                        >
                          Chat on WhatsApp <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                    )}
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center gap-2"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about visas, jobs, tax..."
                className="flex-1 bg-slate-100 text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#000033] transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 rounded-xl bg-[#FF9933] text-white flex items-center justify-center hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#000033] rounded-full flex items-center justify-center text-white shadow-2xl magnetic-whatsapp hover:scale-110 transition-transform duration-300 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-[#FF9933] transition-colors" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-[#FF9933] transition-colors" />
        )}
      </button>
    </>
  );
}
