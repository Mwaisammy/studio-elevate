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
      text: "Studio Elevate helped us bring structure and clarity to our marketing. The consistency we gained has completely changed how clients find us.",
      rating: 5,
    },
    {
      name: "David Omondi",
      company: "Urban Aesthetics",
      text: "We now attract the type of clients who truly appreciate our design work. The strategy and guidance made all the difference.",
      rating: 5,
    },
    {
      name: "Grace Wanjiru",
      company: "Elegant Spaces",
      text: "From our new website to our ads — everything feels intentional, calm, and aligned with our brand. It’s exactly what we needed.",
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Modern Marketing for
            <span className="text-gold block mt-2">Interior Designers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
            We help interior designers attract high-value clients through
            strategic ads and beautifully designed websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground"
            >
              <Link to="/contact">
                Book a Free Strategy Call{" "}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Targeted Ads Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              There’s a Better Way Than{" "}
              <span className="text-gold">Boosting Posts</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Boosting posts can bring attention. But targeted marketing brings
              results — the right clients, more inquiries, and steady growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 border-destructive/20">
              <h3 className="font-serif text-2xl font-bold mb-4 text-destructive">
                Boosted Posts
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Reach everyone but not necessarily your ideal client</li>
                <li>• Little control over who sees your work</li>
                <li>• Hard to measure what actually works</li>
                <li>• Often leads to inconsistent inquiries</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-gold shadow-luxury">
              <h3 className="font-serif text-2xl font-bold mb-4 text-gold">
                Targeted Ads
              </h3>
              <ul className="space-y-3">
                <li>• Reach people who value interior design</li>
                <li>• Build predictable inquiries and visibility</li>
                <li>• Measure results with full clarity</li>
                <li>• Save time and focus on what you do best — design</li>
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
              Meaningful Results for{" "}
              <span className="text-gold">Interior Designers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              When your marketing feels calm, consistent, and clear — it shows
              in your results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Target className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">3x</h3>
              <p className="text-muted-foreground">
                Increase in qualified client inquiries
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">2.5x</h3>
              <p className="text-muted-foreground">
                Return on ad spend through smart targeting
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-luxury transition-smooth">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-4xl font-bold mb-2">95%</h3>
              <p className="text-muted-foreground">
                Client satisfaction with our marketing process
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/case-studies">
                See Vision Stories <ArrowRight className="ml-2" size={20} />
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
              Designers Who Trust{" "}
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
              Let’s Elevate Your Design Brand
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We’ll help you grow your design studio with ease — more
              visibility, better clients, and a brand that truly reflects your
              creativity.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-foreground"
            >
              <Link to="/contact">
                Book a Free Strategy Call{" "}
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
