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
        <h2>Acerca de mi</h2>
        <p>
          Tengo 22 años de edad, soy desarrollador de software y estoy
          aprendiendo nuevas tecnologias.
        </p>
      </div>
    </>
  );
}
