
export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "Audisankara College of Engineering",
      location: "Tirupati, Andhra Pradesh",
      period: "Aug 2021 – May 2025",
      status: "In Progress"
    },
    {
      degree: "Intermediate (Class 12)",
      field: "Bihar School Examination Board (BSEB)",
      institution: "N D J College",
      location: "Andhratharhi, Madhubani",
      period: "2019 – 2021",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-pink-400 text-lg font-semibold mb-2">{edu.field}</p>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                </div>
                <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
                  <span className="text-gray-400 text-sm mb-2">{edu.period}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    edu.status === "In Progress"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-green-500/20 text-green-400 border border-green-500/30"
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
