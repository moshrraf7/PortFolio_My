
export const Experience = () => {
  const experiences = [
    {
      title: "SOC Intern",
      company: "CyRAACS, Bengaluru",
      period: "Jan 2025 – Jun 2025 (6 months)",
      type: "Current",
      responsibilities: [
        "Monitored and analyzed real-time security events using SIEM tools",
        "Investigated potential security incidents and provided detailed incident reports",
        "Assisted in threat intelligence gathering and vulnerability assessments",
        "Gained hands-on experience in handling phishing cases, log analysis, and escalation procedures"
      ]
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Simform, Bengaluru",
      period: "Sep 2024 – Dec 2024 (3 months)",
      type: "Completed",
      responsibilities: [
        "Developed responsive web applications using React.js, Node.js, and MongoDB",
        "Collaborated with UI/UX teams to deliver clean, user-friendly interfaces",
        "Worked on RESTful APIs and implemented authentication and CRUD operations",
        "Participated in daily stand-ups and Agile development cycles"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full border-4 border-slate-900 hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <p className="text-pink-400 text-lg font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                          exp.type === "Current" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-pink-400 mr-3 mt-1.5 w-2 h-2 bg-pink-400 rounded-full flex-shrink-0"></span>
                          <span className="text-gray-300 leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
