import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import LuxImage from "../assets/image-2.png";
import kitchnox from "../assets/kitchenox.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Luxe Interiors Nairobi",
      category: "Website Design",
      imageUrl: LuxImage,
      description:
        "Premium website showcasing high-end residential projects with elegant animations and seamless user experience.",
      features: [
        "Custom CMS",
        "Portfolio Gallery",
        "Lead Generation Forms",
        "SEO Optimized",
      ],
      link: "https://lux-interiors.vercel.app/",
    },
    {
      title: "Kitchnox",
      category: "Kitchen Renovation & Design",
      imageUrl: kitchnox,
      description:
        "Modern kitchen transformation project featuring sleek finishes, smart storage solutions, and a clean, functional layout designed for contemporary homes.",
      features: [
        "3D Design Visualization",
        "Custom Cabinetry",
        "Lighting & Fixture Upgrades",
        "Responsive Web Showcase",
      ],
      link: "https://kitchen-renovation-alpha.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Stunning websites and successful campaigns created for interior
            design brands.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-luxury transition-smooth"
            >
              {/* Image Placeholder */}
              <div className="h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-64 object-contain"
                />
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gold group-hover:text-foreground group-hover:border-gold transition-smooth"
                  asChild
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Note about placeholders */}
        <Card className="p-8 bg-secondary max-w-3xl mx-auto text-center mb-20">
          <p className="text-muted-foreground">
            <strong>Note:</strong> We respect our clients' privacy and NDA
            agreements. The projects shown here are representative examples.
            Actual client websites and campaign results are available upon
            request during consultation.
          </p>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Want Your Brand Featured Here?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Book a call to
            discuss your project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground"
          >
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
