import Misecreto from "../../assets/misecreto.png";
import ReactToVideo from "../../assets/reactovideo.png";
import {
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaServer,
  FaArrowAltCircleRight,
} from "react-icons/fa";

export default function Projects() {
  const ProjectsList = [
    {
      title: "MiSecreto",
      image: Misecreto,
      description: "A platform to share secrets anonymously",
      link: "https://www.misecreto.lol",
      sources: ["React", "NodeJs", "Express", "MongoDB"],
    },
    {
      title: "React To Video",
      image: ReactToVideo,
      description: "Streamer React To Video with options",
      sources: ["React", "NodeJs"],
      private: true,
    },
    {
      title: "Developing...",
      description: "Stay tuned for more projects!",
      sources: [],
      private: true,
    },
  ];

  const iconMap = {
    MongoDB: <FaDatabase />,
    React: <FaReact />,
    NodeJs: <FaNodeJs />,
    Express: <FaServer />,
  };

  const SourceIcon = ({ sourceName }) => {
    const IconComponent = iconMap[sourceName];
    return IconComponent || sourceName;
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Projects</h2>
        <p>Check out my projects and learn more about my work.</p>
      </div>
      <div className="projects">
        {ProjectsList && ProjectsList.length > 0 ? (
          ProjectsList.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-header">
                {project.image && (
                  <img src={project.image} alt={project.title} />
                )}
                <div className="header-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
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
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </>
  );
}
