import { useState } from 'react';
import { Camera, Heart, X } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  caption: string;
  date: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/1.jpg',
    caption: 'Our first sunset together-አብረን እንደምንሆን እንኳን አናውቅም ነበር',
    date: 'That magical evening',
  },
  {
    id: 2,
    src: '/images/2.jpg',
    caption: 'ስታቅፊኝ ያለሽ ፍቅር-You stole my heart',
    date: 'A day to remember',
  },
  {
    id: 3,
    src: '/images/3.jpg',
    caption: 'smiling with you',
    date: 'Every day is an adventure',
  },
  {
    id: 4,
    src: '/images/4.jpg',
    caption: 'Your beautiful smile',
    date: 'My favorite view',
  },
  {
    id: 5,
    src: '/images/5.jpg',
    caption: 'First ጉዞ with you',
    date: 'Simple joys',
  },
  {
    id: 6,
    src: '/images/11.jpg',
    caption: 'The way i see you',
    date: 'Together forever',
  },
    {
    id: 7,
    src: '/images/7.jpg',
    caption: 'This Day, This Moment',
    date: 'Together forever',
  },
    {
    id: 8,
    src: '/images/8.jpg',
    caption: 'Hand in hand, always',
    date: 'Together forever',
  },
    {
    id: 9,
    src: '/images/9.jpg',
    caption: 'Hand in hand, always',
    date: 'Together forever',
  },
    {
    id: 10,
    src: '/images/10.jpg',
    caption: 'I always think of you , always',
    date: 'Together forever',
  },
];

const PhotoGallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Camera className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
            Our Memories
          </h2>
          <p className="font-elegant text-xl text-muted-foreground max-w-xl mx-auto">
            Every picture tells a story of us — of love, laughter, and beautiful moments
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-romantic cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-glow"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine/90 via-wine/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="font-elegant text-lg mb-1">{photo.caption}</p>
                  <p className="font-body text-sm opacity-80">{photo.date}</p>
                  <Heart className="w-4 h-4 mt-2 text-rose-gold-light" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-wine/95 p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-rose-gold transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 text-primary-foreground">
              <p className="font-elegant text-2xl mb-2">{selectedPhoto.caption}</p>
              <p className="font-body text-muted-foreground">{selectedPhoto.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallerySection;
