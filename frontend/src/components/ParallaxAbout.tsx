import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        scrub: 1.9
      },
      yPercent: 80
    });

    gsap.from('img', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        scrub: 1.9
      },
      scale: 1.6
    });

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: '.about__wrapp',
        start: 'top bottom',
        scrub: 1.9
      },
      yPercent: 50
    });
  }, []);

  return (
    <section ref={sectionRef} className="pt-[150px] pb-[50px]">
      <div className="about__wrapp flex justify-between px-[70px]">
        <div ref={imageRef} className="w-[calc(50%-35px)] h-[100vh] overflow-hidden">
          <img src="https://picsum.photos/1000/1600" alt="About" className="block w-full h-full object-cover" />
        </div>
        
        <div ref={textRef} className="w-[calc(50%-35px)] pr-[70px]">
          <h2 className="section-title text-left mb-[60px] text-[70px] leading-[0.8] text-white uppercase">
            abo<span className="stroke text-transparent [-webkit-text-stroke:1px_white]">ut</span>
            <span className="section-title__square absolute w-[130px] h-[130px] border border-[#4b4b4b] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]"></span>
          </h2>
          <p className="leading-[1.4] text-[20px] text-[#4b4b4b]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse aspernatur fugit debitis quisquam. 
            Quia exercitationem ipsum voluptas voluptatum hic enim quo provident culpa possimus cupiditate! 
            Dolorum quae doloremque cum rerum ipsam inventore beatae, at odit, velit, aspernatur minima! Corporis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxAbout; 