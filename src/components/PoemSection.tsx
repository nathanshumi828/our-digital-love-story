import { Feather, Heart } from 'lucide-react';

const PoemSection = () => {
  return (
    <section id="poem" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <Feather className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          <h2 className="font-serif tracking-wide font-normal text-4xl md:text-5xl text-gradient-gold mb-4">
            የልብ ስንኝ
          </h2>
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground max-w-xl mx-auto font-medium">
            A Poem Written For Your Day
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Poem Display Card Container */}
        <div className="relative max-w-2xl mx-auto bg-card/40 border border-border/30 backdrop-blur-sm p-8 md:p-14 rounded-2xl shadow-romantic hover:shadow-glow transition-all duration-700">
          
          {/* Subtle watermark background icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
            <Heart className="w-80 h-80 text-rose-gold" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Stanza 1 */}
            <div className="text-center space-y-4 md:space-y-5">
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed tracking-wide antialiased">
                ነፍሴን ፈሪ አርጓት የሰው መቅረብ ድኩም<br/>
ለዕውር ምንምነች ፀሀይ ወጣች ቢሉም<br/>
ለኔስ ምን ሊረባኝ ከተስፋሽ መዋሉ<br/>
እድሜ ቢገረጅፍ በመወደድ ዘመን ህፃን እያከሉ<br/>
ፍቃዴም ክልክሌም ከ'ሳት እንደመቅረብ<br/>
ካምላክ ፍርድ ማግስት መዳን እንደማሰብ<br/>
መጓዜም 'ሚያቀርበኝ እስከ ቃልሽ እክል<br/>
አንቺ ለኔ እንዲያ ነሽ የታጠረች ተክል።
              </p>
            </div>

            {/* The Transition Bridge Phrase */}
            <div className="my-8 md:my-10 flex flex-col items-center gap-2">
              <div className="w-8 h-px bg-rose-gold/30" />
              <p className="font-serif italic text-sm md:text-base text-rose-gold tracking-widest uppercase">
                ማለቱን ትቻለው <br />
                <span className="not-italic font-normal font-sans text-xs tracking-widest text-muted-foreground/60 block mt-1">አሁን እንዲ እላለው</span>
              </p>
              <div className="w-8 h-px bg-rose-gold/30" />
            </div>

            {/* Stanza 2 */}
            <div className="text-center space-y-4 md:space-y-5">
              <p className="font-serif font-medium text-xl md:text-2xl lg:text-3xl text-gradient-gold leading-relaxed tracking-wide antialiased">     
መጥኔ ለሞኛሞኝ ጎምዥቶ ለቀረ<br />
የኔ ብቶን ብሎ ማሰብ ለጀመረ።<br />
እኔስ አገኘሁሽ ለደስታ ሲሰራኝ<br />
አንቺ ላመለጥሺው ለህዝበ አዳም ይብላኝ።
              </p>
            </div>

          </div>
        </div>

        {/* Footer line below the poem card */}
        <div className="text-center mt-12 flex items-center justify-center gap-2 text-muted-foreground/80">
          <Heart className="w-4 h-4 text-rose-gold fill-rose-gold animate-pulse-soft" />
          <p className="font-serif italic text-base md:text-lg">
            መልካም ልደት ለኔዋ ተክል... 🕊️
          </p>
        </div>

      </div>
    </section>
  );
};

export default PoemSection;