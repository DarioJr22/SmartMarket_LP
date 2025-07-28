import React, { useState } from 'react';
import { Calculator, TrendingDown, DollarSign } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface SituationSectionProps {
  isDarkMode: boolean;
}

export const SituationSection: React.FC<SituationSectionProps> = ({ isDarkMode }) => {
  const [revenue, setRevenue] = useState('');
  const [showLoss, setShowLoss] = useState(false);

  const calculateLoss = () => {
    const revenueValue = parseFloat(revenue.replace(/\D/g, ''));
    if (revenueValue > 0) {
      setShowLoss(true);
    }
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const estimatedLoss = revenue ? Math.floor(parseFloat(revenue.replace(/\D/g, '')) * 0.15) : 0;

  return (
    <section className={`pt-32 pb-20 px-4 ${
      isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Como você define{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
              preços
            </span>{' '}
            <span className="text-red-500">HOJE</span>?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Descubra quanto sua loja está perdendo com precificação inadequada
          </p>
        </div>

        <div className={`max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <Calculator className="w-8 h-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold">Calculadora de Perdas</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold mb-3">
                Faturamento anual da sua loja:
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold text-green-600">
                  R$
                </span>
                <input
                  type="text"
                  value={revenue}
                  onChange={(e) => setRevenue(formatCurrency(e.target.value))}
                  placeholder="500.000"
                  className={`w-full pl-12 pr-4 py-4 text-xl font-bold rounded-lg border-2 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                />
              </div>
            </div>

            <button
              onClick={calculateLoss}
              disabled={!revenue}
              className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-bold rounded-lg hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center justify-center">
                <TrendingDown className="w-6 h-6 mr-2" />
                CALCULAR PERDA
              </div>
            </button>

            {showLoss && estimatedLoss > 0 && (
              <div className={`p-6 rounded-lg border-2 border-red-500 ${
                isDarkMode ? 'bg-red-900/20' : 'bg-red-50'
              } animate-pulse`}>
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <p className="text-lg mb-2">Estima-se uma perda de:</p>
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    R$ <AnimatedCounter value={estimatedLoss} />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    perdidos em 2025 com precificação inadequada
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className={`inline-flex items-center px-6 py-3 rounded-full ${
            isDarkMode ? 'bg-gray-800' : 'bg-yellow-100'
          } border border-yellow-500`}>
            <span className="text-yellow-600 font-semibold">
              📊 86% dos e-commerces perdem +15% de margem (McKinsey, 2024)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};