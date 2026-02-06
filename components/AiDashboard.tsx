import React, { useState } from 'react';
import { X, Sparkles, Wand2, Lightbulb, ChevronRight } from 'lucide-react';
import { generateSimProfile } from '../services/geminiService';
import { SimProfile } from '../types';

interface AiDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  profile: SimProfile;
  setProfile: React.Dispatch<React.SetStateAction<SimProfile>>;
}

const AiDashboard: React.FC<AiDashboardProps> = ({ isOpen, onClose, profile, setProfile }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (inputPrompt: string = prompt) => {
    if (!inputPrompt) return;
    setIsLoading(true);
    try {
        const newProfile = await generateSimProfile(inputPrompt, profile);
        setProfile(newProfile);
    } catch (error) {
        console.error(error);
        alert('Error generating profile. Please try again.');
    } finally {
        setIsLoading(false);
    }
  };

  const suggestions = [
      { title: "The Villain", prompt: "A chaotic evil scientist who hates children and loves mischief." },
      { title: "Cottage Core", prompt: "A cozy gardener who loves baking, nature, and animals." },
      { title: "Tech Bro", prompt: "A genius startup founder who loves video games and energy drinks." },
      { title: "Romantic Poet", prompt: "A gloomy writer looking for their soulmate in the big city." },
      { title: "Party Animal", prompt: "An outgoing DJ who loves dancing and hates being alone." }
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="text-yellow-300" />
              AI Persona Maker
            </h2>
            <p className="text-purple-100 text-sm mt-1">Describe your Sim, get a full profile.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          
          {/* Text Input Section */}
          <div className="space-y-3">
            <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
              Custom Description
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A clumsy astronaut who loves painting and has a large family..."
                className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none bg-slate-50 text-slate-800 placeholder:text-slate-400"
              />
              <button
                onClick={() => handleGenerate()}
                disabled={isLoading || !prompt.trim()}
                className="absolute bottom-3 right-3 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
                title="Generate"
              >
                {isLoading ? <Wand2 className="animate-spin" size={20} /> : <Wand2 size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 text-right">
              Powered by Gemini AI
            </p>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* Quick Start Presets */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
              <Lightbulb size={16} className="text-yellow-500" />
              Quick Archetypes
            </h3>
            <div className="grid gap-3">
              {suggestions.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(item.prompt);
                    handleGenerate(item.prompt);
                  }}
                  disabled={isLoading}
                  className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all group text-left bg-white shadow-sm hover:shadow-md"
                >
                  <div>
                    <span className="font-bold text-gray-800 block group-hover:text-purple-700">{item.title}</span>
                    <span className="text-xs text-gray-500 line-clamp-1">{item.prompt}</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-purple-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Tips */}
           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
             <h4 className="text-blue-800 font-bold text-sm mb-1">How it works</h4>
             <p className="text-blue-600 text-xs leading-relaxed">
               The AI will interpret your description to select matching Traits, Skills, Aspirations, and Career. It tries to create a balanced personality based on Sims 4 logic.
             </p>
           </div>
        </div>
      </div>
    </>
  );
};

export default AiDashboard;
