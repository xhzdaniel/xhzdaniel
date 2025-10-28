export default function Technologies() {
  const technologiesList = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "Git",
    "Nestjs",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "MySQL",
  ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Technologies</h2>
        <p>I have worked with these technologies and I am always learning.</p>
      </div>
      <div className="technologies-marquee gradient-mask">
        <div className="technologies-marquee-content">
          {[...technologiesList, ...technologiesList].map((tech, index) => (
            <div key={index} className="technology">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
