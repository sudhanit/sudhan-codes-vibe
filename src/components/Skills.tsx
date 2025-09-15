import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    { name: "C++", icon: Cpu, color: "bg-primary/10 text-primary", category: "Programming" },
    { name: "Python", icon: Terminal, color: "bg-primary/10 text-primary", category: "Programming" },
    { name: "Java", icon: Code, color: "bg-primary/10 text-primary", category: "Programming" },
    { name: "JavaScript", icon: Braces, color: "bg-primary/10 text-primary", category: "Programming" },
    
    // Web Technologies
    { name: "HTML", icon: Layout, color: "bg-success/10 text-success", category: "Web" },
    { name: "CSS", icon: Palette, color: "bg-success/10 text-success", category: "Web" },
    { name: "React", icon: Layers, color: "bg-success/10 text-success", category: "Web" },
    { name: "Angular", icon: Globe, color: "bg-success/10 text-success", category: "Web" },
    
    // Database
    { name: "SQL", icon: Database, color: "bg-accent/10 text-accent", category: "Database" },
    { name: "MongoDB", icon: Server, color: "bg-accent/10 text-accent", category: "Database" },
    
    // Tools & Frameworks
    { name: "Node.js", icon: Zap, color: "bg-muted/10 text-muted-foreground", category: "Backend" },
    { name: "Express.js", icon: Server, color: "bg-muted/10 text-muted-foreground", category: "Backend" },
    { name: "Django", icon: Settings, color: "bg-muted/10 text-muted-foreground", category: "Backend" },
    { name: "Flask", icon: Package, color: "bg-muted/10 text-muted-foreground", category: "Backend" },
    { name: "Git", icon: GitBranch, color: "bg-secondary/10 text-secondary-foreground", category: "Tools" },
    { name: "GitHub", icon: Github, color: "bg-secondary/10 text-secondary-foreground", category: "Tools" },
    
    // Deployment
    { name: "Docker", icon: Package, color: "bg-warning/10 text-warning", category: "DevOps" },
    { name: "AWS", icon: Cloud, color: "bg-warning/10 text-warning", category: "DevOps" },
    { name: "Netlify", icon: Globe, color: "bg-warning/10 text-warning", category: "DevOps" },
    { name: "Heroku", icon: MonitorSpeaker, color: "bg-warning/10 text-warning", category: "DevOps" },
    
    // Certifications
    { name: "English Typing (Junior)", icon: Trophy, color: "bg-destructive/10 text-destructive", category: "Certification" },
    { name: "English Typing (Senior)", icon: Award, color: "bg-destructive/10 text-destructive", category: "Certification" }
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
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs px-2 py-1 bg-muted/50 border-border/50"
                    >
                      {skill.category}
                    </Badge>
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