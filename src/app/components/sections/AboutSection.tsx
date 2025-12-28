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
          {t('about.title', 'About Me')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <div className="space-y-4 lg:pr-4">
            <p className="text-gray-300">
              {t(
                'about.p1',
                "I enjoy solving problems and building web experiences that combine development, architecture, and design. I'm especially interested in how technical solutions can create intuitive and engaging user experiences, and I like exploring creativity through interactive design."
              )}
            </p>
            <p className="text-gray-300">
              {t(
                'about.p2',
                "With a background in Cell & Molecular Biology, I've gained a cross-disciplinary perspective and a broader understanding of how data modeling approaches can solve complex problems."
              )}
            </p>
            <p className="text-gray-300">
              {t(
                'about.p3',
                "Outside of tech, I'm social and actively involved in my student association. here I have gained experience with coordinating volunteers, working with administration and communication to create a inclusive environment. It's something I truly value and an experience I would never want to be without. It has taught me a lot about collaboration, responsibility, and being part of something bigger."
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
