import { Film, Play } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'Our Love Story',
    description: 'A collection of our most precious moments together',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Adventures Together',
    description: 'Every journey is better with you by my side',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1522512115668-c09775d6f424?w=800&h=450&fit=crop',
  },
];

const VideoMemoriesSection = () => {
  return (
    <section id="videos" className="py-24 md:py-32 bg-background relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
      
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Film className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
            Video Memories
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-xl mx-auto">
            Moving moments captured in time — our story in motion
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-romantic transition-all duration-500 hover:shadow-glow"
            >
              {/* Video container with cinematic aspect ratio */}
              <div className="relative aspect-video bg-wine/10">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video info */}
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center">
                    <Play className="w-4 h-4 text-rose-gold" />
                  </div>
                  <h3 className="font-elegant text-xl text-foreground">{video.title}</h3>
                </div>
                <p className="font-body text-muted-foreground">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add more videos hint */}
        <p className="text-center mt-12 font-elegant text-muted-foreground italic">
          Replace these with your own precious video memories
        </p>
      </div>
    </section>
  );
};

export default VideoMemoriesSection;
