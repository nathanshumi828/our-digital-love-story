import { Heart, Feather } from 'lucide-react';

const LoveLetterSection = () => {
  return (
    <section id="love-letter" className="py-24 md:py-32 bg-background relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent" />
      
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Feather className="w-8 h-8 text-rose-gold mx-auto mb-4 animate-float-slow" />
          {/* Using a rich, romantic serif font setup for Kalkidane */}
          <h2 className="font-serif tracking-wide text-5xl md:text-6xl text-gradient-gold mb-4 font-medium">
            kalkidane
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto" />
        </div>

        {/* Letter content */}
        <div className="relative bg-card rounded-lg shadow-romantic p-8 md:p-12 border border-border/50">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-rose-gold/30 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-rose-gold/30 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-rose-gold/30 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-rose-gold/30 rounded-br-lg" />

          {/* Using a highly readable font-sans stack ideal for clean Amharic and modern text layout */}
          <div className="font-sans text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6 tracking-normal">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-rose-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold">
              አንቺ በህይወቴ ውስጥ በመኖርሽ እና ይቺ ቀን የተወለድሽባት ቀን ስለሆነች ዛሬ ያለ ምንም ጥርጥር በዓመቱ ውስጥ የእኔ ተወዳጅ ቀን ነናት። ከአንቺ በፊት ህይወቴ ምን ይመስል እንደነበር እና ዛሬ የት እንዳለሁ መለስ ብዬ ስመለከት፣ በአንቺ መኖር እጅግ በጣም አመስጋኝ ነኝ። መክኒያቱም ኮስተር ያለውን የወንድነት ዓለሜን በሴትነት ጥበብሽ አለዝበሽ ወደልጅነት ሰላሜ ምመለሰው ባንቺ ፍቅር በኩል ነው.....kalkidane🥰  አንቺ በዙሪያሽ ያለውን ነገር ሁሉ ልዩ ውበት መስጠት፣ ደግነትን መሙላት እና እቺን አሰልቺ ዓለም  አጓጊ ማድረግ ከአምላክሽ የተቀበልሻቸው መክሊቶችሽ ናቸው። እኔንም ባንቺ በኩል ፈጣሪዬን አመስጋኝ አድርገሺኛል።
            </p>

            <p>
              የኔ ንፁ ሴት ይህን አዲስ የህይወትሽ ዓመት ስትጀምሪ፣ ህይወትን እስከጥጓ እንድትኖሪያት እመኛለው ይህ ቀረኝ ማትይበት ዓመት ያድርግልሽ።
              እና ይህንን ሁልጊዜ አስታውሺ ጉዞሽ ወደ የትኛውም ቦታ ቢወስድሽ፣ ወይም ማዕበሉ ምንም ያህል ቢበረታ፣ ብቻሽን አትታገዪውም  እኔ ሁሌ ከጎንሽ አለሁ። እኔ ለረጅም ጉዞ አብሬሽ ነኝ—ታላላቅ ድሎችሽን ለማክበር፣ በጸጥታና በጥርጣሬዎችሽም ውስጥ እጅሽን ለመያዝ፣ እና በሁሉም ነገር ውስጥ አንቺን ለመውደድ ሁሌ ዝግጁ ነኝ። ትከሻዬ ሁልጊዜም ያንቺ ማረፈያ ነው።
              ሰላሜ፣ ደስታዬ እና ታላቋ ታሪኬ ስለሆንሽ አመሰግናለሁ።
            </p>
            
            {/* Elegant italicized closing style */}
            <p className="text-right font-serif text-xl md:text-2xl italic text-rose-gold mt-8 tracking-wide font-medium">
              መልካም ልደት katalina🥰,<br />
              {/* <span className="font-serif text-3xl block mt-2">With All My Love</span>
              <span className="font-serif text-3xl">Nathan</span> */}
            </p>
          </div>

          {/* Heart decoration at bottom */}
          <div className="flex justify-center mt-8">
            <Heart className="w-6 h-6 text-rose-gold fill-rose-gold animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;