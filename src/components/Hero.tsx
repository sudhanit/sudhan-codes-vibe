import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sudhan_M_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Sudhan M - Professional Portrait"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-medium object-cover border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Hi, I'm <span className="hero-gradient bg-clip-text text-transparent">Sudhan M</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-light mb-8 font-medium">
            Aspiring Full Stack Developer | Code. Create. Collaborate.
          </p>
          
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dedicated and enthusiastic B.Tech (IT) student with a strong foundation in programming 
              and web technologies. Skilled in C++, Java, Python, and passionate about solving 
              real-world problems through code.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg"
              className="hero-gradient text-white hover:opacity-90 transition-smooth px-8 py-4 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button 
              onClick={downloadResume}
              variant="secondary"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-smooth px-8 py-4 text-lg font-semibold flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-4 text-lg font-semibold"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;