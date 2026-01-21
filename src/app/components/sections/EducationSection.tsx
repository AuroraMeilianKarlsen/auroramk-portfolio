'use client';

import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function EducationSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  // Engelsk som fallback, norsk fra JSON
  const education = [
    {
      period: '2023 - 2026',
      degree: t('education.degree1', "Bachelor's in Computer Science"),
      institution: 'NTNU',
      description: t(
        'education.desc1',
        'Effective, safe and flexible software development, algorithms, building user-friendly applications.'
      ),
      details: t(
        'education.details1',
        "Programming, algorithms, data structures, and software development methodology. You gain skills in building secure, user-friendly systems for web, mobile, and desktop applications. The program covers database design, network communication, data-driven software development and human-computer interaction, preparing you to solve complex technical problems while understanding technology's role in society."
      ),
    },
    {
      period: '2020 - 2023',
      degree: t('education.degree2', "Bachelor's in Biology"),
      institution: 'NTNU',
      description: t(
        'education.desc2',
        'Specialization in Cell and Molecular Biology, providing a strong foundation in scientific research and analytical thinking.'
      ),
      details: t(
        'education.details2',
        'Understanding life from molecular processes to ecosystems. Specialization in cell and molecular biology provides knowledge of how organisms function at the cellular level, including physiology, genetics, and ecotoxicology. A fundamental understanding of biological systems and how these systems inspired neural network architectures. You develop practical lab skills, scientific methodology, and the ability to contribute to sustainable development and environmental conservation.'
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
          {t('education.title', 'Education')}
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
                        ? 'max-h-96 opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-3 border-t border-[rgba(var(--link-hover-rgb),0.45)]">
                      <p className="text-sm text-[rgba(var(--text-rgb),0.7)] font-medium mb-2">
                        {t('education.whatYouLearn', 'What you learn:')}
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
                      ? t('education.readLess', 'Read less')
                      : t('education.readMore', 'Read more')}
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
