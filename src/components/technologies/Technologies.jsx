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
        <h2>Tecnologias</h2>
        <p>
          Tecnologías con las cuales he trabajado y de las que tengo experiencia
        </p>
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
