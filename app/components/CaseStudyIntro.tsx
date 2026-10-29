import SectionLabel from "./SectionLabel";
export default function CaseStudyIntro() {
  return (
    <section className="case-study-intro" id="idec-case-study">
      <SectionLabel
        number="03"
        label="MY ROLE"
        className="case-study-intro__label"
      />

      <div className="case-study-intro__content">
        <p className="case-study-intro__statement">
          Turning a complex government workflow into{" "}
          <span>clear, usable interfaces.</span>
        </p>

        <div className="case-study-intro__details">
          <p>
            I worked on the frontend of IDEC, translating business requirements
            and backend systems into interfaces that users can actually navigate
            and understand.
          </p>

          <p>
            My work involved building reusable UI, connecting the application to
            APIs, handling different user flows, and improving the overall
            experience across the platform.
          </p>
        </div>
      </div>
    </section>
  );
}
