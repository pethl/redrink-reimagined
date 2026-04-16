import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Recycle, Droplets, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/1280w/carousel/49/5bottles.jpg?c=1",
    headline: "Sustainable Reusable\nBranded Drinkware",
    subtext: "ReThink. ReUse. ReDrink. Beautiful branded drinkware that helps reduce plastic pollution across our planet.",
  },
  {
    image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/119/953/beach2-bottle__94396.1592819560.jpg?c=1",
    headline: "The Phil Morgan Bottle",
    subtext: "From our artist collaboration series. A celebration of creativity, made for everyday use.",
  },
  {
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=1280&q=80",
    headline: "The Plastic Problem",
    subtext: "8 million tonnes of plastic enter our oceans every year. Reusable drinkware is one of the simplest ways to make a difference.",
  },
  {
    image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/167/1000/KidsPic__02281.1600078288.jpg?c=1",
    headline: "School Bottles – Recycled",
    subtext: "Teach the next generation to reuse. Our recycled school bottles are BPA-free, durable, and fully brandable.",
  },
];

const featuredProducts = [
  { name: "Ecoffee Cup", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/139/589/EcoffeeGroupLogo__30320.1579030218.jpg?c=1" },
  { name: "Stainless Steel Special 500ml", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/126/410/569498__43195.1578409146.jpg?c=1" },
  { name: "Barista Café Glass Cup 12oz", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/166/993/OLD488-Cafe-glass-cup-black__95378.1596464290.jpg?c=1" },
  { name: "Takeout Bamboo Double Walled", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/165/986/126272a__84234.1594895155.jpg?c=1" },
  { name: "The Phil Morgan Bottle", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/119/953/beach2-bottle__94396.1592819560.jpg?c=1" },
  { name: "School Bottle - Recycled", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/167/1000/KidsPic__02281.1600078288.jpg?c=1" },
];

const values = [
  { icon: Leaf, title: "Sustainable", description: "Eco-friendly materials reducing environmental impact" },
  { icon: Recycle, title: "Reusable", description: "Save 150+ single-use items per person each year" },
  { icon: Droplets, title: "Branded", description: "Beautifully custom-branded for your organisation" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  const [current, setCurrent] = useState(0);
  const len = heroSlides.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % len), [len]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + len) % len), [len]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <Layout>
      {/* Hero Carousel */}
      <section className="relative bg-primary overflow-hidden h-[420px] md:h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroSlides[current].image}')` }}
            />
            <div className="absolute inset-0 bg-primary/70" />
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full container flex flex-col items-center justify-center text-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight whitespace-pre-line">
                {heroSlides[current].headline}
              </h1>
              <p className="mt-4 text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto font-body">
                {heroSlides[current].subtext}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-body font-semibold">
              <Link to="/catalogue">Browse Catalogue <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-body font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Nav arrows */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground transition-colors" aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/40 text-primary-foreground transition-colors" aria-label="Next slide">
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-body font-medium text-sm">{p.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to brand your drinkware?</h2>
          <p className="mt-4 text-primary-foreground/80 font-body">
            With 25 years of experience in branded promotional merchandise, we'll find the perfect solution for your needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 font-body font-semibold">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;