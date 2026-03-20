import { useState, useEffect, useRef } from 'react';
import { 
  Code, Globe, Database, Award, Cloud, Zap, Layers, Terminal,
  Braces, Server, Settings, GitBranch, Github, Palette, Layout,
  Package, MonitorSpeaker, Cpu, Trophy, Sparkles
} from 'lucide-react';

const CircularProgress = ({ percentage, isVisible, delay = 0, children }: { 
  percentage: number; isVisible: boolean; delay?: number; children: React.ReactNode 
}) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (isVisible ? (percentage / 100) * circumference : circumference);
  const gradientId = `grad-${percentage}-${delay}`;

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--muted) / 0.3)" strokeWidth="6" />
        <circle
          cx="60" cy="60" r={radius} fill="none"
          stroke={`url(#${gradientId})`} strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-[1500ms] ease-out drop-shadow-[0_0_6px_hsl(var(--primary)/0.5)]"
          style={{ transitionDelay: `${delay}ms` }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(280 100% 65%)" />
            <stop offset="50%" stopColor="hsl(320 100% 60%)" />
            <stop offset="100%" stopColor="hsl(260 100% 75%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const skillCategories = [
  {
    key: 'programming', title: 'Programming Languages', icon: Code,
    skills: [
      { name: 'Python', icon: Terminal, percentage: 90 },
      { name: 'Java', icon: Code, percentage: 88 },
      { name: 'C++', icon: Cpu, percentage: 85 },
      { name: 'JavaScript', icon: Braces, percentage: 82 },
    ]
  },
  {
    key: 'frontend', title: 'Frontend Development', icon: Palette,
    skills: [
      { name: 'HTML', icon: Layout, percentage: 95 },
      { name: 'CSS', icon: Palette, percentage: 90 },
      { name: 'React', icon: Layers, percentage: 85 },
      { name: 'Angular', icon: Globe, percentage: 78 },
    ]
  },
  {
    key: 'backend', title: 'Backend Development', icon: Server,
    skills: [
      { name: 'Node.js', icon: Zap, percentage: 83 },
      { name: 'Express.js', icon: Server, percentage: 80 },
      { name: 'Django', icon: Settings, percentage: 78 },
      { name: 'Flask', icon: Package, percentage: 75 },
    ]
  },
  {
    key: 'database', title: 'Database & Storage', icon: Database,
    skills: [
      { name: 'SQL', icon: Database, percentage: 80 },
      { name: 'MongoDB', icon: Server, percentage: 75 },
    ]
  },
  {
    key: 'devops', title: 'DevOps & Cloud', icon: Cloud,
    skills: [
      { name: 'Git', icon: GitBranch, percentage: 85 },
      { name: 'GitHub', icon: Github, percentage: 88 },
      { name: 'Netlify', icon: Globe, percentage: 80 },
      { name: 'Docker', icon: Package, percentage: 70 },
      { name: 'AWS', icon: Cloud, percentage: 72 },
      { name: 'Heroku', icon: MonitorSpeaker, percentage: 75 },
    ]
  },
  {
    key: 'certifications', title: 'Certifications', icon: Award,
    skills: [
      { name: 'English Typing (Junior)', icon: Trophy, percentage: 100 },
      { name: 'English Typing (Senior)', icon: Award, percentage: 100 },
    ]
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const category = skillCategories[activeCategory];

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(260 40% 10%) 0%, hsl(225 30% 8%) 40%, hsl(280 35% 12%) 100%)' }}>
      {/* Unique Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-10 left-[10%] w-80 h-80 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-[10%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, hsl(280 100% 70%) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />

        {/* Animated Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Skills & Technologies</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Technical <span className="hero-gradient bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-xl text-muted-foreground max-w-lg mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Comprehensive skill set across full-stack development
            </p>
          </div>

          {/* Category Tabs */}
          <div className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {skillCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                    activeCategory === i
                      ? 'bg-primary/20 text-primary-foreground border-primary/40 shadow-lg shadow-primary/20'
                      : 'bg-card/30 text-muted-foreground border-border/30 hover:border-primary/30 hover:text-foreground hover:bg-card/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Category Title */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
          </div>

          {/* Circular Progress Rings Grid */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.skills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={`${category.key}-${skill.name}`}
                    className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/30 hover:bg-card/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                  >
                    <CircularProgress percentage={skill.percentage} isVisible={isVisible} delay={index * 150}>
                      <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{skill.percentage}%</span>
                    </CircularProgress>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <SkillIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
