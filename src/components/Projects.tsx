
export const Projects = () => {
  const projects = [
    {
      title: "🔐 Phishing Email Detection",
      subtitle: "Cybersecurity Project",
      description: "Developed a machine learning-based system to detect phishing emails using natural language processing and classification models. Trained on real email datasets to identify suspicious patterns and improve detection accuracy.",
      tech: ["Python", "Machine Learning", "NLP", "Classification Models"],
      github: "#",
      demo: null,
      category: "AI/ML"
    },
    {
      title: "🛒 E-Commerce Web Application",
      subtitle: "Full-Stack Project",
      description: "Built a fully functional e-commerce platform with features like product listing, user authentication, cart management, and payment gateway integration. Designed responsive UI and optimized backend APIs for performance.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "#",
      demo: null,
      category: "Web Development"
    },
    {
      title: "🛍️ Shopify App (Flair Home)",
      subtitle: "Frontend Showcase",
      description: "Designed and deployed a Shopify-like storefront demo with a modern and intuitive user interface. Features product showcase, collections, and sleek animations to enhance user experience.",
      tech: ["React.js", "Tailwind CSS", "Netlify"],
      github: "#",
      demo: "#",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full border border-purple-500/30">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-pink-400 text-sm font-semibold mb-4">{project.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full border border-pink-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                >
                  GitHub Repo
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex-1 px-4 py-2 border border-pink-500 rounded-lg text-pink-400 text-sm font-semibold text-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
