import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";
import PaymentTerms from "@/components/PaymentTerms";

const Packages = () => {
  const adPackages = [
    {
      name: "Starter Test Campaign",
      price: "Ksh 15,000",
      adSpend: "Ksh 10,000",
      duration: "One-time",
      features: [
        "One campaign setup",
        "Audience research & targeting",
        "Professional ad creatives",
        "7-day test campaign",
        "Basic performance report",
        "Strategy recommendations",
      ],
      ideal:
        "Perfect for testing the waters and seeing if paid ads work for your brand",
      cta: "Start Testing",
    },
    {
      name: "Growth Plan",
      price: "Ksh 35,000/month",
      adSpend: "Ksh 20,000 - 50,000",
      duration: "Monthly",
      features: [
        "Full campaign management",
        "Advanced targeting strategies",
        "Multiple ad variations",
        "A/B testing & optimization",
        "Weekly performance monitoring",
        "Monthly detailed reports",
        "Lead tracking & analysis",
        "Strategy consultation calls",
      ],
      ideal:
        "For designers ready to consistently attract high-quality client inquiries",
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Luxury Brand Retainer",
      price: "Ksh 80,000/month",
      adSpend: "Custom budget",
      duration: "Monthly",
      features: [
        "Everything in Growth Plan",
        "Dedicated creative direction",
        "Custom landing page design",
        "Retargeting campaigns",
        "Email marketing integration",
        "Social media content strategy",
        "Bi-weekly strategy calls",
        "Priority support",
        "Quarterly brand audits",
      ],
      ideal:
        "For established brands seeking comprehensive marketing partnership",
      cta: "Let's Talk",
      premium: true,
    },
  ];

  const websitePackages = [
    {
      name: "Starter Website",
      price: "Ksh 30,000 - 50,000",
      features: [
        "5-7 page website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Portfolio gallery (up to 10 projects)",
        "Contact form",
        "Social media links",
        "1 month support",
      ],
      ideal: "For upcoming designers or studios just starting out",
    },
    {
      name: "Professional Website",
      price: "Ksh 60,000 - 90,000",
      features: [
        "8-12 page website",
        "Custom luxury design",
        "Advanced SEO optimization",
        "Portfolio gallery (up to 30 projects)",
        "Blog section",
        "Newsletter integration",
        "Google Analytics",
        "3 months support",
        "Content writing assistance",
      ],
      ideal: "For mid-range brands looking to establish strong online presence",
      popular: true,
    },
    {
      name: "Luxury Website",
      price: "Ksh 120,000 - 180,000",
      features: [
        "15+ page custom website",
        "Premium bespoke design",
        "Comprehensive SEO strategy",
        "Unlimited project galleries",
        "Client portal integration",
        "Advanced animations",
        "E-commerce capabilities",
        "Custom CMS",
        "6 months priority support",
        "Professional copywriting",
        "Brand consultation",
      ],
      ideal: "For premium interior designers demanding excellence",
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Investment <span className="text-gold">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Transparent pricing designed to deliver exceptional ROI for your
            interior design brand.
          </p>
        </div>

        {/* Ad Campaign Packages */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Advertising <span className="text-gold">Campaign Packages</span>
            </h2>
            <p className="text-muted-foreground">
              Service fee + ad spend (budget goes directly to platforms)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {adPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  pkg.popular
                    ? "border-2 border-gold shadow-luxury"
                    : pkg.premium
                    ? "border-2 border-foreground/20"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                {pkg.premium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  </div>
                )}

                <h3 className="font-serif text-2xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-gold mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    + {pkg.adSpend} ad spend
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {pkg.duration}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground italic">
                    {pkg.ideal}
                  </p>
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular || pkg.premium
                      ? "bg-gold hover:bg-gold-dark text-foreground"
                      : ""
                  }`}
                  variant={pkg.popular || pkg.premium ? "default" : "outline"}
                >
                  <Link to="/contact">
                    {pkg.cta} <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Website Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Website Design <span className="text-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground">
              One-time investment for a stunning online presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  pkg.popular
                    ? "border-2 border-gold shadow-luxury"
                    : pkg.premium
                    ? "border-2 border-foreground/20"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}
                {pkg.premium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </span>
                  </div>
                )}

                <h3 className="font-serif text-2xl font-bold mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gold mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    One-time investment
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground italic">
                    {pkg.ideal}
                  </p>
                </div>

                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular || pkg.premium
                      ? "bg-gold hover:bg-gold-dark text-foreground"
                      : ""
                  }`}
                  variant={pkg.popular || pkg.premium ? "default" : "outline"}
                >
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ or Additional Info */}
        <section>
          <Card className="p-12 bg-secondary max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Investment <span className="text-gold">FAQs</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How do ad budgets work?</h3>
                <p className="text-muted-foreground">
                  Our service fee covers strategy, creation, and management.
                  Your ad budget goes directly to platforms like Facebook,
                  Instagram, and Google to reach your target audience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What results can I expect?
                </h3>
                <p className="text-muted-foreground">
                  On average, our clients see 3-5x return on their ad spend
                  within the first 3 months. Results vary based on budget,
                  market, and service pricing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Can I customize a package?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We can tailor any package to fit your specific
                  needs and budget. Contact us for a custom proposal.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What's the contract length?
                </h3>
                <p className="text-muted-foreground">
                  Monthly packages are month-to-month with no long-term
                  commitment. We recommend at least 3 months to see optimal
                  results.
                </p>
              </div>

              <div>
                <PaymentTerms />
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Packages;
