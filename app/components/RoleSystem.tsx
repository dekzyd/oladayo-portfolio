import SectionLabel from "./SectionLabel";
import React from "react";

const roles = [
  {
    number: "01",
    title: "FIELD OFFICER",
    heading: "Inspect & Report",
    description:
      "Companies are assigned to officers who carry out inspections, capture evidence, and submit reports through the platform.",
    actions: ["ASSIGN", "INSPECT", "SUBMIT"],
  },
  {
    number: "02",
    title: "DIRECTOR",
    heading: "Review & Query",
    description:
      "Submitted reports move to the director for review, where reports can be approved or returned for clarification.",
    actions: ["REVIEW", "QUERY", "APPROVE"],
  },
  {
    number: "03",
    title: "PERMANENT SECRETARY",
    heading: "Adjudicate & Decide",
    description:
      "Reviewed reports reach the Permanent Secretary, who makes the final programme decision.",
    actions: ["REVIEW", "ADJUDICATE", "DECIDE"],
  },
];

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
        {roles.map((role, index) => (
          <React.Fragment key={role.number}>
            <article className="role-card rounded-lg">
              <div className="role-card__top">
                <span>{role.title}</span>
              </div>

              <div className="role-card__body">
                <h3>{role.heading}</h3>

                <p>{role.description}</p>
              </div>

              <div className="role-card__actions">
                {role.actions.map((action) => (
                  <span key={action}>{action}</span>
                ))}
              </div>
            </article>

            {index < roles.length - 1 && (
              <div className="role-system__connector">
                <span>→</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
