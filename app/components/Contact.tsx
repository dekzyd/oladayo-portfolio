import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__header">
        <SectionLabel number="10" label="CONTACT" className="contact__label" />

        <span className="contact__location">ABUJA, NIGERIA</span>
      </div>

      <div className="contact__content">
        <div className="contact__headline">
          <h2>
            LET&apos;S BUILD
            <span>SOMETHING USEFUL.</span>
          </h2>
        </div>

        <div className="contact__details">
          <div className="contact__detail">
            <span className="contact__detail-label">EMAIL</span>
            <a href="mailto:almostdayor@gmail.com">almostdayor@gmail.com</a>
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
  );
}
