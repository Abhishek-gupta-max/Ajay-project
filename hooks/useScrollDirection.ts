import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'none'>('none');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Add a slight scroll threshold before changing direction to prevent jitter
      if (Math.abs(scrollY - lastScrollY) < 10 && scrollY > 0) {
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initialize standard values
    updateScrollDir();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollDirection, isScrolled };
}
