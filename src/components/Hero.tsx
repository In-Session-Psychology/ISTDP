import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#4a9e9e] font-medium mb-7"
        >
          <span className="w-8 h-px bg-[#4a9e9e] block"></span>
          Sunshine Coast, Queensland
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-h1 mb-6"
        >
          Real change,<br />
          from the <em>inside out</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed text-[#5a6a6a] max-w-md mb-10 font-light"
        >
          Specialising in Intensive Short-Term Dynamic Psychotherapy (ISTDP) — a research-backed approach that gets to the root of emotional pain, not just the surface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#contact"
            className="bg-[#2d6a6a] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#1a3a3a] hover:-translate-y-px hover:shadow-lg transition-all duration-200"
          >
            Book a Free Consultation
          </a>
          <a
            href="#istdp"
            className="text-[#2d6a6a] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200"
          >
            What is ISTDP? <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Right Visual */}
      <div className="relative h-[400px] md:h-auto overflow-hidden md:-ml-[28px] md:w-[calc(100%+28px)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d6a6a] via-[#4a9e9e] to-[#a8d4d4]"></div>
        
        {/* Animated Circles SVG Background */}
        <div className="absolute inset-0 opacity-20 animate-slow-rotate" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='600' height='800' viewBox='0 0 600 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='white' stroke-width='1'%3E%3Ccircle cx='300' cy='400' r='100'/%3E%3Ccircle cx='300' cy='400' r='150'/%3E%3Ccircle cx='300' cy='400' r='200'/%3E%3Ccircle cx='300' cy='400' r='250'/%3E%3Ccircle cx='300' cy='400' r='300'/%3E%3Ccircle cx='300' cy='400' r='350'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
             }}
        ></div>

        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#1a3a3a]/40 to-transparent"></div>

        <div className="absolute bottom-12 left-12 right-12 z-10 text-white">
          <blockquote className="font-serif text-2xl italic font-light leading-relaxed mb-2">
            "The goal is not to eliminate emotion,<br />but to free it."
          </blockquote>
          <cite className="text-xs tracking-widest uppercase opacity-70 not-italic">
            — Habib Davanloo, founder of ISTDP
          </cite>
        </div>

        {/* Wave Divider */}
        <svg
          className="absolute left-[-20px] top-0 bottom-0 w-20 h-full z-10 hidden md:block text-[#f9f6f1]"
          viewBox="0 0 80 800"
          preserveAspectRatio="none"
        >
          <path d="M80 0 Q40 200 80 400 Q40 600 80 800 L0 800 L0 0 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
