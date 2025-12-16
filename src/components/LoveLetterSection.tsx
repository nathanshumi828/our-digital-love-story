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
          <h2 className="font-script text-5xl md:text-6xl text-gradient-gold mb-4">
            የኔእናት
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

          <div className="font-body text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
            <p className="first-letter:text-5xl first-letter:font-script first-letter:text-rose-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              From the moment I saw you, I knew my life would never be the same. 
              You walked into my world like a gentle breeze, and suddenly everything 
              made sense. Every song became about you, every sunset reminded me of 
              your smile, and every star in the sky seemed to spell your name.
            </p>

            <p>
              You are my sunshine on cloudy days, my comfort in times of doubt, 
              and my greatest adventure. With you, I have found a love that I 
              never knew existed — a love that is patient, kind, and unconditional. 
              You make me want to be a better person, every single day.
            </p>

            <p>
              I cherish every moment we spend together, from our late-night 
              conversations to our quiet mornings. The way you laugh, the way 
              you care, the way you look at me — these are the things I treasure 
              most in this world. You are not just my partner; you are my best 
              friend, my confidant, and my home.
            </p>

            <p>
              Thank you for loving me, for believing in me, and for being you. 
              I promise to spend every day showing you how much you mean to me. 
              My heart is yours, now and forever. I love you more than words 
              could ever express, but I will never stop trying.
            </p>

            <p className="text-right font-elegant text-xl italic text-rose-gold mt-8">
              Forever Yours,<br />
              <span className="font-script text-3xl">With All My Love</span><br />
              <span className="font-script text-3xl">ሳሬም</span>
              
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
