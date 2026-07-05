import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend & Mobile',
    icon: '◆',
    skills: [
      { name: 'React / Next.js', level: 93, color: '#61dafb' },
      { name: 'React Native', level: 88, color: '#61dafb' },
      { name: 'Flutter', level: 85, color: '#02569b' },
      { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
      { name: 'TypeScript', level: 90, color: '#3178c6' },
    ],
  },
  {
    category: 'Backend & Database',
    icon: '◈',
    skills: [
      { name: 'Node.js / Express', level: 92, color: '#68a063' },
      { name: 'Python / Django', level: 88, color: '#092e20' },
      { name: 'FastAPI', level: 85, color: '#009688' },
      { name: 'PostgreSQL', level: 87, color: '#336791' },
      { name: 'MongoDB / Firebase', level: 85, color: '#ff9900' },
    ],
  },
  {
    category: 'AI & Blockchain',
    icon: '◇',
    skills: [
      { name: 'TensorFlow / ML', level: 82, color: '#ff6f00' },
      { name: 'NLP / RAG Models', level: 78, color: '#e8702a' },
      { name: 'Solidity / Web3', level: 80, color: '#627eea' },
      { name: 'REST / GraphQL APIs', level: 92, color: '#e535ab' },
      { name: 'Git / CI/CD', level: 88, color: '#f05032' },
    ],
  },
];

const SkillsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.08 });
  const parallaxOffset = useParallax(0.06);

  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, #e8702a 0%, transparent 60%)',
          transform: `translate(-50%, -50%) translateY(${parallaxOffset}px)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[#e8702a] text-sm font-medium tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
            style={{ letterSpacing: '-0.04em' }}
          >
            Tools &
            <span className="font-playfair italic text-white/90 ml-3">technologies</span>
          </h2>
        </div>

        {/* Skill groups */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-700 ease-out ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${gi * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-7">
                <span className="text-[#e8702a] text-xl">{group.icon}</span>
                <h3 className="text-white text-lg font-medium">{group.category}</h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70 text-sm">{skill.name}</span>
                      <span className="text-white/40 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: gridVisible ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color,
                          transitionDelay: `${gi * 150 + si * 100}ms`,
                          opacity: 0.8,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
