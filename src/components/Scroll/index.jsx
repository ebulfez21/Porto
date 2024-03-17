import { useState, useEffect } from 'react';
import './index.css';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScrollTop();
  };

  const animateScrollTop = () => {
    const duration = 1500; 
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const scrollStep = () => {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const elapsed = currentTime - startTime;

      window.scrollTo(0, easeInOutCubic(elapsed, start, -start, duration));

      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

   
  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  return (
    <button className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
