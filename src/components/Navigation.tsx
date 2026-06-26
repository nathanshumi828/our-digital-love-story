import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#love-letter', label: 'Love Letter' },
  { href: '#gallery', label: 'Photos' },
  { href: '#poem', label: 'Poem' },
  { href: '#voice', label: 'Voice' },
  { href: '#music', label: 'Music' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-romantic py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <Heart className="w-5 h-5 text-rose-gold fill-rose-gold group-hover:animate-heart-beat transition-transform" />
            <span className="font-serif italic font-normal text-xl md:text-2xl text-gradient-gold tracking-wide">
              Happy BirthDay
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-sans text-xs uppercase tracking-[0.15em] font-medium text-foreground/70 hover:text-rose-gold transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-rose-gold to-rose-gold-light transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground/70 hover:text-rose-gold transition-colors rounded-full hover:bg-secondary/40"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-romantic border-t border-border/40 animate-fade-in">
            <div className="py-4 px-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3.5 px-5 font-sans text-xs uppercase tracking-widest font-medium text-foreground/80 hover:text-rose-gold hover:bg-secondary/50 rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;