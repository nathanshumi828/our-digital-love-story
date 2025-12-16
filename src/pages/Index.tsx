import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import LoveLetterSection from '@/components/LoveLetterSection';
import PhotoGallerySection from '@/components/PhotoGallerySection';
import VideoMemoriesSection from '@/components/VideoMemoriesSection';
import VoiceMessagesSection from '@/components/VoiceMessagesSection';
import MusicSection from '@/components/MusicSection';
import FooterSection from '@/components/FooterSection';
import FloatingHearts from '@/components/FloatingHearts';
import BackgroundMusicToggle from '@/components/BackgroundMusicToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating hearts background effect */}
      <FloatingHearts />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <LoveLetterSection />
        <PhotoGallerySection />
        <VideoMemoriesSection />
        <VoiceMessagesSection />
        <MusicSection />
        <FooterSection />
      </main>

      {/* Background music toggle */}
      <BackgroundMusicToggle />
    </div>
  );
};

export default Index;
