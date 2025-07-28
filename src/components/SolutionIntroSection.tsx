import React from 'react';
import { Lightbulb, Zap, Target, TrendingUp } from 'lucide-react';

interface SolutionIntroSectionProps {
  isDarkMode: boolean;
}

export const SolutionIntroSection: React.FC<SolutionIntroSectionProps> = ({ isDarkMode }) => {
  return (
    <section className={`py-20 px-4 ${
      isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            A <span className="text-blue-600">SOLUÇÃO</span> que você precisa
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Imagine ter um especialista em precificação trabalhando 24 horas por dia, 
            analisando milhares de dados e otimizando seus preços automaticamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`p-8 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-800 border border-blue-500' : 'bg-white border border-blue-200'
          } shadow-xl hover:scale-105 transition-transform duration-300`}>
            <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Inteligência Artificial</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Algoritmos avançados que aprendem com o comportamento do seu mercado
            </p>
          </div>

          <div className={`p-8 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-800 border border-purple-500' : 'bg-white border border-purple-200'
          } shadow-xl hover:scale-105 transition-transform duration-300`}>
            <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Precisão Cirúrgica</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Cada preço calculado para maximizar lucro e competitividade
            </p>
          </div>

          <div className={`p-8 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-800 border border-green-500' : 'bg-white border border-green-200'
          } shadow-xl hover:scale-105 transition-transform duration-300`}>
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Resultados Imediatos</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Aumento de margem visível já nas primeiras semanas
            </p>
          </div>
        </div>

        <div className={`p-8 rounded-2xl ${
          isDarkMode ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-gray-700' : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-gray-200'
        } text-center`}>
          <h3 className="text-3xl font-bold mb-4">
            Não é apenas um software...
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            É o seu <span className="font-bold text-blue-600">parceiro estratégico</span> que 
            transforma dados em <span className="font-bold text-green-600">lucro real</span>
          </p>
        </div>
      </div>
    </section>
  );
};