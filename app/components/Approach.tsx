import SectionLabel from "./SectionLabel";

const approaches = [
  {
    number: "01",
    eyebrow: "UNDERSTAND",
    heading: "Start with the problem.",
    description:
      "I first try to understand what the user is trying to accomplish, how the existing workflow works, and where the complexity actually comes from.",
  },
  {
    number: "02",
    eyebrow: "BUILD",
    heading: "Turn complexity into structure.",
    description:
      "I break the problem into smaller pieces and build interfaces that make the next action obvious, while keeping the underlying code reusable and maintainable.",
  },
  {
    number: "03",
    eyebrow: "IMPROVE",
    heading: 'Don\'t stop at "it works."',
    description:
      "I use debugging tools, network inspection, and real usage patterns to find unnecessary requests, confusing flows, and areas where the experience can be better.",
  },
];

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
        {approaches.map((approach) => (
          <article className="approach-card" key={approach.number}>
            {/* <span className="approach-card__number">{approach.number}</span> */}

            <div className="approach-card__content">
              <span className="approach-card__eyebrow">{approach.eyebrow}</span>

              <h2>{approach.heading}</h2>

              <p>{approach.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
