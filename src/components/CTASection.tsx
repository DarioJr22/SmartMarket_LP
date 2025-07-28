import React, { useState } from 'react';
import { Zap, Play, Shield, Check, Mail, User } from 'lucide-react';

interface CTASectionProps {
  isDarkMode: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    setIsValidEmail(validateEmail(email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && isValidEmail) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <section className={`py-20 px-4 ${
      isDarkMode ? 'bg-gradient-to-r from-purple-900 via-red-900 to-green-900' : 'bg-gradient-to-r from-purple-600 via-red-600 to-green-600'
    }`}>
      <div className="container mx-auto max-w-4xl text-center text-white">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Quanto <span className="text-yellow-300">SUA</span> loja está{' '}
            <span className="text-red-300">perdendo</span> AGORA?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Pare de perder dinheiro. Comece a lucrar mais hoje mesmo.
          </p>
        </div>

        {/* Triple Path Conversion */}
        <div className="space-y-6 mb-12">
          {/* Primary CTA */}
          <div className="relative">
            <button className="group relative bg-green-500 hover:bg-green-400 text-white font-bold py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none">
              <Zap className="inline-block w-8 h-8 mr-3" />
              QUERO DIAGNÓSTICO GRÁTIS
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity"></div>
            </button>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              <Play className="w-5 h-5 mr-2" />
              Assista demonstração (47s)
            </button>
            
            <div className="flex items-center space-x-4 text-sm opacity-80">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Sem cartão
              </div>
              <div>• 97% precisão</div>
              <div>• LGPD compliant</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className={`max-w-2xl mx-auto p-8 rounded-2xl backdrop-blur ${
          isDarkMode ? 'bg-gray-900/80' : 'bg-white/10'
        } border border-white/20`}>
          {showSuccess ? (
            <div className="text-center py-8">
              <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Diagnóstico Enviado!</h3>
              <p className="opacity-80">Você receberá o relatório em alguns minutos.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Nome completo"
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-4 focus:ring-green-500/50 focus:border-green-400 transition-all"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleEmailChange}
                    placeholder="Email corporativo"
                    className={`w-full pl-12 pr-12 py-4 bg-white/20 border rounded-lg text-white placeholder-white/60 focus:ring-4 transition-all ${
                      formData.email && isValidEmail 
                        ? 'border-green-400 focus:ring-green-500/50' 
                        : formData.email 
                        ? 'border-red-400 focus:ring-red-500/50' 
                        : 'border-white/30 focus:ring-green-500/50 focus:border-green-400'
                    }`}
                    required
                  />
                  {formData.email && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      {isValidEmail ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-red-400 rounded-full"></div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={!formData.name || !isValidEmail}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-4 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="inline-block w-6 h-6 mr-2" />
                RECEBER DIAGNÓSTICO GRATUITO
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-sm opacity-60">
          ✔️ Validação em tempo real • Sem spam • Resultado em 2 minutos
        </div>
      </div>
    </section>
  );
};