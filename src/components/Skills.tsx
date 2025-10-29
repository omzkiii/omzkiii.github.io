import "./Skills.css";

function Skills() {
  return (
    <>
      <div id="skills" className="page">
        <div id="title">
          {/* Skills */}
          <div>Skills</div>
        </div>
        <div id="skill-list">
          <div className="skill-card">
            <div className="skill-header">Development</div>
            Java <br />
            Python <br />
            JavaScript <br />
            Bash <br />
            TypeScript <br />
            Dart <br />
            HTML <br />
            CSS <br />
          </div>
          <div className="skill-card">
            <div className="skill-header">Frameworks</div>
            Next.js <br />
            React.js <br />
            Django <br />
            Flask <br />
            Node.js <br />
            Express <br />
            TailwindCSS <br />
            Vue.js <br />
            Flutter <br />
          </div>
          <div className="skill-card">
            <div className="skill-header">Database</div>
            PostgreSQL <br />
            SQLite <br />
            PostGIS <br />
            MongoDB <br />
          </div>
          <div className="skill-card">
            <div className="skill-header">Tools</div>
            Git <br />
            Github <br />
            Docker <br />
            Linux <br />
            REST APIs <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
