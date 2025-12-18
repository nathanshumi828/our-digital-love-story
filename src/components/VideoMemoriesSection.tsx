import { Film, Play } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string; // Changed from embedUrl to videoUrl
 
}

const videos: Video[] = [
  {
    id: 1,
    title: 'ስቴዲየም ስንምሳሰጥ',
    description: 'A collection of our most precious moments together',
    videoUrl: '/videos/1.mp4', // Points to public/videos/1.mp4
  },
  {
    id: 2,
    title: 'ከ exam መልስ',
    description: 'Every journey is better with you by my side',
    videoUrl: '/videos/video_2025-12-16_22-16-17.mp4', // Points to public/videos/2.mp4
 },
  {
    id: 3,
    title: 'የፍቅር መግልጫ - may be laysera yichilal', 
    description: 'Our love story told through cherished videos',
    videoUrl: '/videos/video_2025-12-16_22-16-33.mp4', // Points to public/videos/3.mp4
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
              className="group relative bg-card rounded-xl overflow-hidden shadow-romantic transition-all duration-500 hover:shadow-glow border border-border/30"
            >
              {/* Native Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  src={video.videoUrl}
                 
                  controls
                  className="w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Video info */}
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-rose-gold/10 flex items-center justify-center">
                    <Play className="w-4 h-4 text-rose-gold fill-rose-gold" />
                  </div>
                  <h3 className="font-elegant text-xl text-foreground">{video.title}</h3>
                </div>
                <p className="font-body text-muted-foreground text-sm">{video.description}</p>
              </div>

              {/* Animated subtle border on hover */}
              <div className="absolute inset-0 border-2 border-rose-gold/0 group-hover:border-rose-gold/10 rounded-xl pointer-events-none transition-colors" />
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-elegant text-muted-foreground italic">
          Cherishing every frame of our journey
        </p>
      </div>
    </section>
  );
};

export default VideoMemoriesSection;