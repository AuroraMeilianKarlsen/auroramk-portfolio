import ClientTyping from '../ClientTyping';
import Image from 'next/image';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 scroll-mt-20"
      aria-label="Home"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            Hi,{' '}
            <span className="inline-block">
              <ClientTyping />
            </span>
          </h1>
          <p className="mt-4 text-gray-300">
            Computer Science student with a background in Cell and Molecular
            Biology.
            <br />
            <br />
            My name is Aurora Meilian Karlsen, and I&apos;m in my 3rd year of a
            Bachelor&apos;s in Computer Science at NTNU. I&apos;m a developer
            who enjoys building simple and user-friendly solutions.
          </p>
          <br />
          <br />
          <br />
          <h2 className="text-2xl font-semibold">Curriculum Vitae</h2>
          <p className="text-gray-300">Download my CV in PDF format.</p>
          <a
            href="/AuroraMeilianKarlsenCV.pdf"
            download="Aurora_Meilian_Karlsen_CV.pdf"
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-semibold"
            aria-label="Download CV in PDF format"
          >
            Download CV
          </a>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/AuroraMKarlsenPortrait.png"
            alt="Profile picture of Aurora Meilian Karlsen"
            width={440}
            height={560}
            priority
            className="h-auto w-full max-w-sm rounded-[16px] object-cover shadow-xl"
            sizes="(max-width: 1024px) 60vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}
