import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Tutoring from "@/components/Tutoring";
import Contact from "@/components/Contact";
import ClientInit from "@/components/ClientInit";

export default function Home() {
  return (
    <>
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
        <span>© 2026 Sean Dai · All rights reserved</span>
        <span>Mathematics · Music · Research</span>
      </footer>
    </>
  );
}
