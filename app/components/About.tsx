import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__header">
        <SectionLabel
          number="09"
          label="ABOUT / EXPERIENCE"
          className="about__label"
        />

        <p className="about__intro">
          A frontend engineer interested in building useful interfaces,
          understanding the systems behind them, and continuously getting better
          at the craft.
        </p>
      </div>

      <div className="about__statement">
        <h2>
          I build interfaces for systems that
          <span>people actually use.</span>
        </h2>
      </div>

      <div className="about__experience">
        <div className="about__experience-label">
          <span>EXPERIENCE</span>
        </div>

        <div className="about__experience-content">
          <article className="about-item">
            <div className="about-item__meta">
              <span>01</span>
              <span>FRONTEND ENGINEERING</span>
            </div>

            <div className="about-item__body">
              <h3>Building real products, not just screens.</h3>

              <p>
                My experience has largely been around building frontend
                applications that sit on top of real business processes — where
                users, data, APIs, permissions, and workflows all have to work
                together.
              </p>
            </div>
          </article>

          <article className="about-item">
            <div className="about-item__meta">
              <span>02</span>
              <span>SYSTEM THINKING</span>
            </div>

            <div className="about-item__body">
              <h3>Understanding what happens behind the interface.</h3>

              <p>
                I care about more than how a page looks. I work with APIs,
                application state, role-based flows, data fetching, and reusable
                components to make the frontend fit the system around it.
              </p>
            </div>
          </article>

          <article className="about-item">
            <div className="about-item__meta">
              <span>03</span>
              <span>AI-ASSISTED ENGINEERING</span>
            </div>

            <div className="about-item__body">
              <h3>Using AI to move faster without giving up ownership.</h3>

              <p>
                I use AI as an engineering partner — to investigate problems,
                explore implementation options, debug, and review ideas. I still
                make the decisions, understand the code, and validate the
                result.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
