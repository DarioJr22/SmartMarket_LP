import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  isDarkMode: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ isDarkMode }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-8">
        Antes vs Depois da IA
      </h3>
      
      <div 
        className="relative w-full h-96 overflow-hidden rounded-2xl cursor-crosshair shadow-2xl"
        onMouseMove={handleSliderMove}
      >
        {/* Before Image - Chaotic Spreadsheet */}
        <div className="absolute inset-0">
          <div className={`w-full h-full flex items-center justify-center ${
            isDarkMode ? 'bg-red-900' : 'bg-red-100'
          }`}>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📊❌</div>
              <h4 className="text-2xl font-bold text-red-600 mb-4">ANTES: Caos Total</h4>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`h-8 rounded ${
                    isDarkMode ? 'bg-red-800' : 'bg-red-200'
                  } animate-pulse`} />
                ))}
              </div>
              <ul className="text-left text-red-600 space-y-1">
                <li>• Planilhas desorganizadas</li>
                <li>• Preços desatualizados</li>
                <li>• Decisões no "achismo"</li>
                <li>• Concorrência sempre na frente</li>
              </ul>
            </div>
          </div>
        </div>

        {/* After Image - AI Dashboard */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className={`w-full h-full flex items-center justify-center ${
            isDarkMode ? 'bg-green-900' : 'bg-green-100'
          }`}>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🤖✅</div>
              <h4 className="text-2xl font-bold text-green-600 mb-4">DEPOIS: IA Inteligente</h4>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={`h-8 rounded ${
                    isDarkMode ? 'bg-green-800' : 'bg-green-200'
                  } animate-pulse`} style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <ul className="text-left text-green-600 space-y-1">
                <li>• Dashboard inteligente</li>
                <li>• Preços sempre otimizados</li>
                <li>• Decisões baseadas em dados</li>
                <li>• 23% mais conversão</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-gray-600 absolute left-1" />
            <ChevronRight className="w-4 h-4 text-gray-600 absolute right-1" />
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600 dark:text-gray-400">
          Arraste para comparar • Transformação em tempo real
        </p>
      </div>
    </div>
  );
};