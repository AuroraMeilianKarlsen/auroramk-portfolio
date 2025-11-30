import Image from 'next/image';

interface GameSectionProps {
  onOpenGame: () => void;
}

export default function GameSection({ onOpenGame }: GameSectionProps) {
  return (
    <section id="game" className="px-6 py-12 scroll-mt-20" aria-label="Spill">
      <div className="mx-auto max-w-3xl">
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenGame}
            className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors border-2 border-gray-600 hover:border-gray-500 hover:scale-105"
            aria-label="Åpne Dino-spill"
          >
            <Image
              src="/dino/DinoStart.png"
              alt="Dino"
              width={120}
              height={120}
              className="w-24 h-24 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
