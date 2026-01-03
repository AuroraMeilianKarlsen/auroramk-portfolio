'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import DinoGameModal from './DinoGameModal';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Engelsk som fallback i label, norsk hentes fra JSON via t()
  const navLinks = [
    { id: 'home', label: t('nav.home', 'Home'), href: '#home' },
    { id: 'contact', label: t('nav.contact', 'Contact'), href: '#contact' },
    { id: 'about', label: t('nav.about', 'About'), href: '#about' },
    {
      id: 'education',
      label: t('nav.education', 'Education'),
      href: '#education',
    },
    { id: 'skills', label: t('nav.skills', 'Skills'), href: '#skills' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950/70 backdrop-blur"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-8 md:py-5">
          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-10 text-lg"
            role="list"
          >
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

          {/* Mobile: Spacer for centering */}
          <div className="md:hidden" />

          {/* Hamburger Button (Mobile & narrow screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-4 pb-6 pt-2 bg-gray-950/95 backdrop-blur">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`relative text-lg text-white/80 hover:text-indigo-400 transition-colors py-2 ${
                    isActive ? 'text-indigo-400' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={link.label}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0 left-0 right-0 h-0.5 bg-indigo-400"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
            <button
              onClick={() => {
                setIsGameOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-white/80 hover:text-indigo-400 transition-colors hover:scale-110 py-2"
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
