import { useState, useRef } from 'react';
import { Mic, Play, Pause, Heart } from 'lucide-react';

interface VoiceMessage {
  id: number;
  title: string;
  description: string;
  duration: string;
  audioUrl: string;
}

const voiceMessages: VoiceMessage[] = [
  {
    id: 1,
    title: 'Good Morning, My Love',
    description: 'A sweet message to start your day',
    duration: '0:45',
    audioUrl: '', // Add your audio URL here
  },
  {
    id: 2,
    title: 'I Miss You',
    description: 'When distance keeps us apart',
    duration: '1:20',
    audioUrl: '',
  },
  {
    id: 3,
    title: 'Why I Love You',
    description: 'A thousand reasons, spoken from my heart',
    duration: '2:30',
    audioUrl: '',
  },
  {
    id: 4,
    title: 'Our Song',
    description: 'Me humming our favorite melody',
    duration: '0:55',
    audioUrl: '',
  },
];

const VoiceMessageCard = ({ message }: { message: VoiceMessage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="group relative bg-card rounded-xl p-6 shadow-romantic transition-all duration-500 hover:shadow-glow hover:scale-[1.02] border border-border/30">
      {/* Decorative heart */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-rose-gold fill-rose-gold" />
      </div>

      <div className="flex items-center gap-4">
        {/* Play button */}
        <button
          onClick={togglePlay}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-burgundy flex items-center justify-center shadow-glow transition-transform duration-300 hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          )}
          
          {/* Animated ring when playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-rose-gold animate-ping opacity-30" />
          )}
        </button>

        {/* Message info */}
        <div className="flex-1">
          <h3 className="font-elegant text-xl text-foreground mb-1">{message.title}</h3>
          <p className="font-body text-sm text-muted-foreground mb-2">{message.description}</p>
          
          {/* Waveform visualization (decorative) */}
          <div className="flex items-center gap-1 h-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-rose-gold/40 rounded-full transition-all duration-300 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: `${Math.random() * 100}%`,
                  animationDelay: `${i * 50}ms`,
                }}
              />
            ))}
            <span className="ml-2 text-xs text-muted-foreground font-body">{message.duration}</span>
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={message.audioUrl}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

const VoiceMessagesSection = () => {
  return (
    <section id="voice" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Mic className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
            Voice Messages
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-xl mx-auto">
            Words spoken from my heart — press play and listen to how much I love you
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Voice messages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {voiceMessages.map((message) => (
            <VoiceMessageCard key={message.id} message={message} />
          ))}
        </div>

        {/* Hint */}
        <p className="text-center mt-12 font-elegant text-muted-foreground italic">
          Add your own voice recordings to make this even more personal
        </p>
      </div>
    </section>
  );
};

export default VoiceMessagesSection;
