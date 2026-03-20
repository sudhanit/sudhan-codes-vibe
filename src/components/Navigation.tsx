import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.id);
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="font-bold text-xl tracking-tight group"
          >
            <span className="text-primary group-hover:text-primary/80 transition-colors">Sudhan</span>
            <span className="text-foreground"> M</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-0.5 mb-2 group-hover:scale-150 transition-transform" />
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-card/30 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30 shadow-lg shadow-primary/10" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold hero-gradient text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105"
            >
              Let's Connect
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl bg-card/30 backdrop-blur-sm border border-border/20 text-foreground"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${
        mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-background/95 backdrop-blur-xl border-t border-border/20 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-primary/15 text-primary border border-primary/20'
                  : 'text-muted-foreground hover:bg-card/50 hover:text-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-2 px-5 py-3 rounded-xl text-sm font-semibold hero-gradient text-white"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
