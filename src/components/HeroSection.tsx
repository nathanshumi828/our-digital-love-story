import { Heart, ChevronDown } from 'lucide-react';
import TwinklingStars from './TwinklingStars';

const HeroSection = () => {
  const scrollToLetter = () => {
    document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <TwinklingStars />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <Heart className="w-8 h-8 text-rose-gold fill-rose-gold" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-200 opacity-25">
        <Heart className="w-6 h-6 text-rose-gold fill-rose-gold" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-500 opacity-20">
        <Heart className="w-10 h-10 text-rose-gold fill-rose-gold" />
      </div>
      <div className="absolute bottom-32 right-32 animate-float delay-300 opacity-30">
        <Heart className="w-5 h-5 text-rose-gold fill-rose-gold" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main heading label */}
        <div className="mb-6 animate-fade-in-up">
          <span className="text-sm md:text-base font-sans font-medium text-muted-foreground tracking-[0.2em] uppercase">
            To My Favorite Person
          </span>
        </div>

        {/* UPDATED TEXT & STYLING: Premium, elegant title dedicated to her birthday */}
        <h1 className="font-serif tracking-tight font-normal text-5xl md:text-7xl lg:text-8xl text-gradient-gold mb-8 animate-fade-in-up delay-200 leading-tight">
          Happy Birthday, <br />
          <span className="italic font-light">Kalkidane</span>
        </h1>

        {/* Animated heart */}
        <div className="flex justify-center mb-8 animate-fade-in delay-500">
          <Heart className="w-12 h-12 text-rose-gold fill-rose-gold animate-heart-beat" />
        </div>

        {/* UPDATED TEXT: A deeply intimate, poetic quote that sets up the gift context */}
        <p className="font-serif italic text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-300 leading-relaxed antialiased">
          "Of all the days in the year, this one is my favorite—because it’s the day the world became more beautiful. This is my digital token for you, a place where our story lives forever."
        </p>

        {/* Scroll indicator */}
        <button
          onClick={scrollToLetter}
          className="animate-fade-in delay-700 group"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-medium">Read My Heart</span>
            <ChevronDown className="w-6 h-6 animate-float-slow" />
          </div>
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;