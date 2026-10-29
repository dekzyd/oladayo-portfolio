import SectionLabel from "./SectionLabel";

export default function IMEPProject() {
  return (
    <section className="work work--dark" id="m-and-e">
      <div className="work__header">
        <SectionLabel
          number="07"
          label="SELECTED WORK"
          className="work__label"
        />

        <p className="work__intro">
          A complex internal platform built around monitoring, evaluation,
          inspections, reporting, and programme decisions.
        </p>
      </div>

      <article className="project project--featured project--imep">
        <div className="project__meta">
          <span>02 / FEATURED PROJECT</span>
          <span>2025 — PRESENT</span>
        </div>

        <div className="project__info">
          <div className="project__number">02</div>

          <div className="project__details">
            <p className="project__type">ENTERPRISE WEB APPLICATION</p>

            <h2 className="project__title">IMEP</h2>

            <p className="project__description">
              A role-based monitoring and evaluation platform designed to manage
              inspections, assignments, reporting, reviews, and programme
              decisions.
            </p>

            <div className="project__stack">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>TanStack Query</span>
              <span>Tailwind CSS</span>
              <span>REST APIs</span>
            </div>

            <a
              href="https://imep.idec.gov.ng/"
              className="project__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISIT PLATFORM
              <span>↗</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
