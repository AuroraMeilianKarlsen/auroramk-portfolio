'use client';

import TextType from './TextType';
import { useLanguage } from '../context/LanguageContext';

export default function ClientTyping() {
  const { tArray } = useLanguage();

  // Engelsk som fallback, norsk fra JSON
  const texts = tArray('home.typingTexts', [
    'I am Aurora Meilian Karlsen',
    'welcome to my page!',
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
