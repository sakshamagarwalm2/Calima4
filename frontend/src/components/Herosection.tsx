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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Generate background canvas with gradient and texture
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");

    // Create gradient background
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height
    );
    gradient.addColorStop(0, "#FD7024");
    gradient.addColorStop(0.5, "#FF8C42");
    gradient.addColorStop(1, "#FFB366");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add background text pattern
    ctx.font = "bold 200px Arial";
    ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
    ctx.textAlign = "center";

    const texts = ["rain", "water", "flow", "wave", "gentle"];
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

    // Add grain texture
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3 + 1;
      const opacity = Math.random() * 0.15 + 0.05;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillRect(x, y, size, size);
    }

    for (let i = 0; i < 300; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 8 + 2;
      const opacity = Math.random() * 0.08;
      ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillRect(x, y, size, size);
    }

    // Add diagonal lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
    ctx.lineWidth = 1;
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, 0);
      ctx.lineTo(Math.random() * canvas.width, canvas.height);
      ctx.stroke();
    }

    setImageDataUrl(canvas.toDataURL());
  }, []);

  // Auto-trigger waves
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.waterWaveMethods) {
        window.waterWaveMethods.drop({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 50 + 30,
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
            dropRadius={40}
            perturbance={0.2}
            resolution={512}
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
                  <div className="absolute top-16 left-2 z-20">
                    <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-black leading-none text-[#fff0b3] tracking-tight drop-shadow-2xl">
                      CALIMA4
                    </h1>
                  </div>

                  {/* Center Content */}
                  <div className="flex-1 flex items-center justify-center relative">
                    {/* Left-Side Progress Bars */}
                    <div className="absolute space-y-10 z-10 left-5 bottom-16 justify-start">
                      <div className="w-96 h-6 text-[#fff0b3] rounded-full pl-2 font-bold capitalize">
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
                                radius: Math.random() * 60 + 40,
                                strength: Math.random() * 0.8 + 0.4,
                              });
                            }, i * 200);
                          }
                        }}
                        className="bg-[#fff0b3] w-2/3 text-[#FD7024] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-cream-100"
                      >
                        Explore Solutions
                      </button>
                    </div>

                    {/* Central Image Container */}
                    <div className="relative w-full h-full flex justify-end items-end">
                      <div className="w-1/3 bg-[#fff0b3] rounded-3xl shadow-2xl overflow-hidden mr-80 mb-32">
                        <div className="p-1 w-full">
                          <img
                            src={Heroimg.src}
                            alt="Hydrogen Energy"
                            className="w-full object-cover rounded-3xl"
                          />
                        </div>
                      </div>

                      {/* Bottom-Right Hydrogen Text */}
                      <div className="absolute bottom-16 right-5 transform translate-x-4 translate-y-4 z-20">
                        <h2 className="text-6xl md:text-7xl lg:text-9xl font-black text-[#fff0b3] capitalize">
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
          <div className="min-h-screen flex flex-col p-8 bg-gradient-to-br from-orange-400 to-orange-600">
            <div className="absolute top-8 left-8 z-10">
              <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-black text-cream-100 leading-none tracking-tight">
                HYDROGEN
              </h1>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute left-8 space-y-4">
                <div className="w-96 h-6 bg-cream-200 rounded-full"></div>
                <div className="w-48 h-6 bg-cream-200 rounded-full"></div>
              </div>
              <div className="relative">
                <div className="w-96 h-64 bg-black rounded-3xl border-4 border-[#FF6B6B] shadow-2xl overflow-hidden">
                  <div className="w-32 h-1 bg-blue-500 mt-4 ml-6 rounded-full"></div>
                  <div className="mt-4 px-6">
                    <div className="w-full h-32 bg-gray-600 rounded-lg"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 z-20">
                  <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-cream-100 bg-gray-700 px-6 py-2 rounded-lg">
                    Hydrogen
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-cream-100 text-[#FD7024] px-8 py-4 rounded-full font-semibold text-lg">
                Explore Solutions
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
