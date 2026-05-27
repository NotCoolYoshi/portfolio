export default function Tutoring() {
  const subjects = [
    { n: "01", name: "Algebra & Pre-Calculus", desc: "Functions, polynomials, trigonometry" },
    { n: "02", name: "Calculus AB & BC", desc: "Limits, derivatives, integrals, series" },
    { n: "03", name: "Elementary Analysis & Intro to Proofs", desc: "ε-δ definitions, sequences, proof writing, rigor" },
    { n: "04", name: "Data Analysis", desc: "Applied computational mathematics" },
    { n: "05", name: "Math Program Preparation", desc: "Application strategy, proof writing" },
    { n: "06", name: "Multi-disciplinary, Applied Research", desc: "Finance, data science, NLP, applied mathematics" },
  ];
  const creds = [
    { n: "01", name: "Real Analysis — Stanford ULO Math & Physics Program", desc: "Completed university-level Real Analysis through Stanford University's undergraduate online program", tag: "Stanford" },
    { n: "02", name: "SUMAC — Stanford University Mathematics Camp", desc: "Attending SUMAC this summer — a selective residential mathematics program at Stanford", tag: "Summer 2026" },
    { n: "03", name: "Pre-print: NLP CPI Nowcasting — SSRN", desc: "Independent research on CPI nowcasting using natural language processing and mathematical modeling, published on the Social Science Research Network", tag: "Research" },
  ];
  return (
    <div className="sec" id="tutoring">
      <div className="sec-tag fi">Mathematics Tutoring</div>
      <h2 className="sec-head fi" style={{ transitionDelay: "0.1s" }}>Beyond<br />the exam.</h2>

      <div className="tutor-intro fi" style={{ transitionDelay: "0.12s" }}>
        <p>
          I am happy to share my knowledge across a wide range of topics — as many great teachers have
          done for me. My tutoring is primarily aimed at <strong>high school and late middle school
          students</strong> preparing for advanced coursework, competitions, or math programs. That said,
          I am more than happy to work with any motivated student at any level. I genuinely believe that
          introducing applied mathematical thinking, computational methods, and the fundamentals of
          analysis <strong>early</strong> — even at the elementary level — is both possible and
          tremendously beneficial for students with a curiosity for these fields.
        </p>
      </div>

      <div className="subj-grid fi" style={{ transitionDelay: "0.14s" }}>
        {subjects.map((s) => (
          <div className="subj" key={s.n}>
            <div className="snum">{s.n}</div>
            <div className="sname">{s.name}</div>
            <div className="sdesc">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="philosophy fi">
        <p>
          &ldquo;I do not want to teach students how to score well on a test. I want to show them the
          interior of mathematics &mdash; where the real questions live, where the patterns become strange
          and beautiful, and where a problem you cannot yet solve becomes something you genuinely want
          to pursue.&rdquo;
        </p>
      </div>

      <div className="approach-grid fi" style={{ transitionDelay: "0.1s" }}>
        <div className="approach">
          <div className="approach-icon">&infin;</div>
          <h4>Deep Understanding</h4>
          <p>Build genuine mathematical intuition, not rote memorization. Learn to think like a mathematician &mdash; to ask why, not just how.</p>
        </div>
        <div className="approach">
          <div className="approach-icon">&#x2B21;</div>
          <h4>Real-World Projects</h4>
          <p>Apply mathematics to finance, physics, data science, and NLP through guided independent projects with real scope and ambition.</p>
        </div>
        <div className="approach">
          <div className="approach-icon">&#9678;</div>
          <h4>Math Program Guidance</h4>
          <p>My experiences in math program applications and how to craft your narrative — PROMYS, Ross, Canada/USA Mathcamp, MathILy, PRIMES, and more.</p>
        </div>
      </div>

      <div className="fi" id="research" style={{ transitionDelay: "0.1s" }}>
        <div className="creds-lbl">Credentials &amp; Research</div>
        <div className="cred-list">
          {creds.map((c) => (
            <div className="cred" key={c.n}>
              <div className="cred-n">{c.n}</div>
              <div className="cred-body">
                <div className="cname">{c.name}</div>
                <div className="cdesc">{c.desc}</div>
              </div>
              <span className="cred-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flexibility-box fi" style={{ transitionDelay: "0.1s" }}>
        <div className="sec-tag" style={{ marginBottom: "14px" }}>Flexibility</div>
        <p>
          I am open to both <strong>online and in-person tutoring</strong>. In-person sessions can take
          place at your home or the <strong>Oro Valley Public Library</strong>. While I personally believe
          in-person tutoring offers a more immersive and connected experience, I understand that
          circumstances vary between students and am fully committed to delivering quality teaching
          regardless of format. Please reach out and we can find whatever arrangement works best for you.
        </p>
      </div>

      <div className="pricing-box fi" style={{ transitionDelay: "0.1s" }}>
        <h3>Pricing &amp; Accessibility</h3>
        <p>
          I believe <strong>a student&rsquo;s financial situation should never determine the quality of
          their mathematical education</strong>. Pricing is entirely negotiable and set on a case-by-case
          basis according to individual financial need &mdash; no fixed rates, no barriers. My goal is to
          give every student who wants to go deeper in mathematics the genuine opportunity to do so.
          Please reach out openly and we will find an arrangement that works for you.
        </p>
      </div>
    </div>
  );
}
