import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Music from "../components/Music";
import Tutoring from "../components/Tutoring";
import Contact from "../components/Contact";
import ClientInit from "../components/ClientInit";
import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <ClientInit />
      <Nav />
      <Hero />
      <hr className="sep" />
      <About />
      <hr className="sep" />
      <Music />
      <hr className="sep" />
      <Tutoring />
      <hr className="sep" />
      <Contact />
      <footer>
        <span>&#169; 2026 Sean Dai &middot; All rights reserved</span>
        <span>Mathematics &middot; Music &middot; Research</span>
      </footer>
    </>
  );
}
