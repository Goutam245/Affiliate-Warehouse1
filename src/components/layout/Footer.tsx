import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "How It Works", path: "/how-it-works" },
    { label: "Pricing", path: "/pricing" },
    { label: "Price Tracking", path: "/price-tracking" },
    { label: "Wholesalers", path: "/wholesalers" },
  ],
  Company: [
    { label: "About Us", path: "/how-it-works" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
    { label: "Apply Now", path: "/apply" },
  ],
};

const Footer = () => (
  <footer className="border-t border-primary/20 bg-card">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="text-3xl font-display font-bold text-gradient-purple">AW</span>
            <span className="text-silver font-display font-semibold text-lg">
              Affiliate Warehouse
            </span>
          </Link>
          <p className="text-secondary-custom text-sm leading-relaxed max-w-sm">
            Australia's premier trade procurement network. Corporate-tier wholesaler access,
            automated price monitoring, and transparent fee structures for electrical, HVAC,
            and solar contractors.
          </p>
          <p className="text-muted-foreground text-xs mt-6">
            🇦🇺 Proudly Australian · ABN: XX XXX XXX XXX
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-secondary-custom hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Affiliate Warehouse. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs">
          Disclaimer: All savings are estimates. Past performance does not guarantee future results.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
