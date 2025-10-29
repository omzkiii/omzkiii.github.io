import "./Home.css";

function Home() {
  return (
    <>
      <div id="home" className="page">
        <div id="test">
          <div>+++++++++++++++++++++++++++</div>
        </div>
        <div id="home-container">
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a>Projects</a>
          </nav>
          <div>
            <div id="center-container">
              <div id="hello">hello,</div>
              <div id="myNameIs">my name is</div>
              <div id="geomarSantos">Geomar Santos</div>
            </div>
            Software Developer
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
