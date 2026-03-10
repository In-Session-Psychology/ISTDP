import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#d6eeee] via-[#a8d4d4] to-[#4a9e9e] rounded-[2px_60px_2px_60px] relative overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?auto=format&fit=crop&w=800&q=80" 
                alt="Calm ocean waves representing emotional depth" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#2d6a6a] text-white w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-xl z-10">
              <span className="font-serif text-3xl leading-none">10+</span>
              <span className="text-[0.6rem] tracking-widest uppercase opacity-80 mt-1 leading-tight">Years<br/>Experience</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#4a9e9e] font-medium mb-4">
              <span className="w-6 h-px bg-[#4a9e9e]"></span>
              About the Practice
            </div>
            
            <h2 className="section-title mb-6">
              A warm, evidence-based approach to <em>lasting change</em>
            </h2>
            
            <div className="space-y-5 text-[#5a6a6a] font-light leading-relaxed text-lg">
              <p>
                At In Session Clinical Psychology, based on the Sunshine Coast, we specialise in Intensive Short-Term Dynamic Psychotherapy (ISTDP). We chose this approach because of its power to create genuine, lasting change — not just symptom management.
              </p>
              <p>
                We know how exhausting it can be to feel stuck — to have tried therapy before without finding the relief you were hoping for. ISTDP is different. It's active, collaborative, and often brings meaningful results far more quickly than traditional approaches.
              </p>
              <p>
                Our practice is a safe, non-judgmental space where we'll work together with curiosity and compassion — gently uncovering what's beneath the surface so you can finally move forward.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {['AHPRA Registered', 'ISTDP Certified', 'Masters of Psychology', 'IEDTA Member', 'Trauma-Informed'].map((tag) => (
                <span key={tag} className="bg-white border border-[#a8d4d4] text-[#2d6a6a] text-xs font-medium px-3.5 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
