import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Simulate sending email (replace with actual email service)
    setTimeout(() => {
      console.log("Form data:", data);
      toast.success("Thank you! We'll be in touch within 24 hours.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Let's Build Something <span className="text-gold">Extraordinary</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Ready to elevate your interior design brand? Get in touch for a free strategy
            consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="font-serif text-3xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Sarah Mitchell"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="sarah@luxeinteriors.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Your Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your interior design brand and what you're looking to achieve..."
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold-dark text-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 hover:shadow-luxury transition-smooth">
              <Mail className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a
                href="mailto:info@studioelevate.co.ke"
                className="text-gold hover:underline"
              >
                info@studioelevate.co.ke
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                For general inquiries and project discussions
              </p>
            </Card>

            <Card className="p-8 hover:shadow-luxury transition-smooth">
              <Phone className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Call or WhatsApp</h3>
              <a href="tel:+254700000000" className="text-gold hover:underline">
                +254 700 000 000
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Monday - Friday, 9:00 AM - 6:00 PM EAT
              </p>
            </Card>

            <Card className="p-8 hover:shadow-luxury transition-smooth">
              <MapPin className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-foreground">Nairobi, Kenya</p>
              <p className="text-sm text-muted-foreground mt-2">
                Serving interior designers across East Africa
              </p>
            </Card>

            {/* Quick Links */}
            <Card className="p-8 bg-gradient-to-br from-gold/10 to-transparent border-gold/20">
              <h3 className="font-serif text-2xl font-bold mb-4">Not ready to talk?</h3>
              <p className="text-muted-foreground mb-6">
                That's okay! Explore our packages or check out our case studies to see what we can
                do for your brand.
              </p>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <a href="/packages">View Pricing Packages</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="/case-studies">Read Success Stories</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <Card className="p-12 bg-secondary">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Prefer to schedule a call directly?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a free 30-minute strategy session to discuss your goals
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground">
              <a
                href="https://calendly.com/studioelevate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Your Free Call
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
