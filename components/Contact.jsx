"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", enquiry: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="sec" id="contact">
      <div className="sec-tag fi">Contact</div>
      <h2 className="sec-head fi" style={{ transitionDelay: "0.1s" }}>Let&rsquo;s connect.</h2>
      <div className="contact-grid">

        <div className="fi">
          <div className="contact-info">
            <h3>Reach me directly</h3>
            <p className="lead">
              Whether you are a student, a parent, or just curious &mdash; I would love to hear from you.
              No obligation, no pressure.
            </p>
            <div className="contact-links">
              <a href="mailto:sean.zhdai@gmail.com" className="contact-link-row">
                <div className="cl-icon">&#9993;</div>
                <div className="cl-body">
                  <div className="cl-type">Email</div>
                  <div className="cl-val">sean.zhdai@gmail.com</div>
                </div>
                <span className="cl-arrow">&rarr;</span>
              </a>
              <a href="tel:+15203046385" className="contact-link-row">
                <div className="cl-icon">&#9742;</div>
                <div className="cl-body">
                  <div className="cl-type">Phone</div>
                  <div className="cl-val">(520) 304 6385</div>
                </div>
                <span className="cl-arrow">&rarr;</span>
              </a>
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6515078"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-row"
              >
                <div className="cl-icon">&part;</div>
                <div className="cl-body">
                  <div className="cl-type">Research &middot; SSRN</div>
                  <div className="cl-val">NLP CPI Nowcasting Paper</div>
                </div>
                <span className="cl-arrow">&rarr;</span>
              </a>
            </div>
            <div className="meta-notes">
              <div className="meta-note"><div className="mn-lbl">Response time</div><div className="mn-val">Within 24 hours &middot; All time zones welcome</div></div>
              <div className="meta-note"><div className="mn-lbl">Tutoring sessions</div><div className="mn-val">Remote &middot; 1-on-1 &middot; Flexible scheduling</div></div>
              <div className="meta-note"><div className="mn-lbl">Pricing</div><div className="mn-val">Needs-based &middot; Always negotiable &middot; No barriers</div></div>
            </div>
          </div>
        </div>

        <div className="fi" style={{ transitionDelay: "0.15s" }}>
          {status === "success" ? (
            <div className="form-success">
              &#10003; &nbsp; Message received.<br />
              <span style={{ fontSize: "13px", color: "rgba(34,197,94,0.7)" }}>
                Sean will be in touch within 24 hours.
              </span>
            </div>
          ) : (
            <>
              <div className="form-head">Or send a message and I&rsquo;ll reply by email.</div>
              {status === "error" && (
                <p style={{ color: "#ff3b30", fontSize: "13px", marginBottom: "16px" }}>
                  Something went wrong. Please email directly at sean.zhdai@gmail.com
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" placeholder="Jane" required value={form.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Smith" required value={form.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="jane@example.com" required value={form.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="enquiry">Enquiry Type</label>
                  <select id="enquiry" name="enquiry" value={form.enquiry} onChange={handleChange}>
                    <option value="">Select a topic&hellip;</option>
                    <option>Math Tutoring</option>
                    <option>AP Chemistry / AP CS A Tutoring</option>
                    <option>Piano &amp; Music Theory Tutoring</option>
                    <option>Applied Research Mentorship</option>
                    <option>Music / Music of the Youth</option>
                    <option>Research Discussion</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell me about yourself and what you're looking for..." required value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-btn" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send message →"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}