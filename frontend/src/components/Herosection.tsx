'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import WaterWave to avoid SSR issues
const WaterWave = dynamic(() => import('react-water-wave'), {
  ssr: false,
  loading: () => <div className="h-screen bg-gradient-to-br from-orange-400 to-orange-600" />
});

export default function Home() {
  const [imageDataUrl, setImageDataUrl] = useState('');

  // Add custom styles for cream colors
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .text-cream-100 { color: #fdf6e3; }
      .text-cream-200 { color: #f7e6c4; }
      .bg-cream-100 { background-color: #fdf6e3; }
      .bg-cream-200 { background-color: #f7e6c4; }
      .border-cream-100 { border-color: #fdf6e3; }
      
      /* Grain noise animation */
      @keyframes grain {
        0%, 100% { transform: translate(0, 0); }
        10% { transform: translate(-5%, -10%); }
        20% { transform: translate(-15%, 5%); }
        30% { transform: translate(7%, -25%); }
        40% { transform: translate(-5%, 25%); }
        50% { transform: translate(-15%, 10%); }
        60% { transform: translate(15%, 0%); }
        70% { transform: translate(0%, 15%); }
        80% { transform: translate(3%, 35%); }
        90% { transform: translate(-10%, 10%); }
      }
      
      .grain-animation {
        animation: grain 8s steps(10) infinite;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    // Create a more complex background with text and enhanced grain texture
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FD7024');
    gradient.addColorStop(0.5, '#FF8C42');
    gradient.addColorStop(1, '#FFB366');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add background text pattern
    ctx.font = 'bold 200px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.textAlign = 'center';
    
    // Create repeating text pattern
    const texts = ['rain', 'water', 'flow', 'wave', 'gentle'];
    for (let y = -100; y < canvas.height + 200; y += 250) {
      for (let x = -200; x < canvas.width + 200; x += 400) {
        const text = texts[Math.floor(Math.random() * texts.length)];
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.3);
        ctx.fillText(text, 0, 0);
        ctx.restore();
      }
    }
    
    // Add more intense grain texture
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.15 + 0.05;
      
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillRect(x, y, size, size);
    }
    
    // Add larger grain clusters
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 8 + 2;
      const opacity = Math.random() * 0.08;
      
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(x, y, size, size);
    }
    
    // Add subtle diagonal lines for texture
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, 0);
      ctx.lineTo(Math.random() * canvas.width, canvas.height);
      ctx.stroke();
    }
    
    setImageDataUrl(canvas.toDataURL());
  }, []);

  // Auto-trigger waves for stronger effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.waterWaveMethods) {
        window.waterWaveMethods.drop({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 50 + 30,
          strength: Math.random() * 0.4 + 0.3
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FD7024] text-[#fff0b3]">
      
      {/* Animated grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 grain-animation opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent opacity-5"></div>
      </div>
      
      {/* Hero Section with Enhanced Liquid Effect */}
      <section className="h-screen relative overflow-hidden">
        {imageDataUrl && (
          <WaterWave
            imageUrl={imageDataUrl}
            dropRadius={40}
            perturbance={0.20}
            resolution={512}
            interactive={true}
            style={{
              height: '100vh',
              width: '100%',
              position: 'relative'
            }}
          >
            {(methods) => {
              // Store methods globally for auto-waves
              window.waterWaveMethods = methods;
              
              return (
                <div className="absolute inset-0 flex z-10 max-w-7xl px-6 w-screen h-screen">
                  {/* Large gentlerain text */}
                  <div className=" w-full">
                    <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-[#fff0b3] leading-none tracking-tight opacity-90 drop-shadow-2xl m-auto flex justify-center items-center">
                      CALIMA4
                    </h1>
                  </div>
                  
                  {/* Main content */}
                  <div className="ml-8 max-w-2xl">
                    
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button 
                        onClick={() => {
                          // Create multiple ripple effects
                          for (let i = 0; i < 3; i++) {
                            setTimeout(() => {
                              methods.drop({
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                radius: Math.random() * 60 + 40,
                                strength: Math.random() * 0.8 + 0.4
                              });
                            }, i * 200);
                          }
                        }}
                        className="hidden" >
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
          </WaterWave>
        )}
        
        {/* Loading state */}
        {!imageDataUrl && (
          <div className="h-full bg-gradient-to-br from-orange-400 to-orange-600 flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-cream-100 leading-none tracking-tight opacity-90">
                gentlerain
              </h1>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}