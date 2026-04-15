import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const PromotionalMerchandise = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-10">Promotional Merchandise</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-body space-y-6 text-foreground/80 text-lg leading-relaxed"
        >
          <p>
            Whilst reusable bottles and cups may be our passion the environmental and ethical revolution doesn't stop there. Large steps have been made in other areas of promotional merchandise. We have 25 years of experience in the branded promotional merchandise world so if you would like a quote or maybe some environmental options or ideas in this field please get in touch.
          </p>

          <p>
            We prefer to hear your needs and supply solutions tailored to your brief but for a wider idea of what is available a catalogue view of the market place can be seen here:
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="font-body font-semibold">
              <a href="https://redrink.prod-cat.com/" target="_blank" rel="noopener noreferrer">
                ReDrink Merchandise Catalogue <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-body font-semibold">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PromotionalMerchandise;
