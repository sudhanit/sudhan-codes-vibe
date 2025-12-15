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
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 animate-fade-in">
          {/* Left Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              Hi, I'm <span className="text-success">Sudhan M</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light mb-6 font-medium">
              Aspiring Full Stack Developer | Code. Create. Collaborate.
            </p>
            
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dedicated and enthusiastic B.Tech (IT) student with a strong foundation in programming 
                and web technologies. Skilled in C++, Java, Python, and passionate about solving 
                real-world problems through code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
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
          
          {/* Right Side - Square Photo */}
          <div className="flex-shrink-0">
            <img
              src={profilePhoto}
              alt="Sudhan M - Professional Portrait"
              className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-medium object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;