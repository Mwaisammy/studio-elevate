import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, ArrowRight } from "lucide-react";
import PaymentTerms from "@/components/PaymentTerms";

const Packages = () => {
  const adPackages = [
    {
      name: "Starter Discovery Campaign",
      price: "Ksh 20,000",
      adSpend: "Ksh 10,000",
      duration: "One-time",
      features: [
        "One strategic campaign setup",
        "Luxury buyer & seller persona mapping",
        "Understanding client emotional triggers",
        "Audience research & targeting",
        "Professional ad creatives aligned with brand story",
        "7-day discovery campaign",
        "Basic performance report",
        "Growth roadmap recommendations",
      ],
      ideal:
        "Great for realtors validating whether premium buyers will resonate with their message, properties, and personal brand.",
      cta: "Start Discovery",
    },
    {
      name: "Realty Growth Partner Plan",
      price: "Ksh 65,000/month",
      adSpend: "Ksh 20,000 - 50,000",
      duration: "Monthly",
      features: [
        "Full campaign management",
        "Advanced targeting to reach high-intent buyers & sellers",
        "Emotional messaging frameworks for listings",
        "Story-driven content creation guidance",
        "Multiple ad variations & testing",
        "A/B optimization",
        "Weekly performance monitoring",
        "Lead tracking with follow-up journey design",
        "Monthly brand & content analysis",
        "Strategic growth calls (client journey + content direction)",
      ],
      ideal:
        "For realtors ready to position themselves as trusted advisors — not just sellers — and build consistent emotional connection with clients.",
      cta: "Partner With Us",
      popular: true,
    },
    {
      name: "Luxury Realty Brand Retainer",
      price: "Ksh 120,000/month",
      adSpend: "Custom budget",
      duration: "Monthly",
      features: [
        "Everything in Growth Partner Plan",
        "Dedicated creative & brand direction",
        "Content calendar built around emotional storytelling",
        "Premium listing campaigns for property launches",
        "Advanced retargeting systems",
        "Relationship-building emails & nurturing sequences",
        "Social media content strategy tailored for trust",
        "Bi-weekly strategy & growth alignment calls",
        "Priority support",
        "Quarterly brand equity & performance audits",
      ],
      ideal:
        "Built for premium real estate brands seeking a long-term growth partner focused on storytelling, trust, and client emotional engagement.",
      cta: "Let's Talk Growth",
      premium: true,
    },
  ];

  const websitePackages = [
    {
      name: "Starter Realty Website",
      price: "Ksh 40,000 - 60,000",
      features: [
        "5–7 page clean, modern website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Property or portfolio gallery (up to 10 items)",
        "Emotion-focused property descriptions framework",
        "Contact form & social links",
        "1 month of support",
      ],
      ideal:
        "Ideal for agents building a trustworthy digital presence that helps clients feel confident reaching out.",
    },
    {
      name: "Professional Realty Website",
      price: "Ksh 75,000 - 110,000",
      features: [
        "8–12 page custom design",
        "Luxury-inspired layout built to build emotional connection",
        "Advanced SEO optimization",
        "Listings or gallery (up to 30 items)",
        "Blog/insights for storytelling & authority",
        "Newsletter integration for follow-up systems",
        "Google Analytics setup",
        "3 months support",
        "Content writing assistance (emotion + value driven)",
      ],
      ideal:
        "Perfect for growth-focused realtors ready to attract premium buyers through trust, authority, and narrative-driven content.",
      popular: true,
    },
    {
      name: "Luxury Realty Website Experience",
      price: "Ksh 150,000 - 220,000",
      features: [
        "15+ page cinematic luxury website",
        "Bespoke design centered around emotional engagement",
        "Comprehensive SEO strategy",
        "Unlimited listings/galleries",
        "Client/buyer portal integration",
        "High-end animations & interactions",
        "Inquiry or booking system",
        "Custom CMS backend",
        "6 months priority support",
        "Professional copywriting (story, trust, lifestyle)",
        "Brand positioning + growth strategy session",
      ],
      ideal:
        "For luxury real estate brands that want a world-class digital first impression that builds immediate emotional trust and authority.",
      premium: true,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Investment <span className="text-gold">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Transparent, value-driven investments designed to help{" "}
            <span className="font-semibold">realtors</span> scale sustainably —
            through strategic positioning, digital systems, and client
            acquisition strategies that drive long-term growth.
          </p>
        </div>

        {/* Advertising Packages */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Advertising <span className="text-gold">Partnership Plans</span>
            </h2>
            <p className="text-muted-foreground">
              Service fee + ad spend (your ad budget goes directly to platforms)
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
                      Customized
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
              Website Design <span className="text-gold">Partnerships</span>
            </h2>
            <p className="text-muted-foreground">
              One-time investments designed to position your brand digitally —
              attract ideal clients, build authority, and elevate your online
              experience.
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
                      Customized
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

        {/* FAQ Section */}
        <section>
          <Card className="p-12 bg-secondary max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Partnership <span className="text-gold">FAQs</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">
                  How does the ad spend work?
                </h3>
                <p className="text-muted-foreground">
                  Our service fee covers strategy, creation, and management.
                  Your ad spend goes directly to platforms like Meta or Google
                  to reach verified, high-intent audiences interested in
                  property and luxury interiors.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What kind of results can I expect?
                </h3>
                <p className="text-muted-foreground">
                  Most partners experience 3–5x returns on ad spend within 3
                  months, depending on offer quality, brand maturity, and market
                  demand.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  Can I customize my package?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely. Whether you're building brand visibility or
                  scaling sales, we tailor each plan around your specific goals
                  and audience insights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">
                  What's the commitment period?
                </h3>
                <p className="text-muted-foreground">
                  Monthly partnerships are flexible — no long-term lock-ins.
                  However, we recommend at least 3 months to refine systems and
                  deliver consistent ROI.
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
