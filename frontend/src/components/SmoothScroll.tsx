'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 0
            },
            ease: 'power3.inOut'
          });
        }
      }
    };

    // Add event listener for clicks
    document.addEventListener('click', handleAnchorClick);

    // Initialize scroll animations
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          });
        },
        once: true
      });
    });

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Clean up
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [pathname]); // Re-run effect when pathname changes

  return (
    <div ref={containerRef} className="smooth-scroll-container">
      {children}
    </div>
  );
}