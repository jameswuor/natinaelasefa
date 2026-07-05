import { ArrowUp } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-10 bg-[#050505] border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Logo + copyright */}
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="#ffffff" className="opacity-40">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white/30 text-sm">
            © {new Date().getFullYear()} Natinael Asefa. All rights reserved.
          </span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: 'https://github.com/jameswuor' },
            { icon: TwitterIcon, href: 'https://x.com/mamastun33' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-white/[0.1] transition-colors group"
            >
              <Icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
            </a>
          ))}
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors"
        >
          Back to top
          <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
