import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          {process.env.NEXT_PUBLIC_TESTIMONIALS_ENABLED === 'true' && <Testimonials />}
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
