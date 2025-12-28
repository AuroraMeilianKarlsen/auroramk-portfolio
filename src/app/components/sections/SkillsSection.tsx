'use client';

import LogoLoop, { LogoItem } from '../LogoLoop';
import { useLanguage } from '../../context/LanguageContext';

interface SkillItem {
  src: string;
  alt: string;
  title: string;
}

const languages: SkillItem[] = [
  { src: '/skillLogo/java-original.svg', alt: 'Java', title: 'Java' },
  { src: '/skillLogo/python-original.svg', alt: 'Python', title: 'Python' },
  { src: '/skillLogo/css3-original.svg', alt: 'CSS', title: 'CSS' },
  {
    src: '/skillLogo/javascript-original.svg',
    alt: 'JavaScript',
    title: 'JavaScript',
  },
  {
    src: '/skillLogo/typescript-original.svg',
    alt: 'TypeScript',
    title: 'TypeScript',
  },
  { src: '/skillLogo/r-original.svg', alt: 'R', title: 'R' },
  { src: '/skillLogo/sqlLogo.png', alt: 'SQL', title: 'SQL' },
];

const technologies: SkillItem[] = [
  { src: '/skillLogo/react-original.svg', alt: 'React', title: 'React' },
  { src: '/skillLogo/nextjs-original.svg', alt: 'Next.js', title: 'Next.js' },
  {
    src: '/skillLogo/tailwindcss-original.svg',
    alt: 'Tailwind CSS',
    title: 'Tailwind CSS',
  },
  { src: '/skillLogo/vitejs-original.svg', alt: 'Vite', title: 'Vite' },
];

const tools: SkillItem[] = [
  { src: '/skillLogo/git-original.svg', alt: 'Git', title: 'Git' },
  { src: '/skillLogo/github-light.svg', alt: 'GitHub', title: 'GitHub' },
  { src: '/skillLogo/vscode-original.svg', alt: 'VS Code', title: 'VS Code' },
  {
    src: '/skillLogo/intellij-original.svg',
    alt: 'IntelliJ',
    title: 'IntelliJ',
  },
  { src: '/skillLogo/maven-original.svg', alt: 'Maven', title: 'Maven' },
  { src: '/skillLogo/figma-original.svg', alt: 'Figma', title: 'Figma' },
  { src: '/skillLogo/docker-original.svg', alt: 'Docker', title: 'Docker' },
];

// Custom render function to show logo + name
function renderSkillItem(item: LogoItem) {
  const skill = item as SkillItem;
  return (
    <div className="flex items-center gap-2 group/skill">
      <img
        src={skill.src}
        alt={skill.alt}
        className="h-8 w-8 object-contain transition-transform duration-300 group-hover/skill:scale-110"
        draggable={false}
      />
      <span className="text-sm text-gray-300 whitespace-nowrap">
        {skill.title}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-8 scroll-mt-20" aria-label="Skills">
      {/* Title centered */}
      <div className="text-center mb-6 px-6">
        <h2 className="text-2xl font-semibold">
          {t('skills.title', 'Skills')}
        </h2>
      </div>

      {/* Logo loops span full width */}
      <div className="space-y-6">
        {/* Languages */}
        <div>
          <div className="h-12 relative w-full">
            <LogoLoop
              logos={languages}
              speed={50}
              direction="left"
              logoHeight={32}
              gap={64}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Programming languages"
              renderItem={renderSkillItem}
            />
          </div>
        </div>

        {/* Technologies */}
        <div>
          <div className="h-12 relative w-full">
            <LogoLoop
              logos={technologies}
              speed={50}
              direction="right"
              logoHeight={32}
              gap={64}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Frontend technologies"
              renderItem={renderSkillItem}
            />
          </div>
        </div>

        {/* Tools */}
        <div>
          <div className="h-12 relative w-full">
            <LogoLoop
              logos={tools}
              speed={50}
              direction="left"
              logoHeight={32}
              gap={64}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Development tools"
              renderItem={renderSkillItem}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
