import React from 'react';
import { Header } from './components/Header';
import { SituationSection } from './components/SituationSection';
import { ProblemSection } from './components/ProblemSection';
import { ImplicationsSection } from './components/ImplicationsSection';
import { SolutionIntroSection } from './components/SolutionIntroSection';
import { NeedPayoffSection } from './components/NeedPayoffSection';
import { CTASection } from './components/CTASection';
import { SocialProofSection } from './components/SocialProofSection';
import { FloatingChat } from './components/FloatingChat';
import { ProgressBar } from './components/ProgressBar';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const scrollProgress = useScrollProgress();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ProgressBar progress={scrollProgress} />
      
      <main className="relative">
        <SituationSection isDarkMode={isDarkMode} />
        <ProblemSection isDarkMode={isDarkMode} />
        <ImplicationsSection isDarkMode={isDarkMode} />
        <SolutionIntroSection isDarkMode={isDarkMode} />
        <NeedPayoffSection isDarkMode={isDarkMode} />
        <CTASection isDarkMode={isDarkMode} />
        <SocialProofSection isDarkMode={isDarkMode} />
      </main>
      
      <FloatingChat isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;