'use client';

import ClientTyping from '../ClientTyping';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

// Toggle-knapp komponent
function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1.5 bg-[rgba(var(--link-hover-rgb),0.12)] backdrop-blur rounded-full border border-[rgba(var(--link-hover-rgb),0.45)] text-sm font-medium transition-all hover:bg-[rgba(var(--link-hover-rgb),0.22)] hover:border-[rgba(var(--link-hover-rgb),0.6)]"
      aria-label={`Switch to ${language === 'en' ? 'Norwegian' : 'English'}`}
    >
      <span
        className={`px-2 py-0.5 rounded-full transition-colors ${
          language === 'en'
            ? 'bg-[var(--secondary-1)] text-[var(--text)]'
            : 'text-[rgba(var(--text-rgb),0.65)] hover:text-[var(--link-hover)]'
        }`}
      >
        EN
      </span>
      <span
        className={`px-2 py-0.5 rounded-full transition-colors ${
          language === 'no'
            ? 'bg-[var(--secondary-1)] text-[var(--text)]'
            : 'text-[rgba(var(--text-rgb),0.65)] hover:text-[var(--link-hover)]'
        }`}
      >
        NO
      </span>
    </button>
  );
}

export default function HomeSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 scroll-mt-20"
      aria-label="Home"
    >
      {/* Språk-toggle øverst til venstre */}
      <div className="absolute top-4 left-4 z-10">
        <LanguageToggle />
      </div>

      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            {t('home.greeting', 'Hi,')}{' '}
            <span className="inline-block">
              <ClientTyping />
            </span>
          </h1>
          <p className="mt-4 text-[rgba(var(--text-rgb),0.85)]">
            {t(
              'home.description1',
              'Computer Science student with a background in Cell and Molecular Biology.'
            )}
            <br />
            <br />
            {t(
              'home.description2',
              "I'm a student developer in my 3rd year of a Bachelor's in Computer Science at NTNU who enjoys building simple and user-friendly solutions."
            )}
          </p>
          <br />
          <br />
          <br />
          <a
            href="/AuroraMeilianKarlsenCV.pdf"
            download="Aurora_Meilian_Karlsen_CV.pdf"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--secondary-1)] hover:bg-[var(--secondary-1)] text-[var(--text)] rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-[rgba(var(--secondary-1-rgb),0.25)] hover:shadow-[rgba(var(--secondary-1-rgb),0.4)] hover:-translate-y-0.5"
            aria-label="Download CV in PDF format"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            {t('home.downloadCV', 'Download resume')}
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/AuroraMKarlsenPortrait.png"
            alt="Profile picture of Aurora Meilian Karlsen"
            width={440}
            height={560}
            priority
            className="h-auto w-full max-w-sm rounded-[16px] object-cover shadow-xl"
            sizes="(max-width: 1024px) 60vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}
