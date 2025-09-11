import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Briefcase, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Learning & Development",
      description: "Continuously expanding my knowledge in full-stack development, staying updated with latest technologies and best practices.",
      icon: BookOpen,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Collaborative Projects",
      description: "Eager to participate in team projects where I can contribute my skills while learning from experienced developers.",
      icon: Users,
      color: "bg-success/10 text-success"
    },
    {
      title: "Internship Opportunities",
      description: "Actively seeking internship positions to gain real-world experience and apply my technical skills in professional environments.",
      icon: Briefcase,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "Beginner Freelance",
      description: "Open to beginner-level freelance projects in web development to build practical experience and expand my portfolio.",
      icon: Lightbulb,
      color: "bg-purple-500/10 text-purple-600"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What I'm <span className="hero-gradient bg-clip-text text-transparent">Looking For</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Currently focused on building skills and gaining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${service.color}`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-soft bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Work Together!
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Currently learning and building skills as a Full Stack Developer. Open to internships, 
                collaborative projects, and beginner-level freelance opportunities in web development.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="hero-gradient text-white hover:opacity-90 transition-smooth px-8 py-4 text-lg font-semibold"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;