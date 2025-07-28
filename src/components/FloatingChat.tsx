import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface FloatingChatProps {
  isDarkMode: boolean;
}

export const FloatingChat: React.FC<FloatingChatProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [message, setMessage] = useState('');

  const demoConversations = [
    {
      user: "Quanto custa este fone de ouvido?",
      bot: "Hoje: R$ 129 ou 2x R$ 65! 😊",
      cta: "Ver oferta"
    },
    {
      user: "Têm desconto para compra em quantidade?",
      bot: "Sim! 3+ unidades: 15% OFF ✨",
      cta: "Calcular desconto"
    },
    {
      user: "Qual o melhor preço da categoria?",
      bot: "Este é 23% mais barato que a concorrência! 🎯",
      cta: "Comparar preços"
    }
  ];

  useEffect(() => {
    if (isOpen) {
      const timer = setInterval(() => {
        setCurrentDemo((prev) => (prev + 1) % demoConversations.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Simulate bot response
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-500 hover:to-green-500' 
              : 'bg-gradient-to-r from-purple-500 to-green-500 hover:from-purple-400 hover:to-green-400'
          }`}
        >
          <MessageCircle className="w-6 h-6 text-white" />
          
          {/* Pulsing notification */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          
          {/* Tooltip */}
          <div className={`absolute bottom-full right-0 mb-2 px-3 py-1 rounded-lg text-sm whitespace-nowrap transition-opacity ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'
          }`}>
            Teste nosso bot!
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`w-80 h-96 rounded-2xl shadow-2xl transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Header */}
          <div className={`flex justify-between items-center p-4 border-b ${
            isDarkMode ? 'border-gray-700 bg-purple-900' : 'border-gray-200 bg-purple-600'
          } rounded-t-2xl`}>
            <div className="flex items-center">
              <Bot className="w-6 h-6 text-white mr-2" />
              <div>
                <h3 className="font-semibold text-white">SmartMarket</h3>
                <p className="text-xs text-purple-200">Online agora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Demo Chat */}
          <div className="flex-1 p-4 h-64 overflow-y-auto">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="flex justify-start">
                <div className={`max-w-xs p-3 rounded-lg ${
                  isDarkMode ? 'bg-purple-900 text-white' : 'bg-purple-100 text-purple-800'
                }`}>
                  <p className="text-sm">Olá! Sou seu assistente de preços inteligente. Como posso ajudar?</p>
                </div>
              </div>

              {/* Demo Conversation */}
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className={`max-w-xs p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{demoConversations[currentDemo].user}</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className={`max-w-xs p-3 rounded-lg ${
                    isDarkMode ? 'bg-green-900 text-white' : 'bg-green-100 text-green-800'
                  }`}>
                    <p className="text-sm mb-2">{demoConversations[currentDemo].bot}</p>
                    <button className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600 transition-colors">
                      {demoConversations[currentDemo].cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className={`flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                type="submit"
                className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};