import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { Code2, Palette, Smartphone } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Projects Built' },
  { value: '3+', label: 'Years Experience' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '100%', label: 'Passion Driven' },
];

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'Building end-to-end web applications with React, Node.js, Django, and modern databases.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Crafting cross-platform mobile experiences with Flutter and React Native.',
  },
  {
    icon: Palette,
    title: 'AI & Smart Solutions',
    desc: 'Integrating TensorFlow, RAG models, and blockchain into real-world problem-solving platforms.',
  },
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollReveal({ threshold: 0.1 });
  const parallaxOffset = useParallax(0.08);

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Parallax background decoration */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #e8702a 0%, transparent 70%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          transform: `translateY(${-parallaxOffset * 0.5}px)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[#e8702a] text-sm font-medium tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8"
            style={{ letterSpacing: '-0.04em' }}
          >
            Hi, I'm Natinael
            <span className="font-playfair italic text-white/90 ml-3">Asefa</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4">
              I'm a Computer Science graduate from <span className="text-white/80 font-medium">Jimma University</span> with
              a deep passion for building technology that solves real problems. As a full-stack web
              developer, software engineer, and mobile app developer, I thrive at the intersection of
              clean code and meaningful impact.
            </p>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              From AI-integrated ambulance dispatch systems to smart agriculture platforms, I build
              products that bridge critical gaps in healthcare, agriculture, and finance — especially
              across Ethiopia and East Africa.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div ref={highlightsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16 mb-20">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`group p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 ease-out cursor-default ${
                highlightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#e8702a]/10 flex items-center justify-center mb-5 group-hover:bg-[#e8702a]/20 transition-colors">
                <item.icon className="w-5 h-5 text-[#e8702a]" />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <p
                className="text-4xl sm:text-5xl font-light text-white mb-2"
                style={{ letterSpacing: '-0.04em' }}
              >
                {stat.value}
              </p>
              <p className="text-white/40 text-xs sm:text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
