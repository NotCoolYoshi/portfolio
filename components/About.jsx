export default function About() {
  return (
    <div className="sec" id="about">
      <div className="about-grid">
        <div className="about-sticky fi">
          <div className="sec-tag">About</div>
          <h2 className="about-title">Who<br />I am.</h2>
          <p className="about-sub-tag">Mathematician &amp; Musician</p>
        </div>
        <div className="about-body fi" style={{ transitionDelay: "0.12s" }}>
          <p>
            I am a <strong>pianist and mathematician</strong> who believes these disciplines share the same soul:
            a structured language of pure abstraction that — practiced deeply enough — produces something transcendent.
          </p>
          <p>
            My mathematical education includes <strong>Real Analysis taken through the Stanford ULO Mathematics and
            Physics program</strong>, and I am attending <em>SUMAC (Stanford University Mathematics Camp)</em> this
            summer. My independent research in NLP-based economic nowcasting has been published as a pre-print on SSRN.
          </p>
          <p>
            As <strong>President of Music of the Youth</strong>, I lead an organization dedicated to bringing classical
            music to young audiences and creating performance opportunities for emerging musicians. The same discipline
            that drives my piano practice drives my mathematics — sustained focus, pattern recognition, and an
            uncompromising commitment to getting it right.
          </p>
          <p>
            Whether I am on stage performing or working through a proof, the experience is the same:{" "}
            <strong>you find the structure underneath, and everything clarifies</strong>. I want to help my students
            find that same clarity.
          </p>
        </div>
      </div>
    </div>
  );
}
