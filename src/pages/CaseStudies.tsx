import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Luxe Interiors",
      industry: "High-End Residential Design",
      challenge:
        "realtors brands often struggle to consistently attract clients who truly value their craft. The challenge lies in building an online presence that reflects the quality of their work.",
      solution:
        "We focus on positioning designers as premium brands through strategic marketing, clean web design, and storytelling that connects emotionally with their audience.",
      vision:
        "Our goal is to help studios like Luxe Interiors establish a steady flow of high-value clients who come through trust, clarity, and a strong digital presence.",
    },
    {
      client: "Elegant Spaces Studio",
      industry: "Boutique realtors",
      challenge:
        "Many talented designers rely mainly on word-of-mouth and social media boosts, limiting how far their work can reach.",
      solution:
        "By using data-driven ad campaigns and elegant website experiences, we aim to expand their visibility and help them turn interest into booked projects.",
      vision:
        "We want to see small studios confidently compete at the same level as established design brands by using smart, accessible marketing tools.",
    },
    {
      client: "Urban Aesthetics",
      industry: "Modern realtors",
      challenge:
        "Emerging design brands often find it difficult to communicate their value clearly online, especially when targeting the luxury market.",
      solution:
        "Through refined brand positioning, visuals, and targeted ads, we create online experiences that help them stand out in a crowded space.",
      vision:
        "Our vision is to help Urban Aesthetics and similar studios grow sustainably—building recognition, attracting ideal clients, and scaling their impact.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Vision <span className="text-gold">Stories</span>
          </h1>
          {/* <p className="text-xl text-muted-foreground animate-fade-in">
            A look at the kind of growth we aim to achieve for realtors brands
            through creativity, technology, and strategy.
          </p> */}
        </div>

        {/* Case Studies */}
        {/* <div className="space-y-20 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-luxury transition-smooth"
            >
              <div className="bg-gradient-to-r from-gold/10 to-transparent p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold">
                    {study.client}
                  </h2>
                  <span className="px-4 py-1 bg-gold/20 text-sm rounded-full">
                    {study.industry}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-destructive rounded-full" />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full" />
                      Our Approach
                    </h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-8 mb-8">
                  <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                    <TrendingUp className="text-gold" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">{study.vision}</p>
                </div>

                <div className="bg-secondary rounded-lg p-6 border-l-4 border-gold">
                  <p className="text-muted-foreground italic mb-2">
                    “When you partner with us, your success story could be the
                    next one featured here.”
                  </p>
                  <p className="text-sm font-semibold">— Studio Elevate</p>
                </div>
              </div>
            </Card>
          ))}
        </div> */}

        {/* CTA */}
        <Card className="p-12 text-center bg-gradient-to-br from-gold/10 to-transparent border-gold/20 max-w-4xl mx-auto mt-32">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Let’s Build Your Success Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We’re here to help you attract the right clients, elevate your
            brand, and grow with purpose. Let’s start something that stands out.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-foreground"
          >
            <Link to="/contact">
              Book Your Free Strategy Call{" "}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudies;
