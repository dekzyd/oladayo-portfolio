import HeroParticles from "@/app/components/hero-particles";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <HeroParticles />

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
  );
}
