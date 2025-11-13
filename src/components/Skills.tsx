import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Award, 
  Cloud,
  Zap,
  Layers,
  Terminal,
  Braces,
  Server,
  Settings,
  GitBranch,
  Github,
  Palette,
  Layout,
  Package,
  MonitorSpeaker,
  Cpu,
  Trophy
} from 'lucide-react';
import programmingImage from '@/assets/skills-programming.jpg';
import frontendImage from '@/assets/skills-frontend.jpg';
import backendImage from '@/assets/skills-backend.jpg';
import databaseImage from '@/assets/skills-database.jpg';
import devopsImage from '@/assets/skills-devops.jpg';
import certificationsImage from '@/assets/skills-certifications.jpg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: Code,
      image: programmingImage,
      skills: [
        { name: "Python", icon: Terminal, percentage: 90 },
        { name: "Java", icon: Code, percentage: 88 },
        { name: "C++", icon: Cpu, percentage: 85 },
        { name: "JavaScript", icon: Braces, percentage: 82 },
      ]
    },
    frontend: {
      title: "Frontend Development",
      icon: Palette,
      image: frontendImage,
      skills: [
        { name: "HTML", icon: Layout, percentage: 95 },
        { name: "CSS", icon: Palette, percentage: 90 },
        { name: "React", icon: Layers, percentage: 85 },
        { name: "Angular", icon: Globe, percentage: 78 },
      ]
    },
    backend: {
      title: "Backend Development",
      icon: Server,
      image: backendImage,
      skills: [
        { name: "Node.js", icon: Zap, percentage: 83 },
        { name: "Express.js", icon: Server, percentage: 80 },
        { name: "Django", icon: Settings, percentage: 78 },
        { name: "Flask", icon: Package, percentage: 75 },
      ]
    },
    database: {
      title: "Database & Storage",
      icon: Database,
      image: databaseImage,
      skills: [
        { name: "SQL", icon: Database, percentage: 80 },
        { name: "MongoDB", icon: Server, percentage: 75 },
      ]
    },
    devops: {
      title: "DevOps & Cloud",
      icon: Cloud,
      image: devopsImage,
      skills: [
        { name: "Git", icon: GitBranch, percentage: 85 },
        { name: "GitHub", icon: Github, percentage: 88 },
        { name: "Netlify", icon: Globe, percentage: 80 },
        { name: "Docker", icon: Package, percentage: 70 },
        { name: "AWS", icon: Cloud, percentage: 72 },
        { name: "Heroku", icon: MonitorSpeaker, percentage: 75 },
      ]
    },
    certifications: {
      title: "Certifications",
      icon: Award,
      image: certificationsImage,
      skills: [
        { name: "English Typing (Junior)", icon: Trophy, percentage: 100 },
        { name: "English Typing (Senior)", icon: Award, percentage: 100 },
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderSkillCategory = (categoryKey: keyof typeof skillCategories) => {
    const category = skillCategories[categoryKey];
    const CategoryIcon = category.icon;
    
    return (
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Category Header with Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
          <img 
            src={category.image} 
            alt={category.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/20">
                <CategoryIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    <SkillIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <span className="text-sm font-bold text-primary">{skill.percentage}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.percentage : 0} 
                      className="h-2 bg-muted transition-all duration-1000 ease-out"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className={`grid w-full grid-cols-3 lg:grid-cols-7 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <TabsTrigger value="all">All Skills</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((key) => (
                <div key={key}>
                  {renderSkillCategory(key)}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="programming">
              {renderSkillCategory('programming')}
            </TabsContent>

            <TabsContent value="frontend">
              {renderSkillCategory('frontend')}
            </TabsContent>

            <TabsContent value="backend">
              {renderSkillCategory('backend')}
            </TabsContent>

            <TabsContent value="database">
              {renderSkillCategory('database')}
            </TabsContent>

            <TabsContent value="devops">
              {renderSkillCategory('devops')}
            </TabsContent>

            <TabsContent value="certifications">
              {renderSkillCategory('certifications')}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;