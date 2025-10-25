import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      client: "Luxe Interiors Nairobi",
      industry: "High-End Residential Design",
      challenge:
        "Struggling to attract premium clients despite stunning portfolio. Inquiries were inconsistent and often from price-sensitive customers.",
      solution:
        "We launched targeted Facebook and Instagram ads focusing on luxury homeowners in specific Nairobi neighborhoods. Created landing pages showcasing their high-end projects with clear CTAs.",
      results: [
        { metric: "Client Inquiries", before: "2-3/month", after: "18/month", increase: "500%" },
        { metric: "Average Project Value", before: "Ksh 450K", after: "Ksh 1.2M", increase: "167%" },
        { metric: "Ad Spend", value: "Ksh 35,000/month" },
        { metric: "Return on Ad Spend", value: "4.2x" },
      ],
      testimonial:
        "Studio Elevate completely transformed our business. We're now booking projects 3 months in advance with clients who truly value our work.",
      duration: "3 months",
    },
    {
      client: "Urban Design Co.",
      industry: "Commercial & Residential",
      challenge:
        "Wanted to expand into luxury residential market but only known for commercial projects. Website wasn't converting visitors.",
      solution:
        "Complete website redesign emphasizing residential portfolio + strategic ad campaigns targeting property developers and affluent homeowners. Implemented retargeting to warm up cold leads.",
      results: [
        { metric: "Website Traffic", before: "200/month", after: "2,400/month", increase: "1100%" },
        { metric: "Lead Quality Score", before: "3/10", after: "8.5/10", increase: "183%" },
        { metric: "Conversion Rate", before: "0.5%", after: "4.2%", increase: "740%" },
        { metric: "New Residential Clients", value: "12 in 4 months" },
      ],
      testimonial:
        "The strategic approach to our rebranding and marketing was exactly what we needed. We're now a recognized luxury residential brand.",
      duration: "4 months",
    },
    {
      client: "Elegant Spaces",
      industry: "Boutique Interior Design",
      challenge:
        "Limited marketing budget. Relying solely on word-of-mouth and boosted posts with minimal results.",
      solution:
        "Started with our Starter Test Campaign to prove concept, then scaled to Growth Plan. Focused ads on engaged couples planning home renovations.",
      results: [
        { metric: "Cost Per Lead", before: "Ksh 8,500", after: "Ksh 1,200", improvement: "86% reduction" },
        { metric: "Qualified Leads", before: "1-2/month", after: "12/month", increase: "900%" },
        { metric: "Closed Projects", value: "8 in 6 months" },
        { metric: "Total Revenue Impact", value: "Ksh 3.6M" },
      ],
      testimonial:
        "I was skeptical about paid ads, but the test campaign proved it works. Now I have a steady stream of dream clients!",
      duration: "6 months",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Success <span className="text-gold">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Real results from interior design brands we've helped elevate.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-luxury transition-smooth">
              <div className="bg-gradient-to-r from-gold/10 to-transparent p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold">{study.client}</h2>
                  <span className="px-4 py-1 bg-gold/20 text-sm rounded-full">
                    {study.industry}
                  </span>
                  <span className="px-4 py-1 bg-secondary text-sm rounded-full">
                    {study.duration}
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
                      Our Solution
                    </h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-8 mb-8">
                  <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                    <TrendingUp className="text-gold" />
                    Results
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">{result.metric}</p>
                        {result.before && (
                          <>
                            <p className="text-xs text-muted-foreground line-through mb-1">
                              {result.before}
                            </p>
                            <p className="text-2xl font-bold text-gold mb-1">{result.after}</p>
                            <p className="text-xs font-semibold text-gold">{result.increase}</p>
                          </>
                        )}
                        {result.value && (
                          <p className="text-2xl font-bold text-gold">{result.value}</p>
                        )}
                        {result.improvement && (
                          <p className="text-xs font-semibold text-gold">{result.improvement}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary rounded-lg p-6 border-l-4 border-gold">
                  <p className="text-muted-foreground italic mb-4">"{study.testimonial}"</p>
                  <p className="text-sm font-semibold">— {study.client}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Overview */}
        <section className="mt-32 mb-20">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Combined <span className="text-gold">Impact</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Users className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">48+</h3>
              <p className="text-muted-foreground">Interior Design Brands Served</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">380%</h3>
              <p className="text-muted-foreground">Average Lead Increase</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <DollarSign className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">3.8x</h3>
              <p className="text-muted-foreground">Average ROAS for Clients</p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <Card className="p-12 text-center bg-gradient-to-br from-gold/10 to-transparent border-gold/20 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your interior design brand achieve similar results.
          </p>
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
            <Link to="/contact">
              Book Your Free Strategy Call <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudies;
