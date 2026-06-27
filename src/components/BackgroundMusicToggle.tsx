import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusicToggle = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create a soft romantic background music (you can replace with actual URL)
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {
          // Autoplay blocked, user needs to interact
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card shadow-romantic border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow group"
        aria-label={isMuted ? 'Play background music' : 'Mute background music'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-rose-gold transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-rose-gold animate-pulse-soft" />
        )}
      </button>

      {/* Hidden audio element - replace src with your romantic background music */}
      <audio
        ref={audioRef}
        src="/audio/hbd2.mp3" // Add your background music URL here
        preload="auto"
      />

      {/* Tooltip hint */}
      {isMuted && (
        <div className="fixed bottom-20 right-6 z-50 bg-card px-3 py-2 rounded-lg shadow-romantic text-xs font-body text-muted-foreground animate-fade-in">
          Click for music
        </div>
      )}
    </>
  );
};

export default BackgroundMusicToggle;
