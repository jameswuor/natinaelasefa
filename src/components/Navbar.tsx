import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('About');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
      {/* Left: Logo + Wordmark */}
      <a href="#hero" className="flex items-center gap-2.5" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff">
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="text-white text-2xl font-playfair italic">Natinael</span>
      </a>

      {/* Center pill (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => handleClick(link.label, link.href)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === link.label
                ? 'bg-white text-gray-900'
                : 'text-white/80 hover:bg-white/20 hover:text-white'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Right: Download CV (desktop) */}
      <a
        href="#contact"
        className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Download CV
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-5 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.label, link.href)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                active === link.label
                  ? 'bg-white/15 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contact"
            className="mt-3 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full text-center hover:bg-gray-100 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
