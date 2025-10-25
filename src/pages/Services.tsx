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
      description: "We analyze your ideal clients and competition to create a winning strategy.",
    },
    {
      title: "Ad Creation",
      description: "Professional ad copy and visuals that showcase your premium work.",
    },
    {
      title: "Campaign Launch",
      description: "Targeted campaigns reaching luxury homeowners and decision-makers.",
    },
    {
      title: "Optimization",
      description: "Continuous testing and refinement to maximize your ROI.",
    },
    {
      title: "Monthly Reporting",
      description: "Clear insights into performance, leads generated, and cost per acquisition.",
    },
  ];

  const websiteFeatures = [
    "Mobile-responsive luxury design",
    "SEO optimized for local search",
    "Portfolio showcase with project galleries",
    "Lead capture forms that convert",
    "Fast loading speeds",
    "Professional content writing",
    "Social media integration",
    "Google Analytics setup",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Comprehensive marketing solutions designed specifically for luxury interior design brands.
          </p>
        </div>

        {/* Service 1: Targeted Ads */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block p-3 bg-gold/10 rounded-lg mb-6">
                <Target className="w-12 h-12 text-gold" />
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Social Media Marketing
                <span className="text-gold block">Targeted Ad Campaigns</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stop wasting money on boosted posts. Our targeted ad campaigns reach your ideal
                clients—luxury homeowners, property developers, and renovation clients who are
                actively looking for premium design services.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Strategic Targeting</p>
                    <p className="text-sm text-muted-foreground">
                      Reach affluent homeowners, developers, and renovation clients
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Premium Creatives</p>
                    <p className="text-sm text-muted-foreground">
                      Professional ad copy and visuals that reflect your luxury brand
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Smart Budget Optimization</p>
                    <p className="text-sm text-muted-foreground">
                      AI-powered optimization to maximize every shilling spent
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
                <Link to="/packages">
                  View Packages <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>

            <Card className="p-8 bg-secondary">
              <h3 className="font-serif text-2xl font-bold mb-6">Our Process</h3>
              <div className="space-y-6">
                {adSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Service 2: Web Design */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card className="p-8 bg-secondary order-2 md:order-1">
              <h3 className="font-serif text-2xl font-bold mb-6">What's Included</h3>
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
                Premium Web Design
                <span className="text-gold block">for Interior Designers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your website is your digital showroom. We create responsive, luxurious websites
                that showcase your portfolio and convert visitors into high-value clients.
              </p>
              <div className="bg-secondary p-6 rounded-lg mb-8">
                <h4 className="font-semibold mb-4">Website Packages</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Luxury Website</p>
                    <p className="text-sm text-muted-foreground">
                      Ksh 120,000 - 180,000 | Custom site for premium designers
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Professional Website</p>
                    <p className="text-sm text-muted-foreground">
                      Ksh 60,000 - 90,000 | For mid-range brands
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Starter Website</p>
                    <p className="text-sm text-muted-foreground">
                      Ksh 30,000 - 50,000 | For upcoming designers
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
                <Link to="/packages">
                  Explore Pricing <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service 3: Analytics */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-gold/10 rounded-lg mb-6">
              <BarChart3 className="w-12 h-12 text-gold" />
            </div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Analytics & <span className="text-gold">Optimization</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We don't just run campaigns—we provide clear, actionable insights so you understand
              exactly where your marketing budget is going and what results it's delivering.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-luxury transition-smooth">
                <Zap className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Monthly Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed performance metrics and ROI tracking
                </p>
              </Card>

              <Card className="p-6 hover:shadow-luxury transition-smooth">
                <Target className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lead Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor quality and quantity of client inquiries
                </p>
              </Card>

              <Card className="p-6 hover:shadow-luxury transition-smooth">
                <BarChart3 className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cost Per Lead</h3>
                <p className="text-sm text-muted-foreground">
                  Clear visibility into acquisition costs
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <Card className="p-12 text-center bg-gradient-to-br from-gold/10 to-transparent border-gold/20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss which services are right for your interior design brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
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
