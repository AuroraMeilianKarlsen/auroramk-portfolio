import Image from 'next/image';
import Card from '../Card';

interface Skill {
  name: string;
  icon?: string;
  iconAlt?: string;
  textIcon?: string;
}

const languages: Skill[] = [
  { name: 'Java', icon: '/skillLogo/java-original.svg', iconAlt: 'Java logo' },
  {
    name: 'Python',
    icon: '/skillLogo/python-original.svg',
    iconAlt: 'Python logo',
  },
  { name: 'CSS', icon: '/skillLogo/css3-original.svg', iconAlt: 'CSS3 logo' },
  {
    name: 'JavaScript',
    icon: '/skillLogo/javascript-original.svg',
    iconAlt: 'JavaScript logo',
  },
  {
    name: 'TypeScript',
    icon: '/skillLogo/typescript-original.svg',
    iconAlt: 'TypeScript logo',
  },
  { name: 'R', icon: '/skillLogo/r-original.svg', iconAlt: 'R logo' },
  { name: 'SQL', textIcon: 'SQL' },
];

const technologies: Skill[] = [
  {
    name: 'React',
    icon: '/skillLogo/react-original.svg',
    iconAlt: 'React logo',
  },
  {
    name: 'Next.js',
    icon: '/skillLogo/nextjs-original.svg',
    iconAlt: 'Next.js logo',
  },
  {
    name: 'Tailwind',
    icon: '/skillLogo/tailwindcss-original.svg',
    iconAlt: 'Tailwind CSS logo',
  },
  { name: 'JavaFX', textIcon: 'JFX' },
  {
    name: 'Spring Boot',
    icon: '/skillLogo/spring-original.svg',
    iconAlt: 'Spring Boot logo',
  },
];

const tools: Skill[] = [
  { name: 'Git', icon: '/skillLogo/git-original.svg', iconAlt: 'Git logo' },
  {
    name: 'GitHub',
    icon: '/skillLogo/github-original.svg',
    iconAlt: 'GitHub logo',
  },
  {
    name: 'VS Code',
    icon: '/skillLogo/vscode-original.svg',
    iconAlt: 'VS Code logo',
  },
  {
    name: 'IntelliJ',
    icon: '/skillLogo/intellij-original.svg',
    iconAlt: 'IntelliJ logo',
  },
  { name: 'RStudio', textIcon: 'R' },
  {
    name: 'Maven',
    icon: '/skillLogo/maven-original.svg',
    iconAlt: 'Maven logo',
  },
  {
    name: 'Vite',
    icon: '/skillLogo/vitejs-original.svg',
    iconAlt: 'Vite logo',
  },
  {
    name: 'Figma',
    icon: '/skillLogo/figma-original.svg',
    iconAlt: 'Figma logo',
  },
  {
    name: 'Docker',
    icon: '/skillLogo/docker-original.svg',
    iconAlt: 'Docker logo',
  },
  { name: 'Scrum', textIcon: 'S' },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="flex flex-col items-center gap-1 p-2">
      {skill.icon ? (
        <Image
          src={skill.icon}
          alt={skill.iconAlt || `${skill.name} logo`}
          width={32}
          height={32}
          className="h-8 w-8"
        />
      ) : (
        <div className="h-8 w-8 flex items-center justify-center bg-gray-700 rounded">
          <span
            className={`font-bold text-white ${
              skill.textIcon === 'SQL'
                ? 'text-[10px]'
                : skill.textIcon === 'R' && skill.name === 'R'
                  ? 'text-sm'
                  : skill.textIcon === 'J'
                    ? 'text-base'
                    : 'text-[10px]'
            }`}
          >
            {skill.textIcon}
          </span>
        </div>
      )}
      <span className="text-[10px] text-gray-300">{skill.name}</span>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-8 scroll-mt-20" aria-label="Skills">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold">Skills</h2>

        {/* Languages */}
        <div className="mt-4">
          <h3 className="text-base font-medium text-gray-200 mb-2">
            Languages
          </h3>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-7">
            {languages.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-base font-medium text-gray-200 mb-2">
            Technologies
          </h3>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-7">
            {technologies.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-6">
          <h3 className="text-base font-medium text-gray-200 mb-2">Tools</h3>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-7">
            {tools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
