'use client';

import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="px-6 py-12 scroll-mt-20"
      aria-label="About me"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">
          {t('about.title', 'Om meg')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <div className="space-y-4 lg:pr-4">
            <p className="text-[rgba(var(--text-rgb),0.85)]">
              {t(
                'about.p1',
                'Jeg liker å løse problemer og bygge nettopplevelser som kombinerer utvikling, arkitektur og design. Jeg er spesielt interessert i hvordan tekniske løsninger kan skape intuitive og engasjerende brukeropplevelser, og jeg liker å utforske kreativitet gjennom interaktiv design.'
              )}
            </p>
            <p className="text-[rgba(var(--text-rgb),0.85)]">
              {t(
                'about.p2',
                'Med bakgrunn i celle- og molekylærbiologi har jeg fått et tverrfaglig perspektiv og en bredere forståelse av hvordan datamodelleringsmetoder kan løse komplekse problemer.'
              )}
            </p>
            <p className="text-[rgba(var(--text-rgb),0.85)]">
              {t(
                'about.p3',
                'Utenfor tech er jeg sosial og aktivt involvert i studentforeningen min. Her har jeg fått erfaring med å koordinere frivillige, jobbe med administrasjon og kommunikasjon for å skape et inkluderende miljø. Det er noe jeg virkelig verdsetter og en erfaring jeg aldri ville vært foruten. Det har lært meg mye om samarbeid, ansvar og å være en del av noe større.'
              )}
            </p>
          </div>
          <div className="relative h-72 w-full lg:ml-8">
            <Image
              src="/lab.jpg"
              alt="Laboratory"
              width={250}
              height={250}
              className="absolute left-0 top-4 w-48 h-48 rounded-lg object-cover shadow-xl z-10 rotate-[-3deg]"
            />
            <Image
              src="/pcAtDT.png"
              alt="Computer at desk"
              width={250}
              height={250}
              className="absolute left-[155px] top-[74px] w-48 h-48 rounded-lg object-cover shadow-xl rotate-[2deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
