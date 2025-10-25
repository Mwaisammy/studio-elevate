import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Luxe Interiors",
      text: "Studio Elevate transformed our online presence. We went from 2-3 inquiries per month to 15+ qualified leads consistently.",
      rating: 5,
    },
    {
      name: "David Omondi",
      company: "Urban Design Co.",
      text: "Their targeted ads brought us the exact clients we wanted - luxury homeowners ready to invest in premium design.",
      rating: 5,
    },
    {
      name: "Grace Wanjiru",
      company: "Elegant Spaces",
      text: "The website they built for us is stunning and converts visitors into clients seamlessly. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Luxury Marketing for
            <span className="text-gold block mt-2">Luxury Design Brands</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            We help interior designers attract high-value clients through
            data-driven ads and stunning websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
              <Link to="/contact">
                Book a Free Strategy Call <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Targeted Ads Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Stop Wasting Money on <span className="text-gold">Boosted Posts</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Boosted posts reach everyone. Targeted ads reach your ideal clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-destructive/20">
              <h3 className="font-serif text-2xl font-bold mb-4 text-destructive">
                ❌ Boosted Posts
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Random audience with no targeting</li>
                <li>• Low engagement from unqualified viewers</li>
                <li>• No control over budget optimization</li>
                <li>• Minimal conversion tracking</li>
                <li>• Limited creative options</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-gold shadow-luxury">
              <h3 className="font-serif text-2xl font-bold mb-4 text-gold">
                ✓ Targeted Ads
              </h3>
              <ul className="space-y-3">
                <li>• Reach luxury homeowners and property developers</li>
                <li>• High-quality leads ready to invest</li>
                <li>• Smart budget allocation with AI optimization</li>
                <li>• Detailed conversion and ROI tracking</li>
                <li>• Multiple ad formats and placements</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Real Results for <span className="text-gold">Real Designers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our data-driven approach delivers consistent, measurable growth for interior design brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Target className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">450%</h3>
              <p className="text-muted-foreground">Average increase in qualified leads</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">3.2x</h3>
              <p className="text-muted-foreground">Return on ad spend for clients</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">Client satisfaction rate</p>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">
                View Case Studies <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-luxury transition-smooth">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-gold/10 to-transparent border-gold/20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you attract high-end clients and grow your interior design business.
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
              <Link to="/contact">
                Book Your Free Strategy Call <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
