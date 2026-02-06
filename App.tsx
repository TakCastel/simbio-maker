import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Download, LayoutTemplate, Heart, Code } from 'lucide-react';
import SimsCard from './components/SimsCard';
import Editor from './components/Editor';
import { INITIAL_PROFILE } from './constants';
import { SimProfile } from './types';

function App() {
  const [profile, setProfile] = useState<SimProfile>(INITIAL_PROFILE);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsDownloading(true);
    
    try {
      // Small delay to ensure render
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(cardRef.current, {
        scale: 2, // Higher resolution
        useCORS: true, // For images
        backgroundColor: null,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${profile.firstName}_${profile.lastName}_Legacy.png`;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
      alert("Could not download image. Try using a local image for the avatar.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-8 px-4 relative">
      
      {/* Header */}
      <header className="mb-8 w-full max-w-[1400px] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-extrabold text-slate-800 flex items-center gap-3 mb-1 font-['Josefin_Sans']">
            <div className="bg-green-400 text-white p-2 rounded-lg">
                <LayoutTemplate size={32} />
            </div>
            Sims Legacy Maker
            </h1>
            <p className="text-slate-500 text-sm">Design your Sim's social media legacy card</p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-8 items-start justify-center flex-grow">
        
        {/* Editor Column */}
        <div className="w-full lg:w-1/3 order-2 lg:order-1 sticky top-8 z-20">
          <Editor profile={profile} setProfile={setProfile} />
        </div>

        {/* Preview Column */}
        <div className="w-full lg:w-2/3 order-1 lg:order-2 flex flex-col items-center">
          <div className="relative mb-6 group">
             {/* Desktop visual wrapper to mimic card on a table */}
            <div className="border-[12px] border-white shadow-2xl rounded-sm overflow-hidden">
                <SimsCard ref={cardRef} profile={profile} />
            </div>
            
            {/* Download Overlay on Hover (Desktop) / Always visible button below */}
            <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-6 flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Download size={20} />
                {isDownloading ? 'Generating Image...' : 'Download Card'}
            </button>
          </div>
        </div>

      </div>

      {/* Credits Footer */}
      <footer className="w-full max-w-[1400px] mt-12 py-6 border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500 font-medium">
         <div className="flex items-center gap-2">
            <Heart size={16} className="text-pink-400" />
            <span>Idea by <a href="https://www.reddit.com/user/AriaSims24/" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-green-600 underline decoration-green-200 underline-offset-2">u/AriaSims24</a></span>
         </div>
         <span className="hidden md:block text-slate-300 mx-2">|</span>
         <div className="flex items-center gap-2">
            <Code size={16} className="text-blue-400" />
            <span>Dev by <a href="https://studio-castel.com" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-green-600 underline decoration-green-200 underline-offset-2">Studio Castel</a></span>
         </div>
      </footer>
    </div>
  );
}

export default App;