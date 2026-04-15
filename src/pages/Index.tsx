import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Recycle, Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  { name: "KeepCup", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/164/972/Untitled-8__75853.1594635668.jpg?c=1" },
  { name: "Stainless Steel Geo 500ml", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/158/853/622898__32954.1580295439.jpg?c=1" },
  { name: "Ecoffee Cup", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/139/589/EcoffeeGroupLogo__30320.1579030218.jpg?c=1" },
  { name: "Stainless Steel Special 500ml", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/126/410/569498__43195.1578409146.jpg?c=1" },
];

const popularProducts = [
  { name: "The Phil Morgan Bottle", price: "£30.00", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/119/953/beach2-bottle__94396.1592819560.jpg?c=1" },
  { name: "School Bottle - Recycled", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/167/1000/KidsPic__02281.1600078288.jpg?c=1" },
  { name: "Barista Café Glass Cup 12oz", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/166/993/OLD488-Cafe-glass-cup-black__95378.1596464290.jpg?c=1" },
  { name: "Takeout Bamboo Double Walled", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/165/986/126272a__84234.1594895155.jpg?c=1" },
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

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/1280w/carousel/49/5bottles.jpg?c=1')] bg-cover bg-center opacity-20" />
      <div className="relative container py-24 md:py-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight"
        >
          Sustainable Reusable
          <br />
          Branded Drinkware
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body"
        >
          ReThink. ReUse. ReDrink. Beautiful branded drinkware that helps reduce plastic pollution across our planet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" variant="secondary" className="font-body font-semibold">
            <Link to="/catalogue">Browse Catalogue <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-body font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </motion.div>
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

    {/* Most Popular */}
    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <h2 className="font-display text-3xl font-bold text-center mb-10">Most Popular</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularProducts.map((p, i) => (
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
                {p.price && <p className="text-primary font-semibold text-sm mt-1">{p.price}</p>}
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

export default Index;
