import { Heart } from 'lucide-react';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-secondary/50 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
      
      <div className="container max-w-4xl mx-auto px-4 text-center">
        {/* Final message */}
        <div className="mb-12">
          <Heart className="w-10 h-10 text-rose-gold fill-rose-gold mx-auto mb-6 animate-heart-beat" />
          
          {/* CHANGED: font-script to font-serif, with deep romantic quote style */}
          <p className="font-serif italic text-3xl md:text-4xl text-gradient-gold mb-4">
            "እወድሻለሁ የኔ አለም"
          </p>
          
          {/* CHANGED: font-elegant to font-serif, updated text to match birthday theme seamlessly */}
          <p className="font-serif text-lg md:text-xl text-foreground/85 max-w-lg mx-auto leading-relaxed antialiased">
            Today, tomorrow, and every day after. You are my forever, my always, 
            and everything in between. Happy Birthday, Kalkidane.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-border/40" />
          <Heart className="w-4 h-4 text-rose-gold/50 fill-rose-gold/20" />
          <div className="w-16 h-px bg-border/40" />
        </div>

        {/* Footer note */}
        {/* CHANGED: font-body to font-sans tracking-wide for structured metadata styling */}
        <p className="font-sans text-xs md:text-sm text-muted-foreground tracking-wider uppercase font-medium">
          Made with{' '}
          <Heart className="w-3 h-3 inline mx-0.5 text-rose-gold fill-rose-gold animate-pulse-soft" />{' '}
          ላንቺ ብቻ 🥰
        </p>
        
        <p className="font-sans text-[10px] md:text-xs text-muted-foreground/60 tracking-widest uppercase mt-3">
          © {currentYear} — Our Love Story
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;