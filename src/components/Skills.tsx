import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Award, 
  Cloud,
  Zap,
  Layers,
  Terminal,
  Braces,
  FileCode,
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

const Skills = () => {
  const skills = [
    // Programming Languages
    { name: "C++", icon: Cpu, color: "bg-primary/10 text-primary", category: "Programming", percentage: 85 },
    { name: "Python", icon: Terminal, color: "bg-primary/10 text-primary", category: "Programming", percentage: 90 },
    { name: "Java", icon: Code, color: "bg-primary/10 text-primary", category: "Programming", percentage: 88 },
    { name: "JavaScript", icon: Braces, color: "bg-primary/10 text-primary", category: "Programming", percentage: 82 },
    
    // Web Technologies
    { name: "HTML", icon: Layout, color: "bg-success/10 text-success", category: "Web", percentage: 95 },
    { name: "CSS", icon: Palette, color: "bg-success/10 text-success", category: "Web", percentage: 90 },
    { name: "React", icon: Layers, color: "bg-success/10 text-success", category: "Web", percentage: 85 },
    { name: "Angular", icon: Globe, color: "bg-success/10 text-success", category: "Web", percentage: 78 },
    
    // Database
    { name: "SQL", icon: Database, color: "bg-accent/10 text-accent", category: "Database", percentage: 80 },
    { name: "MongoDB", icon: Server, color: "bg-accent/10 text-accent", category: "Database", percentage: 75 },
    
    // Tools & Frameworks
    { name: "Node.js", icon: Zap, color: "bg-muted/10 text-muted-foreground", category: "Backend", percentage: 83 },
    { name: "Express.js", icon: Server, color: "bg-muted/10 text-muted-foreground", category: "Backend", percentage: 80 },
    { name: "Django", icon: Settings, color: "bg-muted/10 text-muted-foreground", category: "Backend", percentage: 78 },
    { name: "Flask", icon: Package, color: "bg-muted/10 text-muted-foreground", category: "Backend", percentage: 75 },
    { name: "Git", icon: GitBranch, color: "bg-secondary/10 text-secondary-foreground", category: "Tools", percentage: 85 },
    { name: "GitHub", icon: Github, color: "bg-secondary/10 text-secondary-foreground", category: "Tools", percentage: 88 },
    
    // Deployment
    { name: "Docker", icon: Package, color: "bg-warning/10 text-warning", category: "DevOps", percentage: 70 },
    { name: "AWS", icon: Cloud, color: "bg-warning/10 text-warning", category: "DevOps", percentage: 72 },
    { name: "Netlify", icon: Globe, color: "bg-warning/10 text-warning", category: "DevOps", percentage: 80 },
    { name: "Heroku", icon: MonitorSpeaker, color: "bg-warning/10 text-warning", category: "DevOps", percentage: 75 },
    
    // Certifications
    { name: "English Typing (Junior)", icon: Trophy, color: "bg-destructive/10 text-destructive", category: "Certification", percentage: 100 },
    { name: "English Typing (Senior)", icon: Award, color: "bg-destructive/10 text-destructive", category: "Certification", percentage: 100 }
  ];

  return (
    <section id="skills" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Technical <span className="hero-gradient bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="p-4 shadow-soft hover:shadow-medium transition-smooth animate-scale-in text-center group cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`p-3 rounded-xl ${skill.color} group-hover:scale-110 transition-smooth`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs px-2 py-1 bg-muted/50 border-border/50 mb-2"
                    >
                      {skill.category}
                    </Badge>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Proficiency</span>
                        <span className="text-xs font-semibold text-foreground">{skill.percentage}%</span>
                      </div>
                      <Progress 
                        value={skill.percentage} 
                        className="h-2 bg-muted/50"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;