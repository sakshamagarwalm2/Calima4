import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxPortfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.work__item, .work__item-num', {
      y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed') || '0')),
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        scrub: 1.9
      }
    });

    gsap.from('.work__item-img img', {
      scale: 1.6,
      scrollTrigger: {
        trigger: '.work__wrapp',
        start: 'top bottom',
        scrub: 1.9
      }
    });
  }, []);

  const portfolioItems = [
    { num: '001', speed: '-300', imgSrc: 'https://picsum.photos/800/1200?random=1' },
    { num: '002', speed: '-600', imgSrc: 'https://picsum.photos/800/1200?random=2' },
    { num: '003', speed: '-700', imgSrc: 'https://picsum.photos/800/1200?random=3' },
    { num: '004', speed: '-400', imgSrc: 'https://picsum.photos/800/1200?random=4' }
  ];

  return (
    <section ref={sectionRef} className="pt-[150px]">
      <div className="content w-full px-[70px]">
        <h2 className="section-title relative m-0 mb-[60px] text-[70px] leading-[0.8] text-center text-white uppercase">
          portfo<span className="stroke text-transparent [-webkit-text-stroke:1px_white]">lio</span>
          <span className="section-title__square absolute w-[130px] h-[130px] border border-[#4b4b4b] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]"></span>
        </h2>
      </div>

      <div className="work__wrapp flex flex-wrap justify-between gap-y-[120px] px-[120px]">
        {portfolioItems.map((item, index) => (
          <div key={index} className="work__item relative w-[calc(50%-60px)] h-[100vh]" data-speed={item.speed}>
            <span className="work__item-num absolute text-[70px] text-white mix-blend-difference z-[2]" data-speed={item.speed}>
              /{item.num}
            </span>
            <div className="work__item-img w-full h-full overflow-hidden">
              <img src={item.imgSrc} alt={`Portfolio ${item.num}`} className="block w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxPortfolio; 