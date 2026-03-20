import { useState, useEffect, useRef } from 'react';
import { 
  Code, Globe, Database, Award, Cloud, Zap, Layers, Terminal,
  Braces, Server, Settings, GitBranch, Github, Palette, Layout,
  Package, MonitorSpeaker, Cpu, Trophy
} from 'lucide-react';

const CircularProgress = ({ percentage, isVisible, delay = 0, children }: { 
  percentage: number; isVisible: boolean; delay?: number; children: React.ReactNode 
}) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (isVisible ? (percentage / 100) * circumference : circumference);

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
        <circle
          cx="60" cy="60" r={radius} fill="none"
          stroke="url(#progressGradient)" strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-[1500ms] ease-out"
          style={{ transitionDelay: `${delay}ms` }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(280 100% 85%)" />
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
    <section ref={sectionRef} id="skills" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-foreground transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Technical <span className="hero-gradient bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-xl text-muted-foreground transition-all duration-1000 delay-200 ${
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
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === i
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                      : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Circular Progress Rings Grid */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <div
                    key={`${category.key}-${skill.name}`}
                    className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <CircularProgress percentage={skill.percentage} isVisible={isVisible} delay={index * 150}>
                      <span className="text-2xl font-bold text-foreground">{skill.percentage}%</span>
                    </CircularProgress>
                    <div className="flex items-center gap-2">
                      <SkillIcon className="w-4 h-4 text-primary" />
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
