import { motion } from 'motion/react';
import { Video, BookOpen, Map, Coffee, Library, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Resources() {
  const resources = [
    { icon: Video, title: "Introduction to ISTDP", desc: "A short, accessible video introduction to ISTDP — what it is, how it works, and what to expect.", link: "Watch Video" },
    { icon: BookOpen, title: "Understanding Anxiety", desc: "An article exploring the ISTDP view of anxiety — why it develops, what it protects us from, and how therapy helps.", link: "Read Article" },
    { icon: Map, title: "The Emotional Map", desc: "A guide to the ISTDP triangle of conflict and how it helps therapists and clients understand what's happening.", link: "Download Guide" },
    { icon: Coffee, title: "Between Sessions", desc: "Simple practices to support your emotional wellbeing between therapy sessions — from grounding to journaling.", link: "Explore" },
    { icon: Library, title: "Recommended Reading", desc: "A curated booklist on ISTDP, emotional health, and personal growth — for those who want to understand the theory.", link: "View Booklist" },
    { icon: HeartHandshake, title: "Crisis Support", desc: "If you're in distress right now, these Australian services are available 24/7. Please reach out.", link: "Lifeline: 13 11 14", href: "https://www.lifeline.org.au" }
  ];

  return (
    <section id="resources" className="py-24 bg-[#d6eeee]">
      <div className="max-w-[1100px] mx-auto px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.14em] uppercase text-[#4a9e9e] font-medium mb-4">
            <span className="w-6 h-px bg-[#4a9e9e]"></span>
            Resources
            <span className="w-6 h-px bg-[#4a9e9e]"></span>
          </div>
          <h2 className="section-title mb-6">
            Helpful <em>reading & tools</em>
          </h2>
          <p className="text-[#5a6a6a] font-light leading-relaxed">
            A curated collection of articles, videos, and tools to help you understand ISTDP, emotional health, and the journey of therapy — wherever you are in the process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#2a6a6a]/10 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(42,106,106,0.12)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2d6a6a] to-[#4a9e9e]"></div>
              
              <div className="w-11 h-11 bg-[#d6eeee] rounded-xl flex items-center justify-center text-[#2d6a6a] mb-5">
                <res.icon size={22} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-xl text-[#1a3a3a] mb-2.5">{res.title}</h3>
              <p className="text-[#5a6a6a] text-sm font-light leading-relaxed mb-5">
                {res.desc}
              </p>
              
              <a 
                href={res.href || "#"} 
                className="text-[#2d6a6a] text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
              >
                {res.link} <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
