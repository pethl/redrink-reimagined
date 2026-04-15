import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <span className="font-display text-xl font-bold text-background">ReDrink</span>
          <p className="mt-3 text-sm leading-relaxed text-background/60">
            Sustainable reusable branded drinkware. ReThink. ReUse. ReDrink.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-background mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/why-reusables" className="hover:text-background transition-colors">Why Reusables?</Link></li>
            <li><Link to="/promotional-merchandise" className="hover:text-background transition-colors">Promotional Merchandise</Link></li>
            <li><Link to="/catalogue" className="hover:text-background transition-colors">Catalogue</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-background mb-4">Popular Brands</h4>
          <ul className="space-y-2 text-sm">
            <li>Camelbak</li>
            <li>Contigo</li>
            <li>Ecoffee Cup®</li>
            <li>KeepCup</li>
            <li>rCUP</li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-semibold text-background mb-4">Info</h4>
          <address className="not-italic text-sm space-y-1">
            <p>Penarth, CF64 2ND, UK</p>
            <p>Call us at <a href="tel:02920701817" className="hover:text-background transition-colors">02920 701817</a></p>
          </address>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/40">
        © {new Date().getFullYear()} ReDrink. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
