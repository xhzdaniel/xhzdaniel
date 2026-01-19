import { FaFacebook, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa6";

export default function SocialsLink() {
  const handleOpenLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="social-links">
      <h2>Redes Sociales</h2>

      <div className="social-links-list">
        <button
          onClick={() => handleOpenLink("https://www.facebook.com/xhzdaniel")}
          data-tooltip-id="tooltip"
          data-tooltip-content="Facebook"
        >
          <FaFacebook />
        </button>

        <button
          onClick={() => handleOpenLink("https://www.instagram.com/xhzdaniel")}
          data-tooltip-id="tooltip"
          data-tooltip-content="Instagram"
        >
          <FaInstagram />
        </button>

        <button
          onClick={() => handleOpenLink("https://github.com/xhzdaniel")}
          data-tooltip-id="tooltip"
          data-tooltip-content="Github"
        >
          <FaGithub />
        </button>

        <button
          onClick={() =>
            handleOpenLink("https://discord.com/users/528308070871334912")
          }
          data-tooltip-id="tooltip"
          data-tooltip-content="Discord"
        >
          <FaDiscord />
        </button>
      </div>
    </div>
  );
}
