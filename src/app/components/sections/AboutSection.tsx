import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-12 scroll-mt-20" aria-label="Om meg">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">Om meg</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <br />
            <ul className="text-gray-300 list-disc ml-5 mt-4 space-y-1">
              <li>
                2020-2023: Bachelor i Biologi, spesialisering i Celle og
                Molekylærbiologi
              </li>
              <li>2023-2026: Bachelor i Informatikk</li>
            </ul>
            <p className="mt-4 text-gray-300 font-medium">Jeg har:</p>
            <ul className="text-gray-300 list-disc ml-5 mt-2 space-y-1">
              <li>
                Erfaringer med prosjektledelse, koordinering av frivillige,
                logistikkplanlegging og gjennomføring av sosiale arrangementer
              </li>
              <li>
                Kompetanse innen programmeringsspråk som Java, Python,
                HTML/CSS/JavaScript, TypeScript og R, samt teknologier som
                React, Next.js, Tailwind, SpringBoot og verktøy som Git, Docker
                og Scrum
              </li>
              <li>
                Erfaring med kundebehandling, mersalg og tilrettelegging av
                behov
              </li>
              <li>Erfaring med fasilitering av gruppearbeid og dynamikk</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Image
              src="/lab.jpg"
              alt="Lab"
              width={250}
              height={250}
              className="w-56 h-56 rounded-lg object-cover"
            />
            <Image
              src="/pcAtDT.png"
              alt="Datamaskin ved skrivebord"
              width={250}
              height={250}
              className="w-56 h-56 rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
