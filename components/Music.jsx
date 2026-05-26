export default function Music() {
  return (
    <div className="sec" id="music">
      <div className="sec-tag fi">Music</div>
      <h2 className="sec-head fi" style={{ transitionDelay: "0.1s" }}>Piano &amp;<br />Performance.</h2>
      <div className="music-grid">
        <div className="music-body fi" style={{ transitionDelay: "0.12s" }}>
          <div className="badge-role">&#9834; &nbsp; President &middot; Music of the Youth</div>
          <p>
            I have been a <strong>classically trained pianist</strong> since early childhood, building a performance
            career grounded in technical precision, musical sensitivity, and a deep engagement with the Western
            classical tradition.
          </p>
          <p>
            As <strong>President of Music of the Youth</strong>, I lead an organization that creates performance
            platforms and outreach programs for young musicians, bringing classical music to new audiences and
            inspiring the next generation of artists.
          </p>
          <p>
            The parallels between mathematics and music are, to me, endlessly illuminating. Both are structured
            systems of pure abstraction. Both reward the practitioner who goes beneath the surface and seeks the
            underlying logic. A Bach fugue and a beautiful proof share the same economy: nothing wasted, everything
            in its right place.
          </p>
          <p>
            Performance has taught me the discipline of sustained practice, the courage of public commitment, and
            the art of communicating complex structure to a live audience — skills that transfer directly to teaching.
          </p>
        </div>
        <div className="fi" style={{ transitionDelay: "0.18s" }}>
          <div className="side-card">
            <div className="side-card-head">Career Highlights</div>
            <div className="stat-row"><div className="stat-lbl">Role</div><div className="stat-val">President, Music of the Youth</div></div>
            <div className="stat-row"><div className="stat-lbl">Instrument</div><div className="stat-val">Piano — Classical Repertoire</div></div>
            <div className="stat-row"><div className="stat-lbl">Focus</div><div className="stat-val">Performance, Youth Outreach, Arts Leadership</div></div>
            <div className="stat-row"><div className="stat-lbl">Philosophy</div><div className="stat-val">Music as rigorous thought and emotional truth</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
