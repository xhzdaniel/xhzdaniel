import { FaLocationPin } from "react-icons/fa6";

export default function ProfileData() {
  return (
    <>
      <div className="location-and-name">
        <h1>Edwin Hernández</h1>
        <div className="location">
          <FaLocationPin style={{ fontSize: "0.8rem" }} />{" "}
          <span>Maracaibo, Venezuela</span>
        </div>
      </div>

      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! My name is Edwin Hernández, and I am a web developer. Welcome
          to my portfolio website.
        </p>
      </div>
    </>
  );
}
