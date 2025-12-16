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
    src: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop',
    caption: 'Our first sunset together',
    date: 'That magical evening',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop',
    caption: 'Dancing under the stars',
    date: 'A night to remember',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
    caption: 'Adventures with you',
    date: 'Every day is an adventure',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
    caption: 'Your beautiful smile',
    date: 'My favorite view',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=600&h=400&fit=crop',
    caption: 'Coffee dates with you',
    date: 'Simple joys',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop',
    caption: 'Hand in hand, always',
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
            <X className="w-8 h-8" />
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
