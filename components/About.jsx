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
            I am a <strong>high school student with a passion for music and mathematics</strong>.
            While these two disciplines may seem vastly different, I see them with the same thoughts:
            structured languages of abstraction that produce transcending experiences.
          </p>
          <p>
            My mathematical education includes <strong>Real Analysis taken through the Stanford ULO
            Mathematics and Physics program</strong>, and I am attending{" "}
            <em>SUMAC (Stanford University Mathematics Camp)</em> this summer.
            I have used my experiences in these formal settings for independent research and projects
            within various fields. My independent research in NLP-based economic nowcasting has been
            published as a pre-print on SSRN.
          </p>
          <p>
            As <strong>President of Music of the Youth</strong>, I lead an organization dedicated to
            bringing classical music to senior homes through young musicians of various instruments,
            schools, and age. Like math, I tackle music through sustained focus, pattern recognition,
            and a passion for learning.
          </p>
          <p>
            Whether I am on stage performing or studying proofs, the captivating experience is the
            same: <strong>you find structure underneath, and everything is clarified</strong>. I want
            to help foster the same clarity for others and learn more of such structure myself
            through them.
          </p>
        </div>
      </div>
    </div>
  );
}
