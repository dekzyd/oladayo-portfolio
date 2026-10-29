import SectionLabel from "./SectionLabel";

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <div className="work__header">
        <SectionLabel
          number="02"
          label="SELECTED WORK"
          className="work__label"
        />

        <p className="work__intro">
          A selection of products and systems I&apos;ve helped design, build,
          and improve.
        </p>
      </div>

      <nav className="project-index" aria-label="Featured projects">
        <a href="#idec">
          <span>01</span>
          <span>IDEC</span>
          <span>↗</span>
        </a>

        <a href="#m-and-e">
          <span>02</span>
          <span>IMEP</span>
          <span>↗</span>
        </a>
      </nav>

      <article className="project project--featured project--idec" id="idec">
        <div className="project__meta">
          <span>01 - FEATURED PROJECT</span>
          <span>2024 — PRESENT</span>
        </div>

        {/* Restore the project image during visual polish. */}
        {/*
        <div className="project__visual">
          <div className="project__image">
            <img
              src="/assets/img/Idec.png"
              alt="IDEC Import Duty Exemption Certificate platform"
            />
          </div>
        </div>
        */}

        <div className="project__info">
          <div className="project__number"> </div>

          <div className="project__details">
            <p className="project__type">ENTERPRISE WEB APPLICATION</p>

            <h2 className="project__title">IDEC</h2>

            <p className="project__description">
              A digital platform that simplifies the application and management
              of Import Duty Exemption Certificates for businesses and
              government stakeholders.
            </p>

            <div className="project__stack">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>TanStack Query</span>
              <span>Tailwind CSS</span>
              <span>REST APIs</span>
            </div>

            <a
              href="https://www.idec.gov.ng/"
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW CASE STUDY
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
