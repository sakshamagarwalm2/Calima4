'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function RevealAnimation({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Progress counter animation
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          setCounter(100);
          reveal();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  // Reveal animation function
  const reveal = (): void => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: "expo.inOut",
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: "expo.inOut",
        duration: 0.7,
        delay: 0.5,
      })
      .to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        pointerEvents: "none",
        delay: 0.5,
      })
      .to(".content", {
        opacity: 1,
        duration: 0.5
      })
      .to(".title-lines", {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        ease: "expo.inOut",
        duration: 0.6,
      });
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="loading-screen fixed inset-0 bg-[#121212] flex justify-center items-center z-50">
          <div className="follow absolute bg-[#f48049] h-[2px] w-0 left-0 z-[2]"></div>
          <div 
            className="hide absolute left-0 bg-white h-[2px] transition-all duration-400 ease-out"
            style={{ width: `${counter}%` }}
          ></div>
          <p className="hide absolute text-[130px] text-white font-medium transform -translate-y-[15px]">
            {counter}%
          </p>
        </div>
      )}
             
      <div className={`content opacity-0 transition-opacity duration-500 ${!isLoading ? 'z-10' : 'z-0'}`}>
        {children}
      </div>
    </div>
  );
}