"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS response:", res.status, res.text);
      toast.success(
        "Message sent successfully! We’ll get back within 24 hours."
      );
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Let's Build Something{" "}
            <span className="text-gold">Extraordinary</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Ready to elevate your interior design brand? Get in touch for a free
            strategy consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Send us a message
            </h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Sarah Kamau"
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

          {/* Contact Info (unchanged) */}
          {/* ... keep your info cards here ... */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
