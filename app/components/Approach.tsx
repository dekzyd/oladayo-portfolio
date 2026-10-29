import SectionLabel from "./SectionLabel";

export default function Approach() {
  return (
    <section className="approach">
      <div className="approach__header">
        <SectionLabel
          number="08"
          label="HOW I WORK"
          className="approach__label"
        />

        <p className="approach__intro">
          Good frontend work isn&apos;t just about making a screen look right.
          It&apos;s about understanding the problem behind it.
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
              how the existing workflow works, and where the complexity actually
              comes from.
            </p>
          </div>
        </article>

        <article className="approach-card">
          <span className="approach-card__number">02</span>

          <div className="approach-card__content">
            <span className="approach-card__eyebrow">BUILD</span>

            <h2>Turn complexity into structure.</h2>

            <p>
              I break the problem into smaller pieces and build interfaces that
              make the next action obvious, while keeping the underlying code
              reusable and maintainable.
            </p>
          </div>
        </article>

        <article className="approach-card">
          <span className="approach-card__number">03</span>

          <div className="approach-card__content">
            <span className="approach-card__eyebrow">IMPROVE</span>

            <h2>Don&apos;t stop at &quot;it works.&quot;</h2>

            <p>
              I use debugging tools, network inspection, and real usage patterns
              to find unnecessary requests, confusing flows, and areas where the
              experience can be better.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
