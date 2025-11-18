import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("🎉 Thank you for subscribing!");
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Services", to: "/services" },
        { label: "Packages", to: "/packages" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", to: "/case-studies" },
        { label: "Portfolio", to: "/portfolio" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary border-t border-border text-sm text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-gold mb-3">
              Studio Elevate
            </h3>
            <p className="leading-relaxed mb-4">
              Elevating luxury interior brands through marketing that converts.
            </p>

            <div className="flex gap-4">
              {[
                {
                  Icon: Instagram,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  Icon: Youtube,
                  href: "https://youtube.com",
                  label: "YouTube",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-foreground hover:text-gold transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="hover:text-gold transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="mb-4 leading-relaxed">
              Get luxury marketing tips and insights delivered monthly.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-gold hover:bg-gold-dark text-foreground font-medium"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p>© {new Date().getFullYear()} Studio Elevate Marketing.</p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@studioelevate.co.ke"
                className="hover:text-gold transition-colors"
              >
                info@studioelevate.co.ke
              </a>
              <span className="text-border">|</span>
              <a
                href="tel:+254115450287"
                className="hover:text-gold transition-colors"
              >
                +254 115 450 287
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
