import { useState } from 'react';
import { Camera, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    caption: 'Every story has a beautiful chapter, but from this day on you are my entire book',
    date: 'That magical Day',
  },
  {
    id: 2,
    src: '/images/2.jpg',
    caption: 'You didnt just walk into my life you brought it to life',
    date: 'A day to remember',
  },
  {
    id: 3,
    src: '/images/3.jpg',
    caption: 'In a room full of art, I’d still stare at you.',
    date: 'Every day is an adventure',
  },
  {
    id: 4,
    src: '/images/4.jpg',
    caption: 'The most beautiful view in the entire world',
    date: 'My favorite view',
  },
  {
    id: 5,
    src: '/images/5.jpg',
    caption: 'The world is a messy place, but with you, everything makes perfect sense',
    date: 'Simple joys',
  },
  {
    id: 6,
    src: '/images/11.jpg',
    caption: 'Loving you is the easiest, most natural thing I have ever done',
    date: 'Together forever',
  },
  {
    id: 7,
    src: '/images/7.jpg',
    caption: 'I dont know what the future holds, but as long as you are in it, I know it is beautifu',
    date: 'Together forever',
  },
  {
    id: 8,
    src: '/images/8.jpg',
    caption: 'Forever and always, my favorite distraction',
    date: 'Together forever',
  },
  {
    id: 9,
    src: '/images/9.jpg',
    caption: 'Of all the places I’ve been, the safest place in the world is right here, with my hand in yours',
    date: 'Together forever',
  },
  {
    id: 10,
    src: '/images/10.jpg',
    caption: 'Our first hug across the miles. The first of many',
    date: 'Together forever',
  },
];

const PhotoGallerySection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Find the index of the currently active photo inside the lightbox
  const currentIndex = selectedPhoto ? photos.findIndex(p => p.id === selectedPhoto.id) : -1;

  // Handler to cycle to the previous photo
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents closing the modal
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
      setSelectedPhoto(photos[prevIndex]);
    }
  };

  // Handler to cycle to the next photo
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents closing the modal
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % photos.length;
      setSelectedPhoto(photos[nextIndex]);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Camera className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          
          <h2 className="font-serif tracking-wide font-normal text-4xl md:text-5xl text-gradient-gold mb-4">
            Our Memories
          </h2>
          
          <p className="font-serif italic text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
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
                  <p className="font-serif text-base md:text-lg leading-relaxed mb-1 antialiased">
                    {photo.caption}
                  </p>
                  <p className="font-sans text-xs tracking-wider uppercase opacity-80">{photo.date}</p>
                  <Heart className="w-4 h-4 mt-2 text-rose-gold-light fill-rose-gold-light" />
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
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-rose-gold transition-colors z-50 p-2"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation Arrows Container */}
          <div className="relative max-w-4xl w-full px-4 md:px-12" onClick={(e) => e.stopPropagation()}>
            
            {/* Back Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-[-10px] md:left-[-24px] top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full text-white transition-colors group z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Photo & Caption Display Card */}
            <div className="w-full flex flex-col justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                className="max-h-[65vh] mx-auto rounded-lg shadow-2xl object-contain transition-all duration-300 select-none"
              />
              <div className="text-center mt-6 text-primary-foreground">
                <p className="font-serif text-xl md:text-2xl leading-relaxed mb-2 antialiased">
                  {selectedPhoto.caption}
                </p>
                <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-muted-foreground">
                  {selectedPhoto.date}
                </p>
              </div>
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-[-10px] md:right-[-24px] top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full text-white transition-colors group z-50"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallerySection;