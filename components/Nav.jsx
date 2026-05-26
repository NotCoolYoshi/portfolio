"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <div className="nav-logo-dot" />
        SD
      </Link>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#music">Music</a></li>
        <li><a href="#tutoring">Tutoring</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get in touch &rarr;</a>
    </nav>
  );
}
