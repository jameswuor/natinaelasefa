import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { Briefcase, GraduationCap, Rocket, Code2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full-Stack Developer & Founder',
    company: 'Freelance / Independent Projects',
    period: '2024 — Present',
    description:
      'Building impactful products like Erdataye (AI ambulance dispatch) and AgriWise (smart agriculture platform). Leading end-to-end development from architecture to deployment, integrating AI/ML, blockchain, and real-time systems.',
    tags: ['React', 'Python', 'TensorFlow', 'Solidity'],
    icon: Rocket,
  },
  {
    role: 'Full-Stack Web & Mobile Developer',
    company: 'Freelance / Contract Work',
    period: '2023 — 2024',
    description:
      'Developed 10+ client projects including e-commerce platforms, hospital management systems, tourism websites, and Telegram mini apps. Built cross-platform mobile apps with Flutter and React Native.',
    tags: ['Next.js', 'Flutter', 'Node.js', 'Firebase'],
    icon: Code2,
  },
  {
    role: 'Software Developer (Projects & Teams)',
    company: 'Jimma University',
    period: '2022 — 2023',
    description:
      'Led university project teams building real-world applications. Gained hands-on experience with database design, API development, and agile collaboration while contributing to academic research projects.',
    tags: ['Django', 'React', 'PostgreSQL', 'REST API'],
    icon: Briefcase,
  },
  {
    role: 'B.Sc. Computer Science',
    company: 'Jimma University, Ethiopia',
    period: '2022 — 2026',
    description:
      'Graduated with a degree in Computer Science. Studied data structures, algorithms, software engineering, AI/ML, database systems, and computer networks. Active in coding communities and hackathons.',
    tags: ['Algorithms', 'AI/ML', 'Software Engineering', 'Databases'],
    icon: GraduationCap,
  },
];

const ExperienceItem = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const IconComponent = exp.icon;

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 sm:gap-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-2xl bg-[#e8702a]/10 border border-[#e8702a]/20 flex items-center justify-center">
          <IconComponent className="w-5 h-5 text-[#e8702a]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <p className="text-[#e8702a]/80 text-xs font-medium tracking-wider uppercase mb-1">
          {exp.period}
        </p>
        <h3 className="text-white text-lg font-medium mb-1">{exp.role}</h3>
        <p className="text-white/50 text-sm mb-3">{exp.company}</p>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] text-white/40 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const parallaxOffset = useParallax(0.05);

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden">
      {/* Decorative element */}
      <div
        className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full opacity-[0.015]"
        style={{
          background: 'radial-gradient(circle, #e8702a 0%, transparent 60%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[#e8702a] text-sm font-medium tracking-widest uppercase mb-4">
            Experience
          </p>
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            Career
            <span className="font-playfair italic text-white/90 ml-3">journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#e8702a]/40 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
