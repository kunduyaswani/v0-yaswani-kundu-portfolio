import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Education from '@/components/education';
import Resume from '@/components/resume';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Yaswani Kundu | Python & Full Stack Developer',
  description: 'Portfolio of Yaswani Kundu - Aspiring Python Developer and Full Stack Developer. Turning Ideas Into Real-World Solutions Through Code.',
  keywords: 'Python, Full Stack Developer, Web Developer, Portfolio, Yaswani Kundu',
  openGraph: {
    title: 'Yaswani Kundu | Python & Full Stack Developer',
    description: 'Portfolio of Yaswani Kundu - Aspiring Python Developer and Full Stack Developer.',
    type: 'website',
  },
};

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
