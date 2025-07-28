import React, { useState } from 'react';
import { RotateCcw, TrendingDown, Calendar, Bot } from 'lucide-react';

interface ProblemSectionProps {
  isDarkMode: boolean;
}

interface ProblemCubeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
  isDarkMode: boolean;
  delay: number;
}

const ProblemCube: React.FC<ProblemCubeProps> = ({ icon, title, description, impact, isDarkMode, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative h-64 w-full transition-all duration-500 transform-gpu perspective-1000 hover:scale-105`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
        isHovered ? 'rotate-y-180' : ''
      }`}>
        {/* Front Face */}
        <div className={`absolute inset-0 w-full h-full rounded-2xl shadow-xl backface-hidden ${
          isDarkMode ? 'bg-gradient-to-br from-red-800 to-red-900' : 'bg-gradient-to-br from-red-500 to-red-600'
        }`}>
          <div className="flex flex-col items-center justify-center h-full p-6 text-white">
            <div className="mb-4 transform group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-center">{title}</h3>
          </div>
        </div>

        {/* Back Face */}
        <div className={`absolute inset-0 w-full h-full rounded-2xl shadow-xl backface-hidden rotate-y-180 ${
          isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-700 to-gray-800'
        }`}>
          <div className="flex flex-col justify-center h-full p-6 text-white">
            <p className="text-sm mb-3">{description}</p>
            <div className="text-lg font-bold text-red-400">{impact}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProblemSection: React.FC<ProblemSectionProps> = ({ isDarkMode }) => {
  const problems = [
    {
      icon: <RotateCcw className="w-12 h-12" />,
      title: "Reação Lenta",
      description: "Demora para ajustar preços frente à concorrência e demanda",
      impact: "Perda de vendas (-23% conversão)"
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Descontos Assassinos",
      description: "Promoções sem critério que destroem sua margem de lucro",
      impact: "Margem reduzida em 40%"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Sazonalidade Ignorada",
      description: "Não acompanha padrões sazonais de compra e demanda",
      impact: "Oportunidades perdidas"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Chatbots Genéricos",
      description: "Atendimento robotizado que não personaliza ofertas",
      impact: "Baixa conversão de leads"
    }
  ];

  return (
    <section className={`py-20 px-4 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Os 4 <span className="text-red-500">INIMIGOS</span> do preço ideal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Identifique os vilões que estão sugando o lucro da sua loja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <ProblemCube
              key={index}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              impact={problem.impact}
              isDarkMode={isDarkMode}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className={`inline-block p-6 rounded-2xl ${
            isDarkMode ? 'bg-red-900/30 border border-red-500' : 'bg-red-50 border border-red-200'
          }`}>
            <h3 className="text-2xl font-bold text-red-500 mb-2">
              Resultado: Sangria de Lucros
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Cada dia sem otimização é dinheiro jogado fora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};