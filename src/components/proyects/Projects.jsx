import Misecreto from "../../assets/misecreto.png";
import ReactToVideo from "../../assets/reactovideo.png";
import Rayx from "../../assets/rayx.png";
import MyBingo from "../../assets/mybingo.png";
import {
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaServer,
  FaArrowAltCircleRight,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

export default function Projects() {
  const ProjectsList = [
    {
      title: "MyBingo",
      image: MyBingo,
      description: "Sistema de Bingo en linea",
      link: "https://mybingo.cc",
      sources: ["React", "NodeJs", "Nestjs", "MongoDB"],
    },
    {
      title: "MiSecreto",
      image: Misecreto,
      description:
        "Plataforma para compartir secretos de manera anonima (Primer proyecto que use para aprender Socket)",
      link: "https://www.misecreto.lol",
      sources: ["React", "NodeJs", "ExpressJs", "MongoDB"],
    },
    {
      title: "React To Video",
      image: ReactToVideo,
      description:
        "Web simple con botones para reaccionar y tomar acciones sobre videos enviados por su comunidad en Discord",
      github: "https://github.com/xhzdaniel/react-video",
      sources: ["React", "NodeJs", "DiscordJs"],
    },
    {
      title: "Rayx Cheats",
      image: Rayx,
      description: "Tienda en linea para ofrecer servicios a sus clientes",
      link: "https://rayxcheats.com",
      sources: ["React", "NodeJs", "ExpressJs", "MongoDB"],
    },
  ];

  const iconMap = {
    MongoDB: <FaDatabase />,
    React: <FaReact />,
    NodeJs: <FaNodeJs />,
    ExpressJs: <FaServer />,
    DiscordJs: <FaDiscord />,
    Nestjs: <SiNestjs />,
  };

  const SourceIcon = ({ sourceName }) => {
    const IconComponent = iconMap[sourceName];
    return IconComponent || sourceName;
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Proyectos</h2>
        <p>Conoce mis proyectos de aprendizaje y trabajos realizados</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="projects">
          {ProjectsList && ProjectsList.length > 0 ? (
            ProjectsList.map((project, index) => (
              <div className="project" key={index}>
                <div className="project-header">
                  {project.image && (
                    <img src={project.image} alt={project.title} />
                  )}
                  <div className="project-overlay"></div>
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-footer">
                  <div className="project-sources">
                    {project.sources.length > 0 ? (
                      <>
                        {project.sources.map((source, idx) => (
                          <span
                            key={idx}
                            className="source"
                            data-tooltip-id="tooltip"
                            data-tooltip-content={source}
                          >
                            <SourceIcon sourceName={source} />
                          </span>
                        ))}
                      </>
                    ) : (
                      <span
                        className="source soon"
                        style={{ padding: "0.15rem 0.5rem" }}
                        data-tooltip-id="tooltip"
                        data-tooltip-content="In development"
                      >
                        Cooming Soon
                      </span>
                    )}
                  </div>
                  {(project.link && (
                    <button
                      className="visit-button"
                      onClick={() => window.open(project.link, "_blank")}
                      data-tooltip-id="tooltip"
                      data-tooltip-content="Visit Project"
                    >
                      <FaArrowAltCircleRight />
                    </button>
                  )) ||
                    (project.private && (
                      <span
                        className="private"
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Visit not available"
                        disabled
                        style={{
                          padding: "0.2rem 0.5rem",
                        }}
                      >
                        Code is private
                      </span>
                    )) ||
                    (project.github && (
                      <button
                        className="visit-button"
                        onClick={() => window.open(project.github, "_blank")}
                        data-tooltip-id="tooltip"
                        data-tooltip-content="View source code"
                      >
                        <FaGithub />
                      </button>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </>
  );
}
