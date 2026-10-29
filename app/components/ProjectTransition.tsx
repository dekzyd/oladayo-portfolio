import SectionLabel from "./SectionLabel";

export default function ProjectTransition() {
  return (
    <section className="project-transition">
      <SectionLabel
        number="05"
        label="ANOTHER PROJECT"
        className="project-transition__label"
      />

      <div className="project-transition__content">
        <p>
          The problems change.
          <span>The approach evolves!</span>
        </p>
      </div>
    </section>
  );
}
