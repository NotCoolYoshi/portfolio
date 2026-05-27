export default function Music() {
  return (
    <div className="sec" id="music">
      <div className="sec-tag fi">Music</div>
      <h2 className="sec-head fi" style={{ transitionDelay: "0.1s" }}>Piano &amp;<br />Performance.</h2>
      <div className="music-grid">

        <div className="music-body fi" style={{ transitionDelay: "0.12s" }}>
          <div className="badge-role">&#9834; &nbsp; President &middot; Music of the Youth</div>
          <p>
            I have been a <strong>classically trained pianist</strong> since early childhood, creating
            a journey grounded in technical precision, musical sensitivity, and deep engagement with
            music of many cultures. However, I also find great enjoyment in non-formal creativity.
          </p>
          <p>
            As <strong>President of Music of the Youth</strong>, I lead an organization that creates
            performance opportunities for young musicians, bringing music of all genres to new audiences.
          </p>
          <p>
            The parallels between mathematics and music are, to me, endlessly illuminating. Both are
            structured systems that manifest from pure abstraction. A Bach fugue or a Scriabin sonata and
            an elegant proof or monstrous integral share the same economy: nothing wasted, everything in
            its right place.
          </p>
          <p>
            Performance has taught me the discipline of sustained practice through failure, the courage of
            public commitment, and the art of communicating complex structure to a live audience. I hope to
            transfer these skills directly to teaching and sharing my knowledge with others in the context
            of applied mathematics.
          </p>
        </div>

        <div className="fi" style={{ transitionDelay: "0.18s" }}>
          <div className="side-card">
            <div className="side-card-head">Journey Milestones</div>

            <div className="stat-row">
              <div className="stat-lbl">Role</div>
              <div className="stat-val">President, Music of the Youth</div>
            </div>
            <div className="stat-row">
              <div className="stat-lbl">Instrument</div>
              <div className="stat-val">Piano &mdash; Classical &amp; Multi-cultural Repertoire</div>
            </div>
            <div className="stat-row">
              <div className="stat-lbl">Awards</div>
              <div className="stat-val">Top 3 prizes in various local, state, and national competitions</div>
            </div>

            <div className="stat-row">
              <div className="stat-lbl">Performed</div>
              <div className="stat-val">
                <ul className="piece-list">
                  <li>Beethoven Sonata Op. 109</li>
                  <li>Prokofiev Piano Concerto No. 3</li>
                  <li>Ravel Miroirs — Une Barque Sur L&rsquo;Ocean &amp; Alborada del Gracioso</li>
                  <li>Schumann Fantasy</li>
                </ul>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat-lbl">Currently Learning</div>
              <div className="stat-val">
                <ul className="piece-list">
                  <li>Liszt Ballade No. 2</li>
                  <li>Ravel/Maltempo — Piano transcription of Daphnis et Chlo&eacute;, Suite No. 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
