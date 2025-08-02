import "./styles/styles.css";
import ProfileImage from "./components/user/ProfileImage.jsx";
import ProfileData from "./components/user/ProfileData.jsx";
import SocialsLink from "./components/user/SocialsLink.jsx";
import ContactButtons from "./components/user/ContactButtons.jsx";
import Tecnologies from "./components/technologies/Technologies.jsx";
import Projects from "./components/proyects/Projects.jsx";

function App() {
  return (
    <div className="portfolio">
      {/* Profile Section */}
      <div className="container-profile">
        {/* Profile Image */}
        <ProfileImage />

        <div className="container-info">
          {/* Data Profile */}
          <ProfileData />
          {/* Social Links */}
          <SocialsLink />
          {/* Contact */}
          <ContactButtons />
        </div>
      </div>
      {/* Profile Section */}

      {/* Skills and Technologies Section */}
      <div className="container-technologies">
        <Tecnologies />
      </div>
      {/* Skills and Technologies Section */}

      {/* Projects Section */}
      <div className="container-projects">
        <Projects />
      </div>
      {/* Projects Section */}
    </div>
  );
}

export default App;
