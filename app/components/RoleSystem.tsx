import SectionLabel from "./SectionLabel";

export default function RoleSystem() {
  return (
    <section className="role-system">
      <div className="role-system__header">
        <SectionLabel
          number="07"
          label="THE WORKFLOW"
          className="role-system__label"
        />

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
        {/* FIELD OFFICER */}
        <article className="role-card">
          <div className="role-card__top">
            <span>01</span>
            <span>FIELD OFFICER</span>
          </div>

          <div className="role-card__body">
            <div className="role-card__icon">01</div>

            <h3>Inspect &amp; Report</h3>

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

            <h3>Review &amp; Query</h3>

            <p>
              Submitted reports move to the director for review, where reports
              can be approved or returned for clarification.
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

            <h3>Adjudicate &amp; Decide</h3>

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
  );
}
