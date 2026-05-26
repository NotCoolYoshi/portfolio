import ParticleSphere from "./ParticleSphere";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Left column */}
        <div className="fi">
          <div className="hero-eyebrow">
            <div className="blink-dot" />
            Available for tutoring &middot; Tucson, AZ
          </div>
          <p className="hero-name">Hi, I&rsquo;m Sean Dai &mdash;</p>
          <h1 className="hero-title">
            <em>Mathematics.</em><br />
            <span className="dim">Music.</span><br />
            <em>Mastered.</em>
          </h1>
          <p className="hero-intro">
            A <strong>classically trained pianist</strong> and{" "}
            <strong>mathematics researcher</strong> who believes the two disciplines share the same soul.
            I tutor students not to pass exams, but to discover a genuine love for mathematical thinking.
          </p>
          <div className="hero-tags">
            <span>Piano Performance</span>
            <span>Mathematics</span>
            <span>Research</span>
          </div>
          <div className="hero-actions">
            <a href="#tutoring" className="btn">Explore tutoring &rarr;</a>
            <a href="#contact" className="btn btn-a">Get in touch &rarr;</a>
          </div>
          <div className="hero-foot">Matrix Engine V1 &middot; 2026</div>
        </div>

        {/* Right column — interactive sphere */}
        <div className="fi" style={{ transitionDelay: "0.18s" }}>
          <ParticleSphere />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <svg className="scroll-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1L6 7L11 1" stroke="rgba(170,170,170,0.38)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
