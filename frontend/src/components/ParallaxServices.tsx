import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.serv__item-arrow', {
      x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed') || '0')),
      scrollTrigger: {
        trigger: '.serv__list',
        start: 'top bottom',
        scrub: 1.9
      }
    });
  }, []);

  const services = [
    { title: 'Graphic Design', speed: '500' },
    { title: 'UX/UI Design', speed: '400' },
    { title: 'Web Design', speed: '800' },
    { title: 'Brand Design', speed: '600' }
  ];

  return (
    <section ref={sectionRef} className="pt-[150px] pb-[50px]">
      <div className="content w-full px-[70px]">
        <h2 className="section-title relative m-0 mb-[60px] text-[70px] leading-[0.8] text-center text-white uppercase">
          servic<span className="stroke text-transparent [-webkit-text-stroke:1px_white]">es</span>
          <span className="section-title__square absolute w-[130px] h-[130px] border border-[#4b4b4b] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]"></span>
        </h2>

        <div className="serv__list">
          {services.map((service, index) => (
            <div key={index} className="serv__item relative py-[40px] border-b border-[#2f2e2e]">
              <span 
                className="serv__item-arrow absolute inline-block w-[55px] h-[55px] top-1/2 right-0 transform -translate-y-1/2"
                data-speed={service.speed}
              >
                <img src="/images/arrow.svg" alt="" className="block w-full h-full object-contain rotate-180" />
              </span>
              <div className="serv__item-txt">
                <span className="text-[50px] text-[#4b4b4b] uppercase">/{service.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxServices; 