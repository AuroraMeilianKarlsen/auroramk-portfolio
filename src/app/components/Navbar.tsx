'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import DinoGameModal from './DinoGameModal';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isGameOpen, setIsGameOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'contact', 'about', 'education', 'skills'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar and some padding
      let currentSection = 'home';

      // Find the section that is currently in viewport
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;

          // Check if we've scrolled past this section's start
          if (scrollPosition >= sectionTop - 100) {
            currentSection = sections[i];
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'skills', label: 'Skills', href: '#skills' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-8 py-5">
          <div className="flex items-center space-x-10 text-lg" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative text-white/80 hover:text-indigo-400 transition-colors ${
                    isActive ? 'text-indigo-400' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={link.label}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-400"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
            <button
              onClick={() => setIsGameOpen(true)}
              className="text-white/80 hover:text-indigo-400 transition-colors hover:scale-110"
              aria-label="Open Dino game"
            >
              <Image
                src="/dino/DinoStart.png"
                alt="Dino game"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </nav>
      <DinoGameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
}
