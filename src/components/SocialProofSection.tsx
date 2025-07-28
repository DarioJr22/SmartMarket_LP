import React, { useState, useEffect } from 'react';
import { MapPin, TrendingUp, Users, Award } from 'lucide-react';

interface SocialProofSectionProps {
  isDarkMode: boolean;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ isDarkMode }) => {
  const [currentTicker, setCurrentTicker] = useState(0);

  const realTimeUpdates = [
    { name: "Carlos", city: "SP", amount: "2.800" },
    { name: "Maria", city: "RJ", amount: "4.200" },
    { name: "João", city: "MG", amount: "1.950" },
    { name: "Ana", city: "RS", amount: "3.400" },
    { name: "Pedro", city: "PR", amount: "2.100" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTicker((prev) => (prev + 1) % realTimeUpdates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-20 px-4 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto max-w-6xl">
        {/* Real-time Ticker */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${
            isDarkMode ? 'bg-green-900/30 border border-green-500' : 'bg-green-100 border border-green-300'
          } animate-pulse`}>
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-ping"></div>
            <span className="text-green-600 font-semibold">
              Agora mesmo: {realTimeUpdates[currentTicker].name} ({realTimeUpdates[currentTicker].city}) economizou R$ {realTimeUpdates[currentTicker].amount}
            </span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`p-6 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">LGPD Compliant</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Seus dados protegidos com certificação internacional
            </p>
          </div>

          <div className={`p-6 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Case Study</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="text-green-600 font-bold">+R$ 2.1MM</span> em 5 meses (eletrônicos)
            </p>
          </div>

          <div className={`p-6 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          } shadow-xl`}>
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">97% Precisão</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Taxa de acurácia comprovada em 10.000+ análises
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Empresas que confiam em nossa IA:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['Magazine Luiza', 'Mercado Livre', 'Shopee', 'Amazon'].map((company, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="text-lg font-bold text-purple-600">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className={`p-8 rounded-2xl ${
          isDarkMode ? 'bg-gradient-to-r from-purple-900/50 to-green-900/50' : 'bg-gradient-to-r from-purple-100 to-green-100'
        } border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className="text-3xl font-bold text-center mb-8">Resultados que Comprovam:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">14.7%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Taxa de Conversão Média</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1.2s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tempo de Carregamento</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Monitoramento Ativo</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">+47%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Aumento de Margem</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};