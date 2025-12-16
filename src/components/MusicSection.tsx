import { Music, Heart, ExternalLink } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  memory: string;
  spotifyUrl: string;
  coverArt: string;
}

const songs: Song[] = [
  {
    id: 1,
    title: 'Perfect',
    artist: 'Ed Sheeran',
    memory: 'The song that played during our first dance',
    spotifyUrl: 'https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v',
    coverArt: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'All of Me',
    artist: 'John Legend',
    memory: 'You hum this when you think I\'m not listening',
    spotifyUrl: 'https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a',
    coverArt: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Can\'t Help Falling in Love',
    artist: 'Elvis Presley',
    memory: 'Our song for quiet evenings together',
    spotifyUrl: 'https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC',
    coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    memory: 'Will you still love me when I\'m 70?',
    spotifyUrl: 'https://open.spotify.com/track/34gCuhDGsG4bRPIf9bb02f',
    coverArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
  },
];

const MusicSection = () => {
  return (
    <section id="music" className="py-24 md:py-32 bg-background relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
      
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Music className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
            Our Soundtrack
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-xl mx-auto">
            The songs that tell our story — each note a memory of us
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Songs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((song) => (
            <a
              key={song.id}
              href={song.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-xl overflow-hidden shadow-romantic transition-all duration-500 hover:shadow-glow hover:scale-[1.02] border border-border/30"
            >
              <div className="flex items-center gap-4 p-4">
                {/* Album art */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={song.coverArt}
                    alt={song.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-wine/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Song info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-elegant text-lg text-foreground truncate">{song.title}</h3>
                    <Heart className="w-3 h-3 text-rose-gold fill-rose-gold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-2">{song.artist}</p>
                  <p className="font-body text-xs text-rose-gold italic truncate">{song.memory}</p>
                </div>
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border-2 border-rose-gold/0 group-hover:border-rose-gold/30 rounded-xl transition-colors" />
            </a>
          ))}
        </div>

        {/* Spotify embed suggestion */}
        <div className="mt-12 p-6 bg-secondary/50 rounded-xl text-center">
          <p className="font-elegant text-muted-foreground mb-4">
            Or listen to our complete playlist
          </p>
          <div className="rounded-lg overflow-hidden max-w-md mx-auto shadow-romantic">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Ejj0EkURtP?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
