import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Globe,
  BarChart3,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const adSteps = [
    {
      title: "Research & Strategy",
      description:
        "We analyze your ideal clients, market position, and competitors to craft a data-driven growth strategy.",
    },
    {
      title: "Ad Creation",
      description:
        "We design stunning visuals and copy that communicate your brand’s value and attract the right audience.",
    },
    {
      title: "Campaign Launch",
      description:
        "Targeted campaigns reaching homeowners, buyers, and clients ready to invest in premium spaces.",
    },
    {
      title: "Optimization",
      description:
        "Continuous testing and refinement to increase conversion and reduce wasted spend.",
    },
    {
      title: "Monthly Reporting",
      description:
        "Transparent results—so you know where your marketing budget is going and what’s driving real ROI.",
    },
  ];

  const websiteFeatures = [
    "Mobile-responsive, elegant design",
    "SEO optimized for local and high-intent search",
    "Portfolio and property showcase sections",
    "Lead capture forms that convert",
    "Lightning-fast performance",
    "Professional content and copywriting",
    "Social media and CRM integrations",
    "Google Analytics + Meta Pixel setup",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Growth Systems for{" "}
            <span className="text-gold block mt-2">
              Realtors & Interior Designers
            </span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            We help design and real estate brands scale sustainably — by
            building systems that align your marketing, brand, and client
            experience for predictable growth and stronger positioning.
          </p>
        </div>

        {/* Service 1: Client Acquisition Systems */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block p-3 bg-gold/10 rounded-lg mb-6">
                <Target className="w-12 h-12 text-gold" />
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Client Acquisition Systems
                <span className="text-gold block">
                  Social Media Growth & Paid Ads
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We don’t just run ads — we build predictable client pipelines.
                Through targeted campaigns and organic systems, we help you
                attract high-intent buyers, homeowners, and investors.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Data-Driven Targeting</p>
                    <p className="text-sm text-muted-foreground">
                      Reach affluent buyers, developers, and design clients
                      ready to take action.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Premium Brand Messaging</p>
                    <p className="text-sm text-muted-foreground">
                      Ads and visuals that elevate your perception and attract
                      trust.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Conversion Optimization</p>
                    <p className="text-sm text-muted-foreground">
                      Maximize results with AI-powered insights and budget
                      refinement.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-foreground"
              >
                <Link to="/packages">
                  View Packages <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>

            <Card className="p-8 bg-secondary">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                {adSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Service 2: Digital Showroom (Web Design) */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card className="p-8 bg-secondary order-2 md:order-1">
              <h3 className="font-serif text-2xl font-bold mb-6">
                What’s Included
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {websiteFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="order-1 md:order-2">
              <div className="inline-block p-3 bg-gold/10 rounded-lg mb-6">
                <Globe className="w-12 h-12 text-gold" />
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Digital Showrooms
                <span className="text-gold block">
                  Websites That Build Trust
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your website should sell for you 24/7. We design premium,
                conversion-optimized sites that highlight your expertise,
                capture leads, and position your brand as the top choice in your
                market.
              </p>
              <div className="bg-secondary p-6 rounded-lg mb-8">
                <h4 className="font-semibold mb-4">Website Packages</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Luxury Website</p>
                    <p className="text-sm text-muted-foreground">
                      Ksh 120,000 - 180,000 | Fully custom experience for
                      premium brands.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Professional Website</p>
                    <p className="text-sm text-muted-foreground">
                      Ksh 60,000 - 90,000 | Balanced design and performance for
                      growing firms.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Starter Website</p>
                    <p className="text-sm text-muted-foreground">
                      Ksh 30,000 - 50,000 | Perfect for upcoming designers or
                      agents building their first online presence.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-foreground"
              >
                <Link to="/packages">
                  Explore Pricing <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service 3: Analytics & Optimization */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-gold/10 rounded-lg mb-6">
              <BarChart3 className="w-12 h-12 text-gold" />
            </div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Analytics & <span className="text-gold">Growth Optimization</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We track performance, leads, and ROI — providing clear insights
              that help you make smarter decisions, scale what’s working, and
              eliminate what’s not.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-luxury transition-smooth">
                <Zap className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Monthly Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Data-backed insights to measure what’s driving growth.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-luxury transition-smooth">
                <Target className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lead Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track inquiries and know which sources bring the best clients.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-luxury transition-smooth">
                <BarChart3 className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cost Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Transparency into acquisition costs and ROI performance.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="p-12 text-center bg-gradient-to-br from-gold/10 to-transparent border-gold/20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Let’s Build Your Growth System
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation and discover how we can help you attract
              premium clients consistently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-foreground"
              >
                <Link to="/contact">
                  Book a Strategy Call <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/packages">View Pricing</Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;
