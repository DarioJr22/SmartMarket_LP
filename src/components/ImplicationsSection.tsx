import React, { useEffect, useState } from 'react';
import { AlertTriangle, TrendingDown, Calendar, DollarSign, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ImplicationsSectionProps {
  isDarkMode: boolean;
}

export const ImplicationsSection: React.FC<ImplicationsSectionProps> = ({ isDarkMode }) => {
  const [sectionRef, isInView] = useInView({ threshold: 0.3 });
  const [lossValue, setLossValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
      let startTime: number;
      const targetValue = 126000;
      const duration = 2000;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setLossValue(Math.floor(progress * targetValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-4 ${
        isDarkMode ? 'bg-gradient-to-b from-gray-900 to-red-900/20' : 'bg-gradient-to-b from-white to-red-50'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <AlertTriangle className={`w-16 h-16 mx-auto mb-6 ${
            isAnimating ? 'animate-bounce text-red-500' : 'text-gray-400'
          } transition-colors duration-500`} />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            O custo da <span className="text-red-500">INÉRCIA</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Veja o que acontece quando você não age rapidamente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Animation Side */}
          <div className="relative h-96 flex items-center justify-center">
            <div className={`relative w-64 h-64 rounded-full border-8 flex items-center justify-center ${
              isDarkMode ? 'border-red-600 bg-red-900/20' : 'border-red-500 bg-red-100'
            } ${isAnimating ? 'animate-pulse' : ''}`}>
              <div className="text-center">
                <Target className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-red-500">
                  R$ {lossValue.toLocaleString('pt-BR')}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  perdidos por mês
                </div>
              </div>
            </div>
          </div>

          {/* Data Side */}
          <div className="space-y-8">
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800 border border-red-500' : 'bg-white border border-red-200'
            } shadow-xl`}>
              <DollarSign className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-red-500">Perda Financeira Real</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Loja R$ 500k/mês:</span>
                  <span className="font-bold text-red-500">-R$ 75k/ano</span>
                </div>
                <div className="flex justify-between">
                  <span>Loja R$ 1M/mês:</span>
                  <span className="font-bold text-red-500">-R$ 150k/ano</span>
                </div>
                <div className="flex justify-between">
                  <span>Loja R$ 5M/mês:</span>
                  <span className="font-bold text-red-500">-R$ 750k/ano</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                *Dados baseados em pesquisa IBGE 2024
              </p>
            </div>

            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800 border border-orange-500' : 'bg-white border border-orange-200'
            } shadow-xl`}>
              <AlertTriangle className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Consequências Invisíveis</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Perda de market share para concorrentes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Deterioração da percepção de valor da marca
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Clientes que nunca mais voltam
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Oportunidades de cross-sell perdidas
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-2xl ${
            isDarkMode ? 'bg-red-900/40 border-2 border-red-500' : 'bg-red-100 border-2 border-red-300'
          }`}>
            <h3 className="text-3xl font-bold text-red-500 mb-4">
              Cada DIA que passa é dinheiro perdido
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A inércia é o maior inimigo do seu lucro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};