import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, Send, Download, ArrowUpRight } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './icons';

const socials = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/jameswuor', handle: '@jameswuor' },
  { icon: TwitterIcon, label: 'Twitter / X', href: 'https://x.com/mamastun33', handle: '@mamastun33' },
  { icon: Mail, label: 'Email', href: 'mailto:asenatinael12@gmail.com', handle: 'asenatinael12@gmail.com' },
];

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: socialsRef, isVisible: socialsVisible } = useScrollReveal({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse, #e8702a 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[#e8702a] text-sm font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Let's build something
            <span className="font-playfair italic text-white/90 ml-3">together</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create
            something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`lg:col-span-3 transition-all duration-1000 ease-out ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#e8702a]/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#e8702a]/50 focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#e8702a]/50 focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 flex items-center gap-2"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </form>
          </div>

          {/* Socials */}
          <div
            ref={socialsRef}
            className={`lg:col-span-2 transition-all duration-1000 ease-out ${
              socialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-white text-lg font-medium mb-6">Connect</h3>
            <div className="space-y-3">
              {socials.map((social, i) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-[#e8702a]/10 transition-colors">
                    <social.icon className="w-[18px] h-[18px] text-white/60 group-hover:text-[#e8702a] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{social.label}</p>
                    <p className="text-white/40 text-xs">{social.handle}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
