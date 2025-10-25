import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-gold">Studio Elevate</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            We're not just another marketing agency. We're your strategic partner in transforming
            beautiful design work into profitable client relationships.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <Card className="p-8 hover:shadow-luxury transition-smooth">
            <Target className="w-12 h-12 text-gold mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower interior design brands with marketing that reflects their creativity and
              converts interest into loyal, high-value clients.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-luxury transition-smooth">
            <Eye className="w-12 h-12 text-gold mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where every great designer is discovered by the clients who value their craft
              and are ready to invest in excellence.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-luxury transition-smooth">
            <Heart className="w-12 h-12 text-gold mb-6" />
            <h3 className="font-serif text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              <strong>Excellence:</strong> We deliver premium results.
              <br />
              <strong>Transparency:</strong> Clear communication always.
              <br />
              <strong>Growth:</strong> Your success is our success.
            </p>
          </Card>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Studio Elevate was born from a simple observation: talented interior designers were
              struggling to reach the clients who truly valued their work. They had stunning
              portfolios, years of experience, and incredible taste—but their marketing wasn't
              converting.
            </p>
            <p>
              We saw designers wasting money on boosted posts that reached random audiences, building
              websites that looked pretty but didn't generate leads, and feeling frustrated by
              inconsistent client inquiries.
            </p>
            <p>
              That's when we decided to do things differently. We combined deep expertise in digital
              advertising with a genuine understanding of the interior design industry. The result?
              A marketing agency that speaks your language and delivers measurable results.
            </p>
            <p>
              Today, we work exclusively with interior design brands, helping them attract luxury
              homeowners, property developers, and renovation clients who are ready to invest in
              premium design services.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 bg-secondary">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="w-48 h-48 bg-gold/20 rounded-full mx-auto md:mx-0 flex items-center justify-center">
                <span className="font-serif text-6xl text-gold">SE</span>
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold mb-4">Meet the Founder</h3>
                <p className="text-muted-foreground mb-4">
                  With over 5 years of experience in digital marketing and a passion for design,
                  our founder recognized the unique challenges facing interior designers in today's
                  digital landscape.
                </p>
                <p className="text-muted-foreground">
                  After successfully helping dozens of design brands scale their businesses through
                  strategic advertising and premium web design, Studio Elevate was created to serve
                  as a dedicated marketing partner for the interior design industry.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
