import React, { useState } from 'react';
import { Bot, Brain, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface NeedPayoffSectionProps {
  isDarkMode: boolean;
}

export const NeedPayoffSection: React.FC<NeedPayoffSectionProps> = ({ isDarkMode }) => {
  const [chatStep, setChatStep] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setChatStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-20 px-4 ${
      isDarkMode ? 'bg-gradient-to-br from-purple-900/20 to-green-900/20' : 'bg-gradient-to-br from-purple-50 to-green-50'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Seu consultor <span className="text-purple-600">24/7</span> que{' '}
            <span className="text-green-600">aumenta lucros</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Inteligência artificial que trabalha enquanto você dorme
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mb-16">
          <BeforeAfterSlider isDarkMode={isDarkMode} />
        </div>

        {/* Chatbot Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <Bot className="inline-block w-8 h-8 mr-3 text-purple-600" />
              Demo do Chatbot Inteligente
            </h3>
            
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            } shadow-xl`}>
              <div className="space-y-4 h-64 overflow-hidden">
                {/* Client Message */}
                <div className={`flex justify-start transition-all duration-500 ${
                  chatStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center mb-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        C
                      </div>
                      <span className="font-semibold">Cliente</span>
                    </div>
                    <p className="text-sm">Tenho 500 produtos e 3 concorrentes principais...</p>
                  </div>
                </div>

                {/* Typing Indicator */}
                {chatStep === 2 && (
                  <div className="flex justify-end">
                    <div className={`p-3 rounded-lg ${
                      isDarkMode ? 'bg-purple-900' : 'bg-purple-100'
                    }`}>
                      <div className="flex items-center">
                        <Bot className="w-5 h-5 text-purple-600 mr-2" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bot Response */}
                <div className={`flex justify-end transition-all duration-500 ${
                  chatStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    isDarkMode ? 'bg-purple-900 border border-purple-600' : 'bg-purple-100 border border-purple-300'
                  }`}>
                    <div className="flex items-center mb-1">
                      <Bot className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="font-semibold text-purple-600">PriceBot AI</span>
                    </div>
                    <p className="text-sm mb-2">
                      Análise completa realizada! 📊
                    </p>
                    <div className="bg-green-500 text-white p-2 rounded text-xs font-bold">
                      Economia estimada: R$ 8.300/mês ✅
                    </div>
                    <button className="w-full mt-2 bg-purple-600 text-white py-1 px-3 rounded text-xs hover:bg-purple-700 transition-colors">
                      Ver Relatório Completo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800 border border-green-500' : 'bg-white border border-green-200'
            } shadow-xl`}>
              <Zap className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-bold mb-3">Otimização Automática</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Monitora 24/7 preços dos concorrentes
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Ajusta automaticamente baseado na demanda
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                  Identifica oportunidades de cross-sell
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800 border border-purple-500' : 'bg-white border border-purple-200'
            } shadow-xl`}>
              <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold mb-3">Resultados Comprovados</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">+47%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Margem de Lucro</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">+23%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Conversão</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};