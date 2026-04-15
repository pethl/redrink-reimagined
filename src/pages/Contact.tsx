import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-center text-muted-foreground font-body max-w-xl mx-auto mb-12">
              Do you have a question about any of our products? Looking for something you can't see? Unsure which product fits your need or which of the many branding options suits your logo?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-sm">Address</h3>
                  <p className="text-sm text-muted-foreground">Penarth, CF64 2ND, UK</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-sm">Phone</h3>
                  <a href="tel:02920701817" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    02920 701817
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              onSubmit={handleSubmit}
              className="md:col-span-2 space-y-5 bg-card border border-border rounded-lg p-6 md:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body text-sm">Full Name</Label>
                  <Input id="name" placeholder="Your name" className="font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body text-sm">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Your phone" className="font-body" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-sm">Email Address <span className="text-destructive">*</span></Label>
                  <Input id="email" type="email" required placeholder="you@company.com" className="font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-body text-sm">Company Name</Label>
                  <Input id="company" placeholder="Your company" className="font-body" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body text-sm">Comments/Questions <span className="text-destructive">*</span></Label>
                <Textarea id="message" required rows={5} placeholder="Tell us about your needs..." className="font-body resize-none" />
              </div>

              <Button type="submit" size="lg" disabled={loading} className="font-body font-semibold w-full sm:w-auto">
                {loading ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
