import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxFooter = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.footer__div span', {
      y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed') || '0')),
      opacity: 0,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1.9
      }
    });
  }, []);

  const letters = [
    { char: 'a', speed: '-300' },
    { char: 'p', speed: '100' },
    { char: 'p', speed: '300' },
    { char: 'r', speed: '-300' },
    { char: 'o', speed: '350' },
    { char: 'v', speed: '200' },
    { char: 'e', speed: '-310' },
    { char: 'c', speed: '200' },
    { char: 'o', speed: '-340' },
    { char: 'd', speed: '-100' },
    { char: 'e', speed: '300' }
  ];

  return (
    <footer ref={footerRef} className="flex items-center justify-center h-screen">
      <div className="footer__div text-[70px] tracking-[15px] text-white uppercase">
        {letters.map((letter, index) => (
          <span key={index} data-speed={letter.speed}>
            {letter.char}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default ParallaxFooter; 