import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'ISTDP', href: '#istdp' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 md:px-16 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[#f5f0e8]/92 backdrop-blur-md shadow-[0_2px_20px_rgba(26,58,58,0.1)] border-b border-[#2a6a6a]/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="nav-logo text-2xl">
        In Session <span>Clinical Psychology</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 list-none items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[#5a6a6a] text-sm font-medium tracking-widest uppercase hover:text-[#2d6a6a] transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-[#2d6a6a] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#1a3a3a] transition-colors"
          >
            Book a Session
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-[#2d6a6a]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#f5f0e8] border-b border-[#2a6a6a]/10 shadow-lg md:hidden flex flex-col items-center py-8 gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#5a6a6a] text-sm font-medium tracking-widest uppercase hover:text-[#2d6a6a]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#2d6a6a] text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#1a3a3a]"
              onClick={() => setIsOpen(false)}
            >
              Book a Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
