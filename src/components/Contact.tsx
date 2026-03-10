import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-[1100px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#4a9e9e] font-medium mb-4">
              <span className="w-6 h-px bg-[#4a9e9e]"></span>
              Get in Touch
            </div>
            
            <h2 className="section-title mb-6">
              Ready to take the <em>first step?</em>
            </h2>
            
            <p className="text-[#5a6a6a] font-light leading-relaxed mb-8">
              Reaching out is often the hardest part. Whether you have questions or you're ready to book, I'd love to hear from you. I offer a free 15-minute phone consultation so you can get a feel for whether we're a good fit — no commitment required.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#d6eeee] rounded-lg flex items-center justify-center text-[#2d6a6a] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-1">Location</strong>
                  <span className="text-[#2a2a2a] font-light">Sunshine Coast, Queensland</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#d6eeee] rounded-lg flex items-center justify-center text-[#2d6a6a] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-1">Phone</strong>
                  <span className="text-[#2a2a2a] font-light">[Your Phone Number]</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#d6eeee] rounded-lg flex items-center justify-center text-[#2d6a6a] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-1">Email</strong>
                  <span className="text-[#2a2a2a] font-light">[your@email.com.au]</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-[#d6eeee] rounded-lg flex items-center justify-center text-[#2d6a6a] flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-1">Hours</strong>
                  <span className="text-[#2a2a2a] font-light">Mon–Fri, 8:30am – 5:30pm</span>
                </div>
              </div>
            </div>

            <p className="text-xs italic text-[#5a6a6a] opacity-80">
              This practice is not a crisis service. If you are in immediate distress, please call Lifeline on <strong>13 11 14</strong> or present to your nearest emergency department.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 rounded-[20px] shadow-[0_4px_30px_rgba(42,106,106,0.08)]"
          >
            <h3 className="font-serif text-2xl text-[#1a3a3a] mb-6">Send an Enquiry</h3>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
              <input type="hidden" name="access_key" value="89bb5cbb-9b86-4172-a79b-a82428a200ad" />
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-2">Your Name</label>
                <input type="text" name="name" required placeholder="First and last name" className="w-full px-4 py-3 border border-[#a8d4d4] rounded-lg bg-[#f9f6f1] text-sm font-light focus:outline-none focus:border-[#4a9e9e] focus:ring-2 focus:ring-[#4a9e9e]/10 transition-all" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-2">Email Address</label>
                <input type="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 border border-[#a8d4d4] rounded-lg bg-[#f9f6f1] text-sm font-light focus:outline-none focus:border-[#4a9e9e] focus:ring-2 focus:ring-[#4a9e9e]/10 transition-all" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-2">Phone (optional)</label>
                <input type="tel" name="phone" placeholder="0400 000 000" className="w-full px-4 py-3 border border-[#a8d4d4] rounded-lg bg-[#f9f6f1] text-sm font-light focus:outline-none focus:border-[#4a9e9e] focus:ring-2 focus:ring-[#4a9e9e]/10 transition-all" />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-2">What brings you here?</label>
                <select name="reason" required className="w-full px-4 py-3 border border-[#a8d4d4] rounded-lg bg-[#f9f6f1] text-sm font-light focus:outline-none focus:border-[#4a9e9e] focus:ring-2 focus:ring-[#4a9e9e]/10 transition-all">
                  <option value="">Select a reason</option>
                  <option>Anxiety or panic</option>
                  <option>Depression or low mood</option>
                  <option>Trauma or PTSD</option>
                  <option>Relationship difficulties</option>
                  <option>Grief or loss</option>
                  <option>General enquiry about ISTDP</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#4a9e9e] font-medium mb-2">Your Message</label>
                <textarea name="message" required placeholder="Tell me a little about what you're experiencing or any questions you have." className="w-full px-4 py-3 border border-[#a8d4d4] rounded-lg bg-[#f9f6f1] text-sm font-light min-h-[120px] focus:outline-none focus:border-[#4a9e9e] focus:ring-2 focus:ring-[#4a9e9e]/10 transition-all resize-y"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#2d6a6a] text-white py-3.5 rounded-lg text-sm font-medium tracking-wide hover:bg-[#1a3a3a] hover:-translate-y-px hover:shadow-lg transition-all duration-200">
                Send Enquiry
              </button>
              
              <p className="text-xs italic text-[#5a6a6a] opacity-80 text-center mt-4">
                All information is strictly confidential. I aim to respond within 1–2 business days.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
