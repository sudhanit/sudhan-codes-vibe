import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – Information Technology",
      institution: "Mahendra Institute of Technology",
      period: "2023 – 2027",
      status: "Currently Pursuing",
      icon: GraduationCap,
      color: "bg-primary/10 text-primary"
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "Modern School, Tharamangalam",
      period: "2022 – 2023",
      status: "Scored: 65%",
      icon: Award,
      color: "bg-success/10 text-success"
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Modern School, Tharamangalam",
      period: "2019 – 2020",
      status: "Scored: 60%",
      icon: Award,
      color: "bg-accent/10 text-foreground"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Education <span className="hero-gradient bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              My academic milestones and achievements
            </p>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${edu.color}`}>
                      <edu.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center space-x-2 text-light mb-2 sm:mb-0">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status.includes('Currently') 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-success/10 text-success'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>
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

export default Education;