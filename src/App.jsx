import "./App.css";

const projects = [
  {
    number: "01",
    title: "Buddy Borrowers",
    description:
      "A campus resource-sharing platform for lending and borrowing items or offering skills. Includes authentication, request-based negotiation, chat, and a complete borrowing lifecycle.",
    tech: ["FastAPI", "PostgreSQL", "JWT", "React"],
    link: "https://github.com/justina-os/buddy_borrowers_backend",
    previewTitle: "Buddy Borrowers",
    previewLines: [
      "Resources              12",
      "Requests                4",
      "Messages                7",
      "",
      "GET    /resources",
      "POST   /requests",
      "GET    /messages",
    ],
  },

  {
    number: "02",
    title: "Event Management API",
    description:
      "A backend API for managing events and registrations with organizer and attendee roles. Implements authorization, capacity limits, deadlines, and duplicate-registration prevention.",
    tech: ["FastAPI", "MySQL", "JWT", "Pydantic"],
    link: "https://github.com/justina-os/event_management",
    previewTitle: "Event Management API",
    previewLines: [
      "Tech Talk              80/100",
      "Hackathon             120/150",
      "AI Workshop             45/60",
      "",
      "GET    /events",
      "POST   /events",
      "POST   /register",
    ],
  },

  {
    number: "03",
    title: "JWT Notes API",
    description:
      "A secure REST API where authenticated users can create, update, view, and delete only their own notes.",
    tech: ["FastAPI", "MySQL", "JWT", "Pydantic"],
    link: "https://github.com/justina-os/jwt-notes-api",
    previewTitle: "JWT Notes API",
    previewLines: [
      "Authentication: JWT",
      "",
      "POST   /notes",
      "GET    /notes",
      "PATCH  /notes/{id}",
      "DELETE /notes/{id}",
      "",
      "Status: 200 OK",
    ],
  },
];


function CodeWindow() {
  return (
    <div className="code-window">
      <div className="code-window-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="code-content">
        <div>
          <span style={{ color: "#c99b83" }}>from</span>{" "}
          <span style={{ color: "#e5d3c5" }}>fastapi</span>{" "}
          <span style={{ color: "#c99b83" }}>import</span>{" "}
          <span style={{ color: "#e5d3c5" }}>FastAPI</span>
        </div>

        <br />

        <div>
          <span style={{ color: "#c99b83" }}>app</span>{" "}
          = FastAPI(
        </div>

        <div style={{ paddingLeft: "28px" }}>
          title=
          <span style={{ color: "#d6aa91" }}>
            "Justina's API"
          </span>
        </div>

        <div>)</div>

        <br />

        <div>
          <span style={{ color: "#c99b83" }}>@app.get</span>
          <span style={{ color: "#d6aa91" }}>(" / ")</span>
        </div>

        <div>
          <span style={{ color: "#c99b83" }}>def</span>{" "}
          <span style={{ color: "#e5d3c5" }}>read_root</span>():
        </div>

        <div style={{ paddingLeft: "28px" }}>
          <span style={{ color: "#c99b83" }}>return</span>{" "}
          <span style={{ color: "#d6aa91" }}>
            "Build. Learn. Solve."
          </span>
        </div>
      </div>
    </div>
  );
}


function ProjectPreview({ project }) {
  return (
    <div className="project-visual">
      <div className="project-terminal">

        <div className="terminal-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="terminal-content">

          <div className="terminal-title">
            {project.previewTitle}
          </div>

          {project.previewLines.map((line, index) => (
            <div
              key={index}
              className={
                line === ""
                  ? "terminal-line terminal-space"
                  : "terminal-line"
              }
            >
              {line}
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}


function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <ProjectPreview project={project} />

      <div className="project-info">

        <div className="project-number">
          {project.number}
        </div>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span
              className="tech-tag"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View project ↗
        </a>

      </div>

    </article>
  );
}


function App() {
  return (
    <div className="app">

      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">

        <a
          href="#top"
          className="nav-logo"
        >
          Justina
        </a>

        <div className="nav-links">

          <a href="#work">
            Work
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <main id="top">

        <section className="hero">

          <div className="hero-content">

            <div className="hero-eyebrow">
              AIML STUDENT · PYTHON BACKEND DEVELOPMENT
            </div>

            <h1>
              Building backend systems that solve real problems.
            </h1>

            <p className="hero-description">
              I build applications with Python and FastAPI,
              focusing on REST APIs, authentication, databases,
              and real-world business workflows.
            </p>

            <div className="hero-buttons">

              <a
                className="button button-primary"
                href="https://github.com/justina-os"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/justina-jostle"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

            </div>

          </div>


          <div className="hero-visual">
            <CodeWindow />
          </div>

        </section>


        {/* ================= PROJECTS ================= */}

        <section
          className="projects-section"
          id="work"
        >

          <div className="section-header">

            <div>

              <div className="section-eyebrow">
                SELECTED WORK
              </div>

              <h2 className="section-title">
                Projects I've built.
              </h2>

            </div>

            <a
              className="github-link"
              href="https://github.com/justina-os"
              target="_blank"
              rel="noreferrer"
            >
              View all on GitHub ↗
            </a>

          </div>


          <div className="projects-list">

            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
              />
            ))}

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section
          className="about-section"
          id="about"
        >

          <div className="about-grid">

            <div>
              <h2 className="about-title">
                About me.
              </h2>
            </div>

            <div>

              <p className="about-text">
                I'm Justina, an Artificial Intelligence and
                Machine Learning student currently focused on
                backend development with Python.
              </p>

              <p className="about-text">
                I'm particularly interested in building APIs,
                working with databases, implementing
                authentication, and understanding how complete
                applications work behind the interface.
              </p>

              <p className="about-text">
                I'm currently learning and expanding my
                knowledge through hands-on projects rather
                than relying only on coursework.
              </p>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section
          className="skills-section"
          id="skills"
        >

          <div className="section-eyebrow">
            CURRENT TOOLKIT
          </div>

          <h2 className="section-title">
            What I work with.
          </h2>


          <div className="skills-grid">

            <div className="skill-group">

              <h3>
                Backend
              </h3>

              <p>
                Python · FastAPI · REST APIs ·
                Pydantic · JWT Authentication
              </p>

            </div>


            <div className="skill-group">

              <h3>
                Databases
              </h3>

              <p>
                PostgreSQL · MySQL · SQL ·
                Relational Database Design
              </p>

            </div>


            <div className="skill-group">

              <h3>
                Currently Learning
              </h3>

              <p>
                Machine Learning · System Design ·
                Better software architecture
              </p>

            </div>

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          className="contact-section"
          id="contact"
        >

          <h2>
            Let's build something useful.
          </h2>

          <p>
            I'm always interested in learning,
            building, and connecting with people
            working on interesting problems.
          </p>

          <a
            className="contact-email"
            href="mailto:justina.jostle.tech@gmail.com"
          >
            justina.jostle.tech@gmail.com
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <span>
          © 2026 Justina
        </span>

        <span>
          AIML Student · Backend Development
        </span>

      </footer>

    </div>
  );
}


export default App;