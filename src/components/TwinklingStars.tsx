import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

const TwinklingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 20; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 4,
          size: 8 + Math.random() * 12,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Sparkles
            className="text-gold"
            style={{ width: star.size, height: star.size }}
          />
        </div>
      ))}
    </div>
  );
};

export default TwinklingStars;
