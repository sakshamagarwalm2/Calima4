'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Calima4</Link>
        
        <div className="flex gap-6">
          <Link 
            href="/" 
            className={`transition-colors ${pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors ${pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}