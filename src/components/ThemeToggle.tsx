
import { useState, useEffect } from "react";
import { Moon, Sun, Heart } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isHeartbeating, setIsHeartbeating] = useState(false);

  useEffect(() => {
    // Initialize with dark theme
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsHeartbeating(true);
    
    setTimeout(() => {
      setIsDark(!isDark);
      if (isDark) {
        document.documentElement.classList.remove('dark');
        document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
      } else {
        document.documentElement.classList.add('dark');
        document.body.style.background = 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)';
      }
      
      setTimeout(() => setIsHeartbeating(false), 1000);
    }, 300);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className={`relative group p-4 rounded-full backdrop-blur-sm border transition-all duration-500 ${
          isDark 
            ? 'bg-white/10 border-pink-500/30 hover:border-pink-500/60' 
            : 'bg-black/10 border-purple-500/30 hover:border-purple-500/60'
        }`}
      >
        {/* Heartbeat Animation Container */}
        <div className={`absolute inset-0 rounded-full ${
          isHeartbeating ? 'animate-ping' : ''
        } ${
          isDark 
            ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20' 
            : 'bg-gradient-to-r from-purple-500/20 to-pink-600/20'
        }`}></div>
        
        {/* Heart Icon with Pulse */}
        <div className="relative">
          <Heart 
            className={`w-6 h-6 transition-all duration-300 ${
              isDark ? 'text-pink-400' : 'text-purple-600'
            } ${
              isHeartbeating ? 'animate-pulse scale-125' : 'group-hover:scale-110'
            }`}
            fill={isHeartbeating ? 'currentColor' : 'none'}
          />
        </div>

        {/* Theme Icons */}
        <div className="absolute -top-2 -right-2">
          <div className={`p-1 rounded-full backdrop-blur-sm border transition-all duration-300 ${
            isDark 
              ? 'bg-yellow-400/20 border-yellow-400/40' 
              : 'bg-slate-800/20 border-slate-800/40'
          }`}>
            {isDark ? (
              <Sun className="w-3 h-3 text-yellow-400" />
            ) : (
              <Moon className="w-3 h-3 text-slate-800" />
            )}
          </div>
        </div>

        {/* Tooltip */}
        <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDark 
            ? 'bg-white/10 text-pink-300 border border-pink-500/30' 
            : 'bg-black/10 text-purple-700 border border-purple-500/30'
        } backdrop-blur-sm whitespace-nowrap`}>
          {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </div>
      </button>
    </div>
  );
};
