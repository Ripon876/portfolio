import Timeline from "../Timeline/Timeline";
import "./Experiences.css";
import { experiences } from "./experiences";

function Experiences() {
  return (
    <div className="experiences" id="experiences" data-aos="fade-up">
      <div className="container text-center p-5">
        <div className="experienceInfo py-3">
          <h1>Experiences</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rutrum congue leo eget malesuada.
          </p>
        </div>
        <div className="services pt-5 text-start">
          <Timeline items={experiences} />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
