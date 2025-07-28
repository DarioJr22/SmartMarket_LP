import React, { useState } from 'react';
import { Bot, Brain, Zap, TrendingUp, ArrowRight, Shield, Clock, BarChart3 } from 'lucide-react';

interface NeedPayoffSectionProps {
  isDarkMode: boolean;
}

export const NeedPayoffSection: React.FC<NeedPayoffSectionProps> = ({ isDarkMode }) => {
  return (
    <section className={`py-20 px-4 ${
      isDarkMode ? 'bg-gradient-to-br from-purple-900/20 to-green-900/20' : 'bg-gradient-to-br from-purple-50 to-green-50'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-600" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Conheça o <span className="text-purple-600">SmartMarket</span>{' '}
            <span className="text-green-600">aumenta lucros</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Seu consultor de precificação que trabalha 24/7 enquanto você dorme
          </p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-gray-800 border border-purple-500' : 'bg-white border border-purple-200'
          } shadow-xl hover:scale-105 transition-transform duration-300`}>
            <Clock className="w-12 h-12 text-purple-500 mb-4" />
            <h4 className="text-xl font-bold mb-3">Monitoramento 24/7</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Acompanha preços da concorrência e tendências de mercado em tempo real, 
              sem você precisar se preocupar.
            </p>
          </div>

          <div className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-gray-800 border border-green-500' : 'bg-white border border-green-200'
          } shadow-xl hover:scale-105 transition-transform duration-300`}>
            <BarChart3 className="w-12 h-12 text-green-500 mb-4" />
            <h4 className="text-xl font-bold mb-3">Otimização Inteligente</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Ajusta automaticamente seus preços baseado em demanda, sazonalidade 
              e comportamento do consumidor.
            </p>
          </div>

          <div className={`p-8 rounded-2xl ${
            isDarkMode ? 'bg-gray-800 border border-blue-500' : 'bg-white border border-blue-200'
          } shadow-xl hover:scale-105 transition-transform duration-300`}>
            <Shield className="w-12 h-12 text-blue-500 mb-4" />
            <h4 className="text-xl font-bold mb-3">Proteção de Margem</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Garante que você nunca venda abaixo do lucro desejado, 
              protegendo sua rentabilidade.
            </p>
          </div>
        </div>

        {/* Mystery Box - What's Inside */}
        <div className={`max-w-4xl mx-auto p-8 rounded-2xl ${
          isDarkMode ? 'bg-gradient-to-r from-purple-900/50 to-green-900/50 border border-gray-700' : 'bg-gradient-to-r from-purple-100 to-green-100 border border-gray-200'
        } text-center`}>
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-green-600 mb-4">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Como o SmartMarket funciona?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Descubra a tecnologia por trás dos resultados extraordinários
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-bold mb-1">Análise Profunda</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Coleta e processa milhares de dados do mercado</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-bold mb-1">IA Avançada</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Algoritmos proprietários calculam o preço ideal</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-bold mb-1">Execução Automática</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Implementa mudanças sem intervenção manual</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg border border-yellow-300 dark:border-yellow-600">
            <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
              🔒 Quer ver exatamente como funciona? Solicite uma demonstração personalizada!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};