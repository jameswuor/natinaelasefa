import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';

const categories = ['All', 'Web App', 'Mobile', 'AI / ML', 'Blockchain'];

const projects = [
  {
    title: 'Erdataye (እርዳታዬ)',
    description:
      'AI-integrated ambulance dispatch platform for Ethiopian urban areas. Features geo-location-powered dispatch, secure medical profile transfer, and AI-powered first aid guidance in local languages.',
    image: '/images/erdataye.jpg',
    tags: ['React Native', 'Node.js', 'AI/RAG', 'Maps API'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AgriWise',
    description:
      'Smart agriculture & market access platform connecting Ethiopian farmers to real-time weather, AI crop disease detection via photo, and direct buyer access — removing middlemen.',
    image: '/images/agriwise.jpg',
    tags: ['Flutter', 'Django', 'TensorFlow', 'Firebase'],
    category: 'AI / ML',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Loan Collection and Recovery System',
    description:
      'Intelligent credit scoring and loan assessment system using machine learning to evaluate borrower risk profiles and automate lending decisions.',
    image: '/images/ai-loan-assessment.jpg',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    category: 'AI / ML',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Blockchain Invoice Drafting',
    description:
      'Decentralized invoice drafting system leveraging blockchain for transparent, tamper-proof financial document creation and verification.',
    image: '/images/blockchain-invoice.jpg',
    tags: ['Solidity', 'Web3.js', 'React', 'Node.js'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Discover Ethiopia',
    description:
      'Tourism platform connecting travelers with Ethiopian companies for accommodation, tours, and shopping — showcasing culture, nature, and ancient heritage.',
    image: '/images/discover-ethiopia.png',
    tags: ['React', 'Node.js', 'REST API', 'Tailwind'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real Estate Booking',
    description:
      'Property listing website with site visit booking system, interactive maps, and streamlined scheduling for real estate agencies.',
    image: '/images/real-estate-booking.png',
    tags: ['Next.js', 'PostgreSQL', 'Maps API', 'Tailwind'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Bingo Telegram Mini App',
    description:
      'Interactive Bingo game built as a Telegram Mini App with real-time multiplayer gameplay, jackpot system, and seamless in-app wallet.',
    image: '/images/bingo-bot.png',
    tags: ['React', 'Telegram API', 'Node.js', 'WebSocket'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Inew — AI News Summarizer',
    description:
      'AI-powered tool that summarizes trending news from Twitter/X, delivering concise digests using natural language processing.',
    image: '/images/inew-news-summarizer.jpg',
    tags: ['Python', 'NLP', 'Twitter API', 'React'],
    category: 'AI / ML',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Crypto Wallet Tracker',
    description:
      'Blockchain wallet tracker for monitoring crypto addresses, transaction history, and portfolio analytics across multiple chains.',
    image: '/images/crypto-wallet-tracker.jpg',
    tags: ['React', 'Web3.js', 'Node.js', 'REST API'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Hospital Management System',
    description:
      'Comprehensive hospital management solution with patient records, appointment scheduling, billing, and staff management modules.',
    image: '/images/hospital-management.jpg',
    tags: ['React', 'Django', 'PostgreSQL', 'REST API'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fragrance & Perfume Retail',
    description:
      'E-commerce platform for fragrance and perfume retail with product catalog, cart system, and payment integration.',
    image: '/images/fragrance-retail.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.05 });

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-14 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-[#e8702a] text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8"
            style={{ letterSpacing: '-0.04em' }}
          >
            Selected
            <span className="font-playfair italic text-white/90 ml-3">works</span>
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#e8702a] text-white'
                    : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.15] transition-all duration-500 ease-out ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="View live"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="View source"
                  >
                    <GithubIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-lg font-medium mb-2 group-hover:text-[#e8702a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.05] text-white/50 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
