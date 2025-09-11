import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Globe, Database, Wrench, Award, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-primary/10 text-primary",
      skills: ["C++", "Python", "Java", "JavaScript"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "bg-success/10 text-success",
      skills: ["HTML", "CSS", "JavaScript", "React", "Angular"]
    },
    {
      title: "Database",
      icon: Database,
      color: "bg-blue-500/10 text-blue-600",
      skills: ["SQL", "MongoDB"]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Node.js", "Express.js", "Django", "Flask", "Git", "GitHub"]
    },
    {
      title: "Deployment",
      icon: Cloud,
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Docker", "AWS", "Netlify", "Heroku"]
    },
    {
      title: "Certifications",
      icon: Award,
      color: "bg-green-500/10 text-green-600",
      skills: ["English Typing (Junior)", "English Typing (Senior)"]
    }
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;