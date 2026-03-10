export default function Footer() {
  return (
    <footer className="bg-[#1a3a3a] text-white/60 py-12 text-center">
      <div className="font-serif text-2xl text-white mb-2 font-light">
        In Session <span className="text-[#a8d4d4] italic">Clinical Psychology</span>
      </div>
      
      <p className="text-sm leading-relaxed max-w-md mx-auto mb-6">
        ISTDP Psychology Practice — Sunshine Coast, Queensland<br />
        AHPRA Registered Psychologist · Medicare & Private Health Rebates Available
      </p>
      
      <div className="flex justify-center flex-wrap gap-8 text-xs mb-8">
        <a href="#" className="hover:text-[#a8d4d4] transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-[#a8d4d4] transition-colors">Terms & Conditions</a>
        <a href="#" className="hover:text-[#a8d4d4] transition-colors">AHPRA Registration</a>
        <a href="#contact" className="hover:text-[#a8d4d4] transition-colors">Contact</a>
      </div>
      
      <p className="text-xs opacity-40">
        © 2025 In Session Clinical Psychology. All rights reserved.
      </p>
    </footer>
  );
}
