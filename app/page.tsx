import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="main">
      <Navbar />

      {/*==================== HERO ====================*/}
      <section className="hero" id="home">
        <div className="hero__top">
          {/* <span className="hero__eyebrow">FRONTEND ENGINEER</span> */}
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            <span>OLADAYO</span>
            <span>ADEKOYA</span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__description">
              I build digital products that make complicated workflows feel
              simple.
            </p>

            <a href="#work" className="hero__scroll">
              <span className="hero__scroll-line"></span>
              <span>SCROLL TO EXPLORE</span>
            </a>
          </div>
        </div>

        <div className="hero__footer">
          <span>AVAILABLE FOR OPPORTUNITIES</span>
          <span className="hero__footer-dot"></span>
        </div>
      </section>

      {/*==================== INTRO 01 ====================*/}
      <section className="intro" id="about-intro">
        <div className="intro__label">
          <span>01</span>
          <span>WHAT I DO</span>
        </div>

        <div className="intro__content">
          <p className="intro__statement">
            I build <span className="intro__highlight">digital products</span>{" "}
            that turn complex problems into{" "}
            <span className="intro__highlight">simple experiences.</span>
          </p>
        </div>

        <div className="intro__footer">
          <span>DESIGN × ENGINEERING × EXPERIENCE</span>
        </div>
      </section>

      {/*==================== SELECTED WORK 02 ====================*/}
      <section className="work" id="work">
        <div className="work__header">
          <div className="work__label">
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>

          <p className="work__intro">
            A selection of products and systems I've helped design, build, and
            improve.
          </p>
        </div>

        {/*==================== IDEC PROJECT ====================*/}
        <article className="project project--featured project--idec">
          <div className="project__meta">
            <span>01 / FEATURED PROJECT</span>
            <span>2025 — PRESENT</span>
          </div>

          {/* <div className="project__visual">
            <div className="project__image">
              <img
                src="/assets/img/Idec.png"
                alt="IDEC Import Duty Exemption Certificate platform"
              />
            </div>
          </div> */}

          <div className="project__info">
            <div className="project__number">01</div>

            <div className="project__details">
              <p className="project__type">ENTERPRISE WEB APPLICATION</p>

              <h2 className="project__title">IDEC</h2>

              <p className="project__description">
                A digital platform that simplifies the application and
                management of Import Duty Exemption Certificates for businesses
                and government stakeholders.
              </p>

              <div className="project__stack">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>TanStack Query</span>
                <span>Tailwind CSS</span>
                <span>REST APIs</span>
              </div>

              <a href="#" className="project__link">
                VIEW CASE STUDY
                <span>↗</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      {/*==================== CASE STUDY INTRO 03 ====================*/}
      <section className="case-study-intro">
        <div className="case-study-intro__label">
          <span>03</span>
          <span>MY ROLE</span>
        </div>

        <div className="case-study-intro__content">
          <p className="case-study-intro__statement">
            Turning a complex government workflow into{" "}
            <span>clear, usable interfaces.</span>
          </p>

          <div className="case-study-intro__details">
            <p>
              I worked on the frontend of IDEC, translating business
              requirements and backend systems into interfaces that users can
              actually navigate and understand.
            </p>

            <p>
              My work involved building reusable UI, connecting the application
              to APIs, handling different user flows, and improving the overall
              experience across the platform.
            </p>
          </div>
        </div>
      </section>

      {/*==================== CASE STUDY — THE WORK 04 ====================*/}
      <section className="case-study-work">
        <div className="case-study-work__header">
          <div className="case-study-work__label">
            <span>04</span>
            <span>THE WORK</span>
          </div>

          <p className="case-study-work__intro">
            From translating requirements into interfaces to connecting those
            interfaces to real systems.
          </p>
        </div>

        <div className="case-study-work__list">
          <article className="work-item">
            <div className="work-item__number">01</div>

            <div className="work-item__content">
              <span className="work-item__category">FRONTEND DEVELOPMENT</span>

              <h2 className="work-item__title">
                Building interfaces around real workflows.
              </h2>

              <p className="work-item__description">
                Designed and developed responsive interfaces for the IDEC
                platform, turning complex requirements into clear, structured
                user flows.
              </p>

              <div className="work-item__tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>React</span>
              </div>
            </div>
          </article>

          <article className="work-item">
            <div className="work-item__number">02</div>

            <div className="work-item__content">
              <span className="work-item__category">API INTEGRATION</span>

              <h2 className="work-item__title">
                Connecting the interface to the system behind it.
              </h2>

              <p className="work-item__description">
                Integrated frontend interfaces with backend APIs, handling
                application state, asynchronous data, loading states, errors,
                and user interactions.
              </p>

              <div className="work-item__tags">
                <span>REST APIs</span>
                <span>TanStack Query</span>
                <span>Async State</span>
              </div>
            </div>
          </article>

          <article className="work-item">
            <div className="work-item__number">03</div>

            <div className="work-item__content">
              <span className="work-item__category">PERFORMANCE</span>

              <h2 className="work-item__title">
                Making the application ask for less.
              </h2>

              <p className="work-item__description">
                Identified a role-dependent page making three separate API
                requests and reworked the data-fetching logic so only the
                required endpoint was requested.
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

      {/*==================== APPROACH 05 ====================*/}
      <section className="approach">
        <div className="approach__header">
          <div className="approach__label">
            <span>05</span>
            <span>HOW I WORK</span>
          </div>

          <p className="approach__intro">
            Good frontend work isn't just about making a screen look right. It's
            about understanding the problem behind it.
          </p>
        </div>

        <div className="approach__grid">
          <article className="approach-card">
            <span className="approach-card__number">01</span>

            <div className="approach-card__content">
              <span className="approach-card__eyebrow">UNDERSTAND</span>

              <h2>Start with the problem.</h2>

              <p>
                I first try to understand what the user is trying to accomplish,
                how the existing workflow works, and where the complexity
                actually comes from.
              </p>
            </div>
          </article>

          <article className="approach-card">
            <span className="approach-card__number">02</span>

            <div className="approach-card__content">
              <span className="approach-card__eyebrow">BUILD</span>

              <h2>Turn complexity into structure.</h2>

              <p>
                I break the problem into smaller pieces and build interfaces
                that make the next action obvious, while keeping the underlying
                code reusable and maintainable.
              </p>
            </div>
          </article>

          <article className="approach-card">
            <span className="approach-card__number">03</span>

            <div className="approach-card__content">
              <span className="approach-card__eyebrow">IMPROVE</span>

              <h2>Don't stop at "it works."</h2>

              <p>
                I use debugging tools, network inspection, and real usage
                patterns to find unnecessary requests, confusing flows, and
                areas where the experience can be better.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/*==================== PROJECT TRANSITION 06 ====================*/}
      <div className="project-chapter project-chapter--imep">
        <section className="project-transition">
          <div className="project-transition__label">
            <span>06</span>
            <span>ANOTHER PROJECT</span>
          </div>

          <div className="project-transition__content">
            <p>
              The problems change.
              <span>The approach evolves!</span>
            </p>
          </div>
        </section>

        {/*==================== IMEP / M&E 07 ====================*/}
        <section className="work work--dark" id="m-and-e">
          <div className="work__header">
            <div className="work__label">
              <span>07</span>
              <span>SELECTED WORK</span>
            </div>

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

            {/* <div className="project__visual project__visual--imep">
              <div className="project__image">
                <img
                  src="/assets/img/IMEP.png"
                  alt="IMEP Monitoring and Evaluation platform"
                />
              </div>
            </div> */}

            <div className="project__info">
              <div className="project__number">02</div>

              <div className="project__details">
                <p className="project__type">ENTERPRISE WEB APPLICATION</p>

                <h2 className="project__title">IMEP</h2>

                <p className="project__description">
                  A role-based monitoring and evaluation platform designed to
                  manage inspections, assignments, reporting, reviews, and
                  programme decisions.
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

        {/*==================== ROLE SYSTEM 08 ====================*/}
        <section className="role-system">
          <div className="role-system__header">
            <div className="role-system__label">
              <span>08</span>
              <span>THE WORKFLOW</span>
            </div>

            <p className="role-system__intro">
              One platform. Different responsibilities. Each role moves the same
              process forward.
            </p>
          </div>

          <div className="role-system__headline">
            <h2>
              ONE SYSTEM.
              <span>MULTIPLE ROLES.</span>
            </h2>
          </div>

          <div className="role-system__flow">
            {/* OFFICER */}
            <article className="role-card">
              <div className="role-card__top">
                <span>01</span>
                <span>FIELD OFFICER</span>
              </div>

              <div className="role-card__body">
                <div className="role-card__icon">01</div>

                <h3>Inspect & Report</h3>

                <p>
                  Companies are assigned to officers who carry out inspections,
                  capture evidence, and submit reports through the platform.
                </p>
              </div>

              <div className="role-card__actions">
                <span>ASSIGN</span>
                <span>INSPECT</span>
                <span>SUBMIT</span>
              </div>
            </article>

            <div className="role-system__connector">
              <span>→</span>
            </div>

            {/* DIRECTOR */}
            <article className="role-card">
              <div className="role-card__top">
                <span>02</span>
                <span>DIRECTOR</span>
              </div>

              <div className="role-card__body">
                <div className="role-card__icon">02</div>

                <h3>Review & Query</h3>

                <p>
                  Submitted reports move to the director for review, where
                  reports can be approved or returned for clarification.
                </p>
              </div>

              <div className="role-card__actions">
                <span>REVIEW</span>
                <span>QUERY</span>
                <span>APPROVE</span>
              </div>
            </article>

            <div className="role-system__connector">
              <span>→</span>
            </div>

            {/* PERMANENT SECRETARY */}
            <article className="role-card">
              <div className="role-card__top">
                <span>03</span>
                <span>PERMANENT SECRETARY</span>
              </div>

              <div className="role-card__body">
                <div className="role-card__icon">03</div>

                <h3>Adjudicate & Decide</h3>

                <p>
                  Reviewed reports reach the Permanent Secretary, who makes the
                  final programme decision.
                </p>
              </div>

              <div className="role-card__actions">
                <span>REVIEW</span>
                <span>ADJUDICATE</span>
                <span>DECIDE</span>
              </div>
            </article>
          </div>
        </section>
      </div>

      {/*==================== ABOUT / EXPERIENCE 09 ====================*/}
      <section className="about" id="about">
        <div className="about__header">
          <div className="about__label">
            <span>09</span>
            <span>ABOUT / EXPERIENCE</span>
          </div>

          <p className="about__intro">
            A frontend engineer interested in building useful interfaces,
            understanding the systems behind them, and continuously getting
            better at the craft.
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
                  applications that sit on top of real business processes —
                  where users, data, APIs, permissions, and workflows all have
                  to work together.
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
                  application state, role-based flows, data fetching, and
                  reusable components to make the frontend fit the system around
                  it.
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
                  explore implementation options, debug, and review ideas. I
                  still make the decisions, understand the code, and validate
                  the result.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/*==================== CONTACT 10 ====================*/}
      <section className="contact" id="contact">
        <div className="contact__header">
          <div className="contact__label">
            <span>10</span>
            <span>CONTACT</span>
          </div>

          <span className="contact__location">ABUJA, NIGERIA</span>
        </div>

        <div className="contact__content">
          <div className="contact__headline">
            <h2>
              LET'S BUILD
              <span>SOMETHING USEFUL.</span>
            </h2>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-label">EMAIL</span>
              <a href="mailto:almostdayor@gmail.com"> almostdayor@gmail.com </a>
            </div>

            <div className="contact__detail">
              <a
                href="https://wa.me/2347065639211"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ↗
              </a>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-label">LINKEDIN</span>
              <a
                href="https://linkedin.com/in/dekzyd"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-label">GITHUB</span>
              <a
                href="https://github.com/dekzyd"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github ↗
              </a>
            </div>
          </div>
        </div>

        <div className="contact__footer">
          <span>AVAILABLE FOR OPPORTUNITIES</span>

          <a href="mailto:almostdayor@gmail.com" className="contact__cta">
            GET IN TOUCH
            <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
