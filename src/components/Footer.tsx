import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 section-bg border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-primary mb-2">Sudhan M</h3>
            <p className="text-muted-foreground">
              Aspiring Full Stack Developer | Code. Create. Collaborate.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>© {currentYear} Sudhan M. Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and React</span>
          </div>
          
          <p className="text-sm text-light mt-2">
            Open to internships and collaborative opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;