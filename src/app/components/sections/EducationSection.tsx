'use client';

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t, tArray } = useLanguage();

  // Norsk som fallback, engelsk fra JSON
  const education = [
    {
      period: '2026 - 2028',
      degree: t('education.degree1', 'Master i informatikk'),
      institution: 'NTNU',
      link: 'https://www.ntnu.edu/studies/msit',
      description: t(
        'education.desc1',
        'Studieretning interaksjonsdesign, spill- og læringsteknologi, med fokus på å bygge interaktive systemer med brukeropplevelsen i sentrum.'
      ),
      details: t(
        'education.details1',
        'Fordypning i design av grafiske brukergrensesnitt med brukersentrerte metoder, teorien bak dataspill og hvordan ideer blir til spillbare opplevelser, og hvordan digitale verktøy kan støtte undervisning og læring. Graden omfatter praktiske prosjekter i tverrfaglige team og avsluttes med en masteroppgave.'
      ),
    },
    {
      period: '2023 - 2026',
      degree: t('education.degree2', 'Bachelor i informatikk'),
      institution: 'NTNU',
      link: 'https://www.ntnu.no/studier/bit',
      description: t(
        'education.desc2',
        'Effektiv, sikker og fleksibel programvareutvikling, algoritmer, bygging av brukervennlige applikasjoner.'
      ),
      highlights: tArray('education.highlights2', [
        'Utveksling til Universitetet i Padova høsten 2025.',
        'Bacheloroppgave: utvikling av en helseapplikasjon for å kartlegge og avdekke kardiometabolske risikofaktorer ved hjelp av Hjertefrisk-algoritmen.',
      ]),
      details: t(
        'education.details2',
        'Bred kunnskap om programmering, systemutvikling, programvare og kommunikasjonsbaserte systemer, med vekt på å lage brukervennlige datasystemer. Praktisk erfaring med databasedesign, webteknologi, interaksjonsdesign og datasikkerhet, og forståelse for informasjonsteknologiens rolle i samfunnet og for bærekraftig utvikling.'
      ),
    },
    {
      period: '2020 - 2023',
      degree: t('education.degree3', 'Bachelor i biologi'),
      institution: 'NTNU',
      link: 'https://www.ntnu.no/studier/bbi',
      description: t(
        'education.desc3',
        'Spesialisering i celle- og molekylærbiologi, som ga et sterkt grunnlag i vitenskapelig forskning og analytisk tenkning.'
      ),
      details: t(
        'education.details3',
        'Kunnskap om levende organismer, fra molekylære prosesser i cellen til mangfoldet av organismer, med fordypning i cellers struktur og virkemåte og i arv, DNA, RNA og proteiner. Praktisk laboratorieerfaring med metoder innen molekylærgenetikk, proteinseparering, proteinidentifisering og immunologi, og med å behandle, tolke og presentere resultater fra laboratorieforsøk.'
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
                  {item.highlights && (
                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-[rgba(var(--text-rgb),0.85)] marker:text-[var(--secondary-1)]">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}

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
                        {t('education.competence', 'Kunnskap og ferdigheter:')}
                      </p>
                      <p className="text-[rgba(var(--text-rgb),0.85)] text-sm leading-relaxed">
                        {item.details}
                      </p>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={expandedIndex === index ? 0 : -1}
                        className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--secondary-1)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                      >
                        {t(
                          'education.programmeLink',
                          'Les mer om studiet hos NTNU'
                        )}
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5h5v5M19 5l-9 9M17 14v4a1 1 0 01-1 1H6a1 1 0 01-1-1V8a1 1 0 011-1h4"
                          />
                        </svg>
                      </a>
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
