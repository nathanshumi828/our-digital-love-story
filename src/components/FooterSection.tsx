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
          <p className="font-script text-4xl md:text-5xl text-gradient-gold mb-4">
            I Love You
          </p>
          <p className="font-elegant text-xl text-foreground/80 max-w-lg mx-auto leading-relaxed">
            Today, tomorrow, and every day after. You are my forever, my always, 
            and everything in between.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-border" />
          <Heart className="w-4 h-4 text-rose-gold/50" />
          <div className="w-16 h-px bg-border" />
        </div>

        {/* Footer note */}
        <p className="font-body text-sm text-muted-foreground">
          Made with{' '}
          <Heart className="w-3 h-3 inline text-rose-gold fill-rose-gold" />{' '}
          ላንቺ
        </p>
        <p className="font-body text-xs text-muted-foreground/60 mt-2">
          © {currentYear} — Our Love Story
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
