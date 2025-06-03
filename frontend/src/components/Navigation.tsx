'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="w-full bg-white/40 shadow-sm fixed top-0 left-0 right-0 z-50 ">
      <nav className="max-w-7xl mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            CALIMAFOUR
          </Link>

          {/* Navigation Items */}
          <ul className="flex items-center justify-evenly w-[30%] text-black">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
