"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Heroimg from "../../public/Hr.jpg";

// Dynamically import WaterWave to avoid SSR issues
const WaterWave = dynamic(() => import("react-water-wave"), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-gradient-to-br from-orange-400 to-orange-600" />
  ),
});

export default function Home() {
  const [imageDataUrl, setImageDataUrl] = useState("");

  // Add custom styles for cream colors and grain animation
  useEffect(() => {
    const style = document.createElement("style");
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

      /* Responsive adjustments */
      @media (max-width: 1024px) {
        .text-9xl { font-size: 6rem; }
        .text-8xl { font-size: 5rem; }
        .text-7xl { font-size: 4rem; }
        .text-6xl { font-size: 3rem; }
        .w-96 { width: 70vw; }
        .w-1\\/3 { width: 50%; }
        .mr-80 { margin-right: 5rem; }
        .mb-32 { margin-bottom: 2rem; }
        .space-y-10 { gap: 1.5rem; }
      }

      @media (max-width: 768px) {
        .text-9xl { font-size: 4rem; }
        .text-8xl { font-size: 3.5rem; }
        .text-7xl { font-size: 3rem; }
        .text-6xl { font-size: 2.5rem; }
        .w-96 { width: 80vw; }
        .w-1\\/3 { width: 60%; }
        .left-5 { left: 1rem; }
        .right-5 { right: 1rem; }
        .top-16 { top: 2rem; }
        .bottom-16 { bottom: 2rem; }
        .mr-80 { margin-right: 2rem; }
        .mb-32 { margin-bottom: 1.5rem; }
        .px-8 { padding-left: 1rem; padding-right: 1rem; }
        .py-4 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .text-lg { font-size: 1rem; }
      }

      @media (max-width: 480px) {
        .text-9xl { font-size: 3rem; }
        .text-8xl { font-size: 2.5rem; }
        .text-7xl { font-size: 2rem; }
        .text-6xl { font-size: 1.75rem; }
        .w-96 { width: 90vw; }
        .w-1\\/3 { width: 80%; }
        .w-2\\/3 { width: 80%; }
        .left-5 { left: 0.5rem; }
        .right-5 { right: 0.5rem; }
        .top-16 { top: 1rem; }
        .bottom-16 { bottom: 1rem; }
        .mr-80 { margin-right: 1rem; }
        .mb-32 { margin-bottom: 1rem; }
        .space-y-10 { gap: 1rem; }
        .p-8 { padding: 1rem; }
        .px-8 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .py-4 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .text-lg { font-size: 0.875rem; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Generate background canvas with gradient and texture
  useEffect(() => {
    const updateCanvas = () => {
      const canvas = document.createElement("canvas");
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#FD7024");
      gradient.addColorStop(0.5, "#FF8C42");
      gradient.addColorStop(1, "#FFB366");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add background text pattern
      ctx.font = `bold ${width > 768 ? 150 : 80}px Arial`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      ctx.textAlign = "center";

      const texts = ["rain", "water", "flow", "wave", "gentle"];
      for (let y = -100; y < height + 200; y += 200) {
        for (let x = -200; x < width + 200; x += 300) {
          const text = texts[Math.floor(Math.random() * texts.length)];
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate((Math.random() - 0.5) * 0.3);
          ctx.fillText(text, 0, 0);
          ctx.restore();
        }
      }

      // Add grain texture
      for (let i = 0; i < width * 2; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.15 + 0.05;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(x, y, size, size);
      }

      for (let i = 0; i < width / 4; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 8 + 2;
        const opacity = Math.random() * 0.08;
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        ctx.fillRect(x, y, size, size);
      }

      // Add diagonal lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      for (let i = 0; i < Math.min(width / 40, 50); i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, 0);
        ctx.lineTo(Math.random() * width, height);
        ctx.stroke();
      }

      setImageDataUrl(canvas.toDataURL());
    };

    updateCanvas();
    window.addEventListener("resize", updateCanvas);
    return () => window.removeEventListener("resize", updateCanvas);
  }, []);

  // Auto-trigger waves
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.waterWaveMethods) {
        window.waterWaveMethods.drop({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * (window.innerWidth > 768 ? 50 : 30) + 20,
          strength: Math.random() * 0.4 + 0.3,
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#FD7024] text-[#fff0b3]">
      {/* Animated grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 grain-animation opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent opacity-5"></div>
      </div>

      {/* Hero Section with WaterWave */}
      <section className="h-screen relative overflow-hidden">
        {imageDataUrl && (
          <WaterWave
            imageUrl={imageDataUrl}
            dropRadius={window.innerWidth > 768 ? 40 : 20}
            perturbance={0.2}
            resolution={window.innerWidth > 768 ? 512 : 256}
            interactive={true}
            style={{
              height: "100vh",
              width: "100%",
              position: "relative",
            }}
          >
            {(methods) => {
              window.waterWaveMethods = methods;
              return (
                <div className="w-full h-full flex flex-col relative">
                  {/* Top-Left Title */}
                  <div className="absolute top-24 md:top-16 md:left-4 z-20 w-full md:w-auto flex justify-center items-center">
                    <h1 className="text-9xl font-black leading-none text-[#fff0b3] tracking-tight drop-shadow-2xl">
                      CALIMA4
                    </h1>
                  </div>

                  {/* Center Content */}
                  <div className="flex-1 flex items-center justify-center relative">
                    {/* Left-Side Progress Bars */}
                    <div className="md:absolute space-y-8 md:space-y-10 z-10 md:left-5 flex flex-col items-center sm:bottom-12 md:bottom-16 justify-start text-center">
                      <div className="w-full  md:w-96 h-6 text-[#fff0b3] rounded-full pl-2 font-bold capitalize ">
                        <h3>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Voluptatibus, nesciunt.
                        </h3>
                      </div>
                      <button
                        onClick={() => {
                          for (let i = 0; i < 3; i++) {
                            setTimeout(() => {
                              methods.drop({
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                radius: Math.random() * (window.innerWidth > 768 ? 60 : 30) + 20,
                                strength: Math.random() * 0.8 + 0.4,
                              });
                            }, i * 200);
                          }
                        }}
                        className="w-3/4 sm:w-1/2 text-[#FD7024] px-2 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold md:text-lg bg-[#fff0b3] hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-cream-100"
                      >
                        Products
                      </button>
                    </div>

                    {/* Central Image Container */}
                    <div className="relative w-full h-full flex justify-end items-end hidden md:block">
                     

                      {/* Bottom-Right Hydrogen Text */}
                      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-2 sm:right-4 md:right-5 transform translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4 z-20">
                        <h2 className="text-4xl  md:text-7xl lg:text-9xl font-black text-[#fff0b3] capitalize">
                          HYDROGEN
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </WaterWave>
        )}

        {/* Loading State */}
        {!imageDataUrl && (
          <div className="min-h-screen flex flex-col p-4 sm:p-6 md:p-8 bg-gradient-to-br from-orange-400 to-orange-600">
            <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-cream-100 leading-none tracking-tight">
                HYDROGEN
              </h1>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute left-2 sm:left-4 md:left-8 space-y-3 sm:space-y-4 md:space-y-4">
                <div className="w-11/12 sm:w-80 md:w-96 h-6 bg-cream-200 rounded-full"></div>
                <div className="w-8/12 sm:w-48 md:w-48 h-6 bg-cream-200 rounded-full"></div>
              </div>
              <div className="relative">
                <div className="w-11/12 sm:w-80 md:w-96 h-48 sm:h-56 md:h-64 bg-black rounded-3xl border-4 border-[#FF6B6B] shadow-2xl overflow-hidden">
                  <div className="w-24 sm:w-28 md:w-32 h-1 bg-blue-500 mt-4 ml-4 sm:ml-5 md:ml-6 rounded-full"></div>
                  <div className="mt-4 px-4 sm:px-5 md:px-6">
                    <div className="w-full h-24 sm:h-28 md:h-32 bg-gray-600 rounded-lg"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4 z-20">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-cream-100 bg-gray-700 px-4 sm:px-5 md:px-6 py-2 rounded-lg">
                    Hydrogen
                  </h2>
                </div>
              </div>
            </div>
           
          </div>
        )}
      </section>
    </div>
  );
}