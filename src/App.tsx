import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import ISTDP from './components/ISTDP';
import FAQ from './components/FAQ';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-[#2a2a2a] bg-[#f9f6f1] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <ISTDP />
      <FAQ />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
}
