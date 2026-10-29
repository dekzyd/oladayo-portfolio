import SectionLabel from "./SectionLabel";

export default function Intro() {
  return (
    <section className="intro" id="about-intro">
      <SectionLabel number="01" label="WHAT I DO" className="intro__label" />

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
  );
}
