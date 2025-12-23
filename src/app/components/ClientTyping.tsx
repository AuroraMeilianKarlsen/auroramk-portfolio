'use client';

import TextType from './TextType';

export default function ClientTyping() {
  return (
    <TextType
      as="span"
      className="text-indigo-400"
      text={['I am Aurora Meilian Karlsen', 'happy to see you here!']}
      typingSpeed={75}
      pauseDuration={1500}
      deletingSpeed={40}
      loop={true}
      showCursor={true}
      cursorCharacter="|"
    />
  );
}
