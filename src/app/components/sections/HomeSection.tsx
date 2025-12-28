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
            I&apos;m a student developer in my 3rd year of a Bachelor&apos;s in
            Computer Science at NTNU who enjoys building simple and
            user-friendly solutions.
          </p>
          <br />
          <br />
          <br />
          <a
            href="/AuroraMeilianKarlsenCVNorEng.pdf"
            download="Aurora_Meilian_Karlsen_CV.pdf"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            aria-label="Download CV in PDF format"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download resume
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
