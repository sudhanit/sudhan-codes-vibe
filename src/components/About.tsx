import { Card, CardContent } from '@/components/ui/card';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get to know more about my journey and aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">About me</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate B.Tech (Information Technology) student with an insatiable curiosity 
                for technology and problem-solving. My journey in programming began with a fascination 
                for how code can transform ideas into reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my degree at Mahendra Institute of Technology, I'm eager to 
                contribute to impactful projects and thrive in team-oriented, innovative environments 
                where I can continue learning and growing as a developer.
              </p>
            </div>

            <div className="space-y-6 animate-scale-in">
              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Tharamangalam, Tamil Nadu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-success/10 p-3 rounded-full">
                      <GraduationCap className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Current</h4>
                      <p className="text-muted-foreground">B.Tech (IT), Mahendra Institute of Technology</p>
                      <p className="text-sm text-muted-foreground">CGPA: 8.48</p>
                      <p className="text-sm text-light">Graduating 2027</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Interests</h4>
                      <p className="text-muted-foreground">Problem-solving, Web Development</p>
                      <p className="text-sm text-light">Learning Full Stack Technologies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;