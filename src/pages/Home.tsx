import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, TrendingUp, Award, Star } from "lucide-react";
import heroImage from "@/assets/town-house.jpg";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Luxe Interiors",
      text: "Studio Elevate helped us build a real growth foundation — not just marketing. We now attract consistent, high-value clients who truly align with our work.",
      rating: 5,
    },
    {
      name: "David Omondi",
      company: "Urban Aesthetics Realty",
      text: "Our real estate brand finally feels like a business, not just a service. The clarity, systems, and storytelling completely transformed how clients see us.",
      rating: 5,
    },
    {
      name: "Grace Wanjiru",
      company: "Elegant Spaces Studio",
      text: "They didn’t just run ads — they guided us in refining our offers, messaging, and digital presence. We’re now positioned as a premium design brand.",
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

        <div className="container mx-auto px-4 z-10 text-center flex flex-col gap-10 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Growth Partners for <br />
            <span className="text-gold"> Realtors</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground"
            >
              <Link to="/contact">
                Book a Growth Consultation{" "}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Strategy Matters Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center flex items-center min-h-[90vh] mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Scaling a Brand Takes More Than{" "}
              <span className="text-gold">Running Ads</span>
            </h2>
          </div>

          <div className="min-h-[90vh] flex items-center justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl h-screen mx-auto">
              <Card className="p-8 border-2 border-destructive/20 flex-1">
                <h3 className="font-serif text-2xl font-bold mb-4 text-destructive">
                  Short-Term Tactics
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Focused only on ads or social posts</li>
                  <li>• Brings temporary spikes, not sustainable growth</li>
                  <li>• No alignment between message and offer</li>
                  <li>• Relies on trends rather than strategy</li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-gold shadow-luxury">
                <h3 className="font-serif text-2xl font-bold mb-4 text-gold">
                  Long-Term Growth Systems
                </h3>
                <ul className="space-y-3">
                  <li>• Built for scalability and consistency</li>
                  <li>• Strategic positioning that attracts ideal clients</li>
                  <li>• Data-backed decisions and measurable results</li>
                  <li>• Sustainable brand growth, not just quick wins</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 min-h-[90vh] flex flex-col justify-center items-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Measurable Growth for{" "}
              <span className="text-gold">Realty Brands</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every strategy we create is designed to move the needle for more
              leads, stronger brand trust, and consistent sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Target className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">4x</h3>
              <p className="text-muted-foreground">
                Increase in qualified inquiries for premium listings
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">3x</h3>
              <p className="text-muted-foreground">
                Revenue growth from refined positioning & client systems
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">
                Client satisfaction with our growth strategy framework
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">
                View Brand Transformations{" "}
                <ArrowRight className="ml-2" size={20} />
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
              Realtors Who Trust{" "}
              <span className="text-gold">Studio Elevate</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-luxury transition-smooth"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
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
              Let’s Scale Your Brand Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              While you sell homes — we help you scale your brand with
              structure, strategy, and systems built for long-term growth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground"
            >
              <Link to="/contact">
                Book a Growth Consultation{" "}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
