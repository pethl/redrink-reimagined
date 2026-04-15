import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const WhyReusables = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-10">Why Reusables?</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-lg max-w-none font-body space-y-6 text-foreground/80"
        >
          <p className="text-xl leading-relaxed">
            We all know the plastic pollution problem is getting out of hand.
          </p>

          <p>
            Scientists* estimate by 2050, unless significant changes are made to plastic consumption, there will be more plastic in the oceans than fish. Plastic particles have been found in every major sea and ocean of the world, including the arctic and antarctic oceans. Some of the most common plastics found in our waterways are single-use plastic bottles, lids and cups.
          </p>

          <p>
            A reusable bottle or cup typically saves people from buying at least 150 single-use items each year. Reusables reduce the amount of waste being fed into the already seriously underperforming recycling systems. Reusables reduce pressure on the growing consumption of oil reserves to make more plastic.
          </p>

          <p>
            Giving your staff, customers, friends or prospects a beautifully branded, high-quality reusable will help reduce plastic pollution across our planet and save them money too.
          </p>

          <div className="bg-section-alt rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground italic">
              *"<strong>The New Plastics Economy: Rethinking the future of plastics</strong>", produced by the World Economic Forum and the Ellen MacArthur Foundation, with analytical support from McKinsey & Company, as part of Project MainStream. Jan 19, 2016.{" "}
              <a
                href="https://www.redrink.co.uk/content/Other/EllenMacArthurFoundation_TheNewPlasticsEconomy_Pages.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:no-underline"
              >
                Download the report
              </a>
            </p>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden">
            <img
              src="https://cdn11.bigcommerce.com/s-994v40rsjt/product_images/uploaded_images/foundation-new-plastics-economy-6.jpg"
              alt="The New Plastics Economy infographic showing projected plastic consumption growth from 2014 to 2050"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default WhyReusables;
