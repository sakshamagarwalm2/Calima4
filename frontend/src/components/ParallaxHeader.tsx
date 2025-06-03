import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial animations
    tl.from(".title .char", {
      opacity: 0,
      yPercent: 130,
      stagger: 0.06,
      ease: "back.out",
      duration: 1
    });
    
    tl.to(imageRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      ease: "expo.out",
      duration: 2
    }, "-=1");
    
    tl.from(marqueeRef.current, {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
      duration: 2
    }, "-=1.5");

    // Scroll animations
    gsap.to(".title_parallax", {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        scrub: 1.9
      },
      yPercent: -150
    });

    gsap.to(".header .stroke", {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        scrub: 1.9
      },
      xPercent: 50
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        scrub: 1.9
      },
      xPercent: -70
    });

    gsap.to("img", {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        scrub: 1.9
      },
      scale: 1.3
    });

    gsap.to(".header__marq-wrapp", {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        scrub: 1.9
      },
      xPercent: -50
    });
  }, []);

  return (
    <header ref={headerRef} className="relative flex justify-center items-center w-full h-screen px-[70px]">
      <h1 ref={titleRef} className="relative m-0 text-[85px] text-center text-white uppercase mix-blend-difference z-[2]">
        <span className="title_parallax inline-block">Parallax</span>
        <span className="stroke inline-block text-transparent [-webkit-text-stroke:1px_white]">effect</span>
      </h1>

      <div ref={imageRef} className="absolute w-[45%] h-full top-0 right-[100px] [clip-path:polygon(0%_0%,0%_0%,0%_100%,0%_100%)] overflow-hidden">
        <img src="https://picsum.photos/1200/800" alt="Header" className="block w-full h-full object-cover" />
      </div>

      <div ref={marqueeRef} className="absolute bottom-0 left-0 w-full h-auto bg-[#171717] overflow-hidden">
        <div className="header__marq-wrapp flex w-full h-auto py-2 px-[70px]">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className="relative flex-none inline-block pr-[55px] mr-[15px] uppercase text-[#9e9e9e] text-[35px]">
              discuss your ideas
              <span className="absolute w-[40px] h-[40px] right-0">
                <img src="/images/star.svg" alt="" className="block w-full h-full" />
              </span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ParallaxHeader; 