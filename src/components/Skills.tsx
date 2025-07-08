
import { useState } from "react";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("cybersecurity");

  const skillCategories = {
    cybersecurity: {
      title: "Cybersecurity",
      icon: "🔐",
      skills: [
        { name: "SIEM Tools", items: ["Splunk", "IBM QRadar"], level: 85 },
        { name: "Operating Systems", items: ["Linux (Ubuntu, Kali)", "Windows"], level: 90 },
        { name: "Networking", items: ["TCP/IP", "OSI", "Firewalls", "IDS/IPS"], level: 80 },
        { name: "Security", items: ["Threat Hunting", "Malware Analysis", "Incident Response"], level: 85 },
        { name: "Tools", items: ["Wireshark", "Nmap", "Nessus", "Zeek", "VirusTotal", "Security Onion"], level: 88 },
        { name: "Scripting", items: ["Python", "Bash", "PowerShell"], level: 82 },
        { name: "Frameworks", items: ["MITRE ATT&CK", "Cyber Kill Chain"], level: 78 }
      ]
    },
    development: {
      title: "Development",
      icon: "💻",
      skills: [
        { name: "Languages", items: ["JavaScript", "HTML", "CSS", "Python"], level: 90 },
        { name: "Frontend", items: ["React.js", "Tailwind CSS", "Bootstrap"], level: 92 },
        { name: "Backend", items: ["Node.js", "Express.js"], level: 85 },
        { name: "Databases", items: ["MongoDB", "MySQL"], level: 80 },
        { name: "Tools", items: ["Git", "GitHub", "Postman", "Figma", "VS Code"], level: 88 }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: "🧠",
      skills: [
        { name: "Communication", items: ["Clear articulation", "Technical writing"], level: 90 },
        { name: "Teamwork", items: ["Collaboration", "Leadership"], level: 88 },
        { name: "Analytical Thinking", items: ["Problem solving", "Critical analysis"], level: 92 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-2 border border-pink-500/20">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 mx-1 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">{skill.name}</h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
