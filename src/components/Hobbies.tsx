
export const Hobbies = () => {
  const hobbies = [
    {
      title: "Cybersecurity Enthusiast",
      icon: "🛡️",
      description: "Passionate about solving CTF challenges and exploring platforms like Hack The Box and TryHackMe.",
      color: "from-red-400 to-pink-600"
    },
    {
      title: "Online Gaming",
      icon: "🎮",
      description: "Enjoy playing tactical games like BGMI and Call of Duty to enhance focus and strategy skills.",
      color: "from-blue-400 to-purple-600"
    },
    {
      title: "Reading Novels",
      icon: "📚",
      description: "Love reading tech-thrillers, detective stories, and thought-provoking fiction.",
      color: "from-green-400 to-teal-600"
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105 group text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${hobby.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                {hobby.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
