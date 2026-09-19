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
                'Jeg elsker å løse problemer, lære nye ting, jobbe i team og utvikle nye ideer og konsepter. Jeg liker å møte nye mennesker og skape gode relasjoner. Jeg er spesielt interessert i hvordan tekniske løsninger kan skape intuitive og engasjerende brukeropplevelser, og jeg liker å utforske kreativitet og nye designideer. Jeg har og god erfaring med front-end, back-end, design thinking og brukerforståelse.'
              )}
            </p>
            <p className="text-[rgba(var(--text-rgb),0.85)]">
              {t(
                'about.p2',
                'Med bakgrunn fra celle- og molekylærbiologi synes jeg forståelsen av større systemer er spennende. Selv om biologiske systemer ikke er helt like som i informatikk, kan man likevel se likheter i hvordan ting er bygget opp og samspillet i større systemer. Dette synes jeg er spennende. Kombinasjonen av gradene mine gir meg en tverrfaglig bakgrunn, som har gitt meg interesse for hvordan data og modellering kan løse brede problemer.'
              )}
            </p>
            <p className="text-[rgba(var(--text-rgb),0.85)]">
              {t(
                'about.p3',
                'På siden er jeg sosial og aktiv i linjeforeningen min. Her har jeg fått erfaring med å koordinere frivillige, jobbe med administrasjon og kommunikasjon for å skape et inkluderende miljø. Det jeg liker best med verv er oppfordringen til å gi av seg selv og å jobbe sammen for å skape noe som gir glede. Det har lært meg mye om samarbeid, ansvar og å være en del av noe større.'
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
