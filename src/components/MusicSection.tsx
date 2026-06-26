import { Music, Heart, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  memory: string;
 spotifyUrl?: string; // Optional if you have local audio
  audioSrc?: string;   // Path to your local mp3
}

const songs: Song[] = [
   {
    id: 1,
    title: ' አሜን',
    artist: 'ነዋይ ደበበ',
    memory: " makes me think of the moment how you came in to my life.",
    audioSrc: '/audio/3.mp3', // Pointing to public/audio/2.mp3
  },
  {
    id: 2,
    title: 'የፍቅር እመቤት',
    artist: 'ነዋይ ደበበ',
    memory: 'The song that express my feelings for you.',
    audioSrc: '/audio/1.mp3', // Pointing to public/audio/1.mp3
  },

  {
    id: 3,
    title: ' ጠይም',
    artist: 'ሚካኤል በላይነህ',
    memory: 'ጋበዝኩሽ',
   audioSrc: '/audio/4.mp3', // Pointing to public/audio/4.mp3
    
  },
];

const MusicSection = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (e: React.MouseEvent, song: Song) => {
    // Prevent the <a> tag from opening the link when clicking play
    e.preventDefault();
    e.stopPropagation();

    if (!song.audioSrc) return;

    if (playingId === song.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(song.audioSrc);
      audioRef.current.play();
      setPlayingId(song.id);
      
      // Reset state when song ends
      audioRef.current.onended = () => setPlayingId(null);
    }
  };

  return (
    <section id="music" className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
      
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <Music className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">Our Soundtrack</h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-xl mx-auto">
            The songs that tell our story — each note a memory of us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((song) => (
            <a
              key={song.id}
              href={song.spotifyUrl || "#"}
              target={song.spotifyUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group relative bg-card rounded-xl overflow-hidden shadow-romantic transition-all duration-500 hover:shadow-glow border border-border/30"
            >
              <div className="flex items-center gap-4 p-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                 
                  
                  {/* Play Button Overlay for local audio */}
                  {song.audioSrc && (
                    <button 
                      onClick={(e) => togglePlay(e, song)}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                    >
                      {playingId === song.id ? (
                        <Pause className="w-8 h-8 text-white fill-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white fill-white" />
                      )}
                    </button>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-elegant text-lg text-foreground truncate">{song.title}</h3>
                    <Heart className="w-3 h-3 text-rose-gold fill-rose-gold" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-2">{song.artist}</p>
                  <p className="font-body text-xs text-rose-gold italic truncate">{song.memory}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;