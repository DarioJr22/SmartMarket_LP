import React from 'react';
import { Moon, Sun, Bot } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
      isDarkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'
    } border-b`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
            SmartMarket
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#solucao" className="hover:text-purple-600 transition-colors">Solução</a>
            <a href="#casos" className="hover:text-purple-600 transition-colors">Casos de Sucesso</a>
            <a href="#demo" className="hover:text-purple-600 transition-colors">Demo</a>
          </nav>
          
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button className="bg-gradient-to-r from-purple-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
            Teste Grátis
          </button>
        </div>
      </div>
    </header>
  );
};