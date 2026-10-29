import SectionLabel from "./SectionLabel";

export default function CaseStudyWork() {
  return (
    <section className="case-study-work">
      <div className="case-study-work__header">
        <SectionLabel
          number="04"
          label="THE WORK"
          className="case-study-work__label"
        />

        <p className="case-study-work__intro">
          From translating requirements into interfaces to connecting those
          interfaces to real systems.
        </p>
      </div>

      <div className="case-study-work__list">
        {/* Work item 1 */}
        <article className="work-item">
          <div className="work-item__number">01</div>

          <div className="work-item__content">
            <span className="work-item__category">FRONTEND DEVELOPMENT</span>

            <h2 className="work-item__title">
              Building interfaces around real workflows.
            </h2>

            <p className="work-item__description">
              Designed and developed responsive interfaces for the IDEC
              platform, turning complex requirements into clear, structured user
              flows.
            </p>

            <div className="work-item__tags">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>React</span>
            </div>
          </div>
        </article>

        {/* Work item 2 */}
        <article className="work-item">
          <div className="work-item__number">02</div>

          <div className="work-item__content">
            <span className="work-item__category">API INTEGRATION</span>

            <h2 className="work-item__title">
              Connecting the interface to the system behind it.
            </h2>

            <p className="work-item__description">
              Integrated frontend interfaces with backend APIs, handling
              application state, asynchronous data, loading states, errors, and
              user interactions.
            </p>

            <div className="work-item__tags">
              <span>REST APIs</span>
              <span>TanStack Query</span>
              <span>Async State</span>
            </div>
          </div>
        </article>

        {/* Work item 3 */}
        <article className="work-item">
          <div className="work-item__number">03</div>

          <div className="work-item__content">
            <span className="work-item__category">PERFORMANCE</span>

            <h2 className="work-item__title">
              Making the application ask for less.
            </h2>

            <p className="work-item__description">
              Identified a role-dependent page making three separate API
              requests and reworked the data-fetching logic so only the required
              endpoint was requested.
            </p>

            <div className="work-item__tags">
              <span>DevTools</span>
              <span>TanStack Query</span>
              <span>Performance</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
