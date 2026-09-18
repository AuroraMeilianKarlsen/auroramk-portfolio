'use client';

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  // Engelsk som fallback, norsk fra JSON
  const education = [
    {
      period: '2026 - 2028',
      degree: t('education.degree1', 'Master i informatikk'),
      institution: 'NTNU',
      description: t(
        'education.desc1',
        'Studieretning innen interaksjonsdesign, spill- og læringsteknologi, med fokus på å bygge interaktive systemer med brukeropplevelsen i sentrum.'
      ),
      details: t(
        'education.details1',
        'Et forskningsbasert studium der du fordyper deg i ett fagområde og avslutter graden med en masteroppgave. Studieretningen interaksjonsdesign, spill- og læringsteknologi handler om utvikling av interaktive grafiske systemer, fra simulatorer til rene underholdningsspill: design av brukergrensesnitt, 2D- og 3D-grafikkprogrammering, programvarearkitektur og systemutvikling, og kunstig intelligens i interaktive systemer. Spilldesign og spillutviklingsmetodikk brukes i prosjektarbeid, sammen med bruk av spill i læring, interaktiv historiefortelling og gamifisering av applikasjoner. Du utvikler vitenskapelig arbeidsmåte og evnen til å løse nye og utfordrende problemer.'
      ),
    },
    {
      period: '2023 - 2026',
      degree: t('education.degree2', 'Bachelor i informatikk'),
      institution: 'NTNU',
      description: t(
        'education.desc2',
        'Effektiv, sikker og fleksibel programvareutvikling, algoritmer, bygging av brukervennlige applikasjoner.'
      ),
      details: t(
        'education.details2',
        'Programmering, algoritmer, datastrukturer og programvareutviklingsmetodikk. Du får ferdigheter i å bygge sikre, brukervennlige systemer for web-, mobil- og desktop-applikasjoner. Programmet dekker databasedesign, nettverkskommunikasjon, datadrevet programvareutvikling og menneske-maskin-interaksjon, og forbereder deg på å løse komplekse tekniske problemer samtidig som du forstår teknologiens rolle i samfunnet.'
      ),
    },
    {
      period: '2020 - 2023',
      degree: t('education.degree3', 'Bachelor i biologi'),
      institution: 'NTNU',
      description: t(
        'education.desc3',
        'Spesialisering i celle- og molekylærbiologi, som ga et sterkt grunnlag i vitenskapelig forskning og analytisk tenkning.'
      ),
      details: t(
        'education.details3',
        'Forståelse av liv fra molekylære prosesser til økosystemer. Spesialisering i celle- og molekylærbiologi gir kunnskap om hvordan organismer fungerer på cellenivå, inkludert fysiologi, genetikk og økotoksikologi. En grunnleggende forståelse av biologiske systemer og hvordan disse systemene inspirerte nevrale nettverksarkitekturer. Du utvikler praktiske laboratorieferdigheter, vitenskapelig metodikk og evnen til å bidra til bærekraftig utvikling og miljøvern.'
      ),
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="education"
      className="px-6 py-12 scroll-mt-20"
      aria-label="Education"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8">
          {t('education.title', 'Utdanning')}
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-0.5 bg-[rgba(var(--link-hover-rgb),0.6)]"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline marker */}
                <div
                  className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-[var(--secondary-1)] border-4 border-[var(--bg)]"
                  aria-hidden="true"
                />

                {/* Content card */}
                <div className="bg-[rgba(var(--link-hover-rgb),0.2)] rounded-lg p-5 hover:bg-[rgba(var(--link-hover-rgb),0.32)] transition-colors border border-[rgba(var(--link-hover-rgb),0.45)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-[var(--text)]">
                      {item.degree}
                    </h3>
                    <span className="text-sm text-[var(--secondary-1)] font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[rgba(var(--text-rgb),0.7)] text-sm mb-2">
                    {item.institution}
                  </p>
                  <p className="text-[rgba(var(--text-rgb),0.85)] text-sm">
                    {item.description}
                  </p>

                  {/* Read more section */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedIndex === index
                        ? 'max-h-[48rem] opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-3 border-t border-[rgba(var(--link-hover-rgb),0.45)]">
                      <p className="text-sm text-[rgba(var(--text-rgb),0.7)] font-medium mb-2">
                        {t('education.whatYouLearn', 'Hva du lærer:')}
                      </p>
                      <p className="text-[rgba(var(--text-rgb),0.85)] text-sm leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>

                  {/* Toggle button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-3 text-sm text-[var(--secondary-1)] hover:text-[var(--secondary-1)] transition-colors flex items-center gap-1"
                    aria-expanded={expandedIndex === index}
                  >
                    {expandedIndex === index
                      ? t('education.readLess', 'Les mindre')
                      : t('education.readMore', 'Les mer')}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
