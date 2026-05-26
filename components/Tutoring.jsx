export default function Tutoring() {
  const subjects = [
    { n: "01", name: "Algebra & Pre-Calculus", desc: "Functions, polynomials, trigonometry" },
    { n: "02", name: "Calculus AB & BC", desc: "Limits, derivatives, integrals, series" },
    { n: "03", name: "Elementary Analysis", desc: "ε-δ definitions, sequences, rigor" },
    { n: "04", name: "Data Analysis", desc: "Applied computational mathematics" },
    { n: "05", name: "Math Camp Preparation", desc: "Application strategy, proof writing" },
    { n: "06", name: "Real-World Projects", desc: "Finance, data science, applied research" },
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
          &ldquo;I do not want to teach students how to score well on a test. I want to show them the interior of
          mathematics — where the real questions live, where the patterns become strange and beautiful, and where a
          problem you cannot yet solve becomes something you genuinely want to pursue.&rdquo;
        </p>
      </div>

      <div className="approach-grid fi" style={{ transitionDelay: "0.1s" }}>
        <div className="approach">
          <div className="approach-icon">&infin;</div>
          <h4>Deep Understanding</h4>
          <p>Build genuine mathematical intuition, not rote memorization. Learn to think like a mathematician — to ask why, not just how.</p>
        </div>
        <div className="approach">
          <div className="approach-icon">&#x2B21;</div>
          <h4>Real-World Projects</h4>
          <p>Apply mathematics to finance, physics, data science, and NLP through guided independent projects with real scope and ambition.</p>
        </div>
        <div className="approach">
          <div className="approach-icon">&#9678;</div>
          <h4>Math Camp Guidance</h4>
          <p>Personal advice on applying to PROMYS, Ross, Canada/USA Mathcamp, MathILy, PRIMES, and other competitive programs.</p>
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

      <div className="pricing-box fi" style={{ transitionDelay: "0.1s" }}>
        <h3>Pricing &amp; Accessibility</h3>
        <p>
          I believe <strong>a student&rsquo;s financial situation should never determine the quality of their
          mathematical education</strong>. Pricing is entirely negotiable and set on a case-by-case basis according
          to individual financial need — no fixed rates, no barriers. My goal is to give every student who wants to
          go deeper in mathematics the genuine opportunity to do so. Please reach out openly and we will find an
          arrangement that works for you.
        </p>
      </div>
    </div>
  );
}
