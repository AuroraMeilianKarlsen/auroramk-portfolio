import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-12 scroll-mt-20"
      aria-label="About me"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-gray-300">
              I have experience with project management, volunteer coordination,
              and organizing social initiatives, which has given me a structured
              and collaborative way of working. I enjoy taking responsibility
              and making sure things run smoothly. My technical skill set
              includes Java, Python, TypeScript, JavaScript, HTML/CSS, and R,
              with hands-on experience using React, Next.js, Tailwind, Spring
              Boot, Git, Docker, and Scrum. I’m motivated by building clean,
              user-friendly solutions. Alongside my technical background, I
              bring strong people skills from customer-facing roles and group
              work. I thrive in team environments, adapt easily to different
              needs, and value good communication and collaboration.
            </p>
          </div>
          <div className="flex gap-4">
            <Image
              src="/lab.jpg"
              alt="Laboratory"
              width={250}
              height={250}
              className="w-56 h-56 rounded-lg object-cover"
            />
            <Image
              src="/pcAtDT.png"
              alt="Computer at desk"
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
