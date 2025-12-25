export default function EducationSection() {
  const education = [
    {
      period: '2023 - 2026',
      degree: "Bachelor's in Computer Science",
      institution: 'NTNU',
      description:
        'Focusing on software development, algorithms, and building user-friendly applications.',
    },
    {
      period: '2020 - 2023',
      degree: "Bachelor's in Biology",
      institution: 'NTNU',
      description:
        'Specialization in Cell and Molecular Biology, providing a strong foundation in scientific research and analytical thinking.',
    },
  ];

  return (
    <section
      id="education"
      className="px-6 py-12 scroll-mt-20"
      aria-label="Education"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8">Education</h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-700"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline marker */}
                <div
                  className="absolute left-2 top-1.5 w-5 h-5 rounded-full bg-indigo-600 border-4 border-gray-900"
                  aria-hidden="true"
                />

                {/* Content card */}
                <div className="bg-gray-800/50 rounded-lg p-5 hover:bg-gray-800/70 transition-colors border border-gray-700/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {item.degree}
                    </h3>
                    <span className="text-sm text-indigo-400 font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

