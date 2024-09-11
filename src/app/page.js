// src/app/page.js
import Hero from '../components/Hero';   // Import your components
import About from '../components/About';
import Projects from '../components/Project';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
