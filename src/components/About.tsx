import "./About.css";
import portrait from "../assets/portrait.jpg";
import github from "../assets/github.svg";
import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";

function About() {
  return (
    <>
      <div id="about" className="page">
        <div id="intro">
          <a>Hi, I'm Geo!</a>
          <div id="red-box">
            <div id="intro-box">
              I work across the stack, from backend logic to user-facing design;
              and build scalable, efficient systems that solve real-world
              problems. Seeking software engineering opportunities to leverage
              technical skills and innovative problem-solving abilities.
            </div>
          </div>
        </div>
        <img id="portrait" src={portrait} />
        <div id="links">
          <a href="https://github.com/omzkiii" target="_blank">
            <div>
              <img src={github} />
              <a>github.com/omzkiii</a>
            </div>
          </a>
          <a>
            <div>
              <img src={linkedin} />
              <a>geomar-santos-4056a7129</a>
            </div>
          </a>
          <a>
            <div>
              <img src={gmail} />
              <a>geogeomarsantos@gmail.com</a>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
