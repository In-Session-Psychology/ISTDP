import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need a referral to see you?",
      a: "No referral is needed to book a session. However, if you'd like to access a Medicare rebate, you'll need a Mental Health Treatment Plan (MHTP) from your GP, which entitles you to rebates on up to 20 sessions per calendar year."
    },
    {
      q: "What are your fees and are there rebates available?",
      a: "Session fees are $[Amount] for a standard 50-minute session. With a valid MHTP, you can claim a Medicare rebate of approximately $[Amount], reducing your out-of-pocket cost. Private health fund rebates may also apply depending on your level of cover."
    },
    {
      q: "Do you offer Telehealth sessions?",
      a: "Yes. I offer both in-person sessions at my Sunshine Coast practice and secure Telehealth sessions via video call. Telehealth is available to clients across Queensland and is eligible for Medicare rebates."
    },
    {
      q: "What can I expect from the first session?",
      a: "The first session is a trial session, where we'll explore what's brought you to therapy, your history, and what you're hoping to change. It's also an opportunity for you to experience ISTDP firsthand and for us to see how we work together. There's no pressure or commitment required."
    },
    {
      q: "Is ISTDP suitable for trauma?",
      a: "Yes — ISTDP has strong evidence for trauma, including complex and developmental trauma. The pacing is always tailored to the individual. We never push into territory faster than you're ready for, and the approach is always adapted to your capacity and window of tolerance."
    },
    {
      q: "What is your cancellation policy?",
      a: "I ask for at least 48 hours notice for cancellations or rescheduling. Late cancellations and missed appointments may incur a fee. I understand that life is unpredictable — if something urgent arises, please contact me as soon as possible."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#f9f6f1]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#4a9e9e] font-medium mb-4">
              <span className="w-6 h-px bg-[#4a9e9e]"></span>
              FAQ
            </div>
            <h2 className="section-title mb-6">
              Your <em>questions,</em> answered
            </h2>
            <p className="text-[#5a6a6a] font-light leading-relaxed mb-8">
              Taking the first step can feel daunting. Here are answers to the questions I hear most often. If something isn't covered here, please reach out — I'm happy to chat.
            </p>
            <a href="#contact" className="bg-[#2d6a6a] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#1a3a3a] transition-colors">
              Ask a Question
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divide-y divide-[#2a6a6a]/15"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="font-serif text-lg md:text-xl text-[#1a3a3a] group-hover:text-[#2d6a6a] transition-colors">
                    {faq.q}
                  </span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#a8d4d4] flex items-center justify-center text-[#4a9e9e] transition-all duration-300 ${openIndex === index ? 'bg-[#2d6a6a] border-[#2d6a6a] text-white rotate-180' : ''}`}>
                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pb-2 text-[#5a6a6a] font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
