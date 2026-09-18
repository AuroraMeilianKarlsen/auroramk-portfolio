'use client';

import TextType from './TextType';
import { useLanguage } from '../context/LanguageContext';

export default function ClientTyping() {
  const { tArray } = useLanguage();

  // Norsk som fallback, engelsk fra JSON
  const texts = tArray('home.typingTexts', [
    'jeg er Aurora Meilian Karlsen',
    'velkommen til min side!',
  ]);

  return (
    <TextType
      as="span"
      className="text-[var(--secondary-1)]"
      text={texts}
      typingSpeed={75}
      pauseDuration={1500}
      deletingSpeed={40}
      loop={true}
      showCursor={true}
      cursorCharacter="|"
    />
  );
}
