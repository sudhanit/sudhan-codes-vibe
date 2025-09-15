import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, ExternalLink, Code, ShoppingBag, Calculator, Image } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Sum Calculator with Image Processing",
      description: "An innovative application that combines mathematical calculations with image processing capabilities. This project allows users to perform sum calculations on numerical data extracted from images, process image headings, and generate visual summaries. Features include text recognition, mathematical operations, and dynamic image manipulation.",
      technologies: ["Python", "OpenCV", "PIL/Pillow", "Tesseract OCR", "NumPy", "Matplotlib", "Tkinter"],
      features: [
        "Image text extraction and recognition",
        "Mathematical sum calculations from images",
        "Dynamic heading generation for pictures",
        "Batch image processing",
        "Visual data representation", 
        "Image annotation and labeling",
        "Export results to various formats",
        "User-friendly GUI interface"
      ],
      icon: Calculator,
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Grocery Store Management System",
      description: "A Python-based application designed to simplify the management of products, stock, and customer billing in a retail environment. This menu-driven system allows store owners to efficiently add, update, and view product details, including price and quantity. Features automatic stock management with real-time inventory updates.",
      technologies: ["Python", "JSON", "File Handling", "Object-Oriented Programming", "Data Structures"],
      features: [
        "Product management (add, update, view)",
        "Real-time stock management",
        "Customer billing system",
        "Shopping cart functionality",
        "Automatic inventory updates",
        "JSON data storage",
        "Menu-driven interface",
        "Stock availability validation"
      ],
      icon: ShoppingBag,
      color: "bg-success/10 text-success"
    },
    {
      title: "Chatbot Application",
      description: "Built with HTML, CSS, and JavaScript, this web-based chatbot integrates Google's Gemini API to provide interactive AI conversations. Features include a toggle UI, responsive design, dynamic messaging, error handling, and modern UX styling.",
      technologies: ["HTML", "CSS", "JavaScript", "Google Gemini API", "Responsive Design"],
      features: [
        "Interactive AI conversations",
        "Toggle UI interface",
        "Responsive design",
        "Dynamic messaging system",
        "Error handling",
        "Modern UX styling"
      ],
      icon: MessageCircle,
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              My <span className="hero-gradient bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my projects and technical implementations
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${project.color}`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground mb-2">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Code className="w-4 h-4" />
                      <span>View Code</span>
                    </Button>
                    <Button className="hero-gradient text-white hover:opacity-90 flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Card className="shadow-soft bg-accent/20 border-dashed border-2 border-accent">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  More Projects Coming Soon!
                </h3>
                <p className="text-muted-foreground">
                  I'm continuously working on new projects and expanding my portfolio. 
                  Stay tuned for more exciting developments!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;