import { motion } from 'motion/react';

export default function ISTDP() {
  const cards = [
    {
      title: "Who is ISTDP for?",
      text: "ISTDP is effective for anxiety, depression, trauma, chronic pain, relationship difficulties, grief, low self-esteem, and many presentations where other therapies haven't brought lasting relief."
    },
    {
      title: "How is it different?",
      text: "Rather than talking about emotions, ISTDP helps you experience them — safely and deeply. This experiential processing is what creates lasting neurological and psychological change, not just insight."
    },
    {
      title: "How many sessions?",
      text: "ISTDP is designed to be efficient. Some people experience meaningful change in just a few sessions; others may benefit from longer-term work. We'll discuss this together in your initial consultation."
    },
    {
      title: "Is there research?",
      text: "Yes. ISTDP has a strong evidence base across multiple clinical trials, demonstrating effectiveness across a wide range of presentations, often with outcomes exceeding traditional CBT approaches."
    }
  ];

  return (
    <section id="istdp" className="py-24 bg-[#1a3a3a] text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute -top-1/2 -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(74,158,158,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#a8d4d4] font-medium mb-4">
              <span className="w-6 h-px bg-[#a8d4d4]"></span>
              The Approach
            </div>
            
            <h2 className="section-title text-white mb-6">
              What is <em>ISTDP?</em>
            </h2>
            
            <div className="space-y-5 text-white/70 font-light leading-relaxed text-lg mb-8">
              <p>
                Intensive Short-Term Dynamic Psychotherapy is a highly researched, active form of psychotherapy developed by psychiatrist Habib Davanloo. Unlike traditional talk therapy, ISTDP goes beyond insight — it creates real, experiential change at an emotional level.
              </p>
              <p>
                Most of us carry unconscious emotional baggage — anxiety, depression, relationship patterns — that developed as ways to cope with difficult experiences. ISTDP gently brings these buried feelings to the surface, where they can finally be processed and released.
              </p>
              <p>
                The result isn't just feeling better. It's understanding yourself more deeply, and being freed from patterns that may have held you back for years.
              </p>
            </div>

            <a href="#contact" className="inline-block bg-[#2d6a6a] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#4a9e9e] transition-colors">
              Start Your Journey
            </a>
          </motion.div>

          <motion.div 
            className="grid gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {cards.map((card, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                <h3 className="font-serif text-xl text-[#a8d4d4] mb-2">{card.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {card.text}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
