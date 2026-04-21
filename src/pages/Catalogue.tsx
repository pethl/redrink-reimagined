import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import tulipTumbler from "@/assets/tulip-tumbler.jpg";
import blackThermoMug from "@/assets/black-thermo-mug.jpg";
import camelbakChute from "@/assets/camelbak-chute.jpg";
import ceramicTakeout from "@/assets/ceramic-takeout.jpg";
import shakermate from "@/assets/shakermate.jpg";
import aluminiumCarabiner from "@/assets/aluminium-carabiner.jpg";
import gripSportBottle from "@/assets/grip-sport-bottle.jpg";
import canteenStainless from "@/assets/canteen-stainless.jpg";
import tritanBottle from "@/assets/tritan-bottle.jpg";

type Product = {
  name: string;
  brand: string;
  category: string;
  image: string;
  price?: string;
  description?: string;
};

const PLACEHOLDER = `${import.meta.env.BASE_URL}placeholder.svg`;

const products: Product[] = [
  // ── Existing ──────────────────────────────────────────────────────────────
  { name: "KeepCup", brand: "KeepCup", category: "Cups", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/164/972/Untitled-8__75853.1594635668.jpg?c=1" },
  { name: "Stainless Steel Geo 500ml", brand: "ReDrink", category: "Bottles", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/158/853/622898__32954.1580295439.jpg?c=1" },
  { name: "Ecoffee Cup", brand: "Ecoffee Cup®", category: "Cups", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/139/589/EcoffeeGroupLogo__30320.1579030218.jpg?c=1" },
  { name: "Stainless Steel Special 500ml", brand: "ReDrink", category: "Bottles", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/126/410/569498__43195.1578409146.jpg?c=1" },
  { name: "The Phil Morgan Bottle", brand: "ReDrink", category: "Bottles", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/119/953/beach2-bottle__94396.1592819560.jpg?c=1" },
  { name: "School Bottle - Recycled", brand: "ReDrink", category: "Bottles", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/167/1000/KidsPic__02281.1600078288.jpg?c=1" },
  { name: "Barista Café Glass Cup 12oz", brand: "ReDrink", category: "Cups", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/166/993/OLD488-Cafe-glass-cup-black__95378.1596464290.jpg?c=1" },
  { name: "Takeout Bamboo Double Walled", brand: "ReDrink", category: "Cups", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/165/986/126272a__84234.1594895155.jpg?c=1" },
  { name: "Lake 600 ml", brand: "ReDrink", category: "Bottles", image: "https://cdn11.bigcommerce.com/s-994v40rsjt/images/stencil/500x659/products/163/899/118590__87264.1583921992.jpg?c=1" },

  // ── Bottles · Single-walled ───────────────────────────────────────────────
  { name: "CamelBak Chute Mag", brand: "Camelbak", category: "Bottles", image: camelbakChute, description: "Hydration made simple. Chute Mag delivers high flow without the mess. The universal cap features a magnetic top that stows securely out of the way when open, is leak-proof when closed, has an easy carry handle, and is compatible with Eddy+ and Hot Cap vessels. Lightweight, durable, and dishwasher safe. BPA, BPS, and BPF free. Available in 600ml, 750ml and 1L capacity. Your logo in a one colour print." },
  { name: "Shakermate Protein Shaker", brand: "Shakermate", category: "Bottles", image: shakermate, description: "Introducing Shakermate Full Colour - The World's first Full Colour Protein Shaker. Also available in spot colour. This 700ml/24oz Shakermate features an integrated mesh mixer, rounded inner base for easier cleaning, 10 mix & match lid and clip colours and displays capacity levels to either side in ml/oz. Print available front & back." },
  { name: "Aluminium 770ml Sport Bottle with Carabiner", brand: "ReDrink", category: "Bottles", image: aluminiumCarabiner, description: "Aluminium sport bottle with carabiner. Single wall bottle with twist-on lid. BPA-free aluminium. Carabiner is not suitable for climbing.   Product Spec Sheet" },
  { name: "Grip Sport Bottle 750 ml", brand: "ReDrink", category: "Bottles", image: gripSportBottle, description: "750 ml sport bottle. Single-walled bottle with twist-on lid. Center rubberized grip. Volume capacity is 750 ml. BPA-free aluminium." },
  { name: "Eco 650 ml Spout Lid Sport Bottle", brand: "H2O Active®", category: "Bottles", image: PLACEHOLDER },

  // ── Bottles · Double-walled ───────────────────────────────────────────────
  { name: "Canteen - Stainless Steel - 500ml", brand: "ReDrink", category: "Bottles", image: canteenStainless, description: "Double-walled, leak-proof stainless steel water bottle/thermo bottle. The handy screw cap is a made of a combination of stainless steel and bamboo. Suitable for maintaining the temperature of cold or hot drinks. Design based on the vintage glass milk bottle. Capacity 500 ml.   Product Spec Sheet" },
  { name: "Stainless Steel Sport Bottle 740 ml", brand: "ReDrink", category: "Bottles", image: PLACEHOLDER },
  { name: "Tritan Bottle 750ml", brand: "ReDrink", category: "Bottles", image: tritanBottle, description: "BPA free Tritan water bottle with stainless steel base and screw top and transparent body. Handwash only. 750ml" },
  { name: "Collapsible Bottle", brand: "ReDrink", category: "Bottles", image: PLACEHOLDER },
  { name: "Glass Window Bottle", brand: "ReDrink", category: "Bottles", image: PLACEHOLDER },
  { name: "540 ml Glass Sport Bottle with Wood Lid", brand: "ReDrink", category: "Bottles", image: PLACEHOLDER },
  { name: "Recycled Aluminium Drinks Bottle 350ml", brand: "ReDrink", category: "Bottles", image: PLACEHOLDER },

  // ── Cups ──────────────────────────────────────────────────────────────────
  { name: "Tulip Tumbler", brand: "ReDrink", category: "Cups", image: tulipTumbler },
  { name: "Black Steel Thermo Mug", brand: "ReDrink", category: "Cups", image: blackThermoMug },
  { name: "Americano® Tumbler", brand: "Americano®", category: "Cups", image: PLACEHOLDER },
  { name: "Ceramic Takeout", brand: "ReDrink", category: "Cups", image: ceramicTakeout, description: "A double-walled, vacuum-sealed Takeaway coffee mug. Manufactured from traditional ceramic earthenware but with a contemporary shape and double-walled design. Supplied with press on lid." },
  { name: "Recycled Takeout Coffee Cup", brand: "ReDrink", category: "Cups", image: PLACEHOLDER },
];

const brands = ["All", ...Array.from(new Set(products.map((p) => p.brand)))];
const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const Catalogue = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchBrand = brand === "All" || p.brand === brand;
      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchBrand && matchCategory;
    });
  }, [search, brand, category]);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-10">Catalogue</h1>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-10 items-end">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 font-body"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={category === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(c)}
                  className="font-body text-xs"
                >
                  {c}
                </Button>
              ))}
            </div>

            <div className="flex gap-2 flex-wrap">
              {brands.map((b) => (
                <Button
                  key={b}
                  variant={brand === b ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBrand(b)}
                  className="font-body text-xs"
                >
                  {b}
                </Button>
              ))}
            </div>
          </div>

          {/* Products grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-12">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {p.description && (
                      <div className="absolute inset-0 bg-primary/90 text-primary-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center overflow-y-auto">
                        <p className="font-body text-xs leading-relaxed">{p.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground font-body">{p.brand}</p>
                    <h3 className="font-body font-medium text-sm mt-1">{p.name}</h3>
                    {p.price && <p className="text-primary font-semibold text-sm mt-1">{p.price}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogue;
