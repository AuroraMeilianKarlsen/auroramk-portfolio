'use client';

import ClientTyping from '../ClientTyping';
import Folder from '../Folder';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

// Toggle-knapp komponent
function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1.5 bg-[rgba(var(--link-hover-rgb),0.12)] backdrop-blur rounded-full border border-[rgba(var(--link-hover-rgb),0.45)] text-sm font-medium transition-all hover:bg-[rgba(var(--link-hover-rgb),0.22)] hover:border-[rgba(var(--link-hover-rgb),0.6)]"
      aria-label={t('home.switchLanguage', 'Switch to Norwegian')}
    >
      <span
        className={`px-2 py-0.5 rounded-full transition-colors ${
          language === 'no'
            ? 'bg-[var(--secondary-1)] text-[var(--text)]'
            : 'text-[rgba(var(--text-rgb),0.65)] hover:text-[var(--link-hover)]'
        }`}
      >
        NO
      </span>
      <span
        className={`px-2 py-0.5 rounded-full transition-colors ${
          language === 'en'
            ? 'bg-[var(--secondary-1)] text-[var(--text)]'
            : 'text-[rgba(var(--text-rgb),0.65)] hover:text-[var(--link-hover)]'
        }`}
      >
        EN
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

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.55fr_1fr] xl:gap-14">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold lg:whitespace-nowrap">
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
              "I'm a Master's student in Informatics at NTNU, specializing in interaction design, game and learning technology, who enjoys building simple and user-friendly solutions."
            )}
          </p>
          <br />
          <br />
          <br />
          {/* Sentrert, med plass over til arket som spretter opp ved klikk */}
          <div className="flex justify-center pt-24">
            <Folder
              href="/AuroraMeilianKarlsenCV.pdf"
              download="Aurora_Meilian_Karlsen_CV.pdf"
              paperCount={1}
              items={['CV']}
              size={1.6}
              color="#fa8caf" /* --secondary-1 */
              label={t('home.downloadCV', 'Download resume')}
              ariaLabel={t('home.downloadCV', 'Download resume')}
            />
          </div>
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
